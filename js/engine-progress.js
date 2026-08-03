// ═══════════════════════════════════════
// ENGINE — PROGRESS PERSISTENCE (localStorage)
// PKEY is derived per-book from BOOK_ID (set in the book's data file), so
// existing users' saved-progress keys are unaffected by this refactor
// (BOOK_ID='book4'/'book5' reproduce today's exact localStorage keys).
// ═══════════════════════════════════════
const PKEY=`alc_${BOOK_ID}_progress`;
let STORAGE_OK=true;
try{const t='__alc_test__';localStorage.setItem(t,'1');localStorage.removeItem(t);}
catch(e){STORAGE_OK=false;}
function show_storage_warning(){
  if(STORAGE_OK)return;
  if(document.getElementById('storage-warn'))return;
  const w=document.createElement('div');
  w.id='storage-warn';
  w.style.cssText="background:#FEF3C7;color:#92400E;border:1.5px solid #FCD34D;border-radius:12px;padding:12px 16px;margin:12px;font-family:'Cairo',sans-serif;font-size:.82rem;font-weight:700;text-align:center;line-height:1.6";
  w.innerHTML="⚠️ متصفحك يمنع حفظ التقدّم (غالبًا وضع التصفّح الخفي). للحفظ: افتح الموقع في نافذة عادية — وليست خاصة/خفية.";
  document.body.insertBefore(w,document.body.firstChild);
}
function save_progress(){
  if(!STORAGE_OK)return;
  try{localStorage.setItem(PKEY,JSON.stringify({xp:XP,streak:STK,lessons:LP,rw:RW}));}
  catch(e){STORAGE_OK=false;show_storage_warning();}
}
function apply_lessons(){
  LESSON_KEYS.forEach(lk=>{
    const L=LP[lk];
    const card=document.getElementById('hc-'+lk);
    const bar=document.getElementById('lp-'+lk);
    if(!card)return;
    let sc=document.getElementById('ls-'+lk);
    if(!sc){sc=document.createElement('div');sc.className='lcard-score';sc.id='ls-'+lk;card.appendChild(sc);}
    if(L&&typeof L.pct==='number'){
      if(bar)bar.style.width=L.pct+'%';
      card.classList.toggle('done',!!L.done);
      sc.textContent=L.done?`أفضل نتيجة ${L.pct}% ✓`:`أفضل نتيجة ${L.pct}%`;
      sc.style.color=L.done?'var(--g)':'var(--o)';
    }else{
      if(bar)bar.style.width='0%';
      card.classList.remove('done');
      sc.textContent='';
    }
  });
  const fb=document.getElementById('final-badge');
  if(fb){
    const F=LP.final;
    fb.textContent=(F&&typeof F.pct==='number')?`أفضل نتيجة ${F.pct}%${F.done?' ✓':''}`:'ابدأ الاختبار';
  }
  const rb=document.getElementById('review-badge');
  if(rb){
    const R=LP.review;
    rb.textContent=(R&&typeof R.pct==='number')?`أفضل نتيجة ${R.pct}%${R.done?' ✓':''}`:'ابدأ المراجعة';
  }
}
// Fixed: denominator is now derived from LESSON_KEYS.length instead of a
// hardcoded /4, so books with a different lesson count report correctly.
function upd_global(){
  const done=document.querySelectorAll('.lcard.done').length;
  const total=LESSON_KEYS.length;
  const pct=total?(done/total*100):0;
  const fill=document.getElementById('gpfill');
  const txt=document.getElementById('gptxt');
  if(fill)fill.style.width=pct+'%';
  if(txt)txt.textContent=`${done} من ${total} دروس مكتملة`;
}
// Fixed: always calls both apply_lessons() and upd_global(), even on a
// first-ever visit with no saved data (Book 5 previously skipped upd_global
// entirely; Book 4 previously skipped both when there was no saved data).
function load_progress(){
  let data=null;
  try{data=JSON.parse(localStorage.getItem(PKEY));}catch(e){}
  if(data){
    XP=data.xp||0;STK=data.streak||0;LP=data.lessons||{};RW=data.rw||{};
    document.getElementById('xp').textContent=XP;
    document.getElementById('streak').textContent=STK;
  }
  apply_lessons();
  upd_global();
}
if(!STORAGE_OK)show_storage_warning();

function reset_progress(){
  if(!confirm('⚠️ تحذير: سيُمسح كل تقدّمك (الدرجات والـ XP) ولا يمكن التراجع.\n\nهل أنت متأكد تماماً؟'))return;
  try{localStorage.removeItem(PKEY);}catch(e){}
  location.reload();
}

// ─── WELCOME BANNER (Book 4's onboarding banner) ───
// Guarded on #welcome-banner's presence so this is a safe no-op on books
// (like Book 5, currently) whose HTML doesn't ship that markup.
const WKEY='alc_welcomed';
function show_welcome_if_new(){
  const el=document.getElementById('welcome-banner');
  if(!el)return;
  try{
    const seen=localStorage.getItem(WKEY);
    if(!seen)el.style.display='block';
  }catch(e){}
}
function dismiss_welcome(){
  const el=document.getElementById('welcome-banner');
  if(el)el.style.display='none';
  try{localStorage.setItem(WKEY,'1');}catch(e){}
}
function dismiss_welcome_start(){
  dismiss_welcome();
  open_lesson('l1');
}

// ─── STREAK COMEBACK BANNER ───
// Gated on the same #welcome-banner marker as the welcome banner above —
// that element is this engine's signal that a book ships the onboarding UI
// bundle. Without it (Book 5, currently) this stays a safe no-op, so no new
// UI silently appears on a book that never had this feature.
const STREAK_DATE_KEY='alc_last_streak_date';
function check_streak_comeback(){
  if(!STORAGE_OK)return;
  if(!document.getElementById('welcome-banner'))return;
  const home=document.getElementById('home');
  if(!home)return;
  try{
    const last=localStorage.getItem(STREAK_DATE_KEY);
    const today=new Date().toDateString();
    if(last && last!==today && STK===0){
      const banner=document.createElement('div');
      banner.className='streak-comeback';
      banner.innerHTML=`<span class="sc-ico">💪</span>
        <div class="sc-txt"><h3>عودة مرحباً!</h3>
        <p>انتهى الـ streak، لكن الأهم أنك رجعت — ابدأ streak جديداً اليوم.</p></div>
        <button class="sc-close" onclick="this.parentElement.remove()">✕</button>`;
      home.insertBefore(banner, home.firstChild);
    }
    localStorage.setItem(STREAK_DATE_KEY,today);
  }catch(e){}
}

// ─── Deep link into a grammar/concept screen (e.g. book4.html?open=prep) ───
// Values are function-name strings, resolved via window[...] at dispatch
// time (not direct function references) — that's what keeps this a safe
// no-op on books like Book 5 that don't load an engine-concepts.js /
// concepts-*.js registry defining open_prep/open_art/etc.
const GRAMMAR_OPEN_MAP={prep:'open_prep',art:'open_art',wh:'open_wh',pronouns:'open_pn',modals:'open_modal',time:'open_time',iv:'open_iv'};

(function init_progress_and_routing(){
  show_welcome_if_new();
  load_progress();
  check_streak_comeback();
  const openParam=new URLSearchParams(location.search).get('open');
  const fnName=openParam&&GRAMMAR_OPEN_MAP[openParam];
  if(fnName&&typeof window[fnName]==='function')window[fnName]();
  else track_screen('home');
})();

// ─── BACK-TO-TOP FAB ───
(function(){
  const btn=document.getElementById('top-fab');
  if(!btn)return;
  window.addEventListener('scroll',()=>{
    btn.classList.toggle('show',window.scrollY>300);
  },{passive:true});
})();
