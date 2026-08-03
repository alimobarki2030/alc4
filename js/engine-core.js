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

// ─── SPEECH ───
function say(t){
  if(!window.speechSynthesis)return;
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(String(t).replace(/\(.*?\)/g,'').trim());
  u.lang='en-US';u.rate=0.82;speechSynthesis.speak(u);
}

// ─── NAVIGATION ───
function show_screen(id){SCREENS.forEach(s=>{const el=document.getElementById(s);if(el)el.style.display=(s===id)?'block':'none';});track_screen(id);}

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
