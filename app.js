// ═══════════════════════════════════════════
// ALL EVALUATION QUESTIONS — EXACT FROM BOOK
// ═══════════════════════════════════════════
let CL=null,CT='learn',XP=0,STK=0,TANS={},FANS={},built={};
let LP={}; // lesson progress: {l1:{pct, done}, ...} — best score per lesson
let ddSelected=null; // word selected for drag

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
function show_screen(id){SCREENS.forEach(s=>{const el=document.getElementById(s);if(el)el.style.display=(s===id)?'block':'none';});track_screen(id);}

// ── Analytics: track which section + time spent ──
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
function _flush_screen_time(){
  if(typeof gtag!=='function'||!_curScreen||!_screenStart)return;
  const secs=Math.round((Date.now()-_screenStart)/1000);
  if(secs>0&&secs<7200)gtag('event','section_time',{section:SCREEN_NAMES[_curScreen]||_curScreen,seconds:secs});
  _screenStart=Date.now();
}
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')_flush_screen_time();});
window.addEventListener('pagehide',_flush_screen_time);

// Quizzes stay hidden until the learner clicks "اختبر نفسك"
function reset_quiz(id){
  const q=document.getElementById(id+'-quiz');if(q)q.classList.remove('show');
  const t=document.getElementById(id+'-toggle');if(t)t.style.display='';
}
function reveal_quiz(id){
  const q=document.getElementById(id+'-quiz');if(q)q.classList.add('show');
  const t=document.getElementById(id+'-toggle');if(t)t.style.display='none';
  if(q)q.scrollIntoView({behavior:'smooth',block:'start'});
}

// Shared 4-question concept card: المعنى / متى / مثال / أشهر خطأ
function concept_html(accentTx,borderBd,headerInner,d,block2Extra){
  const exSafe=d.ex.e.replace(/'/g,"\\'"),goodSafe=d.good.replace(/'/g,"\\'");
  return `<div class="prep-detail" style="border-color:${borderBd};padding-top:8px">
    <h3 style="color:${accentTx};margin-bottom:6px">${headerInner}</h3>
    <div class="cblock b-mean"><div class="cblock-h"><span class="cblock-n" style="background:#3B82F6">1</span>💬 المعنى</div>
      <div class="cblock-txt">${d.meaning}</div></div>
    <div class="cblock b-when"><div class="cblock-h"><span class="cblock-n" style="background:#16A34A">2</span>🎯 متى ولماذا؟</div>
      <div class="cblock-txt">${d.when}</div>${block2Extra||''}
      ${d.triggers?`<div class="trig-list">${d.triggers.map(t=>`<div class="trig"><span class="trig-en">${t.e}</span><span class="trig-ar">${t.a}</span></div>`).join('')}</div>`:''}
      ${d.link?`<div class="mind-link">💡 ${d.link}</div>`:''}</div>
    <div class="cblock b-order"><div class="cblock-h"><span class="cblock-n" style="background:#7C3AED">3</span>✍️ مثال</div>
      <div class="order-ex"><span class="en">${d.ex.e}</span><button class="mini-spk" onclick="say('${exSafe}')" aria-label="استمع">🔊</button></div>
      <div class="cblock-txt" style="margin-top:5px">${d.ex.a}</div></div>
    <div class="cblock b-bad"><div class="cblock-h"><span class="cblock-n" style="background:#EA580C">4</span>⚠️ أشهر خطأ للمبتدئين</div>
      <div class="badgood"><span class="bg-x">❌ <span class="en strike">${d.bad}</span></span>
      <span class="bg-ok">✅ <span class="en">${d.good}</span> <button class="mini-spk ok" onclick="say('${goodSafe}')" aria-label="استمع">🔊</button></span></div></div>
  </div>`;
}

function open_lesson(lk){
  CL=lk;TANS={};built={};
  const icon={l1:'🏃',l2:'🎖️',l3:'👕',l4:'🌤️'};
  const title={l1:'Lesson 1 — Sports & Games',l2:"Lesson 2 — He's in the Army",l3:"Lesson 3 — Where Are My Clothes?",l4:'Lesson 4 — Pencils in 10 Colors'};
  const sub={l1:'الرياضة والألعاب',l2:'الحياة العسكرية',l3:'الملابس والقدرات',l4:'الفصول والألوان'};
  show_screen('lscreen');
  const ls=document.getElementById('lscreen');
  ls.scrollIntoView({behavior:'smooth',block:'start'});
  document.getElementById('lh-ico').textContent=icon[lk];
  document.getElementById('lh-ttl').textContent=title[lk];
  document.getElementById('lh-sub').textContent=sub[lk];
  ['learn','practice','drag','test'].forEach(t=>{
    document.getElementById('tab-'+t).classList.toggle('active',t==='learn');
    document.getElementById('ph-'+t).classList.toggle('active',t==='learn');
    document.getElementById('ph-'+t).innerHTML='';
  });
  CT='learn';
  build_learn(lk);
}

function open_final(){
  CL='final';FANS={};
  show_screen('fscreen');
  document.getElementById('fscreen').scrollIntoView({behavior:'smooth',block:'start'});
  build_final();
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
  if(t==='test'&&!built['te'+lk]){TANS={};build_quiz('ph-test',EE[lk],'te');built['te'+lk]=1;}
}

// ═══════════════════════════════════════
// BUILD LEARN
// ═══════════════════════════════════════

// ═══════════════════════════════════════
// BUILD LEARN — REDESIGNED
// ═══════════════════════════════════════
function build_learn(lk){
  const el=document.getElementById('ph-learn');
  el.innerHTML='';

  // Tabs
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
  el.innerHTML=html;
}

// ═══════════════════════════════════════
// VOCAB DRILL (تدرّب) — تدريب مفردات متنوّع
// ═══════════════════════════════════════
const drill={};
function normAr(s){return (s||'').replace(/[ً-ْـ]/g,'').replace(/[إأآا]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/[()\/\.\-—،؟?]/g,' ').replace(/\s+/g,' ').trim();}
function coreAr(a){return a.split(/[—\/\(]/)[0].trim();}
// كل المعاني المقبولة لكلمة (تقسم على / و«أو» + مرادفات alt)
function acceptedAr(w){
  const out=[];
  [w.a,...(w.alt||[])].forEach(x=>String(x).split(/[\/،,]| او | أو /).forEach(p=>{const t=p.replace(/\(.*?\)/g,'').trim();if(t)out.push(t);}));
  return out;
}
// هيكل الحروف الساكنة (يتجاهل حروف العلّة عشان يتسامح مع النقل الحرفي: بيسبول = بيسيبول)
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
  }else{ // type
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
    // فرصة إعادة المحاولة: عطّل الخيار الخطأ فقط ودع الطالب يحاول
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

function build_grammar_sec(lk){
  const el=document.getElementById('ls-g');
  const rules=GRAMMAR[lk];
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
        ${build_gcard_body(g)}
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

function build_gcard_body(g){
  let html='';

  // One-line rule
  html+=`<div class="rule-box">
    <div class="rb-label">القاعدة</div>
    <div class="rb-text">💡 ${g.rule}</div>
  </div>`;

  // Special: Ranks
  if(g.isRanks){
    html+=`<table class="rktab"><thead><tr><th>الرتبة</th><th>الاختصار</th><th>الدرجة</th><th>اللون</th></tr></thead><tbody>
      <tr><td>Second Lieutenant</td><td>2d Lt</td><td>O-1</td><td class="gld">Gold ذهبي</td></tr>
      <tr><td>First Lieutenant</td><td>1st Lt</td><td>O-2</td><td class="slv">Silver فضي</td></tr>
      <tr><td>Captain</td><td>Capt</td><td>O-3</td><td class="slv">Silver فضي</td></tr>
      <tr><td>Major</td><td>Maj</td><td>O-4</td><td class="gld">Gold ذهبي</td></tr>
      <tr><td>Lieutenant Colonel</td><td>Lt Col</td><td>O-5</td><td class="slv">Silver فضي</td></tr>
      <tr><td>Colonel</td><td>Col</td><td>O-6</td><td class="slv">Silver فضي</td></tr>
      <tr><td>General</td><td>Gen</td><td>O-7</td><td class="slv">Silver فضي</td></tr>
    </tbody></table>
    <div class="rank-tip">💡 مثال: Carol is a new <strong>Major (O-4)</strong>. Last year she was a <strong>Captain (O-3)</strong> — النقيب أقل من الرائد مباشرة.</div>`;
    return html;
  }

  // Special: Sounds
  if(g.isSounds){
    html+=`<table class="stab"><thead><tr>
      <th style="background:#2563EB">الصوت</th>
      <th style="background:#2563EB">متى؟</th>
      <th style="background:#2563EB">أمثلة</th>
    </tr></thead><tbody>
      <tr><td><strong>/t/</strong></td><td>بعد الأصوات المهموسة (k,p,s,ch,sh)</td><td>smok<u>ed</u> walk<u>ed</u> watch<u>ed</u></td></tr>
      <tr><td><strong>/d/</strong></td><td>بعد الأصوات المجهورة والحركات</td><td>studi<u>ed</u> play<u>ed</u> shav<u>ed</u></td></tr>
      <tr><td><strong>/əd/</strong></td><td>بعد حرف t أو d</td><td>want<u>ed</u> repeat<u>ed</u> indent<u>ed</u></td></tr>
    </tbody></table>
    <div class="sound-tip">💡 الطريقة السهلة: هل الفعل ينتهي بـ t أو d؟ → صوت /əd/ | مهموس → /t/ | مجهور → /d/</div>`;
    return html;
  }

  // Formula strip
  if(g.formula&&g.formula.length>0){
    html+='<div class="fstrip">';
    g.formula.forEach(f=>{
      if(f.c==='p')html+=`<span class="farr">${f.t}</span>`;
      else html+=`<span class="fchip ${f.c}">${f.t}</span>`;
    });
    html+='</div>';
  }

  // Compare table
  if(g.compare&&g.compare.length>0){
    const isTime=g.title.includes('Military Time');
    const h1=isTime?'Civilian':'Present / Base';
    const h2=isTime?'Military':'Past';
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

  // Time grid special
  if(g.title.includes('Military Time')){
    html+=`<div class="tgrd">
      <div class="titem2"><div class="tmil2">0730</div><div class="tciv2">7:30 AM</div></div>
      <div class="titem2"><div class="tmil2">1500</div><div class="tciv2">3:00 PM</div></div>
      <div class="titem2"><div class="tmil2">2050</div><div class="tciv2">8:50 PM</div></div>
      <div class="titem2"><div class="tmil2">2230</div><div class="tciv2">10:30 PM</div></div>
      <div class="titem2"><div class="tmil2">1200</div><div class="tciv2">Noon</div></div>
      <div class="titem2"><div class="tmil2">2400</div><div class="tciv2">Midnight</div></div>
    </div>`;
  }

  // Examples — correct example vs. common mistake (beginner-friendly)
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

  return html;
}


// ═══════════════════════════════════════
// BUILD QUIZ (MCQ)
// ═══════════════════════════════════════
function build_quiz(elId,qs,prefix){
  const el=document.getElementById(elId);
  el.innerHTML='';
  const isTest=prefix==='te'||prefix==='fi';

  if(isTest){
    let top='';
    if(prefix==='te'){
      const L=LP[CL];
      const bestTxt=(L&&typeof L.pct==='number')?`أفضل نتيجة سابقة: ${L.pct}%${L.done?' ✓':''}`:'لم تُنهِ هذا الاختبار بعد';
      top=`<div class="test-top">
        <span class="test-best ${(L&&L.done)?'done':''}">${bestTxt}</span>
        <button class="test-restart" onclick="restart_test()">🔄 ابدأ من جديد</button>
      </div>`;
    }
    el.innerHTML=top+`<div class="qprog"><div class="qpbar"><div class="qpfill" id="${prefix}pf"></div></div>
      <div class="qptxt" id="${prefix}pt">0 / ${qs.length}</div></div>`;
  }

  const wrap=document.createElement('div');
  qs.forEach((q,i)=>{
    const c=document.createElement('div');c.className='qcrd';c.id=`${prefix}c${i}`;
    const L=['A','B','C','D'];
    const lbl=q.lbl?`<span style="font-size:.65rem;color:var(--muted);margin-left:6px">${q.lbl}</span>`:'';
    c.innerHTML=`<div class="qhdr">
      <div class="qtxt">${i+1}. ${q.q}${lbl}</div>
      <button class="qspk" onclick="say('${q.q.replace(/_+/g,'blank').replace(/'/g,"\\'")}')">🔊</button>
    </div>
    <div class="opts" id="${prefix}o${i}">
      ${q.o.map((opt,oi)=>`<button class="opt" id="${prefix}op${i}${oi}"
        onclick="ans('${prefix}',${i},${oi},${q.a},'${q.en.replace(/'/g,"\\'")}','${q.ar.replace(/'/g,"\\'")}')">
        <span class="oltr">${L[oi]}</span>${opt}</button>`).join('')}
    </div>
    <div class="fb" id="${prefix}fb${i}">
      <span style="font-size:.9rem;flex-shrink:0" id="${prefix}fi${i}"></span>
      <div><div class="fb-en" id="${prefix}fe${i}"></div><div class="fb-ar" id="${prefix}fa${i}"></div></div>
    </div>`;
    wrap.appendChild(c);
  });
  el.appendChild(wrap);

  if(isTest&&prefix==='te'){
    const sr=document.createElement('div');sr.className='submit-row';
    sr.innerHTML=`<button class="sbtn" onclick="submit_test()">إرسال الإجابات →</button>`;
    el.appendChild(sr);
  }
}

// ═══════════════════════════════════════
// BUILD WORD ORDER
// ═══════════════════════════════════════
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

// placed = array of {wi, word} in order clicked
const woState={};
function wo_pick(idx,wi,word){
  if(!woState[idx])woState[idx]=[];
  // if already placed, remove it
  const existing=woState[idx].findIndex(x=>x.wi===wi);
  if(existing!==-1){
    woState[idx].splice(existing,1);
    document.getElementById(`woc${idx}_${wi}`).classList.remove('used');
  } else {
    woState[idx].push({wi,word});
    document.getElementById(`woc${idx}_${wi}`).classList.add('used');
  }
  // render answer zone
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
  wo_pick(idx,wi,''); // toggle off
  // re-render by refreshing state
  const ans=document.getElementById(`woa${idx}`);
  if(!woState[idx]||woState[idx].length===0){ans.innerHTML='';ans.classList.remove('has-words');return;}
  ans.innerHTML=woState[idx].map(x=>`<button class="wo-chip placed" onclick="wo_remove(${idx},${x.wi})">${x.word}</button>`).join('');
}
function wo_clear(idx,shuffledJson){
  woState[idx]=[];
  const ans=document.getElementById(`woa${idx}`);
  ans.innerHTML='';ans.classList.remove('has-words');
  // re-enable all chips
  const shuffled=shuffledJson;
  document.querySelectorAll(`[id^="woc${idx}_"]`).forEach(b=>b.classList.remove('used'));
  document.getElementById(`wofb${idx}`).innerHTML='';
  const card=document.getElementById(`wo${idx}`);
  card.className='wo-card';
  ans.className='wo-answer';
}
function wo_check(idx,correct,tr,ar){
  if(!woState[idx]||woState[idx].length===0){
    document.getElementById(`wofb${idx}`).innerHTML=`<div class="wo-wrong-reveal"><div class="wo-wrong-ar">⚠️ رتّب الكلمات أولاً</div></div>`;
    return;
  }
  const student=woState[idx].map(x=>x.word).join(' ');
  // normalize: remove trailing punctuation for comparison
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

// hint state: how many hints used per card
const woHints={};
function wo_hint(idx,correct){
  if(!woHints[idx])woHints[idx]=0;
  if(woHints[idx]>=3)return;

  const words=correct.replace(/\s*[.?!]+\s*$/,'').split(' ');
  const nextPos=woHints[idx];
  const wordToReveal=words[nextPos];

  // find this word's chip in the bank (first unused match)
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
// ANSWER MCQ
// ═══════════════════════════════════════
function ans(pfx,qi,oi,correct,en,ar){
  const opts=document.querySelectorAll(`#${pfx}o${qi} .opt`);
  opts.forEach(b=>b.disabled=true);
  const fb=document.getElementById(`${pfx}fb${qi}`);
  const card=document.getElementById(`${pfx}c${qi}`);
  const ok=oi===correct;
  opts[correct].classList.add('ok');
  if(!ok)opts[oi].classList.add('no');
  card.classList.add(ok?'qok':'qno');
  document.getElementById(`${pfx}fi${qi}`).textContent=ok?'✅':'❌';
  document.getElementById(`${pfx}fe${qi}`).textContent=ok?`Correct! ${en}`:`Answer: ${['A','B','C','D'][correct]}. ${en}`;
  document.getElementById(`${pfx}fa${qi}`).textContent=ar;
  fb.className='fb show '+(ok?'ok':'no');
  if(ok){XP+=pfx==='te'||pfx==='fi'?5:3;STK++;document.getElementById('xp').textContent=XP;document.getElementById('streak').textContent=STK;save_progress();}
  else{STK=0;document.getElementById('streak').textContent=STK;save_progress();}
  say(pfx==='fi'?FINAL[qi].o[correct]:(pfx==='te'?EE[CL][qi].o[correct]:PR[CL][qi].o[correct]));

  // Update progress bar
  const total=pfx==='fi'?FINAL.length:(pfx==='te'?EE[CL].length:PR[CL].length);
  if(pfx==='te'){
    TANS[qi]=ok;
    const done=Object.keys(TANS).length;
    const pf=document.getElementById('tepf'),pt=document.getElementById('tept');
    if(pf)pf.style.width=Math.round(done/total*100)+'%';
    if(pt)pt.textContent=`${done} / ${total}`;
  }else if(pfx==='fi'){
    FANS[qi]=ok;
    const done=Object.keys(FANS).length;
    document.getElementById('fpfill').style.width=Math.round(done/total*100)+'%';
    document.getElementById('fptxt').textContent=`${done} / ${total}`;
  }
}

// ═══════════════════════════════════════
// BUILD FINAL TEST
// ═══════════════════════════════════════
function build_final(){
  const el=document.getElementById('final-quiz');
  el.innerHTML='';

  // Section headers
  const sections=[
    {label:'📘 Lesson 1 — Sports & Games (Q1-20)',start:0,end:19,color:'#2563EB'},
    {label:'📗 Lesson 2 — Military Life (Q21-40)',start:20,end:39,color:'#DC2626'},
    {label:'📙 Lesson 3 — Clothing & Abilities (Q41-60)',start:40,end:59,color:'#7C3AED'},
    {label:'📕 Lesson 4 — Seasons & Colors (Q61-80)',start:60,end:FINAL.length-1,color:'#059669'},
  ];

  const wrap=document.createElement('div');
  let secIdx=0;
  FINAL.forEach((q,i)=>{
    // Section header
    if(secIdx<sections.length&&i===sections[secIdx].start){
      const sh=document.createElement('div');
      sh.style.cssText=`background:${sections[secIdx].color};color:#fff;border-radius:10px;padding:10px 14px;margin-bottom:10px;margin-top:${i>0?'20px':'0'};font-family:'Cairo',sans-serif;font-weight:700;font-size:.88rem`;
      sh.textContent=sections[secIdx].label;
      wrap.appendChild(sh);
      secIdx++;
    }

    const c=document.createElement('div');c.className='qcrd';c.id=`fic${i}`;
    const L=['A','B','C','D'];
    c.innerHTML=`<div class="qhdr">
      <div class="qtxt">${i+1}. ${q.q}</div>
      <button class="qspk" onclick="say('${q.q.replace(/_+/g,'blank').replace(/'/g,"\\'")}')">🔊</button>
    </div>
    <div class="opts" id="fio${i}">
      ${q.o.map((opt,oi)=>`<button class="opt" id="fiop${i}${oi}"
        onclick="ans('fi',${i},${oi},${q.a},'${q.en.replace(/'/g,"\\'")}','${q.ar.replace(/'/g,"\\'")}')">
        <span class="oltr">${L[oi]}</span>${opt}</button>`).join('')}
    </div>
    <div class="fb" id="fifb${i}">
      <span style="font-size:.9rem;flex-shrink:0" id="fifi${i}"></span>
      <div><div class="fb-en" id="fife${i}"></div><div class="fb-ar" id="fifa${i}"></div></div>
    </div>`;
    wrap.appendChild(c);
  });
  el.appendChild(wrap);
}

// ═══════════════════════════════════════
// SUBMIT
// ═══════════════════════════════════════
function submit_test(){
  const total=EE[CL].length;
  const correct=Object.values(TANS).filter(Boolean).length;
  show_result(correct,total,'te');
}

function submit_final(){
  const total=FINAL.length;
  const correct=Object.values(FANS).filter(Boolean).length;
  show_result(correct,total,'fi');
}

function show_result(correct,total,mode){
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
    const order=['l1','l2','l3','l4'];const i=order.indexOf(CL);
    nb.style.display=(mode==='te'&&i>=0&&i<order.length-1)?'inline-block':'none';
  }
  if(mode==='te'){
    const prev=(LP[CL]&&LP[CL].pct)||0;
    const best=Math.max(prev,pct);
    LP[CL]={pct:best,done:best>=70};
    apply_lessons();
    upd_global();
    save_progress();
  }
  if(pct>=90)confetti();
}

function close_modal(){document.getElementById('modal').classList.remove('show');}

function next_lesson(){
  const order=['l1','l2','l3','l4'];const i=order.indexOf(CL);
  close_modal();
  if(i>=0&&i<order.length-1)open_lesson(order[i+1]);
  else go_home();
}

function retry(){
  close_modal();
  if(CL==='final'){FANS={};build_final();document.getElementById('fpfill').style.width='0%';document.getElementById('fptxt').textContent=`0 / ${FINAL.length}`;}
  else{TANS={};delete built['te'+CL];document.getElementById('ph-test').innerHTML='';build_quiz('ph-test',EE[CL],'te');built['te'+CL]=1;}
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
  setTimeout(()=>con.innerHTML='',4000);
}

// ═══════════════════════════════════════
// PREPOSITIONS  in / on / at
// ═══════════════════════════════════════
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
  build_prep_quiz();reset_quiz('prep');
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

function build_prep_quiz(){
  let html='';
  PREP_QUIZ.forEach((q,i)=>{
    html+=`<div class="pq-item">
      <div class="pq-sent">${i+1}. ${q.q}</div>
      <div class="pq-opts">
        ${['in','on','at'].map(o=>`<button class="pq-opt" id="pqo${i}_${o}" onclick="prep_answer(${i},'${o}')">${o}</button>`).join('')}
      </div>
      <div class="pq-fb" id="pqfb${i}"></div>
    </div>`;
  });
  document.getElementById('prep-quiz').innerHTML=html;
}

function prep_answer(i,o){
  const q=PREP_QUIZ[i];
  const fb=document.getElementById('pqfb'+i);
  const btn=document.getElementById('pqo'+i+'_'+o);
  if(o===q.a){
    ['in','on','at'].forEach(x=>{const b=document.getElementById('pqo'+i+'_'+x);if(b)b.disabled=true;});
    btn.classList.add('ok');
    fb.textContent='✅ '+q.tr;
    fb.className='pq-fb show ok';
    say(q.q.replace('___',o));
    XP+=2;document.getElementById('xp').textContent=XP;save_progress();
  }else{
    btn.classList.add('no');
    fb.textContent='❌ ليست صحيحة — حاول مرة أخرى';
    fb.className='pq-fb show no';
    setTimeout(()=>{btn.classList.remove('no');},700);
  }
}

// ═══════════════════════════════════════
// ARTICLES  a / an / the
// ═══════════════════════════════════════
let artSel=null;

function open_art(){
  show_screen('ascreen');
  document.getElementById('ascreen').scrollIntoView({behavior:'smooth',block:'start'});
  artSel=null;
  ['a','an','the'].forEach(x=>document.getElementById('art-'+x).classList.remove('active'));
  document.getElementById('art-detail').innerHTML='';
  build_art_quiz();reset_quiz('art');
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

function build_art_quiz(){
  let html='';
  ART_QUIZ.forEach((q,i)=>{
    html+=`<div class="pq-item">
      <div class="pq-sent">${i+1}. ${q.q}</div>
      <div class="pq-opts">
        ${['a','an','the'].map(o=>`<button class="pq-opt" id="aqo${i}_${o}" onclick="art_answer(${i},'${o}')">${o}</button>`).join('')}
      </div>
      <div class="pq-fb" id="aqfb${i}"></div>
    </div>`;
  });
  document.getElementById('art-quiz').innerHTML=html;
}

function art_answer(i,o){
  const q=ART_QUIZ[i];
  const fb=document.getElementById('aqfb'+i);
  const btn=document.getElementById('aqo'+i+'_'+o);
  if(o===q.a){
    ['a','an','the'].forEach(x=>{const b=document.getElementById('aqo'+i+'_'+x);if(b)b.disabled=true;});
    btn.classList.add('ok');
    fb.textContent='✅ '+q.tr;
    fb.className='pq-fb show ok';
    say(q.q.replace('___',o));
    XP+=2;document.getElementById('xp').textContent=XP;save_progress();
  }else{
    btn.classList.add('no');
    fb.textContent='❌ ليست صحيحة — حاول مرة أخرى';
    fb.className='pq-fb show no';
    setTimeout(()=>{btn.classList.remove('no');},700);
  }
}

// ═══════════════════════════════════════
// WH QUESTIONS
// ═══════════════════════════════════════
let whSel=null;

function open_wh(){
  show_screen('wscreen');
  document.getElementById('wscreen').scrollIntoView({behavior:'smooth',block:'start'});
  whSel=null;
  build_wh_grid();
  document.getElementById('wh-detail').innerHTML='';
  build_wh_quiz();reset_quiz('wh');
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
function build_wh_quiz(){
  let html='';
  WH_QUIZ.forEach((q,i)=>{
    html+=`<div class="pq-item"><div class="pq-sent">${i+1}. ${q.q}</div>
      <div class="pq-opts">${q.o.map(o=>`<button class="pq-opt" id="wqo${i}_${o}" onclick="wh_answer(${i},'${o}')">${o}</button>`).join('')}</div>
      <div class="pq-fb" id="wqfb${i}"></div></div>`;
  });
  document.getElementById('wh-quiz').innerHTML=html;
}
function wh_answer(i,o){
  const q=WH_QUIZ[i],fb=document.getElementById('wqfb'+i),btn=document.getElementById('wqo'+i+'_'+o);
  if(o===q.a){
    q.o.forEach(x=>{const b=document.getElementById('wqo'+i+'_'+x);if(b)b.disabled=true;});
    btn.classList.add('ok');fb.textContent='✅ '+q.tr;fb.className='pq-fb show ok';
    say(q.q.split('—')[0].replace('___',o));
    XP+=2;document.getElementById('xp').textContent=XP;save_progress();
  }else{
    btn.classList.add('no');fb.textContent='❌ ليست صحيحة — حاول مرة أخرى';fb.className='pq-fb show no';
    setTimeout(()=>{btn.classList.remove('no');},700);
  }
}

// ═══════════════════════════════════════
// PAST-TIME SIGNALS  yesterday / last / ago
// ═══════════════════════════════════════
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
  build_time_quiz();reset_quiz('time');
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
      <div class="cblock-h"><span class="cblock-n" style="background:#16A34A">2</span>🎯 متى ولماذا؟</div>
      <div class="cblock-txt">${d.when}</div>
      ${d.triggers?`<div class="trig-list">${d.triggers.map(t=>`<div class="trig"><span class="trig-en">${t.e}</span><span class="trig-ar">${t.a}</span></div>`).join('')}</div>`:''}
      ${d.link?`<div class="mind-link">💡 ${d.link}</div>`:''}
    </div>
    <div class="cblock b-order">
      <div class="cblock-h"><span class="cblock-n" style="background:#7C3AED">3</span>🔤 كيف أرتّبها في الجملة؟</div>
      <div class="order-formula">${d.orderChips}</div>
      <div class="order-ex"><span class="en">${d.orderEx}</span>
        <button class="mini-spk" onclick="say('${exSafe}')" aria-label="استمع">🔊</button></div>
    </div>
    <div class="cblock b-bad">
      <div class="cblock-h"><span class="cblock-n" style="background:#EA580C">4</span>⚠️ أشهر خطأ للمبتدئين</div>
      <div class="badgood">
        <span class="bg-x">❌ <span class="en strike">${d.bad}</span></span>
        <span class="bg-ok">✅ <span class="en">${d.good}</span>
          <button class="mini-spk ok" onclick="say('${goodSafe}')" aria-label="استمع">🔊</button></span>
      </div>
    </div>
  </div>`;
  document.getElementById('time-detail').innerHTML=html;
}
function build_time_quiz(){
  let html='';
  TIME_QUIZ.forEach((q,i)=>{
    html+=`<div class="pq-item"><div class="pq-sent">${i+1}. ${q.q}</div>
      <div class="pq-opts col">${q.o.map(o=>`<button class="pq-opt" id="tqo${i}_${o.replace(/ /g,'_')}" onclick="time_answer(${i},'${o.replace(/ /g,'_')}')">${o}</button>`).join('')}</div>
      <div class="pq-fb" id="tqfb${i}"></div></div>`;
  });
  document.getElementById('time-quiz').innerHTML=html;
}
function time_answer(i,o){
  const q=TIME_QUIZ[i],fb=document.getElementById('tqfb'+i),btn=document.getElementById('tqo'+i+'_'+o);
  const chosen=o.replace(/_/g,' ');
  if(chosen===q.a){
    q.o.forEach(x=>{const b=document.getElementById('tqo'+i+'_'+x.replace(/ /g,'_'));if(b)b.disabled=true;});
    btn.classList.add('ok');fb.textContent='✅ '+q.tr;fb.className='pq-fb show ok';
    say(q.q.replace('___',chosen));
    XP+=2;document.getElementById('xp').textContent=XP;save_progress();
  }else{
    btn.classList.add('no');fb.textContent='❌ ليست صحيحة — حاول مرة أخرى';fb.className='pq-fb show no';
    setTimeout(()=>{btn.classList.remove('no');},700);
  }
}

// ═══════════════════════════════════════
// SPELLING — write from listening (by lesson)
// ═══════════════════════════════════════
let spellWords=[],spellIdx=0,spellTries=0,spellHint=0,spellScore=0;

function open_spell(){
  show_screen('spscreen');
  document.getElementById('spscreen').scrollIntoView({behavior:'smooth',block:'start'});
  start_spell();
}
function start_spell(){
  spellWords=[];
  SPELL_LESSONS.forEach(L=>L.w.forEach(x=>spellWords.push({e:x.e,a:x.a,em:x.em,lt:L.t})));
  spellIdx=0;spellScore=0;render_spell();
}
function render_spell(){
  const body=document.getElementById('spell-body'),total=spellWords.length;
  if(spellIdx>=total){
    document.getElementById('sp-fill').style.width='100%';
    document.getElementById('sp-count').textContent=`${total} / ${total}`;
    body.innerHTML=`<div class="sp-card sp-done"><div class="sp-emoji">🎉</div>
      <div class="sp-donetxt">أحسنت! أكملت جميع كلمات الدروس الأربعة</div>
      <div class="sp-score">نتيجتك: ${spellScore} / ${total}</div>
      <button class="sp-btn check" onclick="start_spell()">🔁 ابدأ من الأول</button></div>`;
    return;
  }
  spellTries=0;spellHint=0;
  const w=spellWords[spellIdx];
  document.getElementById('sp-fill').style.width=Math.round(spellIdx/total*100)+'%';
  document.getElementById('sp-count').textContent=`${spellIdx+1} / ${total}`;
  const safe=w.e.replace(/'/g,"\\'");
  body.innerHTML=`<div class="sp-lesson">${w.lt}</div>
  <div class="sp-card">
    <button class="sp-listen" onclick="say('${safe}')">🔊 اسمع الكلمة</button>
    <div class="sp-emoji">${w.em}</div>
    <div class="sp-ar">${w.a}</div>
    <div class="sp-hintline" id="sp-hintline"></div>
    <input class="sp-input" id="sp-input" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="اكتب الكلمة..." onkeydown="if(event.key==='Enter')spell_enter()">
    <div class="sp-fb" id="sp-fb"></div>
    <div class="sp-btns">
      <button class="sp-btn hint" id="sp-hintbtn" onclick="spell_hint()">💡 تلميح</button>
      <button class="sp-btn check" id="sp-checkbtn" onclick="spell_check()">تحقّق ✓</button>
      <button class="sp-btn next" id="sp-nextbtn" onclick="spell_next()" style="display:none">التالي ←</button>
    </div>
    <button class="sp-skip" onclick="spell_next()">تخطّي هذه الكلمة ←</button>
  </div>`;
  render_hint();
  const inp=document.getElementById('sp-input');if(inp)inp.focus();
  say(w.e);
}
function render_hint(){
  const w=spellWords[spellIdx].e;let s='';
  for(let i=0;i<w.length;i++){s+=(i<spellHint?w[i]:'_')+' ';}
  const el=document.getElementById('sp-hintline');if(el)el.textContent=s.trim();
}
function spell_hint(){
  const w=spellWords[spellIdx].e;
  if(spellHint<w.length-1)spellHint++;
  render_hint();
}
function spell_enter(){
  const nb=document.getElementById('sp-nextbtn');
  if(nb&&nb.style.display!=='none')spell_next();else spell_check();
}
function spell_check(){
  const inp=document.getElementById('sp-input'),w=spellWords[spellIdx].e;
  const val=(inp.value||'').trim().toLowerCase().replace(/\s+/g,' '),fb=document.getElementById('sp-fb');
  if(!val)return;
  if(val===w.toLowerCase()){
    inp.disabled=true;inp.classList.remove('no');inp.classList.add('ok');
    fb.textContent='✅ ممتاز! إملاء صحيح';fb.className='sp-fb show ok';
    document.getElementById('sp-hintbtn').style.display='none';
    document.getElementById('sp-checkbtn').style.display='none';
    document.getElementById('sp-nextbtn').style.display='';
    say(w);spellScore++;XP+=3;document.getElementById('xp').textContent=XP;save_progress();
  }else{
    spellTries++;inp.classList.remove('no');void inp.offsetWidth;inp.classList.add('no');
    if(spellTries>=3){
      inp.disabled=true;
      fb.innerHTML=`❌ الكلمة الصحيحة: <b class="sp-answer">${w}</b>`;fb.className='sp-fb show no';
      document.getElementById('sp-hintbtn').style.display='none';
      document.getElementById('sp-checkbtn').style.display='none';
      document.getElementById('sp-nextbtn').style.display='';
    }else{
      fb.textContent=`❌ ليست صحيحة — حاول مرة أخرى (${spellTries}/3)`;fb.className='sp-fb show no';
    }
  }
}
function spell_next(){spellIdx++;render_spell();}

// ═══════════════════════════════════════
// IRREGULAR VERBS (grouped by family)
// ═══════════════════════════════════════
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

// ═══════════════════════════════════════
// LISTENING — YouTube videos
// (لإضافة مقطع: أضف سطراً {id:'YOUTUBE_ID', t:'العنوان', s:'وصف قصير'})
// ═══════════════════════════════════════
function open_yt(){
  show_screen('ytscreen');
  document.getElementById('ytscreen').scrollIntoView({behavior:'smooth',block:'start'});
  document.getElementById('yt-tabs').innerHTML=YT_VIDEOS.map((v,i)=>
    `<button class="yt-tab" id="yt-tab-${i}" onclick="sw_yt(${i},true)"><b>${v.t}</b><span>${v.s}</span></button>`).join('');
  sw_yt(0,false);
}
function sw_yt(i,autoplay){
  YT_VIDEOS.forEach((v,j)=>{const t=document.getElementById('yt-tab-'+j);if(t)t.classList.toggle('on',j===i);});
  const v=YT_VIDEOS[i];
  document.getElementById('yt-iframe').src=`https://www.youtube.com/embed/${v.id}?rel=0${autoplay?'&autoplay=1':''}`;
}

// ═══════════════════════════════════════
// PROGRESS PERSISTENCE (localStorage)
// ═══════════════════════════════════════
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
  try{localStorage.setItem(PKEY,JSON.stringify({xp:XP,streak:STK,lessons:LP}));}
  catch(e){STORAGE_OK=false;show_storage_warning();}
}
function apply_lessons(){
  ['l1','l2','l3','l4'].forEach(lk=>{
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
  XP=data.xp||0;STK=data.streak||0;LP=data.lessons||{};
  document.getElementById('xp').textContent=XP;
  document.getElementById('streak').textContent=STK;
  apply_lessons();
  upd_global();
}
if(!STORAGE_OK)show_storage_warning();

// ─── STREAK COMEBACK BANNER ───
function check_streak_comeback(){
  if(!STORAGE_OK)return;
  try{
    const last=localStorage.getItem(STREAK_DATE_KEY);
    const today=new Date().toDateString();
    if(last && last!==today && STK===0){
      // streak was broken — show encouragement
      const home=document.getElementById('home');
      const banner=document.createElement('div');
      banner.className='streak-comeback';
      banner.innerHTML=`<span class="sc-ico">💪</span>
        <div class="sc-txt"><h3>عودة مرحباً!</h3>
        <p>انتهى الـ streak، لكن الأهم أنك رجعت — ابدأ streak جديداً اليوم.</p></div>
        <button class="sc-close" onclick="this.parentElement.remove()">✕</button>`;
      home.insertBefore(banner, home.firstChild);
    }
    localStorage.setItem(STREAK_DATE_KEY,today);
  }catch(e){}
}

function reset_progress(){
  if(!confirm('⚠️ تحذير: سيُمسح كل تقدّمك (الدرجات والـ XP والـ Streak) ولا يمكن التراجع.\n\nهل أنت متأكد تماماً؟'))return;
  try{localStorage.removeItem(PKEY);}catch(e){}
  location.reload();
}

// ─── WELCOME BANNER ───
function show_welcome_if_new(){
  try{
    const seen=localStorage.getItem(WKEY);
    if(!seen){
      document.getElementById('welcome-banner').style.display='block';
    }
  }catch(e){}
}
function dismiss_welcome(){
  document.getElementById('welcome-banner').style.display='none';
  try{localStorage.setItem(WKEY,'1');}catch(e){}
}
function dismiss_welcome_start(){
  dismiss_welcome();
  open_lesson('l1');
}
show_welcome_if_new();
load_progress();
check_streak_comeback();
track_screen('home');
