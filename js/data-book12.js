// ═══════════════════════════════════════
// DATA — BOOK 12
// Lesson 1 (See the USA!) — vocab, grammar, word-order, per-lesson quiz.
// Built lesson by lesson; more lessons get appended here later.
// ═══════════════════════════════════════
const BOOK_ID='book12';

const LESSON_META={
  l1:{ico:'🗽',title:'Lesson 1 — See the USA!',sub:'خطط السفر والطقس · الشرط الأول (if) · المضارع التام (for/since/ever)'},
  l2:{ico:'🎓',title:'Lesson 2 — Education & decisions',sub:'التعليم والشهادات والقرارات · المضارع التام (already/yet) · so/because'},
  l3:{ico:'🏠',title:'Lesson 3 — Remodeling a home',sub:'البناء والغرف والاحتمال · could/may/might للاحتمال · الكلام المنقول'},
  l4:{ico:'🎣',title:'Lesson 4 — The great outdoors',sub:'الصيد والهوايات · used to / would للعادات الماضية · المقارنة (-er + than)'}
};
const LESSON_KEYS=Object.keys(LESSON_META);

// ═══════════════════════════════════════
// VOCABULARY
// ═══════════════════════════════════════
const VOCAB={
l1:[
  // — الطقس والمناخ —
  {e:'climate',a:'مناخ',em:'🌡️'},
  {e:'heat',a:'حرارة / حرّ',em:'🔥'},
  {e:'humidity',a:'رطوبة',em:'💦'},
  {e:'humid',a:'رطب',em:'💧'},
  {e:'breeze',a:'نسيم',em:'🍃'},
  {e:'wind',a:'رياح',em:'🌬️'},
  {e:'blow',a:'تهبّ (الريح)',past:'blew',pa:'هبّت',em:'💨'},
  {e:'clear up',a:'يصفو (الطقس)',em:'☀️'},
  {e:'freezing',a:'متجمّد / شديد البرودة',em:'🥶'},
  {e:'calm',a:'هادئ / ساكن',em:'😌'},
  {e:'clear',a:'صافٍ',em:'🌤️'},
  // — البحر والسفر —
  {e:'beach',a:'شاطئ',em:'🏖️'},
  {e:'sea',a:'بحر',em:'🌊'},
  {e:'deep',a:'عميق',em:'🌊'},
  {e:'slippery',a:'زلِق',em:'⚠️'},
  {e:'slip',a:'ينزلق',em:'🛝'},
  {e:'dangerous',a:'خطير',em:'⚠️'},
  {e:'unpleasant',a:'غير سارّ / مزعج',em:'😖'},
  {e:'thought',a:'فكرة / رأي',em:'💭'},
  // — أفعال —
  {e:'be over',a:'ينتهي',em:'🏁'},
  {e:'last',a:'يدوم / يستمرّ',em:'⏳'},
  {e:'remain',a:'يبقى',em:'📍'},
  {e:'stay',a:'يبقى / يمكث',em:'🏨'},
  {e:'belong to',a:'يخصّ / ينتمي إلى',em:'📎'},
  {e:'expect',a:'يتوقّع',em:'🔮'},
  {e:'could use',a:'يودّ لو يحصل على',em:'🙏'},
  // — كلمات أخرى —
  {e:'if',a:'إذا / لو',em:'🔀'},
  {e:'during',a:'خلال / أثناء',em:'⏱️'},
  {e:'ever',a:'في أيّ وقت / سبق',em:'❓'},
  {e:'except',a:'ما عدا',em:'➖'},
  {e:'frightened',a:'خائف / مذعور',em:'😨'},
  {e:'like',a:'مثل',em:'🟰'},
  {e:'no longer',a:'لم يعد',em:'🚫'},
  {e:'none',a:'لا شيء / لا أحد',em:'0️⃣'},
  {e:'occasionally',a:'أحياناً / من حينٍ لآخر',em:'🔁'},
  {e:'quiet',a:'هادئ',em:'🤫'},
],
l2:[
  // — التعليم والشهادات —
  {e:'education',a:'التعليم',em:'🎓'},
  {e:'degree',a:'شهادة جامعية',em:'📜'},
  {e:'diploma',a:'دبلوم / شهادة',em:'📃'},
  {e:'associate degree',a:'شهادة دبلوم (سنتان)',em:'📄'},
  {e:"bachelor's degree",a:'بكالوريوس',em:'🎓'},
  {e:"master's degree",a:'ماجستير',em:'🎓'},
  {e:'Ph.D.',a:'دكتوراه',em:'👨‍🎓'},
  {e:'college',a:'كلّية',em:'🏫'},
  {e:'university',a:'جامعة',em:'🏛️'},
  {e:'course',a:'مقرّر / دورة',em:'📚'},
  {e:'grade',a:'صفّ / درجة',em:'🔢'},
  {e:'elementary school',a:'مدرسة ابتدائية',em:'🏫'},
  {e:'middle school',a:'مدرسة متوسّطة',em:'🏫'},
  {e:'high school',a:'مدرسة ثانوية',em:'🏫'},
  // — المهن والقرارات —
  {e:'career',a:'مسار مهني',em:'💼'},
  {e:'profession',a:'مهنة',em:'👔'},
  {e:'professional',a:'محترف / مهني',em:'🎯'},
  {e:'educator',a:'مربٍّ / معلّم',em:'🧑‍🏫'},
  {e:'decision',a:'قرار',em:'⚖️'},
  {e:'choice',a:'خيار',em:'🔀'},
  {e:'discussion',a:'نقاش',em:'💬'},
  {e:'field',a:'مجال / حقل',em:'🌐'},
  {e:'future',a:'المستقبل',em:'🔮'},
  {e:'offer',a:'عرض / يعرض',em:'🤝'},
  {e:'refusal',a:'رفض',em:'🙅'},
  {e:'tour of duty',a:'فترة خدمة',em:'🎖️'},
  // — أفعال —
  {e:'educate',a:'يُعلّم',em:'📖'},
  {e:'accept',a:'يقبل',em:'✅'},
  {e:'refuse',a:'يرفض',em:'❌'},
  {e:'discuss',a:'يناقش',em:'🗣️'},
  {e:'retire',a:'يتقاعد',em:'🌴'},
  {e:'change my mind',a:'يغيّر رأيه',em:'🔄'},
  {e:'turn down',a:'يرفض / يعتذر',em:'👎'},
  {e:'take',a:'يأخذ',past:'took',pa:'أخذ',em:'✋'},
  // — أخرى —
  {e:'already',a:'بالفعل / سلفاً',em:'✔️'},
  {e:'yet',a:'بعد (حتى الآن)',em:'⏳'},
  {e:'confused',a:'مُرتبك',em:'😕'},
  {e:'confusing',a:'مُربِك',em:'🌀'},
  {e:'instead of',a:'بدلاً من',em:'🔁'},
  {e:'so',a:'لذلك',em:'➡️'},
],
l3:[
  // — البناء والتوسعة —
  {e:'addition',a:'ملحق / إضافة',em:'🏗️'},
  {e:'builder',a:'بنّاء / مقاول',em:'👷'},
  {e:'build',a:'يبني',past:'built',pa:'بنى',em:'🧱'},
  {e:'add on',a:'يضيف (غرفة)',em:'➕'},
  {e:'enlarge',a:'يوسّع',em:'🔎'},
  {e:'solution',a:'حلّ',em:'💡'},
  {e:'solve',a:'يحلّ',em:'🧩'},
  {e:'trouble',a:'مشكلة / متاعب',em:'⚠️'},
  {e:'idea',a:'فكرة',em:'💭'},
  {e:'plan',a:'مخطّط / خطة',em:'📐'},
  // — الغرف والمنزل —
  {e:'den',a:'غرفة جلوس / معيشة',em:'🛋️'},
  {e:'dining room',a:'غرفة الطعام',em:'🍽️'},
  {e:'fireplace',a:'مدفأة',em:'🔥'},
  {e:'fire',a:'نار',em:'🔥'},
  {e:'oven',a:'فرن',em:'🍞'},
  {e:'shed',a:'سقيفة / مخزن',em:'🏚️'},
  {e:'patio',a:'فناء / تراس',em:'🪴'},
  {e:'suburb',a:'ضاحية',em:'🏘️'},
  {e:'wood',a:'خشب',em:'🪵'},
  // — الأجهزة والاجتماعات —
  {e:'stereo',a:'مُجسّم الصوت',em:'📻'},
  {e:'speaker',a:'سمّاعة',em:'🔊'},
  {e:'get-together',a:'لقاء / تجمّع',em:'🎉'},
  {e:'meeting',a:'اجتماع',em:'📅'},
  {e:'get together',a:'يجتمعون',past:'got together',pa:'اجتمعوا',em:'🤝'},
  // — أفعال —
  {e:'burn',a:'يحرق / يحترق',em:'🔥'},
  {e:'boil',a:'يغلي',em:'♨️'},
  {e:'heat',a:'يُسخّن',em:'🌡️'},
  {e:'leave',a:'يترك / يغادر',past:'left',pa:'ترك',em:'🚪'},
  {e:'could',a:'قد / رُبّما (احتمال)',em:'🤔'},
  {e:'take place',a:'يحدث / يجري',past:'took place',pa:'حدث',em:'📌'},
  // — أخرى —
  {e:'interested in',a:'مهتمّ بـ',em:'👀'},
  {e:'near',a:'قريب',em:'📍'},
  {e:'perhaps',a:'رُبّما',em:'❓'},
  {e:'then',a:'حينئذٍ / بعدها',em:'⏭️'},
  {e:'tiring',a:'مُتعِب',em:'😮‍💨'},
],
l4:[
  // — الصيد والأدوات —
  {e:'hunt',a:'يصطاد (برّاً)',em:'🏹'},
  {e:'fish',a:'يصطاد السمك / سمك',em:'🎣'},
  {e:'fishing rod',a:'صنّارة صيد',em:'🎣'},
  {e:'catch',a:'يصطاد / يُمسك',past:'caught',pa:'اصطاد',em:'🪝'},
  {e:'kill',a:'يقتل',em:'💀'},
  {e:'shoot',a:'يُطلق النار',past:'shot',pa:'أطلق',em:'🔫'},
  {e:'gun',a:'بندقية / سلاح ناري',em:'🔫'},
  {e:'rifle',a:'بندقية',em:'🔫'},
  {e:'pistol',a:'مسدّس',em:'🔫'},
  {e:'weapon',a:'سلاح',em:'⚔️'},
  {e:'shot',a:'طلقة',em:'🎯'},
  {e:'deer',a:'غزال',em:'🦌'},
  {e:'duck',a:'بطّة',em:'🦆'},
  {e:'country',a:'الريف / البلاد',em:'🏞️'},
  {e:'outdoors',a:'في الهواء الطلق',em:'🌲'},
  {e:'indoors',a:'داخل المنزل',em:'🏠'},
  {e:'instructions',a:'تعليمات',em:'📋'},
  {e:'plenty',a:'وفرة / الكثير',em:'📦'},
  {e:'walk',a:'نزهة / يمشي',em:'🚶'},
  {e:'practice',a:'يتمرّن',em:'🔁'},
  {e:'prepare',a:'يُحضّر / يستعدّ',em:'🛠️'},
  // — العادات الماضية —
  {e:'used to',a:'كان (عادة سابقة)',em:'⏮️'},
  {e:'would',a:'كان (عادة سابقة)',em:'🔄'},
  // — كلمات المقارنة —
  {e:'farther',a:'أبعد',em:'📏'},
  {e:'further',a:'أبعد / أكثر',em:'➕'},
  {e:'hard',a:'بجدّ / صعب',em:'💪'},
  {e:'high',a:'عالٍ',em:'⬆️'},
  {e:'low',a:'منخفض',em:'⬇️'},
  {e:'slow',a:'بطيء',em:'🐢'},
  {e:'more',a:'أكثر',em:'➕'},
  {e:'once',a:'مرّة واحدة',em:'1️⃣'},
  {e:'twice',a:'مرّتين',em:'2️⃣'},
  {e:'several',a:'عدّة',em:'🔢'},
  {e:'whole',a:'كامل / بأكمله',em:'⭕'},
  {e:'all over',a:'في كلّ مكان',em:'🌐'},
]
};

// ═══════════════════════════════════════
// GRAMMAR
// ═══════════════════════════════════════
const GRAMMAR={
l1:[
  {
    title:'The conditional (present/future)', ar:'الشرط الأول (الحقيقي في الحاضر/المستقبل)',
    rule:'للتعبير عن شرطٍ ممكن ونتيجته: If + مضارع بسيط , will + فعل. الجملتان قابلتان للتبديل. "If we have free time, we\'ll go to the beach."',
    parts:[
      {t:'If + مضارع , will + فعل',d:'If we have free time, we\'ll go to the beach.'},
      {t:'السؤال',d:'Where will you go if you have free time?'},
      {t:'بعد if مضارع (لا will)',d:'نقول if the weather clears up (وليس if it will clear).'},
    ],
    check:{q:"If we have free time, we _______ go to the beach.",o:['will','would','are','have'],a:0,en:'النتيجة → will + فعل',ar:'جواب الشرط → will'},
    formula:[{t:'If',c:'v'},{t:'+',c:'p'},{t:'مضارع بسيط',c:'s'},{t:',',c:'p'},{t:'will + فعل',c:'k'}],
    compare:[
      {c1:'If it rains, we\'ll stay home.',c2:'We\'ll stay home if it rains.',ar:'ترتيب الجملتين'},
      {c1:'if the weather clears up (صحيح)',c2:'if the weather will clear up (خطأ)',ar:'بعد if مضارع'},
    ],
    examples:[
      {s:"If we have free time, we'll go to the beach.",tr:'إذا كان لدينا وقت فراغ، سنذهب إلى الشاطئ.',ar:'if + مضارع , will',ok:true},
      {s:'What will you do if the weather clears up?',tr:'ماذا ستفعل إذا صفا الطقس؟',ar:'سؤال شرطي',ok:true},
      {s:"If it will rain, we'll stay home.",wrong:'if it will rain',right:'if it rains',tr:'بعد if نضع المضارع: if it rains.',ok:false},
    ]
  },
  {
    title:'Present perfect with for / since', ar:'المضارع التام مع for / since',
    rule:'لحدثٍ بدأ في الماضي وما زال مستمرّاً: (have/has) + التصريف الثالث. مع for (مدّة) و since (نقطة بداية).',
    parts:[
      {t:'have/has + past participle',d:'I have lived here for two years.'},
      {t:'for = لمدّة',d:'for two years · for a week.'},
      {t:'since = منذ (نقطة)',d:'since 2001 · since last year.'},
    ],
    check:{q:"John has owned his car _______ 2001.",o:['since','for','ago','during'],a:0,en:'نقطة زمنية → since',ar:'نقطة بداية → since'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'have/has',c:'v'},{t:'+',c:'p'},{t:'past participle + for/since',c:'k'}],
    compare:[
      {c1:'for two years (مدّة)',c2:'since 2001 (نقطة)',ar:'for ↔ since'},
      {c1:'I have gone to this school for two months.',c2:'Jane has taught English since 1990.',ar:'أمثلة'},
    ],
    examples:[
      {s:'I have gone to this school for two months.',tr:'أدرس في هذه المدرسة منذ شهرين.',ar:'have gone + for',ok:true},
      {s:'Jane has taught English since 1990.',tr:'تُدرّس جين الإنجليزية منذ 1990.',ar:'has taught + since',ok:true},
      {s:'I have lived here since two years.',wrong:'since two years',right:'for two years',tr:'مع المدّة نستخدم for: for two years.',ok:false},
    ]
  },
  {
    title:'Present perfect: ever / times', ar:'المضارع التام للخبرة (ever · مرّات)',
    rule:'للسؤال عن خبرةٍ سابقة نستخدم ever مع المضارع التام، وللإجابة نذكر عدد المرّات (twice · two times).',
    parts:[
      {t:'Have you ever …?',d:'Have you ever been to Chicago?'},
      {t:'العدد في الجواب',d:'I\'ve seen her twice since last year.'},
      {t:'مع since في الجواب',d:'The Wilsons have flown there two times since last year.'},
    ],
    check:{q:"Have you _______ seen your aunt since last year?",o:['ever','since','for','none'],a:0,en:'خبرة سابقة → ever',ar:'هل سبق؟ → ever'},
    formula:[{t:'Have',c:'v'},{t:'+',c:'p'},{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'ever + past participle …?',c:'k'}],
    compare:[
      {c1:'Have you ever been there?',c2:"Yes, I've been there twice.",ar:'السؤال والجواب'},
      {c1:'I have seen her twice.',c2:'They have flown there two times.',ar:'عدد المرّات'},
    ],
    examples:[
      {s:'Have you seen your aunt since last year?',tr:'هل رأيت عمّتك منذ العام الماضي؟',ar:'المضارع التام + since',ok:true},
      {s:"I've seen her twice since last year.",tr:'رأيتها مرّتين منذ العام الماضي.',ar:'twice + since',ok:true},
      {s:'Did you ever seen your aunt?',wrong:'Did you ever seen',right:'Have you ever seen',tr:'مع المضارع التام: Have you ever seen?',ok:false},
    ]
  }
],
l2:[
  {
    title:'Present perfect: already / yet', ar:'المضارع التام مع already / yet',
    rule:'already (بالفعل) في الإثبات، و yet (بعد/حتى الآن) في النفي والأسئلة. مع المضارع التام: have/has + التصريف الثالث.',
    parts:[
      {t:'already — في الإثبات',d:"I've already seen the doctor."},
      {t:'yet — في النفي/السؤال',d:"The nurse hasn't called my name yet."},
      {t:'have/has + past participle',d:'Have you seen the new movie? Yes, I have.'},
    ],
    check:{q:"The nurse hasn't called my name _______.",o:['yet','already','ever','since'],a:0,en:'نفي → yet',ar:'في النفي → yet'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'have/has',c:'v'},{t:'+',c:'p'},{t:'already / … yet + past participle',c:'k'}],
    compare:[
      {c1:"I've already seen it. (إثبات)",c2:"I haven't seen it yet. (نفي)",ar:'already ↔ yet'},
      {c1:'Have you decided yet?',c2:"Yes, I've already decided.",ar:'سؤال ↔ جواب'},
    ],
    examples:[
      {s:"I've already seen the doctor.",tr:'رأيت الطبيب بالفعل.',ar:'already',ok:true},
      {s:"The nurse hasn't called my name yet.",tr:'لم تنادِ الممرّضة اسمي بعد.',ar:'yet في النفي',ok:true},
      {s:"I've seen the doctor yet.",wrong:'seen … yet (إثبات)',right:'already seen',tr:'في الإثبات نستخدم already.',ok:false},
    ]
  },
  {
    title:'so (cause and result)', ar:'so للتعبير عن النتيجة (لذلك)',
    rule:'نربط السبب بالنتيجة بـ so (لذلك). كذلك: but (لكن) · or (أو) · and (و).',
    parts:[
      {t:'سبب + so + نتيجة',d:"I didn't have any cash, so I used my credit card."},
      {t:'but / or / and',d:'اختر الرابط المناسب للمعنى.'},
      {t:'so ≠ but',d:'so = نتيجة · but = تضادّ.'},
    ],
    check:{q:'The room was empty, _______ I turned off the light.',o:['so','but','yet','or'],a:0,en:'نتيجة → so',ar:'النتيجة → so'},
    formula:[{t:'جملة (سبب)',c:'s'},{t:',',c:'p'},{t:'so',c:'v'},{t:'+',c:'p'},{t:'جملة (نتيجة)',c:'k'}],
    compare:[
      {c1:"I had no cash, so I used a card. (نتيجة)",c2:'I had cash, but I used a card. (تضادّ)',ar:'so ↔ but'},
      {c1:'The room was empty, so I left.',c2:'It was late, so we went home.',ar:'أمثلة'},
    ],
    examples:[
      {s:"I didn't have any cash, so I used my credit card.",tr:'لم يكن معي نقد، لذلك استخدمت بطاقتي.',ar:'so + نتيجة',ok:true},
      {s:'The room was empty, so I turned off the light.',tr:'كانت الغرفة فارغة، لذلك أطفأت الضوء.',ar:'so',ok:true},
      {s:'The room was empty, but I turned off the light.',wrong:'but (تضادّ)',right:'so (نتيجة)',tr:'للنتيجة نستخدم so.',ok:false},
    ]
  },
  {
    title:'Decision verbs', ar:'أفعال القرار (accept · refuse · change one\'s mind)',
    rule:'للتعبير عن القرارات: accept (يقبل) · refuse / turn down (يرفض) · offer (يعرض) · change one\'s mind (يغيّر رأيه) · make up one\'s mind (يحسم أمره).',
    parts:[
      {t:'accept / refuse',d:'Yes, I accepted it. · No, he turned it down.'},
      {t:'change one\'s mind',d:'He changed his mind.'},
      {t:'retire',d:'He retired last year.'},
    ],
    check:{q:'Did Jim take the job? No, he _______.',o:['turned it down','offered it','accepted it','educated it'],a:0,en:'رفض → turned it down',ar:'رفض العرض → turned it down'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'accept / refuse / turn down',c:'v'},{t:'+',c:'p'},{t:'it / the offer',c:'k'}],
    compare:[
      {c1:'Yes, I accepted it.',c2:'No, I turned it down.',ar:'accept ↔ turn down'},
      {c1:'He changed his mind.',c2:'She made up her mind.',ar:'تغيير/حسم القرار'},
    ],
    examples:[
      {s:'Are you going to take the job? Yes, I accepted it.',tr:'هل ستقبل الوظيفة؟ نعم، قبلتها.',ar:'accept',ok:true},
      {s:'He changed his mind when he realized he had to study.',tr:'غيّر رأيه حين أدرك أنّ عليه المذاكرة.',ar:'change one\'s mind',ok:true},
      {s:'No, he turned down its mind.',wrong:'turned down its mind',right:'turned it down',tr:'رفض العرض: turned it down.',ok:false},
    ]
  }
],
l3:[
  {
    title:'could / may / might (possibility)', ar:'could / may / might للاحتمال (رُبّما)',
    rule:'للتعبير عن الاحتمال والتخمين نستخدم could / may / might + فعل مجرّد (بمعنى رُبّما).',
    parts:[
      {t:'could / may / might + فعل',d:'She could be at home. · She might be at lunch.'},
      {t:'السؤال بـ could',d:'What could this be? Could it be a desk?'},
      {t:'بلا to',d:'نقول might be (وليس might to be).'},
    ],
    check:{q:'Where could Ann be? She _______ be at the doctor\'s.',o:['might','musts','is','does'],a:0,en:'احتمال → might',ar:'رُبّما → might'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'could / may / might',c:'v'},{t:'+',c:'p'},{t:'فعل مجرّد',c:'k'}],
    compare:[
      {c1:'She could be at home.',c2:'She might be at lunch.',ar:'could ↔ might'},
      {c1:'What could this be?',c2:'It could be a box.',ar:'السؤال والجواب'},
    ],
    examples:[
      {s:'She could be in a meeting.',tr:'رُبّما تكون في اجتماع.',ar:'could + be',ok:true},
      {s:'It might be a box.',tr:'قد يكون صندوقاً.',ar:'might + be',ok:true},
      {s:'She might to be at lunch.',wrong:'might to be',right:'might be',tr:'بعد might فعل مجرّد: might be.',ok:false},
    ]
  },
  {
    title:'Reported speech (said)', ar:'الكلام المنقول بـ said (قال)',
    rule:'لنقل كلام شخص: said (that) + جملة، مع إرجاع الفعل خطوة إلى الماضي. want → wanted · study → studied.',
    parts:[
      {t:'said (that) + جملة',d:'He said (that) he wanted to go to Europe.'},
      {t:'إرجاع الفعل',d:'"I want" → He said he wanted.'},
      {t:'مع الحاضر المستمر',d:'"I\'m going" → He said he was going.'},
    ],
    check:{q:'I want to go to Europe. What did he say? He said he _______ to go to Europe.',o:['wanted','wants','want','will want'],a:0,en:'إرجاع للماضي → wanted',ar:'ماضٍ → wanted'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'said (that)',c:'v'},{t:'+',c:'p'},{t:'جملة بالماضي',c:'k'}],
    compare:[
      {c1:'"I want to go."',c2:'He said he wanted to go.',ar:'مباشر ↔ منقول'},
      {c1:'"They study here."',c2:'He said they studied here.',ar:'إرجاع الفعل'},
    ],
    examples:[
      {s:'He said he wanted to go to Europe next year.',tr:'قال إنه يريد الذهاب إلى أوروبا العام القادم.',ar:'said + wanted',ok:true},
      {s:'He said that they studied in his room on Tuesdays.',tr:'قال إنهم يدرسون في غرفته أيام الثلاثاء.',ar:'said + studied',ok:true},
      {s:'He said he wants to go.',wrong:'said … wants',right:'said … wanted',tr:'نُرجع الفعل للماضي: wanted.',ok:false},
    ]
  },
  {
    title:'-ing vs -ed adjectives', ar:'الصفات المنتهية بـ ing و ed',
    rule:'صفة ing تصف الشيء (interesting = مُشوّق)، وصفة ed تصف الشعور (interested = مهتمّ). كذلك: confusing / confused · tiring / tired.',
    parts:[
      {t:'-ing = صفة الشيء',d:'an interesting trip · a confusing lesson.'},
      {t:'-ed = صفة الشعور',d:'I was interested. · I was confused.'},
      {t:'انتبه للفرق',d:'The trip was interesting → I was interested.'},
    ],
    check:{q:'How was your trip? It was _______.',o:['interesting','interested','interest','interests'],a:0,en:'يصف الشيء → interesting',ar:'صفة الشيء → interesting'},
    formula:[{t:'الشيء',c:'s'},{t:'→',c:'p'},{t:'-ing',c:'v'},{t:'· الشعور →',c:'p'},{t:'-ed',c:'k'}],
    compare:[
      {c1:'The trip was interesting. (الشيء)',c2:'I was interested. (الشعور)',ar:'ing ↔ ed'},
      {c1:'a confusing lesson',c2:'a confused student',ar:'confusing ↔ confused'},
    ],
    examples:[
      {s:'The trip was very interesting.',tr:'كانت الرحلة مشوّقة جداً.',ar:'interesting (الشيء)',ok:true},
      {s:'I was interested in the city.',tr:'كنت مهتمّاً بالمدينة.',ar:'interested (الشعور)',ok:true},
      {s:'How was your trip? It was interested.',wrong:'interested',right:'interesting',tr:'لوصف الشيء نستخدم interesting.',ok:false},
    ]
  }
],
l4:[
  {
    title:'used to / would (past habits)', ar:'used to / would للعادات الماضية',
    rule:'للتعبير عن عادةٍ ماضية توقّفت: used to + فعل مجرّد، أو would + فعل. السؤال والنفي: Did you use to …? · didn\'t use to.',
    parts:[
      {t:'used to + فعل',d:'I used to live in Paris. · We used to hunt in winter.'},
      {t:'would + فعل',d:'We would go to Bluebird Lake.'},
      {t:'السؤال/النفي',d:'Did you use to fish? · We didn\'t use to fish often.'},
    ],
    check:{q:'I _______ live in Paris ten years ago.',o:['used to','use to','would to','once'],a:0,en:'عادة ماضية → used to',ar:'كان يفعل سابقاً → used to'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'used to / would',c:'v'},{t:'+',c:'p'},{t:'فعل مجرّد',c:'k'}],
    compare:[
      {c1:'I used to fish. (عادة ماضية)',c2:'Did you use to fish? (سؤال)',ar:'used to ↔ use to'},
      {c1:'We would go every weekend.',c2:"We wouldn't hunt in summer.",ar:'would'},
    ],
    examples:[
      {s:'We used to hunt in winter.',tr:'كنّا نصطاد في الشتاء.',ar:'used to + hunt',ok:true},
      {s:'Did you use to fish often?',tr:'هل كنت تصطاد السمك كثيراً؟',ar:'السؤال: use to',ok:true},
      {s:'Years ago, I used go to the beach.',wrong:'used go',right:'used to go',tr:'الصواب: used to + فعل: used to go.',ok:false},
    ]
  },
  {
    title:'Comparatives: -er + than', ar:'المقارنة بإضافة -er + than',
    rule:'للمقارنة بين شيئين نضيف -er للصفة/الظرف القصير + than. fast → faster · early → earlier · near → nearer.',
    parts:[
      {t:'صفة + er + than',d:'He drives faster than you.'},
      {t:'ظرف + er + than',d:'Sara arrives earlier than Joe.'},
      {t:'y → ier',d:'early → earlier · happy → happier.'},
    ],
    check:{q:'Brenda got up _______ Sue.',o:['earlier than','early than','earlier','early'],a:0,en:'مقارنة → earlier than',ar:'أبكر من → earlier than'},
    formula:[{t:'A',c:'s'},{t:'+ فعل +',c:'p'},{t:'adj/adv + er',c:'v'},{t:'+',c:'p'},{t:'than + B',c:'k'}],
    compare:[
      {c1:'faster than (سريع)',c2:'earlier than (مبكّر)',ar:'أمثلة'},
      {c1:'Kay lives nearer than Ann.',c2:'He shoots straighter than Larry.',ar:'nearer · straighter'},
    ],
    examples:[
      {s:'He drives faster than you.',tr:'يقود أسرع منك.',ar:'faster than',ok:true},
      {s:'Kay lives nearer to the mall than Ann.',tr:'تسكن كاي أقرب إلى المركز من آن.',ar:'nearer than',ok:true},
      {s:'We can wash small cars fast than big cars.',wrong:'fast than',right:'faster than',tr:'المقارنة: faster than.',ok:false},
    ]
  },
  {
    title:'Connectors: so · but · or', ar:'الروابط: so · but · or · and',
    rule:'and (و) للإضافة · but (لكن) للتضادّ · or (أو) للاختيار · so (لذلك) للنتيجة.',
    parts:[
      {t:'so = نتيجة',d:'Glen wanted to swim, so he went to the lake.'},
      {t:'but = تضادّ',d:"Ann tried to fix her fan, but it still doesn't work."},
      {t:'or = اختيار',d:'Do you have to buy a new car, or could you use this one?'},
    ],
    check:{q:'Glen wanted to swim, _______ he went to the lake.',o:['so','but','or','if'],a:0,en:'نتيجة → so',ar:'النتيجة → so'},
    formula:[{t:'جملة',c:'s'},{t:',',c:'p'},{t:'so / but / or',c:'v'},{t:'+',c:'p'},{t:'جملة',c:'k'}],
    compare:[
      {c1:'…, so he went. (نتيجة)',c2:"…, but it doesn't work. (تضادّ)",ar:'so ↔ but'},
      {c1:'buy a new car, or use this one? (اختيار)',c2:'soccer, and you play. (إضافة)',ar:'or ↔ and'},
    ],
    examples:[
      {s:'Glen wanted to swim, so he went to the lake.',tr:'أراد جلين السباحة، لذلك ذهب إلى البحيرة.',ar:'so',ok:true},
      {s:"Ann tried to fix her fan, but it still doesn't work.",tr:'حاولت آن إصلاح مروحتها، لكنها ما زالت لا تعمل.',ar:'but',ok:true},
      {s:'Ann tried to fix her fan, so it still works.',wrong:'so (نتيجة خاطئة)',right:'but (تضادّ)',tr:'للتضادّ نستخدم but.',ok:false},
    ]
  }
]
};

// ═══════════════════════════════════════
// WO — رتّب الجملة (word order)
// ═══════════════════════════════════════
const WO={
l1:[
  {words:['If','we','have','free','time','we','will','go','to','the','beach'],ans:'If we have free time, we will go to the beach.',tr:'إذا كان لدينا وقت فراغ، سنذهب إلى الشاطئ.',ar:'الشرط الأول'},
  {words:['Where','will','you','go','if','you','have','free','time'],ans:'Where will you go if you have free time?',tr:'إلى أين ستذهب إذا كان لديك وقت فراغ؟',ar:'سؤال شرطي'},
  {words:['I','have','gone','to','this','school','for','two','months'],ans:'I have gone to this school for two months.',tr:'أدرس في هذه المدرسة منذ شهرين.',ar:'المضارع التام + for'},
  {words:['Jane','has','taught','English','since','1990'],ans:'Jane has taught English since 1990.',tr:'تُدرّس جين الإنجليزية منذ 1990.',ar:'has taught + since'},
  {words:['I','expect','to','leave','at','noon'],ans:'I expect to leave at noon.',tr:'أتوقّع أن أغادر ظهراً.',ar:'expect to + فعل'},
  {words:['The','roads','were','slippery','after','it','snowed'],ans:'The roads were slippery after it snowed.',tr:'كانت الطرق زلقة بعد أن أثلجت.',ar:'الطقس والطرق'},
  {words:['These','magazines','belong','to','Pat'],ans:'These magazines belong to Pat.',tr:'هذه المجلّات تخصّ بات.',ar:'belong to'},
],
l2:[
  {words:['I','have','already','seen','the','doctor'],ans:'I have already seen the doctor.',tr:'رأيت الطبيب بالفعل.',ar:'already'},
  {words:['The','nurse','has','not','called','my','name','yet'],ans:'The nurse has not called my name yet.',tr:'لم تنادِ الممرّضة اسمي بعد.',ar:'yet في النفي'},
  {words:['I','want','a','degree','in','business'],ans:'I want a degree in business.',tr:'أريد شهادة في إدارة الأعمال.',ar:'التعليم'},
  {words:['He','changed','his','mind','last','week'],ans:'He changed his mind last week.',tr:'غيّر رأيه الأسبوع الماضي.',ar:'change one\'s mind'},
  {words:['I','had','no','cash','so','I','used','my','card'],ans:'I had no cash, so I used my card.',tr:'لم يكن معي نقد، لذلك استخدمت بطاقتي.',ar:'so للنتيجة'},
  {words:['Carl','is','a','professional','soccer','player'],ans:'Carl is a professional soccer player.',tr:'كارل لاعب كرة قدم محترف.',ar:'المهن'},
  {words:['Did','you','decide','to','take','the','job'],ans:'Did you decide to take the job?',tr:'هل قرّرت قبول الوظيفة؟',ar:'القرارات'},
],
l3:[
  {words:['We','will','add','on','a','new','room'],ans:'We will add on a new room.',tr:'سنُضيف غرفة جديدة.',ar:'add on'},
  {words:['She','could','be','in','a','meeting'],ans:'She could be in a meeting.',tr:'رُبّما تكون في اجتماع.',ar:'could للاحتمال'},
  {words:['He','said','he','wanted','to','go','to','Europe'],ans:'He said he wanted to go to Europe.',tr:'قال إنه يريد الذهاب إلى أوروبا.',ar:'الكلام المنقول'},
  {words:['The','meeting','took','place','last','night'],ans:'The meeting took place last night.',tr:'جرى الاجتماع الليلة الماضية.',ar:'take place'},
  {words:['I','moved','to','the','suburbs','last','year'],ans:'I moved to the suburbs last year.',tr:'انتقلت إلى الضواحي العام الماضي.',ar:'suburb'},
  {words:['The','trip','was','very','interesting'],ans:'The trip was very interesting.',tr:'كانت الرحلة مشوّقة جداً.',ar:'صفة ing'},
  {words:['We','need','a','good','builder'],ans:'We need a good builder.',tr:'نحتاج بنّاءً جيّداً.',ar:'البناء'},
],
l4:[
  {words:['We','used','to','hunt','in','winter'],ans:'We used to hunt in winter.',tr:'كنّا نصطاد في الشتاء.',ar:'used to'},
  {words:['We','would','go','to','the','lake'],ans:'We would go to the lake.',tr:'كنّا نذهب إلى البحيرة.',ar:'would للعادة'},
  {words:['He','drives','faster','than','you'],ans:'He drives faster than you.',tr:'يقود أسرع منك.',ar:'المقارنة -er + than'},
  {words:['Kay','lives','nearer','than','Ann'],ans:'Kay lives nearer than Ann.',tr:'تسكن كاي أقرب من آن.',ar:'nearer than'},
  {words:['Did','you','use','to','fish','often'],ans:'Did you use to fish often?',tr:'هل كنت تصطاد السمك كثيراً؟',ar:'السؤال use to'},
  {words:['Glen','wanted','to','swim','so','he','went'],ans:'Glen wanted to swim, so he went.',tr:'أراد جلين السباحة، لذلك ذهب.',ar:'so'},
  {words:['I','caught','plenty','of','fish','today'],ans:'I caught plenty of fish today.',tr:'اصطدت الكثير من السمك اليوم.',ar:'catch → caught'},
]
};

// ═══════════════════════════════════════
// EE — «اختبر» (من تمرين EE الرسمي: Circle the best answer)
// ═══════════════════════════════════════
const EE={
l1:[
  {q:"Bill: Is that movie on TV finished yet? Tim: Yes, it was _______ about 15 minutes ago.",o:["out","over","up","off"],a:1,en:"finished → over",ar:'انتهى → over',tr:'بيل: هل انتهى الفيلم على التلفاز؟ تيم: نعم، انتهى قبل نحو ١٥ دقيقة.'},
  {q:"How long was the movie? It _______ about three hours.",o:["belonged","stayed","lasted","satisfied"],a:2,en:"continued → lasted",ar:'استمرّ/دام → lasted',tr:'كم كان طول الفيلم؟ دام نحو ثلاث ساعات.'},
  {q:"Is Linda still in Italy? Yes, she wants to _______ there until her course ends in December.",o:["stay","blow","connect","slip"],a:0,en:"remain → stay",ar:'تبقى → stay',tr:'هل ما زالت ليندا في إيطاليا؟ نعم، تريد البقاء هناك حتى تنتهي دورتها في ديسمبر.'},
  {q:"What happened to Paul? He _______ on the wet floor and broke his arm.",o:["expected","remained","refunded","slipped"],a:3,en:"lost footing → slipped",ar:'انزلق → slipped',tr:'ماذا حدث لبول؟ انزلق على الأرض المبتلّة وكسر ذراعه.'},
  {q:"All of the students are still here. _______ of them left early.",o:["A few","One","None","All"],a:2,en:"not any → none",ar:'لا أحد → none',tr:'كلّ الطلاب ما زالوا هنا، لم يغادر أحدٌ منهم مبكّراً.'},
  {q:"It looks like the _______ has blown away the clouds.",o:["humidity","beach","heat","wind"],a:3,en:"blows → wind",ar:'التي تهبّ → الرياح (wind)',tr:'يبدو أنّ الرياح قد أبعدت الغيوم.'},
  {q:"Bill: Does the meeting begin at 5:00 or 5:30? Tim: At 5:30. Bill: Thanks for _______.",o:["expecting that to","clearing that up","being over","giving back"],a:1,en:"explaining → clearing that up",ar:'التوضيح → clearing that up',tr:'بيل: هل يبدأ الاجتماع في الخامسة أم الخامسة والنصف؟ تيم: في الخامسة والنصف. بيل: شكراً على التوضيح.'},
  {q:"Bill: Are these your magazines? Tim: No, they're not mine. They _______ to Pat.",o:["belong","stay","blow","slip"],a:0,en:"owned by → belong",ar:'تخصّ → belong',tr:'بيل: هل هذه مجلّاتك؟ تيم: لا، ليست لي، إنها تخصّ بات.'},
  {q:"Bill: Where are you going on your vacation? Tim: I want to go to the _______ and enjoy the beach.",o:["wind","mountains","sea","heat"],a:2,en:"beach → sea",ar:'الشاطئ → البحر (sea)',tr:'بيل: إلى أين ستذهب في إجازتك؟ تيم: أريد الذهاب إلى البحر والاستمتاع بالشاطئ.'},
  {q:"Bill: Is the water in the lake still cold? Tim: Yes, it's _______ outside.",o:["deep","freezing","humid","raining"],a:1,en:"very cold → freezing",ar:'شديد البرودة → freezing',tr:'بيل: هل ما زال ماء البحيرة بارداً؟ تيم: نعم، الجوّ متجمّد في الخارج.'},
  {q:"After it snowed, the roads were _______.",o:["clear","hot","slippery","deep"],a:2,en:"icy → slippery",ar:'زلِقة → slippery',tr:'بعد أن أثلجت، أصبحت الطرق زلقة.'},
  {q:"An icy road can be _______ to drive on.",o:["easy","frightened","quiet","dangerous"],a:3,en:"unsafe → dangerous",ar:'غير آمنة → خطيرة (dangerous)',tr:'الطريق الجليدية قد تكون خطيرة للقيادة عليها.'},
],
l2:[
  {q:"Bill: Were you in Hawaii last year? Tim: Yes, I had a _______ there for a year.",o:["tour of duty","right of way","sign of refusal","change of mind"],a:0,en:"military stay → tour of duty",ar:'فترة خدمة → tour of duty',tr:'بيل: هل كنت في هاواي العام الماضي؟ تيم: نعم، كانت لي فترة خدمة هناك لمدّة عام.'},
  {q:"Mrs. Meyers _______ New York many times.",o:["visit","visiting","has visited","to visit"],a:2,en:"present perfect → has visited",ar:'المضارع التام → has visited',tr:'زارت السيّدة مايرز نيويورك مرّاتٍ كثيرة.'},
  {q:"Bill: What did you talk about in class? Tim: We had a _______ about Central America.",o:["decision","commercial","refusal","discussion"],a:3,en:"talk → discussion",ar:'حديث/نقاش → discussion',tr:'بيل: عمّ تحدّثتم في الصف؟ تيم: أجرينا نقاشاً عن أمريكا الوسطى.'},
  {q:"He changed _______ when he realized he had to study for a test.",o:["professions","tires","his mind","his job"],a:2,en:"reconsider → his mind",ar:'غيّر رأيه → his mind',tr:'غيّر رأيه حين أدرك أنّ عليه المذاكرة لاختبار.'},
  {q:"Some parents _______ their children at home instead of sending them to school.",o:["study","accept","retire","educate"],a:3,en:"teach → educate",ar:'يُعلّم → educate',tr:'بعض الآباء يُعلّمون أبناءهم في البيت بدلاً من إرسالهم للمدرسة.'},
  {q:"Bill: Were the instructions _______? Tim: No, they weren't. I'm still confused.",o:["clear","happy","deep","unpleasant"],a:0,en:"easy to understand → clear",ar:'واضحة → clear',tr:'بيل: هل كانت التعليمات واضحة؟ تيم: لا، ما زلت مرتبكاً.'},
  {q:"Bill: Are you going to take the job in Dallas? Tim: Yes, I _______ it.",o:["offered","refused","decided","accepted"],a:3,en:"say yes → accepted",ar:'وافق → accepted',tr:'بيل: هل ستقبل الوظيفة في دالاس؟ تيم: نعم، قبلتها.'},
  {q:"Bill: Where does your father work? Tim: He doesn't work anymore. He _______ last year.",o:["accepted","retired","stalled","refused"],a:1,en:"stopped working → retired",ar:'تقاعد → retired',tr:'بيل: أين يعمل والدك؟ تيم: لم يعد يعمل، تقاعد العام الماضي.'},
  {q:"Bill: Did Jim take the job in New York? Tim: No, he _______.",o:["turned it down","made up its mind","thought it over","changed your mind"],a:0,en:"refused → turned it down",ar:'رفض → turned it down',tr:'بيل: هل قبل جيم الوظيفة في نيويورك؟ تيم: لا، رفضها.'},
  {q:"Bill: Are you still teaching? Tim: No, I have another _______. I now work for a bank.",o:["channel","career","course","future"],a:1,en:"work life → career",ar:'مسار مهني → career',tr:'بيل: هل ما زلت تُدرّس؟ تيم: لا، لديّ مسار مهني آخر، أعمل الآن في بنك.'},
  {q:"Bill: Are you going to college? Tim: Yes, I'm _______ some interesting classes.",o:["refusing","offering","taking","refunding"],a:2,en:"enroll → taking",ar:'يسجّل/يأخذ → taking',tr:'بيل: هل ستذهب إلى الكلّية؟ تيم: نعم، سآخذ بعض المقرّرات المشوّقة.'},
  {q:"Bill: Have you seen the new movie about Texas? Tim: Yes, I've _______ seen it.",o:["yet","still","no longer","already"],a:3,en:"done → already",ar:'بالفعل → already',tr:'بيل: هل شاهدت الفيلم الجديد عن تكساس؟ تيم: نعم، شاهدته بالفعل.'},
  {q:"Amy is fifteen years old. She goes to a(n) _______ school.",o:["middle","high","elementary","grade"],a:1,en:"age 15 → high",ar:'عمر ١٥ → ثانوية (high)',tr:'إيمي في الخامسة عشرة، تذهب إلى المدرسة الثانوية.'},
  {q:"Mr. Grant's a dentist. That's his _______.",o:["education","name","profession","college"],a:2,en:"job → profession",ar:'مهنة → profession',tr:'السيّد غرانت طبيب أسنان، تلك مهنته.'},
  {q:"The room was empty, _______ I turned off the light.",o:["but","yet","or","so"],a:3,en:"result → so",ar:'النتيجة → so',tr:'كانت الغرفة فارغة، لذلك أطفأت الضوء.'},
  {q:"Carl is a _______ soccer player. He makes a lot of money.",o:["professional","medical","horizontal","vertical"],a:0,en:"paid expert → professional",ar:'محترف → professional',tr:'كارل لاعب كرة قدم محترف، يكسب مالاً كثيراً.'},
  {q:"When we make plans for the next five years, we make plans for the _______.",o:["field","time","degree","future"],a:3,en:"years ahead → future",ar:'المستقبل → future',tr:'حين نضع خططاً للسنوات الخمس القادمة، فإننا نخطّط للمستقبل.'},
  {q:"Jim went to college. After four years he got a(n) _______.",o:["master's diploma","associate degree","bachelor's degree","associate diploma"],a:2,en:"4-year college → bachelor's",ar:'أربع سنوات → بكالوريوس',tr:'ذهب جيم إلى الكلّية، وبعد أربع سنوات حصل على البكالوريوس.'},
  {q:"Bill: Do you want me to pick you up after the game? Tim: No, thanks. Paul has already _______ to let me ride in his car.",o:["offered","refused","retired","charged"],a:0,en:"volunteered → offered",ar:'عرض → offered',tr:'بيل: أتريدني أن أُقلّك بعد المباراة؟ تيم: لا شكراً، عرض بول بالفعل أن يُقلّني في سيّارته.'},
],
l3:[
  {q:"Dan: I'm going to the beach. Ann: What did he say? Sam: He said he _______ to the beach.",o:["went","will go","goes","was going"],a:3,en:"reported → was going",ar:'كلام منقول → was going',tr:'دان: سأذهب إلى الشاطئ. آن: ماذا قال؟ سام: قال إنه ذاهب إلى الشاطئ.'},
  {q:"Dan: They study in my room on Tuesdays. Sam: He said that they _______ in his room on Tuesdays.",o:["study","will studying","studied","are studying"],a:2,en:"reported → studied",ar:'كلام منقول → studied',tr:'قال إنهم يدرسون في غرفته أيام الثلاثاء.'},
  {q:"We will add on to our house because we want _______.",o:["more advice","more time","another job","another room"],a:3,en:"add on → another room",ar:'توسعة → غرفة أخرى',tr:'سنُوسّع بيتنا لأننا نريد غرفة أخرى.'},
  {q:"I've moved to the suburbs. Now I live _______.",o:["downtown","far from the city","near the school","by a lake"],a:1,en:"suburbs → far from city",ar:'الضواحي → بعيداً عن المدينة',tr:'انتقلت إلى الضواحي، أعيش الآن بعيداً عن المدينة.'},
  {q:"A lot of problems mean a lot of _______.",o:["trouble","addition","practice","room"],a:0,en:"problems → trouble",ar:'مشاكل → متاعب (trouble)',tr:'المشاكل الكثيرة تعني متاعب كثيرة.'},
  {q:"A: How was your trip? B: It was _______.",o:["interested","interesting","interest","interests"],a:1,en:"describes thing → interesting",ar:'يصف الشيء → interesting',tr:'أ: كيف كانت رحلتك؟ ب: كانت مشوّقة.'},
  {q:"My television can also _______ movies on tape.",o:["boil","heat","play","solve"],a:2,en:"show → play",ar:'يشغّل → play',tr:'يستطيع تلفازي أيضاً تشغيل الأفلام على الشريط.'},
  {q:"_______ it rains, then I won't go.",o:["Then","If","And","But"],a:1,en:"condition → If",ar:'شرط → If',tr:'إذا أمطرت، فلن أذهب.'},
  {q:"They fixed the house, but they will leave the old garage. They won't _______ it.",o:["see","change","talk about","walk to"],a:1,en:"keep as is → change",ar:'لن يغيّروه → change',tr:'أصلحوا البيت لكنهم سيتركون المرآب القديم، لن يغيّروه.'},
  {q:"He's a builder. He _______.",o:["cooks good food","teaches many people","makes new houses","records new music"],a:2,en:"builder → makes houses",ar:'بنّاء → يبني بيوتاً',tr:'إنه بنّاء، يبني بيوتاً جديدة.'},
  {q:"A: Did you understand the directions? B: No, they were _______.",o:["confused","confusing","confuse","conduses"],a:1,en:"describes thing → confusing",ar:'يصف الشيء → confusing',tr:'أ: هل فهمت التعليمات؟ ب: لا، كانت مُربِكة.'},
  {q:"Do you like my new fireplace? It _______.",o:["keeps the house warm","looks like a sports car","freezes food very quickly","cleans my clothes well"],a:0,en:"fireplace → keeps warm",ar:'المدفأة → تُدفئ',tr:'هل تعجبك مدفأتي الجديدة؟ إنها تُبقي البيت دافئاً.'},
],
l4:[
  {q:"Brenda got up _______ Sue.",o:["early","early than","earlier","earlier than"],a:3,en:"comparison → earlier than",ar:'مقارنة → earlier than',tr:'استيقظت بريندا أبكر من سو.'},
  {q:"Did you _______ sing when you were in school?",o:["would","would to","used to","use to"],a:3,en:"past habit question → use to",ar:'سؤال العادة → use to',tr:'هل كنت تغنّي حين كنت في المدرسة؟'},
  {q:"Glen wanted to swim, _______ he went to the lake.",o:["so","but","if","or"],a:0,en:"result → so",ar:'النتيجة → so',tr:'أراد جلين السباحة، لذلك ذهب إلى البحيرة.'},
  {q:"Years ago, I _______ to the beach every weekend.",o:["used go","use to go","used to go","used to going"],a:2,en:"past habit → used to go",ar:'عادة ماضية → used to go',tr:'قبل سنوات، كنت أذهب إلى الشاطئ كلّ عطلة أسبوع.'},
  {q:"We can wash small cars _______ big cars.",o:["fast than","more faster","more faster than","faster than"],a:3,en:"comparison → faster than",ar:'مقارنة → faster than',tr:'نستطيع غسل السيّارات الصغيرة أسرع من الكبيرة.'},
  {q:"Ann tried to fix her fan, _______ it still doesn't work.",o:["so","but","if","or"],a:1,en:"contrast → but",ar:'تضادّ → but',tr:'حاولت آن إصلاح مروحتها، لكنها ما زالت لا تعمل.'},
  {q:"I _______ live in Paris ten years ago.",o:["would","used to","once","twice"],a:1,en:"past habit → used to",ar:'كنت أعيش → used to',tr:'كنت أعيش في باريس قبل عشر سنوات.'},
  {q:"Where _______ go fishing?",o:["did you use to","do you used to","you used to","did you would"],a:0,en:"question → did you use to",ar:'السؤال → did you use to',tr:'أين كنت تذهب لصيد السمك؟'},
  {q:"You enjoy playing soccer, _______ you play every weekend.",o:["but","and","or","if"],a:1,en:"addition → and",ar:'إضافة → and',tr:'أنت تستمتع بلعب كرة القدم، وتلعب كلّ عطلة أسبوع.'},
  {q:"Who shoots _______ Larry?",o:["straight than","straighter than","straight","straighter"],a:1,en:"comparison → straighter than",ar:'مقارنة → straighter than',tr:'من يُصوّب أدقّ من لاري؟'},
  {q:"_______ every night when you were in high school?",o:["Would study you","Study you would","You study would","Would you study"],a:3,en:"question order → Would you study",ar:'ترتيب السؤال → Would you study',tr:'هل كنت تذاكر كلّ ليلة حين كنت في الثانوية؟'},
  {q:"Who _______ play with toy soldiers?",o:["use","used","use to","used to"],a:3,en:"past habit → used to",ar:'عادة ماضية → used to',tr:'من كان يلعب بجنود اللعب؟'},
  {q:"Do you have to buy a new car, _______ could you use this one for another year?",o:["but","and","or","if"],a:2,en:"choice → or",ar:'اختيار → or',tr:'هل يجب أن تشتري سيّارة جديدة، أم يمكنك استخدام هذه لعام آخر؟'},
]
};

// ═══════════════════════════════════════
// REVIEW (مراجعة شاملة) — مختارات من قواعد ومفردات الدروس الأربعة
// ═══════════════════════════════════════
const REVIEW=[
  // — الدرس 1: الشرط والطقس —
  {q:"If we have free time, we _______ go to the beach.",o:["would","will","are","have"],a:1,en:"result → will",ar:'جواب الشرط → will',tr:'إذا كان لدينا وقت فراغ، سنذهب إلى الشاطئ.'},
  {q:"After it snowed, the roads were _______.",o:["clear","slippery","hot","deep"],a:1,en:"icy → slippery",ar:'زلِقة → slippery',tr:'بعد أن أثلجت، أصبحت الطرق زلقة.'},
  {q:"John has owned his car _______ 2001.",o:["for","since","ago","during"],a:1,en:"point → since",ar:'نقطة زمنية → since',tr:'يملك جون سيّارته منذ عام 2001.'},
  {q:"Is Linda still in Italy? Yes, she wants to _______ there.",o:["blow","stay","slip","connect"],a:1,en:"remain → stay",ar:'تبقى → stay',tr:'هل ما زالت ليندا في إيطاليا؟ نعم، تريد البقاء هناك.'},
  {q:"All of the students are here. _______ of them left early.",o:["A few","None","One","All"],a:1,en:"not any → none",ar:'لا أحد → none',tr:'كلّ الطلاب هنا، لم يغادر أحدٌ مبكّراً.'},
  // — الدرس 2: التعليم والقرارات —
  {q:"The nurse hasn't called my name _______.",o:["already","yet","ever","since"],a:1,en:"negative → yet",ar:'في النفي → yet',tr:'لم تنادِ الممرّضة اسمي بعد.'},
  {q:"I didn't have any cash, _______ I used my card.",o:["but","so","or","yet"],a:1,en:"result → so",ar:'النتيجة → so',tr:'لم يكن معي نقد، لذلك استخدمت بطاقتي.'},
  {q:"Jim went to college. After four years he got a _______.",o:["master's diploma","bachelor's degree","associate diploma","grade"],a:1,en:"4 years → bachelor's",ar:'أربع سنوات → بكالوريوس',tr:'ذهب جيم للكلّية، وبعد أربع سنوات حصل على البكالوريوس.'},
  {q:"Did Jim take the job? No, he _______.",o:["accepted it","turned it down","offered it","educated it"],a:1,en:"refused → turned it down",ar:'رفض → turned it down',tr:'هل قبل جيم الوظيفة؟ لا، رفضها.'},
  {q:"Carl is a _______ soccer player.",o:["medical","professional","vertical","horizontal"],a:1,en:"paid expert → professional",ar:'محترف → professional',tr:'كارل لاعب كرة قدم محترف.'},
  // — الدرس 3: البناء والاحتمال —
  {q:"Where could Ann be? She _______ be at lunch.",o:["is","might","does","musts"],a:1,en:"possibility → might",ar:'رُبّما → might',tr:'أين قد تكون آن؟ رُبّما تكون على الغداء.'},
  {q:"I want to go to Europe. He said he _______ to go to Europe.",o:["wants","wanted","will want","want"],a:1,en:"reported → wanted",ar:'كلام منقول → wanted',tr:'قال إنه يريد الذهاب إلى أوروبا.'},
  {q:"How was your trip? It was _______.",o:["interested","interesting","interest","interests"],a:1,en:"describes thing → interesting",ar:'يصف الشيء → interesting',tr:'كيف كانت رحلتك؟ كانت مشوّقة.'},
  {q:"We will add on to our house because we want _______.",o:["more advice","another room","another job","more time"],a:1,en:"add on → another room",ar:'توسعة → غرفة أخرى',tr:'سنُوسّع بيتنا لأننا نريد غرفة أخرى.'},
  {q:"A lot of problems mean a lot of _______.",o:["addition","trouble","room","practice"],a:1,en:"problems → trouble",ar:'مشاكل → متاعب',tr:'المشاكل الكثيرة تعني متاعب كثيرة.'},
  // — الدرس 4: العادات الماضية والمقارنة —
  {q:"Years ago, I _______ to the beach every weekend.",o:["use to go","used to go","used go","used to going"],a:1,en:"past habit → used to go",ar:'عادة ماضية → used to go',tr:'قبل سنوات، كنت أذهب إلى الشاطئ كلّ عطلة أسبوع.'},
  {q:"He drives _______ you.",o:["fast than","faster than","more fast","faster"],a:1,en:"comparison → faster than",ar:'مقارنة → faster than',tr:'يقود أسرع منك.'},
  {q:"Brenda got up _______ Sue.",o:["early than","earlier than","earlier","early"],a:1,en:"comparison → earlier than",ar:'مقارنة → earlier than',tr:'استيقظت بريندا أبكر من سو.'},
  {q:"Glen wanted to swim, _______ he went to the lake.",o:["but","so","or","if"],a:1,en:"result → so",ar:'النتيجة → so',tr:'أراد جلين السباحة، لذلك ذهب إلى البحيرة.'},
  {q:"Did you _______ fish often when you were young?",o:["would","use to","used","would to"],a:1,en:"question → use to",ar:'السؤال → use to',tr:'هل كنت تصطاد السمك كثيراً حين كنت صغيراً؟'},
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
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 1 — الطقس والسفر',w:[
    {e:'climate',a:'مناخ',em:'🌡️'},{e:'humidity',a:'رطوبة',em:'💦'},{e:'breeze',a:'نسيم',em:'🍃'},
    {e:'beach',a:'شاطئ',em:'🏖️'},{e:'freezing',a:'متجمّد',em:'🥶'},{e:'slippery',a:'زلِق',em:'⚠️'},
    {e:'dangerous',a:'خطير',em:'⚠️'},{e:'expect',a:'يتوقّع',em:'🔮'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 2 — التعليم والقرارات',w:[
    {e:'education',a:'التعليم',em:'🎓'},{e:'university',a:'جامعة',em:'🏛️'},{e:'decision',a:'قرار',em:'⚖️'},
    {e:'career',a:'مسار مهني',em:'💼'},{e:'accept',a:'يقبل',em:'✅'},{e:'retire',a:'يتقاعد',em:'🌴'},
    {e:'confused',a:'مرتبك',em:'😕'},{e:'diploma',a:'شهادة',em:'📃'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 3 — البناء والمنزل',w:[
    {e:'builder',a:'بنّاء',em:'👷'},{e:'addition',a:'ملحق',em:'🏗️'},{e:'fireplace',a:'مدفأة',em:'🔥'},
    {e:'suburb',a:'ضاحية',em:'🏘️'},{e:'solution',a:'حلّ',em:'💡'},{e:'meeting',a:'اجتماع',em:'📅'},
    {e:'perhaps',a:'رُبّما',em:'❓'},{e:'enlarge',a:'يوسّع',em:'🔎'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 4 — الصيد والهوايات',w:[
    {e:'hunt',a:'يصطاد',em:'🏹'},{e:'weapon',a:'سلاح',em:'⚔️'},{e:'outdoors',a:'الهواء الطلق',em:'🌲'},
    {e:'practice',a:'يتمرّن',em:'🔁'},{e:'prepare',a:'يستعدّ',em:'🛠️'},{e:'several',a:'عدّة',em:'🔢'},
    {e:'twice',a:'مرّتين',em:'2️⃣'},{e:'instructions',a:'تعليمات',em:'📋'},
  ]},
];

// ═══════════════════════════════════════
// LISTENING — فيديوهات الاستماع (Quiz A · B · C)
// ═══════════════════════════════════════
const YT_VIDEOS=[
  {id:'AhGk2cxrgTc',t:'Quiz A',s:'استماع وقراءة مع الحل'},
  {id:'D9BfYUKuM9s',t:'Quiz B',s:'استماع وقراءة مع الحل'},
  {id:'Gtkj9wJK-Zk',t:'Quiz C',s:'استماع وقراءة مع الحل'},
];

// ═══════════════════════════════════════
// ROUTING MANIFEST
// ═══════════════════════════════════════
const SCREENS=['home','lscreen','rscreen','ytscreen','fscreen','vtscreen','spscreen','mkscreen'];
const SCREEN_NAMES={home:'الرئيسية',lscreen:'درس',rscreen:'المراجعة',ytscreen:'الاستماع',fscreen:'الاختبار النهائي',vtscreen:'اختبار المفردات',spscreen:'الإملاء',mkscreen:'مراجعة الأخطاء'};
