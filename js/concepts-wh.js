// ═══════════════════════════════════════
// WH QUESTIONS
// ═══════════════════════════════════════
const WH = {
  what:{ic:'❓',word:'ماذا / ما',meaning:'what = ماذا / ما.',when:'لأنك تسأل عن شيء أو فعل.',link:'تسأل عن شيء؟ ⟵ what',ex:{e:'What is this?',a:'ما هذا؟'},bad:'What this is?',good:'What is this?'},
  where:{ic:'📍',word:'أين',meaning:'where = أين.',when:'لأنك تسأل عن المكان.',link:'تسأل عن مكان؟ ⟵ where',ex:{e:'Where do you live?',a:'أين تسكن؟'},bad:'Where you live?',good:'Where do you live?'},
  when:{ic:'🕐',word:'متى',meaning:'when = متى.',when:'لأنك تسأل عن الوقت.',link:'تسأل عن وقت؟ ⟵ when',ex:{e:'When is the class?',a:'متى الحصة؟'},bad:'When the class is?',good:'When is the class?'},
  who:{ic:'👤',word:'مَن',meaning:'who = مَن.',when:'لأنك تسأل عن شخص.',link:'تسأل عن شخص؟ ⟵ who',ex:{e:'Who is she?',a:'من هي؟'},bad:'Who she is?',good:'Who is she?'},
  why:{ic:'💡',word:'لماذا',meaning:'why = لماذا.',when:'لأنك تسأل عن السبب.',link:'تسأل عن سبب؟ ⟵ why',ex:{e:'Why are you late?',a:'لماذا تأخّرت؟'},bad:'Why you are late?',good:'Why are you late?'},
  which:{ic:'🔀',word:'أيّ',meaning:'which = أيّ.',when:'لأنك تختار بين أشياء محدّدة.',link:'تختار بين أشياء؟ ⟵ which',ex:{e:'Which color do you like?',a:'أيّ لون تحب؟'},bad:'Which you like?',good:'Which do you like?'},
  whose:{ic:'🔑',word:'لِمَن',meaning:'whose = لِمَن.',when:'لأنك تسأل عن المالك.',link:'تسأل عن مالك؟ ⟵ whose',ex:{e:'Whose book is this?',a:'لمن هذا الكتاب؟'},bad:'Who book is this?',good:'Whose book is this?'},
  how:{ic:'🛠️',word:'كيف',meaning:'how = كيف.',when:'لأنك تسأل عن الطريقة أو الحال.',link:'تسأل عن طريقة؟ ⟵ how',ex:{e:'How do you go to work?',a:'كيف تذهب للعمل؟'},bad:'How you go to work?',good:'How do you go to work?'}
};
const WH_ORDER=['what','where','when','who','why','which','whose','how'];
const WH_QUIZ=[
  {q:'___ is this? — It is a pen.',a:'What',o:['What','Who','Where'],tr:'ما هذا؟ — إنه قلم. (شيء ← What)'},
  {q:'___ do you live? — In Riyadh.',a:'Where',o:['When','Where','Why'],tr:'أين تسكن؟ — في الرياض. (مكان ← Where)'},
  {q:'___ is the class? — At 7:30.',a:'When',o:['When','How','Who'],tr:'متى الحصة؟ — الساعة 7:30. (زمن ← When)'},
  {q:'___ is she? — She is my sister.',a:'Who',o:['What','Who','Which'],tr:'من هي؟ — إنها أختي. (شخص ← Who)'},
  {q:'___ are you late? — Because of traffic.',a:'Why',o:['Why','When','How'],tr:'لماذا تأخّرت؟ — بسبب الزحام. (سبب ← Why)'},
  {q:'___ book is this? — It is mine.',a:'Whose',o:['Who','Whose','Which'],tr:'لمن هذا الكتاب؟ — إنه لي. (مِلكية ← Whose)'},
  {q:'___ do you go to work? — By car.',a:'How',o:['How','Where','What'],tr:'كيف تذهب للعمل؟ — بالسيارة. (طريقة ← How)'},
  {q:'___ color do you want? — The blue one.',a:'Which',o:['Which','What','Whose'],tr:'أيّ لون تريد؟ — الأزرق. (اختيار محدّد ← Which)'}
];
let whSel=null;

function open_wh(){
  show_screen('wscreen');
  document.getElementById('wscreen').scrollIntoView({behavior:'smooth',block:'start'});
  whSel=null;
  build_wh_grid();
  document.getElementById('wh-detail').innerHTML='';
  build_concept_quiz('wh-quiz',WH_QUIZ,'wh');reset_quiz('wh');
}
function build_wh_grid(){
  document.getElementById('wh-grid').innerHTML=WH_ORDER.map(k=>{
    const d=WH[k],cap=k.charAt(0).toUpperCase()+k.slice(1);
    return `<button class="wh-chip" id="wh-${k}" onclick="sel_wh('${k}')">
      <div class="wc-ic">${d.ic}</div><div class="wc-en">${cap}</div><div class="wc-ar">${d.word}</div></button>`;
  }).join('');
}
function sel_wh(k){
  whSel=k;
  WH_ORDER.forEach(x=>document.getElementById('wh-'+x).classList.toggle('active',x===k));
  const d=WH[k],cap=k.charAt(0).toUpperCase()+k.slice(1);
  const header=`${d.ic} ${cap} <span class="pd-tag" style="background:#CCFBF1;color:#0F766E">${d.word}</span>`;
  document.getElementById('wh-detail').innerHTML=concept_html('#0F766E','#5EEAD4',header,d);
}
