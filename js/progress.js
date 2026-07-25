// ═══════════════════════════════════════
// PROGRESS PERSISTENCE (localStorage)
// ═══════════════════════════════════════
const PKEY='alc_book4_progress';
// Check that the browser actually allows saving (Private Browsing on iOS blocks it)
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
  try{localStorage.setItem(PKEY,JSON.stringify({xp:XP,streak:STK,lessons:LP}));}
  catch(e){STORAGE_OK=false;show_storage_warning();}
}
function apply_lessons(){
  ['l1','l2','l3','l4'].forEach(lk=>{
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
}
function load_progress(){
  let data=null;
  try{data=JSON.parse(localStorage.getItem(PKEY));}catch(e){}
  if(!data)return;
  XP=data.xp||0;STK=data.streak||0;LP=data.lessons||{};
  document.getElementById('xp').textContent=XP;
  document.getElementById('streak').textContent=STK;
  apply_lessons();
  upd_global();
}
if(!STORAGE_OK)show_storage_warning();

// ─── STREAK COMEBACK BANNER ───
const STREAK_DATE_KEY='alc_last_streak_date';
function check_streak_comeback(){
  if(!STORAGE_OK)return;
  try{
    const last=localStorage.getItem(STREAK_DATE_KEY);
    const today=new Date().toDateString();
    if(last && last!==today && STK===0){
      // streak was broken — show encouragement
      const home=document.getElementById('home');
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

function reset_progress(){
  if(!confirm('⚠️ تحذير: سيُمسح كل تقدّمك (الدرجات والـ XP والـ Streak) ولا يمكن التراجع.\n\nهل أنت متأكد تماماً؟'))return;
  try{localStorage.removeItem(PKEY);}catch(e){}
  location.reload();
}

// ─── WELCOME BANNER ───
const WKEY='alc_welcomed';
function show_welcome_if_new(){
  try{
    const seen=localStorage.getItem(WKEY);
    if(!seen){
      document.getElementById('welcome-banner').style.display='block';
    }
  }catch(e){}
}
function dismiss_welcome(){
  document.getElementById('welcome-banner').style.display='none';
  try{localStorage.setItem(WKEY,'1');}catch(e){}
}
function dismiss_welcome_start(){
  dismiss_welcome();
  open_lesson('l1');
}
show_welcome_if_new();
load_progress();
check_streak_comeback();
track_screen('home');
