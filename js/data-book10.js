// ═══════════════════════════════════════
// DATA — BOOK 10
// Lesson 1 (Vending machines) — vocab, grammar, word-order, per-lesson quiz.
// Built lesson by lesson; more lessons get appended here later.
// ═══════════════════════════════════════
const BOOK_ID='book10';

const LESSON_META={
  l1:{ico:'🤖',title:'Lesson 1 — Vending machines',sub:'آلات البيع الذاتي · how to + فعل · ظروف الزمن (while/before/after) · be supposed to'}
};
const LESSON_KEYS=Object.keys(LESSON_META);

// ═══════════════════════════════════════
// VOCABULARY
// ═══════════════════════════════════════
const VOCAB={
l1:[
  // — الآلات وأجزاؤها —
  {e:'vending machine',a:'آلة بيع ذاتي',em:'🤖'},
  {e:'washing machine',a:'غسّالة',em:'🧺'},
  {e:'machine',a:'آلة',em:'⚙️'},
  {e:'dryer',a:'مجفّف الملابس',em:'🌀'},
  {e:'button',a:'زرّ',em:'🔘'},
  {e:'knob',a:'مقبض دوّار',em:'🎛️'},
  {e:'lever',a:'ذراع',em:'🎚️'},
  {e:'coin return',a:'مُرجِع العملة',em:'🪙'},
  {e:'opening',a:'فتحة الإخراج',em:'📤'},
  {e:'selection',a:'اختيار',em:'🔢'},
  {e:'tray',a:'صينية / درج',em:'🍽️'},
  // — ما تبيعه الآلة —
  {e:'candy bar',a:'لوح حلوى',em:'🍫'},
  {e:'chewing gum',a:'علكة',em:'🍬'},
  {e:'chip',a:'رقاقة (شيبس)',em:'🍟'},
  {e:'nut',a:'مكسّرات',em:'🥜'},
  {e:'soda',a:'مشروب غازي',em:'🥤'},
  {e:'soft drink',a:'مشروب غازي',em:'🥤'},
  {e:'diet drink',a:'مشروب دايت',em:'🫗'},
  {e:'drink',a:'مشروب',em:'🧃'},
  {e:'cream',a:'كريمة / قشدة',em:'🍦'},
  {e:'detergent',a:'منظّف الغسيل',em:'🧴'},
  // — الأفعال —
  {e:'insert',a:'يُدخل (عملة)',em:'📥'},
  {e:'operate',a:'يُشغّل',em:'▶️'},
  {e:'work',a:'يعمل (تشتغل الآلة)',em:'✅'},
  {e:'dispense',a:'يصرف / يُخرج',em:'🎰'},
  {e:'drop',a:'يُسقط',past:'dropped',pa:'أسقط',em:'⬇️'},
  {e:'lift',a:'يرفع',em:'⬆️'},
  {e:'stick',a:'يعلق / يلتصق',past:'stuck',pa:'علِق',em:'📌'},
  {e:'teach',a:'يُعلّم',past:'taught',pa:'علّم',em:'👨‍🏫'},
  {e:'find out',a:'يكتشف',past:'found out',pa:'اكتشف',em:'🔍'},
  {e:'get back',a:'يستردّ',past:'got back',pa:'استردّ',em:'🔙'},
  {e:'be supposed to',a:'يُفترض أن',em:'☑️'},
  // — كلمات أخرى —
  {e:'exact',a:'مضبوط / بالضبط',em:'🎯'},
  {e:'exactly',a:'تماماً',em:'💯'},
  {e:'favorite',a:'المفضّل',em:'⭐'},
  {e:'popular',a:'شائع / رائج',em:'👍'},
  {e:'out of order',a:'معطّل',em:'⛔'},
  {e:'out of',a:'نفد منه',em:'🈳'},
  {e:'everywhere',a:'في كل مكان',em:'🌐'},
  {e:'another',a:'آخر / إضافي',em:'➕'},
  {e:'finally',a:'أخيراً',em:'🏁'},
  {e:'lastly',a:'وأخيراً',em:'🔚'},
  {e:'while',a:'بينما',em:'⏳'},
  {e:'until',a:'حتى',em:'⏰'},
]
};

// ═══════════════════════════════════════
// GRAMMAR (قواعد)
// ═══════════════════════════════════════
const GRAMMAR={
l1:[
  {
    title:'Using how to + verb', ar:'how to + الفعل (كيفية عمل شيء)',
    rule:'للتعبير عن معرفة/شرح كيفية عمل شيء: (know/tell/teach/ask/learn) + how to + الفعل المجرّد.',
    parts:[
      {t:'know how to + verb',d:'مثال: Sam knows how to swim. = سام يعرف كيف يسبح.'},
      {t:'tell/teach/ask + مفعول + how to',d:'مثال: Bob told me how to fix the car. = أخبرني بوب كيف أُصلح السيارة.'},
      {t:'how to + فعل مجرّد',d:'دائماً فعل مجرّد بعد to: how to use · how to operate.'},
    ],
    check:{q:'Can you tell me _______ use this machine?',o:['how to','how','to how','what to'],a:0,en:'how to + verb',ar:'كيفية العمل → how to + فعل'},
    formula:[{t:'know/tell/teach',c:'v'},{t:'+',c:'p'},{t:'(someone)',c:'s'},{t:'+',c:'p'},{t:'how to + verb',c:'k'}],
    compare:[
      {c1:'Sam knows how to swim.',c2:'Sue asked me how to get there.',ar:'know / ask + how to'},
      {c1:'Will you teach me how to operate this machine?',c2:'How does this machine work?',ar:'how to (كيفية) · how (سؤال عن الطريقة)'},
    ],
    examples:[
      {s:'Bob told me how to fix the car.',tr:'أخبرني بوب كيف أُصلح السيارة.',ar:'told me + how to fix',ok:true},
      {s:'Will you teach me how to operate this machine?',tr:'هل تُعلّمني كيف أُشغّل هذه الآلة؟',ar:'teach me + how to operate',ok:true},
      {s:'Sam knows how swim.',wrong:'how swim',right:'how to swim',tr:'لا بدّ من to قبل الفعل: how to swim.',ok:false},
    ]
  },
  {
    title:'Adverb clauses of time', ar:'ظروف الزمن (before/after/when/while/until)',
    rule:'جملة الزمن تبدأ بـ before/after/when/while/until لربط حدثين. يمكن أن تأتي أولاً (مع فاصلة) أو آخراً.',
    parts:[
      {t:'before / after',d:'ترتيب زمني: John watched TV before he went to bed.'},
      {t:'when / while',d:'وقت متزامن: While Tom exercises, he listens to music.'},
      {t:'until',d:'حتى نهاية: We stayed in class until we finished the lesson.'},
    ],
    check:{q:'Keep your seat belt fastened _______ you\'re in the air.',o:['while','before','until','after'],a:0,en:'same time → while',ar:'وقت متزامن → while'},
    formula:[{t:'main clause',c:'s'},{t:'+',c:'p'},{t:'before/after/when/while/until',c:'v'},{t:'+',c:'p'},{t:'time clause',c:'k'}],
    compare:[
      {c1:'Keep your seat belt fastened while you\'re in the air.',c2:'While you\'re in the air, keep your seat belt fastened.',ar:'الجملة الزمنية أولاً أو آخراً'},
      {c1:'before he went to bed',c2:'until it lands',ar:'before / until'},
    ],
    examples:[
      {s:'After Mary ate dinner, she went to the library.',tr:'بعدما تناولت ماري العشاء، ذهبت إلى المكتبة.',ar:'after + جملة زمن',ok:true},
      {s:'Don\'t get off the plane until it lands.',tr:'لا تنزل من الطائرة حتى تهبط.',ar:'until = حتى',ok:true},
      {s:'The children woke up when the phone.',wrong:'when the phone',right:'when the phone rang',tr:'بعد when جملة كاملة: when the phone rang.',ok:false},
    ]
  },
  {
    title:'Using be supposed to', ar:'be supposed to (المفترض / الواجب)',
    rule:'للتعبير عن أمرٍ مُتوقَّع أو واجب حسب القاعدة: (am/is/are) + supposed to + الفعل المجرّد. النفي: not supposed to (ممنوع/غير مسموح).',
    parts:[
      {t:'am/is/are supposed to + verb',d:'مثال: You\'re supposed to wear your seat belt.'},
      {t:'not supposed to = ممنوع',d:'You\'re not supposed to drive without a license.'},
      {t:'واجب/متوقّع',d:'ما يُفترض فعله حسب القاعدة أو الاتفاق.'},
    ],
    check:{q:'You _______ wear your seat belt in the car.',o:["'re supposed to","supposed","'re supposing to","supposed to be"],a:0,en:'expected/required → be supposed to',ar:'واجب/متوقّع → be supposed to'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'am/is/are',c:'v'},{t:'+',c:'p'},{t:'supposed to + verb',c:'k'}],
    compare:[
      {c1:"You're supposed to wear your seat belt.",c2:"You're not supposed to drive without a license.",ar:'إثبات (واجب) ↔ نفي (ممنوع)'},
      {c1:'Should we take our hats off?',c2:'Yes, we are supposed to.',ar:'السؤال والإجابة'},
    ],
    examples:[
      {s:"You're supposed to wear your seat belt.",tr:'يُفترض أن تلبس حزام الأمان.',ar:'supposed to = واجب',ok:true},
      {s:"We're not supposed to smoke inside.",tr:'ليس مسموحاً لنا التدخين بالداخل.',ar:'not supposed to = ممنوع',ok:true},
      {s:'You supposed to wait here.',wrong:'You supposed',right:"You're supposed",tr:'لا بدّ من فعل الكينونة: You\'re supposed to.',ok:false},
    ]
  }
]
};

// ═══════════════════════════════════════
// WO — رتّب الجملة (word order)
// ═══════════════════════════════════════
const WO={
l1:[
  {words:['Can','you','tell','me','how','to','use','this','machine'],ans:'Can you tell me how to use this machine?',tr:'هل يمكنك أن تخبرني كيف أستخدم هذه الآلة؟',ar:'how to + فعل'},
  {words:['First','insert','money','into','the','slot'],ans:'First insert money into the slot.',tr:'أولاً أدخل المال في الفتحة.',ar:'تعليمات'},
  {words:['Then','make','your','selection'],ans:'Then make your selection.',tr:'ثم اختر ما تريد.',ar:'selection'},
  {words:["Don't",'forget','to','get','your','change'],ans:"Don't forget to get your change.",tr:'لا تنسَ أن تأخذ الباقي.',ar:'get back / change'},
  {words:['Keep','your','seat','belt','fastened','while',"you're",'in','the','air'],ans:"Keep your seat belt fastened while you're in the air.",tr:'اربط حزام الأمان بينما أنت في الجو.',ar:'while = بينما'},
  {words:["You're",'supposed','to','wear','your','seat','belt'],ans:"You're supposed to wear your seat belt.",tr:'يُفترض أن تلبس حزام الأمان.',ar:'be supposed to'},
  {words:['The','machine','is','out','of','order'],ans:'The machine is out of order.',tr:'الآلة معطّلة.',ar:'out of order'},
]
};

// ═══════════════════════════════════════
// EE — "اختبر" (lesson quiz, multiple choice)
// المصدر: تمارين التقييم الرسمية (Exercise F · Circle the best answer)
// ═══════════════════════════════════════
const EE={
l1:[
  {q:"Jane: I'm looking for my pencil. I _______ it over here.",o:["lifted","inserted","dropped","taught"],a:2,en:"lost on floor → dropped",ar:'سقط منها → أسقطته (dropped)',tr:'أبحث عن قلمي، لقد أسقطته هنا.'},
  {q:"Were you ready for the test? No, I didn't _______ about it until this morning.",o:["find out","get back","teach","operate"],a:0,en:"learn about → find out",ar:'يعرف/يكتشف → find out',tr:'هل كنت مستعدّاً للاختبار؟ لا، لم أكتشف أمره إلا هذا الصباح.'},
  {q:"I can't get any coffee. The machine's _______.",o:["everywhere","out of order","working","popular"],a:1,en:"not working → out of order",ar:'لا تعمل → معطّلة (out of order)',tr:'لا أستطيع الحصول على قهوة، الآلة معطّلة.'},
  {q:"I need to clean my clothes. Put them in the _______.",o:["coin return lever","vending machine","washing machine","tray"],a:2,en:"clean clothes → washing machine",ar:'لتنظيف الملابس → غسّالة',tr:'أحتاج أن أنظّف ملابسي، ضعها في الغسّالة.'},
  {q:"You speak English very well. Thank you. My sister _______ me.",o:["learned","studied","taught","found out"],a:2,en:"gave lessons → taught",ar:'علّمتني → taught',tr:'تتحدّث الإنجليزية جيّداً. شكراً، أختي علّمتني.'},
  {q:"What did you do with the stamp? I _______ it on the envelope.",o:["operated","stuck","dispensed","lifted"],a:1,en:"attached → stuck",ar:'ألصقته → stuck',tr:'ماذا فعلت بالطابع؟ ألصقته على الظرف.'},
  {q:"Tom will buy some land _______ he builds a house.",o:["before","while","after","until"],a:0,en:"first buy then build → before",ar:'يشتري ثم يبني → before',tr:'سيشتري توم أرضاً قبل أن يبني بيتاً.'},
  {q:"All of the boys are wearing baseball caps. The caps are _______.",o:["exact","popular","favorite","stuck"],a:1,en:"everyone wears → popular",ar:'الجميع يلبسها → رائجة (popular)',tr:'كل الأولاد يلبسون قبّعات بيسبول. القبّعات رائجة.'},
  {q:"My brother's car won't move. It's _______ gas.",o:["out of","find out","supposed to be","another"],a:0,en:"no more gas → out of",ar:'نفد الوقود → out of gas',tr:'سيارة أخي لا تتحرّك، نفد منها الوقود.'},
  {q:"In a big city, there are hotels on every street. They're _______.",o:["exactly","finally","everywhere","popular"],a:2,en:"on every street → everywhere",ar:'في كل شارع → في كل مكان',tr:'في المدينة الكبيرة توجد فنادق في كل شارع، إنها في كل مكان.'},
  {q:"My clothes are wet. I need to put them into the _______.",o:["dryer","opening","button","tray"],a:0,en:"dry clothes → dryer",ar:'لتجفيف الملابس → مجفّف (dryer)',tr:'ملابسي مبلّلة، أحتاج أن أضعها في المجفّف.'},
  {q:"First, he got a pen. Then, he wrote a letter. _______, he mailed it.",o:["Lastly","While","Before","When"],a:0,en:"final step → Lastly",ar:'الخطوة الأخيرة → أخيراً (Lastly)',tr:'أولاً أخذ قلماً، ثم كتب رسالة، وأخيراً أرسلها.'},
  {q:"There are _______ flowers in the yard.",o:["stuck","no","another","exact"],a:1,en:"none → no flowers",ar:'لا يوجد → no flowers',tr:'لا توجد أزهار في الفناء.'},
  {q:"This is too heavy. I can't _______ it.",o:["drop","lift","work","insert"],a:1,en:"raise → lift",ar:'يرفع → lift',tr:'هذا ثقيل جداً، لا أستطيع رفعه.'},
  {q:"Jack got dressed _______ he took his shower.",o:["before","after","when","while"],a:1,en:"shower first then dress → after",ar:'استحمّ ثم لبس → after',tr:'ارتدى جاك ملابسه بعدما استحمّ.'},
  {q:"What kind of meat do you like? My _______ meat is beef.",o:["favorite","popular","exact","another"],a:0,en:"most liked → favorite",ar:'الأكثر حبّاً → المفضّل (favorite)',tr:'أيّ نوع لحم تحبّ؟ اللحم المفضّل عندي هو البقر.'},
  {q:"I can't open the window. It's _______.",o:["last","stuck","another","popular"],a:1,en:"won't move → stuck",ar:'لا تفتح → عالقة (stuck)',tr:'لا أستطيع فتح النافذة، إنها عالقة.'},
  {q:"Where do I get my snack? From the _______.",o:["selection","knob","opening","lever"],a:2,en:"comes out from → opening",ar:'يخرج من → الفتحة (opening)',tr:'من أين آخذ وجبتي الخفيفة؟ من الفتحة.'},
  {q:"Should we take our hats off when we go into the building? Yes, we _______.",o:["are supposed to","dropped it","got it back","find out"],a:0,en:"expected → are supposed to",ar:'من المفترض → are supposed to',tr:'هل يجب أن نخلع قبّعاتنا عند دخول المبنى؟ نعم، يُفترض ذلك.'},
  {q:"Tom: _______  Bob: Sure. I'll be glad to.",o:["Is this a vending machine?","Can you tell me how to operate this machine?","Did you get your change back?","Are you out of order?"],a:1,en:"request for help → how to operate",ar:'طلب المساعدة → how to operate',tr:'توم: هل يمكنك أن تخبرني كيف أُشغّل هذه الآلة؟ بوب: بالتأكيد، بكل سرور.'},
  {q:"Jan was reading a book _______ Bob was watching the game on TV.",o:["before","while","after","until"],a:1,en:"same time → while",ar:'في نفس الوقت → while',tr:'كانت جان تقرأ كتاباً بينما كان بوب يشاهد المباراة.'},
  {q:"Push the _______ to choose something to eat.",o:["knob","tray","button","coin return"],a:2,en:"to select → button",ar:'للاختيار → الزرّ (button)',tr:'اضغط الزرّ لاختيار شيء تأكله.'},
  {q:"I bought some _______ to eat.",o:["chips","detergent","time","cream"],a:0,en:"snack food → chips",ar:'وجبة خفيفة → رقائق (chips)',tr:'اشتريت بعض الرقائق لآكلها.'},
  {q:"The blue and the black shoes cost _______ the same.",o:["no","lastly","exactly","another"],a:2,en:"precisely equal → exactly",ar:'بالضبط نفس السعر → exactly',tr:'الحذاء الأزرق والأسود يكلّفان تماماً نفس السعر.'},
]
};

// ═══════════════════════════════════════
// FINAL EXAM (الاختبار النهائي) — يجمع أسئلة الدروس المتاحة
// ═══════════════════════════════════════
const FINAL=dedupe_by_q([
  ...EE.l1,
]);
EE.final=FINAL;

// ═══════════════════════════════════════
// SPELLING — write from listening
// ═══════════════════════════════════════
const SPELL_LESSONS=[
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 1 — آلات البيع',w:[
    {e:'machine',a:'آلة',em:'⚙️'},{e:'button',a:'زرّ',em:'🔘'},{e:'selection',a:'اختيار',em:'🔢'},
    {e:'insert',a:'يُدخل',em:'📥'},{e:'detergent',a:'منظّف',em:'🧴'},{e:'popular',a:'رائج',em:'👍'},
    {e:'favorite',a:'المفضّل',em:'⭐'},{e:'everywhere',a:'في كل مكان',em:'🌐'},
  ]},
];

// ═══════════════════════════════════════
// LISTENING — لا يوجد فيديوهات لهذا الكتاب بعد
// ═══════════════════════════════════════
const YT_VIDEOS=[];

// ═══════════════════════════════════════
// ROUTING MANIFEST
// ═══════════════════════════════════════
const SCREENS=['home','lscreen','rscreen','ytscreen','fscreen','spscreen','mkscreen'];
const SCREEN_NAMES={home:'الرئيسية',lscreen:'درس',rscreen:'المراجعة',ytscreen:'الاستماع',fscreen:'الاختبار النهائي',spscreen:'الإملاء',mkscreen:'مراجعة الأخطاء'};
