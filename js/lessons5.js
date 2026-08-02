// ═══════════════════════════════════════
// BOOK 5 — LESSON DATA
// ═══════════════════════════════════════
const VOCAB={
l1:[
  {e:'body',a:'الجسم',em:'🧍'},
  {e:'head',a:'الرأس',em:'🤕'},
  {e:'hair',a:'الشعر',em:'💇'},
  {e:'ear',a:'الأذن',em:'👂'},
  {e:'eye',a:'العين',em:'👁️'},
  {e:'eyebrow',a:'الحاجب',em:'🤨'},
  {e:'eyelash',a:'الرمش',em:'👁️'},
  {e:'eyelid',a:'الجفن',em:'😌'},
  {e:'nose',a:'الأنف',em:'👃'},
  {e:'mouth',a:'الفم',em:'👄'},
  {e:'lip',a:'الشفة',em:'👄'},
  {e:'tongue',a:'اللسان',em:'👅'},
  {e:'throat',a:'الحلق',em:'🗣️'},
  {e:'neck',a:'الرقبة',em:'👔'},
  {e:'shoulder',a:'الكتف',em:'🤷'},
  {e:'arm',a:'الذراع',em:'💪'},
  {e:'elbow',a:'المرفق',em:'💪'},
  {e:'wrist',a:'المعصم',em:'⌚'},
  {e:'hand',a:'اليد',em:'✋'},
  {e:'finger',a:'الإصبع',em:'☝️'},
  {e:'thumb',a:'الإبهام',em:'👍'},
  {e:'fingernail',a:'ظفر الإصبع',em:'💅'},
  {e:'nail',a:'الظفر',em:'💅'},
  {e:'leg',a:'الساق / الرجل',em:'🦵'},
  {e:'knee',a:'الركبة',em:'🦵'},
  {e:'ankle',a:'الكاحل',em:'🦶'},
  {e:'foot',a:'القدم',em:'🦶'},
  {e:'feet',a:'الأقدام',em:'🦶'},
  {e:'heel',a:'الكعب',em:'🦶'},
  {e:'toe',a:'إصبع القدم',em:'🦶'},
  {e:'toenail',a:'ظفر إصبع القدم',em:'💅'},
  {e:'skin',a:'الجلد',em:'🧴'},
  {e:'bone',a:'العظم',em:'🦴'},
  {e:'muscle',a:'العضلة',em:'💪'},
  {e:'limb',a:'أحد أطراف الجسم',em:'🦿'},
  {e:'trunk',a:'جذع الجسم',em:'🎽'},
  {e:'part',a:'جزء',em:'🧩'},
  {e:'medicine',a:'الدواء',em:'💊'},
  {e:'drugs',a:'أدوية / عقاقير',em:'💊'},
  {e:'date',a:'تاريخ / موعد',em:'📅'},
  {e:'order',a:'ترتيب / أمر',em:'📋'},
  {e:'hurt',a:'يؤلم / يتأذّى',past:'hurt',pa:'تألّم / تأذّى',em:'🤕'},
  {e:'move',a:'يتحرّك',em:'🚶'},
  {e:'point (to)',a:'يشير (إلى)',em:'👉'},
  {e:'touch',a:'يلمس',em:'👆'},
  {e:'about',a:'حوالي / بخصوص',em:'🔹'},
  {e:'large',a:'كبير',em:'🔴'},
  {e:'last',a:'الأخير / الماضي',em:'🏁'},
  {e:'left',a:'يسار',em:'⬅️'},
  {e:'long',a:'طويل',em:'📏'},
  {e:'next',a:'التالي',em:'➡️'},
  {e:'one',a:'واحد',em:'1️⃣'},
  {e:'ordinal',a:'ترتيبي (الأعداد الترتيبية)',em:'🔢'},
  {e:'right',a:'يمين / صحيح',em:'✅'},
  {e:'short',a:'قصير',em:'🤏'},
  {e:'sore',a:'مؤلم / ملتهب',em:'🤒'},
  {e:'then',a:'ثمّ / حينها',em:'⏭️'},
  {e:'which',a:'أيّ',em:'❓'},
],
l2:[
  {e:'barbershop',a:'محل الحلاقة',em:'💈'},
  {e:'bathroom',a:'الحمام',em:'🛁'},
  {e:'birthday',a:'عيد الميلاد',em:'🎂'},
  {e:'brush',a:'فرشاة (شعر)',em:'🪮'},
  {e:'butter',a:'الزبدة',em:'🧈'},
  {e:'comb',a:'المشط',em:'🪮'},
  {e:'drugstore',a:'الصيدلية',em:'💊'},
  {e:'face',a:'الوجه',em:'🙂'},
  {e:'grocery store',a:'محل البقالة',em:'🛒'},
  {e:'hair',a:'الشعر',em:'💇'},
  {e:'haircut',a:'قصة الشعر',em:'✂️'},
  {e:'mirror',a:'المرآة',em:'🪞'},
  {e:'pepper',a:'الفلفل',em:'🌶️'},
  {e:'pocket',a:'الجيب',em:'👖'},
  {e:'razor',a:'شفرة الحلاقة',em:'🪒'},
  {e:'salt',a:'الملح',em:'🧂'},
  {e:'shampoo',a:'الشامبو',em:'🧴'},
  {e:'sink',a:'المغسلة',em:'🚰'},
  {e:'soap',a:'الصابون',em:'🧼'},
  {e:'soup',a:'الحساء / الشوربة',em:'🍲'},
  {e:'subject',a:'مادة دراسية / موضوع',em:'📘'},
  {e:'sugar',a:'السكر',em:'🧁'},
  {e:'thing',a:'شيء',em:'📦'},
  {e:'toilet',a:'المرحاض',em:'🚽'},
  {e:'toilet paper',a:'ورق التواليت',em:'🧻'},
  {e:'tooth',a:'السن',em:'🦷'},
  {e:'teeth',a:'الأسنان',em:'🦷'},
  {e:'toothbrush',a:'فرشاة الأسنان',em:'🪥'},
  {e:'toothpaste',a:'معجون الأسنان',em:'🧴'},
  {e:'topic',a:'موضوع',em:'📝'},
  {e:'towel',a:'المنشفة',em:'🧺'},
  {e:'washcloth',a:'قطعة قماش للاستحمام',em:'🧽'},
  {e:'brush (verb)',a:'يفرش',past:'brushed',pa:'فرش',em:'🪥'},
  {e:'can',a:'من الممكن / يمكن',em:'🎲'},
  {e:'change',a:'يُغيّر',past:'changed',pa:'غيّر',em:'🔄'},
  {e:'comb (verb)',a:'يُمشّط',past:'combed',pa:'مشّط',em:'🪮'},
  {e:'dry',a:'يُجفّف',past:'dried',pa:'جفّف',em:'🌬️'},
  {e:'get',a:'يحصل على',past:'got',pa:'حصل على',em:'🤲'},
  {e:'need',a:'يحتاج (إلى)',past:'needed',pa:'احتاج',em:'❗'},
  {e:'rinse',a:'يشطف',past:'rinsed',pa:'شطف',em:'🚿'},
  {e:'shampoo (verb)',a:'يغسل بالشامبو',past:'shampooed',pa:'غسل بالشامبو',em:'🧴'},
  {e:'wash',a:'يغسل',past:'washed',pa:'غسل',em:'🧼'},
  {e:'a few',a:'قليل من (معدود)',em:'🔢'},
  {e:'a little',a:'قليل من (غير معدود)',em:'🤏'},
  {e:'a lot of',a:'الكثير من',em:'🔼'},
  {e:'any',a:'أيّ (بالسؤال أو النفي)',em:'❓'},
  {e:'clean',a:'نظيف',em:'✨'},
  {e:'dirty',a:'وسخ',em:'🟤'},
  {e:'lots of',a:'الكثير من',em:'💠'},
  {e:'only',a:'فقط',em:'1️⃣'},
  {e:'some',a:'بعض (بالإثبات)',em:'🔹'},
],
l3:[
  {e:'airline',a:'شركة طيران',em:'✈️'},
  {e:'airport',a:'المطار',em:'🛫'},
  {e:'arrival',a:'الوصول',em:'🛬'},
  {e:'button',a:'زر (الملابس)',em:'🔘'},
  {e:'cuff',a:'كم القميص (الأسورة)',em:'👔'},
  {e:'customer',a:'الزبون',em:'🧑‍💼'},
  {e:'departure',a:'المغادرة',em:'🛫'},
  {e:'doorknob',a:'مقبض الباب',em:'🚪'},
  {e:'flight',a:'رحلة طيران',em:'✈️'},
  {e:'gate',a:'بوابة (المطار)',em:'🚪'},
  {e:'graduation',a:'التخرّج',em:'🎓'},
  {e:'handle',a:'المقبض',em:'🖐️'},
  {e:'instructions',a:'تعليمات',em:'📋'},
  {e:'key',a:'المفتاح',em:'🔑'},
  {e:'knob',a:'المقبض (الدائري)',em:'🔘'},
  {e:'lock',a:'القفل',em:'🔒'},
  {e:'phone',a:'الهاتف',em:'☎️'},
  {e:'reservation',a:'الحجز',em:'📅'},
  {e:'school',a:'المدرسة',em:'🏫'},
  {e:'sharpener',a:'مبراة',em:'✏️'},
  {e:'sleeve',a:'كم الملابس',em:'👕'},
  {e:'suitcase',a:'حقيبة السفر',em:'🧳'},
  {e:'telephone',a:'الهاتف',em:'☎️'},
  {e:'ticket',a:'التذكرة',em:'🎫'},
  {e:'travel agency',a:'وكالة سفريات',em:'🏢'},
  {e:'travel agent',a:'وكيل سفريات',em:'🧑‍💼'},
  {e:'trip',a:'رحلة',em:'🧳'},
  {e:'twin',a:'توأم',em:'👯'},
  {e:'zipper',a:'السحّاب',em:'🤐'},
  {e:'arrive',a:'يصل',em:'🛬'},
  {e:'button (verb)',a:'يزرّر',em:'🔘'},
  {e:'call',a:'يتصل / ينادي',em:'📞'},
  {e:'come back',a:'يرجع',past:'came back',pa:'رجع',em:'🔙'},
  {e:'depart (from)',a:'يغادر (من)',em:'🛫'},
  {e:'go back',a:'يرجع (لمكان)',past:'went back',pa:'رجع (لمكان)',em:'↩️'},
  {e:'graduate',a:'يتخرّج',em:'🎓'},
  {e:'lock (verb)',a:'يقفل',em:'🔒'},
  {e:'meet',a:'يقابل / يلتقي',past:'met',pa:'قابل / التقى',em:'🤝'},
  {e:'pack',a:'يحزم',em:'🧳'},
  {e:'pick up',a:'يستلم / يوصّل شخص',em:'🚗'},
  {e:'pull',a:'يسحب',em:'⬅️'},
  {e:'push',a:'يدفع',em:'➡️'},
  {e:'return',a:'يرجع / يعيد',em:'🔄'},
  {e:'sharpen',a:'يبري',em:'✏️'},
  {e:'stop',a:'يوقف / يتوقف',em:'🛑'},
  {e:'turn',a:'يلف / يدير',em:'🔄'},
  {e:'turn off',a:'يطفئ',em:'🔴'},
  {e:'turn on',a:'يشغّل',em:'🟢'},
  {e:'will',a:'سوف / راح (فعل مساعد للمستقبل)',em:'🔮'},
  {e:"won't",a:'لن (نفي المستقبل — will + not)',em:'🚫'},
  {e:'first',a:'أولاً',em:'1️⃣'},
  {e:'from',a:'من',em:'📍'},
  {e:'in (an hour)',a:'خلال (ساعة)',em:'⏳'},
  {e:'next to',a:'بجانب',em:'➡️'},
  {e:'off',a:'مطفأ',em:'🔴'},
  {e:'on',a:'مشغّل',em:'🟢'},
  {e:'one-way',a:'اتجاه واحد (تذكرة)',em:'➡️'},
  {e:'push-button',a:'بأزرار (هاتف بأزرار)',em:'☎️'},
  {e:'round-trip',a:'ذهاب وعودة (تذكرة)',em:'🔁'},
  {e:'together',a:'مع بعض',em:'🤝'},
  {e:'tonight',a:'الليلة',em:'🌙'},
]
};

// ═══════════════════════════════════════
// STATE
// ═══════════════════════════════════════
let CL=null,CT='learn',XP=0,STK=0,TANS={},built={};
let LP={};
let RW={};

// ═══════════════════════════════════════
// SPEECH
// ═══════════════════════════════════════
function say(t){
  if(!window.speechSynthesis)return;
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(String(t).replace(/\(.*?\)/g,'').trim());
  u.lang='en-US';u.rate=0.82;speechSynthesis.speak(u);
}

// ═══════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════
const SCREENS=['home','lscreen'];
function show_screen(id){SCREENS.forEach(s=>{const el=document.getElementById(s);if(el)el.style.display=(s===id)?'block':'none';});track_screen(id);}

const SCREEN_NAMES={home:'الرئيسية',lscreen:'درس'};
let _curScreen=null,_screenStart=0;
function track_screen(id){
  if(typeof gtag!=='function')return;
  const now=Date.now();
  if(_curScreen&&_screenStart){
    const secs=Math.round((now-_screenStart)/1000);
    if(secs>0&&secs<7200)gtag('event','section_time',{section:SCREEN_NAMES[_curScreen]||_curScreen,seconds:secs});
  }
  let name=SCREEN_NAMES[id]||id;
  if(id==='lscreen'&&typeof CL==='string'&&CL)name='درس '+CL.toUpperCase();
  gtag('event','section_view',{section:name});
  _curScreen=id;_screenStart=now;
}

const LESSON_META={
  l1:{ico:'🤕',title:'Lesson 1 — What\u2019s Wrong?',sub:'جسم الإنسان والصحة'},
  l2:{ico:'🧴',title:'Lesson 2 — Where Can I Get Shampoo?',sub:'أدوات الحمام والتسوّق'},
  l3:{ico:'🧳',title:'Lesson 3 — I’ll Take a Trip',sub:'السفر والحجوزات'}
};

function open_lesson(lk){
  CL=lk;TANS={};built={};
  const m=LESSON_META[lk];
  if(!m)return;
  show_screen('lscreen');
  const ls=document.getElementById('lscreen');
  ls.scrollIntoView({behavior:'smooth',block:'start'});
  document.getElementById('lh-ico').textContent=m.ico;
  document.getElementById('lh-ttl').textContent=m.title;
  document.getElementById('lh-sub').textContent=m.sub;
  ['learn','practice','drag','test'].forEach(t=>{
    document.getElementById('tab-'+t).classList.toggle('active',t==='learn');
    document.getElementById('ph-'+t).classList.toggle('active',t==='learn');
    document.getElementById('ph-'+t).innerHTML='';
  });
  CT='learn';
  build_learn(lk);
}

function go_home(){
  show_screen('home');
  window.scrollTo({top:0,behavior:'smooth'});
}

function sw_tab(t){
  CT=t;
  ['learn','practice','drag','test'].forEach(x=>{
    document.getElementById('tab-'+x).classList.toggle('active',x===t);
    document.getElementById('ph-'+x).classList.toggle('active',x===t);
  });
  const lk=CL;
  if(t==='practice'&&!built['pr'+lk]){build_vocab_drill(lk);built['pr'+lk]=1;}
  if(t==='drag'&&!built['dd'+lk]){build_dd(lk);built['dd'+lk]=1;}
  if(t==='test'&&!built['te'+lk]){build_quiz('ph-test',EE[lk],'te');built['te'+lk]=1;}
}

function build_wip(elId,ico,title,sub){
  document.getElementById(elId).innerHTML=`<div class="wip-card">
    <div class="wip-ico">${ico}</div>
    <div class="wip-t">${title}</div>
    <div class="wip-s">${sub}</div>
  </div>`;
}

// ═══════════════════════════════════════
// WORD ORDER (رتّب الجملة)
// ═══════════════════════════════════════
const WO={
l1:[
  {words:["I","hurt","my","fingernail"],ans:"I hurt my fingernail.",tr:"آذيت ظفر إصبعي.",ar:"hurt فعل شاذ: hurt-hurt-hurt"},
  {words:["You","need","some","medicine"],ans:"You need some medicine.",tr:"تحتاج بعض الدواء.",ar:"medicine = الدواء"},
  {words:["She","has","a","sore","muscle"],ans:"She has a sore muscle.",tr:"عندها عضلة مؤلمة.",ar:"sore = مؤلم/ملتهب"},
  {words:["Which","leg","did","you","hurt","?"],ans:"Which leg did you hurt ?",tr:"أي رجل آذيت؟",ar:"Which + noun للسؤال عن الاختيار"},
  {words:["He","wore","the","white","one"],ans:"He wore the white one.",tr:"لبس الأبيض.",ar:"one = بدل تكرار الاسم (uniform)"},
  {words:["Do","you","like","soccer","or","basketball","?"],ans:"Do you like soccer or basketball ?",tr:"تحب كرة القدم ولا السلة؟",ar:"or بين خيارين — تختار واحد"},
  {words:["His","shoes","are","large"],ans:"His shoes are large.",tr:"حذاؤه كبير.",ar:"large = كبير الحجم"},
  {words:["First","was","Steve","Thomas"],ans:"First was Steve Thomas.",tr:"كان الأول ستيف توماس.",ar:"First تدل على الترتيب"},
],
l2:[
  {words:["There","is","a","sink","in","the","bathroom"],ans:"There is a sink in the bathroom.",tr:"يوجد حوض في الحمام.",ar:"sink مفرد → There is"},
  {words:["Do","you","have","any","soap","?"],ans:"Do you have any soap ?",tr:"عندك صابون؟",ar:"سؤال → any"},
  {words:["I","have","a","little","sugar"],ans:"I have a little sugar.",tr:"عندي شوي سكر.",ar:"sugar غير معدود → a little"},
  {words:["I","want","to","buy","a","few","toothbrushes"],ans:"I want to buy a few toothbrushes.",tr:"أبي أشتري كم فرشاة أسنان.",ar:"toothbrushes معدود → a few"},
  {words:["Can","I","get","shampoo","at","the","drugstore","?"],ans:"Can I get shampoo at the drugstore ?",tr:"أقدر أجيب شامبو من الصيدلية؟",ar:"can = سؤال عن خيار متاح"},
  {words:["Daniel","washes","his","face","with","soap"],ans:"Daniel washes his face with soap.",tr:"دانيال يغسل وجهه بالصابون.",ar:"washes = يغسل (مضارع، هو)"},
  {words:["He","combs","his","hair"],ans:"He combs his hair.",tr:"يمشط شعره.",ar:"combs = يُمشّط"},
  {words:["You","need","a","haircut"],ans:"You need a haircut.",tr:"تحتاج قصة شعر.",ar:"need = يحتاج"},
],
l3:[
  {words:["He","will","be","at","the","library","tonight"],ans:"He will be at the library tonight.",tr:"بيكون بالمكتبة الليلة.",ar:"will قبل الفعل = المستقبل"},
  {words:["Will","he","be","at","the","library","tomorrow","?"],ans:"Will he be at the library tomorrow ?",tr:"بيكون بالمكتبة باكر؟",ar:"Will قبل الفاعل = سؤال نعم/لا"},
  {words:["When","will","he","go","to","class","?"],ans:"When will he go to class ?",tr:"متى بيروح للصف؟",ar:"أداة سؤال + will + فاعل"},
  {words:["The","taxi","picked","her","up","and","stopped","at","the","airport"],ans:"The taxi picked her up and stopped at the airport.",tr:"التاكسي وصّلها وتوقف عند المطار.",ar:"جملة من نص الكتاب"},
  {words:["Diana","will","make","a","reservation","to","Chicago"],ans:"Diana will make a reservation to Chicago.",tr:"ديانا بتسوي حجز لشيكاغو.",ar:"will + make a reservation"},
  {words:["I","will","meet","Jim","tomorrow","morning"],ans:"I will meet Jim tomorrow morning.",tr:"بقابل جيم باكر الصبح.",ar:"tomorrow + morning"},
  {words:["The","plane","will","arrive","in","an","hour"],ans:"The plane will arrive in an hour.",tr:"الطيارة بتوصل خلال ساعة.",ar:"in + مدة زمنية"},
  {words:["Push","the","small","button","on","your","right"],ans:"Push the small button on your right.",tr:"ادفع الزر الصغير يمينك.",ar:"جملة تعليمات من نص الكتاب"},
]
};

function build_dd(lk){
  const el=document.getElementById('ph-drag');
  el.innerHTML=`<div style="background:#EFF6FF;border:2px solid #BFDBFE;border-radius:10px;padding:10px 14px;margin-bottom:16px;font-size:.88rem;font-family:'Cairo',sans-serif;color:#1E40AF">
    ✋ رتّب الكلمات لتكوين جملة صحيحة — اضغط الكلمات بالترتيب الصحيح
  </div>`;

  const items=WO[lk];
  items.forEach((item,idx)=>{
    const shuffled=[...item.words].sort(()=>Math.random()-.5);
    const div=document.createElement('div');
    div.className='wo-card';div.id=`wo${idx}`;
    div.innerHTML=`
      <div class="wo-prompt">🔤 رتّب الكلمات:</div>
      <div class="wo-answer" id="woa${idx}"></div>
      <div class="wo-bank" id="wob${idx}">
        ${shuffled.map((w,wi)=>`<button class="wo-bank-chip" id="woc${idx}_${wi}" onclick="wo_pick(${idx},${wi},'${w.replace(/'/g,"\\'")}',${JSON.stringify(item.words.indexOf(w))})">${w}</button>`).join('')}
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
        <button class="wo-check" onclick="wo_check(${idx},'${item.ans.replace(/'/g,"\\'")}','${item.tr.replace(/'/g,"\\'")}','${item.ar.replace(/'/g,"\\'")}')">✓ تحقق</button>
        <button class="wo-hint-btn" id="wohint${idx}" onclick="wo_hint(${idx},'${item.ans.replace(/'/g,"\\'")}')">💡 تلميح <span id="wohintc${idx}">٣</span></button>
      </div>
      <div id="wofb${idx}"></div>`;
    el.appendChild(div);
  });
}

const woState={};
function wo_pick(idx,wi,word){
  if(!woState[idx])woState[idx]=[];
  const existing=woState[idx].findIndex(x=>x.wi===wi);
  if(existing!==-1){
    woState[idx].splice(existing,1);
    document.getElementById(`woc${idx}_${wi}`).classList.remove('used');
  } else {
    woState[idx].push({wi,word});
    document.getElementById(`woc${idx}_${wi}`).classList.add('used');
  }
  const ans=document.getElementById(`woa${idx}`);
  if(woState[idx].length===0){
    ans.innerHTML='';ans.classList.remove('has-words');
  } else {
    ans.classList.add('has-words');
    ans.innerHTML=woState[idx].map((x,pos)=>
      `<button class="wo-chip placed" onclick="wo_remove(${idx},${x.wi})">${x.word}</button>`
    ).join('');
  }
}
function wo_remove(idx,wi){
  wo_pick(idx,wi,'');
  const ans=document.getElementById(`woa${idx}`);
  if(!woState[idx]||woState[idx].length===0){ans.innerHTML='';ans.classList.remove('has-words');return;}
  ans.innerHTML=woState[idx].map(x=>`<button class="wo-chip placed" onclick="wo_remove(${idx},${x.wi})">${x.word}</button>`).join('');
}
function wo_check(idx,correct,tr,ar){
  if(!woState[idx]||woState[idx].length===0){
    document.getElementById(`wofb${idx}`).innerHTML=`<div class="wo-wrong-reveal"><div class="wo-wrong-ar">⚠️ رتّب الكلمات أولاً</div></div>`;
    return;
  }
  const student=woState[idx].map(x=>x.word).join(' ');
  const norm=s=>s.replace(/\s*[.?!]+\s*$/,'').replace(/\s+/g,' ').trim().toLowerCase();
  const isOk=norm(student)===norm(correct);
  const card=document.getElementById(`wo${idx}`);
  const ans=document.getElementById(`woa${idx}`);
  if(isOk){
    card.className='wo-card wo-ok';
    ans.className='wo-answer wo-correct';
    document.querySelectorAll(`[id^="woc${idx}_"]`).forEach(b=>b.disabled=true);
    XP+=3;document.getElementById('xp').textContent=XP;save_progress();
    say(correct.replace(/[?!.]/g,''));
    document.getElementById(`wofb${idx}`).innerHTML=`<div class="wo-reveal">
      <div class="wo-tr">✅ ${tr}</div>
      ${ar?`<div class="wo-note">💡 ${ar}</div>`:''}
    </div>`;
  } else {
    ans.className='wo-answer wo-wrong';
    setTimeout(()=>{ans.className='wo-answer has-words';},400);
    document.getElementById(`wofb${idx}`).innerHTML=`<div class="wo-wrong-reveal">
      <div class="wo-wrong-ar">❌ الترتيب غير صحيح — حاول مرة أخرى</div>
      <div class="wo-wrong-ans" style="margin-top:6px;font-size:.78rem;color:#999">💡 الجملة لها ${correct.split(' ').length} كلمة</div>
    </div>`;
  }
}

const woHints={};
function wo_hint(idx,correct){
  if(!woHints[idx])woHints[idx]=0;
  if(woHints[idx]>=3)return;

  const words=correct.replace(/\s*[.?!]+\s*$/,'').split(' ');
  const nextPos=woHints[idx];
  const wordToReveal=words[nextPos];

  const chips=document.querySelectorAll(`[id^="woc${idx}_"]`);
  let foundChip=null;
  chips.forEach(chip=>{
    if(!foundChip&&!chip.classList.contains('used')&&chip.textContent.trim()===wordToReveal){
      foundChip=chip;
    }
  });

  if(foundChip){
    foundChip.style.background='var(--o)';
    foundChip.style.color='#fff';
    foundChip.style.borderColor='var(--o)';
    setTimeout(()=>{ foundChip.click(); },400);
  }

  woHints[idx]++;
  const remaining=3-woHints[idx];
  const hintBtn=document.getElementById(`wohint${idx}`);
  const countEl=document.getElementById(`wohintc${idx}`);
  const nums=['٣','٢','١'];
  if(remaining===0){
    hintBtn.disabled=true;
    hintBtn.innerHTML='💡 انتهت التلميحات';
  } else {
    if(countEl)countEl.textContent=nums[woHints[idx]]||'١';
  }
}

// ═══════════════════════════════════════
// GRAMMAR (قواعد)
// ═══════════════════════════════════════
const GRAMMAR={
l1:[
  {
    title:'Which + one / ones', ar:'أيّ + one/ones (بدل تكرار الاسم)',
    rule:'نسأل بـ Which عن الاختيار، ونرد بـ one (بدل اسم مفرد) أو ones (بدل اسم جمع) — بدون ما نكرر نفس الاسم.',
    check:{q:'Which arm did he hurt? — He hurt the left _______.',o:['arm','ones','one','arms'],a:2,en:"one replaces the singular noun 'arm'",ar:'one تحل محل الاسم المفرد arm'},
    compare:[
      {c1:'Which tie do you want?',c2:'I want that one.',ar:'one = بدل tie (مفرد)'},
      {c1:'Which suits do you like?',c2:'I like the blue ones.',ar:'ones = بدل suits (جمع)'},
    ],
    examples:[
      {s:'Which leg did you hurt? — I hurt my right one.',tr:'أي رجل آذيت؟ — آذيت رجلي اليمنى.',ar:'one = بدل leg',ok:true},
      {s:'Which uniform did he wear? — He wore the white one.',tr:'أي زي لبس؟ — لبس الأبيض.',ar:'one = بدل uniform',ok:true},
      {s:'Which shoes do you like? — We like the black ones.',tr:'أيّ حذاء تحب؟ — نحب الأسود.',ar:'ones = بدل shoes (جمع، أكثر من واحد)',ok:true},
      {s:'I want that tie.',wrong:'tie',right:'one',tr:'لا تكرر نفس الاسم اللي قبله بالسؤال — استبدله بـ one.',ok:false},
    ]
  },
  {
    title:'Connector: or', ar:'أداة الربط or — الاختيار بين شيئين',
    rule:'نستخدم or بين خيارين بالسؤال — والجواب يحدّد واحد منهم بس، مو الاثنين.',
    check:{q:'Do you like tea _______ coffee?',o:['and','or','but','so'],a:1,en:'or = choice between two options',ar:'or = اختيار بين شيئين'},
    compare:[
      {c1:'Do you like the red one or the blue one?',c2:'I like the blue one.',ar:'or يعرض خيارين — الجواب يحدّد واحد'},
    ],
    examples:[
      {s:'Do you like to play soccer or basketball? — I like to play soccer.',tr:'تحب تلعب كرة قدم ولا سلة؟ — أحب كرة القدم.',ar:'or بين خيارين، الجواب حدّد واحد',ok:true},
      {s:'Do you like soccer and basketball?',wrong:'and',right:'or',tr:'لما تعرض خيارين يختار منهم واحد، استخدم or مو and.',ok:false},
    ]
  },
  {
    title:'Ordinal Numbers 1st – 12th', ar:'الأعداد الترتيبية من الأول للثاني عشر',
    rule:'نستخدم الأعداد الترتيبية للترتيب مو للعدّ: first, second, third... إلى twelfth. أول ثلاثة أعداد لها صيغة خاصة (first, second, third)، والباقي بس نزيد th بآخر العدد.',
    check:{q:"How old is Alicia? — It's her _______ birthday.",o:['sixteen','sixteenth','sixteen years','sixteen years old'],a:1,en:'Birthday takes the ordinal number: sixteenth',ar:'birthday تاخذ العدد الترتيبي: sixteenth'},
    compare:[
      {c1:'one, two, three',c2:'first, second, third',ar:'صيغة خاصة، مو بس +th'},
      {c1:'four, five, six',c2:'fourth, fifth, sixth',ar:'من هنا وطالع بس نزيد th بالآخر'},
      {c1:'eleven, twelve',c2:'eleventh, twelfth',ar:'eleventh وtwelfth بنفس القاعدة (+th)'},
    ],
    examples:[
      {s:'Steve was first, and Thomas was second.',tr:'ستيف كان الأول، وتوماس كان الثاني.',ar:'first/second = الترتيب مو الرقم العادي',ok:true},
      {s:"It's her twelfth birthday.",tr:'هذا عيد ميلادها الثاني عشر.',ar:'twelfth = العدد الترتيبي لـ 12',ok:true},
      {s:"It's her twelve birthday.",wrong:'twelve',right:'twelfth',tr:'عيد الميلاد ياخذ العدد الترتيبي (twelfth) مو العدد العادي (twelve).',ok:false},
    ]
  },
  {
    title:'Useful Phrases', ar:'عبارات مفيدة عن الصحة',
    rule:'عبارات نستخدمها لما نسأل عن صحة شخص أو نطلب منه ياخذ علاجه — احفظها كوحدة وحدة زي ما هي.',
    check:{q:"Lewis: _______ with Peter? Joan: He's sick.",o:["What's wrong","What hurts","Which is the matter"],a:0,en:"What's wrong? is the standard question for asking about someone's health",ar:"What's wrong? = وش المشكلة؟ (سؤال عن الصحة)"},
    compare:[
      {c1:"What's wrong?",c2:'وش المشكلة؟',ar:'نسأل فيها عن الصحة أو المشكلة'},
      {c1:"What's the matter?",c2:'وش فيك؟',ar:"نفس معنى What's wrong، بس صيغة ثانية"},
      {c1:'take the medicine',c2:'ياخذ / يشرب الدواء',ar:'العبارة اللي نقولها للمريض عشان ياخذ دواه'},
    ],
    examples:[
      {s:"What's wrong? — My throat is sore.",tr:'وش المشكلة؟ — حلقي ملتهب.',ar:"نسأل عن العرض بـ What's wrong؟",ok:true},
      {s:"What's the matter? — My head hurts.",tr:'وش فيك؟ — راسي يألمني.',ar:'صيغة ثانية لنفس السؤال',ok:true},
      {s:'You need to take the medicine.',tr:'لازم تاخذ الدواء.',ar:'take the medicine = ياخذ الدواء',ok:true},
      {s:'What wrong with you?',wrong:'What wrong',right:"What's wrong",tr:"ناقص is — الصح What's wrong؟ مو What wrong؟",ok:false},
    ]
  }
],
l2:[
  {
    title:'There is / There are', ar:'وجود شيء — يوجد / توجد',
    rule:'نستخدم There is مع الاسم المفرد، و There are مع الاسم الجمع، للتعبير عن وجود شيء في مكان.',
    check:{q:'_______ a mirror on the wall.',o:['There is','There are','Is there','Are there'],a:0,en:'mirror is singular → There is',ar:'mirror مفرد → There is'},
    compare:[
      {c1:'Is there a toilet in the bathroom?',c2:'Yes, there is.',ar:'toilet مفرد → is'},
      {c1:'Are there towels in the bathroom?',c2:'Yes, there are.',ar:'towels جمع → are'},
    ],
    examples:[
      {s:'There is a sink in the bathroom.',tr:'يوجد حوض في الحمام.',ar:'sink مفرد → There is',ok:true},
      {s:'There are some towels on the wall.',tr:'توجد بعض المناشف على الحائط.',ar:'towels جمع → There are',ok:true},
      {s:'There is towels in the bathroom.',wrong:'is',right:'are',tr:'towels جمع، فلازم نستخدم are مو is.',ok:false},
    ]
  },
  {
    title:'Some / Any', ar:'some بالإثبات، any بالسؤال والنفي',
    rule:'نستخدم some في الجمل المثبتة، و any في الأسئلة والنفي.',
    check:{q:"I don't have _______ shampoo.",o:['some','any','a','the'],a:1,en:'negative sentence → any',ar:'جملة منفية → any'},
    compare:[
      {c1:'Do you have any soap?',c2:'Yes, I have some.',ar:'سؤال → any، جواب مثبت → some'},
      {c1:'Do you have any milk?',c2:"No, I don't have any.",ar:'سؤال ونفي → any بالاثنين'},
    ],
    examples:[
      {s:'I have some sugar at home.',tr:'عندي بعض السكر بالبيت.',ar:'جملة مثبتة → some',ok:true},
      {s:"We don't have any butter.",tr:'ما عندنا زبدة.',ar:'جملة منفية → any',ok:true},
      {s:'I have any sugar.',wrong:'any',right:'some',tr:'الجملة مثبتة (مو نفي ولا سؤال) — لازم some.',ok:false},
    ]
  },
  {
    title:'a few / a little / a lot of / lots of', ar:'الكمية — معدود وغير معدود',
    rule:'مع الأسماء المعدودة (تُجمع: towels, eggs) استخدم a few. مع غير المعدودة (ما تُجمع: sugar, water) استخدم a little. أما a lot of / lots of فتصلح مع الاثنين.',
    check:{q:'I need _______ eggs for the cake.',o:['a little','a few','much','any'],a:1,en:'eggs is a count noun (plural) → a few',ar:'eggs اسم معدود (يُجمع) → a few'},
    compare:[
      {c1:'towels — اسم معدود',c2:'a few towels',ar:'اسم معدود → a few'},
      {c1:'sugar — اسم غير معدود',c2:'a little sugar',ar:'اسم غير معدود → a little'},
    ],
    examples:[
      {s:'I want to buy a few toothbrushes.',tr:'أبي أشتري كم فرشاة أسنان.',ar:'toothbrushes معدود → a few',ok:true},
      {s:'We have a little butter.',tr:'عندنا شوي زبدة.',ar:'butter غير معدود → a little',ok:true},
      {s:'I need a little eggs.',wrong:'a little',right:'a few',tr:'eggs معدود (يُجمع) — لازم a few مو a little.',ok:false},
    ]
  },
  {
    title:'Can (Possibility)', ar:'can للتعبير عن إمكانية أو خيار',
    rule:'نستخدم can هنا مو للقدرة، بل للتعبير عن خيار متاح — إذا فيه أكثر من طريقة أو مكان ممكن.',
    check:{q:'_______ I get shampoo at the drugstore?',o:['Do','Am','Can','Will'],a:2,en:'can = asking about a possible option',ar:'can = سؤال عن خيار متاح'},
    compare:[
      {c1:'Can I drive to Dallas?',c2:'Yes, you can. You can also fly.',ar:'can = فيه أكثر من خيار ممكن'},
    ],
    examples:[
      {s:'You can get shampoo at the drugstore.',tr:'تقدر تجيب شامبو من الصيدلية.',ar:'can = خيار متاح',ok:true},
      {s:"You can't drive to Honolulu. You can only fly.",tr:'ما تقدر توصل هونولولو بالسيارة، بس بالطيارة.',ar:"can't = غير ممكن، can only = الخيار الوحيد",ok:true},
      {s:'Can I to drive to Dallas?',wrong:'to drive',right:'drive',tr:'بعد can نستخدم الفعل مجرد بدون to.',ok:false},
    ]
  }
],
l3:[
  {
    title:'Talking about the Future — will / won’t', ar:'المستقبل بـ will، والنفي بـ won’t',
    rule:'نستخدم will + الفعل الأصلي للتعبير عن المستقبل — will ثابت مع كل الضمائر (ما تتغيّر شكلها). نختصر will إلى ’ll، ونختصر will not إلى won’t.',
    check:{q:"No, he _______. He'll be in class.",o:["won't","will","isn't","doesn't"],a:0,en:"won't = will not",ar:'won’t = will + not (اختصار النفي)'},
    compare:[
      {c1:'I will call.',c2:"I'll call.",ar:'will = ’ll (اختصار)'},
      {c1:'She will not go.',c2:"She won't go.",ar:'will not = won’t'},
    ],
    examples:[
      {s:'I will call you tonight.',tr:'بكلمك الليلة.',ar:'will + الفعل الأصلي = المستقبل',ok:true},
      {s:"I'll call you tonight.",tr:'بكلمك الليلة (اختصار).',ar:'I’ll = I will',ok:true},
      {s:"She won't be at school tomorrow.",tr:'ما بتكون بالمدرسة باكر.',ar:'won’t = will not',ok:true},
      {s:'She wills not go.',wrong:'wills',right:'will',tr:'will ثابت بكل الضمائر — ما تضيف s حتى مع he/she/it.',ok:false},
    ]
  },
  {
    title:'Yes/No Questions with will', ar:'أسئلة نعم/لا بـ will',
    rule:'نسوي سؤال نعم/لا بـ will بتقديم will قبل الفاعل: will + الفاعل + الفعل؟ الجواب القصير: Yes, ضمير + will. / No, ضمير + won’t.',
    check:{q:'_______ Janet see the doctor tomorrow?',o:['Will','Do','Is','Does'],a:0,en:'Yes/no future question starts with Will',ar:'سؤال المستقبل نعم/لا يبدأ بـ Will'},
    compare:[
      {c1:'He will be at the library.',c2:'Will he be at the library?',ar:'قدّم will قبل الفاعل he لتكوين السؤال'},
      {c1:'Will he go to class?',c2:"Yes, he will. / No, he won't.",ar:'الجواب القصير: will أو won’t بس'},
    ],
    examples:[
      {s:'Will you make a reservation?',tr:'بتسوي حجز؟',ar:'Will + فاعل + فعل = سؤال',ok:true},
      {s:'Will they arrive tonight?',tr:'بيوصلون الليلة؟',ar:'Will قبل الفاعل they',ok:true},
      {s:'Yes, they will.',tr:'إي، بيوصلون.',ar:'جواب قصير: will بس، بدون تكرار الفعل',ok:true},
      {s:'Do you will go?',wrong:'Do you will',right:'Will you',tr:'ما نستخدم Do مع will — will نفسها تتقدّم على الفاعل.',ok:false},
    ]
  },
  {
    title:'Information Questions with will', ar:'أسئلة معلومات بـ will (Who/What/Where...)',
    rule:'نحط أداة السؤال (Who, What, Where, When, Why, How) قبل will مباشرة: أداة السؤال + will + الفاعل + الفعل؟',
    check:{q:'_______ will you make a reservation?',o:['When','Is','Do','Will'],a:0,en:'Wh-word + will + subject + verb',ar:'أداة سؤال + will + فاعل + فعل'},
    compare:[
      {c1:'Dorothy will arrive tomorrow.',c2:'When will Dorothy arrive?',ar:'أداة السؤال + will + الفاعل + الفعل'},
      {c1:'Who will arrive tomorrow?',c2:'Dorothy will arrive tomorrow.',ar:'Who يسأل عن الفاعل نفسه'},
    ],
    examples:[
      {s:'Where will you fly?',tr:'وين بتطير (تسافر)؟',ar:'Where + will + فاعل + فعل',ok:true},
      {s:'Who will meet Wanda for lunch?',tr:'مين بيقابل واندا على الغدا؟',ar:'Who = يسأل عن الفاعل',ok:true},
      {s:'When she will arrive?',wrong:'she will',right:'will she',tr:'لازم will قبل الفاعل بالسؤال، مو بعده.',ok:false},
    ]
  },
  {
    title:'Future Time Expressions', ar:'تعبيرات الوقت المستقبلية — next / tomorrow / in',
    rule:'نستخدم next قبل (year, month, week, weekend, Saturday...)، وtomorrow قبل (morning, afternoon, evening, night)، وin قبل مدة زمنية (in a week, in two days) للتعبير عن وقت مستقبلي.',
    check:{q:'I will study the lesson tomorrow _______.',o:['evening','next','in','week'],a:0,en:'tomorrow + part of day (evening)',ar:'tomorrow + جزء من اليوم'},
    compare:[
      {c1:'next',c2:'month, week, year, weekend, Saturday',ar:'next + وحدة زمنية قادمة'},
      {c1:'tomorrow',c2:'morning, afternoon, evening, night',ar:'tomorrow + جزء من اليوم'},
      {c1:'in',c2:'two minutes, an hour, four days, a week',ar:'in + مدة = بعد مرور هالمدة'},
    ],
    examples:[
      {s:'We will meet Jim tomorrow morning.',tr:'بنقابل جيم باكر الصبح.',ar:'tomorrow + morning',ok:true},
      {s:'Ben will graduate from school next month.',tr:'بن بيتخرّج من المدرسة الشهر الجاي.',ar:'next + month',ok:true},
      {s:'The plane will arrive in an hour.',tr:'الطيارة بتوصل خلال ساعة.',ar:'in + مدة زمنية',ok:true},
      {s:'I will see you in tomorrow.',wrong:'in tomorrow',right:'tomorrow',tr:'tomorrow ما تحتاج in قبلها.',ok:false},
    ]
  }
]
};

// ═══════════════════════════════════════
// LEARN (تعلّم) — مفردات + قواعد
// ═══════════════════════════════════════
function build_learn(lk){
  const el=document.getElementById('ph-learn');
  el.innerHTML='';

  el.innerHTML=`
  <div class="learn-tabs">
    <button class="ltab on" id="lt-v" onclick="sw_learn_tab('v','${lk}')">
      <span class="li">📚</span><span>مفردات</span>
    </button>
    <button class="ltab" id="lt-g" onclick="sw_learn_tab('g','${lk}')">
      <span class="li">📖</span><span>قواعد</span>
    </button>
  </div>
  <div class="lsec on" id="ls-v"></div>
  <div class="lsec" id="ls-g"></div>`;

  build_vocab_sec(lk);
  build_grammar_sec(lk);
}

function sw_learn_tab(t,lk){
  document.querySelectorAll('.ltab').forEach(x=>x.classList.remove('on'));
  document.querySelectorAll('.lsec').forEach(x=>x.classList.remove('on'));
  document.getElementById('lt-'+t).classList.add('on');
  document.getElementById('ls-'+t).classList.add('on');
}

function build_grammar_sec(lk){
  const el=document.getElementById('ls-g');
  const rules=GRAMMAR[lk];
  if(!rules||!rules.length){
    el.innerHTML=`<div class="wip-card">
      <div class="wip-ico">📖</div>
      <div class="wip-t">قواعد الدرس قيد الإعداد</div>
      <div class="wip-s">هذا الجزء بيصير جاهز قريبًا</div>
    </div>`;
    return;
  }
  let html='';
  rules.forEach((g,i)=>{
    html+=`<div class="gcard">
      <div class="gcard-head" id="gh${lk}${i}" onclick="toggle_gcard('${lk}',${i})">
        <div class="gcard-num">${i+1}</div>
        <div style="flex:1">
          <div class="gcard-title">${g.title}</div>
          <div class="gcard-ar">${g.ar}</div>
        </div>
        <span class="gcard-arrow">▼</span>
      </div>
      <div class="gcard-body" id="gb${lk}${i}">
        ${build_gcard_body(g,lk,i)}
      </div>
    </div>`;
  });
  el.innerHTML=html;
}

function toggle_gcard(lk,i){
  const head=document.getElementById('gh'+lk+i);
  const body=document.getElementById('gb'+lk+i);
  head.classList.toggle('open');
  body.classList.toggle('open');
}

function build_check_widget(check,lk,i){
  return `<div class="chk-box" id="chk${lk}${i}">
    <div class="chk-label">🧠 جرّب بنفسك</div>
    <div class="chk-q">${check.q}</div>
    <div class="chk-opts">
      ${check.o.map((opt,oi)=>`<button class="chk-opt" onclick="check_grammar('${lk}',${i},${oi})">${opt}</button>`).join('')}
    </div>
    <div class="chk-fb" id="chkfb${lk}${i}"></div>
  </div>`;
}

function check_grammar(lk,i,oi){
  const g=GRAMMAR[lk][i];
  const box=document.getElementById(`chk${lk}${i}`);
  const btns=box.querySelectorAll('.chk-opt');
  btns.forEach(b=>b.disabled=true);
  const ok=oi===g.check.a;
  btns[oi].classList.add(ok?'ok':'no');
  if(!ok)btns[g.check.a].classList.add('ok');
  const ruleId=lk+'-'+i;
  RW[ruleId]=RW[ruleId]||{wrong:0,right:0};
  if(ok)RW[ruleId].right++; else RW[ruleId].wrong++;
  const fb=document.getElementById(`chkfb${lk}${i}`);
  fb.className='chk-fb show '+(ok?'ok':'no');
  fb.innerHTML=`${ok?'✅':'❌'} ${g.check.ar}`;
  if(ok){XP+=2;document.getElementById('xp').textContent=XP;}
  save_progress();
  say(g.check.o[g.check.a]);
}

function build_gcard_body(g,lk,i){
  let html='';
  const checkHtml=g.check?build_check_widget(g.check,lk,i):'';

  html+=`<div class="rule-box">
    <div class="rb-label">القاعدة</div>
    <div class="rb-text">💡 ${g.rule}</div>
  </div>`;

  if(g.formula&&g.formula.length>0){
    html+='<div class="fstrip">';
    g.formula.forEach(f=>{
      if(f.c==='p')html+=`<span class="farr">${f.t}</span>`;
      else html+=`<span class="fchip ${f.c}">${f.t}</span>`;
    });
    html+='</div>';
  }

  if(g.compare&&g.compare.length>0){
    g.compare.forEach(r=>{
      const safe1=r.c1.replace(/'/g,"\\'");
      const safe2=r.c2.replace(/'/g,"\\'");
      html+=`<div class="qa-pair">
        <div class="qa-row q"><span class="qa-tag">السؤال</span><span class="qa-txt">${r.c1}</span><button class="qa-spk" onclick="say('${safe1}')">🔊</button></div>
        <div class="qa-row a"><span class="qa-tag">الجواب</span><span class="qa-txt">${r.c2}</span><button class="qa-spk" onclick="say('${safe2}')">🔊</button></div>
        ${r.ar?`<div class="qa-note">💡 ${r.ar}</div>`:''}
      </div>`;
    });
  }

  if(g.examples&&g.examples.length>0){
    html+='<div style="margin-top:8px">';
    g.examples.forEach(ex=>{
      if(ex.ok){
        const safe=ex.s.replace(/'/g,"\\'");
        html+=`<div class="ex2 ok">
          <div class="ex2-top">
            <span class="ex2-tag ok">✅ مثال صحيح</span>
            <button class="ex2-spk" onclick="say('${safe}')" aria-label="استمع">🔊</button>
          </div>
          <div class="ex2-en">${ex.s}</div>
          ${ex.tr?`<div class="ex2-tr">${ex.tr}</div>`:''}
          ${ex.ar?`<div class="ex2-note">${ex.ar}</div>`:''}
        </div>`;
      }else{
        let fix=ex.s;
        if(ex.wrong&&ex.right){
          fix=ex.s.replace(ex.wrong,`<span class="ex2-bad">${ex.wrong}</span><span class="ex2-arr">←</span><span class="ex2-rt">${ex.right}</span>`);
        }
        html+=`<div class="ex2 no">
          <div class="ex2-top"><span class="ex2-tag no">⚠️ الخطأ الشائع</span></div>
          <div class="ex2-fix">${fix}</div>
          ${(ex.tr||ex.ar)?`<div class="ex2-tr no">${ex.tr||ex.ar}</div>`:''}
        </div>`;
      }
    });
    html+='</div>';
  }

  return html+checkHtml;
}

function build_vocab_sec(lk){
  const el=document.getElementById('ls-v');
  const words=VOCAB[lk];
  let html=`<div style="font-size:.75rem;color:var(--muted);font-family:'Cairo',sans-serif;margin-bottom:12px;text-align:center">
    اضغط 🔊 لسماع النطق</div>
  <div class="vcards">`;
  words.forEach(v=>{
    const safe=v.e.replace(/'/g,"\\'").replace(/\(.*?\)/g,'').trim();
    html+=`<div class="vcard flip" onclick="this.classList.toggle('flipped')">
      <button class="vs" onclick="event.stopPropagation();say('${safe}')">🔊</button>
      <div class="vflip-inner">
        <div class="vflip-face front">
          <span class="ve">${v.em}</span>
          <div class="vw">${v.e}</div>
        </div>
        <div class="vflip-face back">
          <div class="va">${v.a}</div>
        </div>
      </div>
    </div>`;
  });
  html+='</div>';
  const pastWords=words.filter(w=>w.past);
  if(pastWords.length){
    html+=`<div class="past-sec">
      <div class="past-h">⏮️ نفس الأفعال في الماضي</div>
      <div class="past-note">الأصل ← الماضي · اضغط 🔊 لسماع كلٍّ على حدة</div>`;
    pastWords.forEach(w=>{
      const baseSafe=w.e.replace(/'/g,"\\'"),pastSafe=w.past.replace(/'/g,"\\'");
      html+=`<div class="past-row">
        <div class="pr-forms" dir="ltr">
          <span class="pr-base">${w.e}<button class="pr-spk" onclick="say('${baseSafe}')">🔊</button></span>
          <span class="pr-arrow">→</span>
          <span class="pr-past">${w.past}<button class="pr-spk" onclick="say('${pastSafe}')">🔊</button></span>
        </div>
        <div class="pr-ar">الأصل: ${w.a} · الماضي: ${w.pa}</div>
      </div>`;
    });
    html+='</div>';
  }
  html+=`<div class="vocab-note">🔢 <b>ordinal numbers 1st – 12th</b> (first – twelfth) — تقدر تتعلمها بالتفصيل من تبويب <b>قواعد</b> 📖.</div>`;
  el.innerHTML=html;
}

// ═══════════════════════════════════════
// VOCAB DRILL (تدرّب)
// ═══════════════════════════════════════
const drill={};
function normAr(s){return (s||'').replace(/[ً-ْـ]/g,'').replace(/[إأآا]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/[()\/\.\-—،؟?]/g,' ').replace(/\s+/g,' ').trim();}
function coreAr(a){return a.split(/[—\/\(]/)[0].trim();}
function acceptedAr(w){
  const out=[];
  [w.a,...(w.alt||[])].forEach(x=>String(x).split(/[\/،,]| او | أو /).forEach(p=>{const t=p.replace(/\(.*?\)/g,'').trim();if(t)out.push(t);}));
  return out;
}
function arSkel(s){return normAr(s).replace(/^ال/,'').replace(/ ال/g,' ').replace(/[اويهءئؤ]/g,'');}
function drillTypeOk(input,w){
  const ans=normAr(input);if(ans.length<2)return false;
  const alts=acceptedAr(w).map(normAr);
  for(const k of alts){if(k&&(ans===k||k.includes(ans)||ans.includes(k)))return true;}
  const aSk=arSkel(input);
  if(aSk.length>=2){for(const k of acceptedAr(w)){if(arSkel(k)===aSk)return true;}}
  return false;
}
function pickDistractors(pool,correct,keyFn,n){
  const out=[],seen=new Set([keyFn(correct)]);
  const shuffled=pool.slice().sort(()=>Math.random()-.5);
  for(const w of shuffled){const k=keyFn(w);if(!seen.has(k)){seen.add(k);out.push(w);}if(out.length>=n)break;}
  return out;
}
function build_vocab_drill(lk){
  const words=VOCAB[lk].slice();
  const deck=words.slice().sort(()=>Math.random()-.5);
  const items=deck.map((w,idx)=>{
    const short=coreAr(w.a).split(' ').length<=2;
    let type;
    if((idx+1)%3===0&&short)type='type';
    else type=(idx%2===0)?'en2ar':'ar2en';
    return {w,type};
  });
  drill[lk]={items,idx:0,score:0};
  render_drill(lk);
}
function render_drill(lk){
  const el=document.getElementById('ph-practice');
  const st=drill[lk],total=st.items.length;
  if(st.idx>=total){
    el.innerHTML=`<div class="sp-card sp-done"><div class="sp-emoji">${st.score>=Math.ceil(total*.7)?'🏆':'📚'}</div>
      <div class="sp-donetxt">أحسنت! أكملت تدريب المفردات</div>
      <div class="sp-score">نتيجتك: ${st.score} / ${total}</div>
      <button class="sp-btn check" onclick="build_vocab_drill('${lk}')">🔁 مرّة ثانية</button></div>`;
    return;
  }
  st.wrong=false;
  const it=st.items[st.idx],w=it.w,words=VOCAB[lk];
  const eSafe=w.e.replace(/'/g,"\\'").replace(/\(.*?\)/g,'').trim();
  let head=`<div class="qprog"><div class="qpbar"><div class="qpfill" style="width:${Math.round(st.idx/total*100)}%"></div></div>
    <div class="qptxt">${st.idx+1} / ${total}</div></div>`;
  let body='';
  if(it.type==='en2ar'){
    const opts=[w,...pickDistractors(words,w,x=>x.a,3)].sort(()=>Math.random()-.5);
    body=`<div class="dq">
      <div class="dq-word" dir="ltr">${w.e}<button class="dq-spk" onclick="say('${eSafe}')">🔊</button></div>
      <div class="dq-ask">اختر المعنى الصحيح</div>
      <div class="dq-opts">${opts.map(o=>`<button class="dq-opt" onclick="drill_ans('${lk}',this,${o.a===w.a})">${o.a}</button>`).join('')}</div>
      <div class="dq-fb" id="dq-fb"></div></div>`;
  }else if(it.type==='ar2en'){
    const opts=[w,...pickDistractors(words,w,x=>x.e,3)].sort(()=>Math.random()-.5);
    body=`<div class="dq">
      <div class="dq-word-ar">${coreAr(w.a)}</div>
      <div class="dq-ask">اختر الكلمة الإنجليزية</div>
      <div class="dq-opts">${opts.map(o=>{const s=o.e.replace(/'/g,"\\'").replace(/\(.*?\)/g,'').trim();return `<button class="dq-opt en" dir="ltr" onclick="drill_ans('${lk}',this,${o.e===w.e},'${s}')">${o.e}</button>`;}).join('')}</div>
      <div class="dq-fb" id="dq-fb"></div></div>`;
  }else{
    body=`<div class="dq">
      <div class="dq-word" dir="ltr">${w.e}<button class="dq-spk" onclick="say('${eSafe}')">🔊</button></div>
      <div class="dq-ask">✍️ اكتب المعنى بالعربية</div>
      <input class="dq-input" id="dq-input" autocomplete="off" placeholder="اكتب هنا..." onkeydown="if(event.key==='Enter')drill_type('${lk}')">
      <div class="dq-fb" id="dq-fb"></div>
      <button class="sp-btn check" style="margin-top:12px" onclick="drill_type('${lk}')">تحقّق ✓</button>
      <button class="sp-skip" onclick="drill_reveal_type('${lk}')">لا أعرف — أظهر المعنى ←</button></div>`;
  }
  el.innerHTML=head+body;
  const inp=document.getElementById('dq-input');if(inp)inp.focus();
}
function drill_next(lk){setTimeout(()=>{drill[lk].idx++;render_drill(lk);},900);}
function drill_ans(lk,btn,ok,speak){
  const st=drill[lk],fb=document.getElementById('dq-fb'),w=st.items[st.idx].w;
  if(ok){
    document.querySelectorAll('.dq-opt').forEach(b=>b.disabled=true);
    btn.classList.add('ok');
    if(!st.wrong)st.score++;
    say(speak||w.e.replace(/\(.*?\)/g,'').trim());
    fb.innerHTML='✅ صحيح! <span dir="ltr">'+w.e.replace(/\(.*?\)/g,'').trim()+'</span> = '+coreAr(w.a);
    fb.style.color='var(--g)';
    XP+=2;document.getElementById('xp').textContent=XP;save_progress();
    drill_next(lk);
  }else{
    st.wrong=true;btn.classList.add('no');btn.disabled=true;
    fb.textContent='❌ حاول مرة أخرى';fb.style.color='var(--r)';
  }
}
function drill_type(lk){
  const inp=document.getElementById('dq-input');if(!inp||inp.disabled)return;
  const st=drill[lk],w=st.items[st.idx].w,fb=document.getElementById('dq-fb');
  if(!inp.value.trim()){return;}
  const ok=drillTypeOk(inp.value,w);
  if(ok){
    inp.disabled=true;inp.classList.remove('no');inp.classList.add('ok');
    if(!st.wrong)st.score++;
    say(w.e.replace(/\(.*?\)/g,'').trim());
    fb.innerHTML='✅ ممتاز! <span dir="ltr">'+w.e.replace(/\(.*?\)/g,'').trim()+'</span> = '+coreAr(w.a);
    fb.style.color='var(--g)';
    XP+=3;document.getElementById('xp').textContent=XP;save_progress();
    drill_next(lk);
  }else{
    st.wrong=true;inp.classList.remove('no');void inp.offsetWidth;inp.classList.add('no');
    fb.textContent='❌ حاول مرة أخرى';fb.style.color='var(--r)';
    inp.focus();setTimeout(()=>{inp.classList.remove('no');},600);
  }
}
function drill_reveal_type(lk){
  const st=drill[lk],dq=document.querySelector('#ph-practice .dq'),inp=document.getElementById('dq-input'),fb=document.getElementById('dq-fb'),w=st.items[st.idx].w;
  if(inp)inp.disabled=true;
  st.wrong=true;
  const eClean=w.e.replace(/\(.*?\)/g,'').trim();
  say(eClean);
  fb.innerHTML='📖 <span dir="ltr">'+eClean+'</span> = <b>'+coreAr(w.a)+'</b> — احفظها 👍';fb.style.color='var(--navy)';
  if(dq)dq.querySelectorAll('.sp-btn.check, .sp-skip').forEach(b=>b.style.display='none');
  if(dq&&!document.getElementById('dq-cont')){
    const nb=document.createElement('button');nb.id='dq-cont';nb.className='sp-btn next';nb.style.marginTop='14px';nb.textContent='التالي ←';
    nb.onclick=()=>{st.idx++;render_drill(lk);};
    dq.appendChild(nb);
  }
}

// ═══════════════════════════════════════
// EVALUATION EXERCISES (اختبر) — EXACT FROM BOOK
// ═══════════════════════════════════════
const EE={
l1:[
  {q:'The _______ month of the year is December.',o:['large','long','last'],a:2,en:'December is the last month of the year',ar:'last = الأخير — ديسمبر آخر شهر بالسنة',tr:'آخر شهر بالسنة هو ديسمبر.'},
  {q:'My brother has a big family. They have a _______ car.',o:['large','long','last'],a:0,en:'A big family needs a large car',ar:'large = كبير الحجم، يناسب عائلة كبيرة',tr:'أخوي عنده عائلة كبيرة. عندهم سيارة كبيرة.'},
  {q:"Kim didn't hurt her right leg. She hurt her _______ leg.",o:['short','one','left'],a:2,en:'Not right → left (the opposite side)',ar:'عكس right = left',tr:'كيم ما آذت رجلها اليمنى. آذت رجلها اليسار.'},
  {q:'Your tongue is inside your _______.',o:['neck','mouth','ear'],a:1,en:'The tongue is inside the mouth',ar:'اللسان داخل الفم',tr:'لسانك جوا فمك.'},
  {q:'You wear your shoes on your _______.',o:['toes','foot','feet'],a:2,en:'Shoes (plural) go on feet (plural)',ar:'shoes جمع → feet جمع',tr:'تلبس حذاءك على قدميك.'},
  {q:'My throat was _______ yesterday. I took medicine. My throat is okay today.',o:['sore','large','next'],a:0,en:'A sore throat needs medicine',ar:'sore = مؤلم/ملتهب، لذلك أخذ دواء',tr:'حلقي كان ملتهب أمس. أخذت دواء. حلقي تمام اليوم.'},
  {q:"Lewis: _______ with Peter? Joan: He's sick.",o:["What's wrong","What hurts","Which is the matter"],a:0,en:"What's wrong? is the standard question for asking about someone's health",ar:"What's wrong? = وش المشكلة؟ (سؤال عن الصحة)",tr:'وش المشكلة مع بيتر؟ — هو مريض.'},
  {q:'Did Jack hurt his arm _______ his leg?',o:['one','of','or'],a:2,en:'or connects two choices in a question',ar:'or يربط بين خيارين بالسؤال',tr:'جاك آذى ذراعه ولا رجله؟'},
  {q:'_______ arm did he hurt?',o:['When','Which','Where'],a:1,en:'Which asks about a choice',ar:'Which للسؤال عن الاختيار',tr:'أي ذراع آذى؟'},
  {q:'Anne: Which car do you like? Karen: I like the blue _______.',o:['one','of','or'],a:0,en:"one replaces the noun 'car'",ar:'one = بدل تكرار car',tr:'آن: أي سيارة تحبين؟ كارين: أحب الزرقاء.'},
  {q:'The paragraph is _______ the muscles of the body.',o:['about','of','one'],a:0,en:'about = on the topic of',ar:'about = بخصوص/عن',tr:'الفقرة عن عضلات الجسم.'},
  {q:'That book has 1,345 pages. It is a _______ book.',o:['short','long','last'],a:1,en:'Many pages = a long book',ar:'صفحات كثيرة = كتاب طويل',tr:'هذا الكتاب فيه ١٣٤٥ صفحة. هو كتاب طويل.'},
],
l2:[
  {q:'Is there a desk in the room? — Yes, _______.',o:['they is','there is','they are','it is'],a:1,en:'The answer matches the question form: Is there → there is',ar:'الجواب يطابق صيغة السؤال: Is there → there is',tr:'فيه مكتب بالغرفة؟ — إي، فيه.'},
  {q:"Do you have some coffee? — No, _______.",o:['I didn’t','I don’t have some','I have any',"I don't have any"],a:3,en:'any is used in negative statements',ar:'any تُستخدم في النفي',tr:'عندك قهوة؟ — لا، ما عندي أي.'},
  {q:"_______ you walk home? — No, I can't.",o:['Can','May','Must','Did'],a:0,en:"The short answer “I can't” matches the question “Can”",ar:'الجواب I can\'t يطابق السؤال Can',tr:'تقدر تمشي للبيت؟ — لا، ما أقدر.'},
  {q:'There are _______ combs.',o:['a little','any','a few','a lot'],a:2,en:'combs is a count noun (plural) → a few',ar:'combs اسم معدود جمع → a few',tr:'فيه شوي أمشاط.'},
  {q:"You need a haircut. — I know, I'm going to the _______.",o:['commissary','barber shop','grocery store','drug store'],a:1,en:'You get a haircut at the barber shop',ar:'تحصل على قصة شعر في محل الحلاقة',tr:'تحتاج قصة شعر. — أعرف، رايح لمحل الحلاقة.'},
  {q:'Monica needs _______ sugar.',o:['a few','any','a little','a lots of'],a:2,en:'sugar is a noncount noun → a little',ar:'sugar اسم غير معدود → a little',tr:'مونيكا تحتاج شوي سكر.'},
  {q:"How old is Alicia? — It's her _______ birthday.",o:['sixteen','sixteenth','sixteen years','sixteen years old'],a:1,en:'Birthday takes the ordinal number: sixteenth',ar:'birthday تاخذ العدد الترتيبي: sixteenth',tr:'كم عمر أليشا؟ — عيد ميلادها السادس عشر.'},
  {q:'_______ any dry towels? — Yes, there are.',o:['Was','Is there','Do you','Are there'],a:3,en:'towels is plural → Are there',ar:'towels جمع → Are there',tr:'فيه مناشف ناشفة؟ — إي، فيه.'},
  {q:'Jean needed _______ a haircut.',o:['have','got','to do','to get'],a:3,en:'needed + to get (infinitive)',ar:'needed + to get (مصدر)',tr:'جين احتاجت تسوي قصة شعر.'},
  {q:"What is Sue doing? — She's _______ her hair.",o:['drying','rinse','shampoo','is combing'],a:0,en:"She's + verb-ing",ar:"She's + فعل+ing",tr:'وش تسوي سو؟ — تجفف شعرها.'},
  {q:'John washed his face with a _______.',o:['shampoo','washcloth','water','rinse'],a:1,en:'You wash your face with a washcloth',ar:'تغسل وجهك بقطعة قماش (washcloth)',tr:'جون غسل وجهه بقطعة قماش.'},
  {q:"Mitch doesn't have _______ money.",o:['no','many','any','lots'],a:2,en:"doesn't have + any (negative)",ar:"doesn't have + any (نفي)",tr:'ميتش ما عنده أي فلوس.'},
],
l3:[
  {q:"_______ your coat and put on your gloves. It's very cold outside.",o:['Lock','Button','Turn on','Sharpen'],a:1,en:'Button (verb) = fasten with buttons',ar:'Button (فعل) = يزرّر',tr:'زرّر معطفك ولبس قفازاتك. الجو بره بارد جدًا.'},
  {q:'My classes end on Tuesday. My _______ will be on Friday.',o:['reservation','gate','graduation','ticket'],a:2,en:'graduation = the school finishing ceremony',ar:'graduation = حفل التخرّج',tr:'صفوفي تخلص يوم الثلاثاء. تخرّجي بيكون يوم الجمعة.'},
  {q:"Jerry is 30 years old. He's _______ to school next year. He wants to learn about computers.",o:['graduating','going back','meeting','turning'],a:1,en:'going back = returning to school after time away',ar:'going back = يرجع لمكان كان فيه قبل',tr:'جيري عمره ٣٠ سنة. بيرجع للمدرسة السنة الجاية.'},
  {q:'A: Is the television on in your room? B: No, I _______.',o:['turned it on','turned it off','changed it','pulled it'],a:1,en:'No matches the opposite of on: turned it off',ar:'الجواب No يطابق: طفّاها (turned it off)',tr:'التلفزيون شغال بغرفتك؟ — لا، طفّيته.'},
  {q:"It's too cold. I need a shirt with long _______.",o:['sleeves','legs','buttons','zippers'],a:0,en:'sleeves = the parts of a shirt covering the arms',ar:'sleeves = أكمام القميص',tr:'الجو بارد جدًا. أحتاج قميص بأكمام طويلة.'},
  {q:'A: How much were the _______ for the game? B: They were $7 each.',o:['buttons','flights','tickets','customers'],a:2,en:'tickets = what you buy to attend a game',ar:'tickets = تذاكر للحضور',tr:'بكم كانت تذاكر المباراة؟ — كانت ٧ دولار للواحدة.'},
  {q:'A: The music _______. B: Yes, Tom turned off the radio.',o:['returned','came back','moved','stopped'],a:3,en:'stopped matches turned off the radio',ar:'stopped = توقّفت (طفّى الراديو)',tr:'الموسيقى توقفت. — إي، توم طفى الراديو.'},
  {q:'A: Can I turn off the TV? B: Yes, _______ the small button on your right.',o:['lock','push','call','pack'],a:1,en:'push = press a button',ar:'push = اضغط/ادفع الزر',tr:'أقدر أطفي التلفزيون؟ — إي، اضغط الزر الصغير يمينك.'},
  {q:'A: When is your sister _______ from her trip? B: Next month.',o:['coming back','stopping','going back','packing'],a:0,en:'coming back = returning from a trip',ar:'coming back = ترجع من رحلة',tr:'متى راح ترجع أختك من رحلتها؟ — الشهر الجاي.'},
  {q:'A: Which knob do I _______ to change the music on the radio? B: The one on the right.',o:['lock','sharpen','turn','stop'],a:2,en:'turn a knob = rotate it to adjust',ar:'turn = تلف/تدير المقبض',tr:'أي مقبض ألف عشان أغيّر الموسيقى بالراديو؟ — اللي على اليمين.'},
  {q:'A: Which _______ are you flying? B: I’m flying Northwest.',o:['airplane','airport','airline','arrival'],a:2,en:'airline = the company you fly with',ar:'airline = شركة الطيران',tr:'أي شركة طيران بتسافر فيها؟ — بسافر مع Northwest.'},
  {q:"I'll come back _______ one week.",o:['off','from','on','in'],a:3,en:'in + duration = after that time passes',ar:'in + مدة = بعد مرور هالمدة',tr:'بارجع خلال أسبوع.'},
]
};

function build_quiz(elId,qs,prefix){
  const el=document.getElementById(elId);
  el.innerHTML='';
  const isTest=prefix==='te';

  if(isTest){
    const L=LP[CL];
    const bestTxt=(L&&typeof L.pct==='number')?`أفضل نتيجة سابقة: ${L.pct}%${L.done?' ✓':''}`:'لم تُنهِ هذا الاختبار بعد';
    const top=`<div class="test-top">
      <span class="test-best ${(L&&L.done)?'done':''}">${bestTxt}</span>
      <button class="test-restart" onclick="restart_test()">🔄 ابدأ من جديد</button>
    </div>`;
    el.innerHTML=top+`<div class="qprog"><div class="qpbar"><div class="qpfill" id="${prefix}pf"></div></div>
      <div class="qptxt" id="${prefix}pt">0 / ${qs.length}</div></div>`;
  }

  const wrap=document.createElement('div');
  qs.forEach((q,i)=>{
    const c=document.createElement('div');c.className='qcrd';c.id=`${prefix}c${i}`;
    const L=['A','B','C','D'];
    c.innerHTML=`<div class="qhdr">
      <div class="qtxt">${i+1}. ${q.q}</div>
      <button class="qspk" onclick="say('${q.q.replace(/_+/g,'blank').replace(/'/g,"\\'")}')">🔊</button>
    </div>
    <div class="opts" id="${prefix}o${i}">
      ${q.o.map((opt,oi)=>`<button class="opt" id="${prefix}op${i}${oi}"
        onclick="ans('${prefix}',${i},${oi},${q.a},'${(q.tr||'').replace(/'/g,"\\'")}')">
        <span class="oltr">${L[oi]}</span>${opt}</button>`).join('')}
    </div>
    <div class="fb" id="${prefix}fb${i}">
      <span style="font-size:.9rem;flex-shrink:0" id="${prefix}fi${i}"></span>
      <div><div class="fb-en" id="${prefix}fe${i}"></div><div class="fb-ar" id="${prefix}fa${i}"></div></div>
    </div>`;
    wrap.appendChild(c);
  });
  el.appendChild(wrap);

  if(isTest){
    const sr=document.createElement('div');sr.className='submit-row';
    sr.innerHTML=`<button class="sbtn" onclick="submit_test()">إرسال الإجابات →</button>`;
    el.appendChild(sr);
  }
}

function ans(pfx,qi,oi,correct,tr){
  const opts=document.querySelectorAll(`#${pfx}o${qi} .opt`);
  opts.forEach(b=>b.disabled=true);
  const fb=document.getElementById(`${pfx}fb${qi}`);
  const card=document.getElementById(`${pfx}c${qi}`);
  const ok=oi===correct;
  opts[correct].classList.add('ok');
  if(!ok)opts[oi].classList.add('no');
  card.classList.add(ok?'qok':'qno');
  document.getElementById(`${pfx}fi${qi}`).textContent=ok?'✅':'❌';
  document.getElementById(`${pfx}fe${qi}`).textContent=ok?'Correct!':`Answer: ${['A','B','C','D'][correct]}`;
  document.getElementById(`${pfx}fa${qi}`).textContent=tr;
  fb.className='fb show '+(ok?'ok':'no');
  if(ok){XP+=5;document.getElementById('xp').textContent=XP;STK++;document.getElementById('streak').textContent=STK;save_progress();}
  else{STK=0;document.getElementById('streak').textContent=STK;save_progress();}
  say(EE[CL][qi].o[correct]);

  const total=EE[CL].length;
  TANS[qi]=ok;
  const done=Object.keys(TANS).length;
  const pf=document.getElementById('tepf'),pt=document.getElementById('tept');
  if(pf)pf.style.width=Math.round(done/total*100)+'%';
  if(pt)pt.textContent=`${done} / ${total}`;
}

function submit_test(){
  const total=EE[CL].length;
  const correct=Object.values(TANS).filter(Boolean).length;
  show_result(correct,total);
}

function show_result(correct,total){
  const pct=Math.round(correct/total*100);
  document.getElementById('m-score').textContent=pct+'%';
  document.getElementById('m-sub').textContent=`أجبت بشكل صحيح على ${correct} من ${total} سؤالاً`;
  let emo,grade,color;
  if(pct>=90){emo='🏆';grade='ممتاز! أداء رائع!';color='var(--g)';}
  else if(pct>=70){emo='✅';grade='جيد جداً! استمر!';color='var(--b)';}
  else if(pct>=50){emo='📚';grade='راجع المادة مرة أخرى';color='var(--o)';}
  else{emo='💪';grade='تحتاج مزيداً من التدريب';color='var(--r)';}
  document.getElementById('m-emo').textContent=emo;
  document.getElementById('m-grade').textContent=grade;
  document.getElementById('m-grade').style.color=color;
  ['s1','s2','s3'].forEach(s=>document.getElementById(s).classList.remove('lit'));
  if(pct>=50)document.getElementById('s1').classList.add('lit');
  if(pct>=70)document.getElementById('s2').classList.add('lit');
  if(pct>=90)document.getElementById('s3').classList.add('lit');
  document.getElementById('modal').classList.add('show');
  const nb=document.getElementById('m-next');
  if(nb){
    const order=['l1'];const i=order.indexOf(CL);
    nb.style.display=(i>=0&&i<order.length-1)?'inline-block':'none';
  }
  const prev=(LP[CL]&&LP[CL].pct)||0;
  const best=Math.max(prev,pct);
  LP[CL]={pct:best,done:best>=70};
  apply_lessons();
  upd_global();
  save_progress();
  if(pct>=90)confetti();
}

function close_modal(){document.getElementById('modal').classList.remove('show');}

function next_lesson(){
  const order=['l1'];const i=order.indexOf(CL);
  close_modal();
  if(i>=0&&i<order.length-1)open_lesson(order[i+1]);
  else go_home();
}

function retry(){
  close_modal();
  TANS={};delete built['te'+CL];
  document.getElementById('ph-test').innerHTML='';
  build_quiz('ph-test',EE[CL],'te');
  built['te'+CL]=1;
}

function restart_test(){
  TANS={};
  delete built['te'+CL];
  document.getElementById('ph-test').innerHTML='';
  build_quiz('ph-test',EE[CL],'te');
  built['te'+CL]=1;
}

function upd_global(){
  const done=document.querySelectorAll('.lcard.done').length;
  document.getElementById('gpfill').style.width=(done/4*100)+'%';
  document.getElementById('gptxt').textContent=`${done} من 4 دروس مكتملة`;
}

function confetti(){
  const con=document.getElementById('conf');con.innerHTML='';
  const cols=['#58CC02','#1CB0F6','#FFC800','#FF9600','#CE82FF','#FF4B4B'];
  for(let i=0;i<80;i++){
    const p=document.createElement('div');p.className='cp';
    p.style.cssText=`left:${Math.random()*100}%;top:-10px;
      background:${cols[Math.floor(Math.random()*cols.length)]};
      border-radius:${Math.random()>.5?'50%':'2px'};
      animation-delay:${Math.random()*1.5}s;
      animation-duration:${1.5+Math.random()}s;`;
    con.appendChild(p);
  }
  setTimeout(()=>{con.innerHTML='';},3000);
}
