// ═══════════════════════════════════════
// Arabic answer matching — shared by the book pages (engine-lessons.js),
// the word list (words.html) and «تحدّى نفسك» (challenge.html).
// Flexible for فصحى and عامية: dialect letters, colloquial prefixes,
// one-letter typos, and per-word matching (see drillTypeOk).
// ═══════════════════════════════════════
function normAr(s){return (s||'').replace(/[ً-ْـ]/g,'').replace(/[إأآا]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/[()\/\.\-—،؟?]/g,' ').replace(/\s+/g,' ').trim();}
// الجزء الظاهر من المعنى (قبل القوس/الشرطة). إن جاء فارغًا — كأن يبدأ المعنى
// بقوس مثل «(للطلب المهذّب) هل…» — نعرض المعنى كاملاً بدل خانة فارغة.
function coreAr(a){a=String(a||'');const c=a.split(/[—\/\(]/)[0].trim();return c||a.replace(/[()]/g,'').trim();}
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
// ── مطابقة الإجابة المكتوبة (مرنة للفصحى والعامية) ──
// توحيد حروف تُكتب حسب اللهجة: ظ/ض، ذ/ز، ث/ت، والحروف الفارسية ڤ/گ/چ.
function dialNorm(s){return normAr(s).replace(/ظ/g,'ض').replace(/ذ/g,'ز').replace(/ث/g,'ت').replace(/ڤ/g,'ف').replace(/گ/g,'ك').replace(/چ/g,'ج');}
// كلمات مساعدة لا تحمل المعنى (أدوات + بادئات المستقبل/الاستمرار في العامية).
const AR_STOP=new Set(['هل','من','في','على','عن','ان','الى','الي','او','و','يا','هو','هي','شي','شيء','راح','رح','ح','قاعد','قاعده','بيكون','اللي','الي']);
// هيكل الكلمة: نحذف "ال" وحروف العلة والهاء، ثم بادئة المضارع/العامية (ت/ن/ب/ح)
// حتى تتطابق «يغيّر/تغيّر» و«بيشتغل/يشتغل» و«سريع/بسرعة».
function arSkel(s){let t=dialNorm(s).replace(/^(وال|بال|لل|فال|كال|ال)(?=..)/,'').replace(/[اويهءئؤ]/g,'');if(t.length>=4)t=t.replace(/^[تنبح]/,'');return t;}
function arTokens(s){return dialNorm(s).split(' ').filter(t=>t&&!AR_STOP.has(t));}
// مسافة التحرير (لتقبّل خطأ إملائي بسيط بحرف واحد).
function _lev(a,b){if(Math.abs(a.length-b.length)>1)return 9;const m=a.length,n=b.length;let prev=Array.from({length:n+1},(_,j)=>j);
  for(let i=1;i<=m;i++){const cur=[i];for(let j=1;j<=n;j++)cur[j]=Math.min(prev[j]+1,cur[j-1]+1,prev[j-1]+(a[i-1]===b[j-1]?0:1));prev=cur;}return prev[n];}
function _tokEq(a,b){
  if(a===b)return true;
  const sa=arSkel(a),sb=arSkel(b);
  if(sa.length>=2&&sa===sb)return true;
  if(sa.length>=3&&sb.length>=3&&_lev(sa,sb)<=1&&Math.min(a.length,b.length)>=4)return true; // خطأ بحرف
  return false;
}
// كلمة «ذات معنى» = ٣ أحرف فأكثر بعد «ال»، وليست كلمة عامة تحتاج ما بعدها
// (يمنع قبول «ابن» وحدها لـ«ابن العم» أو «الجزء» لـ«الجزء الخلفي»).
const AR_GENERIC=new Set(['ابن','بنت','ولد','جزء','شخص','رجل','سيده','مكان','نوع','شيء']);
function _meaningful(t){const x=dialNorm(t).replace(/^(وال|بال|لل|فال|كال|ال)(?=..)/,'');return x.length>=3&&!AR_GENERIC.has(x);}
function _altOk(ansToks,k){
  const kt=arTokens(k);if(!kt.length)return false;
  // ١) كتب الطالب المعنى كاملاً (ولو أضاف كلمات): كل كلمات المعنى موجودة في إجابته.
  if(kt.every(x=>ansToks.some(y=>_tokEq(x,y))))return true;
  // ٢) كتب جزءًا من معنى مركّب (مثل «الخلفي» لـ«الجزء الخلفي»): كل كلماته من المعنى، وفيها كلمة ذات معنى.
  if(ansToks.every(y=>kt.some(x=>_tokEq(x,y)))&&ansToks.some(_meaningful))return true;
  return false;
}
function drillTypeOk(input,w){
  const ans=dialNorm(input);if(ans.length<2)return false;
  const ansToks=arTokens(input);
  const alts=[coreAr(w.a),...acceptedAr(w)];
  for(const k of alts){
    const kn=dialNorm(k);
    if(kn&&ans===kn)return true;
    if(arSkel(input).length>=2&&arSkel(input)===arSkel(k))return true;
    if(ansToks.length&&_altOk(ansToks,k))return true;
  }
  return false;
}
