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
  {e:'foot / feet',a:'القدم / الأقدام',em:'🦶'},
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
  l1:{ico:'🤕',title:'Lesson 1 — What\u2019s Wrong?',sub:'جسم الإنسان والصحة'}
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
  if(t==='drag'&&!built['dd'+lk]){build_wip('ph-drag','🔤','رتّب الجملة قيد الإعداد','هذا الجزء بيصير جاهز قريبًا');built['dd'+lk]=1;}
  if(t==='test'&&!built['te'+lk]){build_wip('ph-test','🏆','اختبار الدرس قيد الإعداد','هذا الجزء بيصير جاهز قريبًا');built['te'+lk]=1;}
}

function build_wip(elId,ico,title,sub){
  document.getElementById(elId).innerHTML=`<div class="wip-card">
    <div class="wip-ico">${ico}</div>
    <div class="wip-t">${title}</div>
    <div class="wip-s">${sub}</div>
  </div>`;
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
    formula:[{t:'Which',c:'k'},{t:'+ noun',c:'s'},{t:'...?',c:'p'},{t:'the + صفة',c:'n'},{t:'+',c:'p'},{t:'one / ones',c:'v'}],
    compareHeaders:['السؤال (Question)','الجواب (Answer)'],
    compare:[
      {c1:'Which tie do you want?',c2:'I want that one.',ar:'one = بدل tie (مفرد)'},
      {c1:'Which suits do you like?',c2:'I like the blue ones.',ar:'ones = بدل suits (جمع)'},
    ],
    examples:[
      {s:'Which leg did you hurt? — I hurt my right one.',tr:'أي رجل آذيت؟ — آذيت رجلي اليمنى.',ar:'one = بدل leg',ok:true},
      {s:'Which uniform did he wear? — He wore the white one.',tr:'أي زي لبس؟ — لبس الأبيض.',ar:'one = بدل uniform',ok:true},
      {s:'Which do you like? — We like the black ones.',tr:'أيّ تحب؟ — نحب السود.',ar:'ones = جمع (أكثر من واحد)',ok:true},
      {s:'I want that tie.',wrong:'tie',right:'one',tr:'لا تكرر نفس الاسم اللي قبله بالسؤال — استبدله بـ one.',ok:false},
    ]
  },
  {
    title:'Connector: or', ar:'أداة الربط or — الاختيار بين شيئين',
    rule:'نستخدم or بين خيارين بالسؤال — والجواب يحدّد واحد منهم بس، مو الاثنين.',
    check:{q:'Do you like tea _______ coffee?',o:['and','or','but','so'],a:1,en:'or = choice between two options',ar:'or = اختيار بين شيئين'},
    formula:[{t:'Do you like',c:'s'},{t:'A',c:'v'},{t:'or',c:'k'},{t:'B',c:'v'},{t:'?',c:'p'}],
    compareHeaders:['السؤال (Question)','الجواب (Answer)'],
    compare:[
      {c1:'Do you like the red one or the blue one?',c2:'I like the blue one.',ar:'or يعرض خيارين — الجواب يحدّد واحد'},
    ],
    examples:[
      {s:'Do you like to play soccer or basketball? — I like to play soccer.',tr:'تحب تلعب كرة قدم ولا سلة؟ — أحب كرة القدم.',ar:'or بين خيارين، الجواب حدّد واحد',ok:true},
      {s:'Do you like soccer and basketball?',wrong:'and',right:'or',tr:'لما تعرض خيارين يختار منهم واحد، استخدم or مو and.',ok:false},
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
    const h1=(g.compareHeaders&&g.compareHeaders[0])||'Present / Base';
    const h2=(g.compareHeaders&&g.compareHeaders[1])||'Past';
    html+=`<table class="ctab"><thead><tr>
      <th class="c1">${h1}</th><th class="c2">${h2}</th><th class="c3">معنى</th>
    </tr></thead><tbody>`;
    g.compare.forEach(r=>{
      const safe1=r.c1.replace(/'/g,"\\'");
      const safe2=r.c2.replace(/'/g,"\\'");
      html+=`<tr>
        <td>${r.c1} <button class="ex-spk" style="background:var(--b);border:none;border-radius:5px;width:22px;height:22px;font-size:.65rem;cursor:pointer;float:left" onclick="say('${safe1}')">🔊</button></td>
        <td>${r.c2} <button class="ex-spk" style="background:#7C3AED;border:none;border-radius:5px;width:22px;height:22px;font-size:.65rem;cursor:pointer;float:left" onclick="say('${safe2}')">🔊</button></td>
        <td class="ar">${r.ar}</td>
      </tr>`;
    });
    html+='</tbody></table>';
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
    اضغط زر 🔊 لسماع النطق</div>
  <div class="vcards">`;
  words.forEach(v=>{
    const safe=v.e.replace(/'/g,"\\'").replace(/\(.*?\)/g,'').trim();
    html+=`<div class="vcard">
      <button class="vs" onclick="say('${safe}')">🔊</button>
      <span class="ve">${v.em}</span>
      <div class="vw">${v.e}</div>
      <div class="va">${v.a}</div>
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
  html+=`<div class="vocab-note">🔢 <b>ordinal numbers 1st – 12th</b> (first – twelfth) — الأعداد الترتيبية من الأول إلى الثاني عشر، بتنجي بالتفصيل بقسم القواعد قريبًا.</div>`;
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
