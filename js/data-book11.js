// ═══════════════════════════════════════
// DATA — BOOK 11
// Lesson 1 (Medical appointments) — vocab, grammar, word-order, per-lesson quiz.
// Built lesson by lesson; more lessons get appended here later.
// ═══════════════════════════════════════
const BOOK_ID='book11';

const LESSON_META={
  l1:{ico:'🩺',title:'Lesson 1 — Medical appointments',sub:'المواعيد الطبية والأعراض · المضارع التام (since/for) · How long · المضارع التام المستمر'}
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
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 1 — الطبّ والأعراض',w:[
    {e:'appointment',a:'موعد',em:'📅'},{e:'temperature',a:'حرارة',em:'🌡️'},{e:'emergency',a:'طارئ',em:'🚨'},
    {e:'symptom',a:'عَرَض',em:'🩹'},{e:'headache',a:'صداع',em:'🤕'},{e:'patient',a:'مريض',em:'🤒'},
    {e:'annual',a:'سنوي',em:'📆'},{e:'stomach',a:'المعدة',em:'🫃'},
    {e:'cough',a:'سُعال',em:'😷'},{e:'cold',a:'زكام',em:'🤧'},
    {e:'nurse',a:'ممرّض/ة',em:'🧑‍⚕️'},{e:'runny',a:'سائل/يسيل',em:'💧'},
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
