// ═══════════════════════════════════════
// DATA — BOOK 11
// Lesson 1 (Medical appointments) — vocab, grammar, word-order, per-lesson quiz.
// Built lesson by lesson; more lessons get appended here later.
// ═══════════════════════════════════════
const BOOK_ID='book11';

const LESSON_META={
  l1:{ico:'🩺',title:'Lesson 1 — Medical appointments',sub:'المواعيد الطبية والأعراض · المضارع التام (since/for) · How long · المضارع التام المستمر'},
  l2:{ico:'🚦',title:'Lesson 2 — Rules of the road',sub:'قيادة السيارة وقواعد الطريق · الأفعال الرابطة get/become · الضمائر المبهمة · الجمل الوصفية who/which/that'},
  l3:{ico:'🧾',title:"Lesson 3 — I'd like a refund",sub:'مشاكل السيارة والاسترداد وعدم الرضا · too + صفة · تحويل الأسماء لصفات بـ y · to للغرض'},
  l4:{ico:'🎬',title:'Lesson 4 — How was the show?',sub:'التلفاز والأفلام والمطاعم وإبداء الرأي · النقل بـ told · حروف الزمن · القدرة الماضية could'}
};
const LESSON_KEYS=Object.keys(LESSON_META);

// ═══════════════════════════════════════
// VOCABULARY
// ═══════════════════════════════════════
const VOCAB={
l1:[
  // — العيادة والموعد —
  {e:'appointment',a:'موعد',em:'📅'},
  {e:'checkup',a:'فحص دوري',em:'🩺'},
  {e:'exam',a:'فحص / كشف',em:'🔍'},
  {e:'physical',a:'فحص بدني',em:'🧑‍⚕️'},
  {e:'patient',a:'مريض',em:'🤒'},
  {e:'nurse',a:'ممرّض/ممرّضة',em:'👩‍⚕️'},
  {e:'emergency',a:'حالة طارئة',em:'🚨'},
  {e:'symptom',a:'عَرَض (للمرض)',em:'🩹'},
  {e:'problem',a:'مشكلة',em:'⚠️'},
  // — الأعراض —
  {e:'temperature',a:'درجة الحرارة',em:'🌡️'},
  {e:'fever',a:'حُمّى',em:'🥵'},
  {e:'pain',a:'ألم',em:'😣'},
  {e:'ache',a:'وجع / يؤلم',em:'😖'},
  {e:'headache',a:'صداع',em:'🤕'},
  {e:'backache',a:'ألم الظهر',em:'🔙'},
  {e:'earache',a:'ألم الأذن',em:'👂'},
  {e:'stomachache',a:'ألم المعدة',em:'🤢'},
  {e:'cold',a:'زكام / نزلة برد',em:'🤧'},
  {e:'cough',a:'سعال / يسعل',em:'😷'},
  {e:'sneezing',a:'عطاس',em:'🤧'},
  {e:'runny',a:'سائل (أنف)',em:'💧'},
  // — أجزاء الجسم —
  {e:'chest',a:'الصدر',em:'🫁'},
  {e:'stomach',a:'المعدة',em:'🫃'},
  {e:'back',a:'الظهر',em:'🔙'},
  // — الأفعال —
  {e:'catch',a:'يُصاب بـ (مرض)',past:'caught',pa:'أُصيب',em:'🤧'},
  {e:'sneeze',a:'يعطس',em:'🤧'},
  {e:'see',a:'يراجع / يرى (الطبيب)',past:'saw',pa:'راجع',em:'👀'},
  {e:'run a temperature',a:'ترتفع حرارته',past:'ran a temperature',pa:'ارتفعت حرارته',em:'🌡️'},
  {e:'make it',a:'يتمكّن من الحضور',past:'made it',pa:'تمكّن',em:'✅'},
  {e:'get there',a:'يصل',past:'got there',pa:'وصل',em:'🚩'},
  {e:'connect',a:'يربط / يصل',em:'🔗'},
  {e:'come in',a:'يحضر / يدخل',past:'came in',pa:'حضر',em:'🚪'},
  // — أوصاف الوقت —
  {e:'annual',a:'سنوي',em:'📆'},
  {e:'regular',a:'عادي / منتظم',em:'🔁'},
  {e:'since',a:'منذ',em:'⏳'},
  {e:'still',a:'لا يزال',em:'⌛'},
  {e:'anymore',a:'بعد الآن',em:'🚫'},
  {e:'any longer',a:'بعد الآن',em:'🚫'},
  {e:'sometime',a:'في وقتٍ ما',em:'🕐'},
  {e:'then',a:'حينها / عندئذٍ',em:'⏭️'},
  // — الهندسة (خطوط) —
  {e:'horizontal',a:'أفقي',em:'↔️'},
  {e:'vertical',a:'رأسي',em:'↕️'},
  {e:'parallel',a:'متوازٍ',em:'🟰'},
  {e:'perpendicular',a:'عمودي',em:'📐'},
],
l2:[
  // — لافتات وقواعد الطريق —
  {e:'sign',a:'لافتة / إشارة',em:'🪧'},
  {e:'stop sign',a:'لافتة قِف',em:'🛑'},
  {e:'signal',a:'إشارة ضوئية / يُشير',em:'🚥'},
  {e:'speed limit',a:'حدّ السرعة',em:'🚧'},
  {e:'speed',a:'السرعة',em:'💨'},
  {e:'one-way',a:'اتجاه واحد',em:'➡️'},
  {e:'two-way',a:'اتجاهان',em:'↔️'},
  {e:'yield',a:'أفسِح الطريق',em:'🔻'},
  {e:'caution',a:'حذر / تنبيه',em:'⚠️'},
  {e:'right-of-way',a:'أولوية المرور',em:'🚏'},
  // — الطريق والأماكن —
  {e:'intersection',a:'تقاطع',em:'🚦'},
  {e:'crossing',a:'معبر',em:'🚸'},
  {e:'railroad crossing',a:'معبر سكة الحديد',em:'🚂'},
  {e:'lane',a:'حارة / مسار',em:'🛣️'},
  {e:'sidewalk',a:'رصيف',em:'🚶‍♂️'},
  {e:'pedestrian',a:'أحد المشاة',em:'🚶'},
  {e:'turn',a:'منعطف / انعطاف',em:'↩️'},
  {e:'way',a:'طريق',em:'🛤️'},
  {e:'steering wheel',a:'عجلة القيادة',em:'🎡'},
  {e:'instructor',a:'مدرّب',em:'🧑‍🏫'},
  {e:'mind',a:'البال / العقل',em:'🧠'},
  // — أفعال القيادة —
  {e:'slow down',a:'يُبطئ',em:'🐢'},
  {e:'speed up',a:'يُسرع',past:'sped up',pa:'أسرع',em:'🏎️'},
  {e:'pull over',a:'يتوقّف جانباً',em:'🚙'},
  {e:'pass',a:'يتجاوز',em:'🔄'},
  {e:'follow',a:'يتّبع',em:'👉'},
  {e:'flash',a:'يومض',em:'⚡'},
  {e:'confuse',a:'يُربك',em:'😕'},
  {e:'fail',a:'يُخفق / يفشل',em:'❌'},
  {e:'mean',a:'يعني',past:'meant',pa:'قصد / عنى',em:'💬'},
  // — الأفعال الرابطة —
  {e:'become',a:'يُصبح',past:'became',pa:'أصبح',em:'⭐'},
  {e:'get',a:'يُصبح / يحصل',past:'got',pa:'أصبح / حصل',em:'✅'},
  // — صفات وكلمات أخرى —
  {e:'ahead',a:'إلى الأمام',em:'⏩'},
  {e:'ahead of',a:'أمام / متقدّم على',em:'🔜'},
  {e:'lost',a:'تائه / ضائع',em:'🧭'},
  {e:'nervous',a:'متوتّر / قلِق',em:'😰'},
  {e:'relaxed',a:'مسترخٍ / هادئ',em:'😌'},
  {e:'cautious',a:'حذِر',em:'🧐'},
  {e:'cautiously',a:'بحذر',em:'🚸'},
  {e:'in advance',a:'مسبقاً / سلفاً',em:'⏰'},
  {e:'miles per hour',a:'ميل في الساعة (m.p.h.)',em:'🚗'},
  // — الضمائر المبهمة —
  {e:'somebody',a:'شخص ما',em:'🧑'},
  {e:'anybody',a:'أيّ أحد',em:'❓'},
  {e:'nobody',a:'لا أحد',em:'🚫'},
],
l3:[
  // — أجزاء السيارة ومشاكلها —
  {e:'engine',a:'محرّك',em:'⚙️'},
  {e:'motor',a:'محرّك (كهربائي)',em:'🔩'},
  {e:'brake',a:'فرامل',em:'🛑'},
  {e:'hose',a:'خرطوم',em:'🚿'},
  {e:'part',a:'قطعة غيار',em:'🔧'},
  {e:'oil',a:'زيت / يزيّت',em:'🫗'},
  {e:'grease',a:'شحم / يشحّم',em:'🛢️'},
  {e:'leak',a:'تسرّب / يتسرّب',em:'💧'},
  {e:'noise',a:'ضجيج',em:'🔊'},
  {e:'bug',a:'خلل / عيب',em:'🐛'},
  // — أفعال الأعطال والصيانة —
  {e:'stall',a:'يتعطّل فجأة',em:'🚗'},
  {e:'tune up',a:'يضبط / صيانة المحرّك',em:'🎚️'},
  {e:'warm up',a:'يُسخّن / يُحمّي',em:'🔥'},
  {e:'guarantee',a:'ضمان / يضمن',em:'📜'},
  {e:'service',a:'خدمة / صيانة',em:'🛠️'},
  // — الاسترداد والشراء —
  {e:'refund',a:'استرداد المال / يُعيد المال',em:'💸'},
  {e:'exchange',a:'يستبدل',em:'🔄'},
  {e:'charge',a:'رسوم / يفرض رسوماً',em:'💵'},
  {e:'credit',a:'رصيد / يضيف رصيداً',em:'💳'},
  {e:'give back',a:'يُعيد',past:'gave back',pa:'أعاد',em:'↩️'},
  {e:'sales slip',a:'إيصال الشراء',em:'🧾'},
  {e:'on sale',a:'معروض بتخفيض',em:'🏷️'},
  // — الرضا وعدمه —
  {e:'satisfy',a:'يُرضي',em:'😊'},
  {e:'satisfaction',a:'الرضا',em:'😌'},
  {e:'satisfied',a:'راضٍ',em:'🙂'},
  {e:'dissatisfied',a:'غير راضٍ',em:'😞'},
  {e:'unhappy',a:'غير سعيد',em:'☹️'},
  // — صفات بـ y —
  {e:'greasy',a:'دهني / مشحّم',em:'🛢️'},
  {e:'oily',a:'زيتي',em:'🫗'},
  {e:'leaky',a:'يتسرّب / مثقوب',em:'💧'},
  {e:'noisy',a:'صاخب',em:'🔊'},
  // — أخرى —
  {e:'fly',a:'ذبابة',em:'🪰'},
  {e:'too',a:'أكثر من اللازم',em:'➕'},
],
l4:[
  // — التلفاز والترفيه —
  {e:'entertainment',a:'ترفيه / تسلية',em:'🎭'},
  {e:'program',a:'برنامج',em:'📺'},
  {e:'channel',a:'قناة',em:'📡'},
  {e:'commercial',a:'إعلان تجاري',em:'📢'},
  {e:'variety',a:'تنوّع / منوّعات',em:'🎪'},
  {e:'dish',a:'طبق',em:'🍽️'},
  {e:'cards',a:'ورق اللعب',em:'🃏'},
  // — أفعال —
  {e:'entertain',a:'يُسلّي',em:'🎉'},
  {e:'serve',a:'يخدم / يقدّم',em:'🧑‍🍳'},
  {e:'recommend',a:'يوصي بـ',em:'👍'},
  {e:'intend',a:'ينوي',em:'🎯'},
  {e:'frighten',a:'يُخيف',em:'😱'},
  {e:'laugh',a:'يضحك',em:'😂'},
  {e:'love',a:'حبّ / يحبّ',em:'❤️'},
  {e:'plan',a:'خطة / يخطّط',em:'📋'},
  {e:'feel',a:'يشعر',past:'felt',pa:'شعر',em:'🫤'},
  {e:'spend',a:'يقضي / ينفق',past:'spent',pa:'قضى / أنفق',em:'⏳'},
  {e:'could',a:'استطاع (ماضي can)',em:'✅'},
  // — صفات الرأي —
  {e:'entertaining',a:'مُسلٍّ',em:'😄'},
  {e:'boring',a:'مُملّ',em:'😑'},
  {e:'dull',a:'باهت / ممل',em:'😴'},
  {e:'funny',a:'مضحك',em:'🤣'},
  {e:'frightening',a:'مخيف',em:'😨'},
  {e:'great',a:'رائع',em:'👍'},
  {e:'wonderful',a:'رائع جداً',em:'🌟'},
  {e:'terrible',a:'فظيع',em:'👎'},
  {e:'reasonable',a:'معقول',em:'💲'},
  {e:'rude',a:'وقِح',em:'😠'},
  {e:'impolite',a:'غير مهذّب',em:'🙅'},
  {e:'loud',a:'صاخب / عالٍ',em:'🔊'},
  {e:'sharp',a:'حادّ',em:'🔪'},
  {e:'busy',a:'مشغول',em:'🏃'},
  // — ظروف —
  {e:'promptly',a:'بسرعة / في موعده',em:'⏱️'},
  {e:'rudely',a:'بوقاحة',em:'😤'},
  {e:'loudly',a:'بصوت عالٍ',em:'📣'},
  {e:'frequently',a:'بشكل متكرّر',em:'🔁'},
  // — عبارات —
  {e:'as a matter of fact',a:'في الواقع',em:'💬'},
  {e:'if you ask me',a:'برأيي / إن سألتني',em:'🗣️'},
  {e:'in fact',a:'في الحقيقة',em:'✔️'},
  {e:'since',a:'منذ',em:'📅'},
]
};

// ═══════════════════════════════════════
// GRAMMAR (قواعد)
// ═══════════════════════════════════════
const GRAMMAR={
l1:[
  {
    title:'Present perfect with since / for', ar:'المضارع التام مع since / for',
    rule:'للتعبير عن حدثٍ بدأ في الماضي وما زال مستمرّاً: (have/has) + التصريف الثالث. مع since (نقطة بداية) و for (مدّة).',
    parts:[
      {t:'have/has + past participle',d:'مثال: John has been in the hospital since Friday.'},
      {t:'since = منذ (نقطة)',d:'since Friday · since 1998 · since Monday.'},
      {t:'for = لمدّة',d:'for two days · for a week · for two weeks.'},
    ],
    check:{q:"Mary hasn't been in Houston _______ 1998.",o:['since','for','still','anymore'],a:0,en:'point in time → since',ar:'نقطة زمنية → since'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'have/has',c:'v'},{t:'+',c:'p'},{t:'past participle + since/for',c:'k'}],
    compare:[
      {c1:'since Friday (نقطة بداية)',c2:'for two days (مدّة)',ar:'since ↔ for'},
      {c1:'John has been in the hospital.',c2:'Mary has had a temperature.',ar:'has been / has had'},
    ],
    examples:[
      {s:'I have had a cold for a week.',tr:'أُصبت بزكام منذ أسبوع.',ar:'have had + for',ok:true},
      {s:"Mary hasn't been in Houston since 1998.",tr:'لم تكن ماري في هيوستن منذ 1998.',ar:'has been + since',ok:true},
      {s:'I have a cold since a week.',wrong:'have a cold since',right:'have had a cold for',tr:'المضارع التام: have had a cold for a week.',ok:false},
    ]
  },
  {
    title:'How long + present perfect', ar:'How long مع المضارع التام (منذ متى؟)',
    rule:'نسأل عن مدّة استمرار الحدث بـ How long + (have/has) + الفاعل + التصريف الثالث. والجواب بـ since/for.',
    parts:[
      {t:'How long have/has …?',d:'مثال: How long have you had a cold?'},
      {t:'الجواب: for / since',d:'For a week. · Since Monday.'},
      {t:'مع was/were أيضاً',d:'How long were you in Boston? For two weeks.'},
    ],
    check:{q:'Linda: _______ were you in Boston? Adam: For two weeks.',o:['How long','Since','Any longer','Sometime'],a:0,en:'ask duration → How long',ar:'السؤال عن المدّة → How long'},
    formula:[{t:'How long',c:'v'},{t:'+',c:'p'},{t:'have/has',c:'s'},{t:'+',c:'p'},{t:'past participle …?',c:'k'}],
    compare:[
      {c1:'How long have you had a cold?',c2:'For a week.',ar:'السؤال والجواب'},
      {c1:'How long has it been…?',c2:'Since your last checkup.',ar:'since في الجواب'},
    ],
    examples:[
      {s:'How long have you been in the hospital?',tr:'منذ متى وأنت في المستشفى؟',ar:'How long + have',ok:true},
      {s:'How long has Mary had a fever?',tr:'منذ متى ولدى ماري حُمّى؟',ar:'How long + has',ok:true},
      {s:'How long you have a cold?',wrong:'How long you have',right:'How long have you had',tr:'يسبق have الفاعل: How long have you had?',ok:false},
    ]
  },
  {
    title:'Present perfect continuous', ar:'المضارع التام المستمر (have been + verb-ing)',
    rule:'لحدثٍ بدأ في الماضي وما زال مستمرّاً مع التركيز على استمراره: (have/has) + been + الفعل+ing.',
    parts:[
      {t:'have/has been + verb-ing',d:'مثال: What have you been studying? · I\'ve been reviewing vocabulary.'},
      {t:'السؤال',d:'Has he been studying? · Have you been coughing?'},
      {t:'been ثابتة',d:'دائماً have/has + been + الفعل+ing.'},
    ],
    check:{q:'Has he _______ in the barracks?',o:['been studying','been study','had studying','have study'],a:0,en:'present perfect continuous → been studying',ar:'المضارع التام المستمر → been studying'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'have/has been',c:'v'},{t:'+',c:'p'},{t:'verb-ing',c:'k'}],
    compare:[
      {c1:'I have studied. (تام)',c2:'I have been studying. (تام مستمر)',ar:'التركيز على الاستمرار'},
      {c1:'Have you been coughing?',c2:'No, I stopped yesterday.',ar:'السؤال والجواب'},
    ],
    examples:[
      {s:"I've been reviewing new vocabulary.",tr:'كنت أُراجع مفردات جديدة.',ar:'have been + reviewing',ok:true},
      {s:'Has he been studying his lesson?',tr:'هل ظلّ يذاكر درسه؟',ar:'has been + studying',ok:true},
      {s:'Has he been study?',wrong:'been study',right:'been studying',tr:'بعد been نضع الفعل+ing: been studying.',ok:false},
    ]
  }
],
l2:[
  {
    title:'Linking verbs: get and become', ar:'الفعلان الرابطان get و become (يُصبح)',
    rule:'للتعبير عن التحوّل من حالٍ إلى حال: get + صفة (يُصبح)، و become + اسم أو صفة (يُصبح). في الماضي: got · became.',
    parts:[
      {t:'get + صفة',d:'مثال: Jim got lost. · The children got tired. · Tina gets upset.'},
      {t:'become + اسم/صفة',d:'مثال: Tom became a captain. · Our bedroom became the exercise room.'},
      {t:'الماضي',d:'get → got · become → became.'},
    ],
    check:{q:'Captain Peters will _______ Major Peters next month.',o:['become','get','being','been'],a:0,en:'رتبة (اسم) → become',ar:'يصير رتبة (اسم) → become'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'get / become',c:'v'},{t:'+',c:'p'},{t:'صفة / اسم',c:'k'}],
    compare:[
      {c1:'Jim got lost. (get + صفة)',c2:'Tom became a captain. (become + اسم)',ar:'get ↔ become'},
      {c1:'The children got tired.',c2:'Our bedroom became an office.',ar:'صفة ↔ اسم'},
    ],
    examples:[
      {s:'Jim got lost on his way to the airport.',tr:'تاه جيم في طريقه إلى المطار.',ar:'got + lost',ok:true},
      {s:'Tom became a captain last week.',tr:'أصبح توم نقيباً الأسبوع الماضي.',ar:'became + a captain',ok:true},
      {s:'Tom got a captain last week.',wrong:'got a captain',right:'became a captain',tr:'مع الاسم نستخدم became: became a captain.',ok:false},
    ]
  },
  {
    title:'Indefinite pronouns', ar:'الضمائر المبهمة (somebody · anybody · nobody)',
    rule:'ضمائر تشير إلى أشخاص غير محدّدين: somebody/someone (في الإثبات)، anybody/anyone (في الأسئلة والنفي)، nobody/no one (لا أحد — والفعل بعده مثبت).',
    parts:[
      {t:'somebody / someone',d:'في الجمل المثبتة: Could somebody help me?'},
      {t:'anybody / anyone',d:'في الأسئلة والنفي: Did anyone go to the game?'},
      {t:'nobody / no one',d:'لا أحد — والفعل مثبت: Nobody went. (وليس Nobody didn\'t go).'},
    ],
    check:{q:'When I called the library, _______ answered the phone.',o:['nobody','anybody','somebody','something'],a:0,en:'لم يُجب أحد → nobody',ar:'لا أحد → nobody'},
    formula:[{t:'somebody / anybody / nobody',c:'s'},{t:'+',c:'p'},{t:'فعل',c:'v'},{t:'…',c:'k'}],
    compare:[
      {c1:'Did anyone go? (سؤال)',c2:'No, nobody went. (نفي)',ar:'anyone ↔ nobody'},
      {c1:'Could somebody help me?',c2:'Nobody answered the phone.',ar:'somebody ↔ nobody'},
    ],
    examples:[
      {s:'Did anyone go to the game?',tr:'هل ذهب أحدٌ إلى المباراة؟',ar:'سؤال → anyone',ok:true},
      {s:'No, nobody went.',tr:'لا، لم يذهب أحد.',ar:'nobody + فعل مثبت',ok:true},
      {s:"Nobody didn't answer.",wrong:"Nobody didn't",right:'Nobody answered',tr:'nobody يكفي عن النفي: Nobody answered.',ok:false},
    ]
  },
  {
    title:'Adjective clauses: who / which / that', ar:'الجمل الوصفية (who · which · that)',
    rule:'جملة تصف اسماً وتأتي بعده مباشرة: who للأشخاص، which للأشياء، و that للأشخاص والأشياء معاً.',
    parts:[
      {t:'who — للأشخاص',d:'the driver who missed the turn · the one who wrote the letter.'},
      {t:'which — للأشياء',d:'the car which had an accident · the store which sells watches.'},
      {t:'that — للاثنين',d:'the person that signed it · the building that has 25 floors.'},
    ],
    check:{q:'Is this the building _______ has twenty-five floors?',o:['that','who','it','whom'],a:0,en:'شيء → that/which',ar:'للأشياء → that'},
    formula:[{t:'الاسم',c:'s'},{t:'+',c:'p'},{t:'who / which / that',c:'v'},{t:'+',c:'p'},{t:'بقية الوصف',c:'k'}],
    compare:[
      {c1:'the man who lost his wallet (شخص)',c2:'the tree which fell down (شيء)',ar:'who ↔ which'},
      {c1:"I'm the one who wrote it.",c2:"He's the person that signed it.",ar:'who ↔ that'},
    ],
    examples:[
      {s:"I'm the one who wrote the letter.",tr:'أنا مَن كتب الرسالة.',ar:'person + who',ok:true},
      {s:'This is the car which had an accident.',tr:'هذه هي السيارة التي تعرّضت لحادث.',ar:'thing + which',ok:true},
      {s:'The man which lost his wallet is here.',wrong:'man which',right:'man who',tr:'للأشخاص نستخدم who: the man who lost his wallet.',ok:false},
    ]
  }
],
l3:[
  {
    title:'too + adjective', ar:'too + صفة (أكثر من اللازم)',
    rule:'too قبل الصفة تعني «أكثر من اللازم» بمعنى سلبي، وكثيراً ما تأتي: too + صفة + to + فعل. مثال: too hot to drink.',
    parts:[
      {t:'too + صفة',d:'مثال: The coffee is too hot. · The box is too heavy.'},
      {t:'too + صفة + to + فعل',d:'too hot to drink · too heavy to lift · too late to call.'},
      {t:'too ≠ very',d:'very = جداً (محايدة) · too = أكثر من اللازم (سلبية).'},
    ],
    check:{q:'The coffee is still _______ hot to drink.',o:['too','also','much','lots'],a:0,en:'أكثر من اللازم → too',ar:'أكثر من اللازم → too'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'be',c:'v'},{t:'+',c:'p'},{t:'too + صفة (+ to + فعل)',c:'k'}],
    compare:[
      {c1:'The coffee is too hot to drink.',c2:'The box is too heavy to lift.',ar:'too + صفة + to'},
      {c1:'very hot (جداً)',c2:'too hot (أكثر من اللازم)',ar:'very ↔ too'},
    ],
    examples:[
      {s:'The coffee is too hot to drink.',tr:'القهوة ساخنة جداً بحيث لا يمكن شربها.',ar:'too hot to drink',ok:true},
      {s:'He arrived too late to catch the flight.',tr:'وصل متأخّراً جداً بحيث فاتته الرحلة.',ar:'too late to',ok:true},
      {s:'The coffee is also hot to drink.',wrong:'also hot',right:'too hot',tr:'للتعبير عن الزيادة نستخدم too: too hot to drink.',ok:false},
    ]
  },
  {
    title:'Nouns to adjectives with -y', ar:'تحويل الأسماء إلى صفات بإضافة y',
    rule:'نُضيف حرف y إلى بعض الأسماء لتصبح صفات: noise→noisy · grease→greasy · oil→oily · leak→leaky · ice→icy · snow→snowy · rain→rainy.',
    parts:[
      {t:'اسم + y = صفة',d:'noise → noisy · grease → greasy · oil → oily.'},
      {t:'مع الطقس والطرق',d:'ice → icy · snow → snowy · rain → rainy.'},
      {t:'تصف الاسم',d:'a noisy engine · greasy clothes · icy roads.'},
    ],
    check:{q:"After working on his car, Tom's clothes were _______.",o:['greasy','noisy','leaky','icy'],a:0,en:'شحم → دهنية (greasy)',ar:'grease → greasy'},
    formula:[{t:'اسم',c:'s'},{t:'+',c:'p'},{t:'y',c:'v'},{t:'=',c:'p'},{t:'صفة',c:'k'}],
    compare:[
      {c1:'noise → noisy (صاخب)',c2:'grease → greasy (دهني)',ar:'اسم ↔ صفة'},
      {c1:'ice → icy (جليدي)',c2:'oil → oily (زيتي)',ar:'أمثلة أخرى'},
    ],
    examples:[
      {s:'The old engine is very noisy.',tr:'المحرّك القديم صاخب جداً.',ar:'noise → noisy',ok:true},
      {s:'Tom drove on the icy roads.',tr:'قاد توم على الطرق الجليدية.',ar:'ice → icy',ok:true},
      {s:'His clothes were grease.',wrong:'were grease',right:'were greasy',tr:'الصفة بإضافة y: greasy.',ok:false},
    ]
  },
  {
    title:'to-infinitive of purpose', ar:'to + فعل للتعبير عن الغرض (لماذا؟)',
    rule:'نستخدم to + الفعل للتعبير عن الغرض/السبب (لماذا فعلنا الشيء): He went to the store to buy something = ليشتري.',
    parts:[
      {t:'to + فعل = لِـ',d:'مثال: to buy · to fix · to change · to study.'},
      {t:'يجيب عن «لماذا؟»',d:'Why did he go? — To buy something.'},
      {t:'ليست for + فعل',d:'نقول to cut وليس for cut.'},
    ],
    check:{q:'We use a knife _______ things.',o:['to cut','cut','cutting','for cut'],a:0,en:'الغرض → to cut',ar:'الغرض → to + فعل'},
    formula:[{t:'فعل رئيسي',c:'s'},{t:'+',c:'p'},{t:'to',c:'v'},{t:'+',c:'p'},{t:'فعل (الغرض)',c:'k'}],
    compare:[
      {c1:'He went to the BX to buy something.',c2:'I paid the mechanic to fix my car.',ar:'to + فعل'},
      {c1:'to cut (صحيح)',c2:'for cut (خطأ)',ar:'to ↔ for'},
    ],
    examples:[
      {s:'He went to the store to buy something.',tr:'ذهب إلى المتجر ليشتري شيئاً.',ar:'to buy',ok:true},
      {s:'I paid the mechanic to fix my car.',tr:'دفعت للميكانيكي ليُصلح سيّارتي.',ar:'to fix',ok:true},
      {s:'We use a knife for cut things.',wrong:'for cut',right:'to cut',tr:'للغرض نستخدم to + فعل: to cut.',ok:false},
    ]
  }
],
l4:[
  {
    title:'Reported speech with told', ar:'الكلام المنقول بـ told (أخبرَ)',
    rule:'لنقل كلام شخص نستخدم: told + مفعول (me/him/us) + (that) + الجملة، مع إرجاع الفعل خطوة إلى الماضي. is→was · am→was.',
    parts:[
      {t:'told + مفعول + that',d:'مثال: He told me that he was busy.'},
      {t:'إرجاع الفعل للماضي',d:'"I am busy" → He told me he was busy.'},
      {t:'told ≠ said me',d:'نقول told me (وليس said me).'},
    ],
    check:{q:'Tom _______ me that he was too busy to come.',o:['told','said','say','tells'],a:0,en:'told + مفعول',ar:'أخبرني → told me'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'told',c:'v'},{t:'+',c:'p'},{t:'مفعول + (that) + جملة',c:'k'}],
    compare:[
      {c1:'"I am busy."',c2:'He told me that he was busy.',ar:'مباشر ↔ منقول'},
      {c1:'told me (صحيح)',c2:'said me (خطأ)',ar:'told ↔ said'},
    ],
    examples:[
      {s:'Tom told me that he was too busy.',tr:'أخبرني توم أنه مشغول جداً.',ar:'told me that',ok:true},
      {s:'She told us that she felt sick.',tr:'أخبرتنا أنها تشعر بالمرض.',ar:'told us that',ok:true},
      {s:'He said me that he was late.',wrong:'said me',right:'told me',tr:'مع المفعول نستخدم told: told me.',ok:false},
    ]
  },
  {
    title:'Prepositions of time', ar:'حروف الجرّ الزمنية (at · on · in · for · since)',
    rule:'at للساعة (at 3:00) · on لليوم والتاريخ (on Sunday · on June 8th) · in للفترة/الشهر (in the morning) · for للمدّة (for a week) · since لنقطة البداية (since 1999).',
    parts:[
      {t:'at / on / in',d:'at 3:00 · on Monday · in June · in the morning.'},
      {t:'for + مدّة',d:'for two hours · for a week.'},
      {t:'since + نقطة',d:'since 1999 · since Monday.'},
    ],
    check:{q:'The Smiths have been living in New York _______ 1999.',o:['since','for','until','at'],a:0,en:'نقطة بداية → since',ar:'نقطة زمنية → since'},
    formula:[{t:'حدث',c:'s'},{t:'+',c:'p'},{t:'at/on/in/for/since',c:'v'},{t:'+',c:'p'},{t:'الزمن',c:'k'}],
    compare:[
      {c1:'for two hours (مدّة)',c2:'since 1999 (نقطة)',ar:'for ↔ since'},
      {c1:'on June 8th (تاريخ)',c2:'at 3:00 (ساعة)',ar:'on ↔ at'},
    ],
    examples:[
      {s:"On June 8th, we'll fly to Japan.",tr:'في الثامن من يونيو سنسافر إلى اليابان.',ar:'on + تاريخ',ok:true},
      {s:'It has been raining for two hours.',tr:'ما زالت تمطر منذ ساعتين.',ar:'for + مدّة',ok:true},
      {s:'It has been raining since two hours.',wrong:'since two hours',right:'for two hours',tr:'مع المدّة نستخدم for: for two hours.',ok:false},
    ]
  },
  {
    title:'Past ability with could', ar:'القدرة في الماضي بـ could (استطاع)',
    rule:'could هي الماضي من can وتعني «استطاع». النفي couldn\'t. بعدها الفعل مجرّد بلا to.',
    parts:[
      {t:'could + فعل مجرّد',d:'مثال: I could swim when I was five.'},
      {t:'النفي couldn\'t',d:'He couldn\'t finish the test.'},
      {t:'بلا to',d:'نقول could swim (وليس could to swim).'},
    ],
    check:{q:'When I was young, I _______ run very fast.',o:['could',"couldn't",'can','am able'],a:0,en:'قدرة ماضية → could',ar:'استطاع → could'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'could',c:'v'},{t:'+',c:'p'},{t:'فعل مجرّد',c:'k'}],
    compare:[
      {c1:'We could see Bob.',c2:"He couldn't see us.",ar:'could ↔ couldn\'t'},
      {c1:'I could swim (صحيح)',c2:'I could to swim (خطأ)',ar:'بلا to'},
    ],
    examples:[
      {s:'We could see Bob, but he couldn\'t see us.',tr:'استطعنا رؤية بوب، لكنه لم يستطع رؤيتنا.',ar:'could / couldn\'t',ok:true},
      {s:'I could swim when I was five.',tr:'كنت أستطيع السباحة حين كنت في الخامسة.',ar:'could + فعل',ok:true},
      {s:'I could to swim then.',wrong:'could to swim',right:'could swim',tr:'بعد could فعل مجرّد: could swim.',ok:false},
    ]
  }
]
};

// ═══════════════════════════════════════
// WO — رتّب الجملة (word order)
// ═══════════════════════════════════════
const WO={
l1:[
  {words:["I'd",'like','to','make','an','appointment'],ans:"I'd like to make an appointment.",tr:'أودّ أن أحجز موعداً.',ar:'حجز موعد طبي'},
  {words:['I','need','to','see','a','doctor'],ans:'I need to see a doctor.',tr:'أحتاج أن أراجع طبيباً.',ar:'see a doctor'},
  {words:['John','has','been','in','the','hospital','since','Friday'],ans:'John has been in the hospital since Friday.',tr:'جون في المستشفى منذ الجمعة.',ar:'المضارع التام + since'},
  {words:['Mary','has','had','a','temperature','for','two','days'],ans:'Mary has had a temperature for two days.',tr:'لدى ماري حرارة منذ يومين.',ar:'has had + for'},
  {words:['How','long','have','you','had','a','cold'],ans:'How long have you had a cold?',tr:'منذ متى وأنت مصاب بالزكام؟',ar:'How long + المضارع التام'},
  {words:['I','have','been','reviewing','new','vocabulary'],ans:'I have been reviewing new vocabulary.',tr:'كنت أُراجع مفردات جديدة.',ar:'المضارع التام المستمر'},
  {words:['She','ran','a','temperature','last','night'],ans:'She ran a temperature last night.',tr:'ارتفعت حرارتها الليلة الماضية.',ar:'run a temperature'},
],
l2:[
  {words:['You','should','slow','down','at','the','intersection'],ans:'You should slow down at the intersection.',tr:'يجب أن تُبطئ عند التقاطع.',ar:'قيادة آمنة'},
  {words:['He','is','the','driver','who','missed','the','turn'],ans:'He is the driver who missed the turn.',tr:'هو السائق الذي فوّت المنعطف.',ar:'جملة وصفية who'},
  {words:['Tom','became','a','captain','last','week'],ans:'Tom became a captain last week.',tr:'أصبح توم نقيباً الأسبوع الماضي.',ar:'become + اسم'},
  {words:['Jim','got','lost','on','his','way','home'],ans:'Jim got lost on his way home.',tr:'تاه جيم في طريقه إلى البيت.',ar:'get + صفة'},
  {words:['You','must','obey','the','speed','limit'],ans:'You must obey the speed limit.',tr:'يجب أن تلتزم بحدّ السرعة.',ar:'قواعد الطريق'},
  {words:['This','is','the','car','which','had','an','accident'],ans:'This is the car which had an accident.',tr:'هذه هي السيارة التي تعرّضت لحادث.',ar:'جملة وصفية which'},
  {words:['Nobody','went','to','the','game'],ans:'Nobody went to the game.',tr:'لم يذهب أحد إلى المباراة.',ar:'الضمائر المبهمة'},
],
l3:[
  {words:["I'd",'like','to','return','this','shirt'],ans:"I'd like to return this shirt.",tr:'أودّ إعادة هذا القميص.',ar:'التعبير عن عدم الرضا'},
  {words:['The','coffee','is','too','hot','to','drink'],ans:'The coffee is too hot to drink.',tr:'القهوة ساخنة جداً بحيث لا يمكن شربها.',ar:'too + صفة'},
  {words:['He','went','to','the','store','to','buy','something'],ans:'He went to the store to buy something.',tr:'ذهب إلى المتجر ليشتري شيئاً.',ar:'to للغرض'},
  {words:['My','car','stalled','on','the','highway'],ans:'My car stalled on the highway.',tr:'تعطّلت سيّارتي على الطريق السريع.',ar:'أفعال الأعطال'},
  {words:['The','mechanic','tuned','up','my','engine'],ans:'The mechanic tuned up my engine.',tr:'ضبط الميكانيكي محرّك سيّارتي.',ar:'صيانة'},
  {words:['Tom','drove','on','the','icy','roads'],ans:'Tom drove on the icy roads.',tr:'قاد توم على الطرق الجليدية.',ar:'صفة بـ y'},
  {words:["I'm",'not','satisfied','with','this','service'],ans:"I'm not satisfied with this service.",tr:'لست راضياً عن هذه الخدمة.',ar:'عدم الرضا'},
],
l4:[
  {words:['Tom','told','me','that','he','was','busy'],ans:'Tom told me that he was busy.',tr:'أخبرني توم أنه مشغول.',ar:'النقل بـ told'},
  {words:['What','do','you','think','of','the','movie'],ans:'What do you think of the movie?',tr:'ما رأيك في الفيلم؟',ar:'إبداء الرأي'},
  {words:['The','server','brought','our','food','promptly'],ans:'The server brought our food promptly.',tr:'أحضر النادل طعامنا بسرعة.',ar:'المطاعم والخدمة'},
  {words:['We','could','see','Bob','last','night'],ans:'We could see Bob last night.',tr:'استطعنا رؤية بوب الليلة الماضية.',ar:'could للقدرة الماضية'},
  {words:['They','have','been','here','since','1999'],ans:'They have been here since 1999.',tr:'هم هنا منذ 1999.',ar:'حروف الزمن (since)'},
  {words:['Can','you','recommend','a','good','restaurant'],ans:'Can you recommend a good restaurant?',tr:'هل توصي بمطعم جيّد؟',ar:'التوصية'},
  {words:['If','you','ask','me','it','is','boring'],ans:'If you ask me, it is boring.',tr:'برأيي، إنه مُملّ.',ar:'إبداء الرأي'},
]
};

// ═══════════════════════════════════════
// EE — "اختبر" (lesson quiz, multiple choice)
// المصدر: تمارين التقييم الرسمية (Exercise B · Select the best answer)
// ═══════════════════════════════════════
const EE={
l1:[
  {q:"There's a _______ with my camera. I can't load the film.",o:["checkup","chest","patient","problem"],a:3,en:"something wrong → problem",ar:'خلل → مشكلة (problem)',tr:'هناك مشكلة في كاميرتي، لا أستطيع تحميل الفيلم.'},
  {q:"The doctor is giving Bob _______.",o:["an exam","a symptom","a fever","a chest"],a:0,en:"doctor checks → an exam",ar:'الطبيب يفحص → فحص (an exam)',tr:'يُجري الطبيب فحصاً لبوب.'},
  {q:"Beth is using a thermometer. She has _______.",o:["a nurse","a temperature","an appointment","a stomach"],a:1,en:"thermometer → temperature",ar:'ميزان الحرارة → حرارة (temperature)',tr:'تستخدم بيث ميزان الحرارة، لديها ارتفاع في الحرارة.'},
  {q:"How did she _______ a cold?",o:["catch","ache","see","connect"],a:0,en:"get sick → catch a cold",ar:'يُصاب بالزكام → catch a cold',tr:'كيف أُصيبت بالزكام؟'},
  {q:"I'm going to _______ the colonel this afternoon.",o:["get there","run","see","make it"],a:2,en:"meet → see",ar:'يقابل/يرى → see',tr:'سأقابل العقيد بعد الظهر.'},
  {q:"Every year in June, our office has _______ picnic.",o:["a parallel","an annual","a vertical","a runny"],a:1,en:"every year → annual",ar:'كل سنة → سنوي (annual)',tr:'كل عام في يونيو، يقيم مكتبنا نزهة سنوية.'},
  {q:"Paul got up very late. He can't _______ to class on time.",o:["connect","catch it","make it","sneeze"],a:2,en:"arrive on time → make it",ar:'يصل في الوقت → make it',tr:'استيقظ بول متأخّراً جداً، لا يستطيع الوصول للصف في الوقت.'},
  {q:"The Wilsons don't live in Dallas _______. They moved to Houston.",o:["still","since","sometime","any longer"],a:3,en:"no more → any longer",ar:'لم يعودوا → بعد الآن (any longer)',tr:'لم يعد آل ويلسون يعيشون في دالاس، انتقلوا إلى هيوستن.'},
  {q:"Do buses run on _______ schedule on the weekend?",o:["an annual","a regular","a parallel","a vertical"],a:1,en:"usual → regular",ar:'معتاد → منتظم (regular)',tr:'هل تسير الحافلات وفق جدول منتظم في عطلة الأسبوع؟'},
  {q:"We'll visit Washington _______. I'm not sure when.",o:["sometime","still","anymore","annual"],a:0,en:"at an unknown time → sometime",ar:'في وقت غير محدّد → sometime',tr:'سنزور واشنطن في وقتٍ ما، لست متأكّداً متى.'},
  {q:"The neck _______ the head to the body.",o:["aches","catches","runs","connects"],a:3,en:"joins → connects",ar:'يصل بين → يربط (connects)',tr:'تربط الرقبة الرأس بالجسم.'},
  {q:"Mary's new house will be ready in April. She's staying with us until _______.",o:["any longer","then","still","sometime"],a:1,en:"until that time → then",ar:'حتى ذلك الوقت → then',tr:'سيكون بيت ماري الجديد جاهزاً في أبريل، ستبقى معنا حتى ذلك الحين.'},
  {q:"He has a _______ in his arm.",o:["pain","cold","physical","cough"],a:0,en:"hurts → pain",ar:'ألم في الذراع → pain',tr:'لديه ألم في ذراعه.'},
  {q:"Mary hasn't been in Houston _______ 1998.",o:["still","since","for","anymore"],a:1,en:"point in time → since",ar:'نقطة زمنية → since',tr:'لم تكن ماري في هيوستن منذ 1998.'},
  {q:"Receptionist: Are you _______ coughing? Mr. Higgens: No, I stopped yesterday.",o:["anymore","then","still","annual"],a:2,en:"continuing? → still",ar:'ما زال؟ → still',tr:'موظّفة الاستقبال: هل ما زلت تسعل؟ السيد هيغينز: لا، توقّفت أمس.'},
  {q:"Bob is sick with a _______.",o:["chest","patient","checkup","cold"],a:3,en:"illness → cold",ar:'مرض → زكام (cold)',tr:'بوب مريض بالزكام.'},
  {q:"Jim doesn't play soccer _______.",o:["anymore","still","since","annual"],a:0,en:"stopped → anymore",ar:'توقّف → بعد الآن (anymore)',tr:'لم يعد جيم يلعب كرة القدم.'},
  {q:"I fell down the stairs yesterday. Today my leg _______.",o:["coughs","runs","aches","catches"],a:2,en:"hurts → aches",ar:'يؤلم → aches',tr:'سقطت من الدرج أمس، واليوم ساقي تؤلمني.'},
  {q:"I _______ a cold for a week.",o:["have had","had have","have been","had been"],a:0,en:"present perfect → have had",ar:'المضارع التام → have had',tr:'أُصبت بزكام منذ أسبوع.'},
  {q:"Mary feels hot. She has _______.",o:["a physical","a fever","a patient","a dot"],a:1,en:"feels hot → a fever",ar:'تشعر بالحرّ → حُمّى (a fever)',tr:'تشعر ماري بالحرارة، لديها حُمّى.'},
  {q:"Linda: _______ were you in Boston? Adam: We were there for two weeks.",o:["Any longer","Since","How long","Sometime"],a:2,en:"ask duration → How long",ar:'السؤال عن المدّة → How long',tr:'ليندا: كم بقيتم في بوسطن؟ آدم: كنّا هناك أسبوعين.'},
  {q:"Has he _______ in the barracks?",o:["been study","had studying","been studying","have study"],a:2,en:"present perfect continuous → been studying",ar:'المضارع التام المستمر → been studying',tr:'هل ظلّ يذاكر في الثكنة؟'},
  {q:"Ten minutes after the plane took off, the pilot said he had _______ and returned to the airport.",o:["an appointment","an emergency","an ache","a symptom"],a:1,en:"urgent problem → an emergency",ar:'مشكلة عاجلة → حالة طارئة (emergency)',tr:'بعد عشر دقائق من إقلاع الطائرة، قال الطيّار إنّ لديه حالة طارئة وعاد إلى المطار.'},
  {q:"_______ you _______ to Chicago before?",o:["Have, had","Had, have","Have, been","Had, been"],a:2,en:"experience → Have you been",ar:'الخبرة → Have you been',tr:'هل سبق أن ذهبت إلى شيكاغو من قبل؟'},
],
l2:[
  {q:"You're not driving fast enough. You need to _______.",o:["pull over","speed up","slow down"],a:1,en:"go faster → speed up",ar:'يزيد السرعة → speed up',tr:'أنت لا تقود بسرعة كافية، تحتاج أن تُسرِع.'},
  {q:"I never met a person _______ liked to wash dishes.",o:["who","which","whom"],a:0,en:"person → who",ar:'شخص → who',tr:'لم أُقابل قطّ شخصاً يحبّ غسل الصحون.'},
  {q:"Tom's ahead of us. He's _______ us.",o:["next to","behind","in front of"],a:2,en:"ahead of → in front of",ar:'متقدّم علينا → أمامنا (in front of)',tr:'توم متقدّم علينا، إنه أمامنا.'},
  {q:"Is this the building _______ has twenty-five floors?",o:["who","that","it"],a:1,en:"thing → that",ar:'للأشياء → that',tr:'هل هذا هو المبنى الذي فيه خمسة وعشرون طابقاً؟'},
  {q:"He failed to pay his phone bill. He _______ it.",o:["paid","didn't pay","likes to pay"],a:1,en:"failed to pay → didn't pay",ar:'أخفق في الدفع → لم يدفع',tr:'أخفق في دفع فاتورة هاتفه، لم يدفعها.'},
  {q:"Is it safe to pass here?",o:["No, you shouldn't go around another car on a hill.","Yes, you don't have to wear a thick coat.","No, you shouldn't swim in cold water."],a:0,en:"pass = go around a car",ar:'التجاوز = تخطّي سيّارة',tr:'هل التجاوز آمن هنا؟ لا، لا يجب تجاوز سيّارة على تلّة.'},
  {q:"I'm afraid to fly. It makes me _______.",o:["relaxed","nervous","lost"],a:1,en:"afraid → nervous",ar:'خائف → متوتّر (nervous)',tr:'أخاف الطيران، إنه يجعلني متوتّراً.'},
  {q:"Bill looked at a map before he left on his trip. He looked at the map _______.",o:["that","ahead","in advance"],a:2,en:"beforehand → in advance",ar:'مسبقاً → in advance',tr:'نظر بيل إلى الخريطة قبل رحلته، نظر إليها مسبقاً.'},
  {q:"Captain Peters will _______ Major Peters next month.",o:["being","get","become"],a:2,en:"change rank → become",ar:'يصير رتبة → become',tr:'سيُصبح النقيب بيترز رائداً الشهر القادم.'},
  {q:"When I called the library, _______ answered the phone.",o:["anybody","nobody","who"],a:1,en:"no answer → nobody",ar:'لم يُجب أحد → nobody',tr:'عندما اتّصلت بالمكتبة، لم يُجب أحد على الهاتف.'},
  {q:"Joe got lost downtown. He _______.",o:["put his car in the garage","ate at the new cafeteria","didn't know where he was"],a:2,en:"got lost → didn't know where",ar:'تاه → لم يعرف مكانه',tr:'تاه جو في وسط المدينة، لم يعرف أين هو.'},
  {q:"You must obey the rules. You must _______ them exactly.",o:["follow","flash","confuse"],a:0,en:"obey → follow",ar:'يطيع → يتّبع (follow)',tr:'يجب أن تطيع القواعد، يجب أن تتّبعها تماماً.'},
  {q:"Tina _______ upset every time she makes a mistake.",o:["does","has","gets"],a:2,en:"becomes → gets",ar:'يُصبح منزعجاً → gets upset',tr:'تنزعج تينا في كلّ مرّة تُخطئ فيها.'},
  {q:"Could _______ please help me for a minute?",o:["somebody","nobody","something"],a:0,en:"a person → somebody",ar:'شخص ما → somebody',tr:'هل يمكن لأحدٍ أن يساعدني دقيقة؟'},
  {q:"Our extra bedroom _______ the exercise room.",o:["got","became","been"],a:1,en:"turned into → became",ar:'تحوّلت إلى → became',tr:'أصبحت غرفة النوم الإضافية غرفةَ الرياضة.'},
  {q:"Did the children _______ tired on the trip?",o:["get","come","have"],a:0,en:"become tired → get",ar:'يُصبح متعباً → get tired',tr:'هل تعِب الأطفال في الرحلة؟'},
],
l3:[
  {q:"Bill missed his flight to New York because he arrived at the airport _______ late.",o:["also","lots","too","much"],a:2,en:"more than needed → too",ar:'أكثر من اللازم → too',tr:'فوّت بيل رحلته إلى نيويورك لأنه وصل المطار متأخّراً جداً.'},
  {q:"A car that can't stop well needs _______.",o:["better brakes","less grease","new hoses","more oil"],a:0,en:"can't stop → brakes",ar:'لا يتوقّف → فرامل أفضل',tr:'السيّارة التي لا تتوقّف جيداً تحتاج فرامل أفضل.'},
  {q:"My neighbor makes a lot of _______ when he works on his car's engine.",o:["truth","service","credit","noise"],a:3,en:"loud → noise",ar:'صوت مرتفع → ضجيج (noise)',tr:'يُحدث جاري ضجيجاً كثيراً عندما يعمل على محرّك سيّارته.'},
  {q:"We use a knife _______ things.",o:["cut","cutting","for cut","to cut"],a:3,en:"purpose → to cut",ar:'الغرض → to cut',tr:'نستخدم السكّين لتقطيع الأشياء.'},
  {q:"The dishwasher _______. There was water on the floor.",o:["leaked","stalled","guaranteed","charged"],a:0,en:"water out → leaked",ar:'تسرّب الماء → leaked',tr:'تسرّبت غسّالة الصحون، كان هناك ماء على الأرض.'},
  {q:"Bill: How do you like your new job? Tim: I think my old job was better. I'm _______ with this one.",o:["cautious","dissatisfied","happy","satisfied"],a:1,en:"not happy → dissatisfied",ar:'غير راضٍ → dissatisfied',tr:'بيل: كيف تجد وظيفتك الجديدة؟ تيم: أظنّ القديمة أفضل، لست راضياً عن هذه.'},
  {q:"Bill: What did you do with the radio that didn't work? Tim: I took it back to the store. The clerk gave me a _______.",o:["charge","service","refund","signal"],a:2,en:"money back → refund",ar:'إعادة المال → refund',tr:'بيل: ماذا فعلت بالراديو المعطّل؟ تيم: أعدته للمتجر فأعطاني البائع استرداداً للمال.'},
  {q:"After working on his car, Tom's clothes were _______.",o:["greasy","noisy","leaky","runny"],a:0,en:"grease → greasy",ar:'شحم → دهنية (greasy)',tr:'بعد العمل على سيّارته، أصبحت ملابس توم مليئة بالشحم.'},
  {q:"Bill: Is your car working okay now? Tim: Yes, I took it to the garage to have the mechanic _______.",o:["give it back","tune it up","write it down","warm it up"],a:1,en:"service engine → tune it up",ar:'صيانة المحرّك → tune it up',tr:'بيل: هل سيّارتك تعمل جيداً الآن؟ تيم: نعم، أخذتها للورشة ليضبطها الميكانيكي.'},
  {q:"Bill: What happened when the Smiths couldn't go on their trip? Tim: The travel agent gave them _______ they could use for another trip.",o:["news","change","service","credit"],a:3,en:"future value → credit",ar:'رصيد للاستخدام لاحقاً → credit',tr:'بيل: ماذا حدث حين لم يستطع آل سميث السفر؟ تيم: أعطاهم وكيل السفر رصيداً يستخدمونه لرحلة أخرى.'},
  {q:"Some large airplanes have six _______ for long flights.",o:["guarantees","engines","parts","brakes"],a:1,en:"power → engines",ar:'المحرّكات → engines',tr:'بعض الطائرات الكبيرة لديها ستّة محرّكات للرحلات الطويلة.'},
  {q:"The students _______ papers to check their answers.",o:["greased","leaked","exchanged","stalled"],a:2,en:"traded → exchanged",ar:'تبادلوا → exchanged',tr:'تبادل الطلاب الأوراق للتحقّق من إجاباتهم.'},
  {q:"The first _______ of the book was interesting, but I didn't like the end.",o:["satisfaction","noise","part","oil"],a:2,en:"section → part",ar:'جزء → part',tr:'كان الجزء الأول من الكتاب ممتعاً، لكنّني لم أحبّ النهاية.'},
  {q:"What kind of _______ does your boat have?",o:["brake","charge","grease","motor"],a:3,en:"boat power → motor",ar:'محرّك القارب → motor',tr:'أيّ نوع من المحرّكات في قاربك؟'},
  {q:"Tom drove cautiously on the _______ roads.",o:["ice","icy","icing","ices"],a:1,en:"ice → icy (صفة)",ar:'جليد → جليدية (icy)',tr:'قاد توم بحذر على الطرق الجليدية.'},
  {q:"After walking in the snow, we sat by the fire to _______.",o:["get back","tune up","give back","warm up"],a:3,en:"get warm → warm up",ar:'يتدفّأ → warm up',tr:'بعد المشي في الثلج، جلسنا قرب النار لنتدفّأ.'},
  {q:"Our television repair man _______ his work.",o:["exchanges","stalls","guarantees","greases"],a:2,en:"promises quality → guarantees",ar:'يضمن → guarantees',tr:'يضمن فنّي إصلاح التلفاز عمله.'},
  {q:"Sara really likes her new computer. She's _______ with it.",o:["leaky","dissatisfied","unhappy","satisfied"],a:3,en:"likes it → satisfied",ar:'راضية → satisfied',tr:'تحبّ سارة حاسوبها الجديد كثيراً، إنها راضية عنه.'},
  {q:"Ron used his garden _______ to wash his car.",o:["hose","part","brake","jack"],a:0,en:"water tube → hose",ar:'خرطوم الماء → hose',tr:'استخدم رون خرطوم حديقته لغسل سيّارته.'},
],
l4:[
  {q:"Can you change the TV _______? I don't want to watch this show.",o:["channel","entertainment","commercial","variety"],a:0,en:"TV station → channel",ar:'محطة التلفاز → قناة (channel)',tr:'هل يمكنك تغيير القناة؟ لا أريد مشاهدة هذا البرنامج.'},
  {q:"The server at the restaurant brought our food _______.",o:["loudly","rudely","terribly","promptly"],a:3,en:"on time → promptly",ar:'بسرعة/في موعده → promptly',tr:'أحضر النادل طعامنا بسرعة.'},
  {q:"Jan _______ Italian food. It's her favorite.",o:["entertains","loves","feels","spends"],a:1,en:"likes a lot → loves",ar:'تحبّ كثيراً → loves',tr:'تحبّ جان الطعام الإيطالي، إنه المفضّل لديها.'},
  {q:"When you visit New York City, you can find a lot of _______.",o:["cards","entertainment","plans","commercial"],a:1,en:"fun things → entertainment",ar:'وسائل التسلية → entertainment',tr:'حين تزور مدينة نيويورك، تجد الكثير من وسائل الترفيه.'},
  {q:"What are your _______ for this weekend? Are you going out of town?",o:["cards","opinions","loves","plans"],a:3,en:"intentions → plans",ar:'ما تنوي فعله → خطط (plans)',tr:'ما خططك لعطلة الأسبوع؟ هل ستسافر خارج المدينة؟'},
  {q:"I like this restaurant. The menu has a large _______ of food.",o:["dish","plan","meal","variety"],a:3,en:"many kinds → variety",ar:'أصناف متنوّعة → variety',tr:'يعجبني هذا المطعم، قائمته تحوي تنوّعاً كبيراً من الطعام.'},
  {q:"When the Wilsons came over, we played _______ until 10 p.m.",o:["cards","dishes","programs","letters"],a:0,en:"game → cards",ar:'لعبة الورق → cards',tr:'عندما زارنا آل ويلسون، لعبنا الورق حتى العاشرة مساءً.'},
  {q:"Sir, would you like our beef or chicken _______? They are both very good.",o:["card","plan","dish","idea"],a:2,en:"food serving → dish",ar:'طبق الطعام → dish',tr:'سيّدي، أتريد طبق اللحم أم الدجاج؟ كلاهما لذيذ جداً.'},
  {q:"While I was driving home, the icy road _______ me.",o:["spent","frightened","served","planned"],a:1,en:"scared → frightened",ar:'أخافني → frightened',tr:'بينما كنت أقود إلى البيت، أخافتني الطريق الجليدية.'},
  {q:"Sports shows are my favorite TV _______.",o:["channels","programs","commercials","collections"],a:1,en:"shows → programs",ar:'البرامج → programs',tr:'برامج الرياضة هي برامجي التلفازية المفضّلة.'},
  {q:"Can you _______ a good restaurant in this city?",o:["serve","entertain","intend","recommend"],a:3,en:"suggest → recommend",ar:'يقترح/يوصي → recommend',tr:'هل يمكنك التوصية بمطعم جيّد في هذه المدينة؟'},
  {q:"How do you _______ your free time on the weekend?",o:["feel","love","spend","recommend"],a:2,en:"use time → spend",ar:'يقضي الوقت → spend',tr:'كيف تقضي وقت فراغك في عطلة الأسبوع؟'},
  {q:"I'll get a snack from the kitchen when the _______ come on the TV.",o:["variety","channel","program","commercials"],a:3,en:"ad breaks → commercials",ar:'الإعلانات → commercials',tr:'سآخذ وجبة خفيفة من المطبخ عندما تبدأ الإعلانات على التلفاز.'},
  {q:"The soldiers really liked the movie, and they _______ a lot.",o:["laughed","could","planned","frightened"],a:0,en:"found it funny → laughed",ar:'ضحكوا → laughed',tr:'أعجب الجنود الفيلم كثيراً، وضحكوا كثيراً.'},
]
};

// ═══════════════════════════════════════
// REVIEW (مراجعة شاملة) — مختارات من قواعد ومفردات الدروس الأربعة
// ═══════════════════════════════════════
const REVIEW=[
  // — الدرس 1: المضارع التام والطبّ —
  {q:"I have had a cold _______ a week.",o:["ago","for","since","from"],a:1,en:"مدّة → for",ar:'مدّة → for',tr:'أُصبت بزكام منذ أسبوع (مدّة).'},
  {q:"Mary hasn't been here _______ Monday.",o:["for","since","ago","in"],a:1,en:"نقطة → since",ar:'نقطة زمنية → since',tr:'لم تكن ماري هنا منذ يوم الاثنين.'},
  {q:"Beth is using a thermometer. She has _______.",o:["a nurse","a temperature","an appointment","a channel"],a:1,en:"thermometer → temperature",ar:'ميزان الحرارة → حرارة',tr:'تستخدم بيث ميزان الحرارة، لديها ارتفاع في الحرارة.'},
  {q:"Jim doesn't play soccer _______.",o:["still","anymore","since","annual"],a:1,en:"stopped → anymore",ar:'توقّف → anymore',tr:'لم يعد جيم يلعب كرة القدم.'},
  {q:"How long _______ you had a headache?",o:["has","have","are","did"],a:1,en:"present perfect → have",ar:'المضارع التام → have',tr:'منذ متى ولديك صداع؟'},
  // — الدرس 2: قواعد الطريق —
  {q:"You're not driving fast enough. You need to _______.",o:["pull over","speed up","slow down","yield"],a:1,en:"go faster → speed up",ar:'يزيد السرعة → speed up',tr:'أنت لا تقود بسرعة كافية، تحتاج أن تُسرِع.'},
  {q:"I never met a person _______ liked to wash dishes.",o:["which","who","whom","that"],a:1,en:"person → who",ar:'شخص → who',tr:'لم أُقابل قطّ شخصاً يحبّ غسل الصحون.'},
  {q:"I'm afraid to fly. It makes me _______.",o:["relaxed","nervous","lost","great"],a:1,en:"afraid → nervous",ar:'خائف → متوتّر',tr:'أخاف الطيران، إنه يجعلني متوتّراً.'},
  {q:"When I called the library, _______ answered the phone.",o:["anybody","nobody","somebody","who"],a:1,en:"no answer → nobody",ar:'لا أحد → nobody',tr:'عندما اتّصلت بالمكتبة، لم يُجب أحد.'},
  {q:"Captain Peters will _______ a major next month.",o:["get","become","been","being"],a:1,en:"رتبة → become",ar:'يصير رتبة → become',tr:'سيُصبح النقيب بيترز رائداً الشهر القادم.'},
  // — الدرس 3: الاسترداد ومشاكل السيارة —
  {q:"A car that can't stop well needs _______.",o:["less grease","better brakes","more oil","new hoses"],a:1,en:"can't stop → brakes",ar:'لا يتوقّف → فرامل',tr:'السيّارة التي لا تتوقّف جيداً تحتاج فرامل أفضل.'},
  {q:"The coffee is still _______ hot to drink.",o:["also","too","very","much"],a:1,en:"أكثر من اللازم → too",ar:'أكثر من اللازم → too',tr:'القهوة ما زالت ساخنة جداً بحيث لا يمكن شربها.'},
  {q:"He went to the store _______ something.",o:["for buy","to buy","buying","buy"],a:1,en:"الغرض → to buy",ar:'الغرض → to + فعل',tr:'ذهب إلى المتجر ليشتري شيئاً.'},
  {q:"After working on his car, Tom's clothes were _______.",o:["noisy","greasy","icy","leaky"],a:1,en:"grease → greasy",ar:'شحم → دهنية',tr:'بعد العمل على سيّارته، أصبحت ملابس توم مليئة بالشحم.'},
  {q:"I'd like a _______, not an exchange.",o:["engine","refund","brake","part"],a:1,en:"money back → refund",ar:'إعادة المال → refund',tr:'أريد استرداد المال، لا استبدالاً.'},
  // — الدرس 4: التلفاز والأفلام —
  {q:"Tom _______ me that he was too busy.",o:["said","told","say","tells"],a:1,en:"مفعول → told",ar:'أخبرني → told me',tr:'أخبرني توم أنه مشغول جداً.'},
  {q:"We _______ see Bob, but he couldn't see us.",o:["can","could","would","will"],a:1,en:"قدرة ماضية → could",ar:'استطعنا → could',tr:'استطعنا رؤية بوب، لكنه لم يستطع رؤيتنا.'},
  {q:"The Smiths have been living in New York _______ 1999.",o:["for","since","until","at"],a:1,en:"نقطة → since",ar:'نقطة زمنية → since',tr:'يعيش آل سميث في نيويورك منذ عام 1999.'},
  {q:"Can you _______ a good restaurant in this city?",o:["serve","recommend","intend","entertain"],a:1,en:"suggest → recommend",ar:'يوصي → recommend',tr:'هل يمكنك التوصية بمطعم جيّد في هذه المدينة؟'},
  {q:"If you ask me, this movie is _______.",o:["busy","boring","sharp","prompt"],a:1,en:"not fun → boring",ar:'ممل → boring',tr:'برأيي، هذا الفيلم مُملّ.'},
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
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 1 — الطبّ والأعراض',w:[
    {e:'appointment',a:'موعد',em:'📅'},{e:'temperature',a:'حرارة',em:'🌡️'},{e:'emergency',a:'طارئ',em:'🚨'},
    {e:'symptom',a:'عَرَض',em:'🩹'},{e:'headache',a:'صداع',em:'🤕'},{e:'patient',a:'مريض',em:'🤒'},
    {e:'annual',a:'سنوي',em:'📆'},{e:'stomach',a:'المعدة',em:'🫃'},
    {e:'cough',a:'سُعال',em:'😷'},{e:'cold',a:'زكام',em:'🤧'},
    {e:'nurse',a:'ممرّض/ة',em:'🧑‍⚕️'},{e:'runny',a:'سائل/يسيل',em:'💧'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 2 — قواعد الطريق',w:[
    {e:'intersection',a:'تقاطع',em:'🚦'},{e:'pedestrian',a:'مشاة',em:'🚶'},{e:'sidewalk',a:'رصيف',em:'🚶‍♂️'},
    {e:'signal',a:'إشارة',em:'🚥'},{e:'instructor',a:'مدرّب',em:'🧑‍🏫'},{e:'nervous',a:'متوتّر',em:'😰'},
    {e:'yield',a:'أفسِح الطريق',em:'🔻'},{e:'caution',a:'حذر',em:'⚠️'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 3 — I\'d like a refund',w:[
    {e:'refund',a:'استرداد المال',em:'💸'},{e:'engine',a:'محرّك',em:'⚙️'},{e:'guarantee',a:'ضمان',em:'📜'},
    {e:'exchange',a:'يستبدل',em:'🔄'},{e:'greasy',a:'دهني',em:'🛢️'},{e:'satisfied',a:'راضٍ',em:'🙂'},
    {e:'noisy',a:'صاخب',em:'🔊'},{e:'brake',a:'فرامل',em:'🛑'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 4 — How was the show?',w:[
    {e:'entertainment',a:'ترفيه',em:'🎭'},{e:'channel',a:'قناة',em:'📡'},{e:'commercial',a:'إعلان',em:'📢'},
    {e:'variety',a:'تنوّع',em:'🎪'},{e:'recommend',a:'يوصي',em:'👍'},{e:'boring',a:'مُملّ',em:'😑'},
    {e:'promptly',a:'بسرعة',em:'⏱️'},{e:'wonderful',a:'رائع',em:'🌟'},
  ]},
];

// ═══════════════════════════════════════
// LISTENING — فيديوهات الاستماع (Quiz A · B · C)
// ═══════════════════════════════════════
const YT_VIDEOS=[
  {id:'HtBvQIGIUis',t:'Quiz A',s:'استماع وقراءة مع الحل'},
  {id:'eC4FBpVML00',t:'Quiz B',s:'استماع وقراءة مع الحل'},
  {id:'QHsGyhQyr-Y',t:'Quiz C',s:'استماع وقراءة مع الحل'},
];

// ═══════════════════════════════════════
// ROUTING MANIFEST
// ═══════════════════════════════════════
const SCREENS=['home','lscreen','rscreen','ytscreen','fscreen','vtscreen','spscreen','mkscreen'];
const SCREEN_NAMES={home:'الرئيسية',lscreen:'درس',rscreen:'المراجعة',ytscreen:'الاستماع',fscreen:'الاختبار النهائي',vtscreen:'اختبار المفردات',spscreen:'الإملاء',mkscreen:'مراجعة الأخطاء'};
