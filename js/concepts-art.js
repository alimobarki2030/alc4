// ═══════════════════════════════════════
// ARTICLES  a / an / the
// ═══════════════════════════════════════
const ART = {
  a:{c:{bg:'#DBEAFE',bd:'#60A5FA',tx:'#1D4ED8'},tag:'🆕 مجهول',
     meaning:'a = واحد غير محدّد (أيّ واحد).',
     when:'لأنه مفرد مجهول يبدأ <b>نطقه</b> بصوت ساكن.',link:'مجهول + صوت ساكن؟ ⟵ a',
     ex:{e:'a car',a:'سيارة (أيّ واحدة)'},bad:'an university',good:'a university'},
  an:{c:{bg:'#EDE9FE',bd:'#A78BFA',tx:'#6D28D9'},tag:'🆕 مجهول',vowels:true,
     meaning:'an = واحد غير محدّد (أيّ واحد).',
     when:'لأنه مفرد مجهول يبدأ <b>نطقه</b> بأحد الأصوات المتحرّكة الخمسة:',link:'مجهول + صوت متحرّك؟ ⟵ an',
     ex:{e:'an apple',a:'تفّاحة'},bad:'a hour',good:'an hour'},
  the:{c:{bg:'#FFEDD5',bd:'#FB923C',tx:'#C2410C'},tag:'✅ معلوم',
     meaning:'the = المحدّد المعروف للطرفين، أو الفريد.',
     when:'لأنه شيء معيّن نعرفه، أو فريد في الكون.',link:'شيء نعرفه بالذات؟ ⟵ the',
     ex:{e:'the sun',a:'الشمس (فريدة)'},bad:'a sun',good:'the sun'}
};
const ART_QUIZ=[
  {q:'I have ___ apple.',a:'an',tr:'معي تفّاحة. — تبدأ بصوت متحرّك ← an'},
  {q:'She is ___ teacher.',a:'a',tr:'هي معلّمة. — صوت ساكن ← a'},
  {q:'___ sun is very hot.',a:'the',tr:'الشمس حارّة جداً. — فريدة ← the'},
  {q:'He lives in ___ old house.',a:'an',tr:'يعيش في بيت قديم. — old بصوت متحرّك ← an'},
  {q:'Please close ___ door.',a:'the',tr:'أغلق الباب. — الباب المعروف ← the'},
  {q:'Wait ___ hour, please.',a:'an',tr:'انتظر ساعة. — الـ h صامتة ← an'},
  {q:'I want ___ university degree.',a:'a',tr:'أريد شهادة جامعية. — «يو» صوت ساكن ← a'},
  {q:'Look at ___ moon tonight.',a:'the',tr:'انظر إلى القمر. — فريد ← the'}
];
let artSel=null;

function open_art(){
  show_screen('ascreen');
  document.getElementById('ascreen').scrollIntoView({behavior:'smooth',block:'start'});
  artSel=null;
  ['a','an','the'].forEach(x=>document.getElementById('art-'+x).classList.remove('active'));
  document.getElementById('art-detail').innerHTML='';
  build_concept_quiz('art-quiz',ART_QUIZ,'art',['a','an','the']);reset_quiz('art');
}

function sel_art(p){
  artSel=p;
  ['a','an','the'].forEach(x=>document.getElementById('art-'+x).classList.toggle('active',x===p));
  const d=ART[p],c=d.c;
  const header=`${p} <span class="pd-tag" style="background:${c.bg};color:${c.tx}">${d.tag}</span>`;
  let extra='';
  if(d.vowels){
    extra=`<div class="vowel-strip" style="margin-top:8px">${['a','e','i','o','u'].map(v=>`<div class="vowel-chip">${v}</div>`).join('')}</div>`;
  }
  document.getElementById('art-detail').innerHTML=concept_html(c.tx,c.bd,header,d,extra);
}
