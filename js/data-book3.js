// ═══════════════════════════════════════
// DATA — BOOK 3
// Lesson 1 (He gets up early) — vocab, grammar, word-order, per-lesson quiz.
// Built lesson by lesson; more lessons get appended here later.
// ═══════════════════════════════════════
const BOOK_ID='book3';

const LESSON_META={
  l1:{ico:'⏰',title:'Lesson 1 — He gets up early',sub:'الحياة اليومية · المضارع البسيط · النفي · أسئلة نعم/لا · أوقات اليوم'},
  l2:{ico:'🗣️',title:'Lesson 2 — They speak English',sub:'اللغات · أسئلة who و WH · الفعل have · ظروف التكرار (always/sometimes/never)'}
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
};

// ═══════════════════════════════════════
// REVIEW — "المراجعة"
// ═══════════════════════════════════════
const REVIEW=[
  {q:"He _______ breakfast in the dining hall every morning.",o:["eat","eats","eating","are eat"],a:1,en:"he → eats",ar:'مع he نضيف s → eats',tr:'يأكل الفطور في قاعة الطعام كل صباح.'},
  {q:"They _______ to the mess hall at 6:45.",o:["goes","go","going","gone"],a:1,en:"they → go",ar:'مع they بلا s → go',tr:'يذهبون إلى المطعم الساعة ٦:٤٥.'},
  {q:"Pvt Garcia _______ sleep late.",o:["don't","doesn't","not","isn't"],a:1,en:"he → doesn't",ar:'مع he نستخدم doesn\'t',tr:'لا ينام الجندي غارسيا متأخّراً.'},
  {q:"_______ Hank and Stephen get up early?",o:["Does","Is","Do","Are"],a:2,en:"plural → Do",ar:'جمع → Do',tr:'هل يستيقظ هانك وستيفن مبكّراً؟'},
  {q:"Does Betty drink coffee every afternoon? — Yes, she _______.",o:["do","does","is","doesn't"],a:1,en:"she → does",ar:'مع she → does',tr:'هل تشرب بيتي القهوة كل عصر؟ — نعم.'},
  {q:"12 o'clock in the middle of the day is _______.",o:["midnight","night","noon","evening"],a:2,en:"midday → noon",ar:'منتصف النهار → الظُّهر',tr:'الساعة ١٢ في منتصف النهار هي الظُّهر.'},
  {q:"12 o'clock at night is _______.",o:["noon","midnight","morning","afternoon"],a:1,en:"12 at night → midnight",ar:'منتصف الليل → midnight',tr:'الساعة ١٢ ليلاً هي منتصف الليل.'},
  {q:"I take a _______ and shave in the morning.",o:["snack","shower","lesson","class"],a:1,en:"wash → shower",ar:'يغتسل → shower',tr:'أستحمّ وأحلق في الصباح.'},
  {q:"He's very _______, so he wants to drink water.",o:["hungry","tired","thirsty","early"],a:2,en:"wants water → thirsty",ar:'يريد ماءً → عطشان',tr:'إنه عطشان جداً، لذا يريد شرب الماء.'},
  {q:"I study my lesson in the _______ and go to bed at midnight.",o:["morning","evening","noon","a.m."],a:1,en:"study then sleep → evening",ar:'يذاكر ثم ينام → المساء',tr:'أذاكر درسي في المساء وأنام منتصف الليل.'},
  {q:"Does Stephen study every night? — No, he _______.",o:["don't","isn't","doesn't","not"],a:2,en:"he → doesn't",ar:'مع he → doesn\'t',tr:'هل يذاكر ستيفن كل ليلة؟ — لا.'},
  {q:"_______ eat fish for lunch. I want a salad.",o:["Let's","Do","Does","I'm"],a:0,en:"suggestion → Let's",ar:'اقتراح → Let\'s',tr:'لنأكل السمك على الغداء. أنا أريد سلطة.'},
];
EE.review=REVIEW;

// ═══════════════════════════════════════
// FINAL EXAM (الاختبار النهائي) — يجمع أسئلة الدروس المتاحة
// ═══════════════════════════════════════
const FINAL=dedupe_by_q([
  ...EE.l1,
  ...EE.l2,
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
];

// ═══════════════════════════════════════
// LISTENING — (تُضاف فيديوهات Book 3 لاحقاً)
// ═══════════════════════════════════════
const YT_VIDEOS=[];

// ═══════════════════════════════════════
// ROUTING MANIFEST
// ═══════════════════════════════════════
const SCREENS=['home','lscreen','rscreen','fscreen','spscreen','mkscreen'];
const SCREEN_NAMES={home:'الرئيسية',lscreen:'درس',rscreen:'المراجعة',fscreen:'الاختبار النهائي',spscreen:'الإملاء',mkscreen:'مراجعة الأخطاء'};
