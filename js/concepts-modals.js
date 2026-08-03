// ═══════════════════════════════════════
// MODAL VERBS — can · must · may
// ═══════════════════════════════════════
const MODAL={
  can:{ic:'💪',word:'قدرة',meaning:'can = يقدر / يستطيع.',when:'تُستخدم للتعبير عن القدرة، أو لطلب/إذن غير رسمي بين الأصدقاء.',ex:{e:'I can swim.',a:'أنا أقدر أسبح.'},bad:'I can to swim.',good:'I can swim.'},
  must:{ic:'⚠️',word:'إلزام',meaning:'must = يجب (إلزام قوي لا خيار فيه).',when:'تُستخدم لقاعدة أو ضرورة — قانون، تعليمات، واجب.',ex:{e:'You must wear a seatbelt.',a:'يجب أن تلبس حزام الأمان.'},bad:'You must to wear a seatbelt.',good:'You must wear a seatbelt.'},
  may:{ic:'🤝',word:'إذن مهذّب',meaning:'may = يجوز / بإمكانك (إذن رسمي ومهذّب).',when:'تُستخدم لطلب إذن أو منحه بأسلوب مؤدّب.',ex:{e:'May I open the window?',a:'هل يجوز لي أفتح الشباك؟'},bad:'May I to open the window?',good:'May I open the window?'}
};
const MODAL_ORDER=['can','must','may'];
const MODAL_QUIZ=[
  {q:'I ___ speak English.',a:'can',o:['can','must','may'],tr:'أنا أقدر أتكلم إنجليزي. (قدرة ← can)'},
  {q:'You ___ stop at a red light.',a:'must',o:['can','must','may'],tr:'يجب تقف عند الإشارة الحمراء. (إلزام ← must)'},
  {q:'___ I ask you a question?',a:'May',o:['Can','Must','May'],tr:'هل يجوز أسألك سؤال؟ (إذن مهذّب ← May)'},
  {q:'She ___ drive a car.',a:'can',o:['can','must','may'],tr:'هي تقدر تسوق سيارة. (قدرة ← can)'},
  {q:'We ___ finish the homework today.',a:'must',o:['can','must','may'],tr:'يجب نخلّص الواجب اليوم. (إلزام ← must)'},
  {q:'___ I leave early today?',a:'May',o:['Can','Must','May'],tr:'هل يجوز لي أطلع بدري اليوم؟ (إذن مهذّب ← May)'}
];
let modalSel=null;

function open_modal(){
  show_screen('modscreen');
  document.getElementById('modscreen').scrollIntoView({behavior:'smooth',block:'start'});
  modalSel=null;
  build_modal_grid();
  document.getElementById('mod-detail').innerHTML='';
  build_concept_quiz('mod-quiz',MODAL_QUIZ,'mod');reset_quiz('mod');
}
function build_modal_grid(){
  document.getElementById('mod-grid').innerHTML=MODAL_ORDER.map(k=>{
    const d=MODAL[k],cap=k.charAt(0).toUpperCase()+k.slice(1);
    return `<button class="wh-chip" id="mod-${k}" onclick="sel_modal('${k}')">
      <div class="wc-ic">${d.ic}</div><div class="wc-en">${cap}</div><div class="wc-ar">${d.word}</div></button>`;
  }).join('');
}
function sel_modal(k){
  modalSel=k;
  MODAL_ORDER.forEach(x=>document.getElementById('mod-'+x).classList.toggle('active',x===k));
  const d=MODAL[k],cap=k.charAt(0).toUpperCase()+k.slice(1);
  const header=`${d.ic} ${cap} <span class="pd-tag" style="background:#FCE7F3;color:#BE185D">${d.word}</span>`;
  document.getElementById('mod-detail').innerHTML=concept_html('#BE185D','#F9A8D4',header,d);
}
