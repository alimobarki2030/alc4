// ═══════════════════════════════════════
// DATA — BOOK 1 (المستوى الأول — البداية)
// Lessons 1–4 + Lesson 5 (Review). Source: ALC Book 1 student text,
// performance checks, homework (HW) and evaluation exercises (EE).
// ═══════════════════════════════════════
const BOOK_ID='book1';

const LESSON_META={
  l1:{ico:'🏫',title:'Lesson 1 — The classroom',sub:'التحيّات · أدوات الفصل · الأرقام 0–20 · الحروف A–G · This is a … · my / your'},
  l2:{ico:'💈',title:"Lesson 2 — Bob's a barber.",sub:'المهن · I am / You are · his / her · الجمع · these / those · الأرقام حتى 1000'},
  l3:{ico:'👩‍🏫',title:'Lesson 3 — Is she a teacher?',sub:'he · she · we · they · النفي (not) · السؤال والإجابة القصيرة · النقود الأمريكية'},
  l4:{ico:'📅',title:'Lesson 4 — Today is Thursday.',sub:'الوقت · أيام الأسبوع · الإجابة الطويلة · in / on / under · at للوقت'}
};
const LESSON_KEYS=Object.keys(LESSON_META);

// ═══════════════════════════════════════
// VOCABULARY (من صفحة What's new in Lesson ?)
// ═══════════════════════════════════════
const VOCAB={
l1:[
  // — الفصل —
  {e:'classroom',a:'فصل / قاعة الدراسة',em:'🏫'},
  {e:'board',a:'سبّورة',em:'🧑‍🏫'},
  {e:'book',a:'كتاب',em:'📕'},
  {e:'notebook',a:'دفتر',em:'📓'},
  {e:'pen',a:'قلم حبر',em:'🖊️'},
  {e:'pencil',a:'قلم رصاص',em:'✏️'},
  {e:'desk',a:'مكتب / طاولة دراسة',em:'🗄️'},
  {e:'table',a:'طاولة',em:'🪑'},
  {e:'chair',a:'كرسي',em:'💺'},
  {e:'door',a:'باب',em:'🚪'},
  {e:'window',a:'نافذة',em:'🪟'},
  {e:'clock',a:'ساعة حائط',em:'🕰️'},
  {e:'map',a:'خريطة',em:'🗺️'},
  {e:'picture',a:'صورة',em:'🖼️'},
  {e:'lab',a:'مختبر (معمل اللغة)',em:'🎧'},
  {e:'page',a:'صفحة',em:'📄'},
  // — الحروف والكلمات —
  {e:'alphabet',a:'الأبجدية / الحروف',em:'🔤'},
  {e:'letter',a:'حرف',em:'🅰️'},
  {e:'capital letter',a:'حرف كبير',em:'🔠'},
  {e:'small letter',a:'حرف صغير',em:'🔡'},
  {e:'word',a:'كلمة',em:'💬'},
  {e:'number',a:'رقم',em:'🔢'},
  {e:'name',a:'اسم',em:'🏷️'},
  {e:'example',a:'مثال',em:'💡'},
  // — أوامر الفصل —
  {e:'open',a:'افتح',em:'📖'},
  {e:'close',a:'أغلق',em:'📕'},
  {e:'listen (to)',a:'استمع (إلى)',em:'👂'},
  {e:'look (at)',a:'انظر (إلى)',em:'👀'},
  {e:'repeat',a:'كرّر / أعد',em:'🔁'},
  {e:'write',a:'اكتب',em:'✍️'},
  {e:'circle',a:'ضع دائرة حول',em:'⭕'},
  {e:'sit down',a:'اجلس',em:'🪑'},
  {e:'stand up',a:'قف',em:'🧍'},
  {e:'go (to)',a:'اذهب (إلى)',em:'🚶'},
  {e:'turn on',a:'شغّل',em:'💡'},
  {e:'turn off',a:'أطفئ',em:'🔌'},
  // — كلمات وعبارات —
  {e:'please',a:'من فضلك',em:'🙏'},
  {e:'sir',a:'سيّدي',em:'🎖️'},
  {e:'hello',a:'مرحباً',em:'👋'},
  {e:'good morning',a:'صباح الخير',em:'🌅'},
  {e:'good afternoon',a:'مساء الخير (بعد الظهر)',em:'🌤️'},
  {e:'goodbye',a:'مع السلامة',em:'👋'},
  {e:'see you later',a:'أراك لاحقاً',em:'🙋'},
  {e:'fine, thanks',a:'بخير، شكراً',em:'🙂'},
],
l2:[
  // — المهن —
  {e:'barber',a:'حلّاق',em:'💈'},
  {e:'cook',a:'طبّاخ',em:'👨‍🍳'},
  {e:'doctor',a:'طبيب',em:'👨‍⚕️'},
  {e:'mechanic',a:'ميكانيكي',em:'🔧'},
  {e:'pilot',a:'طيّار',em:'👨‍✈️'},
  {e:'teacher',a:'معلّم',em:'👩‍🏫'},
  {e:'student',a:'طالب',em:'🧑‍🎓'},
  // — أجهزة الفصل —
  {e:'radio',a:'راديو',em:'📻'},
  {e:'television',a:'تلفاز',em:'📺'},
  {e:'tape',a:'شريط',em:'📼'},
  {e:'recorder',a:'جهاز تسجيل',em:'🎙️'},
  // — الضمائر والكلمات —
  {e:'I',a:'أنا',em:'🙋'},
  {e:'you',a:'أنت / أنتم',em:'👉'},
  {e:'his',a:'له / ـه (ملكية للمذكّر)',em:'👨'},
  {e:'her',a:'لها / ـها (ملكية للمؤنّث)',em:'👩'},
  {e:'these',a:'هؤلاء / هذه (للقريب الجمع)',em:'👇'},
  {e:'those',a:'أولئك / تلك (للبعيد الجمع)',em:'👉'},
  {e:'and',a:'و',em:'➕'},
  {e:"don't",a:'لا (للنهي)',em:'🚫'},
  {e:'spell',a:'تهجّى',em:'🔤'},
  // — الأرقام —
  {e:'twenty-one',a:'واحد وعشرون (21)',em:'🔢'},
  {e:'one hundred',a:'مئة (100)',em:'💯'},
  {e:'one thousand',a:'ألف (1000)',em:'🔢'},
],
l3:[
  // — الضمائر —
  {e:'he',a:'هو',em:'👨'},
  {e:'she',a:'هي',em:'👩'},
  {e:'we',a:'نحن',em:'👥'},
  {e:'they',a:'هم',em:'👨‍👩‍👦'},
  {e:'yes',a:'نعم',em:'✅'},
  {e:'no',a:'لا',em:'❌'},
  {e:'not',a:'ليس',em:'🚫'},
  {e:"isn't",a:'ليس (is not)',em:'🚫'},
  {e:"aren't",a:'ليسوا (are not)',em:'🚫'},
  // — النقود —
  {e:'money',a:'نقود / مال',em:'💵'},
  {e:'dollar',a:'دولار (100 سنت)',em:'💵'},
  {e:'half dollar',a:'نصف دولار (50 سنتاً)',em:'🪙'},
  {e:'quarter',a:'ربع دولار (25 سنتاً)',em:'🪙'},
  {e:'dime',a:'عشرة سنتات (10¢)',em:'🪙'},
  {e:'nickel',a:'خمسة سنتات (5¢)',em:'🪙'},
  {e:'penny',a:'سنت واحد (1¢)',em:'🪙'},
  {e:'cent',a:'سنت',em:'¢'},
],
l4:[
  // — الوقت والأيام —
  {e:'time',a:'وقت',em:'⏰'},
  {e:'day',a:'يوم',em:'📆'},
  {e:'week',a:'أسبوع',em:'🗓️'},
  {e:'weekend',a:'عطلة نهاية الأسبوع',em:'🏖️'},
  {e:'today',a:'اليوم',em:'📍'},
  {e:'tomorrow',a:'غداً',em:'➡️'},
  {e:'calendar',a:'تقويم',em:'📅'},
  {e:'Sunday',a:'الأحد',em:'☀️'},
  {e:'Monday',a:'الاثنين',em:'1️⃣'},
  {e:'Tuesday',a:'الثلاثاء',em:'2️⃣'},
  {e:'Wednesday',a:'الأربعاء',em:'3️⃣'},
  {e:'Thursday',a:'الخميس',em:'4️⃣'},
  {e:'Friday',a:'الجمعة',em:'5️⃣'},
  {e:'Saturday',a:'السبت',em:'6️⃣'},
  {e:"o'clock",a:'تماماً (للساعة)',em:'🕙'},
  // — المكان —
  {e:'box',a:'صندوق',em:'📦'},
  {e:'wall',a:'جدار / حائط',em:'🧱'},
  {e:'put',a:'ضع',em:'👐'},
  {e:'in',a:'في / داخل',em:'📥'},
  {e:'on',a:'على',em:'🔝'},
  {e:'under',a:'تحت',em:'⬇️'},
  {e:'at',a:'في (للوقت: at 7:30)',em:'🕢'},
  {e:'dialog',a:'حوار',em:'💬'},
  {e:'sound',a:'صوت',em:'🔊'},
]
};

// ═══════════════════════════════════════
// GRAMMAR
// ═══════════════════════════════════════
const GRAMMAR={
l1:[
  {
    title:'This is a … / It\'s a …', ar:'هذا … (This is a / It\'s a)',
    rule:'نسمّي الأشياء بـ This is a + اسم (هذا …). ونجيب عن What\'s this? بـ It\'s a + اسم. a تأتي قبل الاسم المفرد.',
    parts:[
      {t:'This is a + اسم',d:'This is a book. · This is a pen.'},
      {t:'What\'s this? → It\'s a …',d:"What's this? — It's a notebook."},
      {t:'It\'s = It is',d:"It's a pencil. = It is a pencil."},
    ],
    check:{q:"What's this? — _______ a pen.",o:["It's","This","What's","My"],a:0,en:"answer → It's a …",ar:'الجواب → It\'s a'},
    formula:[{t:'This is / It\'s',c:'v'},{t:'+',c:'p'},{t:'a',c:'s'},{t:'+',c:'p'},{t:'اسم مفرد',c:'k'}],
    compare:[
      {c1:"What's this?",c2:"It's a book.",ar:'السؤال ↔ الجواب'},
      {c1:'This is a pen.',c2:"It's a pen.",ar:'طريقتان'},
    ],
    examples:[
      {s:'This is a book.',tr:'هذا كتاب.',ar:'This is a',ok:true},
      {s:"What's this? — It's a clock.",tr:'ما هذا؟ — إنها ساعة.',ar:"It's a",ok:true},
      {s:'This is book.',wrong:'is book',right:'is a book',tr:'قبل الاسم المفرد نضع a.',ok:false},
    ]
  },
  {
    title:'this / that · my / your', ar:'this (القريب) · that (البعيد) · my (لي) · your (لك)',
    rule:'this للشيء القريب منك، و that للشيء البعيد. my = ملكي، your = ملكك. What\'s that? — That\'s your chair.',
    parts:[
      {t:'this = هذا (قريب)',d:'This is my pen.'},
      {t:'that = ذلك (بعيد)',d:"That's a door. (That's = That is)"},
      {t:'my / your',d:"What's your name? — My name is Jim."},
    ],
    check:{q:"What's _______ name? — My name is Ted.",o:['your','my','this','that'],a:0,en:"ask about you → your",ar:'تسأل عن اسمه → your'},
    formula:[{t:'This / That',c:'v'},{t:'+',c:'p'},{t:'is',c:'s'},{t:'+',c:'p'},{t:'my / your + اسم',c:'k'}],
    compare:[
      {c1:'This is my chair. (قريب)',c2:'That is your chair. (بعيد)',ar:'this ↔ that'},
      {c1:"What's your name?",c2:'My name is Bill.',ar:'your ↔ my'},
    ],
    examples:[
      {s:"What's that? — That's a map.",tr:'ما ذاك؟ — تلك خريطة.',ar:'that للبعيد',ok:true},
      {s:'This is my notebook.',tr:'هذا دفتري.',ar:'my',ok:true},
      {s:"What's my name? — My name is Ted.",wrong:"What's my name?",right:"What's your name?",tr:'لما تسأل الشخص عن اسمه تقول your.',ok:false},
    ]
  },
  {
    title:'Classroom commands', ar:'أوامر الفصل (Open · Close · Listen · Repeat …)',
    rule:'نعطي الأمر بالفعل في أوّل الجملة بدون فاعل: Open the door. ونضيف please للأدب في البداية أو النهاية.',
    parts:[
      {t:'فعل + the + اسم',d:'Open the door. · Close the window.'},
      {t:'please للأدب',d:'Please open your book. · Open your book, please.'},
      {t:'أوامر بحرف جر',d:'Listen to the teacher. · Look at the board. · Go to the lab.'},
    ],
    check:{q:'_______ to the teacher.',o:['Listen','Look','Open','Sit'],a:0,en:'listen to',ar:'استمع إلى → Listen to'},
    formula:[{t:'(Please)',c:'p'},{t:'فعل',c:'v'},{t:'+',c:'p'},{t:'the / your + اسم',c:'k'}],
    compare:[
      {c1:'Listen to the teacher.',c2:'Look at the board.',ar:'to ↔ at'},
      {c1:'Turn on the light.',c2:'Turn off the light.',ar:'on ↔ off'},
    ],
    examples:[
      {s:'Please open the door.',tr:'افتح الباب من فضلك.',ar:'please + أمر',ok:true},
      {s:'Sit down, please.',tr:'اجلس من فضلك.',ar:'please في النهاية',ok:true},
      {s:'Listen the teacher.',wrong:'Listen the teacher',right:'Listen to the teacher',tr:'بعد listen نضع to.',ok:false},
    ]
  }
],
l2:[
  {
    title:'I am / You are · What is Bill?', ar:'أنا … / أنت … (I am · You are) والسؤال عن المهنة',
    rule:'I + am · You + are · الاسم (Bill) + is. ونسأل عن المهنة بـ What + am/are/is …? والاختصار: I\'m · You\'re · Bill\'s.',
    parts:[
      {t:'I am = I\'m',d:"I am a mechanic. = I'm a mechanic."},
      {t:'You are = You\'re',d:"You are a student. = You're a student."},
      {t:'What is Bill? → Bill\'s a …',d:"What is Bill? — Bill's a mechanic."},
    ],
    check:{q:'I _______ a barber.',o:['am','is','are','no'],a:0,en:'I + am',ar:'مع I نستخدم am'},
    formula:[{t:'I / You / Bill',c:'s'},{t:'+',c:'p'},{t:'am / are / is',c:'v'},{t:'+',c:'p'},{t:'a + مهنة',c:'k'}],
    compare:[
      {c1:"I'm a pilot.",c2:"You're a student.",ar:'am ↔ are'},
      {c1:'What are you?',c2:"I'm a cook.",ar:'السؤال ↔ الجواب'},
    ],
    examples:[
      {s:"What are you? — I'm a student.",tr:'ما مهنتك؟ — أنا طالب.',ar:'What are you?',ok:true},
      {s:"What is Bob? — Bob's a barber.",tr:'ما مهنة بوب؟ — بوب حلّاق.',ar:'اسم + is',ok:true},
      {s:'I is a doctor.',wrong:'I is',right:'I am',tr:'مع I نستخدم am دائماً.',ok:false},
    ]
  },
  {
    title:'his / her · Don\'t …', ar:'his (له) · her (لها) · والنهي بـ Don\'t',
    rule:'his للمذكّر (اسمه، كتابه) و her للمؤنّث (اسمها، كتابها). وللنهي نضع Don\'t قبل الفعل: Don\'t open the door.',
    parts:[
      {t:'his = له',d:"What's his name? — His name is Bob."},
      {t:'her = لها',d:"What's her name? — Her name's Mary."},
      {t:'Don\'t + فعل',d:"Don't close the door, please."},
    ],
    check:{q:"Sam: What is _______ name? Ted: This is Don.",o:['his','her','my','your'],a:0,en:'Don (man) → his',ar:'دون رجل → his'},
    formula:[{t:'his / her',c:'v'},{t:'+',c:'p'},{t:'اسم',c:'k'},{t:'·',c:'p'},{t:"Don't + فعل",c:'s'}],
    compare:[
      {c1:'This is his chair. (له)',c2:'This is her chair. (لها)',ar:'his ↔ her'},
      {c1:'Open the door.',c2:"Don't open the door.",ar:'أمر ↔ نهي'},
    ],
    examples:[
      {s:"What's her name? — Her name's Mary.",tr:'ما اسمها؟ — اسمها ماري.',ar:'her',ok:true},
      {s:"Please don't close the window.",tr:'من فضلك لا تغلق النافذة.',ar:"don't",ok:true},
      {s:"Mary is a teacher. His name is Mary.",wrong:'His name (Mary)',right:'Her name',tr:'ماري مؤنّث، نقول her.',ok:false},
    ]
  },
  {
    title:'Plurals · these / those', ar:'الجمع (‑s) · these (هؤلاء القريبون) · those (أولئك البعيدون)',
    rule:'نجمع الاسم بإضافة s: book → books. ومع الجمع: these (قريب) و those (بعيد) بدل this و that، والفعل are. ولا نستخدم a مع الجمع.',
    parts:[
      {t:'اسم + s',d:'book → books · clock → clocks · radio → radios'},
      {t:'These are + جمع',d:'These are clocks. (قريبة)'},
      {t:'Those are + جمع',d:'Those are pencils. (بعيدة)'},
    ],
    check:{q:'What are those? — Those are _______.',o:['pens','pen','a pen','a pens'],a:0,en:'those → plural',ar:'those → جمع pens'},
    formula:[{t:'These / Those',c:'v'},{t:'+',c:'p'},{t:'are',c:'s'},{t:'+',c:'p'},{t:'اسم + s',c:'k'}],
    compare:[
      {c1:'This is a radio.',c2:'These are radios.',ar:'مفرد ↔ جمع (قريب)'},
      {c1:"That's a clock.",c2:'Those are clocks.',ar:'مفرد ↔ جمع (بعيد)'},
    ],
    examples:[
      {s:'What are these? — These are books.',tr:'ما هذه؟ — هذه كتب.',ar:'these',ok:true},
      {s:'Those are two clocks.',tr:'تلك ساعتان.',ar:'those',ok:true},
      {s:'These are a books.',wrong:'a books',right:'books',tr:'لا نضع a مع الجمع.',ok:false},
    ]
  }
],
l3:[
  {
    title:'he · she · we · they · you', ar:'الضمائر: he (هو) · she (هي) · we (نحن) · they (هم) · you (أنت/أنتم)',
    rule:'He\'s (هو) للمذكّر، She\'s (هي) للمؤنّث، ومع الجمع: We\'re (نحن) · They\'re (هم) · You\'re (أنتم). مع الجمع الفعل are والاسم بالجمع.',
    parts:[
      {t:'He / She + is',d:"Paul is a pilot. He's a pilot. · She's a doctor."},
      {t:'We / They / You + are',d:"We're mechanics. · They're doctors. · You're students."},
      {t:'شخصان = They',d:"She's a barber, and he's a barber. → They're barbers."},
    ],
    check:{q:"Georgia is a doctor. _______ a doctor.",o:["She's","He's","She","He"],a:0,en:'woman → She\'s',ar:'امرأة → She\'s'},
    formula:[{t:'He / She',c:'s'},{t:'+ is',c:'v'},{t:'·',c:'p'},{t:'We / They / You',c:'s'},{t:'+ are',c:'k'}],
    compare:[
      {c1:"He's a cook.",c2:"They're cooks.",ar:'مفرد ↔ جمع'},
      {c1:"I'm a pilot, and they're pilots.",c2:"We're pilots.",ar:'أنا + هم = نحن'},
    ],
    examples:[
      {s:"She's a teacher.",tr:'هي معلّمة.',ar:'she',ok:true},
      {s:"We're students.",tr:'نحن طلاب.',ar:'we are',ok:true},
      {s:'They is doctors.',wrong:'They is',right:'They are',tr:'مع they نستخدم are.',ok:false},
    ]
  },
  {
    title:'Negative sentences (not)', ar:'النفي: نضع not بعد am / is / are',
    rule:'ننفي الجملة بوضع not بعد الفعل: He is not a pilot. الاختصار: isn\'t · aren\'t · I\'m not. ونستطيع: He\'s not أو He isn\'t.',
    parts:[
      {t:'is not = isn\'t',d:"She isn't a student. = She's not a student."},
      {t:'are not = aren\'t',d:"They aren't mechanics. = They're not mechanics."},
      {t:'am not',d:"I'm not a doctor. (لا يوجد amn't)"},
    ],
    check:{q:"She _______ a teacher. She's a student.",o:["isn't","is","aren't","are"],a:0,en:'negative → isn\'t',ar:'نفي مع she → isn\'t'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'am / is / are',c:'v'},{t:'+',c:'p'},{t:'not + …',c:'k'}],
    compare:[
      {c1:"He's a pilot.",c2:"He's not a pilot. / He isn't a pilot.",ar:'إثبات ↔ نفي'},
      {c1:"We aren't pilots.",c2:"We're mechanics.",ar:'نفي + تصحيح'},
    ],
    examples:[
      {s:"He's not a mechanic. He's a pilot.",tr:'هو ليس ميكانيكياً، هو طيّار.',ar:"He's not",ok:true},
      {s:"They aren't mechanics.",tr:'هم ليسوا ميكانيكيين.',ar:"aren't",ok:true},
      {s:'He not a pilot.',wrong:'He not',right:'He is not',tr:'لا بدّ من is قبل not.',ok:false},
    ]
  },
  {
    title:'Yes/no questions · short answers', ar:'سؤال نعم/لا والإجابة القصيرة',
    rule:'نقدّم الفعل (am / is / are) على الفاعل لنصنع سؤالاً: You are → Are you …? والإجابة القصيرة: Yes, I am. · No, she isn\'t. · Yes, they are. (في الإجابة القصيرة بنعم لا نختصر).',
    parts:[
      {t:'is/are + فاعل + …?',d:'Is she a student? · Are they mechanics?'},
      {t:'Yes, + ضمير + فعل',d:'Yes, they are. · Yes, it is.'},
      {t:'No, + ضمير + فعل + not',d:"No, she isn't. · No, they're not."},
    ],
    check:{q:'Are they students?',o:["No, they're not.","Yes, they aren't.","No, they are.","Yes, they is."],a:0,en:'No + negative',ar:'لا + نفي → No, they\'re not'},
    formula:[{t:'Is / Are',c:'v'},{t:'+',c:'p'},{t:'he / she / they …',c:'s'},{t:'+',c:'p'},{t:'… ?',c:'k'}],
    compare:[
      {c1:'She is a pilot.',c2:'Is she a pilot?',ar:'جملة ↔ سؤال'},
      {c1:'Yes, she is.',c2:"No, she isn't.",ar:'نعم ↔ لا'},
    ],
    examples:[
      {s:"Is this a pen? — No, it isn't. It's a pencil.",tr:'هل هذا قلم حبر؟ — لا، إنه قلم رصاص.',ar:"No, it isn't",ok:true},
      {s:'Are they mechanics? — Yes, they are.',tr:'هل هم ميكانيكيون؟ — نعم.',ar:'Yes, they are',ok:true},
      {s:"Is he a cook? — Yes, he's.",wrong:"Yes, he's",right:'Yes, he is',tr:'في الإجابة القصيرة بنعم لا نختصر.',ok:false},
    ]
  }
],
l4:[
  {
    title:'What time is it?', ar:'السؤال عن الوقت (What time is it?)',
    rule:'نسأل: What time is it? ونجيب: It\'s 10:30 · It\'s ten o\'clock (تماماً) · It\'s five after two (بعد) · It\'s twenty to eleven (إلا) · It\'s a quarter past … (وربع).',
    parts:[
      {t:"It's + الساعة",d:"It's 7:30. · It's ten o'clock."},
      {t:'after / past = بعد',d:"It's five after two. (2:05)"},
      {t:'to = إلا',d:"It's twenty to eleven. (10:40)"},
    ],
    check:{q:'What time is it? (10:00)',o:["It's ten o'clock.","It's ten time.","It's at ten.","Ten is o'clock."],a:0,en:"exact hour → o'clock",ar:'الساعة تماماً → o\'clock'},
    formula:[{t:"It's",c:'v'},{t:'+',c:'p'},{t:'الساعة',c:'k'},{t:'/',c:'p'},{t:"… o'clock",c:'s'}],
    compare:[
      {c1:'2:05 → five after two',c2:'10:40 → twenty to eleven',ar:'after ↔ to'},
      {c1:"It's 10:30.",c2:"It's ten-thirty.",ar:'طريقتان'},
    ],
    examples:[
      {s:"What time is it? — It's 7:30.",tr:'كم الساعة؟ — السابعة والنصف.',ar:'What time',ok:true},
      {s:"It's a quarter past nine.",tr:'الساعة التاسعة والربع.',ar:'quarter past',ok:true},
      {s:"It's ten o'clock at morning.",wrong:'at morning',right:'in the morning',tr:'نقول in the morning.',ok:false},
    ]
  },
  {
    title:'Yes/no questions with long answers', ar:'الإجابة الطويلة: Yes, I am a student.',
    rule:'الإجابة الطويلة تكرّر الجملة كاملة: Are you a student? — Yes, I\'m a student. / No, I\'m not a student. ونستطيع إضافة التصحيح: No, today isn\'t Saturday. It\'s Friday.',
    parts:[
      {t:'Yes + الجملة كاملة',d:"Is she a doctor? — Yes, she's a doctor."},
      {t:'No + النفي كاملاً',d:"Are they doctors? — No, they aren't doctors."},
      {t:'today / tomorrow',d:'Today is Thursday, and tomorrow is Friday.'},
    ],
    check:{q:'Is today Saturday? (no)',o:["No, today isn't Saturday.","No, today is Saturday.","Yes, today isn't Saturday.","No, Saturday."],a:0,en:'No + full negative',ar:'لا + نفي كامل'},
    formula:[{t:'Yes / No',c:'v'},{t:',',c:'p'},{t:'Subject + am/is/are (not)',c:'s'},{t:'+',c:'p'},{t:'الكلمة كاملة',c:'k'}],
    compare:[
      {c1:'Yes, it is. (قصيرة)',c2:"Yes, it's a map. (طويلة)",ar:'قصيرة ↔ طويلة'},
      {c1:'Today is Monday.',c2:'Tomorrow is Tuesday.',ar:'today ↔ tomorrow'},
    ],
    examples:[
      {s:"Are you a student? — Yes, I'm a student.",tr:'هل أنت طالب؟ — نعم، أنا طالب.',ar:'إجابة طويلة',ok:true},
      {s:"Is tomorrow Friday? — Yes, tomorrow is Friday.",tr:'هل غداً الجمعة؟ — نعم، غداً الجمعة.',ar:'tomorrow',ok:true},
      {s:"Are you a cook? — No, I'm a cook.",wrong:"No, I'm a cook",right:"No, I'm not a cook",tr:'مع No نستخدم not.',ok:false},
    ]
  },
  {
    title:'in · on · under · at', ar:'حروف المكان in · on · under و at للوقت',
    rule:'in = داخل · on = على (فوق شيء ملامس) · under = تحت. و at مع الساعة: Go to the classroom at 7:30.',
    parts:[
      {t:'on = على',d:'The box is on the table. · The clock is on the wall.'},
      {t:'in = في / داخل',d:'Put the clock in the box. · The teacher is in the classroom.'},
      {t:'under = تحت · at + وقت',d:'The box is under the table. · Go to the lab at 10:00.'},
    ],
    check:{q:'Go to the lab _______ 12:30.',o:['at','in','on','under'],a:0,en:'time → at',ar:'مع الساعة → at'},
    formula:[{t:'الشيء + is',c:'s'},{t:'+',c:'p'},{t:'in / on / under',c:'v'},{t:'+',c:'p'},{t:'the + مكان',c:'k'}],
    compare:[
      {c1:'The book is on the desk.',c2:'The book is under the desk.',ar:'on ↔ under'},
      {c1:'in the classroom (مكان)',c2:'at 7:30 (وقت)',ar:'in ↔ at'},
    ],
    examples:[
      {s:'The chalkboard is on the wall.',tr:'السبّورة على الحائط.',ar:'on the wall',ok:true},
      {s:'The students are in the classroom.',tr:'الطلاب في الفصل.',ar:'in',ok:true},
      {s:'Go to the classroom in 7:30.',wrong:'in 7:30',right:'at 7:30',tr:'مع الساعة نستخدم at.',ok:false},
    ]
  }
]
};

// ═══════════════════════════════════════
// WO — رتّب الجملة (word order)
// ═══════════════════════════════════════
const WO={
l1:[
  {words:['What','is','your','name'],ans:'What is your name?',tr:'ما اسمك؟',ar:'السؤال عن الاسم'},
  {words:['My','name','is','Jim','Smith'],ans:'My name is Jim Smith.',tr:'اسمي جيم سميث.',ar:'my'},
  {words:['This','is','a','book'],ans:'This is a book.',tr:'هذا كتاب.',ar:'This is a'},
  {words:['What','is','that'],ans:'What is that?',tr:'ما ذاك؟',ar:'that'},
  {words:['Please','open','the','door'],ans:'Please open the door.',tr:'افتح الباب من فضلك.',ar:'أمر + please'},
  {words:['Listen','to','the','teacher'],ans:'Listen to the teacher.',tr:'استمع إلى المعلّم.',ar:'listen to'},
  {words:['Good','morning','How','are','you'],ans:'Good morning. How are you?',tr:'صباح الخير، كيف حالك؟',ar:'التحيّة'},
],
l2:[
  {words:['I','am','a','mechanic'],ans:'I am a mechanic.',tr:'أنا ميكانيكي.',ar:'I am'},
  {words:['What','is','his','name'],ans:'What is his name?',tr:'ما اسمه؟',ar:'his'},
  {words:['Her','name','is','Mary'],ans:'Her name is Mary.',tr:'اسمها ماري.',ar:'her'},
  {words:['These','are','books'],ans:'These are books.',tr:'هذه كتب.',ar:'these'},
  {words:['What','are','those'],ans:'What are those?',tr:'ما تلك؟',ar:'those'},
  {words:["Don't",'close','the','door','please'],ans:"Don't close the door, please.",tr:'لا تغلق الباب من فضلك.',ar:"don't"},
  {words:['Bob','is','a','barber'],ans:'Bob is a barber.',tr:'بوب حلّاق.',ar:'المهن'},
],
l3:[
  {words:['She','is','a','teacher'],ans:'She is a teacher.',tr:'هي معلّمة.',ar:'she'},
  {words:['He','is','not','a','mechanic'],ans:'He is not a mechanic.',tr:'هو ليس ميكانيكياً.',ar:'النفي'},
  {words:['We','are','students'],ans:'We are students.',tr:'نحن طلاب.',ar:'we'},
  {words:['Is','she','a','student'],ans:'Is she a student?',tr:'هل هي طالبة؟',ar:'سؤال'},
  {words:['No','she','is','not'],ans:'No, she is not.',tr:'لا، ليست كذلك.',ar:'إجابة قصيرة'},
  {words:['Are','they','mechanics'],ans:'Are they mechanics?',tr:'هل هم ميكانيكيون؟',ar:'they'},
  {words:['A','quarter','is','25','cents'],ans:'A quarter is 25 cents.',tr:'ربع الدولار 25 سنتاً.',ar:'النقود'},
],
l4:[
  {words:['What','time','is','it'],ans:'What time is it?',tr:'كم الساعة؟',ar:'الوقت'},
  {words:['It','is','ten',"o'clock"],ans:"It is ten o'clock.",tr:'الساعة العاشرة تماماً.',ar:"o'clock"},
  {words:['Today','is','Thursday'],ans:'Today is Thursday.',tr:'اليوم الخميس.',ar:'today'},
  {words:['Tomorrow','is','Friday'],ans:'Tomorrow is Friday.',tr:'غداً الجمعة.',ar:'tomorrow'},
  {words:['The','box','is','on','the','table'],ans:'The box is on the table.',tr:'الصندوق على الطاولة.',ar:'on'},
  {words:['Put','the','clock','in','the','box'],ans:'Put the clock in the box.',tr:'ضع الساعة في الصندوق.',ar:'in'},
  {words:['Go','to','the','classroom','at','7:30'],ans:'Go to the classroom at 7:30.',tr:'اذهب إلى الفصل الساعة 7:30.',ar:'at للوقت'},
]
};

// ═══════════════════════════════════════
// EE — «تقييم» (من التقييم الرسمي EE + Performance Check + الواجبات)
// ═══════════════════════════════════════
const EE={
l1:[
  // EE · Select the best answer
  {q:"Hello.",o:["Good morning.","Fine, thanks.","What is that?","It's a picture."],a:0,en:"greeting → greeting",ar:'التحيّة نردّها بتحيّة',tr:'مرحباً. — صباح الخير.'},
  {q:"What's that?",o:["My name is Aldo.","How are you?","Fine, thanks.","It's a table."],a:3,en:"what's that → It's a …",ar:'ما ذاك؟ → It\'s a …',tr:'ما ذاك؟ — إنها طاولة.'},
  {q:"What's your name?",o:["Good afternoon.","Hello.","Ted.","Good morning."],a:2,en:"name → Ted",ar:'اسمك؟ → Ted',tr:'ما اسمك؟ — تِد.'},
  {q:"It's a _______.",o:["pen","that","write","your"],a:0,en:"a + noun",ar:'a + اسم → pen',tr:'إنه قلم.'},
  {q:"How are you?",o:["Good morning.","Fine, thanks.","Hello.","My name is Bill."],a:1,en:"how are you → Fine, thanks",ar:'كيف حالك؟ → بخير، شكراً',tr:'كيف حالك؟ — بخير، شكراً.'},
  {q:"That is _______ book.",o:["what","look at","it","your"],a:3,en:"possessive → your",ar:'ملكية → your',tr:'ذلك كتابك.'},
  // Homework · Select the best answer
  {q:"What is your name?",o:["Fine, thanks.","Bill.","Good morning.","How are you?"],a:1,en:"name → Bill",ar:'الاسم → Bill',tr:'ما اسمك؟ — بيل.'},
  {q:"It's a _______. (✏️)",o:["close","pencil","what","my"],a:1,en:"a + noun",ar:'a + اسم → pencil',tr:'إنه قلم رصاص.'},
  {q:"That's a _______.",o:["repeat","this","please","picture"],a:3,en:"a + noun",ar:'a + اسم → picture',tr:'تلك صورة.'},
  {q:"Good morning.",o:["Okay. Goodbye.","Hello. How are you?","Good afternoon.","Fine, thanks."],a:1,en:"greeting → Hello. How are you?",ar:'التحيّة → Hello. How are you?',tr:'صباح الخير. — مرحباً، كيف حالك؟'},
  {q:"Listen to _______ teacher.",o:["at","to","the","two"],a:2,en:"the teacher",ar:'the قبل الاسم',tr:'استمع إلى المعلّم.'},
  {q:"This is a _______.",o:["sir","your","open","notebook"],a:3,en:"a + noun",ar:'a + اسم → notebook',tr:'هذا دفتر.'},
  {q:"What is this?",o:["That is a number.","Circle the word.","Repeat.","My name is Ted."],a:0,en:"what is this → a thing",ar:'ما هذا؟ → شيء',tr:'ما هذا؟ — ذلك رقم.'},
  {q:"Open your book, _______.",o:["page","example","please","picture"],a:2,en:"command + please",ar:'أمر + please',tr:'افتح كتابك من فضلك.'},
  {q:"Bill: How are you? Ted: _______",o:["My name is Ted.","Fine, thanks.","Good afternoon.","Goodbye."],a:1,en:"Fine, thanks.",ar:'بخير، شكراً',tr:'كيف حالك؟ — بخير، شكراً.'},
  {q:"_______ this?",o:["That's","Is","It's","What's"],a:3,en:"question → What's",ar:'سؤال → What\'s this?',tr:'ما هذا؟'},
  {q:"Mary: What's that? Sam: _______",o:["It's a table.","Good afternoon.","Bill.","two"],a:0,en:"It's a table.",ar:'إنها طاولة',tr:'ما ذاك؟ — إنها طاولة.'},
  // الأرقام والحروف (EE · Numbers / Letters)
  {q:"Which number is fifteen?",o:["15","50","5","51"],a:0,en:"fifteen = 15",ar:'خمسة عشر = 15',tr:'أيّ رقم هو خمسة عشر؟'},
  {q:"Which number is twelve?",o:["12","20","2","21"],a:0,en:"twelve = 12",ar:'اثنا عشر = 12',tr:'أيّ رقم هو اثنا عشر؟'},
  {q:"Which is a capital letter?",o:["G","g","b","d"],a:0,en:"capital = G",ar:'الحرف الكبير → G',tr:'أيّها حرف كبير؟'},
],
l2:[
  // Homework · Select the correct answer
  {q:"Ted: What is _______ name? Mary: My name is Mary.",o:["your","his","my","her"],a:0,en:"ask the person → your",ar:'تسأل الشخص نفسه → your',tr:'تِد: ما اسمك؟ ماري: اسمي ماري.'},
  {q:"Sam: What is _______ name? Ted: This is Don.",o:["your","his","my","her"],a:1,en:"Don (man) → his",ar:'رجل → his',tr:'سام: ما اسمه؟ تِد: هذا دون.'},
  {q:"John: Please _______ close the door. Open it. Felix: Okay.",o:["don't","what","his","I'm"],a:0,en:"negative command → don't",ar:'النهي → don\'t',tr:'جون: من فضلك لا تغلق الباب، افتحه. فيلكس: حسناً.'},
  // Homework · Look at the picture → choose the sentence
  {q:"(Many pens, near you) — Choose the sentence.",o:["This is a pen.","Those are pens.","These are pens.","That's a pen."],a:2,en:"near + plural → These are",ar:'قريب + جمع → These are',tr:'هذه أقلام.'},
  {q:"(Many books, far from you) — Choose the sentence.",o:["That's a book.","Those are books.","This is a book.","These are books."],a:1,en:"far + plural → Those are",ar:'بعيد + جمع → Those are',tr:'تلك كتب.'},
  {q:"(One chair, near you, a woman's chair) — Choose the sentence.",o:["That's his chair.","These are her chairs.","This is her chair.","Those are his chairs."],a:2,en:"near + one + woman → This is her chair",ar:'قريب + مفرد + امرأة',tr:'هذا كرسيّها.'},
  // I / you / jobs (Homework · What are you? …)
  {q:"What are you?",o:["You're a student.","Bill's a teacher.","I'm a student.","That's a student."],a:2,en:"you → I'm",ar:'تُسأل أنت → I\'m',tr:'ما مهنتك؟ — أنا طالب.'},
  {q:"What am I?",o:["Betty's a doctor.","She is a doctor.","This is a doctor.","You're a doctor."],a:3,en:"I → You're",ar:'يسأل عن نفسه → You\'re',tr:'ما مهنتي؟ — أنت طبيب.'},
  {q:"What is Joe?",o:["I'm a mechanic.","That's a mechanic.","You're a mechanic.","Joe's a mechanic."],a:3,en:"Joe → Joe's",ar:'عن جو → Joe\'s',tr:'ما مهنة جو؟ — جو ميكانيكي.'},
  {q:"What are they?",o:["That's a pen.","It's a pen.","They're pencils.","This is a chair."],a:2,en:"they → They're",ar:'جمع → They\'re',tr:'ما هي؟ — إنها أقلام رصاص.'},
  {q:"Joe: What's that? Ann: _______",o:["They're chairs.","It's a clock.","Joe's a mechanic.","They're students."],a:1,en:"that → It's a",ar:'مفرد → It\'s a',tr:'ما ذاك؟ — إنها ساعة.'},
  {q:"What is it?",o:["Those are tables.","He's a doctor.","It's a pen.","They're tables."],a:2,en:"it → It's a",ar:'it → It\'s a pen',tr:'ما هو؟ — إنه قلم.'},
  // الجمع والأرقام (Homework)
  {q:"Plural of clock:",o:["clocks","clockes","a clocks","clock"],a:0,en:"+ s",ar:'نضيف s',tr:'جمع ساعة.'},
  {q:"Plural of radio:",o:["radios","radioes","a radios","radio"],a:0,en:"+ s",ar:'نضيف s',tr:'جمع راديو.'},
  {q:"This is a radio. → (plural)",o:["These are radios.","These is radios.","This are radios.","These are a radios."],a:0,en:"These are + plural",ar:'These are + جمع',tr:'هذه أجهزة راديو.'},
  {q:"73 = _______",o:["seventy-three","thirty-seven","seventeen-three","seven-three"],a:0,en:"73 = seventy-three",ar:'73 = ثلاثة وسبعون',tr:'اكتب الرقم 73.'},
  {q:"38 = _______",o:["thirty-eight","eighty-three","thirteen-eight","three-eight"],a:0,en:"38 = thirty-eight",ar:'38 = ثمانية وثلاثون',tr:'اكتب الرقم 38.'},
  {q:"100 = _______",o:["one hundred","one thousand","ten","ten hundred"],a:0,en:"100 = one hundred",ar:'100 = مئة',tr:'اكتب الرقم 100.'},
  // الأمر والنهي (Homework)
  {q:"don't / write / name → ?",o:["Please don't write your name.","Please write your name.","Don't please your name write.","Write don't your name."],a:0,en:"Don't + verb",ar:'Don\'t + فعل',tr:'من فضلك لا تكتب اسمك.'},
  {q:"go / lab → ?",o:["Please go to the lab.","Please go the lab.","Go please lab.","Please to go the lab."],a:0,en:"go to",ar:'go to the …',tr:'اذهب إلى المختبر من فضلك.'},
],
l3:[
  // Performance Check (ص 82–84)
  {q:"She _______ a pilot.",o:["am","is","are","not"],a:1,en:"she + is",ar:'she + is',tr:'هي طيّارة.'},
  {q:"They _______ students.",o:["am","is","are","not"],a:2,en:"they + are",ar:'they + are',tr:'هم طلاب.'},
  {q:"You _______ my teacher.",o:["am","is","are","isn't"],a:2,en:"you + are",ar:'you + are',tr:'أنت معلّمي.'},
  {q:"He's a student. He _______ a teacher.",o:["isn't","aren't","not","are"],a:0,en:"he + isn't",ar:'نفي مع he → isn\'t',tr:'هو طالب، ليس معلّماً.'},
  {q:"We _______ pilots. We're mechanics.",o:["not","am not","isn't","aren't"],a:3,en:"we + aren't",ar:'نفي مع we → aren\'t',tr:'نحن لسنا طيّارين، نحن ميكانيكيون.'},
  {q:"_______ you a doctor?",o:["Am","Is","Not","Are"],a:3,en:"you → Are",ar:'سؤال مع you → Are',tr:'هل أنت طبيب؟'},
  {q:"I _______ a barber.",o:["am","is","are","no"],a:0,en:"I + am",ar:'I + am',tr:'أنا حلّاق.'},
  {q:"_______ she a pilot?",o:["Is","Are","Am","Not"],a:0,en:"she → Is",ar:'سؤال مع she → Is',tr:'هل هي طيّارة؟'},
  {q:"Are they students?",o:["Yes, they aren't.","No, they are.","No, they're not.","Yes, they is."],a:2,en:"No + not",ar:'لا + نفي',tr:'هل هم طلاب؟ — لا، ليسوا.'},
  {q:"_______ you students?",o:["Are","Is","Am","Not"],a:0,en:"you → Are",ar:'سؤال مع you → Are',tr:'هل أنتم طلاب؟'},
  {q:"Georgia is a doctor. _______ a doctor.",o:["He's","She's","She","He"],a:1,en:"woman → She's",ar:'امرأة → She\'s',tr:'جورجيا طبيبة، هي طبيبة.'},
  {q:"She's a barber, and he's a barber.",o:["We're barbers.","You're barbers.","They're barbers.","I'm a barber."],a:2,en:"she + he → they",ar:'هي + هو = هم',tr:'هي حلّاقة وهو حلّاق → هم حلّاقون.'},
  {q:"I'm a pilot, and they're pilots.",o:["We're pilots.","You're pilots.","They're teachers.","I'm a student."],a:0,en:"I + they → we",ar:'أنا + هم = نحن',tr:'أنا طيّار وهم طيّارون → نحن طيّارون.'},
  {q:"She _______ a teacher. She's a student.",o:["isn't","is","aren't","are"],a:0,en:"negative → isn't",ar:'نفي → isn\'t',tr:'هي ليست معلّمة، هي طالبة.'},
  {q:"He is not a pilot. (= ?)",o:["He is a pilot.","He's a pilot.","He's not a pilot.","He not a pilot."],a:2,en:"is not → 's not",ar:'is not = \'s not',tr:'هو ليس طيّاراً.'},
  {q:"That's not a chair. _______ a door.",o:["They're","She's","We're","It's"],a:3,en:"thing → It's",ar:'شيء → It\'s',tr:'ذلك ليس كرسياً، إنه باب.'},
  {q:"I'm a student. _______ a student?",o:["She is","She","Is she","Is"],a:2,en:"question → Is she",ar:'سؤال → Is she …?',tr:'أنا طالب، هل هي طالبة؟'},
  {q:"A dollar plus two quarters is _______.",o:["a dollar and 25 cents","a dollar and 20 cents","a dollar and 50 cents","a dollar and 55 cents"],a:2,en:"2 × 25¢ = 50¢",ar:'ربعان = 50 سنتاً',tr:'دولار وربعان = دولار و50 سنتاً.'},
  {q:"Two dimes and four nickels is _______.",o:["sixty cents","fifty cents","forty cents","thirty cents"],a:2,en:"20¢ + 20¢ = 40¢",ar:'20 + 20 = 40 سنتاً',tr:'عشرتان وأربع خمسات = 40 سنتاً.'},
  {q:"A penny and 3 nickels is _______.",o:["16 cents","76 cents","3 cents","14 cents"],a:0,en:"1¢ + 15¢ = 16¢",ar:'1 + 15 = 16 سنتاً',tr:'سنت وثلاث خمسات = 16 سنتاً.'},
  // Homework · is / are / am
  {q:"_______ this Mr. Wilson?",o:["Is","Are","Am"],a:0,en:"this → Is",ar:'this → Is',tr:'هل هذا السيّد ويلسون؟'},
  {q:"_______ we students?",o:["Are","Is","Am"],a:0,en:"we → Are",ar:'we → Are',tr:'هل نحن طلاب؟'},
  {q:"_______ these your pencils?",o:["Are","Is","Am"],a:0,en:"these → Are",ar:'these → Are',tr:'هل هذه أقلامك؟'},
  {q:"_______ I your student?",o:["Am","Is","Are"],a:0,en:"I → Am",ar:'I → Am',tr:'هل أنا طالبك؟'},
  {q:"_______ John and Tom pilots?",o:["Are","Is","Am"],a:0,en:"two people → Are",ar:'شخصان → Are',tr:'هل جون وتوم طيّاران؟'},
  // النقود
  {q:"A _______ is twenty-five cents.",o:["quarter","nickel","dime","penny"],a:0,en:"25¢ = quarter",ar:'25 سنتاً = quarter',tr:'الربع خمسة وعشرون سنتاً.'},
  {q:"A dime is _______.",o:["10 cents","5 cents","1 cent","25 cents"],a:0,en:"dime = 10¢",ar:'dime = 10 سنتات',tr:'الدايم عشرة سنتات.'},
  {q:"A nickel is _______.",o:["5 cents","10 cents","1 cent","50 cents"],a:0,en:"nickel = 5¢",ar:'nickel = 5 سنتات',tr:'النيكل خمسة سنتات.'},
],
l4:[
  // EE · Circle the word that is different
  {q:"Which word is different? (o'clock · Wednesday · Friday · Sunday)",o:["o'clock","Wednesday","Friday","Sunday"],a:0,en:"not a day → o'clock",ar:'ليست يوماً → o\'clock',tr:'أيّ كلمة مختلفة؟'},
  {q:"Which word is different? (box · week · tomorrow · today)",o:["box","week","tomorrow","today"],a:0,en:"not time → box",ar:'ليست وقتاً → box',tr:'أيّ كلمة مختلفة؟'},
  {q:"Which word is different? (example · listen · circle · put)",o:["example","listen","circle","put"],a:0,en:"not a verb → example",ar:'ليست فعلاً → example',tr:'أيّ كلمة مختلفة؟'},
  {q:"Which is different?",o:["okay","on the wall","under the table","in the room"],a:0,en:"not a place → okay",ar:'ليست مكاناً → okay',tr:'أيّها مختلف؟'},
  // EE · Choose the correct letters to spell the word
  {q:"de___ (مكتب)",o:["sk","st","sp"],a:0,en:"desk",ar:'desk',tr:'مكتب'},
  {q:"ce___ (سنت)",o:["nt","nd","ne"],a:0,en:"cent",ar:'cent',tr:'سنت'},
  {q:"___alkboard (سبّورة)",o:["ch","sh","th"],a:0,en:"chalkboard",ar:'chalkboard',tr:'سبّورة'},
  {q:"___udent (طالب)",o:["st","sp","sn"],a:0,en:"student",ar:'student',tr:'طالب'},
  {q:"___ease (من فضلك)",o:["pl","bl","fl"],a:0,en:"please",ar:'please',tr:'من فضلك'},
  {q:"clo___ (ساعة)",o:["ck","ch","cl"],a:0,en:"clock",ar:'clock',tr:'ساعة حائط'},
  {q:"und___ (تحت)",o:["er","or","ar"],a:0,en:"under",ar:'under',tr:'تحت'},
  {q:"teach___ (معلّم)",o:["er","or","ie"],a:0,en:"teacher",ar:'teacher',tr:'معلّم'},
  {q:"cal___dar (تقويم)",o:["en","an","on"],a:0,en:"calendar",ar:'calendar',tr:'تقويم'},
  {q:"___ctor (طبيب)",o:["do","du","di"],a:0,en:"doctor",ar:'doctor',tr:'طبيب'},
  {q:"___ndow (نافذة)",o:["wi","we","wo"],a:0,en:"window",ar:'window',tr:'نافذة'},
  {q:"th___ks (شكراً)",o:["an","on","un"],a:0,en:"thanks",ar:'thanks',tr:'شكراً'},
  // EE · Look at the pictures and circle the correct answer
  {q:"(The pencils are lying on top of the book.) The pencils are _______.",o:["on the book.","in the book.","at the book.","under the book."],a:0,en:"on top → on",ar:'فوق → on',tr:'الأقلام على الكتاب.'},
  {q:"(The students are inside the classroom.) The students are _______.",o:["under the classroom.","in the classroom.","at the classroom.","on the classroom."],a:1,en:"inside → in",ar:'داخل → in',tr:'الطلاب في الفصل.'},
  {q:"Go to the lab _______.",o:["in 12:30.","at 12:30.","under 12:30.","on 12:30."],a:1,en:"time → at",ar:'مع الساعة → at',tr:'اذهب إلى المختبر الساعة 12:30.'},
  // Homework · long answers / days
  {q:"Is she a doctor? (yes)",o:["Yes, she's a doctor.","Yes, she isn't a doctor.","No, she's a doctor.","Yes, a doctor she is."],a:0,en:"Yes + full sentence",ar:'نعم + الجملة كاملة',tr:'هل هي طبيبة؟ — نعم، هي طبيبة.'},
  {q:"Are they doctors? (no)",o:["No, they aren't doctors.","No, they are doctors.","Yes, they aren't doctors.","No, they isn't doctors."],a:0,en:"No + aren't",ar:'لا + aren\'t',tr:'هل هم أطبّاء؟ — لا، ليسوا أطبّاء.'},
  {q:"Are the notebooks under the table? (no)",o:["No, they aren't under the table.","No, they are under the table.","Yes, they aren't under the table.","No, it isn't under the table."],a:0,en:"No + they aren't",ar:'لا + they aren\'t',tr:'هل الدفاتر تحت الطاولة؟ — لا، ليست تحت الطاولة.'},
  {q:"Today is Tuesday. Tomorrow is _______.",o:["Wednesday","Monday","Thursday","Sunday"],a:0,en:"after Tuesday → Wednesday",ar:'بعد الثلاثاء → الأربعاء',tr:'اليوم الثلاثاء، وغداً الأربعاء.'},
  {q:"Today is Thursday. Tomorrow is _______.",o:["Friday","Wednesday","Saturday","Sunday"],a:0,en:"after Thursday → Friday",ar:'بعد الخميس → الجمعة',tr:'اليوم الخميس، وغداً الجمعة.'},
  {q:"Today is _______. Tomorrow is Monday.",o:["Sunday","Saturday","Tuesday","Friday"],a:0,en:"before Monday → Sunday",ar:'قبل الاثنين → الأحد',tr:'اليوم الأحد، وغداً الاثنين.'},
  {q:"The weekend is _______ and _______.",o:["Saturday / Sunday","Friday / Monday","Sunday / Monday","Monday / Friday"],a:0,en:"weekend → Saturday and Sunday",ar:'عطلة نهاية الأسبوع (في أمريكا) → السبت والأحد',tr:'عطلة نهاية الأسبوع السبت والأحد.'},
]
};

// ═══════════════════════════════════════
// REVIEW — الدرس 5 (Review · Select the best answer)
// ═══════════════════════════════════════
const REVIEW=[
  {q:"_______ are students.",o:["They","I","He","She"],a:0,en:"are → They",ar:'are مع الجمع → They',tr:'هم طلاب.'},
  {q:"This _______ a calendar.",o:["are","aren't","am","is"],a:3,en:"this + is",ar:'this + is',tr:'هذا تقويم.'},
  {q:"Those are _______.",o:["student","pens","book","mechanic"],a:1,en:"those + plural",ar:'those + جمع → pens',tr:'تلك أقلام.'},
  {q:"A _______ is twenty-five cents.",o:["quarter","nickel","dime","penny"],a:0,en:"25¢ = quarter",ar:'25 سنتاً → quarter',tr:'الربع خمسة وعشرون سنتاً.'},
  {q:"The weekend is _______ days.",o:["5","2","3","8"],a:1,en:"Saturday + Sunday = 2",ar:'يومان',tr:'عطلة نهاية الأسبوع يومان.'},
  {q:"The chalkboard is _______ the wall.",o:["in","under","on","at"],a:2,en:"on the wall",ar:'على الحائط → on',tr:'السبّورة على الحائط.'},
  {q:"Go to the lab _______ 10 o'clock.",o:["in","under","on","at"],a:3,en:"time → at",ar:'مع الساعة → at',tr:'اذهب إلى المختبر الساعة العاشرة.'},
  {q:"What are you?",o:["They're pilots.","He's a mechanic.","She's a student.","I'm a cook."],a:3,en:"you → I'm",ar:'تُسأل أنت → I\'m',tr:'ما مهنتك؟ — أنا طبّاخ.'},
  {q:"See you later.",o:["Okay. Goodbye.","Hello.","Good afternoon.","Fine, thanks."],a:0,en:"leaving → Goodbye",ar:'وداع → Okay. Goodbye.',tr:'أراك لاحقاً. — حسناً، مع السلامة.'},
  {q:"What are these?",o:["That's a pen.","This is a book.","It's a quarter.","Those are dimes."],a:3,en:"plural → Those are",ar:'جمع → Those are dimes',tr:'ما هذه؟ — تلك عملات دايم.'},
  {q:"A: What's _______ name? B: My name is Alan.",o:["your","my","his","her"],a:0,en:"ask the person → your",ar:'تسأله عن اسمه → your',tr:'ما اسمك؟ — اسمي آلن.'},
  {q:"A dollar is _______ cents.",o:["25","50","10","100"],a:3,en:"dollar = 100¢",ar:'الدولار = 100 سنت',tr:'الدولار مئة سنت.'},
  {q:"35, 21, 7, and 16 are _______.",o:["money","alphabet","numbers","small letters"],a:2,en:"35, 21… → numbers",ar:'أرقام → numbers',tr:'35 و21 و7 و16 أرقام.'},
  {q:"Are they cooks? No, they _______.",o:["aren't","isn't","are","is"],a:0,en:"they + aren't",ar:'نفي مع they → aren\'t',tr:'هل هم طبّاخون؟ لا، ليسوا.'},
  {q:"Today is Monday. _______ is Tuesday.",o:["Day","Tomorrow","What","This"],a:1,en:"next day → Tomorrow",ar:'اليوم التالي → Tomorrow',tr:'اليوم الاثنين، وغداً الثلاثاء.'},
  {q:"It's 9 _______.",o:["letter","student","number","o'clock"],a:3,en:"time → o'clock",ar:'الساعة → o\'clock',tr:'الساعة التاسعة تماماً.'},
  {q:"How are you?",o:["Okay. Goodbye.","Fine, thanks.","Hello.","See you later."],a:1,en:"Fine, thanks.",ar:'بخير، شكراً',tr:'كيف حالك؟ — بخير، شكراً.'},
  {q:"We _______ students.",o:["are","am","isn't","is"],a:0,en:"we + are",ar:'we + are',tr:'نحن طلاب.'},
  // — اقرأ الحوار (Lesson 5) —
  {q:"John: Good morning! How are you? Mark: _______",o:["Fine, thanks. How are you?","Goodbye.","It's 7:30.","See you in class!"],a:0,en:"answer + ask back",ar:'تجيب وتسأل → Fine, thanks. How are you?',tr:'جون: صباح الخير! كيف حالك؟ مارك: بخير، شكراً. وأنت؟'},
  {q:"John: What's the time? Mark: _______",o:["It's 7:30.","Fine, thanks.","Okay. See you later.","Good morning!"],a:0,en:"time → It's 7:30",ar:'الوقت → It\'s 7:30',tr:'جون: كم الساعة؟ مارك: السابعة والنصف.'},
  {q:"John: See you in class! Mark: _______",o:["Okay. See you later.","It's 7:30.","Fine, thanks.","How are you?"],a:0,en:"goodbye → See you later",ar:'وداع → Okay. See you later.',tr:'جون: أراك في الفصل! مارك: حسناً، أراك لاحقاً.'},
];
EE.review=REVIEW;

// ═══════════════════════════════════════
// FINAL EXAM (الاختبار النهائي)
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
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 1 — الفصل',w:[
    {e:'book',a:'كتاب',em:'📕'},{e:'pen',a:'قلم حبر',em:'🖊️'},{e:'pencil',a:'قلم رصاص',em:'✏️'},
    {e:'chair',a:'كرسي',em:'💺'},{e:'door',a:'باب',em:'🚪'},{e:'window',a:'نافذة',em:'🪟'},
    {e:'clock',a:'ساعة حائط',em:'🕰️'},{e:'notebook',a:'دفتر',em:'📓'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 2 — المهن',w:[
    {e:'barber',a:'حلّاق',em:'💈'},{e:'cook',a:'طبّاخ',em:'👨‍🍳'},{e:'doctor',a:'طبيب',em:'👨‍⚕️'},
    {e:'mechanic',a:'ميكانيكي',em:'🔧'},{e:'pilot',a:'طيّار',em:'👨‍✈️'},{e:'teacher',a:'معلّم',em:'👩‍🏫'},
    {e:'student',a:'طالب',em:'🧑‍🎓'},{e:'radio',a:'راديو',em:'📻'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 3 — النقود',w:[
    {e:'money',a:'نقود',em:'💵'},{e:'dollar',a:'دولار',em:'💵'},{e:'quarter',a:'ربع دولار',em:'🪙'},
    {e:'dime',a:'عشرة سنتات',em:'🪙'},{e:'nickel',a:'خمسة سنتات',em:'🪙'},{e:'penny',a:'سنت',em:'🪙'},
    {e:'cent',a:'سنت',em:'¢'},{e:'they',a:'هم',em:'👨‍👩‍👦'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 4 — الأيام والوقت',w:[
    {e:'Monday',a:'الاثنين',em:'1️⃣'},{e:'Tuesday',a:'الثلاثاء',em:'2️⃣'},{e:'Wednesday',a:'الأربعاء',em:'3️⃣'},
    {e:'Thursday',a:'الخميس',em:'4️⃣'},{e:'Friday',a:'الجمعة',em:'5️⃣'},{e:'Saturday',a:'السبت',em:'6️⃣'},
    {e:'Sunday',a:'الأحد',em:'☀️'},{e:'calendar',a:'تقويم',em:'📅'},
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
