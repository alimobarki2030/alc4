// ═══════════════════════════════════════
// PRONOUNS + TO BE (I am / you are / he is... / was / were)
// ═══════════════════════════════════════
const PRON = {
  i:   {ic:'🙋',en:'I',ar:'أنا'},
  you: {ic:'🫵',en:'You',ar:'أنتَ / أنتِ'},
  he:  {ic:'👨',en:'He',ar:'هو'},
  she: {ic:'👩',en:'She',ar:'هي'},
  it:  {ic:'📦',en:'It',ar:'هو / هي (لغير العاقل)'},
  we:  {ic:'🧑‍🤝‍🧑',en:'We',ar:'نحن'},
  they:{ic:'👨‍👩‍👧‍👦',en:'They',ar:'هم'}
};
const PRON_ORDER=['i','you','he','she','it','we','they'];
const PRON_EX={
  i:{present:{verb:'am',e:'I am a student.',a:'أنا طالب.',bad:'I is a student.',good:'I am a student.'},
     past:{verb:'was',e:'I was tired yesterday.',a:'كنت متعبًا أمس.',bad:'I were tired yesterday.',good:'I was tired yesterday.'}},
  you:{present:{verb:'are',e:'You are welcome.',a:'أنتَ مرحّب بك.',bad:'You is welcome.',good:'You are welcome.'},
     past:{verb:'were',e:'You were late.',a:'كنتَ متأخرًا.',bad:'You was late.',good:'You were late.'}},
  he:{present:{verb:'is',e:'He is a doctor.',a:'هو طبيب.',bad:'He are a doctor.',good:'He is a doctor.'},
     past:{verb:'was',e:'He was at work.',a:'كان في العمل.',bad:'He were at work.',good:'He was at work.'}},
  she:{present:{verb:'is',e:'She is a teacher.',a:'هي معلمة.',bad:'She are a teacher.',good:'She is a teacher.'},
     past:{verb:'was',e:'She was happy.',a:'كانت سعيدة.',bad:'She were happy.',good:'She was happy.'}},
  it:{present:{verb:'is',e:'It is a small cat.',a:'إنها قطة صغيرة.',bad:'It are a small cat.',good:'It is a small cat.'},
     past:{verb:'was',e:'It was cold yesterday.',a:'كان الجو باردًا أمس.',bad:'It were cold yesterday.',good:'It was cold yesterday.'}},
  we:{present:{verb:'are',e:'We are friends.',a:'نحن أصدقاء.',bad:'We is friends.',good:'We are friends.'},
     past:{verb:'were',e:'We were at school.',a:'كنّا في المدرسة.',bad:'We was at school.',good:'We were at school.'}},
  they:{present:{verb:'are',e:'They are happy.',a:'هم سعداء.',bad:'They is happy.',good:'They are happy.'},
     past:{verb:'were',e:'They were busy.',a:'كانوا مشغولين.',bad:'They was busy.',good:'They were busy.'}}
};
const PRON_QUIZ=[
  {q:'I ___ a student.',a:'am',o:['am','is','are'],tr:'أنا طالب. (I ← am)'},
  {q:'She ___ a teacher.',a:'is',o:['am','is','are'],tr:'هي معلمة. (She ← is)'},
  {q:'They ___ happy.',a:'are',o:['is','are','was'],tr:'هم سعداء. (They ← are)'},
  {q:'We ___ at school yesterday.',a:'were',o:['was','were','are'],tr:'كنّا بالمدرسة أمس. (We + yesterday ← were)'},
  {q:'He ___ at work yesterday.',a:'was',o:['was','were','is'],tr:'كان بالعمل أمس. (He + yesterday ← was)'},
  {q:'You ___ welcome.',a:'are',o:['is','are','am'],tr:'أنتَ مرحّب بك. (You ← are)'},
  {q:'It ___ cold yesterday.',a:'was',o:['was','were','is'],tr:'كان الجو باردًا أمس. (It + yesterday ← was)'},
  {q:'I ___ tired yesterday.',a:'was',o:['was','were','am'],tr:'كنت متعبًا أمس. (I + yesterday ← was)'}
];
let pnMode='present',pnSel=null;

function open_pn(){
  show_screen('pnscreen');
  document.getElementById('pnscreen').scrollIntoView({behavior:'smooth',block:'start'});
  pnMode='present';pnSel=null;
  document.getElementById('pn-t-present').classList.add('on');
  document.getElementById('pn-t-past').classList.remove('on');
  build_pn_grid();
  document.getElementById('pn-detail').innerHTML='';
  build_pn_quiz();reset_quiz('pn');
}
function sw_pn(m){
  pnMode=m;
  document.getElementById('pn-t-present').classList.toggle('on',m==='present');
  document.getElementById('pn-t-past').classList.toggle('on',m==='past');
  if(pnSel)sel_pn(pnSel);
}
function build_pn_grid(){
  document.getElementById('pn-grid').innerHTML=PRON_ORDER.map(k=>{
    const d=PRON[k];
    return `<button class="wh-chip" id="pn-${k}" onclick="sel_pn('${k}')">
      <div class="wc-ic">${d.ic}</div><div class="wc-en">${d.en}</div><div class="wc-ar">${d.ar}</div></button>`;
  }).join('');
}
function sel_pn(k){
  pnSel=k;
  PRON_ORDER.forEach(x=>document.getElementById('pn-'+x).classList.toggle('active',x===k));
  const p=PRON[k],ex=PRON_EX[k][pnMode];
  const tenseLbl=pnMode==='present'?'الحاضر':'الماضي';
  const header=`${p.ic} ${p.en} <span class="pd-tag" style="background:#CFFAFE;color:#0E7490">${p.ar}</span>`;
  const d={
    meaning:`${p.en} = ${p.ar}.`,
    when:`في ${tenseLbl}، ${p.en} يقترن دائمًا بـ <b>${ex.verb}</b> — لا يتغيّر أبدًا.`,
    ex:{e:ex.e,a:ex.a},
    bad:ex.bad,good:ex.good
  };
  document.getElementById('pn-detail').innerHTML=concept_html('#0E7490','#67E8F9',header,d);
}
function build_pn_quiz(){
  let html='';
  PRON_QUIZ.forEach((q,i)=>{
    html+=`<div class="pq-item"><div class="pq-sent">${i+1}. ${q.q}</div>
      <div class="pq-opts">${q.o.map(o=>`<button class="pq-opt" id="pqo${i}_${o}" onclick="pn_answer(${i},'${o}')">${o}</button>`).join('')}</div>
      <div class="pq-fb" id="pqfb${i}"></div></div>`;
  });
  document.getElementById('pn-quiz').innerHTML=html;
}
function pn_answer(i,o){
  const q=PRON_QUIZ[i],fb=document.getElementById('pqfb'+i),btn=document.getElementById('pqo'+i+'_'+o);
  if(o===q.a){
    q.o.forEach(x=>{const b=document.getElementById('pqo'+i+'_'+x);if(b)b.disabled=true;});
    btn.classList.add('ok');fb.textContent='✅ '+q.tr;fb.className='pq-fb show ok';
    say(q.q.replace('___',o));
    XP+=2;document.getElementById('xp').textContent=XP;save_progress();
  }else{
    btn.classList.add('no');fb.textContent='❌ ليست صحيحة — حاول مرة أخرى';fb.className='pq-fb show no';
    setTimeout(()=>{btn.classList.remove('no');},700);
  }
}
