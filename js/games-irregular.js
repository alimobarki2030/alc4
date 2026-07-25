// ═══════════════════════════════════════
// IRREGULAR VERBS (grouped by family)
// ═══════════════════════════════════════
const IV_FAMILIES=[
  {pat:'no change',hook:'لا يتغيّر — نفس الشكل في الماضي',verbs:[
    {b:'put',p:'put',m:'وضع'},{b:'read',p:'read',m:'قرأ',note:'يُكتب read لكن يُنطق «رِد» في الماضي'}]},
  {pat:'i / o → a',hook:'حرف العلّة يتحوّل إلى a',verbs:[
    {b:'begin',p:'began',m:'بدأ'},{b:'drink',p:'drank',m:'شرب'},{b:'swim',p:'swam',m:'سبح'},{b:'sit',p:'sat',m:'جلس'},{b:'come',p:'came',m:'أتى / جاء'}]},
  {pat:'…o-e',hook:'الماضي بصوت o',verbs:[
    {b:'speak',p:'spoke',m:'تكلّم'},{b:'drive',p:'drove',m:'قاد'},{b:'write',p:'wrote',m:'كتب'},{b:'choose',p:'chose',m:'اختار'}]},
  {pat:'…ought',hook:'الماضي ينتهي بـ ought',verbs:[
    {b:'bring',p:'brought',m:'أحضر'},{b:'buy',p:'bought',m:'اشترى'}]},
  {pat:'…ew',hook:'الماضي ينتهي بـ ew',verbs:[
    {b:'fly',p:'flew',m:'طار'},{b:'know',p:'knew',m:'عرف'}]},
  {pat:'…oo',hook:'الماضي فيه صوت oo',verbs:[
    {b:'stand',p:'stood',m:'وقف'},{b:'take',p:'took',m:'أخذ'}]},
  {pat:'…t / …d',hook:'الماضي ينتهي بـ t أو d',verbs:[
    {b:'leave',p:'left',m:'غادر'},{b:'sleep',p:'slept',m:'نام'},{b:'hear',p:'heard',m:'سمع'},{b:'say',p:'said',m:'قال'},{b:'have',p:'had',m:'يملك / لديه'},{b:'do',p:'did',m:'فعل'}]},
  {pat:'unique',hook:'شاذّة تماماً — احفظها وحدها',verbs:[
    {b:'go',p:'went',m:'ذهب'},{b:'see',p:'saw',m:'رأى'},{b:'eat',p:'ate',m:'أكل'},{b:'get up',p:'got up',m:'استيقظ / نهض'}]}
];
const IV_ALL=IV_FAMILIES.reduce((a,f)=>a.concat(f.verbs),[]);
let ivDeck=[],ivCur=null,ivHardSeen=new Set();

function open_iv(){
  show_screen('ivscreen');
  document.getElementById('ivscreen').scrollIntoView({behavior:'smooth',block:'start'});
  sw_iv('learn');
}
function sw_iv(m){
  const learn=m==='learn';
  document.getElementById('iv-t-learn').classList.toggle('on',learn);
  document.getElementById('iv-t-drill').classList.toggle('on',!learn);
  document.getElementById('iv-learn-body').style.display=learn?'block':'none';
  document.getElementById('iv-drill-body').style.display=learn?'none':'block';
  if(learn)build_iv_learn();else start_iv_drill();
}
function build_iv_learn(){
  let html='<div class="iv-intro">💡 الأفعال الشاذة عائلات — احفظ نمط العائلة لا كل كلمة وحدها</div>';
  IV_FAMILIES.forEach(f=>{
    html+=`<div class="iv-fam"><div class="iv-fam-h"><span class="iv-fam-pat">${f.pat}</span></div>
      <div class="iv-fam-hint">${f.hook}</div>`;
    f.verbs.forEach(v=>{
      const bs=v.b.replace(/'/g,"\\'"),ps=v.p.replace(/'/g,"\\'");
      html+=`<div class="iv-row">
        <span class="iv-base">${v.b}</span><span class="iv-arrow">→</span><span class="iv-past">${v.p}</span>
        <button class="iv-spk" onclick="say('${ps}')" aria-label="استمع">🔊</button>
        <span class="iv-mean">${v.m}</span>
        ${v.note?`<span class="iv-note">💡 ${v.note}</span>`:''}
      </div>`;
    });
    html+='</div>';
  });
  document.getElementById('iv-learn-body').innerHTML=html;
}
function start_iv_drill(){
  ivDeck=[...IV_ALL].sort(()=>Math.random()-.5);
  ivHardSeen=new Set();
  iv_next();
}
function iv_next(){
  const body=document.getElementById('iv-drill-body');
  if(ivDeck.length===0){
    const hard=IV_ALL.filter(v=>ivHardSeen.has(v.b));
    body.innerHTML=`<div class="iv-done"><div class="em">🎉</div>
      <div class="t">أحسنت! راجعت كل الأفعال</div>
      ${hard.length?`<button class="iv-btn hard" onclick="iv_review_hard()">راجع الصعبة فقط (${hard.length})</button>`:''}
      <button class="iv-btn known" onclick="start_iv_drill()">🔁 من جديد</button></div>`;
    return;
  }
  ivCur=ivDeck[0];
  const bs=ivCur.b.replace(/'/g,"\\'"),ps=ivCur.p.replace(/'/g,"\\'");
  body.innerHTML=`<div class="iv-drill-top">متبقّي: <b>${ivDeck.length}</b></div>
  <div class="iv-dcard">
    <div class="iv-base-big">${ivCur.b}<button class="iv-spk2" onclick="say('${bs}')" aria-label="استمع">🔊</button></div>
    <div class="iv-mean-big">${ivCur.m}</div>
    <div id="iv-ans" style="display:none">
      <div class="iv-arrow-big">↓ الماضي</div>
      <div class="iv-past-big">${ivCur.p}<button class="iv-spk2" onclick="say('${ps}')" aria-label="استمع">🔊</button></div>
    </div>
    <div id="iv-controls"><button class="iv-reveal-btn" onclick="iv_reveal()">🤔 ما الماضي؟ اضغط للكشف</button></div>
    <div id="iv-judge" class="iv-judge" style="display:none">
      <button class="iv-btn known" onclick="iv_mark(true)">عرفتها ✅</button>
      <button class="iv-btn hard" onclick="iv_mark(false)">صعبة ❌</button>
    </div>
  </div>`;
}
function iv_reveal(){
  document.getElementById('iv-ans').style.display='';
  document.getElementById('iv-controls').style.display='none';
  document.getElementById('iv-judge').style.display='flex';
  say(ivCur.p);
}
function iv_mark(known){
  const cur=ivDeck.shift();
  if(known){XP+=2;document.getElementById('xp').textContent=XP;save_progress();}
  else{ivDeck.push(cur);ivHardSeen.add(cur.b);}
  iv_next();
}
function iv_review_hard(){
  ivDeck=IV_ALL.filter(v=>ivHardSeen.has(v.b)).sort(()=>Math.random()-.5);
  iv_next();
}
