// ═══════════════════════════════════════
// ENGINE — LESSONS
// open_lesson/tabs, learn (vocab+grammar), vocab drill, word order,
// quizzes (lesson test / final exam / review), results.
// Reads LESSON_META/VOCAB/GRAMMAR/WO/EE/FINAL/REVIEW from the book's data
// file — only inside function bodies, so load order relative to the data
// file doesn't matter here.
// ═══════════════════════════════════════

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
// LEARN (تعلّم) — مفردات + قواعد
// ═══════════════════════════════════════
function build_learn(lk){
  const el=document.getElementById('ph-learn');
  el.innerHTML='';

  el.innerHTML=`
  <div class="learn-tabs">
    <button class="ltab on" id="lt-v" onclick="sw_learn_tab('v','${lk}')">
      <span class="li"><svg class="svgico" aria-hidden="true"><use href="#icon-library"></use></svg></span><span>مفردات</span>
    </button>
    <button class="ltab" id="lt-g" onclick="sw_learn_tab('g','${lk}')">
      <span class="li"><svg class="svgico" aria-hidden="true"><use href="#icon-book-open-text"></use></svg></span><span>قواعد</span>
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
    اضغط <svg class="svgico" aria-hidden="true"><use href="#icon-volume-2"></use></svg> لسماع النطق</div>
  <div class="vcards">`;
  words.forEach(v=>{
    const safe=v.e.replace(/'/g,"\\'").replace(/\(.*?\)/g,'').trim();
    html+=`<div class="vcard flip" onclick="this.classList.toggle('flipped')">
      <button class="vs" onclick="event.stopPropagation();say('${safe}')"><svg class="svgico" aria-hidden="true"><use href="#icon-volume-2"></use></svg></button>
      <div class="vflip-inner">
        <div class="vflip-face front">
          <span class="ve">${vIcon(v)}</span>
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
      <div class="past-note">الأصل ← الماضي · اضغط <svg class="svgico" aria-hidden="true"><use href="#icon-volume-2"></use></svg> لسماع كلٍّ على حدة</div>`;
    pastWords.forEach(w=>{
      const baseSafe=w.e.replace(/'/g,"\\'"),pastSafe=w.past.replace(/'/g,"\\'");
      html+=`<div class="past-row">
        <div class="pr-forms" dir="ltr">
          <span class="pr-base">${w.e}<button class="pr-spk" onclick="say('${baseSafe}')"><svg class="svgico" aria-hidden="true"><use href="#icon-volume-2"></use></svg></button></span>
          <span class="pr-arrow">→</span>
          <span class="pr-past">${w.past}<button class="pr-spk" onclick="say('${pastSafe}')"><svg class="svgico" aria-hidden="true"><use href="#icon-volume-2"></use></svg></button></span>
        </div>
        <div class="pr-ar">الأصل: ${w.a} · الماضي: ${w.pa}</div>
      </div>`;
    });
    html+='</div>';
  }
  const note=LESSON_META[lk]&&LESSON_META[lk].vocabNote;
  if(note)html+=`<div class="vocab-note">${note}</div>`;
  el.innerHTML=html;
}

function build_grammar_sec(lk){
  const el=document.getElementById('ls-g');
  const rules=GRAMMAR[lk];
  if(!rules||!rules.length){
    el.innerHTML=`<div class="wip-card">
      <div class="wip-ico"><svg class="svgico" aria-hidden="true"><use href="#icon-book-open-text"></use></svg></div>
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

// build_gcard_body: default rendering is Book 5's qa-pair stacked-card
// style for `compare` arrays (per plan decision #3 — the old <table
// class="ctab"> renderer is retired). The isRanks/isSounds/Military-Time
// special-case blocks are ported from Book 4 verbatim and stay inert unless
// a GRAMMAR[lk] entry explicitly sets those flags/title (none of Book 5's
// data does, today).
function build_gcard_body(g,lk,i){
  let html='';
  const checkHtml=g.check?build_check_widget(g.check,lk,i):'';

  // A grammar card can supply `parts` — a list of {t:English term, d:Arabic
  // note} — rendered as separate blocks (English LTR on top, Arabic below) to
  // avoid the jumbled look of English words mixed inline into an RTL sentence.
  const ruleInner=(g.parts&&g.parts.length)
    ? `<div class="rb-parts">${g.parts.map(p=>`<div class="rb-part"><span class="rb-en" dir="ltr">${p.t}</span><span class="rb-pd">${p.d}</span></div>`).join('')}</div>`
    : `<div class="rb-text">💡 ${g.rule}</div>`;
  html+=`<div class="rule-box">
    <div class="rb-label">القاعدة</div>
    ${ruleInner}
  </div>`;

  // Special: Ranks (Book 4 — inert unless g.isRanks is set)
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
    return html+checkHtml;
  }

  // Special: Sounds (Book 4 — inert unless g.isSounds is set)
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
    return html+checkHtml;
  }

  if(g.formula&&g.formula.length>0){
    html+='<div class="fstrip">';
    g.formula.forEach(f=>{
      if(f.c==='p')html+=`<span class="farr">${f.t}</span>`;
      else html+=`<span class="fchip ${f.c}">${f.t}</span>`;
    });
    html+='</div>';
  }

  // Default compare rendering — qa-pair stacked cards (Book 5 style).
  if(g.compare&&g.compare.length>0){
    g.compare.forEach(r=>{
      // Escape ' for the JS string layer AND " for the double-quoted onclick
      // attribute — some rows (e.g. Book 6 reported speech) contain literal ".
      const spk=s=>s.replace(/'/g,"\\'").replace(/"/g,'&quot;');
      const safe1=spk(r.c1);
      const safe2=spk(r.c2);
      html+=`<div class="qa-pair">
        <div class="qa-row q"><span class="qa-tag">السؤال</span><span class="qa-txt">${r.c1}</span><button class="qa-spk" onclick="say('${safe1}')"><svg class="svgico" aria-hidden="true"><use href="#icon-volume-2"></use></svg></button></div>
        <div class="qa-row a"><span class="qa-tag">الجواب</span><span class="qa-txt">${r.c2}</span><button class="qa-spk" onclick="say('${safe2}')"><svg class="svgico" aria-hidden="true"><use href="#icon-volume-2"></use></svg></button></div>
        ${r.ar?`<div class="qa-note">💡 ${r.ar}</div>`:''}
      </div>`;
    });
  }

  // Special: Military Time grid (Book 4 — inert unless g.title matches)
  if(g.title&&g.title.includes('Military Time')){
    html+=`<div class="tgrd">
      <div class="titem2"><div class="tmil2">0730</div><div class="tciv2">7:30 AM</div></div>
      <div class="titem2"><div class="tmil2">1500</div><div class="tciv2">3:00 PM</div></div>
      <div class="titem2"><div class="tmil2">2050</div><div class="tciv2">8:50 PM</div></div>
      <div class="titem2"><div class="tmil2">2230</div><div class="tciv2">10:30 PM</div></div>
      <div class="titem2"><div class="tmil2">1200</div><div class="tciv2">Noon</div></div>
      <div class="titem2"><div class="tmil2">2400</div><div class="tciv2">Midnight</div></div>
    </div>`;
  }

  if(g.examples&&g.examples.length>0){
    html+='<div style="margin-top:8px">';
    g.examples.forEach(ex=>{
      if(ex.ok){
        const safe=ex.s.replace(/'/g,"\\'");
        html+=`<div class="ex2 ok">
          <div class="ex2-top">
            <span class="ex2-tag ok">✅ مثال صحيح</span>
            <button class="ex2-spk" onclick="say('${safe}')" aria-label="استمع"><svg class="svgico" aria-hidden="true"><use href="#icon-volume-2"></use></svg></button>
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

// ═══════════════════════════════════════
// VOCAB DRILL (تدرّب)
// ═══════════════════════════════════════
const drill={};
let _drillEl='ph-practice'; // container the active drill renders into (lesson vs vocab exam)
function normAr(s){return (s||'').replace(/[ً-ْـ]/g,'').replace(/[إأآا]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/[()\/\.\-—،؟?]/g,' ').replace(/\s+/g,' ').trim();}
function coreAr(a){return a.split(/[—\/\(]/)[0].trim();}
function acceptedAr(w){
  const out=[];
  [w.a,...(w.alt||[])].forEach(x=>String(x).split(/[\/،,]| او | أو /).forEach(p=>{
    const t=p.replace(/\(.*?\)/g,'').trim();if(t)out.push(t);
    // النص داخل القوسين غالبًا مرادف صحيح (مثل «بيت (منزل سكني)») —
    // نقبله كإجابة، لا نحذفه فقط.
    const m=p.match(/\(([^)]*)\)/g);
    if(m)m.forEach(g=>{const inner=g.slice(1,-1).trim();if(inner)out.push(inner);});
  }));
  return out;
}
// هيكل الكلمة العربية للمطابقة المرنة: نحذف "ال" والحركات وحروف العلة، ثم
// نُسقط بادئة الفعل المضارع (ت/ن) في البداية حتى تتطابق صيغ مثل «يغيّر/تغيّر»
// و«يوقّع/توقيع» (ي/أ/ا محذوفة أصلاً كحروف علة).
function arSkel(s){return normAr(s).replace(/^ال/,'').replace(/ ال/g,' ').replace(/[اويهءئؤ]/g,'').replace(/^[تن]/,'');}
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
function _drillItems(words){
  const deck=words.slice().sort(()=>Math.random()-.5);
  // نناوب بين ثلاثة أنماط: اختيار المعنى العربي، اختيار الكلمة الإنجليزية،
  // وكتابة المعنى بالعربية (كتابة حرّة — بطلب الطلاب).
  return deck.map((w,idx)=>({w,type:['en2ar','ar2en','type'][idx%3]}));
}
function build_vocab_drill(lk){
  const words=VOCAB[lk].slice();
  drill[lk]={items:_drillItems(words),idx:0,score:0,done:new Set(),pool:VOCAB[lk],el:'ph-practice'};
  render_drill(lk);
}
// اختبار مفردات شامل: يجمع مفردات كل الدروس (بلا تكرار) في مجموعة واحدة.
// mode 'quick' = ٤٠ كلمة عشوائية، 'all' = كل الكلمات. المشتّتات من كامل الكتاب.
function build_vocab_exam(mode){
  const seen=new Set(),pool=[];
  (typeof LESSON_KEYS!=='undefined'?LESSON_KEYS:[]).forEach(k=>(VOCAB[k]||[]).forEach(w=>{
    if(!seen.has(w.e)){seen.add(w.e);pool.push(w);}
  }));
  const deck=pool.slice().sort(()=>Math.random()-.5);
  const use=(mode==='quick')?deck.slice(0,Math.min(40,deck.length)):deck;
  drill['exam']={items:use.map((w,idx)=>({w,type:['en2ar','ar2en','type'][idx%3]})),idx:0,score:0,done:new Set(),pool:pool,el:'ph-vtest',mode:mode};
  render_drill('exam');
}
function open_vtest(){
  show_screen('vtscreen');
  document.getElementById('vtscreen').scrollIntoView({behavior:'smooth',block:'start'});
  const ph=document.getElementById('ph-vtest');if(ph)ph.innerHTML='';
}
// إعادة بناء التدريب الحالي (درس عادي أو اختبار المفردات الشامل).
function drill_restart(lk){const st=drill[lk];if(st&&st.mode)build_vocab_exam(st.mode);else build_vocab_drill(lk);}
// رجوع لمراجعة الكلمة السابقة داخل التدريب.
function drill_prev(lk){const st=drill[lk];if(st&&st.idx>0){st.idx--;render_drill(lk);}}
function render_drill(lk){
  const st=drill[lk];_drillEl=st.el||'ph-practice';
  const el=document.getElementById(_drillEl),total=st.items.length;
  if(st.idx>=total){
    el.innerHTML=`<div class="sp-card sp-done"><div class="sp-emoji">${st.score>=Math.ceil(total*.7)?'🏆':'📚'}</div>
      <div class="sp-donetxt">أحسنت! أكملت تدريب المفردات</div>
      <div class="sp-score">نتيجتك: ${st.score} / ${total}</div>
      <button class="sp-btn check" onclick="drill_restart('${lk}')">🔁 مرّة ثانية</button></div>`;
    return;
  }
  st.wrong=false;
  const it=st.items[st.idx],w=it.w,words=st.pool||VOCAB[lk];
  const eSafe=w.e.replace(/'/g,"\\'").replace(/\(.*?\)/g,'').trim();
  let head=`<div class="qprog"><div class="qpbar"><div class="qpfill" style="width:${Math.round(st.idx/total*100)}%"></div></div>
    <div class="qptxt">${st.idx+1} / ${total}</div></div>`;
  if(st.idx>0)head+=`<button class="drill-back" onclick="drill_prev('${lk}')">→ الكلمة السابقة</button>`;
  let body='';
  if(it.type==='en2ar'){
    const opts=[w,...pickDistractors(words,w,x=>x.a,3)].sort(()=>Math.random()-.5);
    body=`<div class="dq">
      <div class="dq-word" dir="ltr">${w.e}<button class="dq-spk" onclick="say('${eSafe}')"><svg class="svgico" aria-hidden="true"><use href="#icon-volume-2"></use></svg></button></div>
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
      <div class="dq-word" dir="ltr">${w.e}<button class="dq-spk" onclick="say('${eSafe}')"><svg class="svgico" aria-hidden="true"><use href="#icon-volume-2"></use></svg></button></div>
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
    if(!st.wrong&&!st.done.has(st.idx))st.score++;
    st.done.add(st.idx);
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
    if(!st.wrong&&!st.done.has(st.idx))st.score++;
    st.done.add(st.idx);
    say(w.e.replace(/\(.*?\)/g,'').trim());
    fb.innerHTML='✅ ممتاز! <span dir="ltr">'+w.e.replace(/\(.*?\)/g,'').trim()+'</span> = '+coreAr(w.a);
    fb.style.color='var(--g)';
    XP+=3;document.getElementById('xp').textContent=XP;save_progress();
    drill_next(lk);
  }else{
    st.wrong=true;inp.classList.remove('no');void inp.offsetWidth;inp.classList.add('no');
    fb.textContent='❌ حاول مرة أخرى';fb.style.color='var(--r)';
    inp.focus();setTimeout(()=>{inp.classList.remove('no');},600);
    // شبكة أمان: العربية فيها مرادفات صحيحة كثيرة قد لا يلتقطها المطابِق.
    // نعرض للطالب زرًّا لاعتماد إجابته إن كان واثقًا أنها صحيحة.
    const dq=document.querySelector('#'+_drillEl+' .dq');
    if(dq&&!document.getElementById('dq-self')){
      const sb=document.createElement('button');
      sb.id='dq-self';sb.className='sp-skip';sb.textContent='إجابتي صحيحة ✓';
      sb.onclick=()=>drill_accept_self(lk);
      const skip=dq.querySelector('.sp-skip');
      if(skip)skip.insertAdjacentElement('beforebegin',sb);else dq.appendChild(sb);
    }
  }
}
// الطالب أكّد أن إجابته المكتوبة صحيحة (مرادف لم يلتقطه المطابِق) —
// نعتمدها، نُظهر الإجابة المرجعية للفائدة، ونمنحه النقاط.
function drill_accept_self(lk){
  const st=drill[lk],w=st.items[st.idx].w;
  const inp=document.getElementById('dq-input'),fb=document.getElementById('dq-fb');
  if(inp){inp.disabled=true;inp.classList.remove('no');inp.classList.add('ok');}
  if(!st.done.has(st.idx))st.score++;
  st.done.add(st.idx);
  say(w.e.replace(/\(.*?\)/g,'').trim());
  fb.innerHTML='✅ اعتُمدت إجابتك — <span dir="ltr">'+w.e.replace(/\(.*?\)/g,'').trim()+'</span> = '+coreAr(w.a);
  fb.style.color='var(--g)';
  XP+=3;document.getElementById('xp').textContent=XP;save_progress();
  drill_next(lk);
}
function drill_reveal_type(lk){
  const st=drill[lk],dq=document.querySelector('#'+_drillEl+' .dq'),inp=document.getElementById('dq-input'),fb=document.getElementById('dq-fb'),w=st.items[st.idx].w;
  if(inp)inp.disabled=true;
  st.wrong=true;
  const eClean=w.e.replace(/\(.*?\)/g,'').trim();
  say(eClean);
  fb.innerHTML='<svg class="svgico" aria-hidden="true"><use href="#icon-book-open-text"></use></svg> <span dir="ltr">'+eClean+'</span> = <b>'+coreAr(w.a)+'</b> — احفظها 👍';fb.style.color='var(--txt)';
  if(dq)dq.querySelectorAll('.sp-btn.check, .sp-skip').forEach(b=>b.style.display='none');
  if(dq&&!document.getElementById('dq-cont')){
    const nb=document.createElement('button');nb.id='dq-cont';nb.className='sp-btn next';nb.style.marginTop='14px';nb.textContent='التالي ←';
    nb.onclick=()=>{st.idx++;render_drill(lk);};
    dq.appendChild(nb);
  }
}

// ═══════════════════════════════════════
// WORD ORDER (رتّب الجملة)
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
      `<button class="wo-chip placed${x.hinted?' hinted':''}" onclick="wo_remove(${idx},${x.wi})">${x.word}</button>`
    ).join('');
  }
}
function wo_remove(idx,wi){
  wo_pick(idx,wi,'');
  const ans=document.getElementById(`woa${idx}`);
  if(!woState[idx]||woState[idx].length===0){ans.innerHTML='';ans.classList.remove('has-words');return;}
  ans.innerHTML=woState[idx].map(x=>`<button class="wo-chip placed${x.hinted?' hinted':''}" onclick="wo_remove(${idx},${x.wi})">${x.word}</button>`).join('');
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
  if(!woState[idx])woState[idx]=[];
  const words=correct.replace(/\s*[.?!]+\s*$/,'').split(' ');

  // Keep the student's correct leading run; only correct from the first error —
  // don't punish good work by wiping the whole box.
  let keep=0;
  while(keep<woState[idx].length&&keep<words.length&&woState[idx][keep].word===words[keep])keep++;

  // Return every chip from the first wrong/extra position onward to the bank.
  for(let i=keep;i<woState[idx].length;i++){
    const c=document.getElementById(`woc${idx}_${woState[idx][i].wi}`);
    if(c)c.classList.remove('used');
  }
  woState[idx]=woState[idx].slice(0,keep);

  // Reveal the next correct word at the first unresolved position.
  let revealed=false;
  if(keep<words.length){
    let chip=null;
    document.querySelectorAll(`[id^="woc${idx}_"]`).forEach(c=>{
      if(!chip&&!c.classList.contains('used')&&c.textContent.trim()===words[keep])chip=c;
    });
    if(chip){
      chip.classList.add('used');
      woState[idx].push({wi:parseInt(chip.id.split('_').pop(),10),word:words[keep],hinted:true});
      revealed=true;
    }
  }

  // Re-render the answer box; hinted words keep a distinct colour.
  const ans=document.getElementById(`woa${idx}`);
  if(woState[idx].length){
    ans.classList.add('has-words');
    ans.innerHTML=woState[idx].map(x=>`<button class="wo-chip placed${x.hinted?' hinted':''}" onclick="wo_remove(${idx},${x.wi})">${x.word}</button>`).join('');
  } else {
    ans.innerHTML='';ans.classList.remove('has-words');
  }

  // Only spend a hint when a new word was actually revealed.
  if(!revealed)return;
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
// QUIZZES (lesson test / final exam / review) — one generic implementation
// ═══════════════════════════════════════
const QUIZ_TARGET={te:{elId:'ph-test',prefix:'te'},fi:{elId:'ph-final',prefix:'fi'},rv:{elId:'ph-review',prefix:'rv'},mk:{elId:'ph-mistakes',prefix:'mk'}};
function current_quiz_target(){
  if(CL==='final')return QUIZ_TARGET.fi;
  if(CL==='review')return QUIZ_TARGET.rv;
  if(CL==='mistakes')return QUIZ_TARGET.mk;
  return QUIZ_TARGET.te;
}

function open_final(){
  CL='final';TANS={};
  show_screen('fscreen');
  document.getElementById('fscreen').scrollIntoView({behavior:'smooth',block:'start'});
  build_quiz('ph-final',FINAL,'fi');
}

function open_review(){
  CL='review';TANS={};
  show_screen('rscreen');
  document.getElementById('rscreen').scrollIntoView({behavior:'smooth',block:'start'});
  build_quiz('ph-review',REVIEW,'rv');
}

// Builds a quiz from the student's own missed questions (the mistake bank),
// so they re-practise exactly what they got wrong until they master it.
function open_mistakes(){
  const deck=Object.values(MISTAKES).map(m=>({q:m.q,o:m.o,a:m.a,tr:m.tr,ar:m.ar}));
  if(!deck.length)return;
  EE.mistakes=deck;
  CL='mistakes';TANS={};
  show_screen('mkscreen');
  document.getElementById('mkscreen').scrollIntoView({behavior:'smooth',block:'start'});
  build_quiz('ph-mistakes',deck,'mk');
}

function build_quiz(elId,qs,prefix){
  const el=document.getElementById(elId);
  el.innerHTML='';
  const isTest=prefix==='te'||prefix==='fi'||prefix==='rv'||prefix==='mk';

  // Shuffle the question order on each build so students practise varied,
  // not memorized, order — for the lesson assessment (te), the final exam
  // (fi), and the review (rv), by student request. Each rendered card bakes
  // in its own correct answer (q.a) and TANS is keyed by render index, so
  // grading stays correct regardless of order. Restart/retry re-shuffle.
  if(prefix==='fi'||prefix==='te'||prefix==='rv')shuffle_arr(qs);

  if(isTest){
    const L=LP[CL];
    const bestTxt=(L&&typeof L.pct==='number')?`أفضل نتيجة سابقة: ${L.pct}%${L.done?' ✓':''}`:'لم تُنهِ هذا الاختبار بعد';
    const top=`<div class="test-top">
      <span class="test-best ${(L&&L.done)?'done':''}">${bestTxt}</span>
      <button class="test-restart" onclick="restart_test()"><svg class="svgico" aria-hidden="true"><use href="#icon-refresh-cw"></use></svg> ابدأ من جديد</button>
    </div>`;
    el.innerHTML=top+`<div class="qprog"><div class="qpbar"><div class="qpfill" id="${prefix}pf"></div></div>
      <div class="qptxt" id="${prefix}pt">0 / ${qs.length}</div></div>`;
  }

  const wrap=document.createElement('div');
  qs.forEach((q,i)=>{
    const c=document.createElement('div');c.className='qcrd';c.id=`${prefix}c${i}`;
    const L=['A','B','C','D'];
    // Shuffle a DISPLAY-ONLY copy of the options so the correct answer's slot
    // (A/B/C/D) isn't memorized — the student must understand, not recall a
    // position. q.o / q.a (the real data) are NEVER mutated; we just render a
    // shuffled view and pass its correct index to ans().
    const ord=q.o.map((o,oi)=>({o,oi}));
    if(isTest)shuffle_arr(ord);
    const rc=ord.findIndex(x=>x.oi===q.a);
    c.innerHTML=`<div class="qhdr">
      <div class="qtxt">${i+1}. ${q.q}</div>
      <button class="qspk" onclick="say('${q.q.replace(/_+/g,'blank').replace(/'/g,"\\'")}')"><svg class="svgico" aria-hidden="true"><use href="#icon-volume-2"></use></svg></button>
    </div>
    <div class="opts" id="${prefix}o${i}">
      ${ord.map((it,oi)=>`<button class="opt" id="${prefix}op${i}${oi}"
        onclick="ans('${prefix}',${i},${oi},${rc})">
        <span class="oltr">${L[oi]}</span>${it.o}</button>`).join('')}
    </div>
    <div class="fb" id="${prefix}fb${i}">
      <span style="font-size:.9rem;flex-shrink:0" id="${prefix}fi${i}"></span>
      <div><div class="fb-ar" id="${prefix}fa${i}"></div></div>
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

// Simplified signature: no baked-in en/ar/tr strings in the onclick
// attribute (which required fragile manual quote-escaping) — ans() looks up
// the full question object via EE[CL][qi] and reads q.tr for the feedback
// line, same "translation, not English grammar explanation" feedback style.
function ans(pfx,qi,oi,correct){
  const q=EE[CL][qi];
  const opts=document.querySelectorAll(`#${pfx}o${qi} .opt`);
  opts.forEach(b=>b.disabled=true);
  const fb=document.getElementById(`${pfx}fb${qi}`);
  const card=document.getElementById(`${pfx}c${qi}`);
  const ok=oi===correct;
  // Mistake bank: a wrong answer files the question for later review; two
  // correct answers (anywhere the question reappears) master it and remove it.
  if(q&&q.q){
    if(!ok){
      MISTAKES[q.q]={q:q.q,o:q.o,a:q.a,tr:q.tr||'',ar:q.ar||'',streak:0};
    }else if(MISTAKES[q.q]){
      // In the dedicated mistake review, answering correctly clears the item
      // right away — the student came here to master it. In ordinary lesson
      // tests, a previously-missed question needs two correct answers to master.
      if(CL==='mistakes'){
        delete MISTAKES[q.q];
      }else{
        MISTAKES[q.q].streak=(MISTAKES[q.q].streak||0)+1;
        if(MISTAKES[q.q].streak>=2)delete MISTAKES[q.q];
      }
    }
    update_mistakes_card();
  }
  opts[correct].classList.add('ok');
  if(!ok)opts[oi].classList.add('no');
  card.classList.add(ok?'qok':'qno');
  document.getElementById(`${pfx}fi${qi}`).textContent=ok?'✅':'❌';
  document.getElementById(`${pfx}fa${qi}`).textContent=q.tr||'';
  fb.className='fb show '+(ok?'ok':'no');
  // XP rewards each correct answer; the header 🔥 streak is now a daily streak
  // (see compute_daily_streak) and is no longer reset by a wrong answer. Always
  // persist so the mistake-bank change above is saved either way.
  if(ok){XP+=5;const xpEl=document.getElementById('xp');if(xpEl)xpEl.textContent=XP;}
  save_progress();
  // No auto-play on answering — audio in the test only plays when the student
  // presses the speaker button next to a question.

  const total=EE[CL].length;
  TANS[qi]=ok;
  const done=Object.keys(TANS).length;
  const pf=document.getElementById(pfx+'pf'),pt=document.getElementById(pfx+'pt');
  if(pf)pf.style.width=Math.round(done/total*100)+'%';
  if(pt)pt.textContent=`${done} / ${total}`;
}

function submit_test(){
  const total=EE[CL].length;
  const correct=Object.values(TANS).filter(Boolean).length;
  show_result(correct,total);
}

// Fixed: lesson order is now derived from LESSON_KEYS instead of being
// hand-typed (Book 5 previously hardcoded `order=['l1']`, so "next lesson"
// could never chain past lesson 1; Book 4 previously duplicated the literal
// order=['l1','l2','l3','l4']).
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
  // Mistake review gets its own message: celebrate clearing the whole list,
  // or show how many are left to keep practising.
  if(CL==='mistakes'){
    const remaining=Object.keys(MISTAKES).length;
    if(remaining===0){
      document.getElementById('m-emo').textContent='🎉';
      document.getElementById('m-grade').textContent='أحسنت! أتقنت جميع أخطائك';
      document.getElementById('m-grade').style.color='var(--g)';
      document.getElementById('m-sub').textContent='خرجت كل الأسئلة من قائمة المراجعة';
    }else{
      document.getElementById('m-grade').textContent='أحسنت! واصل المراجعة';
      document.getElementById('m-sub').textContent=`بقي ${remaining} سؤال في قائمة أخطائك`;
    }
  }
  _modalReturn=document.activeElement;
  document.getElementById('modal').classList.add('show');
  // Move focus into the dialog so keyboard/screen-reader users land on the
  // result instead of the now-hidden quiz behind it.
  const _mc=document.querySelector('#modal .mcrd');
  if(_mc){_mc.setAttribute('tabindex','-1');try{_mc.focus();}catch(e){}}
  const prev=(LP[CL]&&LP[CL].pct)||0;
  const best=Math.max(prev,pct);
  LP[CL]={pct:best,done:best>=70};
  apply_lessons();
  upd_global();
  save_progress();
  const clearedMistakes=CL==='mistakes'&&Object.keys(MISTAKES).length===0;
  if(pct>=90||clearedMistakes)confetti();
}

let _modalReturn=null;
function hide_modal(){
  document.getElementById('modal').classList.remove('show');
  // Restore focus to wherever it was when the dialog opened.
  if(_modalReturn&&document.contains(_modalReturn)){try{_modalReturn.focus();}catch(e){}}
  _modalReturn=null;
}

// "متابعة" (continue) always returns to the lessons page. The finished quiz
// (lesson test, mistake bank, review, or final) has nothing more to do on its
// own screen, and home is where the updated cards — best scores, mistake
// count, overall progress — are visible.
function close_modal(){
  hide_modal();
  go_home();
}

function retry(){
  hide_modal();
  const {elId,prefix}=current_quiz_target();
  TANS={};delete built[prefix+CL];
  document.getElementById(elId).innerHTML='';
  build_quiz(elId,EE[CL],prefix);
  built[prefix+CL]=1;
}

function restart_test(){
  const {elId,prefix}=current_quiz_target();
  TANS={};
  delete built[prefix+CL];
  document.getElementById(elId).innerHTML='';
  build_quiz(elId,EE[CL],prefix);
  built[prefix+CL]=1;
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
