// ═══════════════════════════════════════
// ENGINE — CONCEPTS (bonus grammar screens: in·on·at, a·an·the, WH,
// pronouns+be, modals, past-time signals, irregular verbs)
//
// These 7 screens are NOT uniform in layout (prep has a place/time toggle,
// art has an extra vowel strip, time uses its own custom 4-block renderer
// instead of concept_html, irregular is a flashcard drill unrelated to the
// MCQ-quiz pattern) — so this file only generalizes what is genuinely
// identical across screens:
//   - concept_html(): the shared 4-block detail-card renderer (المعنى /
//     متى ولماذا؟ / مثال / أشهر خطأ), used by prep/art/wh/pronouns/modals.
//   - reset_quiz()/reveal_quiz(): the "اختبر نفسك" reveal toggle, shared
//     by all 6 quiz-bearing screens (not irregular).
//   - build_concept_quiz()/concept_quiz_answer(): the MCQ practice-quiz
//     builder+grader, used identically by prep/art/wh/pronouns/modals/time
//     (they only differed in DOM id prefix and whether options come from a
//     fixed 3-choice set or per-question q.o — both handled here).
// Each concepts-*.js file keeps its own open_X/sel_X/grid logic, which
// genuinely differs screen to screen.
// ═══════════════════════════════════════

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

// ─── Shared MCQ practice-quiz (prep/art/wh/pronouns/modals/time) ───
// fixedOptions: pass a constant array (e.g. ['in','on','at']) for screens
// whose choices are the same on every question; omit it for screens whose
// choices vary per question (read from each item's own `o` array).
const _cqRegistry={};
function build_concept_quiz(containerId,quizArr,idPrefix,fixedOptions){
  _cqRegistry[idPrefix]={quizArr,fixedOptions};
  let html='';
  quizArr.forEach((q,i)=>{
    const opts=fixedOptions||q.o;
    const multiWord=!fixedOptions&&opts.some(o=>o.includes(' '));
    html+=`<div class="pq-item"><div class="pq-sent">${i+1}. ${q.q}</div>
      <div class="pq-opts${multiWord?' col':''}">${opts.map(o=>{
        const enc=o.replace(/ /g,'_');
        return `<button class="pq-opt" id="${idPrefix}o${i}_${enc}" onclick="concept_quiz_answer('${idPrefix}',${i},'${enc}')">${o}</button>`;
      }).join('')}</div>
      <div class="pq-fb" id="${idPrefix}fb${i}"></div></div>`;
  });
  document.getElementById(containerId).innerHTML=html;
}
function concept_quiz_answer(idPrefix,i,oEnc){
  const {quizArr,fixedOptions}=_cqRegistry[idPrefix];
  const q=quizArr[i];
  const opts=fixedOptions||q.o;
  const chosen=oEnc.replace(/_/g,' ');
  const fb=document.getElementById(idPrefix+'fb'+i);
  const btn=document.getElementById(idPrefix+'o'+i+'_'+oEnc);
  if(chosen===q.a){
    opts.forEach(o=>{const b=document.getElementById(idPrefix+'o'+i+'_'+o.replace(/ /g,'_'));if(b)b.disabled=true;});
    btn.classList.add('ok');
    fb.textContent='✅ '+q.tr;
    fb.className='pq-fb show ok';
    say(q.q.split('—')[0].replace('___',chosen));
    XP+=2;document.getElementById('xp').textContent=XP;save_progress();
  }else{
    btn.classList.add('no');
    fb.textContent='❌ ليست صحيحة — حاول مرة أخرى';
    fb.className='pq-fb show no';
    setTimeout(()=>{btn.classList.remove('no');},700);
  }
}
