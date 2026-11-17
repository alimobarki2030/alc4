// ═══════════════════════════════════════
// DATA — BOOK 13 (المستوى الثالث)
// Lessons 1–4 + Lesson 5 (Review). Source: ALC Book 13 student text,
// homework (HW) and evaluation exercises (EE).
// ═══════════════════════════════════════
const BOOK_ID='book13';

const LESSON_META={
  l1:{ico:'🏆',title:"Lesson 1 — We're sure we'll win.",sub:'الرياضة والمباريات · I think so / I hope not · sure that · التفضيل: the fastest'},
  l2:{ico:'🧱',title:'Lesson 2 — Materials people use',sub:'المواد والمجوهرات · could للاستئذان · مراجعة الأفعال الناقصة · الاسم المركّب: bus ticket'},
  l3:{ico:'👖',title:"Lesson 3 — What's your size?",sub:'المقاسات والتخفيضات · driver / opener · الكلام المنقول · الأفعال المنفصلة: try it on'},
  l4:{ico:'🏀',title:"Lesson 4 — Let's play ball!",sub:'القياسات والوزن والحمية · If للحقائق والأوامر · How long? · a few / a little'}
};
const LESSON_KEYS=Object.keys(LESSON_META);

// ═══════════════════════════════════════
// VOCABULARY (من صفحة What's new in Lesson ?)
// ═══════════════════════════════════════
const VOCAB={
l1:[
  // — الرياضة والمباريات —
  {e:'coach',a:'مدرّب',em:'🧢'},
  {e:'player',a:'لاعب',em:'⛹️'},
  {e:'field',a:'ملعب / حقل',em:'🏟️'},
  {e:'stadium',a:'استاد',em:'🏟️'},
  {e:'goal',a:'هدف',em:'🥅'},
  {e:'point',a:'نقطة',em:'🔢'},
  {e:'score',a:'نتيجة / يسجّل',em:'📊'},
  {e:'match',a:'مباراة / يطابق',em:'🎾'},
  {e:'race',a:'سباق / يتسابق',em:'🏁'},
  {e:'practice',a:'تمرين / يتمرّن',em:'🔁'},
  {e:'reporter',a:'مراسل صحفي',em:'🎤'},
  {e:'win',a:'يفوز',past:'won',pa:'فاز',em:'🥇'},
  {e:'lose',a:'يخسر',past:'lost',pa:'خسر',em:'😞'},
  {e:'beat',a:'يهزم / يغلب',past:'beat',pa:'هزم',em:'💪'},
  {e:'tie',a:'يتعادل / يربط',em:'🤝'},
  {e:'kick',a:'يركل',em:'🦵'},
  {e:'throw',a:'يرمي',past:'threw',pa:'رمى',em:'🤾'},
  {e:'jump',a:'يقفز',em:'🦘'},
  {e:'join',a:'ينضمّ',em:'➕'},
  // — الحبل والخيط —
  {e:'rope',a:'حبل',em:'🪢'},
  {e:'string',a:'خيط',em:'🧵'},
  {e:'shoelaces',a:'أربطة الحذاء',em:'👟'},
  {e:'knot',a:'عقدة',em:'🪢'},
  {e:'meaning',a:'معنى',em:'💬'},
  {e:'meter',a:'متر',em:'📏'},
  // — اليقين والشك —
  {e:'believe',a:'يعتقد / يصدّق',em:'💭'},
  {e:'suppose',a:'يفترض / يظنّ',em:'🤔'},
  {e:'imagine',a:'يتخيّل',em:'💭'},
  {e:'doubt',a:'يشكّ / شكّ',em:'🤨'},
  {e:'certain',a:'متأكّد',em:'✅'},
  {e:'positive',a:'واثق تماماً',em:'💯'},
  {e:'uncertain',a:'غير متأكّد',em:'❓'},
  {e:'surely',a:'بالتأكيد',em:'👍'},
  {e:'quite',a:'تماماً / إلى حدٍّ ما',em:'📐'},
  {e:'toward(s)',a:'نحو / باتّجاه',em:'➡️'},
  {e:'farthest',a:'الأبعد',em:'🗺️'},
],
l2:[
  // — المواد —
  {e:'material',a:'مادّة / خامة',em:'🧱'},
  {e:'metal',a:'معدن',em:'🔩'},
  {e:'iron',a:'حديد',em:'⚙️'},
  {e:'copper',a:'نحاس',em:'🟤'},
  {e:'gold',a:'ذهب',em:'🥇'},
  {e:'silver',a:'فضّة',em:'🥈'},
  {e:'glass',a:'زجاج',em:'🪟'},
  {e:'plastic',a:'بلاستيك',em:'🧴'},
  {e:'rubber',a:'مطّاط',em:'🛞'},
  {e:'leather',a:'جلد',em:'👞'},
  {e:'cotton',a:'قطن',em:'☁️'},
  {e:'wool',a:'صوف',em:'🐑'},
  {e:'silk',a:'حرير',em:'🎀'},
  {e:'nylon',a:'نايلون',em:'🧦'},
  {e:'polyester',a:'بوليستر',em:'👕'},
  {e:'rock',a:'صخرة',em:'🪨'},
  {e:'stone',a:'حجر',em:'🪨'},
  {e:'natural',a:'طبيعي',em:'🌿'},
  {e:'man-made',a:'صناعي / من صنع الإنسان',em:'🏭'},
  // — المجوهرات —
  {e:'jewelry',a:'مجوهرات',em:'💍'},
  {e:'ring',a:'خاتم',em:'💍'},
  {e:'necklace',a:'عقد / قلادة',em:'📿'},
  {e:'bracelet',a:'سوار',em:'⌚'},
  {e:'earrings',a:'أقراط',em:'💎'},
  {e:'chain',a:'سلسلة',em:'⛓️'},
  {e:'diamond',a:'ألماس',em:'💎'},
  {e:'ashtray',a:'منفضة سجائر',em:'🚬'},
  // — أفعال —
  {e:'allow',a:'يسمح',em:'✅'},
  {e:'appreciate',a:'يقدّر',em:'🙏'},
  {e:'owe',a:'يدين بـ (عليه دين)',em:'💵'},
  {e:'pay back',a:'يسدّد / يردّ المال',past:'paid back',pa:'سدّد',em:'💸'},
  {e:'be made of',a:'مصنوع من',em:'🧪'},
  {e:'do over',a:'يعيد عمل الشيء',past:'did over',pa:'أعاده',em:'🔄'},
  {e:'put out',a:'يطفئ (النار)',past:'put out',pa:'أطفأ',em:'🧯'},
  {e:'throw away',a:'يرمي (في القمامة)',past:'threw away',pa:'رمى',em:'🗑️'},
  {e:'throw out',a:'يتخلّص من',past:'threw out',pa:'تخلّص من',em:'🗑️'},
  {e:'wake up',a:'يوقظ / يستيقظ',past:'woke up',pa:'أيقظ / استيقظ',em:'⏰'},
  {e:'fond of',a:'مولع بـ / يحبّ',em:'❤️'},
  {e:'past',a:'متجاوزاً / مروراً بـ',em:'➡️'},
  {e:'away',a:'بعيداً',em:'🕊️'},
],
l3:[
  // — المقاسات —
  {e:'size',a:'مقاس / حجم',em:'📐'},
  {e:'fit',a:'يناسب (المقاس)',past:'fit',pa:'ناسب',em:'👌'},
  {e:'measure',a:'يقيس',em:'📏'},
  {e:'measurement',a:'قياس',em:'📏'},
  {e:'waist',a:'خصر',em:'👖'},
  {e:'hip',a:'ورك',em:'🩳'},
  {e:'length',a:'طول',em:'↕️'},
  {e:'height',a:'ارتفاع',em:'📏'},
  {e:'inch',a:'بوصة',em:'📏'},
  {e:'centimeter',a:'سنتيمتر',em:'📏'},
  {e:'medium',a:'متوسّط (المقاس)',em:'Ⓜ️'},
  {e:'jeans',a:'بنطال جينز',em:'👖'},
  {e:'pair',a:'زوج',em:'🧦'},
  {e:'fabric',a:'قماش / نسيج',em:'🧶'},
  {e:'sew',a:'يخيط',past:'sewed',pa:'خاط',em:'🪡'},
  {e:'try on',a:'يجرّب (اللبس)',past:'tried on',pa:'جرّب',em:'👗'},
  {e:'dressing room',a:'غرفة القياس',em:'🚪'},
  // — التسوّق والتخفيضات —
  {e:'sale',a:'تنزيلات / أوكازيون',em:'🏷️'},
  {e:'on sale',a:'عليه تخفيض',em:'🏷️'},
  {e:'for sale',a:'للبيع',em:'🪧'},
  {e:'discount',a:'خصم',em:'💲'},
  {e:'percent',a:'بالمئة',em:'%'},
  {e:'percentage',a:'نسبة مئوية',em:'📊'},
  {e:'bargain',a:'يساوم (على السعر)',em:'🗣️'},
  {e:'deal',a:'صفقة',em:'🤝'},
  {e:'receipt',a:'إيصال / فاتورة',em:'🧾'},
  {e:'tax',a:'ضريبة',em:'💰'},
  {e:'amount',a:'مبلغ / كمّية',em:'💵'},
  {e:'amount to',a:'يبلغ مجموعه',em:'🧮'},
  {e:'free',a:'مجاني',em:'🆓'},
  {e:'special',a:'عرض خاص / خاص',em:'⭐'},
  {e:'irregular',a:'معيب / غير منتظم',em:'⚠️'},
  {e:'increase',a:'يزيد',em:'📈'},
  {e:'decrease',a:'ينقص / يقلّ',em:'📉'},
  {e:'reduce',a:'يخفّض (السعر)',em:'⬇️'},
  {e:'less',a:'أقلّ',em:'➖'},
  {e:'distance',a:'مسافة',em:'🛣️'},
],
l4:[
  // — القياسات —
  {e:'width',a:'عرض',em:'↔️'},
  {e:'depth',a:'عمق',em:'🌊'},
  {e:'weight',a:'وزن',em:'⚖️'},
  {e:'weigh',a:'يزن',em:'⚖️'},
  {e:'scale',a:'ميزان',em:'⚖️'},
  {e:'strength',a:'قوّة',em:'💪'},
  {e:'age',a:'عمر',em:'🎂'},
  {e:'foot',a:'قدم (وحدة طول)',em:'📏'},
  {e:'yard',a:'ياردة',em:'📏'},
  {e:'mile',a:'ميل',em:'🛣️'},
  {e:'kilometer',a:'كيلومتر',em:'🛣️'},
  {e:'millimeter',a:'مليمتر',em:'📏'},
  {e:'thick',a:'سميك',em:'📚'},
  {e:'thin',a:'رفيع / نحيف',em:'📄'},
  {e:'fat',a:'سمين',em:'🍔'},
  // — الحمية والصحة —
  {e:'diet',a:'حمية / نظام غذائي',em:'🥗'},
  {e:'go on a diet',a:'يبدأ حمية',em:'🥗'},
  {e:'gain',a:'يكسب / يزيد (وزنه)',em:'📈'},
  // — الضمائر المبهمة —
  {e:'a few',a:'قليل (للمعدود)',em:'🔢'},
  {e:'a little',a:'قليل (لغير المعدود)',em:'🤏'},
  {e:'a lot',a:'الكثير (للنوعين)',em:'📦'},
  {e:'many',a:'كثير (للمعدود)',em:'🔢'},
  {e:'much',a:'كثير (لغير المعدود)',em:'🫗'},
  {e:'none',a:'لا شيء / لا أحد',em:'🚫'},
  {e:'by',a:'في (للأبعاد: 10 by 20)',em:'✖️'},
]
};

// ═══════════════════════════════════════
// GRAMMAR
// ═══════════════════════════════════════
const GRAMMAR={
l1:[
  {
    title:'so / not instead of a THAT-clause', ar:'so و not بدل تكرار الجملة (I think so · I hope not)',
    rule:'بدل ما نكرّر الجملة كاملة بعد think · believe · hope · guess · suppose · imagine نقول so للإثبات. وللنفي نقول I hope not · I guess not · I suppose not، أو I don\'t think so · I don\'t believe so.',
    parts:[
      {t:'إثبات: فعل + so',d:"Did Sam come to work? — I believe so."},
      {t:'نفي: hope / guess / suppose + not',d:'Will it rain? — I hope not.'},
      {t:'نفي: don\'t think / believe + so',d:"Is he coming? — I don't think so."},
    ],
    check:{q:"Do you think the quiz will be hard? — I hope _______.",o:['not','so','no','don\'t'],a:0,en:'hope + not',ar:'النفي مع hope → I hope not'},
    formula:[{t:'I',c:'s'},{t:'+',c:'p'},{t:'think / believe / hope / guess / suppose',c:'v'},{t:'+',c:'p'},{t:'so / not',c:'k'}],
    compare:[
      {c1:'I believe (that) he came to work.',c2:'I believe so.',ar:'so بدل الجملة'},
      {c1:'I hope not. / I guess not.',c2:"I don't think so. / I don't believe so.",ar:'طريقتا النفي'},
    ],
    examples:[
      {s:"Do you think it's going to rain? — I think so. It's very cloudy.",tr:'هل تظنّ أنها ستمطر؟ — أظنّ ذلك، الجوّ غائم جداً.',ar:'think so',ok:true},
      {s:"Will your son go to California this summer? — I don't believe so.",tr:'هل سيذهب ابنك إلى كاليفورنيا هذا الصيف؟ — لا أعتقد.',ar:"don't believe so",ok:true},
      {s:'Do you need to go to the dentist? — I hope no.',wrong:'I hope no',right:'I hope not',tr:'النفي مع hope يكون not وليس no.',ok:false},
    ]
  },
  {
    title:'sure / certain / positive + that', ar:'التعبير عن اليقين: I\'m sure (that) …',
    rule:'نعبّر عن اليقين بـ sure · certain · positive ثم جملة (that اختيارية، وغالباً تُحذف في الكلام). وللشك: I doubt (that) … أو I\'m not sure / uncertain.',
    parts:[
      {t:'I am sure / certain / positive (that) …',d:"Jane is sure (that) she'll win the tennis match."},
      {t:'النفي',d:"I'm not certain (that) I put the cookies on the table."},
      {t:'doubt = أشكّ',d:'I doubt (that) I can go with you next weekend.'},
    ],
    check:{q:"I _______ that I can go with you next weekend. I'm too busy.",o:['doubt','believe','suppose','imagine'],a:0,en:'not likely → doubt',ar:'أشكّ (غير متوقّع) → doubt'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'be + sure / certain / positive',c:'v'},{t:'+',c:'p'},{t:'(that) + جملة',c:'k'}],
    compare:[
      {c1:"I'm sure we'll win. (متأكّد)",c2:"I doubt we'll win. (أشكّ)",ar:'يقين ↔ شك'},
      {c1:"I'm positive the light was green.",c2:"I'm uncertain which road to take.",ar:'positive ↔ uncertain'},
    ],
    examples:[
      {s:"We're sure we'll win.",tr:'نحن متأكّدون أننا سنفوز.',ar:'sure + جملة',ok:true},
      {s:'Are you positive the traffic light was green?',tr:'هل أنت متأكّد تماماً أنّ الإشارة كانت خضراء؟',ar:'positive',ok:true},
      {s:"I'm sure of that I put the cookies on the table.",wrong:'sure of that',right:'sure (that)',tr:'بعد sure نضع الجملة مباشرة (أو that).',ok:false},
    ]
  },
  {
    title:'Superlative adverbs (the fastest)', ar:'التفضيل مع الأحوال: -er than / the -est',
    rule:'الأحوال القصيرة (fast · hard · early · late · high · low · near · slow · soon · straight · far) نقارن بها مثل الصفات: faster than للمقارنة بين اثنين، و the fastest (of all) للأعلى بين الكل. far → farther / the farthest.',
    parts:[
      {t:'المقارنة: -er + than',d:'Rick runs faster than Jim.'},
      {t:'التفضيل: the + -est (of all)',d:'Matt runs the fastest (of all).'},
      {t:'early → earlier · far → farther / farthest',d:'Chris arrived the earliest. · Lt Lee traveled the farthest.'},
    ],
    check:{q:"Sara works until 4:30, Henry until 5:00, Andy until 5:30. Andy works _______.",o:['the latest','later than','the later','latest than'],a:0,en:'the most late → the latest',ar:'الأكثر بين الكل → the latest'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'verb',c:'v'},{t:'+',c:'p'},{t:'the + adverb-est (of all)',c:'k'}],
    compare:[
      {c1:'Bart arrived earlier than Lisa.',c2:'Chris arrived the earliest.',ar:'مقارنة ↔ تفضيل'},
      {c1:'far → farther than',c2:'far → the farthest',ar:'far شاذّة'},
    ],
    examples:[
      {s:'Paul studies harder than Ann. Pete studies the hardest.',tr:'بول يذاكر أكثر من آن، وبيت يذاكر أكثر من الجميع.',ar:'harder → the hardest',ok:true},
      {s:'Sid climbed the highest of all.',tr:'تسلّق سِد أعلى من الجميع.',ar:'the highest of all',ok:true},
      {s:'Tina climbed the most high.',wrong:'the most high',right:'the highest',tr:'الأحوال القصيرة تأخذ -est: the highest.',ok:false},
    ]
  }
],
l2:[
  {
    title:'could to ask permission', ar:'could للاستئذان بأدب (Could I …?)',
    rule:'نستأذن بـ could مثل may و can (could أكثر أدباً). الجواب لا يكون بـ could بل: Yes, you can · Certainly · Of course · Sure. وللرفض: No, you can\'t · I\'m sorry, but … ونضيف السبب عادةً.',
    parts:[
      {t:'Could / May / Can + I/we + فعل …?',d:'Could I please borrow your dictionary tonight?'},
      {t:'الموافقة',d:'Yes, you can. · Certainly. · Of course. · Sure.'},
      {t:'الرفض + السبب',d:"I'm sorry. You can't. We have too much work to do."},
    ],
    check:{q:"Kent: _______ I smoke in here, please? Jane: Yes, you may.",o:['Could','Would','Will','Did'],a:0,en:'ask permission → Could',ar:'الاستئذان → Could'},
    formula:[{t:'Could',c:'v'},{t:'+',c:'p'},{t:'I / we',c:'s'},{t:'+',c:'p'},{t:'(please) + فعل …?',c:'k'}],
    compare:[
      {c1:'Could I leave early today?',c2:'Yes, you can. (وليس: Yes, you could.)',ar:'السؤال ↔ الجواب'},
      {c1:'Could we visit you tonight?',c2:"I'm sorry, but I won't be home.",ar:'رفض مع سبب'},
    ],
    examples:[
      {s:'Could I use your pen, please?',tr:'هل يمكنني استخدام قلمك من فضلك؟',ar:'could للاستئذان',ok:true},
      {s:"Could we leave early? — I'm sorry. You can't.",tr:'هل يمكننا المغادرة مبكّراً؟ — آسف، لا يمكنكم.',ar:'رفض',ok:true},
      {s:'Could I borrow your book? — Yes, you could.',wrong:'Yes, you could',right:'Yes, you can',tr:'في الجواب نستخدم can.',ok:false},
    ]
  },
  {
    title:'Modal review', ar:'مراجعة الأفعال الناقصة: الاحتمال · القدرة · الإذن',
    rule:'الاحتمال 50%: may · might · could. القدرة الآن: can · am/is/are able to. القدرة في الماضي: could · was/were able to. الإذن: may · can · could.',
    parts:[
      {t:'احتمال (50%)',d:'It could rain tonight. · They might not come.'},
      {t:'قدرة حاضرة / ماضية',d:"She can swim two miles. · Sam couldn't come yesterday."},
      {t:'be able to',d:'He is able to speak French. · He was able to run six miles.'},
    ],
    check:{q:"The students _______ take the test yesterday because the computers didn't work.",o:["couldn't","might not","are able to","may"],a:0,en:'past ability (neg) → couldn\'t',ar:'عدم القدرة في الماضي → couldn\'t'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'may/might/could · can/could · be able to',c:'v'},{t:'+',c:'p'},{t:'فعل مجرّد',c:'k'}],
    compare:[
      {c1:'I can lift it. (الآن)',c2:'I could lift it when I was young. (ماضي)',ar:'can ↔ could'},
      {c1:'He might be at work. (احتمال)',c2:'May I speak with you? (إذن)',ar:'احتمال ↔ إذن'},
    ],
    examples:[
      {s:'When my grandfather was a boy, he could play baseball.',tr:'عندما كان جدّي صغيراً، كان يستطيع لعب البيسبول.',ar:'could = قدرة ماضية',ok:true},
      {s:"John's not home yet. He might still be at work.",tr:'جون لم يصل البيت بعد، ربّما ما زال في العمل.',ar:'might = احتمال',ok:true},
      {s:'My son is able run one mile in two minutes.',wrong:'is able run',right:'is able to run',tr:'be able يأتي بعدها to + فعل.',ok:false},
    ]
  },
  {
    title:'Nouns as modifiers (bus ticket)', ar:'الاسم كصفة: الاسم المركّب (a bus ticket)',
    rule:'نضع اسماً قبل اسم ليصفه: a baseball glove · a train station. الاسم الأول يكون دائماً مفرداً حتى لو المعنى جمع: bus tickets (وليس buses tickets). ونستخدم المادّة كصفة: a gold ring · paper plates.',
    parts:[
      {t:'اسم + اسم',d:'a baseball cap · a credit card · a gas station'},
      {t:'الأول مفرد دائماً',d:'tickets for the bus → bus tickets'},
      {t:'المادّة + الاسم',d:'plates made of paper → paper plates · a leather belt'},
    ],
    check:{q:'My family needs tickets for the bus. They need _______.',o:['bus tickets','buses tickets','tickets bus','ticket buses'],a:0,en:'noun + noun (first singular)',ar:'الاسم الأول مفرد → bus tickets'},
    formula:[{t:'اسم (مفرد) يصف',c:'v'},{t:'+',c:'p'},{t:'الاسم الأساسي',c:'k'}],
    compare:[
      {c1:'a glove for baseball',c2:'a baseball glove',ar:'إعادة الصياغة'},
      {c1:'bus tickets ✓',c2:'buses tickets ✗',ar:'الأول مفرد'},
    ],
    examples:[
      {s:'We have to pick up my sister at the train station.',tr:'علينا أن نأخذ أختي من محطّة القطار.',ar:'train station',ok:true},
      {s:'Allen gave Betty a gold ring.',tr:'أعطى ألن بيتي خاتماً ذهبياً.',ar:'المادّة كصفة',ok:true},
      {s:'These are papers plates.',wrong:'papers plates',right:'paper plates',tr:'الاسم الأول يبقى مفرداً.',ok:false},
    ]
  }
],
l3:[
  {
    title:'Verb + -er / -or (driver · opener)', ar:'إضافة ‑er / ‑or للفعل: الشخص الذي يفعل · الأداة التي تفعل',
    rule:'نضيف ‑er أو ‑or للفعل لنصنع اسماً بمعنى «الشخص الذي …» (teach → teacher · instruct → instructor) أو «الشيء الذي …» (open → can opener · make → coffee maker).',
    parts:[
      {t:'شخص: verb + er/or',d:'Ken drives a truck. He\'s a truck driver.'},
      {t:'أداة: verb + er',d:'A tool which opens cans is a can opener.'},
      {t:'مع اسم قبلها',d:'a stamp collector · a dishwasher · a hair dryer'},
    ],
    check:{q:"Alice manages an office. She's a _______.",o:['manager','managing','manages','managed'],a:0,en:'person who manages → manager',ar:'الشخص الذي يدير → manager'},
    formula:[{t:'verb',c:'v'},{t:'+',c:'p'},{t:'-er / -or',c:'k'},{t:'=',c:'p'},{t:'شخص / أداة',c:'s'}],
    compare:[
      {c1:'He visits often. → He\'s a visitor.',c2:'This tool sharpens pencils. → a pencil sharpener',ar:'شخص ↔ أداة'},
      {c1:'report → reporter',c2:'instruct → instructor',ar:'-er ↔ -or'},
    ],
    examples:[
      {s:"Jim works for a newspaper. He's a reporter.",tr:'يعمل جيم في جريدة، هو مراسل.',ar:'report → reporter',ok:true},
      {s:"That tool opens cans. It's a can opener.",tr:'تلك الأداة تفتح العلب، إنها فتّاحة علب.',ar:'open → opener',ok:true},
      {s:"Andy collects coins. He's a coins collector.",wrong:'coins collector',right:'coin collector',tr:'الاسم قبلها مفرد: coin collector.',ok:false},
    ]
  },
  {
    title:'Modals in reported speech', ar:'الأفعال الناقصة في الكلام المنقول (said / told)',
    rule:'عند نقل الكلام بعد said أو told تتغيّر بعض الأفعال الناقصة للماضي: may → might · can → could · am/is/are able to → was/were able to. وتتغيّر الضمائر (I → he/she). might و could تبقى كما هي.',
    parts:[
      {t:'may → might',d:'"I may still fly." → The captain said (that) he might still fly.'},
      {t:'can → could',d:'"I can go to the beach." → She said (that) she could go.'},
      {t:'is able to → was able to',d:'"I\'m not able to help you." → He told Ted (that) he wasn\'t able to help him.'},
    ],
    check:{q:'Mary: "I can\'t go with you." — Tony: She said _______ go with me.',o:["she couldn't","she can't","I can't","I couldn't"],a:0,en:"can't → couldn't",ar:"can't تصير couldn't والضمير she"},
    formula:[{t:'He / She',c:'s'},{t:'+',c:'p'},{t:'said / told + شخص',c:'v'},{t:'+',c:'p'},{t:'(that) + might / could / was able to',c:'k'}],
    compare:[
      {c1:'"I may buy a house."',c2:'He said he might buy a house.',ar:'may → might'},
      {c1:'said (بدون شخص)',c2:'told + شخص (told Ted)',ar:'said ↔ told'},
    ],
    examples:[
      {s:'Allen said he might go to the store.',tr:'قال ألن إنه ربّما يذهب إلى المتجر.',ar:'might',ok:true},
      {s:'Tony told his father that he and Mary might buy a new house.',tr:'أخبر توني والده أنّه هو وماري ربّما يشتريان بيتاً جديداً.',ar:'told + شخص',ok:true},
      {s:'She said that I can go to the beach.',wrong:'I can',right:'she could',tr:'نغيّر الضمير والفعل: she could.',ok:false},
    ]
  },
  {
    title:'Separable phrasal verbs', ar:'الأفعال المركّبة المنفصلة (turn on · try on · wake up)',
    rule:'بعض الأفعال المركّبة (turn on · put on · put out · try on · pick up · wake up · pay back · throw away · hang up · buckle up) يأتي الاسم بعدها أو بين جزأيها. أمّا الضمير (it · them · him · her) فيأتي دائماً بين الجزأين.',
    parts:[
      {t:'الاسم بعد الجزأين',d:'He turned on the radio.'},
      {t:'الاسم بين الجزأين',d:'He turned the radio on.'},
      {t:'الضمير بين الجزأين فقط',d:'He turned it on. (وليس turned on it)'},
    ],
    check:{q:'Bill is cold. He wants to wear his coat. Bill _______.',o:['put it on','put on it','it put on','his coat put on'],a:0,en:'pronoun in the middle',ar:'الضمير بين الجزأين → put it on'},
    formula:[{t:'verb',c:'v'},{t:'+',c:'p'},{t:'it / them / him / her',c:'s'},{t:'+',c:'p'},{t:'on / up / out / back',c:'k'}],
    compare:[
      {c1:"Don't wake up the baby. ✓ / Don't wake the baby up. ✓",c2:"Don't wake her up. ✓ / Don't wake up her. ✗",ar:'اسم ↔ ضمير'},
      {c1:'He picked the tickets up.',c2:'He picked them up.',ar:'أمثلة'},
    ],
    examples:[
      {s:'Hal buckled up his seat belt.',tr:'ربط هال حزام الأمان.',ar:'الاسم بعد الجزأين',ok:true},
      {s:'Jim put it out.',tr:'أطفأها جيم.',ar:'الضمير بينهما',ok:true},
      {s:'John tried on them.',wrong:'tried on them',right:'tried them on',tr:'الضمير يأتي بين الجزأين.',ok:false},
    ]
  }
],
l4:[
  {
    title:'If + present: general truths and commands', ar:'If + مضارع للحقائق العامة · ومع الأمر',
    rule:'للحقائق والعادات العامة: If + مضارع بسيط ، مضارع بسيط (الشيء يحدث دائماً). وللنصيحة/الأمر: If + مضارع ، فعل أمر. ويمكن تقديم الجملة الثانية.',
    parts:[
      {t:'حقيقة: If + مضارع , مضارع',d:'If you put ice in water, the water becomes cold.'},
      {t:'أمر: If + مضارع , أمر',d:"If you're cold, close the window."},
      {t:'الترتيب قابل للتبديل',d:'I talk to the boss if I arrive late.'},
    ],
    check:{q:"If you don't want to get a ticket, _______ your seat belt.",o:['wear','wearing','wore','worn'],a:0,en:'command → base verb',ar:'أمر → wear'},
    formula:[{t:'If',c:'v'},{t:'+',c:'p'},{t:'مضارع بسيط',c:'s'},{t:',',c:'p'},{t:'مضارع بسيط / فعل أمر',c:'k'}],
    compare:[
      {c1:'If you touch a hot stove, you burn your finger. (حقيقة)',c2:'If you want to get in shape, work out every day! (أمر)',ar:'حقيقة ↔ أمر'},
      {c1:'If students are late, the teacher marks them tardy.',c2:'You gain weight if you eat a lot.',ar:'الترتيب'},
    ],
    examples:[
      {s:"If it's freezing and it rains, the roads get slippery.",tr:'إذا كان الجوّ متجمّداً وأمطرت، تصبح الطرق زلقة.',ar:'حقيقة عامة',ok:true},
      {s:'Study if you plan to pass the test.',tr:'ذاكر إذا كنت تخطّط لاجتياز الاختبار.',ar:'أمر + if',ok:true},
      {s:'If you will touch a hot pan, you burn your finger.',wrong:'If you will touch',right:'If you touch',tr:'بعد if مضارع بسيط بدون will.',ok:false},
    ]
  },
  {
    title:'How + adjective (How long / How far …?)', ar:'الأسئلة بـ How + صفة للقياسات',
    rule:'نسأل عن القياس بـ How + صفة: How long · How wide · How high/tall · How deep · How far · How heavy · How old · How hot/cold. ويمكن السؤال بالاسم: What\'s its length / width / height / depth / weight / age?',
    parts:[
      {t:'How + صفة + be + الشيء?',d:'How long is a soccer field?'},
      {t:'نفس السؤال بالاسم',d:"How wide is it? = What's its width?"},
      {t:'tall للأشخاص · high للجبال',d:'How tall is he? · How high is Mount Everest?'},
    ],
    check:{q:"How _______ is that new truck? — It's 7 meters.",o:['long','length','longer than','the longest'],a:0,en:'How + adjective',ar:'How + صفة → How long'},
    formula:[{t:'How',c:'v'},{t:'+',c:'p'},{t:'adjective (long/wide/deep…)',c:'k'},{t:'+',c:'p'},{t:'is / are + الشيء?',c:'s'}],
    compare:[
      {c1:'How deep is it?',c2:"What's its depth?",ar:'صفة ↔ اسم'},
      {c1:'How heavy is it?',c2:"What's its weight?",ar:'heavy ↔ weight'},
    ],
    examples:[
      {s:'How far is it from New York City to Washington, DC?',tr:'كم المسافة من نيويورك إلى واشنطن؟',ar:'How far',ok:true},
      {s:"How wide is the teacher's desk? — It's 120 cm wide.",tr:'كم عرض مكتب المعلّم؟ — عرضه 120 سم.',ar:'How wide',ok:true},
      {s:'How length is the pool?',wrong:'How length',right:'How long',tr:'بعد How نضع الصفة (long) لا الاسم.',ok:false},
    ]
  },
  {
    title:'Indefinite pronouns: a few / a little / much / many', ar:'الضمائر المبهمة: some · any · none · a few · a little · many · much · a lot',
    rule:'a few و many للمعدود (pens · potatoes)، و a little و much لغير المعدود (milk · money · paper). some في الإثبات، any في النفي والسؤال، none = لا شيء (بدون فعل منفي). a lot للنوعين.',
    parts:[
      {t:'معدود: a few · many',d:'I have some pens. Do you need a few?'},
      {t:'غير معدود: a little · much',d:"There's sugar, but there isn't much."},
      {t:'some · any · none',d:"Do we have any milk? — No, we don't have any. / No, none."},
    ],
    check:{q:'Ann: Do you need some paper? Sara: Yes, I need _______.',o:['a little','a few','many','much'],a:0,en:'paper = noncount → a little',ar:'paper غير معدود → a little'},
    formula:[{t:'معدود',c:'s'},{t:'→',c:'p'},{t:'a few / many',c:'v'},{t:'·',c:'p'},{t:'غير معدود → a little / much',c:'k'}],
    compare:[
      {c1:'I have a few pens. (معدود)',c2:'I have a little money. (غير معدود)',ar:'a few ↔ a little'},
      {c1:"I don't have any.",c2:'I have none.',ar:'any ↔ none'},
    ],
    examples:[
      {s:"Mary: Do we have any milk? Sally: No, we don't have any.",tr:'ماري: هل لدينا حليب؟ سالي: لا، ليس لدينا.',ar:'any في النفي',ok:true},
      {s:'She answered only three questions. She didn\'t answer many of them.',tr:'أجابت عن ثلاثة أسئلة فقط، لم تُجب عن كثير منها.',ar:'many للمعدود',ok:true},
      {s:"There's sugar, but there isn't many.",wrong:"isn't many",right:"isn't much",tr:'sugar غير معدود → much.',ok:false},
    ]
  }
]
};

// ═══════════════════════════════════════
// WO — رتّب الجملة (word order)
// ═══════════════════════════════════════
const WO={
l1:[
  {words:['We','are','sure','we','will','win'],ans:'We are sure we will win.',tr:'نحن متأكّدون أننا سنفوز.',ar:'sure + جملة'},
  {words:['I','think','so','It','is','very','cloudy'],ans:'I think so. It is very cloudy.',tr:'أظنّ ذلك، الجوّ غائم جداً.',ar:'I think so'},
  {words:['I','hope','not','She','is','a','good','friend'],ans:'I hope not. She is a good friend.',tr:'أتمنّى لا، إنها صديقة جيّدة.',ar:'I hope not'},
  {words:['Matt','runs','the','fastest','of','all'],ans:'Matt runs the fastest of all.',tr:'مات يركض الأسرع بين الجميع.',ar:'the fastest'},
  {words:['Rick','runs','faster','than','Jim'],ans:'Rick runs faster than Jim.',tr:'ريك يركض أسرع من جيم.',ar:'faster than'},
  {words:['I','doubt','that','I','can','go','with','you'],ans:'I doubt that I can go with you.',tr:'أشكّ أنّي أستطيع الذهاب معك.',ar:'doubt'},
  {words:['The','player','kicked','the','winning','goal'],ans:'The player kicked the winning goal.',tr:'سجّل اللاعب هدف الفوز.',ar:'الرياضة'},
],
l2:[
  {words:['Could','I','please','borrow','your','dictionary'],ans:'Could I please borrow your dictionary?',tr:'هل يمكنني استعارة قاموسك من فضلك؟',ar:'could للاستئذان'},
  {words:['Yes','you','can','have','it','until','tomorrow'],ans:'Yes, you can have it until tomorrow.',tr:'نعم، يمكنك أخذه حتى الغد.',ar:'الموافقة بـ can'},
  {words:['That','candy','is','made','of','chocolate'],ans:'That candy is made of chocolate.',tr:'تلك الحلوى مصنوعة من الشوكولاتة.',ar:'be made of'},
  {words:['I','owe','him','five','dollars'],ans:'I owe him five dollars.',tr:'عليّ له خمسة دولارات.',ar:'owe'},
  {words:['Please','put','out','the','fire'],ans:'Please put out the fire.',tr:'من فضلك أطفئ النار.',ar:'put out'},
  {words:['My','family','needs','bus','tickets'],ans:'My family needs bus tickets.',tr:'عائلتي تحتاج تذاكر حافلة.',ar:'الاسم المركّب'},
  {words:['He','was','able','to','run','six','miles'],ans:'He was able to run six miles.',tr:'استطاع أن يركض ستّة أميال.',ar:'was able to'},
],
l3:[
  {words:['Can','I','try','it','on'],ans:'Can I try it on?',tr:'هل يمكنني تجربته؟',ar:'try it on'},
  {words:['The','dressing','room','is','over','there'],ans:'The dressing room is over there.',tr:'غرفة القياس هناك.',ar:'dressing room'},
  {words:['These','coats','are','on','sale','at','50%','off'],ans:'These coats are on sale at 50% off.',tr:'هذه المعاطف عليها تخفيض 50%.',ar:'on sale'},
  {words:['He','said','he','might','see','me','at','2','p.m.'],ans:'He said he might see me at 2 p.m.',tr:'قال إنه ربّما يراني الساعة الثانية.',ar:'may → might'},
  {words:['She','told','me','she','could','come'],ans:'She told me she could come.',tr:'أخبرتني أنها تستطيع المجيء.',ar:'can → could'},
  {words:['Jack','drives','a','bus','He','is','a','bus','driver'],ans:"Jack drives a bus. He is a bus driver.",tr:'جاك يقود حافلة، هو سائق حافلة.',ar:'-er'},
  {words:['Let\'s','measure','your','waist'],ans:"Let's measure your waist.",tr:'لنقِس خصرك.',ar:'المقاسات'},
],
l4:[
  {words:['If','you','are','cold','close','the','window'],ans:'If you are cold, close the window.',tr:'إذا شعرت بالبرد، أغلق النافذة.',ar:'If + أمر'},
  {words:['If','you','touch','a','hot','stove','you','burn','your','finger'],ans:'If you touch a hot stove, you burn your finger.',tr:'إذا لمست موقداً ساخناً، تحرق إصبعك.',ar:'حقيقة عامة'},
  {words:['How','deep','is','the','swimming','pool'],ans:'How deep is the swimming pool?',tr:'كم عمق المسبح؟',ar:'How deep'},
  {words:['How','far','is','it','to','the','mountains'],ans:'How far is it to the mountains?',tr:'كم المسافة إلى الجبال؟',ar:'How far'},
  {words:['I','gained','ten','pounds','last','year'],ans:'I gained ten pounds last year.',tr:'زاد وزني عشرة أرطال العام الماضي.',ar:'gain'},
  {words:['Can','I','borrow','a','few','quarters'],ans:'Can I borrow a few quarters?',tr:'هل يمكنني استعارة بعض الأرباع (عملات)؟',ar:'a few'},
  {words:['There','is','sugar','but','there','is','not','much'],ans:'There is sugar, but there is not much.',tr:'يوجد سكّر، لكن ليس كثيراً.',ar:'much'},
]
};

// ═══════════════════════════════════════
// EE — «تقييم» (من تمارين التقييم الرسمية Evaluation Exercises)
// ═══════════════════════════════════════
const EE={
l1:[
  // Exercise A — حدّد موضوع الفقرة (نصّ الاستماع من الملحق J)
  {q:"There are good and bad things about borrowing money. Some people feel that borrowing any money is a bad idea. Others feel that sometimes borrowing money is okay… Many people don't like to borrow from the bank and borrow from friends or family instead. — What is the topic?",o:["a new house","borrowing money","the bank's money","family and friends"],a:1,en:"topic → borrowing money",ar:'الموضوع الرئيسي: الاقتراض',tr:'للاقتراض جوانب جيّدة وسيّئة… الموضوع: اقتراض المال.'},
  {q:"It's really not easy being a team coach. The players need their coach to help them win the game… If the team loses a lot of games, the coach is not popular. Being a coach is a difficult profession. — What is the topic?",o:["a coach's profession","sports teams","the best teams","the most famous coaches"],a:0,en:"topic → a coach's profession",ar:'الموضوع: مهنة المدرّب',tr:'ليس سهلاً أن تكون مدرّب فريق… الموضوع: مهنة المدرّب.'},
  // Exercise B — اختر الردّ المناسب
  {q:"Do you think it's going to rain?",o:["Yes, I think so. I see a lot of dark clouds.","I hope not. She's a good friend.","I guess not. I just called him two days ago.","I suppose so. Which movie do you want to see?"],a:0,en:"dark clouds → I think so",ar:'غيوم داكنة → أظنّ ذلك',tr:'هل تظنّ أنها ستمطر؟ — نعم، أظنّ ذلك. أرى غيوماً داكنة كثيرة.'},
  {q:"Will Steve and his family arrive soon?",o:["I believe so, but I didn't hear the final score.","No, I don't believe so. They called to say they might be late.","I hope not. She's a good friend, and I don't want her to leave.","Yes, I think so. I see a lot of dark clouds."],a:1,en:"might be late → I don't believe so",ar:'سيتأخّرون → لا أعتقد',tr:'هل سيصل ستيف وعائلته قريباً؟ — لا أعتقد، اتّصلوا وقالوا إنهم قد يتأخّرون.'},
  {q:"Is Maria moving to San Francisco?",o:["I suppose so. Which movie do you want to see?","I guess not. I just called him two days ago.","I hope not. She's a good friend, and I don't want her to leave.","I believe so, but I didn't hear the final score."],a:2,en:"don't want her to leave → I hope not",ar:'لا أريدها أن ترحل → أتمنّى لا',tr:'هل ستنتقل ماريا إلى سان فرانسيسكو؟ — أتمنّى لا، إنها صديقة جيّدة ولا أريدها أن ترحل.'},
  {q:"Did our team win the game last night?",o:["I believe so, but I didn't hear the final score.","I guess not. I just called him two days ago.","Yes, I think so. I see a lot of dark clouds.","No, I don't believe so. They called to say they might be late."],a:0,en:"game → final score",ar:'المباراة → النتيجة النهائية',tr:'هل فاز فريقنا في مباراة الليلة الماضية؟ — أعتقد ذلك، لكن لم أسمع النتيجة النهائية.'},
  {q:"Do you want to go see a movie?",o:["I hope not. She's a good friend.","I suppose so. Which movie do you want to see?","I guess not. I just called him two days ago.","I believe so, but I didn't hear the final score."],a:1,en:"movie → which movie",ar:'فيلم → أيّ فيلم تريد؟',tr:'هل تريد أن نذهب لمشاهدة فيلم؟ — أظنّ ذلك. أيّ فيلم تريد أن تشاهد؟'},
  {q:"Will you call your brother this weekend?",o:["Yes, I think so. I see a lot of dark clouds.","I guess not. I just called him two days ago.","I suppose so. Which movie do you want to see?","No, I don't believe so. They called to say they might be late."],a:1,en:"called him two days ago → I guess not",ar:'اتّصلت به قبل يومين → أظنّ لا',tr:'هل ستتّصل بأخيك نهاية هذا الأسبوع؟ — أظنّ لا، اتّصلت به قبل يومين فقط.'},
  // Exercise C — المقارنة والتفضيل مع الأحوال
  {q:"Sara works until 4:30. Henry works until 5:00. Andy works until 5:30. Henry works _______ Sara.",o:["later than","the latest","latest than","more late"],a:0,en:"two people → later than",ar:'مقارنة بين اثنين → later than',tr:'تعمل سارة حتى 4:30 وهنري حتى 5:00 وآندي حتى 5:30. يعمل هنري لوقت أطول من سارة.'},
  {q:"Sara works until 4:30. Henry works until 5:00. Andy works until 5:30. Andy works _______.",o:["later than","the latest","the later","most late"],a:1,en:"all → the latest",ar:'الأكثر بين الكل → the latest',tr:'يعمل آندي حتى أبعد وقت بين الجميع.'},
  {q:"Nancy climbed 40 feet. Meg climbed 60 feet. Tina climbed 100 feet. Tina climbed _______.",o:["higher than","the highest","the most high","highest than"],a:1,en:"all → the highest",ar:'الأعلى بين الكل → the highest',tr:'تسلّقت تينا أعلى من الجميع.'},
  {q:"Greg drives 55 mph. Larry drives 65 mph. Tony drives 70 mph. Larry drives _______ Greg.",o:["faster than","the fastest","fast than","more fast"],a:0,en:"two → faster than",ar:'مقارنة بين اثنين → faster than',tr:'يقود لاري أسرع من غريغ.'},
  {q:"George lives 8 miles from the city. Fred lives 15 miles. Tim lives 25 miles. Tim lives _______.",o:["the farthest","farther than","the most far","the farer"],a:0,en:"far → the farthest",ar:'far → the farthest (الأبعد)',tr:'يسكن تيم الأبعد عن المدينة.'},
  // Exercise F — اختر الإجابة الأفضل
  {q:"Bob told me that baseball _______ is from 4 p.m. to 6 p.m. this afternoon. Are you coming?",o:["team","field","stadium","practice"],a:3,en:"training time → practice",ar:'وقت التمرين → practice',tr:'أخبرني بوب أنّ تمرين البيسبول من 4 إلى 6 عصر اليوم. هل ستأتي؟'},
  {q:"Silvia's on the school's volleyball _______. She plays very well.",o:["point","team","coach","match"],a:1,en:"group of players → team",ar:'مجموعة لاعبين → فريق',tr:'سيلفيا في فريق الكرة الطائرة بالمدرسة، وتلعب جيّداً جداً.'},
  {q:"Rob _______ the ball to Mark, but Mark couldn't catch it.",o:["raced","beat","tied","threw"],a:3,en:"ball → threw",ar:'رمى الكرة → threw',tr:'رمى روب الكرة إلى مارك، لكن مارك لم يستطع إمساكها.'},
  {q:"The woman walked _______ me and shook my hand.",o:["towards","farthest from","certainly","surely"],a:0,en:"direction → towards",ar:'باتّجاهي → towards',tr:'مشت المرأة نحوي وصافحتني.'},
  {q:"I _______ that I can go with you next weekend. I'm too busy.",o:["believe","suppose","imagine","doubt"],a:3,en:"too busy → doubt",ar:'مشغول جداً → أشكّ (doubt)',tr:'أشكّ أنّي أستطيع الذهاب معك نهاية الأسبوع القادم، أنا مشغول جداً.'},
  {q:"Mark: Who _______ the game? Mary: We did, 5 to 3.",o:["tied","won","beat","joined"],a:1,en:"5 to 3 → won",ar:'فاز بالمباراة → won',tr:'مارك: من فاز بالمباراة؟ ماري: نحن، 5 مقابل 3.'},
  {q:"Select the three things you can tie.",o:["reporter, string, rope","string, point, stadium","rope, string, shoelaces","shoelaces, field, meaning"],a:2,en:"tie → rope, string, shoelaces",ar:'الأشياء التي تُربط: حبل · خيط · أربطة حذاء',tr:'اختر ثلاثة أشياء يمكنك ربطها.'},
  {q:"Which two words have opposite meanings?",o:["sure, positive","win, lose","point, goal","imagine, suppose"],a:1,en:"opposite → win / lose",ar:'متضادّان → يفوز / يخسر',tr:'أيّ كلمتين معناهما متضادّ؟'},
  {q:"What is another word that means game?",o:["field","stadium","race","match"],a:3,en:"game = match",ar:'مباراة = match',tr:'ما الكلمة الأخرى التي تعني مباراة؟'},
  {q:"Jane's a better player than I am. She always _______ me at tennis.",o:["beats","wins","ties","loses"],a:0,en:"beat + person",ar:'يهزم شخصاً → beats',tr:'جين لاعبة أفضل منّي، تهزمني دائماً في التنس.'},
  {q:"The university built a new _______ for the football team.",o:["string","coach","stadium","race"],a:2,en:"build for a team → stadium",ar:'بنت ملعباً → stadium',tr:'بنت الجامعة استاداً جديداً لفريق كرة القدم.'},
  {q:"The final _______ was 3 to 1.",o:["score","player","goal","point"],a:0,en:"3 to 1 → score",ar:'النتيجة → score',tr:'كانت النتيجة النهائية 3 مقابل 1.'},
  {q:"My house is _______ small.",o:["ever","certain","quite","positive"],a:2,en:"very → quite",ar:'إلى حدٍّ كبير → quite',tr:'بيتي صغير جداً.'},
  // Exercise G — املأ الفراغ من الصندوق
  {q:"The player raced down the field and _______ the winning goal.",o:["kicked","jumped","raced","beaten"],a:0,en:"goal → kicked",ar:'سجّل الهدف بقدمه → kicked',tr:'ركض اللاعب في الملعب وسجّل هدف الفوز.'},
  {q:"He was the fastest runner that I have ever seen on a baseball _______.",o:["match","field","most","surely"],a:1,en:"place → field",ar:'الملعب → field',tr:'كان أسرع عدّاء رأيته في ملعب بيسبول.'},
  {q:"The fans became excited as the two horses _______ towards the finish line.",o:["raced","doubted","kicked","beaten"],a:0,en:"horses → raced",ar:'تسابقت الخيول → raced',tr:'تحمّس المشجّعون بينما تسابق الحصانان نحو خطّ النهاية.'},
  {q:"I _______ when I heard the sound of the hunter's gun.",o:["jumped","kicked","doubted","raced"],a:0,en:"sudden sound → jumped",ar:'قفزت (فزعاً) → jumped',tr:'قفزتُ عندما سمعت صوت بندقية الصيّاد.'},
  {q:"Are you _______ that the police officer is following us? We weren't speeding!",o:["positive","farthest","most","surely"],a:0,en:"sure → positive",ar:'متأكّد تماماً → positive',tr:'هل أنت متأكّد تماماً أنّ الشرطي يلاحقنا؟ لم نكن مسرعين!'},
  {q:"The exercise asks the students to _______ the words with their correct meanings.",o:["match","field","kick","doubt"],a:0,en:"pair → match",ar:'يطابق → match',tr:'يطلب التمرين من الطلاب مطابقة الكلمات بمعانيها الصحيحة.'},
  {q:"The coach never _______ that Jeff could become a professional basketball player.",o:["doubted","jumped","raced","kicked"],a:0,en:"not sure → doubted",ar:'لم يشكّ → doubted',tr:'لم يشكّ المدرّب أبداً أنّ جيف يمكن أن يصبح لاعب كرة سلّة محترفاً.'},
  {q:"_______ you don't want any dessert. You couldn't possibly be hungry after that large meal!",o:["Surely","Most","Farthest","Uncertain"],a:0,en:"certainly → Surely",ar:'بالتأكيد → Surely',tr:'بالتأكيد أنت لا تريد حلوى، لا يمكن أن تكون جائعاً بعد تلك الوجبة الكبيرة!'},
  {q:"Of all our relatives, Aunt Julie and Uncle Jim live the _______ away from us.",o:["farthest","most","uncertain","field"],a:0,en:"far → the farthest",ar:'الأبعد → farthest',tr:'من بين كلّ أقاربنا، تسكن العمّة جولي والعمّ جيم الأبعد عنّا.'},
  {q:"When _______ people are looking for a job, they think about things like money and the time they spend going to work.",o:["most","farthest","positive","beaten"],a:0,en:"the majority → most",ar:'أغلب الناس → most',tr:'عندما يبحث أغلب الناس عن عمل، يفكّرون في أشياء مثل المال ووقت الذهاب للعمل.'},
  {q:"Our team has always _______ the Stars at our yearly matches.",o:["beaten","kicked","doubted","jumped"],a:0,en:"has + beaten",ar:'has + التصريف الثالث → beaten',tr:'لطالما هزم فريقنا فريق «النجوم» في مبارياتنا السنوية.'},
  {q:"I'm _______ which road to take. Do you have a map?",o:["uncertain","positive","surely","most"],a:0,en:"not sure → uncertain",ar:'غير متأكّد → uncertain',tr:'لست متأكّداً أيّ طريق أسلك، هل معك خريطة؟'},
],
l2:[
  // Exercise B — موضوع الفقرة
  {q:"When I first came to the US, I didn't know English very well, so I had some problems… When she saw the bag, she started to laugh… the cookies were for dogs. Now I can read English much better. — What is the topic?",o:["delicious cookies","trouble with English","a friend's visit","cheap food for dogs"],a:1,en:"topic → trouble with English",ar:'الموضوع: مشاكل اللغة الإنجليزية',tr:'عندما جئت لأمريكا لم أكن أعرف الإنجليزية جيّداً… الموضوع: صعوبة الإنجليزية.'},
  {q:"Exercise is good for you, and it can be fun. There are many ways to exercise… the kind of exercise that you choose isn't really important, but it is important to exercise every day. — What is the topic?",o:["fun sports","the need for fun","playing team sports","exercise for health"],a:3,en:"topic → exercise for health",ar:'الموضوع: الرياضة من أجل الصحّة',tr:'الرياضة مفيدة وممتعة… المهمّ أن تتمرّن كلّ يوم.'},
  // Exercise C — اختر الإجابة الأفضل
  {q:"The storm _______ the children.",o:["threw out","woke up","put out","paid back"],a:1,en:"noise → woke up",ar:'أيقظت → woke up',tr:'أيقظت العاصفة الأطفال.'},
  {q:"Keith lent me money last week. Now I _______ him five dollars.",o:["owe","allow","lose","buy"],a:0,en:"borrowed → owe",ar:'عليّ دين → owe',tr:'أقرضني كيث مالاً الأسبوع الماضي، والآن عليّ له خمسة دولارات.'},
  {q:"It's nice to cook outside, but you must remember to _______ the fire when you finish cooking.",o:["start","put out","do over","kick"],a:1,en:"stop fire → put out",ar:'تطفئ النار → put out',tr:'الطبخ في الخارج ممتع، لكن يجب أن تتذكّر إطفاء النار عند الانتهاء.'},
  {q:"You can _______ those newspapers if you're finished reading them.",o:["beat","throw out","pay back","match"],a:1,en:"don't need → throw out",ar:'تتخلّص منها → throw out',tr:'يمكنك التخلّص من تلك الجرائد إذا انتهيت من قراءتها.'},
  {q:"A bird was in the tree a minute ago, but it flew _______.",o:["after","under","away","between"],a:2,en:"left → flew away",ar:'طار بعيداً → away',tr:'كان طائر على الشجرة قبل دقيقة، لكنه طار بعيداً.'},
  {q:"David needs to _______ the five dollars that his friend lent him.",o:["doubt","throw away","pay back","owe"],a:2,en:"return money → pay back",ar:'يردّ المال → pay back',tr:'يحتاج ديفيد أن يردّ الخمسة دولارات التي أقرضه إيّاها صديقه.'},
  {q:"We went _______ the house because it was cold and windy outside.",o:["in front of","in back of","into","above"],a:2,en:"enter → into",ar:'دخلنا إلى → into',tr:'دخلنا البيت لأنّ الجوّ كان بارداً وعاصفاً في الخارج.'},
  {q:"I like your new _______ belt.",o:["glass","stone","leather","iron"],a:2,en:"belt → leather",ar:'حزام جلد → leather',tr:'يعجبني حزامك الجلدي الجديد.'},
  {q:"The post office is one block _______ the library on Maple Street.",o:["into","past","during","above"],a:1,en:"beyond → past",ar:'بعد المكتبة → past',tr:'مكتب البريد بعد المكتبة بشارع واحد في شارع ميبل.'},
  {q:"Mary used to run every day, but now she _______.",o:["may","can't","could","wouldn't"],a:1,en:"now not able → can't",ar:'الآن لا تستطيع → can\'t',tr:'كانت ماري تركض كلّ يوم، لكنها الآن لا تستطيع.'},
  {q:"The students _______ take the test yesterday because the computers didn't work.",o:["couldn't","might not","are able to","may"],a:0,en:"past ability (neg) → couldn't",ar:'لم يستطيعوا (ماضي) → couldn\'t',tr:'لم يستطع الطلاب أداء الاختبار أمس لأنّ الحواسيب لم تعمل.'},
  {q:"Joe bought his mother a piece of _______ for her birthday.",o:["rock","jewelry","metal","plastic"],a:1,en:"gift → jewelry",ar:'هدية → مجوهرات',tr:'اشترى جو لأمّه قطعة مجوهرات لعيد ميلادها.'},
  {q:"This tool is _______. It's very heavy.",o:["iron","wool","rubber","glass"],a:0,en:"heavy → iron",ar:'ثقيل → حديد',tr:'هذه الأداة من الحديد، إنها ثقيلة جداً.'},
  {q:"That candy _______ chocolate.",o:["is lost in","joins","is made of","appreciates"],a:2,en:"material → is made of",ar:'مصنوعة من → is made of',tr:'تلك الحلوى مصنوعة من الشوكولاتة.'},
  {q:"They don't _______ you to smoke in this building.",o:["believe","allow","owe","suppose"],a:1,en:"permit → allow",ar:'يسمح → allow',tr:'لا يسمحون لك بالتدخين في هذا المبنى.'},
  {q:"You need to do over these sentences because they're _______.",o:["dirty","wrong","ready","good"],a:1,en:"do over → wrong",ar:'تعيدها لأنها خطأ → wrong',tr:'تحتاج أن تعيد كتابة هذه الجمل لأنها خاطئة.'},
  {q:"My family needs tickets for the bus. They need _______.",o:["tickets bus","buses ticket","ticket buses","bus tickets"],a:3,en:"noun + noun → bus tickets",ar:'الاسم الأول مفرد → bus tickets',tr:'عائلتي تحتاج تذاكر للحافلة، يحتاجون تذاكر حافلة.'},
  {q:"These plates are made of paper. They're _______.",o:["paper plates","papers plates","plate paper","plates paper"],a:0,en:"material + noun → paper plates",ar:'المادّة + الاسم → paper plates',tr:'هذه الأطباق مصنوعة من الورق، إنها أطباق ورقية.'},
  // Exercise D — الاسم المركّب
  {q:"We have to pick up my sister at the train _______.",o:["table","station","ticket"],a:1,en:"train station",ar:'محطّة القطار → train station',tr:'علينا أن نأخذ أختي من محطّة القطار.'},
  {q:"My brother filled up his car at the _______ station.",o:["gas","police","bus"],a:0,en:"fill up a car → gas station",ar:'محطّة الوقود → gas station',tr:'عبّأ أخي سيّارته في محطّة الوقود.'},
  {q:"Mary used her _______ card to buy a dress.",o:["phone","credit","post"],a:1,en:"buy → credit card",ar:'بطاقة ائتمان → credit card',tr:'استخدمت ماري بطاقتها الائتمانية لشراء فستان.'},
  {q:"Allen gave Betty a _______ ring.",o:["gold","rubber","silk"],a:0,en:"ring → gold",ar:'خاتم ذهب → gold ring',tr:'أعطى ألن بيتي خاتماً ذهبياً.'},
  {q:"The student had to use a _______ phone.",o:["bus","game","public"],a:2,en:"public phone",ar:'هاتف عمومي → public phone',tr:'اضطرّ الطالب لاستخدام هاتف عمومي.'},
  {q:"The Millers watched a _______ match on TV last night.",o:["traffic","point","tennis"],a:2,en:"tennis match",ar:'مباراة تنس → tennis match',tr:'شاهدت عائلة ميلر مباراة تنس على التلفاز الليلة الماضية.'},
  // Exercise E — املأ الفراغ من الصندوق
  {q:"What _______ did you use to make that table?",o:["material","jewelry","past","owes"],a:0,en:"made from → material",ar:'أيّ مادّة؟ → material',tr:'ما المادّة التي استخدمتها لصنع تلك الطاولة؟'},
  {q:"Sara didn't _______ the children to play in the rain.",o:["allow","owe","put out","woke up"],a:0,en:"permit → allow",ar:'لم تسمح → allow',tr:'لم تسمح سارة للأطفال باللعب تحت المطر.'},
  {q:"A loud noise _______ the baby.",o:["woke up","owes","allow","put out"],a:0,en:"noise → woke up",ar:'أيقظ → woke up',tr:'أيقظ صوتٌ عالٍ الطفل.'},
  {q:"Jason _______ Rick $5 for the movie.",o:["owes","allow","woke up","past"],a:0,en:"debt → owes",ar:'عليه دين → owes',tr:'على جيسون لريك خمسة دولارات ثمن الفيلم.'},
  {q:"They tied their dog to the _______ pole.",o:["iron","jewelry","glass","past"],a:0,en:"pole material → iron",ar:'عمود حديد → iron pole',tr:'ربطوا كلبهم بعمود الحديد.'},
  {q:"Cindy bought her bracelet at the new _______ store.",o:["jewelry","rock","iron","material"],a:0,en:"bracelet → jewelry store",ar:'محلّ مجوهرات → jewelry store',tr:'اشترت سيندي سوارها من محلّ المجوهرات الجديد.'},
  {q:"Jerry rode his bicycle over a _______ and broke the wheel.",o:["rock","glass","jewelry","material"],a:0,en:"hard thing on road → rock",ar:'صخرة → rock',tr:'مرّ جيري بدرّاجته فوق صخرة وكسر العجلة.'},
  {q:"Joe _______ his cigarette on the ground.",o:["put out","woke up","owes","allow"],a:0,en:"stop burning → put out",ar:'أطفأ → put out',tr:'أطفأ جو سيجارته على الأرض.'},
  {q:"Tom threw his ball at the window and broke the _______.",o:["glass","rock","iron","jewelry"],a:0,en:"window → glass",ar:'زجاج النافذة → glass',tr:'رمى توم كرته على النافذة وكسر الزجاج.'},
  {q:"I drove _______ the grocery store and didn't stop to buy milk.",o:["past","into","owes","allow"],a:0,en:"not stop → past",ar:'مررت من أمامه → past',tr:'مررت بسيّارتي من أمام البقالة ولم أتوقّف لشراء الحليب.'},
],
l3:[
  // Exercise B — موضوع الفقرة
  {q:"There will be a meeting in the auditorium for anyone who wants to go to the football game this weekend. Tickets will be on sale for half price… All people wanting to go to the football game should come to this meeting. — What is the topic?",o:["a meeting about a bus","a meeting about the weekend","a meeting about a football game","a meeting about the tour office"],a:2,en:"topic → a meeting about a football game",ar:'الموضوع: اجتماع عن مباراة كرة القدم',tr:'سيكون هناك اجتماع لكلّ من يريد الذهاب لمباراة كرة القدم.'},
  {q:"There are many ways to stay healthy. Most doctors say that drinking a lot of water every day helps your body. Sleep is also very important… Always think about your body, and the things you can do to stay healthy. — What is the topic?",o:["water for health","staying healthy","the need for sleep","feeling good"],a:1,en:"topic → staying healthy",ar:'الموضوع: الحفاظ على الصحّة',tr:'هناك طرق كثيرة للحفاظ على الصحّة.'},
  {q:"The Great Lakes are very important for people in North America. The five Great Lakes have one fifth of the world's fresh water… It's easy to see why the Great Lakes are important for everyone in North America. — What is the topic?",o:["boat races","the need for water","the Great Lakes","Lake Erie"],a:2,en:"topic → the Great Lakes",ar:'الموضوع: البحيرات العظمى',tr:'البحيرات العظمى مهمّة جداً لسكّان أمريكا الشمالية.'},
  // Exercise C — اختر الإجابة الأفضل
  {q:"Last month, the number of students in the school was 821. This month it's 865. The number of students has _______.",o:["discounted","beaten","increased","matched"],a:2,en:"821 → 865 = increased",ar:'زاد → increased',tr:'كان عدد الطلاب الشهر الماضي 821 وهذا الشهر 865، لقد زاد العدد.'},
  {q:"A belt goes around the _______.",o:["waist","head","size","shoe"],a:0,en:"belt → waist",ar:'الحزام حول الخصر → waist',tr:'الحزام يُلبس حول الخصر.'},
  {q:"Jack didn't have to buy the shirt. It was _______.",o:["positive","sales","free","natural"],a:2,en:"no money → free",ar:'مجاني → free',tr:'لم يضطرّ جاك لشراء القميص، كان مجانياً.'},
  {q:"That tie is too long. It goes down to the _______.",o:["chest","shoulder","hips","stomach"],a:2,en:"too long → hips",ar:'طويلة جداً → حتى الورك',tr:'تلك الربطة طويلة جداً، تصل إلى الوركين.'},
  {q:"We got a good _______ on the price of the car we bought.",o:["deal","goal","item","jump"],a:0,en:"good price → deal",ar:'صفقة جيّدة → deal',tr:'حصلنا على صفقة جيّدة في سعر السيّارة التي اشتريناها.'},
  {q:"Private Johnson learned how to _______ a button on his uniform.",o:["increase","try on","sew","tie"],a:2,en:"button → sew",ar:'يخيط زرّاً → sew',tr:'تعلّم الجندي جونسون كيف يخيط زرّاً في زيّه.'},
  {q:"My neighbor bought a new car. His old one is _______.",o:["for sure","for sale","irregular","uncertain"],a:1,en:"sell old → for sale",ar:'للبيع → for sale',tr:'اشترى جاري سيّارة جديدة، وسيّارته القديمة للبيع.'},
  {q:"You can easily wash and dry that _______.",o:["knot","deal","fabric","field"],a:2,en:"wash → fabric",ar:'قماش → fabric',tr:'يمكنك غسل ذلك القماش وتجفيفه بسهولة.'},
  {q:"Alice manages an office. She's a _______.",o:["managing","manages","managed","manager"],a:3,en:"person who manages → manager",ar:'-er = الشخص → manager',tr:'تدير أليس مكتباً، هي مديرة.'},
  {q:"Jim works for a newspaper. He's a _______.",o:["reports","reporter","reporting","reported"],a:1,en:"person who reports → reporter",ar:'-er = الشخص → reporter',tr:'يعمل جيم في جريدة، هو مراسل.'},
  {q:"That tool opens cans. It's a can _______.",o:["opener","opening","opened","open"],a:0,en:"thing that opens → opener",ar:'-er = الأداة → opener',tr:'تلك الأداة تفتح العلب، إنها فتّاحة علب.'},
  // Exercise D — الكلام المنقول
  {q:"Allen: I might go to the store. — Gary: What did Allen say? — Mary: He said _______ go to the store.",o:["I might","he may","he might","I may"],a:2,en:"might stays + he",ar:'might تبقى، والضمير he',tr:'ألن: ربّما أذهب للمتجر. — ماري: قال إنه ربّما يذهب للمتجر.'},
  {q:"Mary: I can't go with you. — John: What did Mary say? — Tony: She said _______ go with me.",o:["I can't","she couldn't","she can't","I couldn't"],a:1,en:"can't → couldn't",ar:"can't → she couldn't",tr:'ماري: لا أستطيع الذهاب معك. — توني: قالت إنها لا تستطيع الذهاب معي.'},
  {q:"Mike: Ted, I'm not able to help you tomorrow. — Mary: He told Ted that _______ to help him tomorrow.",o:["he wasn't able","he isn't able","you're not able","Ted wasn't able"],a:0,en:"isn't able → wasn't able",ar:'am not able → he wasn\'t able',tr:'مايك: تِد، لن أستطيع مساعدتك غداً. — أخبر تِد أنّه لن يستطيع مساعدته.'},
  {q:"Tony: Dad, Mary and I may buy a new house next year. — Gary: He told him that _______ buy a new house next year.",o:["I may","he and Mary may","he and Mary might","Mary and I could"],a:2,en:"may → might",ar:'may → might والضمير he and Mary',tr:'توني: أبي، أنا وماري ربّما نشتري بيتاً. — أخبره أنّه هو وماري ربّما يشتريان بيتاً.'},
  {q:"Sally: I can go to the beach this weekend. — Mike: She said that _______ go to the beach this weekend.",o:["she could","she might","I might","I can"],a:0,en:"can → could",ar:'can → she could',tr:'سالي: أستطيع الذهاب للشاطئ. — قالت إنها تستطيع الذهاب للشاطئ.'},
  // Exercise G — اختر الجملة الصحيحة (الأفعال المنفصلة)
  {q:"Choose the best sentence (Hal and his seat belt).",o:["Hal buckled up his seat belt.","Hal buckled up it.","Hal his seat belt buckled up."],a:0,en:"verb + up + noun",ar:'الاسم بعد الجزأين ✓',tr:'ربط هال حزام الأمان.'},
  {q:"Choose the best sentence (He and the tickets).",o:["He picked the tickets up.","He them picked up.","He picked up them."],a:0,en:"noun between the parts",ar:'الاسم بين الجزأين ✓',tr:'أخذ التذاكر.'},
  {q:"Choose the best sentence (Bill and his coat).",o:["Bill his coat put on.","Bill put on it.","Bill put it on."],a:2,en:"pronoun between the parts",ar:'الضمير بين الجزأين → put it on',tr:'لبسه بيل.'},
  {q:"Choose the best sentence (Jim and the fire).",o:["Jim put out it.","Jim it put out.","Jim put it out."],a:2,en:"pronoun between the parts",ar:'الضمير بين الجزأين → put it out',tr:'أطفأه جيم.'},
],
l4:[
  // Exercise C — اختر الإجابة الأفضل
  {q:"I ate a lot of sweet food last year, so I _______ ten pounds.",o:["measured","gained","lost","won"],a:1,en:"sweet food → gained",ar:'زاد وزني → gained',tr:'أكلت حلويات كثيرة العام الماضي، فزاد وزني عشرة أرطال.'},
  {q:"My grandmother feeds her cat too much food, so he's _______.",o:["thin","young","fat","free"],a:2,en:"too much food → fat",ar:'سمين → fat',tr:'تُطعم جدّتي قطّها أكلاً كثيراً، لذلك هو سمين.'},
  {q:"Sue: How far is it to the mountains? Joe: It's 50 _______.",o:["kilometers","yards","centimeters","inches"],a:0,en:"long distance → kilometers",ar:'مسافة طويلة → كيلومترات',tr:'سو: كم المسافة إلى الجبال؟ جو: 50 كيلومتراً.'},
  {q:"That soccer field is 100 _______ long.",o:["scales","yards","distances","pounds"],a:1,en:"field length → yards",ar:'طول الملعب → ياردات',tr:'طول ملعب كرة القدم ذلك 100 ياردة.'},
  {q:"The workers _______ the pieces of wood for the house they're building.",o:["measured","amounted to","paid back","tried on"],a:0,en:"wood → measured",ar:'قاسوا → measured',tr:'قاس العمّال قطع الخشب للبيت الذي يبنونه.'},
  {q:"This bug's only 15 _______ long.",o:["feet","meters","miles","millimeters"],a:3,en:"small bug → millimeters",ar:'حشرة صغيرة → مليمترات',tr:'طول هذه الحشرة 15 مليمتراً فقط.'},
  {q:"Tony: How long is this? Clerk: It's 98 _______.",o:["percentage","centimeters","points","degrees"],a:1,en:"length → centimeters",ar:'طول → سنتيمترات',tr:'توني: كم طول هذا؟ البائع: 98 سنتيمتراً.'},
  {q:"Jerry: Do you have tickets for the game on Saturday? Steve: Yes, I have _______.",o:["some","any","none","much"],a:0,en:"yes → some",ar:'إثبات → some',tr:'جيري: هل لديك تذاكر لمباراة السبت؟ ستيف: نعم، لديّ بعضها.'},
  {q:"Mary: Do we have any milk? Sally: No, we don't have _______.",o:["none","a few","any","many"],a:2,en:"don't + any",ar:'النفي → any',tr:'ماري: هل لدينا حليب؟ سالي: لا، ليس لدينا.'},
  {q:"Ann: Do you need some paper? Sara: Yes, I need _______.",o:["a few","many","a little","much"],a:2,en:"paper (noncount) → a little",ar:'غير معدود → a little',tr:'آن: هل تحتاجين ورقاً؟ سارة: نعم، أحتاج قليلاً.'},
  {q:"Dan: Is there any sugar? Allen: Yes, but there isn't _______.",o:["any","many","much","less"],a:2,en:"sugar (noncount) → much",ar:'غير معدود في النفي → much',tr:'دان: هل يوجد سكّر؟ ألن: نعم، لكن ليس كثيراً.'},
  // Exercise D — شكل الفعل الصحيح
  {q:"If you put ice in water, the water _______ cold.",o:["was becoming","becomes","became","has become"],a:1,en:"general truth → present",ar:'حقيقة عامة → becomes',tr:'إذا وضعت الثلج في الماء، يصبح الماء بارداً.'},
  {q:"If students are late for the book quiz, the teacher _______ them a zero.",o:["gives","gave","was giving","has given"],a:0,en:"general truth → gives",ar:'قاعدة ثابتة → gives',tr:'إذا تأخّر الطلاب عن اختبار الكتاب، يعطيهم المعلّم صفراً.'},
  {q:"You can't sleep if you _______ too much coffee.",o:["drank","will drink","drink","were drinking"],a:2,en:"if + present",ar:'بعد if مضارع → drink',tr:'لا تستطيع النوم إذا شربت قهوة كثيرة.'},
  {q:"You burn your finger if you _______ a hot pan.",o:["touch","touched","will touch","have touched"],a:0,en:"if + present",ar:'بعد if مضارع → touch',tr:'تحرق إصبعك إذا لمست قِدراً ساخناً.'},
  {q:"Study if you _______ to pass the test.",o:["planned","plan","have planned","will plan"],a:1,en:"if + present",ar:'بعد if مضارع → plan',tr:'ذاكر إذا كنت تخطّط لاجتياز الاختبار.'},
  {q:"If you don't want to get a ticket, _______ your seat belt.",o:["wear","wearing","wore","worn"],a:0,en:"command → wear",ar:'فعل أمر → wear',tr:'إذا لم ترد مخالفة، اربط حزام الأمان.'},
  // Exercise E — الكلمة الصحيحة
  {q:"What's the _______ of that football field?",o:["length","strength","weight"],a:0,en:"field → length",ar:'طول الملعب → length',tr:'ما طول ملعب كرة القدم ذلك؟'},
  {q:"What's the _______ of that building?",o:["weight","depth","height"],a:2,en:"building → height",ar:'ارتفاع المبنى → height',tr:'ما ارتفاع ذلك المبنى؟'},
  {q:"What's the _______ of that lake?",o:["strength","weight","depth"],a:2,en:"lake → depth",ar:'عمق البحيرة → depth',tr:'ما عمق تلك البحيرة؟'},
  {q:"What's your brother's _______?",o:["weight","width","wide"],a:0,en:"person → weight",ar:'وزن أخيك → weight',tr:'كم وزن أخيك؟'},
  {q:"A rope has more _______ than a string.",o:["depth","strength","strong"],a:1,en:"noun → strength",ar:'قوّة (اسم) → strength',tr:'الحبل أقوى من الخيط.'},
  {q:"We couldn't put the TV in the living room because the _______ of the door was too narrow.",o:["height","weight","width"],a:2,en:"narrow → width",ar:'ضيّق → العرض width',tr:'لم نستطع إدخال التلفاز لغرفة الجلوس لأنّ عرض الباب ضيّق جداً.'},
]
};

// ═══════════════════════════════════════
// REVIEW — الدرس 5 (Review) + أسئلة الواجبات (Homework)
// ═══════════════════════════════════════
const REVIEW=[
  // — Lesson 5 · Exercise A (ص 110–112) —
  {q:"Jimmy broke the _______ in the window.",o:["deal","rock","wool","glass"],a:3,en:"window → glass",ar:'زجاج النافذة → glass',tr:'كسر جيمي زجاج النافذة.'},
  {q:"When my grandfather was a boy, he _______ play baseball.",o:["might","could","is able to","is going to"],a:1,en:"past ability → could",ar:'قدرة في الماضي → could',tr:'عندما كان جدّي صغيراً، كان يستطيع لعب البيسبول.'},
  {q:"They say women are _______ diamonds, but Mary doesn't like them.",o:["put out","fond of","bargaining","appreciate"],a:1,en:"like → fond of",ar:'مولعات بـ → fond of',tr:'يقولون إنّ النساء مولعات بالألماس، لكن ماري لا تحبّه.'},
  {q:"The sales receipt shows the amount of _______ that you pay.",o:["size","length","fabric","tax"],a:3,en:"pay → tax",ar:'الضريبة → tax',tr:'يوضّح إيصال البيع مبلغ الضريبة التي تدفعها.'},
  {q:"The clerk measured my _______ and said that I wear size 32 pants.",o:["head","waist","depth","arm"],a:1,en:"pants size → waist",ar:'مقاس البنطال → الخصر',tr:'قاس البائع خصري وقال إنّ مقاس بنطالي 32.'},
  {q:"The Wilsons have their old car _______ sale because they want to buy a new one.",o:["on","for","with","in"],a:1,en:"sell → for sale",ar:'للبيع → for sale',tr:'عرضت عائلة ويلسون سيّارتها القديمة للبيع لأنهم يريدون شراء جديدة.'},
  {q:"We _______ to the beach every weekend if we _______ enough time.",o:["will go / will have","have gone / have","go / have","went / have"],a:2,en:"general truth → present / present",ar:'عادة عامة → go / have',tr:'نذهب إلى الشاطئ كلّ نهاية أسبوع إذا كان لدينا وقت كافٍ.'},
  {q:"The new oven must fit in the kitchen, so we measured its _______.",o:["kick","weight","width","distance"],a:2,en:"fit space → width",ar:'العرض → width',tr:'يجب أن يتّسع الفرن الجديد في المطبخ، لذلك قسنا عرضه.'},
  {q:"Kent: _______ I smoke in here, please? Jane: Yes, you may.",o:["Could","Would","Will","Did"],a:0,en:"permission → Could",ar:'الاستئذان → Could',tr:'كِنت: هل يمكنني التدخين هنا من فضلك؟ جين: نعم، يمكنك.'},
  {q:"A person can drive at the _______ of sixteen in this state.",o:["height","weight","jump","age"],a:3,en:"sixteen → age",ar:'سنّ 16 → age',tr:'يستطيع الشخص القيادة في سنّ السادسة عشرة في هذه الولاية.'},
  {q:"Thanks for making these cookies, but I don't want _______ right now.",o:["any","a little","much","none"],a:0,en:"don't + any",ar:'النفي → any',tr:'شكراً لصنع هذا البسكويت، لكن لا أريد شيئاً الآن.'},
  {q:"Andy wants to collect coins. He wants to be a _______.",o:["coins collector","collect coins","coin collector","collects coins"],a:2,en:"noun (singular) + -or",ar:'الاسم الأول مفرد → coin collector',tr:'يريد آندي جمع العملات، يريد أن يكون جامع عملات.'},
  {q:"My son _______ to run one mile in two minutes.",o:["can","may","is able","might"],a:2,en:"is able + to",ar:'is able to → يستطيع',tr:'ابني يستطيع أن يركض ميلاً في دقيقتين.'},
  {q:"Airman Banks bought his mother a _______ ring for her birthday.",o:["gold","wool","nylon","cotton"],a:0,en:"ring → gold",ar:'خاتم ذهب → gold',tr:'اشترى الطيّار بانكس لأمّه خاتماً ذهبياً لعيد ميلادها.'},
  {q:"Be careful when you drive fast. You _______ get a ticket.",o:["were able to","are able to","might","would"],a:2,en:"possibility → might",ar:'احتمال → might',tr:'كن حذراً عندما تقود بسرعة، فقد تحصل على مخالفة.'},
  {q:"We _______ go downtown last night.",o:["couldn't","may not","are not able to","might not"],a:0,en:"last night → couldn't",ar:'ماضٍ (لم نستطع) → couldn\'t',tr:'لم نستطع الذهاب إلى وسط المدينة الليلة الماضية.'},
  {q:"Mike threw the _______ to me.",o:["shed","time","boat","ball"],a:3,en:"threw → ball",ar:'رمى الكرة → ball',tr:'رمى مايك الكرة إليّ.'},
  {q:"His _______ is to become a pilot.",o:["pair","goal","copper","medium"],a:1,en:"aim → goal",ar:'هدفه → goal',tr:'هدفه أن يصبح طيّاراً.'},
  {q:"How _______ is that new truck?",o:["longer than","the longest","length","long"],a:3,en:"How + adjective",ar:'How + صفة → long',tr:'كم طول تلك الشاحنة الجديدة؟'},
  {q:"We have juice, but I don't want _______.",o:["many","any","a few","none"],a:1,en:"don't + any",ar:'النفي → any',tr:'لدينا عصير، لكنّي لا أريد.'},
  {q:"Ken: Did you find any tickets for sale? Ann: No, _______.",o:["none","any","a little","much"],a:0,en:"No, none.",ar:'لا شيء → none',tr:'كِن: هل وجدت تذاكر للبيع؟ آن: لا، لم أجد شيئاً.'},
  // — Lesson 5 · Exercise B (ص 113) —
  {q:"Last night at South Stadium, the Lions _______ the Tigers with a final score of 31 to 28.",o:["beat","tied","won","believed"],a:0,en:"beat + team",ar:'هزم فريقاً → beat',tr:'الليلة الماضية في ملعب ساوث، هزم «الأسود» «النمور» بنتيجة 31 مقابل 28.'},
  {q:"The Lions beat the Tigers with a final _______ of 31 to 28.",o:["score","goal","team","doubts"],a:0,en:"31 to 28 → score",ar:'النتيجة → score',tr:'هزم «الأسود» «النمور» بنتيجة نهائية 31 مقابل 28.'},
  {q:"Their best player kicked a _______ in the last two minutes of the game.",o:["goal","score","team","tied"],a:0,en:"kicked → goal",ar:'سجّل هدفاً → goal',tr:'سجّل أفضل لاعبيهم هدفاً في آخر دقيقتين من المباراة.'},
  {q:"When asked how the Lions _______, Coach Bell said, \"They all played together well.\"",o:["won","beat","tied","doubts"],a:0,en:"how they won",ar:'كيف فازوا → won',tr:'عندما سُئل كيف فاز «الأسود»، قال المدرّب بيل: «لعبوا جميعاً معاً بشكل جيّد».'},
  {q:"\"They all played together well. We have a great _______.\"",o:["team","score","goal","doubts"],a:0,en:"played together → team",ar:'فريق رائع → team',tr:'«لعبوا جميعاً معاً جيّداً، لدينا فريق رائع».'},
  {q:"Last week, the Lions _______ the Bears 6 to 6.",o:["tied","beat","won","believed"],a:0,en:"6 to 6 → tied",ar:'تعادل → tied',tr:'الأسبوع الماضي تعادل «الأسود» مع «الدببة» 6 مقابل 6.'},
  {q:"\"I had my _______ about this week,\" said Coach Bell, \"but the players really believed that they could win.\"",o:["doubts","goal","score","team"],a:0,en:"not sure → doubts",ar:'كانت لديّ شكوك → doubts',tr:'قال المدرّب بيل: «كانت لديّ شكوك بشأن هذا الأسبوع، لكنّ اللاعبين آمنوا حقاً أنهم سيفوزون».'},
  {q:"\"…but the players really _______ that they could win. They did an excellent job.\"",o:["believed","doubts","tied","beat"],a:0,en:"were sure → believed",ar:'آمنوا → believed',tr:'«لكنّ اللاعبين آمنوا حقاً أنهم يستطيعون الفوز، وقاموا بعمل ممتاز».'},
  // — Lesson 5 · Exercise C (ص 113) — حوار شراء بنطال
  {q:"Customer: I need to buy a _______ of pants to match this shirt.",o:["pair","size","medium","cotton"],a:0,en:"a pair of pants",ar:'زوج بنطال → a pair of',tr:'الزبون: أحتاج أن أشتري بنطالاً يناسب هذا القميص.'},
  {q:"Clerk: Okay. We have some nice, natural _______ pants here.",o:["cotton","polyester","size","pair"],a:0,en:"natural → cotton",ar:'طبيعي → قطن',tr:'البائع: حسناً، لدينا بناطيل قطنية طبيعية جميلة هنا.'},
  {q:"Customer: I'd like pants made of _______. They last longer. — Clerk: We have some polyester pants here.",o:["polyester","cotton","medium","pair"],a:0,en:"man-made, lasts longer → polyester",ar:'صناعي يدوم أطول → polyester',tr:'الزبون: أريد بنطالاً من البوليستر، يدوم أطول.'},
  {q:"Clerk: What _______ do you wear? — Customer: I wear a medium.",o:["size","pair","cotton","dressing room"],a:0,en:"medium → size",ar:'المقاس → size',tr:'البائع: ما مقاسك؟ — الزبون: أرتدي مقاساً متوسّطاً.'},
  {q:"Customer: Can I _______ them _______? — Clerk: Of course.",o:["try / on","put / out","throw / away","wake / up"],a:0,en:"try them on",ar:'أجرّبه → try them on',tr:'الزبون: هل يمكنني تجربته؟ — البائع: بالطبع.'},
  {q:"Clerk: Of course. The _______ is over there.",o:["dressing room","size","pair","medium"],a:0,en:"try on → dressing room",ar:'غرفة القياس → dressing room',tr:'البائع: بالطبع، غرفة القياس هناك.'},
];

// — واجب الدرس 2 (Homework · Select the best answer) —
REVIEW.push(
  {q:"When I was young, I _______ lift heavy boxes.",o:["can","could","may"],a:1,en:"past ability → could",ar:'قدرة ماضية → could',tr:'عندما كنت صغيراً، كنت أستطيع رفع الصناديق الثقيلة.'},
  {q:"John's not home yet. He _______ still be at work.",o:["is able to","can","might"],a:2,en:"possibility → might",ar:'احتمال → might',tr:'جون لم يصل البيت بعد، ربّما ما زال في العمل.'},
  {q:"Sir, _______ I speak with you, please?",o:["may","will","be able to"],a:0,en:"permission → may",ar:'استئذان → may',tr:'سيّدي، هل يمكنني التحدّث معك من فضلك؟'},
  {q:"A few years ago, Tom _______ run three miles a day. Now he can't.",o:["can","may","was able to"],a:2,en:"past ability → was able to",ar:'قدرة ماضية → was able to',tr:'قبل سنوات كان توم يستطيع الركض ثلاثة أميال يومياً، والآن لا يستطيع.'},
  {q:"Betty's lived in many countries, and now she _______ speak four languages.",o:["was able to","can","could"],a:1,en:"now → can",ar:'الآن → can',tr:'عاشت بيتي في دول كثيرة، والآن تستطيع التحدّث بأربع لغات.'},
  {q:"_______ I borrow your book, please?",o:["Am able to","Will","Can"],a:2,en:"permission → Can",ar:'استئذان → Can',tr:'هل يمكنني استعارة كتابك من فضلك؟'},
  {q:"They _______ visit us when they were in town last week.",o:["couldn't","might not","aren't able to"],a:0,en:"last week → couldn't",ar:'ماضٍ → couldn\'t',tr:'لم يستطيعوا زيارتنا عندما كانوا في المدينة الأسبوع الماضي.'}
);

// — واجب الدرس 4 (Homework · Select the best answer) —
REVIEW.push(
  {q:"Some animals eat only vegetables. There's no meat in their _______.",o:["scale","diet","weight"],a:1,en:"food → diet",ar:'نظامهم الغذائي → diet',tr:'بعض الحيوانات تأكل الخضار فقط، لا لحم في غذائها.'},
  {q:"Joan: How much do you _______? Stan: A hundred and fifty pounds.",o:["scale","weight","weigh"],a:2,en:"verb → weigh",ar:'فعل (تزن) → weigh',tr:'جوان: كم تزن؟ ستان: مئة وخمسون رطلاً.'},
  {q:"Joan: What was your _______ when you got married, Stan? Stan: Oh, I was 24.",o:["age","weight","height"],a:0,en:"24 → age",ar:'العمر → age',tr:'جوان: كم كان عمرك عندما تزوّجت؟ ستان: كان عمري 24.'},
  {q:"If you want to lose weight, you have to _______ and exercise.",o:["eat a diet","go on a diet","scale"],a:1,en:"go on a diet",ar:'تبدأ حمية → go on a diet',tr:'إذا أردت إنقاص وزنك، عليك أن تتّبع حمية وتتمرّن.'},
  {q:"Jane's been sick for a long time. I don't think she has enough _______ to get up.",o:["age","length","strength"],a:2,en:"power → strength",ar:'قوّة → strength',tr:'جين مريضة منذ وقت طويل، لا أظنّ أنّ لديها قوّة كافية لتنهض.'},
  {q:"He used to weigh 140 pounds, and now he weighs 150. He's _______ 10 pounds.",o:["gained","dieted","lost"],a:0,en:"140 → 150 = gained",ar:'زاد وزنه → gained',tr:'كان وزنه 140 رطلاً والآن 150، زاد 10 أرطال.'},
  {q:"Where's the _______? I want to find out how many pounds I've lost.",o:["scale","weight","measure"],a:0,en:"weigh yourself → scale",ar:'الميزان → scale',tr:'أين الميزان؟ أريد أن أعرف كم رطلاً خسرت.'},
  {q:"Mr. Davis is 5'11\" and weighs only 135 pounds. He's very _______.",o:["heavy","thin","thick"],a:1,en:"tall + light → thin",ar:'نحيف → thin',tr:'طول السيّد ديفيس 5 أقدام و11 بوصة ووزنه 135 رطلاً فقط، هو نحيف جداً.'},
  {q:"Is your dictionary a thin or _______ book?",o:["thick","wide","hot"],a:0,en:"opposite of thin → thick",ar:'عكس thin → thick',tr:'هل قاموسك رفيع أم سميك؟'},
  {q:"Before I got sick, my _______ was 125 pounds.",o:["width","measure","weight"],a:2,en:"pounds → weight",ar:'رطل → وزن weight',tr:'قبل أن أمرض كان وزني 125 رطلاً.'},
  {q:"Mr. West: What's the _______ between San Antonio and Austin? Mr. King: It's about 80 miles.",o:["length","height","distance"],a:2,en:"between two cities → distance",ar:'بين مدينتين → المسافة',tr:'ما المسافة بين سان أنطونيو وأوستن؟ حوالي 80 ميلاً.'},
  {q:"A thermometer _______ temperature.",o:["measures","gains","decreases"],a:0,en:"thermometer → measures",ar:'يقيس → measures',tr:'الترمومتر يقيس درجة الحرارة.'},
  {q:"Stan: My office measures 12 feet by 24 feet. — How do we write it?",o:["12' x 24'","12\" x 24\"","12/24"],a:0,en:"feet = '",ar:'القدم رمزها \' → 12\' x 24\'',tr:'مكتبي 12 قدماً في 24 قدماً.'},
  {q:"Barbara loves tomatoes. She bought _______ yesterday.",o:["much","some","any","a little"],a:1,en:"count + positive → some",ar:'إثبات → some',tr:'تحبّ باربرا الطماطم، اشترت بعضاً منها أمس.'},
  {q:"She answered only three questions. She didn't answer _______ of them.",o:["a little","many","much","some"],a:1,en:"count (questions) → many",ar:'معدود في النفي → many',tr:'أجابت عن ثلاثة أسئلة فقط، لم تُجب عن كثير منها.'},
  {q:"Do you have cream? I want _______.",o:["a little","many","none","a few"],a:0,en:"cream (noncount) → a little",ar:'غير معدود → a little',tr:'هل لديك قشطة؟ أريد قليلاً.'},
  {q:"Do you have cake? I'd like _______ of it, please.",o:["any","many","a few","some"],a:3,en:"request → some",ar:'طلب → some',tr:'هل لديك كعك؟ أودّ قطعة منه من فضلك.'},
  {q:"I have some pens. Do you need _______?",o:["none","much","a little","a few"],a:3,en:"pens (count) → a few",ar:'معدود → a few',tr:'لديّ بعض الأقلام، هل تحتاج بعضها؟'},
  {q:"I need only two potatoes. I won't buy _______.",o:["some","much","many","a little"],a:2,en:"potatoes (count) → many",ar:'معدود في النفي → many',tr:'أحتاج حبّتي بطاطس فقط، لن أشتري كثيراً.'},
  {q:"A: Did any students come late? B: No, _______ of them.",o:["some","any","none","all"],a:2,en:"No, none",ar:'ولا واحد → none',tr:'هل تأخّر أيّ طالب؟ لا، ولا واحد منهم.'},
  {q:"David drank water, but he didn't drink _______.",o:["a lot","a few","many","none"],a:0,en:"water (noncount) → a lot",ar:'ليس كثيراً → a lot',tr:'شرب ديفيد ماءً، لكن ليس كثيراً.'},
  {q:"Jack worked on the math problems but only solved _______ of them.",o:["none","a few","a little","much"],a:1,en:"problems (count) → a few",ar:'معدود → a few',tr:'عمل جاك على مسائل الرياضيات لكنه حلّ القليل منها فقط.'},
  {q:"She has money, but she doesn't have _______.",o:["some","a few","much","many"],a:2,en:"money (noncount) → much",ar:'غير معدود في النفي → much',tr:'لديها مال، لكن ليس كثيراً.'}
);
EE.review=REVIEW;

// ═══════════════════════════════════════
// FINAL EXAM (الاختبار النهائي) — يجمع أسئلة التقييم للدروس الأربعة
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
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 1 — الرياضة واليقين',w:[
    {e:'coach',a:'مدرّب',em:'🧢'},{e:'stadium',a:'استاد',em:'🏟️'},{e:'score',a:'نتيجة',em:'📊'},
    {e:'reporter',a:'مراسل',em:'🎤'},{e:'shoelaces',a:'أربطة الحذاء',em:'👟'},{e:'certain',a:'متأكّد',em:'✅'},
    {e:'positive',a:'واثق تماماً',em:'💯'},{e:'doubt',a:'يشكّ',em:'🤨'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 2 — المواد والمجوهرات',w:[
    {e:'material',a:'مادّة',em:'🧱'},{e:'leather',a:'جلد',em:'👞'},{e:'cotton',a:'قطن',em:'☁️'},
    {e:'jewelry',a:'مجوهرات',em:'💍'},{e:'necklace',a:'قلادة',em:'📿'},{e:'diamond',a:'ألماس',em:'💎'},
    {e:'appreciate',a:'يقدّر',em:'🙏'},{e:'allow',a:'يسمح',em:'✅'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 3 — المقاسات والتسوّق',w:[
    {e:'measurement',a:'قياس',em:'📏'},{e:'waist',a:'خصر',em:'👖'},{e:'receipt',a:'إيصال',em:'🧾'},
    {e:'discount',a:'خصم',em:'💲'},{e:'percent',a:'بالمئة',em:'%'},{e:'fabric',a:'قماش',em:'🧶'},
    {e:'bargain',a:'يساوم',em:'🗣️'},{e:'irregular',a:'معيب',em:'⚠️'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 4 — القياسات والوزن',w:[
    {e:'width',a:'عرض',em:'↔️'},{e:'depth',a:'عمق',em:'🌊'},{e:'weight',a:'وزن',em:'⚖️'},
    {e:'height',a:'ارتفاع',em:'📏'},{e:'strength',a:'قوّة',em:'💪'},{e:'scale',a:'ميزان',em:'⚖️'},
    {e:'kilometer',a:'كيلومتر',em:'🛣️'},{e:'millimeter',a:'مليمتر',em:'📏'},
  ]},
];

// ═══════════════════════════════════════
// LISTENING — لا توجد فيديوهات استماع لهذا الكتاب بعد
// ═══════════════════════════════════════
const YT_VIDEOS=[];

// ═══════════════════════════════════════
// ROUTING MANIFEST
// ═══════════════════════════════════════
const SCREENS=['home','lscreen','rscreen','ytscreen','fscreen','vtscreen','spscreen','mkscreen'];
const SCREEN_NAMES={home:'الرئيسية',lscreen:'درس',rscreen:'المراجعة',ytscreen:'الاستماع',fscreen:'الاختبار النهائي',vtscreen:'اختبار المفردات',spscreen:'الإملاء',mkscreen:'مراجعة الأخطاء'};
