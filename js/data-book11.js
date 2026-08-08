// ═══════════════════════════════════════
// DATA — BOOK 11
// Lesson 1 (Medical appointments) — vocab, grammar, word-order, per-lesson quiz.
// Built lesson by lesson; more lessons get appended here later.
// ═══════════════════════════════════════
const BOOK_ID='book11';

const LESSON_META={
  l1:{ico:'🩺',title:'Lesson 1 — Medical appointments',sub:'المواعيد الطبية والأعراض · المضارع التام (since/for) · How long · المضارع التام المستمر'},
  l2:{ico:'🚦',title:'Lesson 2 — Rules of the road',sub:'قيادة السيارة وقواعد الطريق · الأفعال الرابطة get/become · الضمائر المبهمة · الجمل الوصفية who/which/that'}
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
]
};

// ═══════════════════════════════════════
// FINAL EXAM (الاختبار النهائي) — يجمع أسئلة الدروس المتاحة
// ═══════════════════════════════════════
const FINAL=dedupe_by_q([
  ...EE.l1,
  ...EE.l2,
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
