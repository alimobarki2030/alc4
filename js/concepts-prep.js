// ═══════════════════════════════════════
// PREPOSITIONS  in / on / at
// ═══════════════════════════════════════
const PREP = {
  place:{
    in:{meaning:'in = داخل مكان محاط أو كبير.',when:'لأنه مكان واسع (مدينة/دولة).',link:'مكان واسع/محاط؟ ⟵ in',ex:{e:'in Abha',a:'في أبها'},bad:'at Abha',good:'in Abha'},
    on:{meaning:'on = على سطح، أو في شارع.',when:'لأنه سطح أو شارع أو طابق.',link:'على سطح/شارع؟ ⟵ on',ex:{e:'on Al-Fann Street',a:'في شارع الفن'},bad:'in Al-Fann Street',good:'on Al-Fann Street'},
    at:{meaning:'at = عند نقطة محدّدة.',when:'لأنه نقطة أو مكان دقيق.',link:'نقطة محدّدة؟ ⟵ at',ex:{e:'at the cafe',a:'عند الكوفي (المقهى)'},bad:'in the cafe',good:'at the cafe'}
  },
  time:{
    in:{meaning:'in = خلال فترة طويلة.',when:'لأنها فترة طويلة (شهر/سنة/فصل).',link:'فترة طويلة؟ ⟵ in',ex:{e:'in July',a:'في يوليو'},bad:'at July',good:'in July'},
    on:{meaning:'on = في يوم أو تاريخ.',when:'لأنه يوم أو تاريخ محدّد.',link:'يوم أو تاريخ؟ ⟵ on',ex:{e:'on Monday',a:'يوم الاثنين'},bad:'in Monday',good:'on Monday'},
    at:{meaning:'at = عند لحظة محدّدة.',when:'لأنه وقت محدّد بالساعة.',link:'وقت محدّد؟ ⟵ at',ex:{e:'at 7:00',a:'الساعة السابعة'},bad:'in 7:00',good:'at 7:00'}
  }
};
const PREP_COLORS={in:{bg:'#DBEAFE',bd:'#60A5FA',tx:'#1D4ED8'},on:{bg:'#DCFCE7',bd:'#4ADE80',tx:'#15803D'},at:{bg:'#FFEDD5',bd:'#FB923C',tx:'#C2410C'}};
const PREP_QUIZ=[
  {q:'I live ___ Riyadh.',a:'in',tr:'أعيش في الرياض. — مدينة ← in'},
  {q:'The book is ___ the table.',a:'on',tr:'الكتاب على الطاولة. — سطح ← on'},
  {q:'Class starts ___ 7:30.',a:'at',tr:'يبدأ الدرس الساعة 7:30. — وقت محدّد ← at'},
  {q:'My birthday is ___ July.',a:'in',tr:'عيد ميلادي في يوليو. — شهر ← in'},
  {q:'See you ___ Monday.',a:'on',tr:'أراك يوم الاثنين. — يوم ← on'},
  {q:'I wake up ___ 6 a.m.',a:'at',tr:'أستيقظ الساعة 6 صباحاً. — وقت محدّد ← at'},
  {q:'We meet ___ the bus stop.',a:'at',tr:'نلتقي عند موقف الحافلة. — نقطة محدّدة ← at'},
  {q:'It is cold ___ winter.',a:'in',tr:'الجو بارد في الشتاء. — فصل ← in'}
];
let prepMode='place',prepSel=null;

function open_prep(){
  show_screen('pscreen');
  document.getElementById('pscreen').scrollIntoView({behavior:'smooth',block:'start'});
  prepMode='place';prepSel=null;
  document.getElementById('pt-place').classList.add('on');
  document.getElementById('pt-time').classList.remove('on');
  render_zoom();
  ['in','on','at'].forEach(x=>document.getElementById('ring-'+x).classList.remove('active'));
  document.getElementById('prep-detail').innerHTML='';
  build_concept_quiz('prep-quiz',PREP_QUIZ,'prep',['in','on','at']);reset_quiz('prep');
}

function render_zoom(){
  const place='🔎 من الواسع إلى الضيق: <span dir="ltr" class="zc-seq"><span class="zc in">in</span> Abha → <span class="zc on">on</span> Al-Fann St → <span class="zc at">at</span> the cafe</span>';
  const time='🔎 من الأطول إلى الأدقّ: <span dir="ltr" class="zc-seq"><span class="zc in">in</span> July → <span class="zc on">on</span> Monday → <span class="zc at">at</span> 7:00</span>';
  document.getElementById('zoom-cap').innerHTML=(prepMode==='place')?place:time;
  document.getElementById('prep-except').innerHTML=(prepMode==='time')?`
    <div class="except-box">
      <div class="except-h">⭐ استثناءات تُحفظ كما هي</div>
      <div class="except-row" dir="ltr"><span class="zc in">in</span> ( the morning / afternoon / evening )
        <button class="ex-spk" onclick="say('in the evening')">🔊</button></div>
      <div class="except-row" dir="ltr"><span class="zc at">at</span> ( noon / midnight )
        <button class="ex-spk" onclick="say('at midnight')">🔊</button></div>
    </div>`:'';
}

function sw_prep(m){
  prepMode=m;
  document.getElementById('pt-place').classList.toggle('on',m==='place');
  document.getElementById('pt-time').classList.toggle('on',m==='time');
  render_zoom();
  if(prepSel)sel_prep(prepSel);
}

function sel_prep(p){
  prepSel=p;
  ['in','on','at'].forEach(x=>document.getElementById('ring-'+x).classList.toggle('active',x===p));
  const d=PREP[prepMode][p],c=PREP_COLORS[p];
  const header=`${p} <span class="pd-tag" style="background:${c.bg};color:${c.tx}">${prepMode==='place'?'📍 مكان':'🕐 زمن'}</span>`;
  document.getElementById('prep-detail').innerHTML=concept_html(c.tx,c.bd,header,d);
}
