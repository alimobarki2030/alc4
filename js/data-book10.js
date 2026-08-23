// ═══════════════════════════════════════
// DATA — BOOK 10
// Lesson 1 (Vending machines) — vocab, grammar, word-order, per-lesson quiz.
// Built lesson by lesson; more lessons get appended here later.
// ═══════════════════════════════════════
const BOOK_ID='book10';

const LESSON_META={
  l1:{ico:'🤖',title:'Lesson 1 — Vending machines',sub:'آلات البيع الذاتي · how to + فعل · ظروف الزمن (while/before/after) · be supposed to'},
  l2:{ico:'🤝',title:'Lesson 2 — Have you met?',sub:'التحية والتعارف · المتاجر · المصدر (to + فعل) · الفعل + ing'},
  l3:{ico:'🛞',title:'Lesson 3 — Changing a tire',sub:'تبديل الإطار · الطلبات المهذّبة would/could · الكلام المنقول say/ask · قراءة الوقت'},
  l4:{ico:'👨‍👩‍👧',title:"Lesson 4 — How's the family?",sub:'العائلة والوظائف والطقس · be able to · It للطقس/الوقت · How far/long'}
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
],
l2:[
  // — المتاجر وأماكن التسوّق —
  {e:'mall',a:'مركز تسوّق (مول)',em:'🏬'},
  {e:'shopping center',a:'مركز تسوّق',em:'🏬'},
  {e:'department store',a:'متجر أقسام كبير',em:'🏪'},
  {e:'discount store',a:'متجر تخفيضات',em:'🏷️'},
  {e:'clothing store',a:'متجر ملابس',em:'👕'},
  {e:'supermarket',a:'سوبر ماركت',em:'🛒'},
  {e:'shop',a:'متجر / يتسوّق',em:'🛍️'},
  {e:'cafeteria',a:'كافتيريا',em:'🍽️'},
  {e:'parking lot',a:'موقف سيارات',em:'🅿️'},
  // — المبنى والطوابق —
  {e:'floor',a:'طابق',em:'🏢'},
  {e:'elevator',a:'مصعد',em:'🛗'},
  {e:'escalator',a:'سلّم متحرّك',em:'📶'},
  {e:'stairs',a:'دَرَج',em:'🪜'},
  {e:'upstairs',a:'الطابق العلوي',em:'⬆️'},
  {e:'downstairs',a:'الطابق السفلي',em:'⬇️'},
  // — الناس والتعارف —
  {e:'adult',a:'شخص بالغ',em:'🧑'},
  {e:'neighbor',a:'جار',em:'🏘️'},
  {e:'neighborhood',a:'الحي',em:'🏘️'},
  {e:'introduction',a:'تقديم / تعريف',em:'🤝'},
  {e:'everyone',a:'الجميع',em:'👥'},
  {e:'everybody',a:'الجميع',em:'👥'},
  {e:'rule',a:'قاعدة / نظام',em:'📏'},
  {e:'variety',a:'تنوّع',em:'🎨'},
  {e:'supper',a:'العشاء',em:'🍲'},
  // — الأفعال —
  {e:'introduce',a:'يُقدّم / يُعرّف',em:'🤝'},
  {e:'meet',a:'يلتقي / يتعرّف',em:'👋'},
  {e:'shake',a:'يصافح',past:'shook',pa:'صافح',em:'🤝'},
  {e:'decide to',a:'يقرّر أن',em:'✅'},
  {e:'mind',a:'يمانع',em:'🤔'},
  {e:'receive',a:'يستلم',em:'📩'},
  {e:'let',a:'يسمح / يدع',past:'let',pa:'سمح',em:'🙆'},
  {e:'write down',a:'يدوّن',past:'wrote down',pa:'دوّن',em:'✍️'},
  {e:'go shopping',a:'يذهب للتسوّق',em:'🛍️'},
  // — كلمات أخرى —
  {e:'afraid',a:'خائف',em:'😨'},
  {e:'alone',a:'وحيد / بمفرده',em:'🧍'},
  {e:'polite',a:'مؤدّب',em:'🙇'},
  {e:'politely',a:'بأدب',em:'😊'},
],
l3:[
  // — الإطار والعجلة —
  {e:'tire',a:'إطار (كفر)',em:'🛞'},
  {e:'flat',a:'مثقوب / مُفرَّغ',em:'🫓'},
  {e:'spare',a:'احتياطي',em:'🆘'},
  {e:'wheel',a:'عجلة',em:'☸️'},
  {e:'hubcap',a:'غطاء الصُّرّة',em:'⭕'},
  {e:'air',a:'هواء',em:'💨'},
  // — الأدوات —
  {e:'jack',a:'رافعة (عفريتة)',em:'🛠️'},
  {e:'wrench',a:'مفتاح ربط',em:'🔧'},
  {e:'lug nut',a:'صامولة العجلة',em:'🔩'},
  {e:'nut',a:'صامولة',em:'🔩'},
  {e:'trunk',a:'صندوق السيارة',em:'🧳'},
  {e:'cover',a:'غطاء',em:'🛡️'},
  {e:'key',a:'مفتاح',em:'🔑'},
  // — الأفعال —
  {e:'inflate',a:'ينفخ (يملأ هواءً)',em:'🎈'},
  {e:'jack up',a:'يرفع بالرافعة',em:'⬆️'},
  {e:'loosen',a:'يفكّ / يُرخي',em:'🔄'},
  {e:'tighten',a:'يُحكِم / يشدّ',em:'🔒'},
  {e:'raise',a:'يرفع',em:'🔼'},
  {e:'lower',a:'يخفض',em:'🔽'},
  {e:'remove',a:'يزيل / ينزع',em:'➖'},
  {e:'replace',a:'يستبدل',em:'♻️'},
  {e:'hurry up',a:'يُسرع',em:'🏃'},
  {e:'keep',a:'يُبقي / يحتفظ',past:'kept',pa:'أبقى',em:'🤲'},
  {e:'hand out',a:'يوزّع (باليد)',em:'📤'},
  {e:'pass out',a:'يوزّع',em:'🗂️'},
  {e:'mind',a:'يمانع',em:'🤔'},
  // — الأفعال الناقصة والطلب —
  {e:'would',a:'(للطلب المهذّب) هل تـ…',em:'🙏'},
  {e:'could',a:'(للطلب المهذّب) هل بإمكانك',em:'🙏'},
  {e:'can',a:'يستطيع',alt:['استطيع','يقدر','اقدر','بإمكانه','قادر','ممكن','من الممكن','يمكن'],em:'💪'},
  // — كلمات أخرى —
  {e:'certainly',a:'بالتأكيد',em:'✔️'},
  {e:'of course',a:'بالطبع',em:'👌'},
  {e:'common',a:'شائع / مألوف',em:'🔁'},
  {e:'enough',a:'كافٍ',em:'✅'},
  {e:'extra',a:'إضافي',em:'➕'},
  {e:'quick',a:'سريع',em:'⚡'},
  {e:'quickly',a:'بسرعة',em:'💨'},
  {e:'in a hurry',a:'على عجل',em:'🏃'},
  {e:'loose',a:'مُرتخٍ / سائب',em:'🔓'},
  {e:'tight',a:'مُحكَم / مشدود',em:'🔒'},
  {e:'the back of',a:'الجزء الخلفي من',em:'⬅️'},
  {e:'the front of',a:'الجزء الأمامي من',em:'➡️'},
],
l4:[
  // — العائلة —
  {e:'aunt',a:'عمّة / خالة',em:'👩'},
  {e:'uncle',a:'عمّ / خال',em:'👨'},
  {e:'cousin',a:'ابن العمّ/الخال',em:'🧑'},
  {e:'nephew',a:'ابن الأخ/الأخت',em:'👦'},
  {e:'niece',a:'بنت الأخ/الأخت',em:'👧'},
  {e:'parent',a:'أحد الوالدين',em:'👪'},
  {e:'grandparent',a:'الجدّ/الجدّة',em:'👴'},
  {e:'grandfather',a:'الجدّ',em:'👴'},
  {e:'grandmother',a:'الجدّة',em:'👵'},
  {e:'relative',a:'قريب (نسيب)',em:'👨‍👩‍👧'},
  {e:'folks',a:'الأهل',em:'👨‍👩‍👦'},
  {e:'baby',a:'رضيع',em:'👶'},
  {e:'marriage',a:'زواج',em:'💍'},
  // — الوظائف —
  {e:'boss',a:'المدير / الرئيس',em:'🧑‍💼'},
  {e:'business',a:'عمل تجاري',em:'🏢'},
  {e:'businessman',a:'رجل أعمال',em:'👨‍💼'},
  {e:'businesswoman',a:'سيدة أعمال',em:'👩‍💼'},
  {e:'cashier',a:'أمين الصندوق',em:'💰'},
  {e:'company',a:'شركة',em:'🏬'},
  {e:'dentist',a:'طبيب أسنان',em:'🦷'},
  {e:'driver',a:'سائق',em:'🚗'},
  {e:'salesperson',a:'بائع',em:'🛍️'},
  {e:'secretary',a:'سكرتير',em:'🗂️'},
  {e:'writer',a:'كاتب',em:'✍️'},
  {e:'occupation',a:'مهنة',em:'💼'},
  // — القراءة والإعلام —
  {e:'article',a:'مقال',em:'📰'},
  {e:'magazine',a:'مجلّة',em:'📖'},
  {e:'newspaper',a:'صحيفة',em:'🗞️'},
  {e:'news',a:'أخبار',em:'📢'},
  {e:'collection',a:'مجموعة',em:'📚'},
  // — الأفعال —
  {e:'be able to',a:'يقدر على / يستطيع',em:'💪'},
  {e:'collect',a:'يجمع',em:'🧺'},
  {e:'marry',a:'يتزوّج',em:'💍'},
  {e:'get married',a:'يتزوّج',em:'💒'},
  {e:'own',a:'يملك',em:'🔑'},
  {e:'type',a:'يطبع (بلوحة المفاتيح)',em:'⌨️'},
  {e:'work on',a:'يعمل على',em:'🔧'},
  // — كلمات أخرى —
  {e:'about',a:'حوالي / تقريباً',em:'≈'},
  {e:'famous',a:'مشهور',em:'🌟'},
  {e:'far',a:'بعيد',em:'📏'},
  {e:'pleasant',a:'لطيف (طقس)',em:'😊'},
  {e:'single',a:'أعزب / عازب',em:'🙋'},
  {e:'married',a:'متزوّج',em:'💑'},
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
],
l2:[
  {
    title:'Infinitive: adjective/verb + to + verb', ar:'المصدر: صفة/فعل + to + الفعل',
    rule:'بعد صفات المشاعر (happy/glad/ready/afraid/sorry) وبعض الأفعال (decide/want/be sure) نضع to + الفعل المجرّد.',
    parts:[
      {t:'adjective + to + verb',d:'مثال: We\'re ready to go. · Lt Mathews was happy to receive a letter.'},
      {t:'verb + to + verb',d:'مثال: He decided to buy the brown coat. · Be sure to shake his hand.'},
      {t:'to + فعل مجرّد',d:'دائماً فعل مجرّد بعد to: to go · to meet · to receive.'},
    ],
    check:{q:'Lt Mathews was happy _______ a letter from home.',o:['to receive','receive','did receive','receiving'],a:0,en:'adjective + to + verb',ar:'صفة + to + فعل → to receive'},
    formula:[{t:'adjective/verb',c:'v'},{t:'+',c:'p'},{t:'to',c:'s'},{t:'+',c:'p'},{t:'base verb',c:'k'}],
    compare:[
      {c1:"We're ready to go.",c2:'Col Jackson was pleased to meet them.',ar:'صفة + to + فعل'},
      {c1:'He decided to buy the brown one.',c2:'My sister was afraid to sleep alone.',ar:'decide / afraid + to'},
    ],
    examples:[
      {s:"We're ready to go.",tr:'نحن مستعدّون للذهاب.',ar:'ready + to go',ok:true},
      {s:'He decided to buy the brown coat.',tr:'قرّر أن يشتري المعطف البنّي.',ar:'decided + to buy',ok:true},
      {s:'We are ready go.',wrong:'ready go',right:'ready to go',tr:'لا بدّ من to قبل الفعل: ready to go.',ok:false},
    ]
  },
  {
    title:'Verb + gerund (-ing)', ar:'الفعل + الاسم الفعلي (-ing)',
    rule:'بعد أفعال مثل enjoy/finish/mind/begin/start نضع الفعل + ing (الاسم الفعلي).',
    parts:[
      {t:'enjoy/finish/mind + verb-ing',d:'مثال: She enjoys singing. · Do you mind driving?'},
      {t:'begin/start + verb-ing',d:'مثال: Mary began studying Arabic. · Lt Roberts started flying planes.'},
      {t:'verb + ing',d:'الاسم الفعلي: singing · doing · driving · studying.'},
    ],
    check:{q:'Do you mind _______ me to work tomorrow?',o:['driving','drive','to drive','drove'],a:0,en:'mind + verb-ing',ar:'بعد mind نضع ing → driving'},
    formula:[{t:'enjoy/finish/mind',c:'v'},{t:'+',c:'p'},{t:'verb + ing',c:'k'}],
    compare:[
      {c1:'She enjoys singing.',c2:'When will you finish doing your homework?',ar:'enjoy / finish + ing'},
      {c1:'Mary began studying Arabic.',c2:'Lt Roberts started flying planes.',ar:'begin / start + ing'},
    ],
    examples:[
      {s:'She enjoys singing.',tr:'تستمتع بالغناء.',ar:'enjoy + singing',ok:true},
      {s:'Mary began studying Arabic last summer.',tr:'بدأت ماري دراسة العربية الصيف الماضي.',ar:'began + studying',ok:true},
      {s:'Do you mind to drive?',wrong:'to drive',right:'driving',tr:'بعد mind نضع الفعل+ing: mind driving.',ok:false},
    ]
  },
  {
    title:'Prepositions of location', ar:'حروف المكان (الموقع)',
    rule:'نصف موقع الأشياء بحروف المكان: next to · above · below · in front of · behind · upstairs/downstairs.',
    parts:[
      {t:'next to = بجانب',d:'The parking lot is next to the building.'},
      {t:'above / below',d:'فوق / تحت: The movie theater is below this floor.'},
      {t:'upstairs / downstairs',d:'في الأعلى / في الأسفل (بين الطوابق).'},
    ],
    check:{q:'The parking lot is _______ the building.',o:['next to','ready to','afraid of','decide to'],a:0,en:'location → next to',ar:'الموقع → بجانب (next to)'},
    formula:[{t:'A',c:'s'},{t:'is',c:'v'},{t:'next to / above / below',c:'k'},{t:'+',c:'p'},{t:'B',c:'s'}],
    compare:[
      {c1:'The parking lot is next to the building.',c2:'The cafeteria is on the first floor.',ar:'next to · on the … floor'},
      {c1:'The shop is upstairs.',c2:'The theater is downstairs.',ar:'upstairs ↔ downstairs'},
    ],
    examples:[
      {s:'The parking lot is next to the building.',tr:'موقف السيارات بجانب المبنى.',ar:'next to = بجانب',ok:true},
      {s:'The clothing store is on the second floor.',tr:'متجر الملابس في الطابق الثاني.',ar:'on the … floor',ok:true},
      {s:'The shop is next the elevator.',wrong:'next the',right:'next to the',tr:'الصحيح next to (بحرف to).',ok:false},
    ]
  }
],
l3:[
  {
    title:'Polite requests with would / could', ar:'الطلبات المهذّبة بـ would / could',
    rule:'للطلب المهذّب نبدأ بـ Would you…? أو Could you…? + الفعل المجرّد. والإجابة: Yes, I will / Of course / Sure، أو الاعتذار Sorry, I can\'t.',
    parts:[
      {t:'Would you + verb?',d:'مثال: Would you open the door? = هل تفتح الباب من فضلك؟'},
      {t:'Could you + verb?',d:'مثال: Could you close the window? = هل بإمكانك إغلاق النافذة؟'},
      {t:'الإجابة',d:'Yes, I will. / Of course. / Sure, I\'d be happy to. · الاعتذار: Sorry, I can\'t.'},
    ],
    check:{q:'_______ you please close the window? — Sure, I\'d be happy to.',o:['Could','Do','Are','Will not'],a:0,en:'polite request → Could you',ar:'طلب مهذّب → Could you'},
    formula:[{t:'Would/Could',c:'v'},{t:'+',c:'p'},{t:'you',c:'s'},{t:'+',c:'p'},{t:'base verb',c:'k'}],
    compare:[
      {c1:'Would you open the door?',c2:'Could you open the door?',ar:'would / could للطلب'},
      {c1:'Yes, I will.',c2:"No, I can't. / Of course.",ar:'الإجابة إثباتاً أو اعتذاراً'},
    ],
    examples:[
      {s:'Would you do me a favor?',tr:'هل تُسدي لي معروفاً؟',ar:'Would you + verb',ok:true},
      {s:"Could you please close the window? Sure, I'd be happy to.",tr:'هل يمكنك إغلاق النافذة؟ بكل سرور.',ar:'Could you + verb',ok:true},
      {s:'Would you to open the door?',wrong:'would you to open',right:'would you open',tr:'بعد would/could فعل مجرّد بلا to: would you open.',ok:false},
    ]
  },
  {
    title:'Reported speech: say to / ask to', ar:'الكلام المنقول (say to · ask to)',
    rule:'لنقل أمرٍ أو طلب: (said to + الفعل) لنقل الأمر، و(asked + مفعول + to + الفعل) لنقل الطلب.',
    parts:[
      {t:'He said to + verb',d:'مثال: What did the officer say? He said to stop.'},
      {t:'She asked + مفعول + to + verb',d:'مثال: What did she ask you? She asked me to help her.'},
      {t:'النفي: not to',d:'He said not to move. = قال ألّا نتحرّك.'},
    ],
    check:{q:'What did she ask you? She asked me _______ help her.',o:['to','for','that','will'],a:0,en:'ask + object + to + verb',ar:'ask + مفعول + to + فعل',},
    formula:[{t:'said/asked',c:'v'},{t:'+',c:'p'},{t:'(object)',c:'s'},{t:'+',c:'p'},{t:'to + verb',c:'k'}],
    compare:[
      {c1:'He said to stop.',c2:'She asked me to help her.',ar:'say to · ask + مفعول + to'},
      {c1:'Please stop. → He said to stop.',c2:'Please help. → She asked me to help.',ar:'مباشر ↔ منقول'},
    ],
    examples:[
      {s:'The officer said to stop.',tr:'قال الضابط أن نتوقّف.',ar:'said to + verb',ok:true},
      {s:'She asked me to help her.',tr:'طلبت منّي أن أساعدها.',ar:'asked me to + verb',ok:true},
      {s:'She asked me help her.',wrong:'me help',right:'me to help',tr:'لا بدّ من to قبل الفعل: asked me to help.',ok:false},
    ]
  },
  {
    title:'Telling time: 24-hour & 12-hour', ar:'قراءة الوقت (العسكري والعادي)',
    rule:'الوقت العسكري (24 ساعة) يُقرأ بأربعة أرقام: 0630 = «صفر ستّة ثلاثين». والعادي (12 ساعة) بـ a.m./p.m.: 7:30 tonight.',
    parts:[
      {t:'0630 = 6:30 a.m.',d:'الوقت العسكري: Joe leaves tomorrow at 0630.'},
      {t:'7:30 p.m.',d:'الوقت العادي: The game starts tonight at 7:30.'},
      {t:'at + الوقت',d:'نستخدم at قبل الساعة: at 0630 · at 7:30.'},
    ],
    check:{q:'The game starts tonight _______ 7:30.',o:['at','on','in','to'],a:0,en:'clock time → at',ar:'قبل الساعة → at',},
    formula:[{t:'event',c:'s'},{t:'+',c:'p'},{t:'at',c:'v'},{t:'+',c:'p'},{t:'time',c:'k'}],
    compare:[
      {c1:'0630 (عسكري)',c2:'6:30 a.m. (عادي)',ar:'نفس الوقت بصيغتين'},
      {c1:'Joe leaves at 0630.',c2:'The game starts at 7:30.',ar:'at + الوقت'},
    ],
    examples:[
      {s:'Joe leaves tomorrow at 0630.',tr:'يغادر جو غداً الساعة السادسة والنصف صباحاً.',ar:'0630 = وقت عسكري',ok:true},
      {s:'The game starts tonight at 7:30.',tr:'تبدأ المباراة الليلة السابعة والنصف.',ar:'at + 7:30',ok:true},
      {s:'The game starts in 7:30.',wrong:'in 7:30',right:'at 7:30',tr:'قبل الساعة نستخدم at لا in.',ok:false},
    ]
  }
],
l4:[
  {
    title:'Using be able to', ar:'be able to (القدرة على)',
    rule:'للتعبير عن القدرة نستخدم (am/is/are) + able to + الفعل المجرّد. النفي: not able to. وفي الماضي: was/were able to.',
    parts:[
      {t:'am/is/are able to + verb',d:'مثال: Charles is able to run five miles.'},
      {t:'النفي: not able to',d:'Lisa isn\'t able to run ten miles.'},
      {t:'الماضي: was/were able to',d:'He was able to fix the car. (= استطاع)'},
    ],
    check:{q:'Charles _______ able to run five miles.',o:['is','do','has','being'],a:0,en:'be able to → is able to',ar:'القدرة → is able to'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'am/is/are',c:'v'},{t:'+',c:'p'},{t:'able to + verb',c:'k'}],
    compare:[
      {c1:'Charles is able to run five miles.',c2:"Lisa isn't able to run ten miles.",ar:'إثبات ↔ نفي'},
      {c1:'is able to = can',c2:'was able to = could',ar:'مرادف can/could'},
    ],
    examples:[
      {s:'Charles is able to run five miles.',tr:'يستطيع تشارلز الجري خمسة أميال.',ar:'is able to + run',ok:true},
      {s:"I'm not able to go out tonight.",tr:'لا أستطيع الخروج الليلة.',ar:'not able to',ok:true},
      {s:'He is able run five miles.',wrong:'able run',right:'able to run',tr:'لا بدّ من to: able to run.',ok:false},
    ]
  },
  {
    title:'It for weather, time & distance', ar:'It للطقس والوقت والمسافة',
    rule:'نستخدم It فاعلاً وهميّاً للحديث عن الطقس والوقت والمسافة: It\'s cold. · It\'s time for lunch. · It\'s 80 miles from here.',
    parts:[
      {t:'الطقس',d:'Is it cold outside? Yes, it\'s 35 degrees.'},
      {t:'الوقت',d:'What time is it? It\'s time for lunch.'},
      {t:'المسافة',d:'Is it far to Austin? No, it\'s about 80 miles from here.'},
    ],
    check:{q:'How far is it to New York? _______ 60 miles.',o:["It's","There's","He's","That"],a:0,en:'distance → It\'s',ar:'المسافة → It\'s'},
    formula:[{t:'It',c:'s'},{t:'is',c:'v'},{t:'cold / time / … miles',c:'k'},{t:'',c:'p'},{t:'',c:'p'}],
    compare:[
      {c1:"It's cold outside. (طقس)",c2:"It's time for lunch. (وقت)",ar:'It فاعل وهمي'},
      {c1:'Is it far to Austin?',c2:"It's about 80 miles from here.",ar:'المسافة'},
    ],
    examples:[
      {s:"It's very pleasant right now.",tr:'الطقس لطيف جداً الآن.',ar:'It للطقس',ok:true},
      {s:"It's about 80 miles from here.",tr:'تبعد حوالي 80 ميلاً من هنا.',ar:'It للمسافة',ok:true},
      {s:'Is cold outside?',wrong:'Is cold',right:'Is it cold',tr:'لا بدّ من It: Is it cold outside?',ok:false},
    ]
  },
  {
    title:'How far / How long', ar:'السؤال عن المسافة والمدّة (How far / How long)',
    rule:'How far للسؤال عن المسافة (بالأميال)، و How long للسؤال عن المدّة (الوقت المستغرق). الجواب غالباً بـ It takes…',
    parts:[
      {t:'How far is it…?',d:'How far is it to NY? → It\'s 60 miles.'},
      {t:'How long does it take…?',d:'How long does it take to drive there? → It takes one hour.'},
      {t:'It takes + مدّة',d:'It takes an hour to get there by car.'},
    ],
    check:{q:'_______ does it take to drive to the airport? — About an hour.',o:['How long','How far','How much','How many'],a:0,en:'duration → How long',ar:'المدّة → How long'},
    formula:[{t:'How far/long',c:'v'},{t:'+',c:'p'},{t:'is it / does it take',c:'s'},{t:'+',c:'p'},{t:'…?',c:'k'}],
    compare:[
      {c1:'How far is it? → 60 miles. (مسافة)',c2:'How long does it take? → one hour. (مدّة)',ar:'far مسافة · long مدّة'},
      {c1:'It\'s 60 miles.',c2:'It takes one hour.',ar:'الجواب'},
    ],
    examples:[
      {s:'How far is it to New York? It\'s 60 miles.',tr:'كم تبعد نيويورك؟ ستّون ميلاً.',ar:'How far = المسافة',ok:true},
      {s:'It takes an hour to get there by car.',tr:'تستغرق ساعة للوصول بالسيارة.',ar:'It takes + مدّة',ok:true},
      {s:'How far does it take to drive there?',wrong:'How far does it take',right:'How long does it take',tr:'للمدّة نستخدم How long لا How far.',ok:false},
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
],
l2:[
  {words:['Have','you','met','Lieutenant','Grant'],ans:'Have you met Lieutenant Grant?',tr:'هل التقيت بالملازم جرانت؟',ar:'التعارف'},
  {words:['Let','me','introduce','you','to','John'],ans:'Let me introduce you to John.',tr:'دعني أُقدّمك إلى جون.',ar:'introduce'},
  {words:["It's",'nice','to','meet','you'],ans:"It's nice to meet you.",tr:'سُررت بلقائك.',ar:'to + فعل'},
  {words:['She','enjoys','singing','every','day'],ans:'She enjoys singing every day.',tr:'تستمتع بالغناء كل يوم.',ar:'enjoy + ing'},
  {words:['We','are','ready','to','go','now'],ans:'We are ready to go now.',tr:'نحن مستعدّون للذهاب الآن.',ar:'ready to + فعل'},
  {words:['The','parking','lot','is','next','to','the','building'],ans:'The parking lot is next to the building.',tr:'موقف السيارات بجانب المبنى.',ar:'next to'},
  {words:['Take','the','elevator','to','the','second','floor'],ans:'Take the elevator to the second floor.',tr:'خذ المصعد إلى الطابق الثاني.',ar:'elevator · floor'},
],
l3:[
  {words:['Would','you','do','me','a','favor'],ans:'Would you do me a favor?',tr:'هل تُسدي لي معروفاً؟',ar:'طلب مهذّب would'},
  {words:['Could','you','please','close','the','window'],ans:'Could you please close the window?',tr:'هل يمكنك إغلاق النافذة من فضلك؟',ar:'طلب مهذّب could'},
  {words:['She','asked','me','to','help','her'],ans:'She asked me to help her.',tr:'طلبت منّي أن أساعدها.',ar:'الكلام المنقول ask'},
  {words:['The','spare','tire','is','in','the','trunk'],ans:'The spare tire is in the trunk.',tr:'الإطار الاحتياطي في صندوق السيارة.',ar:'spare · trunk'},
  {words:['Remove','the','flat','tire','with','the','wrench'],ans:'Remove the flat tire with the wrench.',tr:'انزع الإطار المثقوب بمفتاح الربط.',ar:'remove · wrench'},
  {words:['You','need','to','loosen','the','lug','nuts'],ans:'You need to loosen the lug nuts.',tr:'عليك أن تفكّ صواميل العجلة.',ar:'loosen · lug nuts'},
  {words:['Joe','leaves','tomorrow','at','six','thirty'],ans:'Joe leaves tomorrow at six thirty.',tr:'يغادر جو غداً السادسة والنصف.',ar:'at + الوقت'},
],
l4:[
  {words:['Charles','is','able','to','run','five','miles'],ans:'Charles is able to run five miles.',tr:'يستطيع تشارلز الجري خمسة أميال.',ar:'be able to'},
  {words:['How','far','is','it','to','New','York'],ans:'How far is it to New York?',tr:'كم تبعد نيويورك؟',ar:'How far'},
  {words:['It','takes','an','hour','to','get','there'],ans:'It takes an hour to get there.',tr:'تستغرق ساعة للوصول.',ar:'It takes + مدّة'},
  {words:['What','kind','of','work','do','you','do'],ans:'What kind of work do you do?',tr:'ما نوع العمل الذي تعمله؟',ar:'السؤال عن الوظيفة'},
  {words:['I','am','a','salesperson','I','sell','cars'],ans:'I am a salesperson. I sell cars.',tr:'أنا بائع، أبيع السيارات.',ar:'الوظيفة'},
  {words:["How's",'the','family','these','days'],ans:"How's the family these days?",tr:'كيف حال العائلة هذه الأيام؟',ar:'وظيفة اللغة'},
  {words:['My','uncle','owns','a','small','business'],ans:'My uncle owns a small business.',tr:'يملك عمّي عملاً تجارياً صغيراً.',ar:'own · business'},
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
],
l2:[
  // — Evaluation Exercise H (الرسمية · choose the best answer) —
  {q:"Lt Mathews was happy _______ a letter from home.",o:["to receive","receive","did receive","receiving"],a:0,en:"happy + to + verb",ar:'صفة + to + فعل → to receive',tr:'سُرّ الملازم ماثيوز باستلام رسالة من البيت.'},
  {q:"Was anyone in the office with Mr. Williams? No. He was _______.",o:["afraid","ready","alone","polite"],a:2,en:"nobody with him → alone",ar:'لا أحد معه → وحده (alone)',tr:'هل كان أحد في المكتب مع السيد ويليامز؟ لا، كان وحده.'},
  {q:"When will you finish _______ your homework?",o:["doing","to do","do","done"],a:0,en:"finish + verb-ing",ar:'بعد finish نضع ing → doing',tr:'متى ستنتهي من أداء واجبك؟'},
  {q:"Do you have my phone number? No. I'll _______ now.",o:["receive it","write it down","decide to do it","shake it"],a:1,en:"note the number → write it down",ar:'يدوّن الرقم → write it down',tr:'هل لديك رقم هاتفي؟ لا، سأدوّنه الآن.'},
  {q:"Col Jackson was pleased _______ them.",o:["to meet","will meet","meet","meeting"],a:0,en:"pleased + to + verb",ar:'صفة + to + فعل → to meet',tr:'سُرّ العقيد جاكسون بلقائهم.'},
  {q:"When will we leave? When _______ is ready.",o:["anyone","everyone","another","alone"],a:1,en:"all people → everyone",ar:'الجميع → everyone',tr:'متى سنغادر؟ عندما يصبح الجميع جاهزين.'},
  {q:"Do you mind _______ me to work tomorrow?",o:["drive","to drive","driving","drove"],a:2,en:"mind + verb-ing",ar:'بعد mind نضع ing → driving',tr:'هل تمانع أن تُوصّلني إلى العمل غداً؟'},
  {q:"I don't know your friend. Will you _______ us?",o:["shake","write","introduce","receive"],a:2,en:"make them meet → introduce",ar:'يُعرّف بينهما → introduce',tr:'لا أعرف صديقك، هل تُعرّفنا ببعض؟'},
  {q:"Which coat did John buy? He _______ to buy the brown one.",o:["decided","let","shopped","shook"],a:0,en:"made a choice → decided",ar:'اتّخذ قراراً → قرّر (decided)',tr:'أيّ معطف اشترى جون؟ قرّر أن يشتري البنّي.'},
  {q:"My little sister was afraid _______ alone.",o:["to sleep","sleep","sleeping","slept"],a:0,en:"afraid + to + verb",ar:'صفة + to + فعل → to sleep',tr:'كانت أختي الصغيرة خائفة أن تنام وحدها.'},
  {q:"What should I do when I meet your brother? Be sure to _______ his hand.",o:["let","shake","stick","write"],a:1,en:"greeting → shake his hand",ar:'التحية → يصافح (shake)',tr:'ماذا أفعل حين ألتقي أخاك؟ احرص أن تُصافح يده.'},
  {q:"Lt Roberts started _______ planes five months ago.",o:["fly","flew","flying","to flew"],a:2,en:"start + verb-ing",ar:'بعد start نضع ing → flying',tr:'بدأ الملازم روبرتس قيادة الطائرات قبل خمسة أشهر.'},
  {q:"Where do you _______ for food?",o:["park","shop","eat","let"],a:1,en:"buy food → shop",ar:'يشتري الطعام → يتسوّق (shop)',tr:'أين تتسوّق للطعام؟'},
  {q:"When will you be ready _______?",o:["leaving","to leave","leave","left"],a:1,en:"ready + to + verb",ar:'صفة + to + فعل → to leave',tr:'متى ستكون مستعدّاً للمغادرة؟'},
  {q:"Why can't we eat in class? Because the _______ say we can't.",o:["rules","malls","neighbors","adults"],a:0,en:"what forbids it → rules",ar:'ما يمنع ذلك → القواعد (rules)',tr:'لماذا لا نستطيع الأكل في الصف؟ لأنّ القواعد تمنع ذلك.'},
  {q:"John was sorry _______ a dollar in the vending machine.",o:["to lose","lost","loose","losing"],a:0,en:"sorry + to + verb",ar:'صفة + to + فعل → to lose',tr:'أسِف جون لأنه خسر دولاراً في آلة البيع.'},
  {q:"Mary began _______ Arabic last summer.",o:["study","studying","studied","to studied"],a:1,en:"begin + verb-ing",ar:'بعد begin نضع ing → studying',tr:'بدأت ماري دراسة العربية الصيف الماضي.'},
  {q:"The students don't know each other. Will you make the _______?",o:["rule","adult","introductions","escalator"],a:2,en:"introduce them → introductions",ar:'يعرّف بينهم → التعريفات (introductions)',tr:'الطلاب لا يعرفون بعضهم، هل تُجري التعارف؟'},
  {q:"I want to eat lunch in the school _______ today.",o:["cafeteria","escalator","supper","elevator"],a:0,en:"eat at school → cafeteria",ar:'مكان الأكل في المدرسة → كافتيريا',tr:'أريد أن أتغدّى في كافتيريا المدرسة اليوم.'},
  {q:"Bill: How do I get to the second floor? Tim: Take the _______.",o:["stairs","mall","shop","rule"],a:0,en:"go up → stairs",ar:'للصعود → الدرَج (stairs)',tr:'كيف أصل إلى الطابق الثاني؟ اصعد الدَّرَج.'},
  {q:"Her daughter is a good girl. She's always nice and _______.",o:["alone","afraid","polite","stuck"],a:2,en:"well-mannered → polite",ar:'حسنة الخُلق → مؤدّبة (polite)',tr:'ابنتها فتاة طيّبة، دائماً لطيفة ومؤدّبة.'},
  {q:"Bill: Tim, let me introduce you to John. Tim: Hi, John. _______",o:["Have you met Tim?","It's nice to meet you.","You're sitting next to me.","Take the stairs."],a:1,en:"polite reply → nice to meet you",ar:'ردّ مهذّب → سُررت بلقائك',tr:'بيل: تِم، دعني أُقدّمك إلى جون. تِم: مرحباً جون، سُررت بلقائك.'},
],
l3:[
  // — Evaluation Exercise E (الرسمية · select the best answer) —
  {q:"Tom, _______ the papers to the students, please.",o:["jack up","hand out","find out","loosen"],a:1,en:"give one to each → hand out",ar:'يوزّع باليد → hand out',tr:'يا توم، وزّع الأوراق على الطلاب من فضلك.'},
  {q:"We need to _______ the temperature. It's very hot in this room.",o:["inflate","remove","lower","raise"],a:2,en:"reduce heat → lower",ar:'يخفض الحرارة → lower',tr:'نحتاج أن نخفض درجة الحرارة، الغرفة حارّة جداً.'},
  {q:"Bill had only 5 minutes to get to class. He ate his breakfast _______.",o:["quickly","slowly","certainly","tightly"],a:0,en:"fast → quickly",ar:'بسرعة → quickly',tr:'كان أمام بيل خمس دقائق فقط للوصول للصف، فأكل فطوره بسرعة.'},
  {q:"Jane uses a big coat to _______ warm in winter.",o:["keep","spare","raise","loosen"],a:0,en:"stay warm → keep warm",ar:'يبقى دافئاً → keep warm',tr:'تستخدم جين معطفاً كبيراً لتبقى دافئة في الشتاء.'},
  {q:"Many people choose blue for a car color. It's _______.",o:["loose","enough","common","flat"],a:2,en:"used by many → common",ar:'شائع بين الناس → common',tr:'كثير من الناس يختارون الأزرق لون السيارة، إنه شائع.'},
  {q:"Mary wants to _______ the floor with carpet.",o:["cover","remove","replace","inflate"],a:0,en:"put over → cover",ar:'يغطّي → cover',tr:'تريد ماري تغطية الأرضية بسجّاد.'},
  {q:"This is _______ the car. Bob puts his spare tire there.",o:["the top of","the back of","the side of","the front of"],a:1,en:"spare tire location → the back of",ar:'مكان الإطار الاحتياطي → الجزء الخلفي',tr:'هذا هو الجزء الخلفي من السيارة، يضع بوب إطاره الاحتياطي هناك.'},
  {q:"Tom's front _______ are new.",o:["tires","keys","trunks","covers"],a:0,en:"on the wheels → tires",ar:'على العجلات → إطارات (tires)',tr:'إطارا توم الأماميّان جديدان.'},
  {q:"Bob: Can you help me fix the door? It sticks. Bill: _______",o:["Sorry, I will.","Of course I can.","Certainly. I'll pass out.","No, I will."],a:1,en:"agree to help → Of course I can",ar:'الموافقة على المساعدة → بالطبع أستطيع',tr:'بوب: هل تساعدني في إصلاح الباب؟ إنه عالق. بيل: بالطبع أستطيع.'},
  {q:"I don't have a pencil. Do you have a(n) _______ one?",o:["extra","tight","flat","loose"],a:0,en:"additional → extra",ar:'إضافي → extra',tr:'ليس معي قلم رصاص، هل لديك واحد إضافي؟'},
  {q:"Could you _______? Would you return this book to the library, please?",o:["be in a hurry","do me a favor","remove the key","hand out"],a:1,en:"polite request → do me a favor",ar:'طلب مهذّب → do me a favor',tr:'هل تُسدي لي معروفاً؟ هل تُعيد هذا الكتاب إلى المكتبة من فضلك؟'},
  {q:"I lost Bob's pen. I need to _______ it.",o:["loosen","raise","replace","inflate"],a:2,en:"get a new one → replace",ar:'يُبدله بآخر → replace',tr:'أضعتُ قلم بوب، عليّ أن أستبدله.'},
  {q:"It's cold tonight. We need more _______.",o:["covers","trunks","tires","jacks"],a:0,en:"to keep warm → covers",ar:'للدفء → أغطية (covers)',tr:'الجوّ بارد الليلة، نحتاج أغطية أكثر.'},
  {q:"I can't get in my car. I forgot my _______.",o:["lug","key","nut","air"],a:1,en:"opens the car → key",ar:'يفتح السيارة → مفتاح (key)',tr:'لا أستطيع دخول سيارتي، نسيت مفتاحي.'},
  {q:"I need to buy more gas. I don't have _______ to get to work.",o:["jacks","flats","enough","covers"],a:2,en:"not sufficient → enough",ar:'ليس كافياً → enough',tr:'أحتاج شراء المزيد من الوقود، ليس لديّ ما يكفي للوصول إلى العمل.'},
  {q:"Would you _______ lending me your pen?",o:["mind","hand out","pass out","loosen"],a:0,en:"would you mind + ing",ar:'هل تمانع → mind',tr:'هل تمانع أن تُعيرني قلمك؟'},
  // — الطلبات المهذّبة والكلام المنقول والوقت (القواعد) —
  {q:"_______ you please close the window? — Sure, I'd be happy to.",o:["Could","Do","Are","Was"],a:0,en:"polite request → Could you",ar:'طلب مهذّب → Could you',tr:'هل يمكنك إغلاق النافذة من فضلك؟ — بكل سرور.'},
  {q:"What did she ask you? She asked me _______ help her.",o:["to","for","that","will"],a:0,en:"ask + object + to + verb",ar:'ask + مفعول + to + فعل',tr:'ماذا طلبت منك؟ طلبت منّي أن أساعدها.'},
  {q:"The game starts tonight _______ 7:30.",o:["at","on","in","to"],a:0,en:"clock time → at",ar:'قبل الساعة → at',tr:'تبدأ المباراة الليلة الساعة 7:30.'},
],
l4:[
  // — Evaluation Exercise E (الرسمية · select the correct answer) —
  {q:"How long does it _______ to drive to the airport?",o:["take","type","time","own"],a:0,en:"duration → take",ar:'المدّة → يستغرق (take)',tr:'كم تستغرق القيادة إلى المطار؟'},
  {q:"Joe owns a grocery store. The store is _______.",o:["new","big","his","far"],a:2,en:"he owns it → his",ar:'يملكه → مِلكه (his)',tr:'يملك جو بقالة. المتجر مِلكه.'},
  {q:"It's _______ a half mile to the bank from here.",o:["for","from","about","far"],a:2,en:"approximately → about",ar:'حوالي → about',tr:'يبعد البنك حوالي نصف ميل من هنا.'},
  {q:"Pam's a secretary. She _______.",o:["takes care of sick people","works in an office","likes to teach","sells cars"],a:1,en:"secretary → works in an office",ar:'السكرتيرة → تعمل في مكتب',tr:'بام سكرتيرة، تعمل في مكتب.'},
  {q:"Mary doesn't know the news. She doesn't have the _______.",o:["time","information","money","occupation"],a:1,en:"doesn't know → information",ar:'لا تعرف → المعلومات (information)',tr:'ماري لا تعرف الخبر، ليست لديها المعلومة.'},
  {q:"There are many _______ to read at the library.",o:["folks","articles","cashiers","drivers"],a:1,en:"to read → articles",ar:'للقراءة → مقالات (articles)',tr:'هناك مقالات كثيرة للقراءة في المكتبة.'},
  {q:"_______ is your family?",o:["About","Far","How","When"],a:2,en:"greeting → How is your family",ar:'كيف حال عائلتك → How',tr:'كيف حال عائلتك؟'},
  {q:"Jack collects stamps from around the world. He _______.",o:["is writing a letter","speaks many languages","keeps them in a book","drives a taxi"],a:2,en:"collects → keeps them in a book",ar:'يجمع الطوابع → يحفظها في كتاب',tr:'يجمع جاك الطوابع من حول العالم، يحفظها في كتاب.'},
  {q:"Can you go out tonight? No, _______.",o:["I'm not able to","I can't type","I'm not getting married","I own a store"],a:0,en:"cannot → I'm not able to",ar:'لا أستطيع → I\'m not able to',tr:'هل يمكنك الخروج الليلة؟ لا، لا أستطيع.'},
  {q:"Tim's the boss. He _______.",o:["manages the office","studies English","exercises every day","sells cars"],a:0,en:"boss → manages the office",ar:'المدير → يُدير المكتب',tr:'تِم هو المدير، يُدير المكتب.'},
  {q:"Greg has an interesting stamp _______.",o:["marriage","occupation","collection","article"],a:2,en:"stamps grouped → collection",ar:'مجموعة طوابع → collection',tr:'لدى جريج مجموعة طوابع مثيرة.'},
  {q:"Dave's a dentist. He _______.",o:["works on teeth","is able to run 10 miles","types letters","sells cars"],a:0,en:"dentist → works on teeth",ar:'طبيب الأسنان → يعمل على الأسنان',tr:'ديف طبيب أسنان، يعمل على الأسنان.'},
  {q:"Al's a taxi driver. He _______.",o:["visits his mother every weekend","takes people from one place to another","shops at the mall on Fridays","works on teeth"],a:1,en:"taxi driver → takes people around",ar:'سائق أجرة → ينقل الناس',tr:'آل سائق أجرة، ينقل الناس من مكان لآخر.'},
  {q:"John has a cup of coffee and reads the _______ every morning.",o:["work","nephew","newspaper","cashier"],a:2,en:"read → newspaper",ar:'يقرأ → الصحيفة (newspaper)',tr:'يحتسي جون قهوة ويقرأ الصحيفة كل صباح.'},
  {q:"Tony's a salesman. He _______.",o:["rides a bike","sells things","writes books","works on teeth"],a:1,en:"salesman → sells things",ar:'بائع → يبيع الأشياء',tr:'توني بائع، يبيع الأشياء.'},
  {q:"Bob: What kind of work do you do? Bill: I _______.",o:["like apples","am happy today","repair cars","read newspapers"],a:2,en:"occupation answer → repair cars",ar:'إجابة عن المهنة → أُصلح السيارات',tr:'بوب: ما نوع عملك؟ بيل: أُصلح السيارات.'},
  {q:"Tom: How's the weather? Tim: It's very _______ today.",o:["about","single","pleasant","far"],a:2,en:"nice weather → pleasant",ar:'طقس لطيف → pleasant',tr:'توم: كيف الطقس؟ تِم: لطيف جداً اليوم.'},
  {q:"Jim is _______ his old car.",o:["working at","working on","working about","working of"],a:1,en:"repair → working on",ar:'يعمل على (يُصلح) → working on',tr:'جيم يعمل على سيارته القديمة (يُصلحها).'},
  {q:"The family always travels _______ the city to the lake in the summer.",o:["it","far","from","about"],a:2,en:"from A to B → from",ar:'من … إلى → from',tr:'تسافر العائلة دائماً من المدينة إلى البحيرة في الصيف.'},
  {q:"Mike doesn't have an occupation. He doesn't have a _______.",o:["job","dog","hat","car"],a:0,en:"occupation = job",ar:'المهنة = وظيفة (job)',tr:'مايك ليست لديه مهنة، ليست لديه وظيفة.'},
  {q:"Tina's a cashier. She _______.",o:["has lots of clothes","takes money and gives change","likes to dance and sing","repairs cars"],a:1,en:"cashier → takes money, gives change",ar:'أمينة الصندوق → تأخذ المال وتعطي الباقي',tr:'تينا أمينة صندوق، تأخذ المال وتعطي الباقي.'},
  {q:"Sarah and George bought a camera shop. They have a _______.",o:["collection","relative","business","marriage"],a:2,en:"own a shop → business",ar:'يملكان متجراً → عمل تجاري (business)',tr:'اشترى سارة وجورج محلّ كاميرات، لديهما عمل تجاري.'},
]
};

// ═══════════════════════════════════════
// REVIEW (مراجعة) — Lesson 5 · تجمع الدروس 1–4
// المصدر: Exercise L (الجملة الصحيحة) + مراجعة القواعد
// ═══════════════════════════════════════
const REVIEW=[
  // — القواعد الصحيحة (Exercise L) —
  {q:"I can't remember how _______ speak French.",o:["to","me to","for","that"],a:0,en:"how to + verb",ar:'how to + فعل',tr:'لا أتذكّر كيف أتحدّث الفرنسية.'},
  {q:"Janet began _______ piano when she was 12.",o:["playing","play","to play played","plays"],a:0,en:"begin + verb-ing",ar:'بعد begin نضع ing → playing',tr:'بدأت جانيت العزف على البيانو حين كانت في الثانية عشرة.'},
  {q:"Sally, could you tell _______ how to say this word?",o:["me","to me","for me","my"],a:0,en:"tell + object",ar:'tell + مفعول → me',tr:'سالي، هل تخبرينني كيف أنطق هذه الكلمة؟'},
  {q:"Billy enjoys _______ to movies.",o:["going","go","to go","goes"],a:0,en:"enjoy + verb-ing",ar:'بعد enjoy نضع ing → going',tr:'يستمتع بيلي بالذهاب إلى السينما.'},
  {q:"Candy bars are supposed _______ good.",o:["to taste","taste","tasting","tastes"],a:0,en:"be supposed to + verb",ar:'supposed to + فعل → to taste',tr:'يُفترض أن يكون مذاق ألواح الحلوى لذيذاً.'},
  {q:"Does Brian like _______?",o:["singing","sing","to sings","sang"],a:0,en:"like + verb-ing",ar:'بعد like نضع ing → singing',tr:'هل يحبّ بريان الغناء؟'},
  {q:"Does anyone here know how _______ call long distance?",o:["to","—","for","me to"],a:0,en:"how to + verb",ar:'how to + فعل → to call',tr:'هل يعرف أحد هنا كيف يُجري مكالمة بعيدة المسافة؟'},
  {q:"Businesses are supposed to _______ money.",o:["make","making","makes","made"],a:0,en:"supposed to + base verb",ar:'supposed to + فعل مجرّد → make',tr:'يُفترض أن تحقّق الأعمال التجارية أرباحاً.'},
  {q:"Where did _______ learn how to make tomato soup?",o:["you","learn you","you to","your"],a:0,en:"question order → did you learn",ar:'ترتيب السؤال → did you learn',tr:'أين تعلّمت كيف تُعدّ حساء الطماطم؟'},
  {q:"When will the train start _______?",o:["moving","move","to moving","moves"],a:0,en:"start + verb-ing",ar:'بعد start نضع ing → moving',tr:'متى سيبدأ القطار في التحرّك؟'},
  // — مراجعة المفردات عبر الدروس 1–4 —
  {q:"First, insert money into the slot. Then, make your _______.",o:["selection","dryer","trunk","cousin"],a:0,en:"vending machine → selection",ar:'آلة البيع → اختيار (selection)',tr:'أولاً أدخل المال في الفتحة، ثم اختر ما تريد.'},
  {q:"You're _______ to wear your seat belt in the car.",o:["supposed","able","famous","married"],a:0,en:"required → supposed to",ar:'من المفترض → supposed to',tr:'يُفترض أن تلبس حزام الأمان في السيارة.'},
  {q:"Take the _______ to go up to the second floor.",o:["elevator","cashier","trunk","article"],a:0,en:"go up → elevator",ar:'للصعود → المصعد (elevator)',tr:'خذ المصعد لتصعد إلى الطابق الثاني.'},
  {q:"Bill: Tim, let me introduce you to John. Tim: _______",o:["It's nice to meet you.","Take the stairs.","It's out of order.","How far is it?"],a:0,en:"introduction reply → nice to meet you",ar:'ردّ التعارف → سُررت بلقائك',tr:'بيل: تِم، دعني أُقدّمك إلى جون. تِم: سُررت بلقائك.'},
  {q:"The spare _______ is in the trunk with the jack and wrench.",o:["tire","boss","niece","magazine"],a:0,en:"spare → tire",ar:'الاحتياطي → إطار (tire)',tr:'الإطار الاحتياطي في الصندوق مع الرافعة ومفتاح الربط.'},
  {q:"Could you _______? Would you close the window, please?",o:["do me a favor","be able to","get married","own a shop"],a:0,en:"polite request → do me a favor",ar:'طلب مهذّب → do me a favor',tr:'هل تُسدي لي معروفاً؟ هل تُغلق النافذة من فضلك؟'},
  {q:"Dave's a dentist. He works on _______.",o:["teeth","cars","cars and trucks","newspapers"],a:0,en:"dentist → teeth",ar:'طبيب أسنان → الأسنان (teeth)',tr:'ديف طبيب أسنان، يعمل على الأسنان.'},
  {q:"How _______ is it to New York? It's 60 miles.",o:["far","long","many","old"],a:0,en:"distance → How far",ar:'المسافة → How far',tr:'كم تبعد نيويورك؟ ستّون ميلاً.'},
];
EE.review=REVIEW;

// ═══════════════════════════════════════
// FINAL EXAM (الاختبار النهائي) — يجمع أسئلة الدروس المتاحة
// ═══════════════════════════════════════
const FINAL=dedupe_by_q([
  ...EE.l1,
  ...EE.l2,
  ...EE.l3,
  ...EE.l4,
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
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 2 — التعارف والمتاجر',w:[
    {e:'introduce',a:'يُقدّم',em:'🤝'},{e:'neighbor',a:'جار',em:'🏘️'},{e:'cafeteria',a:'كافتيريا',em:'🍽️'},
    {e:'elevator',a:'مصعد',em:'🛗'},{e:'escalator',a:'سلّم متحرّك',em:'📶'},{e:'polite',a:'مؤدّب',em:'🙇'},
    {e:'supermarket',a:'سوبر ماركت',em:'🛒'},{e:'receive',a:'يستلم',em:'📩'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 3 — تبديل الإطار',w:[
    {e:'tire',a:'إطار',em:'🛞'},{e:'spare',a:'احتياطي',em:'🆘'},{e:'wrench',a:'مفتاح ربط',em:'🔧'},
    {e:'trunk',a:'صندوق السيارة',em:'🧳'},{e:'inflate',a:'ينفخ',em:'🎈'},{e:'replace',a:'يستبدل',em:'♻️'},
    {e:'common',a:'شائع',em:'🔁'},{e:'certainly',a:'بالتأكيد',em:'✔️'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 4 — العائلة والوظائف',w:[
    {e:'uncle',a:'عمّ/خال',em:'👨'},{e:'cousin',a:'ابن العمّ',em:'🧑'},{e:'occupation',a:'مهنة',em:'💼'},
    {e:'secretary',a:'سكرتير',em:'🗂️'},{e:'business',a:'عمل تجاري',em:'🏢'},{e:'newspaper',a:'صحيفة',em:'🗞️'},
    {e:'famous',a:'مشهور',em:'🌟'},{e:'pleasant',a:'لطيف',em:'😊'},
  ]},
];

// ═══════════════════════════════════════
// LISTENING — لا يوجد فيديوهات لهذا الكتاب بعد
// ═══════════════════════════════════════
const YT_VIDEOS=[
  {id:'Ac8fleOr2qc',t:'Quiz A',s:'استماع وقراءة مع الحل'},
  {id:'BH8wDiAHTNo',t:'Quiz B',s:'استماع وقراءة مع الحل'},
  {id:'yBBEsR2fd24',t:'Quiz C',s:'استماع وقراءة مع الحل'},
];

// ═══════════════════════════════════════
// ROUTING MANIFEST
// ═══════════════════════════════════════
const SCREENS=['home','lscreen','rscreen','ytscreen','fscreen','vtscreen','spscreen','mkscreen'];
const SCREEN_NAMES={home:'الرئيسية',lscreen:'درس',rscreen:'المراجعة',ytscreen:'الاستماع',fscreen:'الاختبار النهائي',vtscreen:'اختبار المفردات',spscreen:'الإملاء',mkscreen:'مراجعة الأخطاء'};
