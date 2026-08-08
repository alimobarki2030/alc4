// ═══════════════════════════════════════
// DATA — BOOK 3
// Lesson 1 (He gets up early) — vocab, grammar, word-order, per-lesson quiz.
// Built lesson by lesson; more lessons get appended here later.
// ═══════════════════════════════════════
const BOOK_ID='book3';

const LESSON_META={
  l1:{ico:'⏰',title:'Lesson 1 — He gets up early',sub:'الحياة اليومية · المضارع البسيط · النفي · أسئلة نعم/لا · أوقات اليوم'},
  l2:{ico:'🗣️',title:'Lesson 2 — They speak English',sub:'اللغات · أسئلة who و WH · الفعل have · ظروف التكرار (always/sometimes/never)'},
  l3:{ico:'🌍',title:'Lesson 3 — Where are you from?',sub:'الدول والجنسيات · شهور السنة · How many · الوقت والتواريخ · الماضي was/were'},
  l4:{ico:'🎖️',title:"Lesson 4 — I'm in the Army now",sub:'الرُّتب العسكرية · الصفات · want to + فعل · أسئلة الماضي (Who/What/Where/When + BE)'}
};
const LESSON_KEYS=Object.keys(LESSON_META);

// ═══════════════════════════════════════
// VOCABULARY
// ═══════════════════════════════════════
const VOCAB={
l1:[
  // — الأنشطة اليومية —
  {e:'get up',a:'يستيقظ / ينهض',em:'⏰'},
  {e:'get dressed',a:'يرتدي ملابسه',em:'👕'},
  {e:'take a shower',a:'يستحمّ (دُش)',em:'🚿'},
  {e:'shower',a:'دُش / يستحمّ',em:'🚿'},
  {e:'shave',a:'يحلق',em:'🪒'},
  {e:'swim',a:'يسبح',em:'🏊'},
  {e:'study',a:'يذاكر / يدرس',em:'📖'},
  {e:'sleep',a:'ينام',em:'😴'},
  {e:'go to bed',a:'يذهب إلى الفراش',em:'🛏️'},
  {e:'go to class',a:'يذهب إلى الصفّ',em:'🏫'},
  {e:'eat',a:'يأكل',em:'🍽️'},
  {e:'drink',a:'يشرب',em:'🥤'},
  {e:'want',a:'يريد',em:'🙏'},
  {e:'watch television',a:'يشاهد التلفاز',em:'📺'},
  // — أوقات اليوم —
  {e:'morning',a:'الصباح',em:'🌅'},
  {e:'noon',a:'الظُّهر (١٢ ظهراً)',em:'🌞'},
  {e:'afternoon',a:'بعد الظُّهر',em:'🌤️'},
  {e:'evening',a:'المساء',em:'🌆'},
  {e:'night',a:'الليل',em:'🌙'},
  {e:'midnight',a:'منتصف الليل (١٢ ليلاً)',em:'🕛'},
  {e:'a.m.',a:'صباحاً (قبل الظُّهر)',em:'🔆'},
  {e:'p.m.',a:'مساءً (بعد الظُّهر)',em:'🌘'},
  // — كلمات الوقت والوصف —
  {e:'early',a:'مبكّراً',em:'🐓'},
  {e:'late',a:'متأخّراً',em:'🐢'},
  {e:'before',a:'قبل',em:'⏮️'},
  {e:'after',a:'بعد',em:'⏭️'},
  {e:'every',a:'كل',em:'🔁'},
  {e:'for',a:'لِـ / من أجل',em:'🎯'},
  {e:'hungry',a:'جائع',em:'😋'},
  {e:'thirsty',a:'عطشان',em:'🥵'},
  {e:'lesson',a:'الدرس',em:'📘'},
  {e:'class',a:'الصفّ / الحصّة',em:'🧑‍🏫'},
  {e:'snack',a:'وجبة خفيفة',em:'🍎'},
  // — الوجبات والطعام —
  {e:'breakfast',a:'الفطور',em:'🍳'},
  {e:'lunch',a:'الغداء',em:'🍱'},
  {e:'dinner',a:'العشاء',em:'🍽️'},
  {e:'eggs',a:'بيض',em:'🥚'},
  {e:'fruit',a:'فاكهة',em:'🍇'},
  {e:'salad',a:'سلطة',em:'🥗'},
  {e:'chicken',a:'دجاج',em:'🍗'},
  {e:'beef',a:'لحم بقر',em:'🥩'},
  {e:'fish',a:'سمك',em:'🐟'},
  {e:'water',a:'ماء',em:'💧'},
  {e:'juice',a:'عصير',em:'🧃'},
  {e:'coffee',a:'قهوة',em:'☕'},
  {e:'milk',a:'حليب',em:'🥛'},
],
l2:[
  // — اللغات —
  {e:'language',a:'لغة',em:'🗣️'},
  {e:'English',a:'الإنجليزية',em:'🇬🇧'},
  {e:'Arabic',a:'العربية',em:'🇸🇦'},
  {e:'Spanish',a:'الإسبانية',em:'🇪🇸'},
  {e:'French',a:'الفرنسية',em:'🇫🇷'},
  {e:'Chinese',a:'الصينية',em:'🇨🇳'},
  {e:'Japanese',a:'اليابانية',em:'🇯🇵'},
  {e:'Korean',a:'الكورية',em:'🇰🇷'},
  {e:'Russian',a:'الروسية',em:'🇷🇺'},
  {e:'Italian',a:'الإيطالية',em:'🇮🇹'},
  // — أفعال الدراسة والتواصل —
  {e:'speak',a:'يتحدّث',em:'💬'},
  {e:'learn',a:'يتعلّم',em:'🧠'},
  {e:'teach',a:'يُعلّم',em:'👩‍🏫'},
  {e:'know',a:'يعرف',em:'💡'},
  {e:'say',a:'يقول',em:'🗨️'},
  {e:'hear',a:'يسمع',em:'👂'},
  {e:'see',a:'يرى',em:'👀'},
  {e:'repeat',a:'يُكرّر',em:'🔁'},
  {e:'leave',a:'يغادر',em:'🚪'},
  {e:'have',a:'يملك / لديه',em:'🤲'},
  {e:'has',a:'يملك (للمفرد he/she/it)',em:'🤲'},
  // — وسائل السفر —
  {e:'bus',a:'حافلة',em:'🚌'},
  {e:'car',a:'سيارة',em:'🚗'},
  {e:'taxi',a:'سيارة أجرة',em:'🚕'},
  {e:'train',a:'قطار',em:'🚆'},
  {e:'truck',a:'شاحنة',em:'🚚'},
  {e:'plane',a:'طائرة',em:'✈️'},
  {e:'airplane',a:'طائرة',em:'🛩️'},
  // — أماكن ومفردات الدراسة —
  {e:'board',a:'السبّورة',em:'📋'},
  {e:'library',a:'المكتبة',em:'📚'},
  {e:'classroom',a:'غرفة الصفّ',em:'🏫'},
  {e:'hamburger',a:'همبرغر',em:'🍔'},
  {e:'French fries',a:'بطاطس مقلية',em:'🍟'},
  // — ظروف التكرار وكلمات السؤال —
  {e:'always',a:'دائماً',em:'💯'},
  {e:'sometimes',a:'أحياناً',em:'🔸'},
  {e:'never',a:'أبداً',em:'🚫'},
  {e:'how often',a:'كم مرّة',em:'❓'},
  {e:'when',a:'متى',em:'🕐'},
  {e:'who',a:'مَن',em:'🙋'},
  {e:'where',a:'أين',em:'📍'},
  {e:'what',a:'ماذا',em:'❔'},
],
l3:[
  // — الدول —
  {e:'country',a:'دولة / بلد',em:'🌍'},
  {e:'the United States',a:'الولايات المتّحدة',em:'🇺🇸'},
  {e:'Canada',a:'كندا',em:'🇨🇦'},
  {e:'England',a:'إنجلترا',em:'🏴'},
  {e:'France',a:'فرنسا',em:'🇫🇷'},
  {e:'Spain',a:'إسبانيا',em:'🇪🇸'},
  {e:'China',a:'الصين',em:'🇨🇳'},
  {e:'Japan',a:'اليابان',em:'🇯🇵'},
  {e:'Russia',a:'روسيا',em:'🇷🇺'},
  {e:'Egypt',a:'مصر',em:'🇪🇬'},
  {e:'Saudi Arabia',a:'السعودية',em:'🇸🇦'},
  {e:'Venezuela',a:'فنزويلا',em:'🇻🇪'},
  // — شهور السنة —
  {e:'January',a:'يناير',em:'📅'},
  {e:'February',a:'فبراير',em:'📅'},
  {e:'March',a:'مارس',em:'📅'},
  {e:'April',a:'أبريل',em:'📅'},
  {e:'May',a:'مايو',em:'📅'},
  {e:'June',a:'يونيو',em:'📅'},
  {e:'July',a:'يوليو',em:'📅'},
  {e:'August',a:'أغسطس',em:'📅'},
  {e:'September',a:'سبتمبر',em:'📅'},
  {e:'October',a:'أكتوبر',em:'📅'},
  {e:'November',a:'نوفمبر',em:'📅'},
  {e:'December',a:'ديسمبر',em:'📅'},
  {e:'month',a:'شهر',em:'🗓️'},
  {e:'year',a:'سنة',em:'📆'},
  // — الوقت —
  {e:'second',a:'ثانية',em:'⏱️'},
  {e:'minute',a:'دقيقة',em:'⏱️'},
  {e:'hour',a:'ساعة',em:'🕐'},
  {e:'week',a:'أسبوع',em:'🗓️'},
  {e:'how many',a:'كم (عدد)',em:'🔢'},
  {e:'yesterday',a:'أمس',em:'⬅️'},
  {e:'ago',a:'مضى / قبل',em:'⏪'},
  {e:'last',a:'الماضي / السابق',em:'◀️'},
  {e:'next',a:'القادم / التالي',em:'▶️'},
  {e:'was',a:'كان (للمفرد)',em:'🕰️'},
  {e:'were',a:'كانوا (للجمع)',em:'🕰️'},
  // — الدراسة والاختبار —
  {e:'quiz',a:'اختبار قصير',em:'📝'},
  {e:'test',a:'اختبار',em:'🧪'},
  {e:'dictionary',a:'قاموس',em:'📔'},
  {e:'answer sheet',a:'ورقة الإجابة',em:'📄'},
  {e:'test booklet',a:'كرّاسة الأسئلة',em:'📕'},
  {e:'look up',a:'يبحث عن (في القاموس)',em:'🔍'},
  {e:'review',a:'يُراجع',em:'♻️'},
  {e:'select',a:'يختار',em:'☑️'},
  {e:'choose',a:'يختار',em:'👉'},
  {e:'mark',a:'يُعلّم / يضع علامة',em:'✏️'},
  {e:'memorize',a:'يحفظ عن ظهر قلب',em:'🧠'},
],
l4:[
  // — الجيش والرُّتب —
  {e:'military',a:'الجيش / عسكري',em:'🎖️'},
  {e:'Army',a:'الجيش (البرّي)',em:'🪖'},
  {e:'Navy',a:'البحرية',em:'⚓'},
  {e:'Air Force',a:'القوات الجوية',em:'✈️'},
  {e:'Marine Corps',a:'مشاة البحرية',em:'🎯'},
  {e:'officer',a:'ضابط',em:'🎖️'},
  {e:'colonel',a:'عقيد',em:'🎖️'},
  {e:'soldier',a:'جندي',em:'🪖'},
  {e:'sailor',a:'بحّار',em:'⚓'},
  {e:'airman',a:'جندي جوي',em:'✈️'},
  {e:'Marine',a:'جندي بحرية',em:'🎯'},
  {e:'civilian',a:'مدني',em:'👔'},
  {e:'enlisted',a:'مُجنَّد (غير ضابط)',em:'🪖'},
  {e:'pilot',a:'طيّار',em:'👨‍✈️'},
  // — أفعال —
  {e:'want to',a:'يريد أن',em:'🙏'},
  {e:'drive',a:'يقود',em:'🚗'},
  {e:'fly',a:'يطير / يُحلّق',em:'🛫'},
  {e:'walk',a:'يمشي',em:'🚶'},
  {e:'work',a:'يعمل / عمل',em:'💼'},
  // — الصفات وأضدادها —
  {e:'tall',a:'طويل',em:'🦒'},
  {e:'short',a:'قصير',em:'🐕'},
  {e:'new',a:'جديد',em:'✨'},
  {e:'old',a:'قديم / كبير السن',em:'📿'},
  {e:'good',a:'جيّد',em:'👍'},
  {e:'bad',a:'سيّئ',em:'👎'},
  {e:'young',a:'صغير السنّ',em:'🧒'},
  {e:'happy',a:'سعيد',em:'😀'},
  {e:'angry',a:'غاضب',em:'😠'},
  {e:'tired',a:'متعب',em:'🥱'},
  {e:'sick',a:'مريض',em:'🤒'},
  {e:'right',a:'صحيح',em:'✅'},
  {e:'wrong',a:'خطأ',em:'❌'},
  // — تعابير —
  {e:'Here it is',a:'ها هو ذا (للمفرد)',em:'👇'},
  {e:'There they are',a:'ها هُم هناك (للجمع)',em:'👉'},
  {e:'all right',a:'حسناً / لا بأس',em:'🆗'},
  {e:'right now',a:'الآن حالاً',em:'⏰'},
],
};

// ═══════════════════════════════════════
// GRAMMAR
// ═══════════════════════════════════════
const GRAMMAR={
l1:[
  {
    title:'Simple Present Tense', ar:'المضارع البسيط (إضافة s)',
    rule:'نستخدم المضارع البسيط للأمور التي نفعلها بانتظام (كل يوم/كل صباح). نضيف s للفعل بعد he · she · it، ولا نضيفها بعد I · you · we · they.',
    parts:[
      {t:'He / She / It + verb + s',d:'المفرد الغائب يأخذ s. مثال: He eats lunch every day. = يأكل الغداء كل يوم.'},
      {t:'I / You / We / They + verb',d:'بلا s. مثال: They eat breakfast every morning. = يأكلون الفطور كل صباح.'},
      {t:'أفعال خاصّة',d:'study → studies · watch → watches · go → goes · do → does.'},
      {t:'كلمات التكرار',d:'every day · every morning · every evening تدلّ على المضارع البسيط.'},
    ],
    check:{q:'She _______ up at 6:00 every day.',o:['get','gets','getting','are get'],a:1,en:'she → gets (add s)',ar:'مع she نضيف s → gets'},
    formula:[{t:'He/She/It',c:'s'},{t:'+',c:'p'},{t:'verb + s',c:'v'},{t:'+',c:'p'},{t:'every day',c:'k'}],
    compare:[
      {c1:'I eat breakfast.',c2:'He eats breakfast.',ar:'مع he نضيف s'},
      {c1:'They study every evening.',c2:'She studies every evening.',ar:'study → studies'},
    ],
    examples:[
      {s:'He gets up at 6:00 a.m. every day.',tr:'يستيقظ الساعة ٦:٠٠ صباحاً كل يوم.',ar:'he → gets',ok:true},
      {s:'They swim at 4:00 every afternoon.',tr:'يسبحون الساعة ٤:٠٠ كل عصر.',ar:'they → swim (بلا s)',ok:true},
      {s:'She study her lesson every evening.',wrong:'study',right:'studies',tr:'مع she: study → studies.',ok:false},
    ]
  },
  {
    title:'Negative Simple Present', ar:'النفي (don\'t / doesn\'t)',
    rule:'للنفي نستخدم doesn\'t (does not) مع he · she · it، و don\'t (do not) مع I · you · we · they، ويبقى الفعل مجرّداً بلا s.',
    parts:[
      {t:"He / She / It + doesn't + verb",d:"المفرد الغائب. مثال: He doesn't sleep late. = لا ينام متأخّراً."},
      {t:"I / You / We / They + don't + verb",d:"مثال: They don't eat in the mess hall. = لا يأكلون في المطعم."},
      {t:'الفعل يعود مجرّداً',d:"بعد doesn't نحذف s: He sleeps → He doesn't sleep."},
    ],
    check:{q:'He _______ sleep late.',o:["don't","doesn't",'not','isn\'t'],a:1,en:"he → doesn't",ar:'مع he نستخدم doesn\'t'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:"don't / doesn't",c:'n'},{t:'+',c:'p'},{t:'verb',c:'v'}],
    compare:[
      {c1:'Pvt Garcia sleeps late.',c2:"Pvt Garcia doesn't sleep late.",ar:'sleeps → doesn\'t sleep'},
      {c1:'They eat in the mess hall.',c2:"They don't eat in the mess hall.",ar:'they → don\'t'},
    ],
    examples:[
      {s:"I don't eat breakfast in the morning.",tr:'لا آكل الفطور في الصباح.',ar:'I → don\'t',ok:true},
      {s:"Susan doesn't go to the gym at 3 p.m.",tr:'لا تذهب سوزان إلى النادي الساعة ٣ مساءً.',ar:'Susan → doesn\'t go',ok:true},
      {s:'He don\'t shave before class.',wrong:"don't",right:"doesn't",tr:'مع he نستخدم doesn\'t.',ok:false},
    ]
  },
  {
    title:'Yes / No Questions', ar:'أسئلة نعم/لا (Do / Does)',
    rule:'لتكوين سؤال نعم/لا نبدأ بـ Do مع I · you · we · they، و Does مع he · she · it، ويبقى الفعل مجرّداً.',
    parts:[
      {t:'Do + I/you/we/they + verb?',d:'مثال: Do the students eat breakfast? = هل يأكل الطلاب الفطور؟'},
      {t:'Does + he/she/it + verb?',d:'مثال: Does Stephen study every night? = هل يذاكر ستيفن كل ليلة؟'},
      {t:'الفعل بلا s في السؤال',d:'Does Jeff sleep late? (وليس sleeps).'},
    ],
    check:{q:'_______ Jeff sleep late every morning?',o:['Do','Does','Is','Are'],a:1,en:'Jeff (he) → Does',ar:'مع المفرد Jeff نبدأ بـ Does'},
    formula:[{t:'Do / Does',c:'v'},{t:'+',c:'p'},{t:'subject',c:'s'},{t:'+',c:'p'},{t:'verb?',c:'k'}],
    compare:[
      {c1:'The students eat breakfast.',c2:'Do the students eat breakfast?',ar:'جمع → Do'},
      {c1:'Stephen eats in the mess hall.',c2:'Does Stephen eat in the mess hall?',ar:'مفرد → Does + eat'},
    ],
    examples:[
      {s:'Do you eat a snack at night?',tr:'هل تأكل وجبة خفيفة في الليل؟',ar:'you → Do',ok:true},
      {s:'Does Jeff sleep late every morning?',tr:'هل ينام جيف متأخّراً كل صباح؟',ar:'Jeff → Does + sleep',ok:true},
      {s:'Does Stephen studies every night?',wrong:'studies',right:'study',tr:'بعد Does يبقى الفعل مجرّداً → study.',ok:false},
    ]
  },
  {
    title:'Long & Short Answers', ar:'الإجابات الطويلة والقصيرة',
    rule:'نُجيب سؤال نعم/لا بإجابة قصيرة: Yes, I do / No, I don\'t · Yes, he does / No, he doesn\'t — بحسب الفاعل.',
    parts:[
      {t:'Yes, I/you/we/they do.',d:'إجابة قصيرة بالإيجاب. مثال: Do you drink coffee? — Yes, I do.'},
      {t:"No, I/you/we/they don't.",d:"مثال: Do you drink coffee? — No, I don't."},
      {t:'Yes, he/she/it does. / No … doesn\'t.',d:'مثال: Does Stephen study? — Yes, he does. / No, he doesn\'t.'},
    ],
    check:{q:'Do you drink coffee? — No, I _______.',o:["don't","doesn't",'not','am not'],a:0,en:"I → don't",ar:'مع I نستخدم don\'t'},
    compare:[
      {c1:'Do you drink coffee?',c2:'Yes, I do. / No, I don\'t.',ar:'I → do / don\'t'},
      {c1:'Does Jan eat dinner early?',c2:'Yes, she does. / No, she doesn\'t.',ar:'she → does / doesn\'t'},
    ],
    examples:[
      {s:'Do you swim after class? — Yes, I do.',tr:'هل تسبح بعد الصفّ؟ — نعم.',ar:'I → do',ok:true},
      {s:"Does Stephen study every night? — No, he doesn't.",tr:'هل يذاكر ستيفن كل ليلة؟ — لا.',ar:'he → doesn\'t',ok:true},
      {s:'Do you eat lunch in your room? — No, I doesn\'t.',wrong:"doesn't",right:"don't",tr:'مع I نستخدم don\'t.',ok:false},
    ]
  }
],
l2:[
  {
    title:'Questions with WHO', ar:'السؤال بـ who (عن الفاعل)',
    rule:'للسؤال عن الفاعل نضع who مكان الفاعل ونُبقي الفعل بصيغته نفسها (مع s لأن who تُعامَل معاملة المفرد الغائب).',
    parts:[
      {t:'Who + verb + s ?',d:'مثال: Mark studies every day. → Who studies every day? = مَن يذاكر كل يوم؟'},
      {t:'who تأخذ الفعل بصيغة المفرد',d:'حتى لو كان الجواب جمعاً: Who studies here? — يبقى studies.'},
      {t:'مع فعل الكينونة: Who is / Who are',d:'Who is your teacher? · Who are your friends?'},
    ],
    check:{q:'_______ writes the words on the board?',o:['What','Who','Where','When'],a:1,en:'السؤال عن الفاعل → Who',ar:'نسأل عن الفاعل → Who'},
    formula:[{t:'Who',c:'v'},{t:'+',c:'p'},{t:'verb + s',c:'s'},{t:'+',c:'p'},{t:'…?',c:'k'}],
    compare:[
      {c1:'Mark studies every day.',c2:'Who studies every day?',ar:'الفاعل Mark → Who'},
      {c1:'Ms. Miller is the teacher.',c2:'Who is the teacher?',ar:'مع BE → Who is'},
    ],
    examples:[
      {s:'Who studies English every day?',tr:'مَن يذاكر الإنجليزية كل يوم؟',ar:'who + studies',ok:true},
      {s:'Who is your teacher?',tr:'مَن معلّمك؟',ar:'who + is',ok:true},
      {s:'Who study here?',wrong:'study',right:'studies',tr:'who تأخذ الفعل بصيغة المفرد → studies.',ok:false},
    ]
  },
  {
    title:'Information Questions (WH)', ar:'أسئلة المعلومات (what/where/when/how often)',
    rule:'لأسئلة المعلومات نبدأ بأداة السؤال (what · where · when · how often) ثم do/does ثم الفاعل ثم الفعل المجرّد.',
    parts:[
      {t:'What do/does … ?',d:'عن الشيء. مثال: What does Mark study? = ماذا يدرس مارك؟'},
      {t:'Where do/does … ?',d:'عن المكان. مثال: Where does Ms. Miller teach?'},
      {t:'When do/does … ?',d:'عن الوقت. مثال: When do you leave for class?'},
      {t:'How often do/does … ?',d:'عن التكرار. مثال: How often does Mark speak English?'},
    ],
    check:{q:'_______ does Mark study? — English.',o:['Who','What','When','Where'],a:1,en:'الجواب شيء (English) → What',ar:'نسأل عن الشيء → What'},
    formula:[{t:'WH',c:'v'},{t:'+',c:'p'},{t:'do/does',c:'n'},{t:'+',c:'p'},{t:'subject + verb?',c:'k'}],
    compare:[
      {c1:'Mark studies English.',c2:'What does Mark study?',ar:'الشيء English → What'},
      {c1:'He goes to class at 7:15.',c2:'When does he go to class?',ar:'الوقت → When'},
    ],
    examples:[
      {s:'Where does Ms. Miller teach?',tr:'أين تُعلّم الآنسة ميلر؟',ar:'Where + does',ok:true},
      {s:'How often does Mark speak English?',tr:'كم مرّة يتحدّث مارك الإنجليزية؟',ar:'How often + does',ok:true},
      {s:'What does Mark studies?',wrong:'studies',right:'study',tr:'بعد does يبقى الفعل مجرّداً → study.',ok:false},
    ]
  },
  {
    title:'Statements & Questions with HAVE', ar:'الفعل have (يملك)',
    rule:'have مع I · you · we · they، و has مع he · she · it. في السؤال والنفي نستخدم do/does + have.',
    parts:[
      {t:'I / You / We / They + have',d:'مثال: They have two cars. = لديهم سيّارتان.'},
      {t:'He / She / It + has',d:'مثال: Ms. Miller has ten students. = لديها عشرة طلاب.'},
      {t:'Do/Does … have ? — الأسئلة',d:'Do you have a truck? · Does John have your book?'},
      {t:'النفي: don\'t / doesn\'t have',d:"I don't have a car. · He doesn't have a car."},
    ],
    check:{q:'Mark and Pam _______ two cars.',o:['has','have','having',"doesn't have"],a:1,en:'جمع → have',ar:'مع الجمع نستخدم have'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'have / has',c:'v'},{t:'+',c:'p'},{t:'object',c:'k'}],
    compare:[
      {c1:'They have a radio.',c2:'Ms. Miller has ten students.',ar:'they → have · she → has'},
      {c1:'John has your book.',c2:'Does John have your book?',ar:'السؤال → Does … have'},
    ],
    examples:[
      {s:'Ms. Miller has ten students in her class.',tr:'لدى الآنسة ميلر عشرة طلاب في صفّها.',ar:'she → has',ok:true},
      {s:'Do you have a truck? — No, I don\'t.',tr:'هل لديك شاحنة؟ — لا.',ar:'Do you have',ok:true},
      {s:'She have two sisters.',wrong:'have',right:'has',tr:'مع she نستخدم has.',ok:false},
    ]
  },
  {
    title:'Adverbs of Frequency', ar:'ظروف التكرار (always/sometimes/never)',
    rule:'always (دائماً) · sometimes (أحياناً) · never (أبداً). توضع قبل الفعل العادي، وبعد فعل الكينونة (am/is/are).',
    parts:[
      {t:'قبل الفعل العادي',d:'مثال: Mark always speaks English. · They never speak Arabic in class.'},
      {t:'بعد فعل الكينونة',d:'مثال: Mark is always in class at 7:15. · They are never late.'},
      {t:'never = نفي',d:'never تحمل معنى النفي، فلا نضيف don\'t معها: He never eats fries (وليس doesn\'t never).'},
    ],
    check:{q:'Mark _______ speaks his own language in class. He speaks only English.',o:['always','sometimes','never','often'],a:2,en:'only English → never (his language)',ar:'يتحدّث الإنجليزية فقط → never للغته'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'always/sometimes/never',c:'n'},{t:'+',c:'p'},{t:'verb',c:'v'}],
    compare:[
      {c1:'Mark speaks English.',c2:'Mark always speaks English.',ar:'الظرف قبل الفعل'},
      {c1:'Mark is in class.',c2:'Mark is always in class.',ar:'بعد فعل الكينونة is'},
    ],
    examples:[
      {s:'The students always speak English in class.',tr:'يتحدّث الطلاب الإنجليزية دائماً في الصفّ.',ar:'always قبل الفعل',ok:true},
      {s:'Mark is never late for class.',tr:'مارك لا يتأخّر أبداً عن الصفّ.',ar:'never بعد is',ok:true},
      {s:'He never don\'t do his homework.',wrong:"never don't",right:'never',tr:'never وحدها كافية للنفي.',ok:false},
    ]
  }
],
l3:[
  {
    title:'How many + noun + BE', ar:'كم …؟ مع فعل الكينونة',
    rule:'للسؤال عن العدد مع فعل الكينونة: How many + اسم جمع + are/is. نستخدم اسماً جمعاً بعد how many.',
    parts:[
      {t:'How many + جمع + are …?',d:'مثال: How many students are in your class? = كم طالباً في صفّك؟'},
      {t:'الاسم يكون جمعاً',d:'students · desks · days — دائماً بصيغة الجمع بعد how many.'},
      {t:'الجواب',d:'Eight students are in my class. = ثمانية طلاب في صفّي.'},
    ],
    check:{q:'How many students _______ in your class?',o:['is','are','do','has'],a:1,en:'جمع students → are',ar:'مع الجمع نستخدم are'},
    formula:[{t:'How many',c:'v'},{t:'+',c:'p'},{t:'plural noun',c:'s'},{t:'+',c:'p'},{t:'are …?',c:'k'}],
    compare:[
      {c1:'Eight students are here.',c2:'How many students are here?',ar:'السؤال عن العدد → How many'},
      {c1:'Six desks are in the room.',c2:'How many desks are in the room?',ar:'اسم جمع + are'},
    ],
    examples:[
      {s:'How many students are in your class?',tr:'كم طالباً في صفّك؟',ar:'How many + are',ok:true},
      {s:'How many desks are in this room?',tr:'كم مكتباً في هذه الغرفة؟',ar:'جمع desks + are',ok:true},
      {s:'How many student is here?',wrong:'student is',right:'students are',tr:'بعد how many اسم جمع + are.',ok:false},
    ]
  },
  {
    title:'How many + noun + do/does', ar:'كم …؟ مع الأفعال (do/does)',
    rule:'للسؤال عن العدد مع فعل عادي: How many + اسم + do (I/you/we/they) أو does (he/she/it) + الفعل المجرّد.',
    parts:[
      {t:'How many … do you …?',d:'مثال: How many meals do you eat a day? = كم وجبة تأكل في اليوم؟'},
      {t:'How many … does he/she/it …?',d:'مثال: How many days does May have? = كم يوماً في مايو؟'},
      {t:'الفعل مجرّد بعد do/does',d:'How many days does May have (وليس has).'},
    ],
    check:{q:'How many days _______ May have?',o:['do','does','are','is'],a:1,en:'May (it) → does',ar:'مع المفرد May نستخدم does'},
    formula:[{t:'How many',c:'v'},{t:'+',c:'p'},{t:'noun + do/does',c:'n'},{t:'+',c:'p'},{t:'verb?',c:'k'}],
    compare:[
      {c1:'May has 31 days.',c2:'How many days does May have?',ar:'مفرد → does + have'},
      {c1:'You eat three meals.',c2:'How many meals do you eat?',ar:'you → do'},
    ],
    examples:[
      {s:'How many days does May have?',tr:'كم يوماً في مايو؟',ar:'does + have',ok:true},
      {s:'How many languages do you speak?',tr:'كم لغة تتحدّث؟',ar:'you → do + speak',ok:true},
      {s:'How many days does May has?',wrong:'has',right:'have',tr:'بعد does يبقى الفعل مجرّداً → have.',ok:false},
    ]
  },
  {
    title:'Past Tense of BE — was / were', ar:'ماضي فعل الكينونة (was/were)',
    rule:'الماضي من am/is هو was (مع I · he · she · it)، ومن are هو were (مع we · you · they). النفي: wasn\'t / weren\'t.',
    parts:[
      {t:'I / He / She / It → was',d:'مثال: I was in Spain last year. = كنت في إسبانيا العام الماضي.'},
      {t:'We / You / They → were',d:'مثال: They were in France two days ago. = كانوا في فرنسا قبل يومين.'},
      {t:'النفي wasn\'t / weren\'t',d:"I wasn't at the BX. · They weren't late."},
      {t:'كلمات الماضي',d:'yesterday · last (week/year) · … ago تدلّ على الماضي.'},
    ],
    check:{q:'Last week Mrs. White _______ my teacher.',o:['is','are','was','were'],a:2,en:'Mrs. White (she) + last week → was',ar:'مفرد + الماضي → was'},
    formula:[{t:'I/He/She/It',c:'s'},{t:'+',c:'p'},{t:'was',c:'v'},{t:'·',c:'p'},{t:'We/You/They + were',c:'k'}],
    compare:[
      {c1:'Bob is a student today.',c2:"Bob wasn't a student yesterday.",ar:'is → wasn\'t (ماضٍ منفي)'},
      {c1:'They are in the US now.',c2:'They were in France two days ago.',ar:'are → were'},
    ],
    examples:[
      {s:'I was in Spain last year.',tr:'كنت في إسبانيا العام الماضي.',ar:'I → was',ok:true},
      {s:'They were in France two days ago.',tr:'كانوا في فرنسا قبل يومين.',ar:'they → were',ok:true},
      {s:'They was in class yesterday.',wrong:'was',right:'were',tr:'مع they نستخدم were.',ok:false},
    ]
  },
  {
    title:'Past Yes/No Questions with BE', ar:'أسئلة نعم/لا في الماضي (was/were)',
    rule:'لتكوين سؤال في الماضي مع BE نُقدّم was/were قبل الفاعل ونضع علامة استفهام. الجواب القصير: Yes, he was / No, he wasn\'t.',
    parts:[
      {t:'Was + I/he/she/it …?',d:'مثال: Was John in class yesterday? — Yes, he was.'},
      {t:'Were + we/you/they …?',d:'مثال: Were you at home last night? — No, I wasn\'t.'},
      {t:'الإجابة القصيرة',d:'Yes, they were. / No, they weren\'t.'},
    ],
    check:{q:'_______ you at home last night?',o:['Was','Were','Did','Do'],a:1,en:'you → Were',ar:'مع you نستخدم Were'},
    formula:[{t:'Was / Were',c:'v'},{t:'+',c:'p'},{t:'subject',c:'s'},{t:'+',c:'p'},{t:'…?',c:'k'}],
    compare:[
      {c1:'He was in class yesterday.',c2:'Was he in class yesterday?',ar:'نُقدّم was'},
      {c1:'They were happy.',c2:'Were they happy?',ar:'نُقدّم were'},
    ],
    examples:[
      {s:'Was John in class yesterday? — Yes, he was.',tr:'هل كان جون في الصفّ أمس؟ — نعم.',ar:'Was + he was',ok:true},
      {s:'Were you at home last night? — No, I wasn\'t.',tr:'هل كنت في البيت ليلة أمس؟ — لا.',ar:'Were + wasn\'t',ok:true},
      {s:'Was they in the BX?',wrong:'Was they',right:'Were they',tr:'مع they نستخدم Were.',ok:false},
    ]
  }
],
l4:[
  {
    title:'Adjectives before Nouns', ar:'الصفة قبل الاسم',
    rule:'الصفة التي تصف اسماً توضع قبله ولا تتغيّر: The man is tall. → He\'s a tall man.',
    parts:[
      {t:'a/an + صفة + اسم',d:'مثال: It\'s a new car. = إنها سيارة جديدة.'},
      {t:'الصفة لا تتغيّر',d:'a tall man · two tall men — تبقى tall كما هي.'},
      {t:'an قبل حرف متحرّك',d:'an old car · an angry man.'},
    ],
    check:{q:'The car is new. It\'s a _______ car.',o:['news','newer','new','newly'],a:2,en:'الصفة قبل الاسم بلا تغيير → new',ar:'الصفة تبقى كما هي → new'},
    formula:[{t:'a / an',c:'s'},{t:'+',c:'p'},{t:'adjective',c:'v'},{t:'+',c:'p'},{t:'noun',c:'k'}],
    compare:[
      {c1:'The man is tall.',c2:"He's a tall man.",ar:'الصفة قبل الاسم'},
      {c1:'The car is old.',c2:"It's an old car.",ar:'an قبل حرف متحرّك'},
    ],
    examples:[
      {s:"My brother has a new car.",tr:'لدى أخي سيارة جديدة.',ar:'new + car',ok:true},
      {s:"She's a young sailor.",tr:'إنها بحّارة شابّة.',ar:'young + sailor',ok:true},
      {s:'He\'s a man tall.',wrong:'man tall',right:'tall man',tr:'الصفة تأتي قبل الاسم → tall man.',ok:false},
    ]
  },
  {
    title:'want to + verb', ar:'want to + فعل (يريد أن)',
    rule:'نستخدم want to مع I·you·we·they، و wants to مع he·she·it، يليها الفعل المجرّد. النفي: don\'t/doesn\'t want to.',
    parts:[
      {t:'I/You/We/They + want to + verb',d:'مثال: I want to study. = أريد أن أذاكر.'},
      {t:'He/She/It + wants to + verb',d:'مثال: He wants to read. = يريد أن يقرأ.'},
      {t:'النفي',d:"I don't want to go. · She doesn't want to work."},
    ],
    check:{q:'She _______ work today.',o:["want to","wants to","doesn't want to","don't want to"],a:2,en:'she + النفي → doesn\'t want to',ar:'مع she في النفي → doesn\'t want to'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'want(s) to',c:'v'},{t:'+',c:'p'},{t:'verb',c:'k'}],
    compare:[
      {c1:'I want to eat.',c2:'He wants to eat.',ar:'he → wants to'},
      {c1:'They want to study.',c2:"They don't want to study.",ar:'النفي don\'t want to'},
    ],
    examples:[
      {s:'I want to read my new book.',tr:'أريد أن أقرأ كتابي الجديد.',ar:'want to + read',ok:true},
      {s:"He doesn't want to get up early.",tr:'لا يريد أن يستيقظ مبكّراً.',ar:'doesn\'t want to',ok:true},
      {s:'She wants to works here.',wrong:'wants to works',right:'wants to work',tr:'بعد to يبقى الفعل مجرّداً → work.',ok:false},
    ]
  },
  {
    title:'Yes/No Questions with want to', ar:'أسئلة نعم/لا مع want to',
    rule:'نبدأ بـ Do مع I·you·we·they، و Does مع he·she·it، ثم الفاعل ثم want to + الفعل.',
    parts:[
      {t:'Do you want to …?',d:'مثال: Do you want to study now? — Yes, I do.'},
      {t:'Does he/she want to …?',d:'مثال: Does she want to buy a car? — No, she doesn\'t.'},
      {t:'الفعل بعد to مجرّد',d:'Does he want to go? (وليس goes).'},
    ],
    check:{q:'_______ he want to learn English?',o:['Do','Does','Is','Are'],a:1,en:'he → Does',ar:'مع المفرد he نستخدم Does'},
    formula:[{t:'Do / Does',c:'v'},{t:'+',c:'p'},{t:'subject + want to',c:'s'},{t:'+',c:'p'},{t:'verb?',c:'k'}],
    compare:[
      {c1:'You want to study.',c2:'Do you want to study?',ar:'you → Do'},
      {c1:'She wants to swim.',c2:'Does she want to swim?',ar:'she → Does + want to'},
    ],
    examples:[
      {s:'Do you want to study at the library? — No, I don\'t.',tr:'هل تريد أن تذاكر في المكتبة؟ — لا.',ar:'Do you want to',ok:true},
      {s:'Does he want to learn English? — Yes, he does.',tr:'هل يريد أن يتعلّم الإنجليزية؟ — نعم.',ar:'Does he want to',ok:true},
      {s:'Does she wants to buy a car?',wrong:'wants',right:'want',tr:'بعد Does يبقى want مجرّداً.',ok:false},
    ]
  },
  {
    title:'Past WH Questions with BE', ar:'أسئلة الماضي (Who/What/Where/When + was/were)',
    rule:'للسؤال في الماضي عن الفاعل/الشيء/المكان/الوقت نستخدم Who·What·Where·When + was/were. was مع I·he·she·it، و were مع we·you·they.',
    parts:[
      {t:'Who + was …?',d:'عن الفاعل. Frank was in England. → Who was in England?'},
      {t:'What + was …?',d:'عن الشيء. The book was on the table. → What was on the table?'},
      {t:'Where + was/were …?',d:'عن المكان. Where was John last night? · Where were they?'},
      {t:'When + was/were …?',d:'عن الوقت. When was your father in Venezuela? — Last year.'},
    ],
    check:{q:'_______ was in England last year? — Frank.',o:['What','Where','Who','When'],a:2,en:'السؤال عن الفاعل → Who',ar:'الجواب شخص (Frank) → Who'},
    formula:[{t:'WH',c:'v'},{t:'+',c:'p'},{t:'was / were',c:'n'},{t:'+',c:'p'},{t:'…?',c:'k'}],
    compare:[
      {c1:'Frank was in England.',c2:'Who was in England?',ar:'الفاعل → Who'},
      {c1:'They were at the snack bar.',c2:'Where were they?',ar:'المكان + جمع → Where were'},
    ],
    examples:[
      {s:'Where were you last night?',tr:'أين كنت ليلة أمس؟',ar:'Where + were',ok:true},
      {s:'When was your father in Venezuela?',tr:'متى كان والدك في فنزويلا؟',ar:'When + was',ok:true},
      {s:'Where were John last night?',wrong:'were',right:'was',tr:'مع المفرد John نستخدم was.',ok:false},
    ]
  }
],
};

// ═══════════════════════════════════════
// WO — "رتّب الجملة" (word order)
// ═══════════════════════════════════════
const WO={
l1:[
  {words:['He','gets','up','at','6:00','every','day'],ans:'He gets up at 6:00 every day.',tr:'يستيقظ الساعة ٦:٠٠ كل يوم.',ar:'المضارع البسيط (he + gets)'},
  {words:['They','go','to','class','every','morning'],ans:'They go to class every morning.',tr:'يذهبون إلى الصفّ كل صباح.',ar:'they + go (بلا s)'},
  {words:['She','studies','her','lesson','every','evening'],ans:'She studies her lesson every evening.',tr:'تذاكر درسها كل مساء.',ar:'study → studies'},
  {words:['He',"doesn't",'sleep','late'],ans:"He doesn't sleep late.",tr:'لا ينام متأخّراً.',ar:'النفي doesn\'t'},
  {words:['I',"don't",'eat','breakfast'],ans:"I don't eat breakfast.",tr:'لا آكل الفطور.',ar:'النفي don\'t'},
  {words:['Do','the','students','eat','breakfast','every','day'],ans:'Do the students eat breakfast every day?',tr:'هل يأكل الطلاب الفطور كل يوم؟',ar:'سؤال بـ Do'},
  {words:['Does','Stephen','study','every','night'],ans:'Does Stephen study every night?',tr:'هل يذاكر ستيفن كل ليلة؟',ar:'سؤال بـ Does'},
  {words:["Let's",'go','to','lunch'],ans:"Let's go to lunch.",tr:'لنذهب إلى الغداء.',ar:'الاقتراح Let\'s'},
],
l2:[
  {words:['Who','studies','English','every','day'],ans:'Who studies English every day?',tr:'مَن يذاكر الإنجليزية كل يوم؟',ar:'سؤال بـ who'},
  {words:['What','does','Mark','study'],ans:'What does Mark study?',tr:'ماذا يدرس مارك؟',ar:'سؤال معلومات بـ what'},
  {words:['When','do','you','leave','for','class'],ans:'When do you leave for class?',tr:'متى تغادر إلى الصفّ؟',ar:'سؤال بـ when'},
  {words:['Where','does','Ms.','Miller','teach'],ans:'Where does Ms. Miller teach?',tr:'أين تُعلّم الآنسة ميلر؟',ar:'سؤال بـ where'},
  {words:['Mark','and','Pam','have','two','cars'],ans:'Mark and Pam have two cars.',tr:'لدى مارك وبام سيّارتان.',ar:'الجمع + have'},
  {words:['Does','John','have','your','book'],ans:'Does John have your book?',tr:'هل لدى جون كتابك؟',ar:'سؤال بـ Does … have'},
  {words:['They','always','speak','English','in','class'],ans:'They always speak English in class.',tr:'يتحدّثون الإنجليزية دائماً في الصفّ.',ar:'always قبل الفعل'},
  {words:['Mark','never','speaks','French'],ans:'Mark never speaks French.',tr:'مارك لا يتحدّث الفرنسية أبداً.',ar:'never = نفي'},
],
l3:[
  {words:['How','many','students','are','in','your','class'],ans:'How many students are in your class?',tr:'كم طالباً في صفّك؟',ar:'How many + are'},
  {words:['How','many','days','does','May','have'],ans:'How many days does May have?',tr:'كم يوماً في مايو؟',ar:'How many + does'},
  {words:['I','was','in','Spain','last','year'],ans:'I was in Spain last year.',tr:'كنت في إسبانيا العام الماضي.',ar:'I → was'},
  {words:['They','were','in','France','two','days','ago'],ans:'They were in France two days ago.',tr:'كانوا في فرنسا قبل يومين.',ar:'they → were'},
  {words:['Was','John','in','class','yesterday'],ans:'Was John in class yesterday?',tr:'هل كان جون في الصفّ أمس؟',ar:'سؤال ماضٍ بـ Was'},
  {words:['Were','you','at','home','last','night'],ans:'Were you at home last night?',tr:'هل كنت في البيت ليلة أمس؟',ar:'سؤال ماضٍ بـ Were'},
  {words:['Where','are','you','from'],ans:'Where are you from?',tr:'من أين أنت؟',ar:'السؤال عن البلد'},
  {words:['Today','is','Tuesday','.','Yesterday','was','Monday'],ans:'Today is Tuesday. Yesterday was Monday.',tr:'اليوم الثلاثاء. أمس كان الاثنين.',ar:'اليوم/أمس + was'},
],
l4:[
  {words:['He\'s','a','tall','man'],ans:"He's a tall man.",tr:'إنه رجل طويل.',ar:'الصفة قبل الاسم'},
  {words:['My','brother','has','a','new','car'],ans:'My brother has a new car.',tr:'لدى أخي سيارة جديدة.',ar:'new + car'},
  {words:['I','want','to','read','my','new','book'],ans:'I want to read my new book.',tr:'أريد أن أقرأ كتابي الجديد.',ar:'want to + verb'},
  {words:['She',"doesn't",'want','to','work','today'],ans:"She doesn't want to work today.",tr:'لا تريد أن تعمل اليوم.',ar:'doesn\'t want to'},
  {words:['Do','you','want','to','study','now'],ans:'Do you want to study now?',tr:'هل تريد أن تذاكر الآن؟',ar:'سؤال بـ Do want to'},
  {words:['Who','was','in','England','last','year'],ans:'Who was in England last year?',tr:'مَن كان في إنجلترا العام الماضي؟',ar:'سؤال ماضٍ Who + was'},
  {words:['Where','were','you','last','night'],ans:'Where were you last night?',tr:'أين كنت ليلة أمس؟',ar:'Where + were'},
  {words:['When','was','John','at','the','library'],ans:'When was John at the library?',tr:'متى كان جون في المكتبة؟',ar:'When + was'},
],
};

// ═══════════════════════════════════════
// EE — "اختبر" (lesson quiz, multiple choice)
// المصدر: أسئلة التقييم الرسمية (Exercise I) — الدرس ١
// ═══════════════════════════════════════
const EE={
l1:[
  {q:"_______ you eat a snack at night?",o:["Do","Does","Aren't","Doesn't"],a:0,en:"you → Do",ar:'مع you نبدأ السؤال بـ Do',tr:'هل تأكل وجبة خفيفة في الليل؟'},
  {q:"The students eat lunch at _______.",o:["noon","late","now","early"],a:0,en:"lunch time → noon",ar:'وقت الغداء → الظُّهر (noon)',tr:'يأكل الطلاب الغداء عند الظُّهر.'},
  {q:"Jack goes to the mess hall _______ dinner.",o:["in","for","late","early"],a:1,en:"for + meal",ar:'يذهب لأجل العشاء → for dinner',tr:'يذهب جاك إلى المطعم لتناول العشاء.'},
  {q:"1:00 p.m. is in the _______.",o:["night","noon","morning","afternoon"],a:3,en:"1 p.m. → afternoon",ar:'الواحدة مساءً → بعد الظُّهر',tr:'الساعة الواحدة مساءً في فترة بعد الظُّهر.'},
  {q:"Jan and I _______ every day.",o:["swim","swims","are swim","swimming"],a:0,en:"Jan and I (we) → swim",ar:'Jan and I جمع → swim بلا s',tr:'أنا وجان نسبح كل يوم.'},
  {q:"Thursday is _______ Tuesday.",o:["before","after","early","late"],a:1,en:"Thursday comes after Tuesday",ar:'الخميس بعد الثلاثاء → after',tr:'الخميس بعد الثلاثاء.'},
  {q:"It's 11:00 _______. I'm going to bed.",o:["a.m.","p.m.","time","tired"],a:1,en:"going to bed → 11 p.m.",ar:'ذاهب للنوم → ١١ مساءً (p.m.)',tr:'الساعة ١١ مساءً، سأذهب للنوم.'},
  {q:"I _______ come to class late.",o:["am","are","don't","doesn't"],a:2,en:"I → don't",ar:'مع I نستخدم don\'t',tr:'لا آتي إلى الصفّ متأخّراً.'},
  {q:"Rick is buying iced tea at the snack bar. He is _______.",o:["late","early","hungry","thirsty"],a:3,en:"buying a drink → thirsty",ar:'يشتري مشروباً → عطشان',tr:'ريك يشتري شاياً مثلّجاً، فهو عطشان.'},
  {q:"Jim gets up at 6:00. Tom gets up at 6:30. Jim gets up _______ Tom.",o:["before","after","early","late"],a:0,en:"6:00 before 6:30 → before",ar:'٦:٠٠ قبل ٦:٣٠ → before',tr:'يستيقظ جيم قبل توم.'},
  {q:"_______ Jeff sleep late every morning?",o:["Do","Does","Aren't","Wasn't"],a:1,en:"Jeff (he) → Does",ar:'مع المفرد Jeff → Does',tr:'هل ينام جيف متأخّراً كل صباح؟'},
  {q:"The movie is at eight o'clock. Jim comes at seven o'clock. He comes _______.",o:["before","after","early","late"],a:2,en:"comes an hour before → early",ar:'يأتي قبل الموعد → مبكّراً',tr:'الفيلم الساعة الثامنة، وجاء جيم السابعة، فقد جاء مبكّراً.'},
  {q:"Captain Smith is a student. He goes to class _______ day.",o:["in","every","at","a.m."],a:1,en:"regularly → every day",ar:'بانتظام → كل يوم (every)',tr:'الكابتن سميث طالب، يذهب إلى الصفّ كل يوم.'},
  {q:"I get up at 7:00 a.m. Then I _______ before I go to class.",o:["go to bed","get dressed","go to sleep","go early"],a:1,en:"after getting up → get dressed",ar:'بعد الاستيقاظ → يرتدي ملابسه',tr:'أستيقظ ٧:٠٠ صباحاً ثم أرتدي ملابسي قبل الذهاب للصفّ.'},
  {q:"Every night I study my _______.",o:["lesson","class","library","evening"],a:0,en:"study my lesson",ar:'أذاكر درسي → lesson',tr:'كل ليلة أذاكر درسي.'},
  {q:"We eat breakfast in the _______.",o:["noon","evening","morning","afternoon"],a:2,en:"breakfast → morning",ar:'الفطور في الصباح → morning',tr:'نأكل الفطور في الصباح.'},
  {q:"Tom doesn't eat breakfast. At lunch time, he's _______.",o:["sad","angry","tired","hungry"],a:3,en:"no breakfast → hungry",ar:'بلا فطور → جائع',tr:'لا يأكل توم الفطور، فهو جائع وقت الغداء.'},
  {q:"Steve goes to bed at midnight. He goes to bed _______.",o:["late","early","after","before"],a:0,en:"midnight → late",ar:'منتصف الليل → متأخّراً',tr:'يذهب ستيف للنوم منتصف الليل، أي متأخّراً.'},
  {q:"Do you _______ before noon on Saturday?",o:["get","get up","gets up","getting up"],a:1,en:"Do you + base → get up",ar:'بعد Do you فعل مجرّد → get up',tr:'هل تستيقظ قبل الظُّهر يوم السبت؟'},
  {q:"Tom _______ after he _______.",o:["shave, shower","shaving, showering","shaves, showers","shower, shave"],a:2,en:"he → shaves, showers",ar:'مع he نضيف s → shaves, showers',tr:'يحلق توم بعد أن يستحمّ.'},
],
l2:[
  {q:"We're _______ our grammar.",o:["knowing","walking","learning","speaking"],a:2,en:"studying grammar → learning",ar:'ندرس القواعد → نتعلّم learning',tr:'نحن نتعلّم قواعدنا.'},
  {q:"What languages do you _______?",o:["has","speak","saying","learning"],a:1,en:"Do you + base → speak",ar:'بعد do you فعل مجرّد → speak',tr:'ما اللغات التي تتحدّثها؟'},
  {q:"Richard _______ Mark.",o:["know","knows","speak","speaks"],a:1,en:"Richard (he) → knows",ar:'مع المفرد Richard نضيف s → knows',tr:'ريتشارد يعرف مارك.'},
  {q:'Every morning, Mr. Tucker _______ "hello" to the class.',o:["says","hears","learns","speaks"],a:0,en:"says hello",ar:'يقول مرحباً → says',tr:'كل صباح يقول السيد تاكر «مرحباً» للصفّ.'},
  {q:"Who is in the classroom?",o:["I don't know.","They are late.","It is time for class.","It's in this building."],a:0,en:"Who → a person / I don't know",ar:'سؤال عن شخص → I don\'t know',tr:'مَن في غرفة الصفّ؟ — لا أعرف.'},
  {q:"I always do my homework. This means:",o:["I have no homework.","I never do my homework.","I do my homework every day.","My friend does my homework."],a:2,en:"always → every day",ar:'دائماً → كل يوم',tr:'أعمل واجبي دائماً = أعمله كل يوم.'},
  {q:"Do you teach Spanish?",o:["Yes, I hear Spanish.","Yes, I speak Spanish.","No, I am teaching Spanish.","No, I am learning Spanish."],a:3,en:"correct answer to teach question",ar:'الجواب المناسب → لا، أتعلّم الإسبانية',tr:'هل تُعلّم الإسبانية؟ — لا، أنا أتعلّمها.'},
  {q:"When do you go to the commissary?",o:["I walk there.","I always go on Saturday.","I never walk to the commissary.","I want to go to the commissary."],a:1,en:"When → a time (on Saturday)",ar:'سؤال عن الوقت → يوم السبت',tr:'متى تذهب إلى المتجر؟ — دائماً يوم السبت.'},
  {q:"They swim _______.",o:["to class","for Sunday","at the library","on Wednesday"],a:3,en:"day of week → on Wednesday",ar:'مع أيام الأسبوع نستخدم on → on Wednesday',tr:'يسبحون يوم الأربعاء.'},
  {q:"Mark and Pam _______ two cars.",o:["has","have","having","doesn't have"],a:1,en:"plural → have",ar:'مع الجمع → have',tr:'لدى مارك وبام سيّارتان.'},
  {q:"Let's take the bus to Dallas.",o:["Who knows Dallas?","Where is the taxi stop?","What time does it leave?","Whose bus is it?"],a:2,en:"about a bus → what time does it leave",ar:'عن الحافلة → متى تغادر',tr:'لنستقلّ الحافلة إلى دالاس. — متى تغادر؟'},
  {q:"Where is your friend, John?",o:["He has a new friend.","He's learning English.","He wants a hamburger.","He's studying in the library."],a:3,en:"Where → a place (library)",ar:'سؤال عن المكان → في المكتبة',tr:'أين صديقك جون؟ — يدرس في المكتبة.'},
  {q:"Does John have your book?",o:["Yes, I do.","Yes, he does.","No, I don't.","No, you don't."],a:1,en:"Does John → he does",ar:'Does John → Yes, he does',tr:'هل لدى جون كتابك؟ — نعم.'},
  {q:"The train leaves at noon. This means:",o:["It goes at 12:00 p.m.","It comes at 12:00 a.m.","It goes in the afternoon.","It comes in the afternoon."],a:0,en:"noon = 12:00 p.m.",ar:'الظُّهر = ١٢:٠٠ مساءً',tr:'يغادر القطار ظهراً = يذهب الساعة ١٢:٠٠ مساءً.'},
  {q:"Sgt Smith never eats French fries. This means:",o:["He eats French fries.","He is eating French fries.","He often eats French fries.","He doesn't eat French fries."],a:3,en:"never → doesn't eat",ar:'أبداً → لا يأكلها',tr:'الرقيب سميث لا يأكل البطاطس المقلية أبداً = لا يأكلها.'},
  {q:"How often do you go to the lab?",o:["We never do homework.","We sometimes go to class.","We go there every afternoon.","We always go to the library."],a:2,en:"How often → frequency (every afternoon)",ar:'كم مرّة → التكرار (كل عصر)',tr:'كم مرّة تذهب إلى المختبر؟ — كل عصر.'},
  {q:"Do you have a truck?",o:["No, I don't.","No, he doesn't.","Yes, he has a car.","Yes, I want a truck."],a:0,en:"Do you have → No, I don't",ar:'Do you have → No, I don\'t',tr:'هل لديك شاحنة؟ — لا.'},
  {q:"What do Mr. Tucker's children study?",o:["class","dinner","French","afternoon"],a:2,en:"study a subject/language → French",ar:'يدرسون لغة → الفرنسية',tr:'ماذا يدرس أبناء السيد تاكر؟ — الفرنسية.'},
  {q:"Ms. Scott is a DLI teacher. She _______ English, and her students _______ English.",o:["teaches, learn","teach, learns","teaches, teach","learns, teach"],a:0,en:"she teaches · students learn",ar:'she → teaches · students (جمع) → learn',tr:'الآنسة سكوت معلّمة: هي تُعلّم الإنجليزية وطلابها يتعلّمونها.'},
  {q:"When do you leave for class?",o:["Late at night.","Early in the morning.","I go to the library every day.","We always eat in the dining hall."],a:1,en:"When → a time (early in the morning)",ar:'سؤال عن الوقت → مبكّراً صباحاً',tr:'متى تغادر إلى الصفّ؟ — مبكّراً في الصباح.'},
],
l3:[
  {q:"_______ new words in your dictionary.",o:["Hear","Answer","Look up","Listen to"],a:2,en:"find in a dictionary → look up",ar:'تبحث في القاموس → look up',tr:'ابحث عن الكلمات الجديدة في قاموسك.'},
  {q:"There are sixty minutes in a(n) _______.",o:["hour","week","month","second"],a:0,en:"60 minutes = an hour",ar:'٦٠ دقيقة = ساعة',tr:'في الساعة ستّون دقيقة.'},
  {q:"When you study for the book quiz, _______ each lesson.",o:["close","select","write","review"],a:3,en:"study → review",ar:'للدراسة → راجِع review',tr:'حين تذاكر للاختبار، راجِع كل درس.'},
  {q:"A book quiz is a _______.",o:["test","lesson","review","dictionary"],a:0,en:"quiz = test",ar:'الاختبار القصير = اختبار',tr:'الـ book quiz اختبار.'},
  {q:"Choose and _______ are the same.",o:["write","select","look up","memorize"],a:1,en:"choose = select",ar:'choose = select (يختار)',tr:'choose و select بنفس المعنى.'},
  {q:"Today is Tuesday. _______ was Monday.",o:["Tomorrow","Yesterday","Next week","Last month"],a:1,en:"day before today → yesterday",ar:'اليوم الثلاثاء، فأمس كان الاثنين',tr:'اليوم الثلاثاء. أمس كان الاثنين.'},
  {q:"Do not _______ in your test booklet.",o:["put","mark","learn","memorize"],a:1,en:"don't mark the booklet",ar:'لا تضع علامات في الكرّاسة → mark',tr:'لا تضع علامات في كرّاسة الأسئلة.'},
  {q:"_______ students are from Egypt?",o:["Do you","Where is","How many","Are sixteen"],a:2,en:"asking a number → How many",ar:'سؤال عن العدد → How many',tr:'كم طالباً من مصر؟'},
  {q:"What country are you _______?",o:["to","from","living","working"],a:1,en:"origin → from",ar:'الأصل/البلد → from',tr:'من أيّ بلد أنت؟'},
  {q:"The meaning of a word is in the _______.",o:["lab","calendar","dictionary","test booklet"],a:2,en:"word meanings → dictionary",ar:'معاني الكلمات → القاموس',tr:'معنى الكلمة موجود في القاموس.'},
  {q:"Learn and speak English in class. Don't _______ vocabulary words.",o:["call","talk","listen","memorize"],a:3,en:"don't just memorize",ar:'لا تحفظ صمّاً → memorize',tr:'تعلّم وتحدّث الإنجليزية في الصفّ، ولا تحفظ الكلمات صمّاً.'},
  {q:"You will have 50 _______ to finish the test this morning.",o:["hour","time","seconds","minutes"],a:3,en:"50 minutes",ar:'٥٠ دقيقة → minutes',tr:'لديك ٥٠ دقيقة لإنهاء الاختبار هذا الصباح.'},
  {q:"Was John in class yesterday?",o:["Yes, he does.","No, he isn't.","Yes, he was.","No, he didn't."],a:2,en:"Was → was",ar:'السؤال بـ Was → Yes, he was',tr:'هل كان جون في الصفّ أمس؟ — نعم، كان.'},
  {q:"Were you at home last night?",o:["No, I'm not.","No, I didn't.","No, I wasn't.","No, they weren't."],a:2,en:"Were you → I wasn't",ar:'Were you → No, I wasn\'t',tr:'هل كنت في البيت ليلة أمس؟ — لا، لم أكن.'},
  {q:"Today is Wednesday.",o:["Monday was two days ago.","Yesterday was Monday.","Tomorrow is Tuesday.","Sunday is today."],a:0,en:"Wed − 2 = Monday",ar:'الأربعاء ناقص يومين = الاثنين',tr:'اليوم الأربعاء، فالاثنين كان قبل يومين.'},
  {q:"Today is Thursday.",o:["Friday was yesterday.","Tomorrow is Tuesday.","Yesterday was Tuesday.","Yesterday was Wednesday."],a:3,en:"Thu − 1 = Wednesday",ar:'الخميس، فأمس كان الأربعاء',tr:'اليوم الخميس، فأمس كان الأربعاء.'},
  {q:"When is the book quiz?",o:["It wasn't bad.","It's in the lab.","It was early.","It's today at ten o'clock."],a:3,en:"When → a time",ar:'When → وقت (اليوم الساعة العاشرة)',tr:'متى الاختبار؟ — اليوم الساعة العاشرة.'},
  {q:"Your test is next hour.",o:["It was last hour.","It's in a minute.","It's in 60 minutes.","It was 60 minutes ago."],a:2,en:"next hour = in 60 minutes",ar:'الساعة القادمة = بعد ٦٠ دقيقة',tr:'اختبارك الساعة القادمة = بعد ٦٠ دقيقة.'},
  {q:"How many _______ are in a month?",o:["week","time","days","hour"],a:2,en:"a month has days",ar:'الشهر فيه أيام → days',tr:'كم يوماً في الشهر؟'},
  {q:"The instructor is giving us the test booklets.",o:["It's time to go home.","We're having a book quiz.","He's reviewing for the test.","We're looking up the answers."],a:1,en:"test booklets → a quiz",ar:'كرّاسات الأسئلة → اختبار الآن',tr:'المعلّم يوزّع كرّاسات الأسئلة → عندنا اختبار.'},
  {q:"_______ your answers on the answer sheet.",o:["Learn","Draw","Mark","Leave"],a:2,en:"mark answers on the sheet",ar:'ضع علامة على الإجابات → Mark',tr:'ضع علامات إجاباتك على ورقة الإجابة.'},
  {q:"This week Mr. Black is my teacher. Last week Mrs. White _______ my teacher.",o:["is","are","was","were"],a:2,en:"last week + she → was",ar:'الأسبوع الماضي + مفرد → was',tr:'هذا الأسبوع الأستاذ بلاك معلّمي، والأسبوع الماضي كانت السيدة وايت معلّمتي.'},
  {q:"How was the movie?",o:["I am cold.","It was bad.","I was sick.","It was yesterday."],a:1,en:"How was → It was …",ar:'How was → It was (وصف)',tr:'كيف كان الفيلم؟ — كان سيّئاً.'},
  {q:"I was in Japan last year.",o:["I'm there now.","I was there one year ago.","I'm going there this year.","I'm going there next year."],a:1,en:"last year = one year ago",ar:'العام الماضي = قبل سنة',tr:'كنت في اليابان العام الماضي = قبل سنة.'},
],
l4:[
  {q:"Who was in the classroom this morning?",o:["It was the teacher.","It's the teacher.","There she is.","Here he is."],a:0,en:"Who + past → It was …",ar:'سؤال ماضٍ عن الفاعل → It was the teacher',tr:'مَن كان في الصفّ هذا الصباح؟ — المعلّم.'},
  {q:"How are you?",o:["And you?","Yes, I am.","No, I'm not.","Fine, thanks."],a:3,en:"greeting → Fine, thanks",ar:'تحية → بخير، شكراً',tr:'كيف حالك؟ — بخير، شكراً.'},
  {q:"Where were the students?",o:["Here they are.","There they are.","They were here.","They are here."],a:2,en:"Where + past → They were here",ar:'أين (ماضٍ) → كانوا هنا',tr:'أين كان الطلاب؟ — كانوا هنا.'},
  {q:"It's time for lunch.",o:["I want to eat.","I'm fine, thanks.","Are you going there?","Do you have the time?"],a:0,en:"lunch time → want to eat",ar:'وقت الغداء → أريد أن آكل',tr:'حان وقت الغداء. — أريد أن آكل.'},
  {q:"I don't have my book today.",o:["Do you want my pencil?","Do you want to go to the BX?","Do you want to look at my book?","Do you want to learn English?"],a:2,en:"no book → share a book",ar:'لا كتاب معه → أشاركه كتابي',tr:'ليس معي كتابي اليوم. — هل تريد أن تنظر في كتابي؟'},
  {q:"Are you a student here?",o:["Yes, I am. I'm studying English.","Yes, I am. I work in this office.","No, I want to buy a car.","No, I'm not. I'm happy."],a:0,en:"student → studying English",ar:'طالب → أدرس الإنجليزية',tr:'هل أنت طالب هنا؟ — نعم، أدرس الإنجليزية.'},
  {q:"She's enlisted in the Army.",o:["She's a colonel.","She's in the Air Force.","She's a Marine.","She's a soldier."],a:3,en:"enlisted Army → soldier",ar:'مُجنَّدة في الجيش → جندية',tr:'إنها مُجنَّدة في الجيش. — إنها جندية.'},
  {q:"Where was Paul three months ago?",o:["He wanted to go.","He is living in Japan.","He was living in France.","He wanted to learn English."],a:2,en:"Where + past → was living",ar:'أين (ماضٍ) → كان يعيش في فرنسا',tr:'أين كان بول قبل ثلاثة أشهر؟ — كان يعيش في فرنسا.'},
  {q:"Is the car old?",o:["Yes, it's right now.","Yes, it's tall.","No, it's a taxi.","No, it's new."],a:3,en:"old ↔ new",ar:'قديمة ↔ جديدة',tr:'هل السيارة قديمة؟ — لا، إنها جديدة.'},
  {q:"I don't want to study now.",o:["When is your next class?","When do you want to study?","Where do you study English?","Where do you want to study?"],a:1,en:"not now → When do you want to?",ar:'ليس الآن → متى تريد؟',tr:'لا أريد أن أذاكر الآن. — متى تريد أن تذاكر؟'},
  {q:"Were you in Houston last week?",o:["Yes, I am.","Yes, I was.","No, I don't.","No, I'm not."],a:1,en:"Were you → I was",ar:'Were you → Yes, I was',tr:'هل كنت في هيوستن الأسبوع الماضي؟ — نعم، كنت.'},
  {q:"_______ in the lab?",o:["Who's","What","When","Where's"],a:0,en:"asking who → Who's",ar:'سؤال عن شخص في المختبر → Who\'s',tr:'مَن في المختبر؟'},
  {q:"Hi. My name's Sam. I'm new here.",o:["It's cold here.","Fine, thanks. And you?","Do you have a new name?","It's nice to meet you."],a:3,en:"introduction → nice to meet you",ar:'تعارف → سُررت بلقائك',tr:'مرحباً، اسمي سام، أنا جديد هنا. — سُررت بلقائك.'},
  {q:"When were you in France?",o:["I'm taking the bus.","He was there last year.","I was there ten years ago.","I'm going to France tomorrow."],a:2,en:"When + past → ago",ar:'متى (ماضٍ) → قبل عشر سنوات',tr:'متى كنت في فرنسا؟ — قبل عشر سنوات.'},
  {q:"She doesn't _______ work today.",o:["has","wants","want to","wants to"],a:2,en:"doesn't + want to",ar:'بعد doesn\'t نستخدم want to',tr:'لا تريد أن تعمل اليوم.'},
  {q:"Mike doesn't eat hamburgers.",o:["He wants to eat chicken.","He is hungry.","He eats in the mess hall.","He walks to the snack bar."],a:0,en:"no hamburgers → wants chicken",ar:'لا يأكل الهمبرغر → يريد الدجاج',tr:'لا يأكل مايك الهمبرغر. — يريد أن يأكل الدجاج.'},
  {q:"Where were you yesterday?",o:["It was at night.","I am going to the library.","I was at the library.","I am at the library now."],a:2,en:"Where + past → I was at …",ar:'أين (ماضٍ) → كنت في المكتبة',tr:'أين كنت أمس؟ — كنت في المكتبة.'},
  {q:"What was the airman's name?",o:["It was Paul Jones.","I'm Paul Jones.","I was in the Air Force.","I'm in the Air Force."],a:0,en:"What was the name → It was …",ar:'ما كان الاسم → كان بول جونز',tr:'ما كان اسم الجندي الجوي؟ — كان بول جونز.'},
  {q:"My sister is short. She wants to be _______.",o:["old","good","tall","here"],a:2,en:"short ↔ tall",ar:'قصيرة ↔ طويلة',tr:'أختي قصيرة، تريد أن تكون طويلة.'},
  {q:"_______ you drive a car?",o:["Are","Does","Doesn't","Do"],a:3,en:"you → Do",ar:'مع you نستخدم Do',tr:'هل تقود سيارة؟'},
  {q:"Mike is a colonel in the Air Force.",o:["He's a soldier.","He's an airman.","He's an officer.","He's enlisted."],a:2,en:"colonel → officer",ar:'العقيد ضابط → officer',tr:'مايك عقيد في القوات الجوية. — إنه ضابط.'},
  {q:"_______ you in Canada this year?",o:["Was","Were","When","Where"],a:1,en:"you → Were",ar:'مع you نستخدم Were',tr:'هل كنت في كندا هذا العام؟'},
  {q:"Where's my pen?",o:["Oh, there it is.","Oh, here they are.","Oh, where were they?","Oh, they were there."],a:0,en:"one pen → it",ar:'قلم واحد → it (there it is)',tr:'أين قلمي؟ — ها هو هناك.'},
  {q:"Are you in the military?",o:["Yes, I'm a civilian.","No, I'm a civilian.","Yes, I'm going.","No, I'm a soldier."],a:1,en:"civilian = not military",ar:'مدني = ليس عسكرياً',tr:'هل أنت في الجيش؟ — لا، أنا مدني.'},
  {q:"Do you know her?",o:["Yes, I know him.","Yes, I am.","No, I'm not.","No, I don't."],a:3,en:"Do you → I don't",ar:'Do you know → No, I don\'t',tr:'هل تعرفها؟ — لا، لا أعرفها.'},
],
};

// ═══════════════════════════════════════
// REVIEW — "المراجعة"
// ═══════════════════════════════════════
// المصدر: وحدة المراجعة الرسمية (Book 3 — Lesson 5 REVIEW · Exercise C) — تراجع الدروس ١–٤
const REVIEW=[
  {q:"Tim is in the Army. He's _______.",o:["a soldier","an airman","a civilian","a sailor"],a:0,en:"Army → soldier",ar:'في الجيش → جندي',tr:'تيم في الجيش، فهو جندي.'},
  {q:"Sally's in the Navy. She's not an officer. She's _______.",o:["an airman","an enlisted person","a soldier","a civilian"],a:1,en:"not an officer → enlisted",ar:'ليست ضابطة → مُجنَّدة',tr:'سالي في البحرية وليست ضابطة، فهي مُجنَّدة.'},
  {q:"Listen to the question. _______ the correct answer.",o:["Have","Leave","Select","Speak"],a:2,en:"choose → Select",ar:'اختر → Select',tr:'استمع للسؤال ثم اختر الإجابة الصحيحة.'},
  {q:"I want to drink some water. I'm _______.",o:["late","hungry","thirsty","early"],a:2,en:"drink water → thirsty",ar:'يريد ماءً → عطشان',tr:'أريد أن أشرب ماءً، فأنا عطشان.'},
  {q:"We go to lab _______ the afternoon.",o:["in","on","at","or"],a:0,en:"in the afternoon",ar:'in the afternoon',tr:'نذهب إلى المختبر بعد الظُّهر.'},
  {q:"School children eat lunch _______ noon.",o:["on","in","at","or"],a:2,en:"at noon",ar:'at noon (مع الأوقات المحدّدة)',tr:'يأكل تلاميذ المدرسة الغداء عند الظُّهر.'},
  {q:"Al wants to leave his country _______ March.",o:["in","for","at","on"],a:0,en:"in + month",ar:'مع الشهور نستخدم in → in March',tr:'يريد آل أن يغادر بلده في مارس.'},
  {q:"Mike was in Canada _______ year.",o:["last","before","after","next"],a:0,en:"past → last year",ar:'ماضٍ → العام الماضي',tr:'كان مايك في كندا العام الماضي.'},
  {q:"Today is Tuesday. _______ was Monday.",o:["Now","Yesterday","Tomorrow","There"],a:1,en:"day before → Yesterday",ar:'اليوم السابق → أمس',tr:'اليوم الثلاثاء، وأمس كان الاثنين.'},
  {q:"My father eats dinner at 6:00 every _______.",o:["morning","evening","midnight","noon"],a:1,en:"dinner → evening",ar:'العشاء → المساء',tr:'يتناول أبي العشاء الساعة ٦:٠٠ كل مساء.'},
  {q:"This month is March. Next month is _______.",o:["May","June","February","April"],a:3,en:"after March → April",ar:'بعد مارس → أبريل',tr:'هذا الشهر مارس، والشهر القادم أبريل.'},
  {q:"Joe is always in our classroom before class. He comes to class _______.",o:["late","after","before","early"],a:3,en:"before class → early",ar:'قبل الحصّة → مبكّراً',tr:'جو دائماً في الصفّ قبل الحصّة، فهو يأتي مبكّراً.'},
  {q:"_______ do your friends swim?",o:["Sometimes","How many","How often","Always"],a:2,en:"asking frequency → How often",ar:'سؤال عن التكرار → How often',tr:'كم مرّة يسبح أصدقاؤك؟'},
  {q:"That man isn't short. He's a _______ man.",o:["new","small","young","tall"],a:3,en:"not short → tall",ar:'ليس قصيراً → طويل',tr:'ذلك الرجل ليس قصيراً، إنه رجل طويل.'},
  {q:"I want a big dinner. I'm _______.",o:["angry","hungry","thirsty","tired"],a:1,en:"big dinner → hungry",ar:'عشاء كبير → جائع',tr:'أريد عشاءً كبيراً، فأنا جائع.'},
  {q:"Circle a, b, c, or d on your answer _______.",o:["letter","test","number","sheet"],a:3,en:"answer sheet",ar:'ورقة الإجابة → answer sheet',tr:'ضع دائرة على a أو b أو c أو d في ورقة إجابتك.'},
  {q:"The letter c is _______ the letter d in the alphabet.",o:["after","under","before","in"],a:2,en:"c before d",ar:'c قبل d',tr:'الحرف c قبل الحرف d في الأبجدية.'},
  {q:"Let's go to the BX. _______, let's go now.",o:["All right","When","Always","Never"],a:0,en:"agreement → All right",ar:'موافقة → حسناً',tr:'لنذهب إلى الـ BX. — حسناً، لنذهب الآن.'},
  {q:"Last month was November. This month is _______.",o:["October","December","September","January"],a:1,en:"after November → December",ar:'بعد نوفمبر → ديسمبر',tr:'الشهر الماضي كان نوفمبر، وهذا الشهر ديسمبر.'},
  {q:"Do you eat breakfast every day? — Yes, I _______ eat breakfast.",o:["always","sometimes","right now","noon"],a:0,en:"every day → always",ar:'كل يوم → دائماً',tr:'هل تأكل الفطور كل يوم؟ — نعم، آكله دائماً.'},
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
// SPELL — الإملاء
// ═══════════════════════════════════════
const SPELL_LESSONS=[
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 1 — الحياة اليومية وأوقات اليوم',w:[
    {e:'morning',a:'الصباح',em:'🌅'},{e:'evening',a:'المساء',em:'🌆'},{e:'midnight',a:'منتصف الليل',em:'🕛'},
    {e:'breakfast',a:'الفطور',em:'🍳'},{e:'hungry',a:'جائع',em:'😋'},{e:'thirsty',a:'عطشان',em:'🥵'},
    {e:'shower',a:'دُش',em:'🚿'},{e:'lesson',a:'الدرس',em:'📘'},{e:'snack',a:'وجبة خفيفة',em:'🍎'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 2 — اللغات والسفر',w:[
    {e:'English',a:'الإنجليزية',em:'🇬🇧'},{e:'Arabic',a:'العربية',em:'🇸🇦'},{e:'Spanish',a:'الإسبانية',em:'🇪🇸'},
    {e:'language',a:'لغة',em:'🗣️'},{e:'always',a:'دائماً',em:'💯'},{e:'never',a:'أبداً',em:'🚫'},
    {e:'library',a:'المكتبة',em:'📚'},{e:'train',a:'قطار',em:'🚆'},{e:'truck',a:'شاحنة',em:'🚚'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 3 — الدول والوقت',w:[
    {e:'country',a:'دولة',em:'🌍'},{e:'Egypt',a:'مصر',em:'🇪🇬'},{e:'France',a:'فرنسا',em:'🇫🇷'},
    {e:'January',a:'يناير',em:'📅'},{e:'August',a:'أغسطس',em:'📅'},{e:'dictionary',a:'قاموس',em:'📔'},
    {e:'minute',a:'دقيقة',em:'⏱️'},{e:'yesterday',a:'أمس',em:'⬅️'},{e:'review',a:'يُراجع',em:'♻️'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 4 — الجيش والصفات',w:[
    {e:'officer',a:'ضابط',em:'🎖️'},{e:'soldier',a:'جندي',em:'🪖'},{e:'civilian',a:'مدني',em:'👔'},
    {e:'military',a:'الجيش',em:'🎖️'},{e:'tall',a:'طويل',em:'🦒'},{e:'young',a:'صغير السنّ',em:'🧒'},
    {e:'colonel',a:'عقيد',em:'🎖️'},{e:'sailor',a:'بحّار',em:'⚓'},{e:'enlisted',a:'مُجنَّد',em:'🪖'},
  ]},
];

// ═══════════════════════════════════════
// LISTENING — فيديوهات استماع وقراءة
// ═══════════════════════════════════════
const YT_VIDEOS=[
  {id:'mLzdYfOvdUM',t:'Quiz A',s:'استماع وقراءة مع الحل'},
  {id:'j_kcZgplx6g',t:'Quiz B',s:'استماع وقراءة مع الحل'},
  {id:'L6b-6RENbvU',t:'Quiz C',s:'استماع وقراءة مع الحل'},
];

// ═══════════════════════════════════════
// ROUTING MANIFEST
// ═══════════════════════════════════════
const SCREENS=['home','lscreen','rscreen','ytscreen','fscreen','spscreen','mkscreen'];
const SCREEN_NAMES={home:'الرئيسية',lscreen:'درس',rscreen:'المراجعة',ytscreen:'الاستماع',fscreen:'الاختبار النهائي',spscreen:'الإملاء',mkscreen:'مراجعة الأخطاء'};
