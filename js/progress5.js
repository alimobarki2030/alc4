// ═══════════════════════════════════════
// PROGRESS PERSISTENCE (localStorage) — Book 5
// ═══════════════════════════════════════
const PKEY='alc_book5_progress';
const LESSON_KEYS=['l1','l2','l3','l4'];
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
}
function load_progress(){
  let data=null;
  try{data=JSON.parse(localStorage.getItem(PKEY));}catch(e){}
  if(!data)return;
  XP=data.xp||0;STK=data.streak||0;LP=data.lessons||{};RW=data.rw||{};
  document.getElementById('xp').textContent=XP;
  document.getElementById('streak').textContent=STK;
  apply_lessons();
}
if(!STORAGE_OK)show_storage_warning();

function reset_progress(){
  if(!confirm('⚠️ تحذير: سيُمسح كل تقدّمك (الدرجات والـ XP) ولا يمكن التراجع.\n\nهل أنت متأكد تماماً؟'))return;
  try{localStorage.removeItem(PKEY);}catch(e){}
  location.reload();
}

load_progress();
track_screen('home');

// ─── BACK-TO-TOP FAB ───
(function(){
  const btn=document.getElementById('top-fab');
  if(!btn)return;
  window.addEventListener('scroll',()=>{
    btn.classList.toggle('show',window.scrollY>300);
  },{passive:true});
})();
