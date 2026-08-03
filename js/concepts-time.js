// ═══════════════════════════════════════
// PAST-TIME SIGNALS  yesterday / last / ago
// ═══════════════════════════════════════
const TIME_C={yesterday:{bg:'#DBEAFE',bd:'#60A5FA',tx:'#1D4ED8'},last:{bg:'#EDE9FE',bd:'#A78BFA',tx:'#6D28D9'},ago:{bg:'#FEF3C7',bd:'#FBBF24',tx:'#B45309'}};
const TIME_D={
  yesterday:{ic:'📅',ar:'أمس',
    meaning:'yesterday = أمس.',
    when:'لأنك تقصد يوم <b>أمس</b> بالذات.',
    triggers:[{e:'yesterday',a:'أمس'},{e:'yesterday morning',a:'صباح أمس'}],
    link:'تقصد يوم أمس بالذات؟ ⟵ استخدم yesterday',
    orderChips:'<span class="oc key">yesterday</span><span class="oc-solo">كلمة مستقلّة تقف وحدها</span>',
    orderEx:'I saw him yesterday.',
    bad:'yesterday night',good:'last night'},
  last:{ic:'⏮️',ar:'الماضي الأخير',
    meaning:'last = الماضي الأخير.',
    when:'لأنك ذكرت <b>آخر</b> فترة (أسبوع/شهر/سنة/ليلة).',
    triggers:[{e:'last week',a:'الأسبوع الماضي'},{e:'last month',a:'الشهر الماضي'},{e:'last night',a:'الليلة الماضية'}],
    link:'رأيت «آخر أسبوع/شهر...»؟ ⟵ استخدم last',
    orderChips:'<span class="oc key">last</span><span class="oc-plus">+</span><span class="oc dur">الفترة</span>',
    orderEx:'last week',
    bad:'last the week',good:'last week'},
  ago:{ic:'⏳',ar:'قبل مدّة',
    meaning:'ago = قبل مدّة.',
    when:'لأنك ذكرت <b>مدّة</b> زمنية.',
    triggers:[{e:'two days ago',a:'قبل يومين'},{e:'an hour ago',a:'قبل ساعة'},{e:'ten years ago',a:'قبل عشر سنوات'}],
    link:'رأيت «مدّة»؟ ⟵ استخدم ago',
    orderChips:'<span class="oc dur">مدّة</span><span class="oc-plus">+</span><span class="oc key">ago</span>',
    orderEx:'two days ago',
    bad:'ago two days',good:'two days ago'}
};
const TIME_QUIZ=[
  {q:'I saw her ___.',o:['yesterday','last yesterday','yesterday ago'],a:'yesterday',tr:'رأيتها أمس. — yesterday تقف وحدها'},
  {q:'We met ___.',o:['last week','last the week','week ago last'],a:'last week',tr:'التقينا الأسبوع الماضي. — last + فترة، بلا the'},
  {q:'He left ___.',o:['two days ago','ago two days','last two days'],a:'two days ago',tr:'غادر قبل يومين. — المدّة + ago'},
  {q:'They arrived ___.',o:['last night','yesterday night','the last night'],a:'last night',tr:'وصلوا الليلة الماضية. — نقول last night لا yesterday night'},
  {q:'She called ___.',o:['an hour ago','ago an hour','last an hour'],a:'an hour ago',tr:'اتصلت قبل ساعة. — ago في الآخر'},
  {q:'I finished it ___.',o:['a year ago','last a year','ago a year'],a:'a year ago',tr:'أنهيتها قبل عام. — المدّة + ago'}
];
let timeSel=null;

function open_time(){
  show_screen('tmscreen');
  document.getElementById('tmscreen').scrollIntoView({behavior:'smooth',block:'start'});
  timeSel=null;
  ['yesterday','last','ago'].forEach(x=>{
    document.getElementById('tm-'+x).classList.remove('active');
    const dot=document.getElementById('tld-'+x);if(dot)dot.classList.remove('on');
  });
  document.getElementById('time-detail').innerHTML='';
  build_concept_quiz('time-quiz',TIME_QUIZ,'time');reset_quiz('time');
}
function sel_time(k){
  timeSel=k;
  ['yesterday','last','ago'].forEach(x=>{
    document.getElementById('tm-'+x).classList.toggle('active',x===k);
    const dot=document.getElementById('tld-'+x);if(dot)dot.classList.toggle('on',x===k);
  });
  const d=TIME_D[k],c=TIME_C[k];
  const exSafe=d.orderEx.replace(/'/g,"\\'"),goodSafe=d.good.replace(/'/g,"\\'");
  const html=`<div class="prep-detail" style="border-color:${c.bd};padding-top:8px">
    <h3 style="color:${c.tx};margin-bottom:6px">${d.ic} ${k}
      <span class="pd-tag" style="background:${c.bg};color:${c.tx}">${d.ar}</span></h3>

    <div class="cblock b-mean">
      <div class="cblock-h"><span class="cblock-n" style="background:#3B82F6">1</span>💬 المعنى</div>
      <div class="cblock-txt">${d.meaning}</div>
    </div>
    <div class="cblock b-when">
      <div class="cblock-h"><span class="cblock-n" style="background:#16A34A">2</span><svg class="svgico" aria-hidden="true"><use href="#icon-target"></use></svg> متى ولماذا؟</div>
      <div class="cblock-txt">${d.when}</div>
      ${d.triggers?`<div class="trig-list">${d.triggers.map(t=>`<div class="trig"><span class="trig-en">${t.e}</span><span class="trig-ar">${t.a}</span></div>`).join('')}</div>`:''}
      ${d.link?`<div class="mind-link">💡 ${d.link}</div>`:''}
    </div>
    <div class="cblock b-order">
      <div class="cblock-h"><span class="cblock-n" style="background:#7C3AED">3</span>🔤 كيف أرتّبها في الجملة؟</div>
      <div class="order-formula">${d.orderChips}</div>
      <div class="order-ex"><span class="en">${d.orderEx}</span>
        <button class="mini-spk" onclick="say('${exSafe}')" aria-label="استمع"><svg class="svgico" aria-hidden="true"><use href="#icon-volume-2"></use></svg></button></div>
    </div>
    <div class="cblock b-bad">
      <div class="cblock-h"><span class="cblock-n" style="background:#EA580C">4</span>⚠️ أشهر خطأ للمبتدئين</div>
      <div class="badgood">
        <span class="bg-x">❌ <span class="en strike">${d.bad}</span></span>
        <span class="bg-ok">✅ <span class="en">${d.good}</span>
          <button class="mini-spk ok" onclick="say('${goodSafe}')" aria-label="استمع"><svg class="svgico" aria-hidden="true"><use href="#icon-volume-2"></use></svg></button></span>
      </div>
    </div>
  </div>`;
  document.getElementById('time-detail').innerHTML=html;
}
