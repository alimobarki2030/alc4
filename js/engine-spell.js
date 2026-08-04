// ═══════════════════════════════════════
// ENGINE — SPELLING (write from listening)
// Reads SPELL_LESSONS from the book's data file.
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
      <div class="sp-donetxt">أحسنت! أكملت جميع كلمات الإملاء</div>
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
    <button class="sp-listen" onclick="say('${safe}')"><svg class="svgico" aria-hidden="true"><use href="#icon-volume-2"></use></svg> اسمع الكلمة</button>
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
  // No auto-play: this is "write from listening", so the word is only spoken
  // when the learner presses "اسمع الكلمة" (or after a correct answer).
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
  const cur=spellWords[spellIdx],w=cur.e;
  const inp=document.getElementById('sp-input');
  const val=(inp.value||'').trim().toLowerCase().replace(/\s+/g,' '),fb=document.getElementById('sp-fb');
  if(!val)return;
  if(val===w.toLowerCase()){
    inp.disabled=true;inp.classList.remove('no');inp.classList.add('ok');
    fb.innerHTML=`✅ ممتاز! <span dir="ltr">${w}</span> = ${cur.a}`;fb.className='sp-fb show ok';
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
