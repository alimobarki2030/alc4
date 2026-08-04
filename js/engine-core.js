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
  // Arrived here via a grammar-hub deep link (?open=…)? Then this book has no
  // home to show the visitor — send them back to the site homepage instead.
  if(window.CONCEPT_DEEPLINK){location.href='/';return;}
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

// ─── VOCAB ICONS ───
// For abstract words with no fitting emoji (grammar/writing/geometry terms), a
// vocab item can set `icon:'name'` instead of relying on `em`. These are clean
// line icons (Lucide style) rendered inline — scalable, offline, and visually
// consistent with the rest of the UI. vIcon() prefers the icon and falls back
// to the emoji, so existing data (emoji only) keeps working unchanged.
const VOCAB_ICONS={
  'align-left':'<line x1="21" x2="3" y1="6" y2="6"/><line x1="15" x2="3" y1="12" y2="12"/><line x1="17" x2="3" y1="18" y2="18"/>',
  'pilcrow':'<path d="M13 4v16"/><path d="M17 4v16"/><path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13"/>',
  'indent':'<polyline points="3 8 7 12 3 16"/><line x1="21" x2="11" y1="12" y2="12"/><line x1="21" x2="11" y1="6" y2="6"/><line x1="21" x2="11" y1="18" y2="18"/>',
  'quote':'<path d="M10 11H6a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2h1a1 1 0 0 1 1 1v7a4 4 0 0 1-4 4"/><path d="M20 11h-4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2h1a1 1 0 0 1 1 1v7a4 4 0 0 1-4 4"/>',
  'spell-check':'<path d="m6 16 6-12 6 12"/><path d="M8 12h8"/><path d="m16 20 2 2 4-4"/>',
  'triangle':'<path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>'
};
function vIcon(o){
  if(o&&o.icon&&VOCAB_ICONS[o.icon]){
    return '<svg class="vico" viewBox="0 0 24 24" fill="none" stroke="currentColor" '+
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+
      VOCAB_ICONS[o.icon]+'</svg>';
  }
  return (o&&o.em)?o.em:'';
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
