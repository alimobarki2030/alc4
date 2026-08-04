// ═══════════════════════════════════════
// ENGINE — CORE
// Shared across every book: state, navigation, speech.
// No dependency on any book's data file at parse time — everything here
// only touches book-specific consts (SCREENS, SCREEN_NAMES, ...) inside
// function bodies, so this file is safe to load before the data file.
// ═══════════════════════════════════════

// ─── SHARED STATE ───
let CL=null,CT='learn',XP=0,STK=0,TANS={},built={};
let LP={};
let RW={};
let MISTAKES={}; // bank of missed quiz questions, keyed by question text

// ─── SPEECH ───
// Picks the best-quality English voice available on the visitor's own
// device instead of whatever the browser defaults to (often the most
// basic/robotic one) — free, no backend, works with whatever the device
// already has installed. Voices load asynchronously in most browsers, so
// we cache the list and refresh it on the 'voiceschanged' event.
let _voices=[];
function _loadVoices(){ if(window.speechSynthesis)_voices=speechSynthesis.getVoices()||[]; }
if(window.speechSynthesis){
  _loadVoices();
  speechSynthesis.addEventListener('voiceschanged',_loadVoices);
}
function _pickVoice(){
  const en=_voices.filter(v=>v.lang&&v.lang.toLowerCase().startsWith('en'));
  if(!en.length)return null;
  const score=v=>{
    const n=v.name.toLowerCase();
    if(n.includes('natural')||n.includes('neural'))return 5; // e.g. Edge's "Online (Natural)" voices
    if(n.includes('google'))return 4;
    if(n.includes('enhanced')||n.includes('premium'))return 3; // e.g. macOS/iOS enhanced voices
    if(v.lang.toLowerCase()==='en-us')return 2;
    return 1;
  };
  return en.slice().sort((a,b)=>score(b)-score(a))[0];
}
function say(t){
  if(!window.speechSynthesis)return;
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(String(t).replace(/\(.*?\)/g,'').trim());
  const v=_pickVoice();
  if(v){u.voice=v;u.lang=v.lang;}else{u.lang='en-US';}
  u.rate=0.82;speechSynthesis.speak(u);
}

// ─── NAVIGATION ───
function show_screen(id){
  SCREENS.forEach(s=>{const el=document.getElementById(s);if(el)el.style.display=(s===id)?'block':'none';});
  // Stop the YouTube player when leaving the listening screen — hiding the
  // iframe alone keeps it playing (audio) in the background.
  if(id!=='ytscreen'){const yt=document.getElementById('yt-iframe');if(yt&&yt.src&&yt.src!=='about:blank')yt.src='about:blank';}
  track_screen(id);
}

let _curScreen=null,_screenStart=0;
function track_screen(id){
  if(typeof gtag!=='function')return;
  const now=Date.now();
  if(_curScreen&&_screenStart){
    const secs=Math.round((now-_screenStart)/1000);
    if(secs>0&&secs<7200)gtag('event','section_time',{section:SCREEN_NAMES[_curScreen]||_curScreen,seconds:secs});
  }
  let name=SCREEN_NAMES[id]||id;
  if(id==='lscreen'&&typeof CL==='string'&&CL)name='درس '+CL.toUpperCase();
  gtag('event','section_view',{section:name});
  _curScreen=id;_screenStart=now;
}
// Flushes the current screen's dwell time when the tab is hidden/closed
// without another in-site navigation (e.g. the learner just closes the tab
// while reading a lesson) — otherwise that dwell time is never recorded.
function _flush_screen_time(){
  if(typeof gtag!=='function'||!_curScreen||!_screenStart)return;
  const secs=Math.round((Date.now()-_screenStart)/1000);
  if(secs>0&&secs<7200)gtag('event','section_time',{section:SCREEN_NAMES[_curScreen]||_curScreen,seconds:secs});
  _screenStart=Date.now();
}
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')_flush_screen_time();});
window.addEventListener('pagehide',_flush_screen_time);

function go_home(){
  show_screen('home');
  window.scrollTo({top:0,behavior:'smooth'});
}

// ─── GENERIC UTILITY ───
// dedupe_by_q lives here (not engine-lessons.js) because a book's data file
// calls it synchronously at parse time — e.g. `FINAL=dedupe_by_q([...])` —
// so it must already be defined before the data file loads. engine-core.js
// has zero data-file dependencies, so loading it first is safe.
function dedupe_by_q(arr){
  const seen=new Set();
  return arr.filter(q=>{
    const k=q.q.trim()+'|'+q.o.join(',');
    if(seen.has(k))return false;
    seen.add(k);
    return true;
  });
}
// Fisher-Yates in-place shuffle (unbiased). Returns the same array reference
// so callers that share it (e.g. EE[CL] === the rendered array) stay aligned.
function shuffle_arr(a){
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}

// ─── ACCESSIBILITY ───
// Speaker buttons hold only an aria-hidden volume icon, so a screen reader
// announces nothing. Give every one an Arabic accessible name — both the
// buttons present at load and the many the engine injects after each render
// (a MutationObserver keeps up with re-renders without re-labelling by hand).
function _labelSpeakerButtons(root){
  const scope=(root&&root.querySelectorAll)?root:document;
  scope.querySelectorAll('button:not([aria-label])').forEach(b=>{
    if(b.querySelector('use[href="#icon-volume-2"]'))b.setAttribute('aria-label','استماع');
  });
}
if(typeof document!=='undefined'){
  const _startA11y=()=>{
    _labelSpeakerButtons(document);
    if(window.MutationObserver&&document.body){
      new MutationObserver(muts=>{
        muts.forEach(m=>m.addedNodes.forEach(n=>{if(n.nodeType===1)_labelSpeakerButtons(n);}));
      }).observe(document.body,{childList:true,subtree:true});
    }
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',_startA11y);
  else _startA11y();
}
