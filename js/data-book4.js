// ═══════════════════════════════════════
// DATA — BOOK 4
// Everything book-specific: BOOK_ID, lesson/content data, and the routing
// manifest. Consumed by the engine-*.js files (loaded after this).
// ═══════════════════════════════════════
const BOOK_ID='book4';

const LESSON_META={
  l1:{ico:'🏃',title:'Lesson 1 — Sports & Games',sub:'الرياضة والألعاب · الماضي البسيط'},
  l2:{ico:'🎖️',title:"Lesson 2 — He's in the Army",sub:'إنه في الجيش · الحياة العسكرية والأفعال الشاذّة'},
  l3:{ico:'👕',title:"Lesson 3 — Where Are My Clothes?",sub:'أين ملابسي؟ · الملابس والقدرة (can)'},
  l4:{ico:'🌤️',title:'Lesson 4 — Pencils in 10 Colors',sub:'أقلام بعشرة ألوان · الفصول والألوان'}
};
const LESSON_KEYS=Object.keys(LESSON_META);

// ═══════════════════════════════════════
// VOCABULARY
// ═══════════════════════════════════════
const VOCAB = {
l1:[
  {e:'ball',a:'كرة',em:'⚽'},{e:'baseball',a:'البيسبول',em:'⚾'},
  {e:'basketball',a:'كرة السلة',em:'🏀'},{e:'football',a:'كرة القدم الأمريكية',em:'🏈'},
  {e:'soccer',a:'كرة القدم',em:'⚽'},{e:'tennis',a:'التنس',em:'🎾'},
  {e:'sports',a:'رياضة',em:'🏅'},{e:'team',a:'فريق',em:'🤝'},{e:'game',a:'مباراة / لعبة',em:'🎮'},
  {e:'restaurant',a:'مطعم',em:'🍽️'},{e:'show',a:'عرض / برنامج',em:'📺'},
  {e:'downtown',a:'وسط المدينة',em:'🌆'},{e:'city',a:'مدينة',em:'🏙️'},
  {e:'break',a:'استراحة',em:'☕'},{e:'again',a:'مرة أخرى',alt:['إعادة','تكرار','مرة ثانية','مجدداً'],em:'🔁'},
  {e:'clean up',a:'ينظّف / يرتّب',em:'🧹'},{e:'visit',a:'يزور',em:'🗺️'},
],
l2:[
  {e:'Second Lieutenant (2d Lt)',a:'ملازم ثانٍ — O-1',em:'🟡'},
  {e:'First Lieutenant (1st Lt)',a:'ملازم أول — O-2',em:'⬜'},
  {e:'Captain (Capt)',a:'نقيب — O-3',em:'🔲'},
  {e:'Major (Maj)',a:'رائد — O-4',em:'🍃'},
  {e:'Lieutenant Colonel (Lt Col)',a:'مقدّم — O-5',em:'🍂'},
  {e:'Colonel (Col)',a:'عقيد — O-6',em:'🦅'},
  {e:'General (Gen)',a:'لواء — O-7',em:'⭐'},
  {e:'sergeant (Sgt)',a:'رقيب — رتبة أفراد',em:'🎗️'},
  {e:'base',a:'قاعدة عسكرية',em:'🏕️'},{e:'post',a:'ثكنة (معسكر الجيش)',em:'🪖'},
  {e:'naval base',a:'قاعدة بحرية',em:'⚓'},{e:'uniform',a:'الزي العسكري',em:'👔'},
  {e:'name tag',a:'بطاقة الاسم',em:'🪪'},{e:'rank',a:'الرتبة',em:'🎖️'},
  {e:'insignia',a:'الشارة (رمز الرتبة)',em:'🏅'},{e:'stripe',a:'شريط الرتبة',em:'〰️'},
  {e:'salute',a:'يُحيّي عسكرياً',em:'🫡'},{e:'ID card',a:'بطاقة الهوية',em:'🪪'},
  {e:'cap',a:'قبعة عسكرية',em:'🧢'},{e:'cigarette / pack',a:'سيجارة / علبة',em:'🚬'},
  {e:'smoke',a:'يُدخّن',em:'💨'},{e:'break',a:'استراحة',em:'☕'},
],
l3:[
  {e:'clothes',a:'ملابس',em:'👕'},
  {e:'dress',a:'فستان',em:'👗'},{e:'skirt',a:'تنورة',em:'👗'},
  {e:'blouse',a:'بلوزة',em:'👚'},{e:'stockings',a:'جوارب طويلة',em:'🧦'},
  {e:'sweater',a:'بلوزة صوف',em:'🧥'},{e:'scarf',a:'وشاح',em:'🧣'},
  {e:'hat',a:'قبعة عريضة',em:'👒'},{e:'boots',a:'جزمة طويلة',em:'🥾'},
  {e:'gloves',a:'قفازات',em:'🧤'},{e:'shoes',a:'حذاء',em:'👟'},
  {e:'pants / slacks',a:'بنطلون',em:'👖'},{e:'shirt',a:'قميص',em:'👔'},
  {e:'T-shirt',a:'تيشيرت',em:'👕'},{e:'socks',a:'جوارب قصيرة',em:'🧦'},
  {e:'tie / necktie',a:'ربطة عنق',em:'👔'},{e:'belt',a:'حزام',em:'🔗'},
  {e:'cap',a:'قبعة عسكرية',em:'🧢'},{e:'jacket / coat',a:'جاكيت / معطف',em:'🧥'},
  {e:'suit',a:'بدلة = jacket + slacks',em:'🤵'},{e:'shorts',a:'شورت قصير',em:'🩳'},
  {e:'wear',a:'يرتدي',past:'wore',pa:'ارتدى',em:'👔'},{e:'put on',a:'يلبس',past:'put on',pa:'لبِس',em:'🧥'},
  {e:'take off',a:'يخلع',past:'took off',pa:'خلع',em:'🧤'},{e:'wake up',a:'يستيقظ',past:'woke up',pa:'استيقظ',em:'⏰'},
  {e:'fall asleep',a:'يغفو / يستغرق نوماً',past:'fell asleep',pa:'غفا',em:'😴'},{e:'hang (up)',a:'يعلّق',past:'hung',pa:'علّق',em:'🪝'},
  {e:'can',a:'يستطيع',alt:['استطيع','يقدر','اقدر','بإمكانه','قادر','ممكن','من الممكن','يمكن'],em:'💪'},{e:"can't",a:'لا يستطيع',em:'🚫'},
  {e:'may',a:'يُسمح له / قد',em:'🙋'},{e:'must',a:'يجب',em:'❗'},
  {e:'must not',a:'يجب ألّا (ممنوع)',em:'⛔'},{e:'well',a:'جيّداً / بمهارة',em:'👍'},
  {e:'asleep',a:'نائم',em:'😴'},{e:'awake',a:'صاحٍ / مستيقظ',em:'👀'},
  {e:'sentence',a:'جملة',em:'📝',icon:'align-left'},{e:'statement',a:'جملة خبرية',em:'💬',icon:'quote'},
  {e:'paragraph',a:'فقرة',em:'📄',icon:'pilcrow'},{e:'indent',a:'يُزيح بداية السطر',em:'➡️',icon:'indent'},
  {e:'punctuation',a:'علامات الترقيم',em:'❕',icon:'spell-check'},{e:'punctuate',a:'يضع علامات الترقيم',em:'✍️',icon:'spell-check'},
  {e:'period',a:'نقطة نهاية ( . )',em:'⏹️'},{e:'comma',a:'فاصلة ( , )',em:'🔹'},
  {e:'question mark',a:'علامة استفهام ( ? )',em:'❓'},{e:'apostrophe',a:"فاصلة عُليا ( ' )",em:'✒️'},
  {e:'contraction',a:"اختصار مثل don't",em:'✂️'},
],
l4:[
  {e:'spring',a:'الربيع — مارس أبريل مايو',em:'🌸'},
  {e:'summer',a:'الصيف — يونيو يوليو أغسطس',em:'☀️'},
  {e:'fall / autumn',a:'الخريف — سبتمبر أكتوبر نوفمبر',em:'🍂'},
  {e:'winter',a:'الشتاء — ديسمبر يناير فبراير',em:'❄️'},
  {e:'warm',a:'دافئ',em:'🌡️'},{e:'hot',a:'حار',em:'🔥'},
  {e:'cool',a:'بارد نسبياً',em:'🌬️'},{e:'cold',a:'بارد جداً',em:'🥶'},
  {e:'clerk',a:'موظف متجر',em:'🛒'},{e:'store',a:'متجر',em:'🏪'},
  {e:'headphones',a:'سماعات أذن',em:'🎧'},{e:'radio',a:'راديو',em:'📻'},
  {e:'music',a:'موسيقى',em:'🎵'},{e:'season',a:'فصل',em:'📅'},
  {e:'this / these',a:'هذا / هؤلاء (قريب)',em:'👆'},
  {e:'that / those',a:'ذلك / أولئك (بعيد)',em:'👉'},
  {e:'How much?',a:'كم ثمنه؟',em:'💰'},{e:'sell',a:'يبيع',past:'sold',pa:'باع',em:'🏷️'},
  {e:'colors',a:'الألوان',em:'🎨'},
  {e:'red',a:'أحمر',em:'🔴'},{e:'blue',a:'أزرق',em:'🔵'},{e:'green',a:'أخضر',em:'🟢'},
  {e:'yellow',a:'أصفر',em:'🟡'},{e:'orange',a:'برتقالي',em:'🟠'},{e:'purple',a:'بنفسجي',em:'🟣'},
  {e:'brown',a:'بنّي',em:'🟤'},{e:'black',a:'أسود',em:'⚫'},{e:'white',a:'أبيض',em:'⬜'},
  {e:'gray',a:'رمادي',em:'🩶'},{e:'pink',a:'وردي',em:'🩷'},
]
};

// ═══════════════════════════════════════
// GRAMMAR (قواعد)
// ═══════════════════════════════════════
const GRAMMAR = {
l1:[
  {
    title:'Simple Past', ar:'الماضي البسيط',
    rule:'أضف -ed للفعل + كلمة ماضية (yesterday / last week / ago)',
    check:{q:'Jane _______ baseball yesterday.',o:['plays','played','play','playing'],a:1,en:'yesterday = past tense → played',ar:'yesterday تدل على الماضي'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'verb + ed',c:'v'},{t:'+',c:'p'},{t:'yesterday / last...',c:'k'}],
    compare:[
      {c1:'He visits every year.',c2:'He visited last year.',ar:'every year ↔ last year'},
      {c1:'She cooks every day.',c2:'She cooked yesterday.',ar:'every day ↔ yesterday'},
    ],
    examples:[
      {s:'Jane played baseball yesterday.',tr:'لعبت جين البيسبول أمس.',ar:'yesterday = ماضٍ → played',ok:true},
      {s:'Jane plays baseball yesterday.',wrong:'plays',right:'played',tr:'مع yesterday لا تستخدم المضارع — الفعل يجب أن يكون ماضياً.',ok:false},
    ]
  },
  {
    title:"Negative: didn't", ar:'النفي في الماضي',
    rule:"didn't + فعل مجرد — لا تضع -ed بعد didn't أبداً",
    check:{q:"Tom _______ his room yesterday.",o:["didn't cleaned","didn't clean","not cleaned","clean not"],a:1,en:"didn't + base verb, no -ed",ar:"didn't + الفعل مجرد بدون -ed"},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:"didn't",c:'n'},{t:'+',c:'p'},{t:'base verb',c:'v'}],
    compare:[
      {c1:'Tom cleaned his room.',c2:"Tom didn't clean his room.",ar:'إثبات ↔ نفي'},
    ],
    examples:[
      {s:"Tom didn't clean his room last Saturday.",tr:'لم ينظّف توم غرفته السبت الماضي.',ar:"didn't + clean (بدون -ed)",ok:true},
      {s:"Tom didn't cleaned his room.",wrong:'cleaned',right:'clean',tr:'النفي أخذ الماضي، فلا تكرّره بـ -ed.',ok:false},
    ]
  },
  {
    title:'Questions: Did?', ar:'سؤال الماضي',
    rule:'Did + subject + base verb? — واحذف -d أو -ed من الفعل',
    check:{q:'_______ you watch the game last night?',o:['Do','Did','Watched','Watching'],a:1,en:'Did + subject + base verb',ar:'Did + الفعل الأصلي'},
    formula:[{t:'Did',c:'k'},{t:'+',c:'p'},{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'base verb',c:'v'},{t:'?',c:'p'}],
    compare:[
      {c1:'She liked Chicago.',c2:'Did she like Chicago?',ar:'liked → like (احذف -d)'},
    ],
    examples:[
      {s:'Did you watch the game?',tr:'هل شاهدت المباراة؟ — Yes, I did. / No, I didn\'t.',ar:"Did + الفعل الأصلي",ok:true},
      {s:'Did you watched the game?',wrong:'watched',right:'watch',tr:'بعد Did يرجع الفعل أصلياً بدون -ed.',ok:false},
    ]
  },
  {
    title:'Time Expressions', ar:'تعبيرات الزمن الماضي',
    rule:'هذه الكلمات تدل على الماضي — استخدم معها الفعل الماضي دائماً',
    check:{q:"Which phrase means 'in the past'?",o:['every day','tomorrow','last week','next year'],a:2,en:'last week = past',ar:'last week = ماضٍ'},
    formula:[],
    compare:[],
    examples:[
      {s:'yesterday / yesterday morning / yesterday evening',ar:'أمس',ok:true},
      {s:'last night / last week / last month / last year',ar:'الليلة الماضية / الأسبوع / الشهر / العام الماضي',ok:true},
      {s:'two days ago / a week ago / a year ago',ar:'منذ... (فترة مضت)',ok:true},
    ]
  }
],
l2:[
  {
    title:'Military Ranks', ar:'الرتب العسكرية',
    rule:'الرتب من الأدنى للأعلى — كل رتبة أعلى من السابقة',
    check:{q:'Which rank is higher?',o:['Captain (O-3)','Major (O-4)'],a:1,en:'Major (O-4) is one rank above Captain (O-3)',ar:'Major أعلى من Captain برتبة واحدة'},
    formula:[],compare:[],examples:[],isRanks:true
  },
  {
    title:'Military Time', ar:'التوقيت العسكري 24 ساعة',
    rule:'من 1pm إلى 11pm: أضف 12 على الساعة للحصول على التوقيت العسكري',
    check:{q:'3:00 pm بالتوقيت العسكري؟',o:['0300','1500','1300','2200'],a:1,en:'3pm + 12 = 1500',ar:'3+12 = 1500'},
    formula:[{t:'1pm - 11pm',c:'k'},{t:'+',c:'p'},{t:'12',c:'v'},{t:'=',c:'p'},{t:'Military Time',c:'s'}],
    compare:[
      {c1:'7:30 am',c2:'0730',ar:'الصباح = نفس الرقم'},
      {c1:'3:00 pm',c2:'1500',ar:'3+12=15 → 1500'},
      {c1:'8:50 pm',c2:'2050',ar:'8+12=20 → 2050'},
      {c1:'10:30 pm',c2:'2230',ar:'10+12=22 → 2230'},
    ],
    examples:[
      {s:"It's 8:50 p.m. = 2050.",tr:'الثامنة وخمسون دقيقة مساءً: 8+12=20 ثم الدقائق → 2050.',ar:"مساءً: أضف 12 للساعة",ok:true},
      {s:"It's 8:50 p.m. = 0850.",wrong:'0850',right:'2050',tr:'0850 يعني صباحاً — المساء يبدأ من 12 فما فوق.',ok:false},
    ]
  },
  {
    title:'Irregular Verbs', ar:'الأفعال الشاذة',
    rule:'هذه الأفعال لا تأخذ -ed في الماضي — يجب حفظها',
    check:{q:'Sgt. Jones _______ to LA last week. (fly)',o:['flied','flyed','flew','flow'],a:2,en:'fly → flew (irregular)',ar:'fly فعل شاذ → flew'},
    formula:[{t:'Present',c:'s'},{t:'→',c:'p'},{t:'Past (شاذ)',c:'n'},{t:'لا يصح',c:'k'},{t:'verb + ed',c:'v'}],
    compare:[
      {c1:'speak',c2:'spoke',ar:'تكلّم'},{c1:'fly',c2:'flew',ar:'طار'},
      {c1:'leave',c2:'left',ar:'غادر'},{c1:'bring',c2:'brought',ar:'أحضر'},
      {c1:'go',c2:'went',ar:'ذهب'},{c1:'eat',c2:'ate',ar:'أكل'},
      {c1:'drive',c2:'drove',ar:'قاد'},{c1:'buy',c2:'bought',ar:'اشترى'},
    ],
    examples:[
      {s:'Sgt. Jones flew to LA last week.',tr:'سافر الرقيب جونز جواً إلى لوس أنجلوس الأسبوع الماضي.',ar:"fly فعل شاذ → flew",ok:true},
      {s:'Sgt. Jones flied to LA last week.',wrong:'flied',right:'flew',tr:'fly شاذ، لا يأخذ -ed. ماضيه flew.',ok:false},
    ]
  }
],
l3:[
  {
    title:'Can / Can\'t', ar:'القدرة على فعل شيء',
    rule:'can + فعل مجرد — نفس الشكل لجميع الضمائر، لا تضع s أو -ing',
    check:{q:'Pvt Jones can _______ four languages.',o:['speaks','speak','speaking','spoke'],a:1,en:'can + base verb, no s',ar:'can + الفعل بدون s'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:"can / can't",c:'k'},{t:'+',c:'p'},{t:'base verb',c:'v'}],
    compare:[
      {c1:'Jim can run 10 miles.',c2:"Kelly can't run 10 miles.",ar:'can ↔ can\'t'},
    ],
    examples:[
      {s:'Pvt Jones can speak four languages.',tr:'يستطيع الجندي جونز التحدث بأربع لغات.',ar:"can + الفعل الأصلي (بدون s)",ok:true},
      {s:'Pvt Jones can speaks four languages.',wrong:'speaks',right:'speak',tr:'بعد can لا نضيف s للفعل.',ok:false},
    ]
  },
  {
    title:'Must', ar:'يجب — واجب',
    rule:'must + فعل مجرد — يعني الشيء إلزامي ولا مفر منه',
    check:{q:'Soldiers _______ wear uniforms. (إلزامي)',o:['can','must','may','could'],a:1,en:'must = obligatory',ar:'must = إلزامي'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'must',c:'k'},{t:'+',c:'p'},{t:'base verb',c:'v'}],
    compare:[],
    examples:[
      {s:'Students must listen to the teacher.',tr:'يجب على الطلاب الاستماع للمعلّم.',ar:"must + الفعل الأصلي — إلزامي",ok:true},
      {s:'Soldiers must wear uniforms.',tr:'يجب على الجنود لبس الزي العسكري.',ar:"must + الفعل الأصلي",ok:true},
    ]
  },
  {
    title:'Must not / Mustn\'t', ar:'ممنوع — نهي تام',
    rule:'must not = ممنوع تماماً — مثل Do not في اللوحات التحذيرية',
    check:{q:'I must not _______ here. (ممنوع)',o:['to smoke','smoking','smoke','smoked'],a:2,en:'must not + base verb, no to',ar:'must not + الفعل مباشرة بدون to'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'must not',c:'n'},{t:'+',c:'p'},{t:'base verb',c:'v'}],
    compare:[
      {c1:'Do not smoke here.',c2:'You must not smoke here.',ar:'Do not = must not (نفس المعنى)'},
    ],
    examples:[
      {s:'I must not write with a pen = I cannot write with a pen.',tr:'ممنوع أن أكتب بقلم = لا أستطيع الكتابة بقلم.',ar:"must not = cannot (ممنوع)",ok:true},
      {s:'I must not to write.',wrong:'to write',right:'write',tr:'بعد must not لا نضع to — الفعل مباشرة.',ok:false},
    ]
  },
  {
    title:'May', ar:'يُسمح — طلب إذن رسمي',
    rule:'May I...? = طلب إذن رسمي | Can I...? = طلب إذن غير رسمي',
    parts:[{"t":"May I ...?","d":"طلب إذن رسمي ومؤدّب. مثال: May I come in? = هل تسمح لي بالدخول؟"},{"t":"Can I ...?","d":"طلب إذن غير رسمي (بين الأصدقاء). مثال: Can I use your pen? = ممكن أستخدم قلمك؟"}],
    check:{q:'_______ I go to the library? (طلب إذن رسمي)',o:['Do','Can','May','Must'],a:2,en:'May I...? = formal permission',ar:'May = طلب إذن رسمي'},
    formula:[{t:'May',c:'k'},{t:'+',c:'p'},{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'base verb',c:'v'},{t:'?',c:'p'}],
    compare:[
      {c1:'May I go? (رسمي)',c2:'Can I go? (غير رسمي)',ar:'may = formal | can = informal'},
    ],
    examples:[
      {s:'May I go to the library? → Yes, you may.',tr:'هل تسمح لي بالذهاب إلى المكتبة؟ — نعم، يمكنك.',ar:"طلب إذن رسمي",ok:true},
      {s:'May I go? Yes, you must.',wrong:'must',right:'may',tr:'الإذن يُجاب بـ may وليس must (must = واجب).',ok:false},
    ]
  },
  {
    title:'-ed Sounds', ar:'أصوات لاحقة الماضي',
    rule:'ثلاثة أصوات مختلفة عند نطق -ed — المفتاح هو الحرف قبل الأخير',
    check:{q:'أي كلمة تنطق /t/ في نهايتها؟',o:['studied','played','watched','repeated'],a:2,en:'watched ends in a voiceless sound → /t/',ar:'ch صوت مهموس → /t/'},
    formula:[],compare:[],examples:[],isSounds:true
  }
],
l4:[
  {
    title:'Seasons', ar:'الفصول الأربعة',
    rule:'Fall = Autumn — نفس الفصل باسمين مختلفين',
    check:{q:'Autumn تعني نفس معنى؟',o:['Winter','Spring','Fall','Summer'],a:2,en:'Fall = Autumn, same season',ar:'Fall و Autumn نفس الفصل'},
    formula:[],
    compare:[
      {c1:'Winter: Dec, Jan, Feb',c2:"It's cold.",ar:'الشتاء ❄️'},
      {c1:'Spring: Mar, Apr, May',c2:"It's warm.",ar:'الربيع 🌸'},
      {c1:'Summer: Jun, Jul, Aug',c2:"It's hot.",ar:'الصيف ☀️'},
      {c1:'Fall/Autumn: Sep, Oct, Nov',c2:"It's cool.",ar:'الخريف 🍂'},
    ],
    examples:[
      {s:'Autumn and fall are the same.',tr:'Autumn و fall اسمان لنفس الفصل (الخريف).',ar:"نفس الفصل، كلمتان",ok:true},
    ]
  },
  {
    title:'Days Sequence', ar:'ترتيب الأيام',
    rule:'the day after tomorrow = بعد يومين | the day before yesterday = قبل يومين',
    parts:[{"t":"the day after tomorrow","d":"بعد يومين (اليوم الذي يلي غدًا)."},{"t":"the day before yesterday","d":"قبل يومين (اليوم الذي قبل أمس)."}],
    check:{q:"لو اليوم Monday، فـ 'the day after tomorrow' هو؟",o:['Tuesday','Wednesday','Sunday','Saturday'],a:1,en:'Mon +1 = tomorrow, +2 = day after tomorrow',ar:'بعد الغد = يومين من اليوم'},
    formula:[],
    compare:[
      {c1:'Tomorrow',c2:'Tuesday (if today=Mon)',ar:'اليوم التالي'},
      {c1:'The day after tomorrow',c2:'Wednesday (if today=Mon)',ar:'بعد يومين'},
      {c1:'Yesterday',c2:'Sunday (if today=Mon)',ar:'الأمس'},
      {c1:'The day before yesterday',c2:'Saturday (if today=Mon)',ar:'قبل يومين'},
    ],
    examples:[]
  },
  {
    title:'This / That / These / Those', ar:'أسماء الإشارة',
    rule:'قريب = this/these | بعيد = that/those',
    parts:[{"t":"this / these","d":"للقريب. this للمفرد، these للجمع. مثال: this book / these books."},{"t":"that / those","d":"للبعيد. that للمفرد، those للجمع. مثال: that car / those cars."}],
    check:{q:'_______ cars are big. (بعيد + جمع)',o:['This','That','These','Those'],a:3,en:'far + plural → those',ar:'بعيد + جمع → those'},
    formula:[{t:'Near',c:'k'},{t:'this',c:'v'},{t:'(مفرد)',c:'p'},{t:'these',c:'v'},{t:'(جمع)',c:'p'}],
    compare:[
      {c1:'this (قريب مفرد)',c2:'these (قريب جمع)',ar:'near'},
      {c1:'that (بعيد مفرد)',c2:'those (بعيد جمع)',ar:'far'},
    ],
    examples:[
      {s:'I like this car.',tr:'تعجبني هذه السيارة. (قريب + مفرد)',ar:"this = قريب مفرد",ok:true},
      {s:'Those cars are big.',tr:'تلك السيارات كبيرة. (بعيد + جمع)',ar:"those = بعيد جمع",ok:true},
    ]
  },
  {
    title:'How much...?', ar:'كم الثمن؟',
    rule:'How much is/does = سؤال عن السعر',
    check:{q:'_______ does the pen cost?',o:['How many','How much','What price','How'],a:1,en:'How much = asking price',ar:'How much = سؤال عن السعر'},
    formula:[{t:'How much',c:'k'},{t:'+',c:'p'},{t:'is / does',c:'v'},{t:'+',c:'p'},{t:'item',c:'s'},{t:'cost?',c:'p'}],
    compare:[
      {c1:'How much is the shirt?',c2:"It's $29.",ar:'is = للمفرد'},
      {c1:'How much did it cost?',c2:"It was $13,000.",ar:'did = للماضي'},
    ],
    examples:[
      {s:'How much does the pen cost? → It costs $3.',tr:'كم يكلّف القلم؟ — يكلّف 3 دولارات.',ar:"How much + does + cost",ok:true},
    ]
  },
  {
    title:'-ed Sounds Review', ar:'مراجعة أصوات الماضي',
    rule:'مراجعة: /t/ مهموس | /d/ مجهور | /əd/ بعد t أو d',
    parts:[{"t":"/t/","d":"بعد الأصوات المهموسة (k, p, s, ch, sh). مثال: walked, watched."},{"t":"/d/","d":"بعد الأصوات المجهورة والحركات. مثال: played, studied."},{"t":"/əd/","d":"بعد حرف t أو d. مثال: wanted, needed."}],
    check:{q:'أي كلمة تنطق /əd/؟',o:['played','smoked','wanted','talked'],a:2,en:'wanted ends in t/d → /əd/',ar:'تنتهي بـ t/d → /əd/'},
    formula:[],compare:[],examples:[],isSounds:true
  }
]
};

// ═══════════════════════════════════════
// WORD ORDER (رتّب الجملة)
// ═══════════════════════════════════════
const WO = {
l1:[
  {words:["Jane","played","baseball","yesterday"],ans:"Jane played baseball yesterday.",tr:"لعبت جين البيسبول أمس.",ar:"yesterday = ماضٍ → played"},
  {words:["Tom","didn't","clean","his","room","last","Saturday"],ans:"Tom didn't clean his room last Saturday.",tr:"لم ينظّف توم غرفته السبت الماضي.",ar:"didn't + الفعل الأصلي بدون -ed"},
  {words:["Did","you","watch","the","game","?"],ans:"Did you watch the game ?",tr:"هل شاهدت المباراة؟",ar:"Did + الفعل الأصلي في السؤال"},
  {words:["Bob","visited","Chicago","last","year"],ans:"Bob visited Chicago last year.",tr:"زار بوب شيكاغو العام الماضي.",ar:"last year = ماضٍ → visited"},
  {words:["There","are","eleven","players","on","a","football","team"],ans:"There are eleven players on a football team.",tr:"يوجد أحد عشر لاعباً في فريق كرة القدم.",ar:"team = الفريق"},
  {words:["She","didn't","visit","New","York","last","month"],ans:"She didn't visit New York last month.",tr:"لم تزُر نيويورك الشهر الماضي.",ar:"didn't + visit (بدون -ed)"},
  {words:["Did","Bill","play","football","yesterday","afternoon","?"],ans:"Did Bill play football yesterday afternoon ?",tr:"هل لعب بيل كرة القدم مساء أمس؟",ar:"Did + الفعل المجرد"},
  {words:["Houston","is","a","big","city","in","Texas"],ans:"Houston is a big city in Texas.",tr:"هيوستن مدينة كبيرة في تكساس.",ar:"مدينة كبيرة"},
],
l2:[
  {words:["A","soldier","works","on","an","Army","post"],ans:"A soldier works on an Army post.",tr:"يعمل الجندي في ثكنة الجيش.",ar:"Army → post"},
  {words:["Airmen","always","salute","officers"],ans:"Airmen always salute officers.",tr:"يُحيّي جنود سلاح الجو الضباط دائماً.",ar:"salute = يُحيّي عسكرياً"},
  {words:["I","spoke","to","the","teacher","yesterday"],ans:"I spoke to the teacher yesterday.",tr:"تحدّثت إلى المعلّم أمس.",ar:"speak → spoke (شاذ)"},
  {words:["Sgt.","Jones","flew","to","LA","last","week"],ans:"Sgt. Jones flew to LA last week.",tr:"سافر الرقيب جونز جواً الأسبوع الماضي.",ar:"fly → flew (شاذ)"},
  {words:["I","left","class","early","yesterday"],ans:"I left class early yesterday.",tr:"غادرت الصف مبكراً أمس.",ar:"leave → left (شاذ)"},
  {words:["Please","bring","your","books","to","class"],ans:"Please bring your books to class.",tr:"أحضر كتبك إلى الصف.",ar:"bring = أحضر"},
  {words:["She","didn't","have","her","name","tag","on"],ans:"She didn't have her name tag on.",tr:"لم تكن ترتدي بطاقة اسمها.",ar:"name tag = بطاقة الاسم"},
  {words:["It's","8:50","p.m.","In","military","time","it's","2050"],ans:"It's 8:50 p.m. In military time it's 2050.",tr:"الساعة 8:50 مساءً = 2050 بالتوقيت العسكري.",ar:"8+12=20 → 2050"},
],
l3:[
  {words:["Students","must","listen","to","the","teacher"],ans:"Students must listen to the teacher.",tr:"يجب على الطلاب الاستماع للمعلّم.",ar:"must + فعل مجرد"},
  {words:["You","must","not","smoke","here"],ans:"You must not smoke here.",tr:"ممنوع التدخين هنا.",ar:"must not = ممنوع"},
  {words:["May","I","go","to","the","library","?"],ans:"May I go to the library ?",tr:"هل تسمح لي بالذهاب إلى المكتبة؟",ar:"May I = طلب إذن رسمي"},
  {words:["I","can't","swim","very","well"],ans:"I can't swim very well.",tr:"لا أستطيع السباحة جيداً.",ar:"can't + well"},
  {words:["Soldiers","must","wear","uniforms","to","class"],ans:"Soldiers must wear uniforms to class.",tr:"يجب على الجنود لبس الزي العسكري.",ar:"must + الفعل الأصلي"},
  {words:["A","suit","is","slacks","and","a","jacket"],ans:"A suit is slacks and a jacket.",tr:"البدلة = بنطلون + جاكيت.",ar:"suit = slacks + jacket"},
  {words:["Pvt","Jones","can","speak","four","languages"],ans:"Pvt Jones can speak four languages.",tr:"يستطيع الجندي جونز التحدث بأربع لغات.",ar:"can + الفعل الأصلي"},
  {words:["Do","not","smoke","=","You","must","not","smoke"],ans:"Do not smoke = You must not smoke.",tr:"ممنوع التدخين = يجب ألا تدخّن.",ar:"Do not = must not"},
],
l4:[
  {words:["Autumn","and","fall","are","the","same","season"],ans:"Autumn and fall are the same season.",tr:"Autumn و fall اسمان لنفس الفصل.",ar:"نفس الفصل، كلمتان"},
  {words:["December","January","and","February","are","winter","months"],ans:"December January and February are winter months.",tr:"ديسمبر ويناير وفبراير أشهر الشتاء.",ar:"الشتاء ❄️"},
  {words:["Today","is","Monday","The","day","after","tomorrow","is","Wednesday"],ans:"Today is Monday The day after tomorrow is Wednesday.",tr:"اليوم الاثنين، بعد الغد الأربعاء.",ar:"بعد الغد = +يومين"},
  {words:["I","like","to","listen","to","music","on","the","radio"],ans:"I like to listen to music on the radio.",tr:"أحبّ الاستماع إلى الموسيقى على الراديو.",ar:"listen to music"},
  {words:["Catherine","listens","to","CDs","on","her","headphones"],ans:"Catherine listens to CDs on her headphones.",tr:"تستمع كاثرين للأقراص على سماعاتها.",ar:"headphones = للـ CDs"},
  {words:["It's","very","warm","I","want","to","take","off","my","sweater"],ans:"It's very warm I want to take off my sweater.",tr:"الجو دافئ، أريد خلع سترتي.",ar:"take off = يخلع"},
  {words:["How","much","does","this","pen","cost","?"],ans:"How much does this pen cost ?",tr:"كم يكلّف هذا القلم؟",ar:"How much + does + cost"},
  {words:["John","works","at","a","store","He's","a","clerk"],ans:"John works at a store He's a clerk.",tr:"يعمل جون في متجر، هو موظف متجر.",ar:"store worker = clerk"},
]
};

// ═══════════════════════════════════════
// EVALUATION EXERCISES (اختبر) — EXACT FROM BOOK
// tr = ترجمة حرفية للجملة الصحيحة الكاملة (نفس معيار Book 5)
// ═══════════════════════════════════════
const EE = {
l1:[
  {q:"Jane _______ baseball yesterday.",o:["is playing","playing","played","plays"],a:2,en:"yesterday → past tense → played",ar:"أمس = الماضي البسيط",tr:"جين لعبت البيسبول أمس."},
  {q:"Tom _______ in a restaurant downtown.",o:["ends","likes","visits","cooks"],a:3,en:"He works as a cook in a restaurant",ar:"يطبخ في المطعم = وظيفته",tr:"توم يطبخ في مطعم وسط المدينة."},
  {q:"Tom _______ in Chicago last year.",o:["lives","lived","living","is living"],a:1,en:"last year = past tense → lived",ar:"العام الماضي = ماضٍ",tr:"توم عاش في شيكاغو السنة الماضية."},
  {q:"Please _______ after you cook.",o:["did","clean up","live","end"],a:1,en:"clean up = tidy/organize",ar:"نظّف / رتّب",tr:"من فضلك نظّف بعد أن تطبخ."},
  {q:"Class starts at 0730 and _______ at 1435.",o:["plays","lives","ends","works"],a:2,en:"ends = finishes at that time",ar:"ينتهي",tr:"الحصة تبدأ الساعة 0730 وتنتهي الساعة 1435."},
  {q:"Sally goes _______ on the bus every day.",o:["city","downtown","yesterday","library"],a:1,en:"downtown = city center",ar:"وسط المدينة",tr:"سالي تذهب إلى وسط المدينة بالحافلة كل يوم."},
  {q:"Did Bill play _______ yesterday afternoon?",o:["TV","Dallas","football","show"],a:2,en:"You play a sport like football",ar:"تلعب رياضة مثل كرة القدم",tr:"هل لعب بيل كرة القدم بعد ظهر أمس؟"},
  {q:"What time does class _______?",o:["visit","start","clean","again"],a:1,en:"class starts = begins",ar:"الدرس يبدأ",tr:"في أي ساعة تبدأ الحصة؟"},
  {q:"Did you eat at a _______ on Sunday?",o:["show","hospital","restaurant","dispensary"],a:2,en:"You eat at a restaurant",ar:"تأكل في مطعم",tr:"هل أكلت في مطعم يوم الأحد؟"},
  {q:"Bob: Do you live in San Antonio? Lou: No, I am _______ here.",o:["visiting","starting","watching","cleaning"],a:0,en:"visiting = here temporarily",ar:"زائر = موجود مؤقتاً",tr:"بوب: هل تسكن في سان أنطونيو؟ لو: لا، أنا زائر هنا فقط."},
  {q:"Sam: Did you watch the baseball game on TV? Tom: Yes, _______.",o:["I watch","I did","I did watched","I watching"],a:1,en:"Short answer: Yes, I did.",ar:"الإجابة القصيرة",tr:"سام: هل شاهدت مباراة البيسبول على التلفاز؟ توم: نعم، شاهدت."},
  {q:"Kay: Did Paul play baseball yesterday? May: No, he _______.",o:["not did","I did","did not","no did plays"],a:2,en:"No, he did not. = didn't",ar:"لا، هو لم يفعل",tr:"كاي: هل لعب بول البيسبول أمس؟ ماي: لا، لم يلعب."},
  {q:"Bob visited Chicago last year, and he wants to go _______ this year.",o:["again","long","like","basketball"],a:0,en:"again = one more time",ar:"مرة أخرى",tr:"بوب زار شيكاغو السنة الماضية، ويريد أن يذهب مرة أخرى هذه السنة."},
  {q:"_______ you clean up your room?",o:["Did","Where","What","Are"],a:0,en:"Did = question word for simple past",ar:"Did = أداة السؤال في الماضي",tr:"هل رتّبت غرفتك؟"},
  {q:"Houston is a _______ in Texas.",o:["game","town","city","sport"],a:2,en:"Houston is one of the biggest cities in Texas",ar:"هيوستن من أكبر مدن تكساس",tr:"هيوستن مدينة في تكساس."},
  {q:"There are eleven players on a football _______.",o:["game","sport","team","play"],a:2,en:"11 players = a team",ar:"11 لاعب = فريق",tr:"يوجد أحد عشر لاعباً في فريق كرة القدم."},
  {q:"My brother is a doctor. He _______ in a big hospital downtown.",o:["cleans","works","visits","ends"],a:1,en:"works = his job location",ar:"يعمل هناك",tr:"أخي طبيب. يعمل في مستشفى كبير وسط المدينة."},
  {q:"On Saturday, let's play _______.",o:["basketball","restaurant","town","visit"],a:0,en:"You play basketball",ar:"تلعب كرة السلة",tr:"يوم السبت، لنلعب كرة السلة."},
  {q:"Ben: Did you watch the new _______ on TV last night? Tim: No, I went downtown.",o:["ball","show","city","restaurant"],a:1,en:"watch a show on TV",ar:"تشاهد برنامجاً على التلفاز",tr:"بين: هل شاهدت البرنامج الجديد على التلفاز الليلة الماضية؟ تيم: لا، ذهبت إلى وسط المدينة."},
  {q:"Mr. Gregg is at the office from 7:00 a.m. to 7:00 p.m. He works _______.",o:["all night","all year long","all day long","every day"],a:2,en:"7am to 7pm = all day long",ar:"من الصباح للمساء = طول اليوم",tr:"السيد جريج في المكتب من الساعة 7 صباحاً إلى 7 مساءً. يعمل طوال اليوم."},
],
l2:[
  {q:"Carol is a new major. Last year she was a _______.",o:["sergeant","second lieutenant","first lieutenant","captain"],a:3,en:"Major=O-4. One rank below = Captain O-3",ar:"الرائد O-4، أقل منه مباشرة = النقيب O-3",tr:"كارول رائد جديد. السنة الماضية كانت نقيب."},
  {q:"The stripes on a sergeant's uniform are the _______.",o:["name tag","rank","names","ID card"],a:1,en:"Stripes = rank insignia",ar:"الشرائط تدل على الرتبة",tr:"الشرائط على زي الرقيب تدل على الرتبة."},
  {q:"John is in the Army. He lives on a _______.",o:["naval base","military rank","post","base"],a:2,en:"Army → post (a soldier lives on an Army post)",ar:"الجيش → post = ثكنة (معسكر الجيش)",tr:"جون في الجيش. يعيش في ثكنة (post)."},
  {q:"Tim can't smoke. He doesn't have a _______.",o:["radio","report","cigarette","book"],a:2,en:"You smoke a cigarette",ar:"تدخّن سيجارة",tr:"تيم لا يستطيع أن يدخن. ليس لديه سيجارة."},
  {q:"I didn't know that airman's name. She didn't have her _______ on.",o:["cap","name tag","uniform","rank"],a:1,en:"Name tag has your name on it",ar:"بطاقة الاسم تحمل اسمك",tr:"لم أكن أعرف اسم تلك الجندية في سلاح الجو. لم تكن ترتدي بطاقة اسمها."},
  {q:"Airmen always _______ officers.",o:["salute","report","bring","begin"],a:0,en:"Military rule: salute officers",ar:"التحية العسكرية للضباط",tr:"أفراد سلاح الجو دائماً يحيّون الضباط."},
  {q:"My brother is a captain. He's _______.",o:["a civilian","in the military","a rank","on time"],a:1,en:"Captain = military rank → in the military",ar:"النقيب رتبة عسكرية → في الجيش",tr:"أخي نقيب. هو في الجيش."},
  {q:"Sailors live on _______ base.",o:["an Army","an Air Force","a naval","a post"],a:2,en:"Navy → naval base",ar:"البحرية → قاعدة بحرية",tr:"البحّارة يعيشون في قاعدة بحرية."},
  {q:"Sandra is in the Air Force. She lives on a _______.",o:["base","naval base","military","post"],a:0,en:"Air Force personnel live on a base",ar:"سلاح الجو → قاعدة",tr:"ساندرا في سلاح الجو. تعيش في قاعدة."},
  {q:"Mike Russ is an enlisted man. He's a _______.",o:["civilian","second lieutenant","major","sergeant"],a:3,en:"Enlisted man = non-officer rank like sergeant",ar:"المجنّد = رتبة مثل الرقيب",tr:"مايك رَس مجنّد. هو رقيب."},
  {q:"My _______ has my picture and my name on it.",o:["uniform","suit","ID card","cap"],a:2,en:"ID card has name and photo",ar:"بطاقة الهوية = صورة + اسم",tr:"بطاقتي الشخصية فيها صورتي واسمي."},
  {q:"Col Smith _______ a pack of cigarettes every day.",o:["salutes","smokes","lives","reports"],a:1,en:"smokes a pack",ar:"يدخّن علبة",tr:"العقيد سميث يدخّن علبة سجائر كل يوم."},
  {q:"Class begins at 7:30 every day. It started at 7:40 this morning. This morning class _______.",o:["started on time","began early","didn't start on time","had 10 students"],a:2,en:"7:40 ≠ 7:30 → did not start on time",ar:"7:40 ≠ 7:30 → لم يبدأ في الوقت",tr:"الحصة تبدأ الساعة 7:30 كل يوم. اليوم بدأت الساعة 7:40. يعني الحصة لم تبدأ في وقتها."},
  {q:"Put your _______ on your head.",o:["name tag","stripe","post","cap"],a:3,en:"You put a cap on your head",ar:"تضع القبعة على رأسك",tr:"ضع قبعتك على رأسك."},
  {q:"I'm tired! Let's take a _______.",o:["rank","break","pack","ID card"],a:1,en:"take a break = rest",ar:"خذ استراحة = ارتح",tr:"أنا متعب! لنأخذ استراحة."},
  {q:"Please _______ your books to class tomorrow.",o:["salute","report","bring","buy"],a:2,en:"bring = carry with you",ar:"أحضر = احمل معك",tr:"من فضلك أحضر كتبك إلى الصف غداً."},
  {q:"I _______ to the teacher yesterday.",o:["speak","am speaking","to speak","spoke"],a:3,en:"yesterday = past; speak → spoke",ar:"أمس = ماضٍ؛ speak→spoke شاذة",tr:"تكلمت مع المعلم أمس."},
  {q:"It's 8:50 p.m. It's _______.",o:["0850","0810","2010","2050"],a:3,en:"8:50 pm → 8+12=20 → 2050",ar:"8:50 مساءً = 2050",tr:"الساعة 8:50 مساءً. يعني 2050 بالنظام العسكري."},
  {q:"I _______ class early yesterday.",o:["leaved","went out","left","gone from"],a:2,en:"leave → left (irregular)",ar:"leave→left فعل شاذ",tr:"خرجت من الصف مبكراً أمس."},
  {q:"Sgt. Jones _______ to Los Angeles last week.",o:["is flying","flew","flies","fly"],a:1,en:"last week = past; fly → flew",ar:"الأسبوع الماضي → flew",tr:"الرقيب جونز طار إلى لوس أنجلوس الأسبوع الماضي."},
],
l3:[
  {q:"Which has the past tense sound /t/?",o:["saluted","listened","smoked","indented"],a:2,en:"smoked → /smokt/ (k is voiceless → /t/)",ar:"k مهموسة → صوت /t/",tr:"الفعل smoked ينتهي بصوت /t/ في الماضي."},
  {q:"Which has the past tense sound /əd/?",o:["repeated","spelled","answered","asked"],a:0,en:"repeated → ends in t → /əd/",ar:"تنتهي بـ t → /əd/",tr:"الفعل repeated ينتهي بصوت /əd/ في الماضي."},
  {q:"Which has the past tense sound /d/?",o:["talked","studied","watched","wanted"],a:1,en:"studied → vowel sound → /d/",ar:"حرف علة → /d/",tr:"الفعل studied ينتهي بصوت /d/ في الماضي."},
  {q:"What time did you _______ this morning?",o:["woke up","wakes up","wake up","waking up"],a:2,en:"After Did, the main verb stays in base form: wake up",ar:"بعد Did يرجع الفعل لصيغة المصدر: wake up",tr:"في أي ساعة استيقظت هذا الصباح؟"},
  {q:"Pvt Jones can _______ English, French, Japanese, and German.",o:["speak","speaks","spoke","speaking"],a:0,en:"can + base verb",ar:"can + فعل مجرد",tr:"الجندي جونز يستطيع أن يتكلم الإنجليزية والفرنسية واليابانية والألمانية."},
  {q:"I wore my new pants yesterday. (pants = ?)",o:["ties","socks","blouses","slacks"],a:3,en:"pants = slacks",ar:"بنطلون = slacks",tr:"لبست بنطلوني الجديد أمس. (pants = بنطلون / slacks)"},
  {q:"May I go to the library?",o:["No, he didn't.","Yes, it is.","No, you must.","Yes, you may."],a:3,en:"May I? → Yes, you may.",ar:"May I? → Yes, you may.",tr:"هل أستطيع الذهاب إلى المكتبة؟ — نعم، تستطيع."},
  {q:"We wear _______.",o:["books","clothes","reports","posts"],a:1,en:"We wear clothes",ar:"نلبس ملابس",tr:"نحن نلبس ملابس."},
  {q:"I must _______ tonight.",o:["to study","study","studies","studying"],a:1,en:"must + base verb (no to)",ar:"must + فعل مجرد",tr:"يجب أن أذاكر الليلة."},
  {q:"These words are in alphabetical order:",o:["colonel, captain, cap, cigarette","pants, paragraph, pastel, pattern","shirt, skirt, shoes, she","coat, contraction, clothes, can"],a:1,en:"pants(pa-n), paragraph(pa-r), pastel(pa-s), pattern(pa-t)",ar:"pa-n → pa-r → pa-s → pa-t = ترتيب صحيح",tr:"هذه الكلمات مرتبة أبجدياً: pants, paragraph, pastel, pattern."},
  {q:"That man is an officer. Pvt Jones _______ salute officers.",o:["may","must not","must","didn't"],a:2,en:"Military rule: must salute officers always",ar:"يجب تحية الضباط دائماً",tr:"هذا الرجل ضابط. الجندي جونز يجب أن يحيّي الضباط."},
  {q:"I don't know French. This means:",o:["I can speak French","I must speak French","I can't speak French","I mustn't speak French"],a:2,en:"don't know = can't speak",ar:"لا أعرف = لا أستطيع التحدث",tr:"لا أعرف الفرنسية. يعني: لا أستطيع أن أتكلم الفرنسية."},
  {q:"I like to sleep late on Saturday, but my children get up early. They are always _______ before I am.",o:["again","great","well","awake"],a:3,en:"awake = not sleeping",ar:"صاحٍ = غير نائم",tr:"أحب أن أنام متأخراً يوم السبت، لكن أولادي يستيقظون مبكراً. هم دائماً مستيقظون قبلي."},
  {q:"It's cold. Where is my _______?",o:["coat","book","football","cigarette"],a:0,en:"You wear a coat when it's cold",ar:"تلبس المعطف عند البرد",tr:"الجو بارد. أين معطفي؟"},
  {q:"My son is not awake. He's _______.",o:["awake","bored","asleep","angry"],a:2,en:"Not awake = asleep",ar:"غير صاحٍ = نائم",tr:"ابني ليس مستيقظاً. هو نائم."},
  {q:"Yesterday, Mr. Carter _______ a suit to class.",o:["wear","wears","wore","wearing"],a:2,en:"yesterday = past; wear → wore",ar:"أمس = ماضٍ؛ wear→wore شاذة",tr:"أمس، السيد كارتر لبس بدلة للصف."},
  {q:"I'm very tired. I am going to _______ in lab this afternoon.",o:["put on","fall asleep","take off","wake up"],a:1,en:"fall asleep = go to sleep",ar:"fall asleep = يغفو",tr:"أنا متعب جداً. سأغفو في المختبر بعد ظهر اليوم."},
  {q:"I can't swim very _______.",o:["again","well","true","all"],a:1,en:"swim well = with skill",ar:"يسبح بشكل جيد",tr:"لا أستطيع السباحة جيداً."},
  {q:"My sister bought two _______ at the store.",o:["hat","dress","belts","scarf"],a:2,en:"two = plural → belts",ar:"اثنان = جمع → belts",tr:"أختي اشترت حزامين من المتجر."},
  {q:"I must not write with a pen on the quiz. This means:",o:["I can write with a pen on the quiz","I am writing with a pen on the quiz","I cannot write with a pen on the quiz","I write with a pen on the quiz"],a:2,en:"must not = cannot",ar:"يجب ألّا = لا يمكن",tr:"يجب ألا أكتب بقلم الحبر في الاختبار. يعني: لا أستطيع أن أكتب بقلم الحبر في الاختبار."},
],
l4:[
  {q:"John works at a store. He's a _______.",o:["sailor","soldier","clerk","doctor"],a:2,en:"store worker = clerk",ar:"عامل متجر = clerk",tr:"جون يعمل في متجر. هو بائع (clerk)."},
  {q:"Ms. Moss _______ her students with English.",o:["works","reads","costs","helps"],a:3,en:"teacher helps students",ar:"المعلمة تساعد الطلاب",tr:"المعلمة موس تساعد طلابها في الإنجليزية."},
  {q:"Today is Monday. _______ is Wednesday.",o:["Tomorrow","The day before yesterday","The day after tomorrow","Yesterday"],a:2,en:"Monday + 2 days = Wednesday",ar:"الاثنين + يومين = الأربعاء",tr:"اليوم الاثنين. بعد غد الأربعاء."},
  {q:"It's December, and it's cold in the United States. It's _______.",o:["summer","fall","winter","spring"],a:2,en:"December = winter",ar:"ديسمبر = الشتاء",tr:"الشهر ديسمبر، والجو بارد في أمريكا. يعني فصل الشتاء."},
  {q:"Autumn and fall are the _______.",o:["different","same","months","days"],a:1,en:"Same season, two names",ar:"نفس الفصل، اسمان",tr:"Autumn وfall نفس الفصل (الخريف)."},
  {q:"Dan: I bought a new shirt yesterday. Sue: _______?",o:["What do you want?","What day is tomorrow?","What color is it?","What must I do?"],a:2,en:"Natural question about new clothing = What color?",ar:"السؤال الطبيعي عن ملابس جديدة = ما لونها؟",tr:"دان: اشتريت قميصاً جديداً أمس. سو: ما لونه؟"},
  {q:"It's very _______ in here. I want to take off my sweater.",o:["cold","cool","warm","white"],a:2,en:"Take off sweater → too warm inside",ar:"يخلع سترته → الجو دافئ جداً",tr:"الجو دافئ جداً هنا. أريد أن أخلع السترة."},
  {q:"I like to listen to _______ on the radio.",o:["music","headphones","dance","spring"],a:0,en:"listen to music on the radio",ar:"تستمع للموسيقى على الراديو",tr:"أحب أن أستمع للموسيقى على الراديو."},
  {q:"Catherine listens to CDs on her _______.",o:["telephone","television","headphones","radio"],a:2,en:"headphones for CDs",ar:"سماعات = للـ CDs",tr:"كاثرين تستمع إلى الأقراص على سماعاتها."},
  {q:"Tom: _______ Bob: I went to the BX.",o:["What did you read?","Where were you last night?","When did you come to DLI?","Who ate my banana?"],a:1,en:"Bob answers where he was → Where were you?",ar:"بوب أجاب عن مكانه → أين كنت؟",tr:"توم: أين كنت الليلة الماضية؟ بوب: ذهبت إلى الـ BX (المتجر العسكري)."},
  {q:"Which has the past tense sound /d/?",o:["wanted","selected","marked","shaved"],a:3,en:"shaved → /d/ sound",ar:"shaved = صوت /d/",tr:"الفعل shaved ينتهي بصوت /d/ في الماضي."},
  {q:"Which has the past tense sound /t/?",o:["memorized","reviewed","visited","walked"],a:3,en:"walked → /wɔːkt/ (k voiceless → /t/)",ar:"walked ← k مهموسة → /t/",tr:"الفعل walked ينتهي بصوت /t/ في الماضي."},
  {q:"Which has the past tense sound /əd/?",o:["repeated","worked","danced","played"],a:0,en:"repeated → ends in t → /əd/",ar:"repeated تنتهي بـ t → /əd/",tr:"الفعل repeated ينتهي بصوت /əd/ في الماضي."},
]
};

// All questions combined for final test, deduped by exact question text
// (EE.l3/EE.l4 and the extra tail questions below share a few identical
// review questions — keep only the first occurrence of each).
const FINAL = dedupe_by_q([
  ...EE.l1.map((q,i)=>({...q,lbl:'L1-'+(i+1)})),
  ...EE.l2.map((q,i)=>({...q,lbl:'L2-'+(i+1)})),
  ...EE.l3.map((q,i)=>({...q,lbl:'L3-'+(i+1)})),
  ...EE.l4.map((q,i)=>({...q,lbl:'L4-'+(i+1)})),
  // Additional L3 from EE-17/18
  {q:"These words are in alphabetical order:",o:["colonel, captain, cap, cigarette","pants, paragraph, pastel, pattern","shirt, skirt, shoes, she","coat, contraction, clothes, can"],a:1,en:"pants(pa-n), paragraph(pa-r), pastel(pa-s), pattern(pa-t)",ar:"ترتيب أبجدي صحيح",tr:"هذه الكلمات مرتبة أبجدياً: pants, paragraph, pastel, pattern.",lbl:'L3-21'},
  {q:"Do not smoke cigarettes in this building. This means:",o:["You may smoke in this building","You must not smoke in this building","You sometimes smoke in this building","You can smoke in this building"],a:1,en:"Do not = must not",ar:"لا تفعل = يجب ألّا تفعل",tr:"لا تدخن سجائر في هذا المبنى. يعني: يجب ألا تدخن في هذا المبنى.",lbl:'L3-22'},
  {q:"A suit is slacks and a _______.",o:["hat","jacket","shoe","dress"],a:1,en:"suit = jacket + slacks",ar:"البدلة = جاكيت + بنطلون",tr:"البدلة (suit) هي بنطلون وجاكيت.",lbl:'L3-23'},
  {q:"These words are in alphabetical order.",o:["Shirt, Sock, Sport, spring","Sweater, Summer, Shoe, Show","Season, Salute, Sentence, Scarf","Smoke, Sell, Suit, Start"],a:0,en:"Sh → So → Sp → sp = ascending alphabetical order",ar:"ترتيب أبجدي تصاعدي: Sh → So → Sp → sp",tr:"هذه الكلمات مرتبة أبجدياً: Shirt, Sock, Sport, spring.",lbl:'L3-24'},
  // Additional L4
  {q:"Pvt Jones can _______ four languages.",o:["speak","speaks","spoke","speaking"],a:0,en:"can + base verb",ar:"can + فعل مجرد",tr:"الجندي جونز يستطيع أن يتكلم أربع لغات.",lbl:'L4-14'},
  {q:"What time did you _______ this morning?",o:["woke up","wakes up","wake up","waking up"],a:2,en:"After Did, the main verb stays in base form: wake up",ar:"بعد Did يرجع الفعل لصيغة المصدر: wake up",tr:"في أي ساعة استيقظت هذا الصباح؟",lbl:'L4-15'},
  {q:"I'm very tired. I am going to _______ in lab this afternoon.",o:["put on","fall asleep","take off","wake up"],a:1,en:"fall asleep = go to sleep",ar:"fall asleep = يغفو",tr:"أنا متعب جداً. سأغفو في المختبر بعد ظهر اليوم.",lbl:'L4-16'},
  {q:"My sister bought two _______ at the store.",o:["hat","dress","belts","scarf"],a:2,en:"two = plural → belts",ar:"اثنان = جمع → belts",tr:"أختي اشترت حزامين من المتجر.",lbl:'L4-17'},
]);
EE.final=FINAL;

// ═══════════════════════════════════════
// LISTENING (YouTube videos)
// ═══════════════════════════════════════
const YT_VIDEOS=[
  {id:'0slGq0JJKHs',t:'Quiz A',s:'استماع وقراءة مع الحل'},
  {id:'elzqhXfnqbQ',t:'Quiz B',s:'استماع وقراءة مع الحل'},
  {id:'qP6UyAVijUI',t:'Quiz C',s:'استماع وقراءة مع الحل'}
];

// ═══════════════════════════════════════
// SPELLING — write from listening (by lesson)
// ═══════════════════════════════════════
const SPELL_LESSONS=[
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 1 — الرياضة والألعاب',w:[
    {e:'ball',a:'كرة',em:'🏀'},{e:'team',a:'فريق',em:'🤝'},{e:'game',a:'لعبة',em:'🎮'},
    {e:'city',a:'مدينة',em:'🏙️'},{e:'show',a:'عرض / برنامج',em:'📺'},{e:'visit',a:'يزور',em:'🗺️'}]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 2 — الحياة العسكرية',w:[
    {e:'base',a:'قاعدة',em:'🏕️'},{e:'rank',a:'رتبة',em:'🎖️'},{e:'cap',a:'قبعة',em:'🧢'},
    {e:'salute',a:'يُحيّي عسكرياً',em:'🫡'},{e:'break',a:'استراحة',em:'☕'}]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 3 — الملابس',w:[
    {e:'dress',a:'فستان',em:'👗'},{e:'shirt',a:'قميص',em:'👔'},{e:'shoes',a:'حذاء',em:'👟'},
    {e:'socks',a:'جوارب',em:'🧦'},{e:'belt',a:'حزام',em:'🔗'},{e:'coat',a:'معطف',em:'🧥'},
    {e:'scarf',a:'وشاح',em:'🧣'},{e:'boots',a:'جزمة',em:'🥾'}]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 4 — الفصول والطقس',w:[
    {e:'spring',a:'الربيع',em:'🌸'},{e:'summer',a:'الصيف',em:'☀️'},{e:'winter',a:'الشتاء',em:'❄️'},
    {e:'music',a:'موسيقى',em:'🎵'},{e:'radio',a:'راديو',em:'📻'},{e:'store',a:'متجر',em:'🏪'},
    {e:'warm',a:'دافئ',em:'🌡️'},{e:'cold',a:'بارد',em:'🥶'}]},
  {t:'🎨 Lesson 5 — الألوان',w:[
    {e:'red',a:'أحمر',em:'🔴'},{e:'blue',a:'أزرق',em:'🔵'},{e:'green',a:'أخضر',em:'🟢'},
    {e:'black',a:'أسود',em:'⚫'},{e:'white',a:'أبيض',em:'⬜'},{e:'brown',a:'بنّي',em:'🟤'},
    {e:'pink',a:'وردي',em:'🩷'},{e:'gray',a:'رمادي',em:'🩶'}]}
];

// ═══════════════════════════════════════
// ROUTING MANIFEST
// ═══════════════════════════════════════
const SCREENS=['home','lscreen','fscreen','pscreen','ascreen','wscreen','pnscreen','modscreen','spscreen','tmscreen','ivscreen','ytscreen','mkscreen'];
const SCREEN_NAMES={home:'الرئيسية',lscreen:'درس',fscreen:'الاختبار النهائي',pscreen:'حروف الجر in·on·at',ascreen:'a·an·the',wscreen:'أدوات السؤال WH',pnscreen:'الضمائر وفعل الكينونة',modscreen:'الأفعال الناقصة',spscreen:'الإملاء',tmscreen:'الماضي وكلمات الزمن',ivscreen:'الأفعال الشاذة',ytscreen:'الاستماع',mkscreen:'مراجعة الأخطاء'};
