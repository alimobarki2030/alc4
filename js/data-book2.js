// ═══════════════════════════════════════
// DATA — BOOK 2 (المستوى الأول)
// Lessons 1–4 + Lesson 5 (Review). Source: ALC Book 2 student text,
// performance checks, homework (HW) and evaluation exercises (EE).
// ═══════════════════════════════════════
const BOOK_ID='book2';

const LESSON_META={
  l1:{ico:'👨‍👩‍👧',title:'Lesson 1 — My family is big.',sub:'أفراد العائلة · الصفات مثل happy و tall · الجمع الشاذّ · and / or · Let\'s · الأرقام 101–999'},
  l2:{ico:'🏢',title:'Lesson 2 — Whose office is this?',sub:'مباني القاعدة العسكرية · Where …? · Whose …? · our / your / their · الأرقام بالآلاف'},
  l3:{ico:'🍎',title:'Lesson 3 — Are you studying?',sub:'الأكل والشرب · a / an · المضارع المستمر (I\'m eating) · السؤال والإجابة بنعم/لا'},
  l4:{ico:'🍽️',title:"Lesson 4 — It's time for lunch.",sub:'Who …? · What / Where + ing · النقود والأسعار · It\'s time for … · الأرقام حتى المليون'}
};
const LESSON_KEYS=Object.keys(LESSON_META);

// ═══════════════════════════════════════
// VOCABULARY (من صفحة What's new in Lesson ?)
// ═══════════════════════════════════════
const VOCAB={
l1:[
  // — العائلة —
  {e:'family',a:'عائلة',em:'👨‍👩‍👧‍👦'},
  {e:'father',a:'أب',em:'👨'},
  {e:'mother',a:'أمّ',em:'👩'},
  {e:'parents',a:'الوالدان',em:'👫'},
  {e:'son',a:'ابن',em:'👦'},
  {e:'daughter',a:'ابنة',em:'👧'},
  {e:'brother',a:'أخ',em:'🧑'},
  {e:'sister',a:'أخت',em:'👩'},
  {e:'husband',a:'زوج',em:'🤵'},
  {e:'wife',a:'زوجة',em:'👰'},
  {e:'child',a:'طفل',em:'🧒'},
  {e:'children',a:'أطفال (جمع child)',em:'👧👦'},
  {e:'boy',a:'ولد',em:'👦'},
  {e:'girl',a:'بنت',em:'👧'},
  {e:'man',a:'رجل',em:'👨'},
  {e:'men',a:'رجال (جمع man)',em:'👨👨'},
  {e:'woman',a:'امرأة',em:'👩'},
  {e:'women',a:'نساء (جمع woman)',em:'👩👩'},
  {e:'person',a:'شخص',em:'🧍'},
  {e:'people',a:'ناس / أشخاص (جمع person)',em:'👥'},
  {e:'friend',a:'صديق',em:'🤝'},
  {e:'syllable',a:'مقطع صوتي',em:'🔊'},
  // — الصفات —
  {e:'happy',a:'سعيد',em:'😀'},
  {e:'sad',a:'حزين',em:'😢'},
  {e:'angry',a:'غاضب',em:'😠'},
  {e:'tired',a:'متعب',em:'😩'},
  {e:'sick',a:'مريض',em:'🤒'},
  {e:'well',a:'بصحّة جيّدة',em:'💪'},
  {e:'hot',a:'حارّ / يشعر بالحرّ',em:'🥵'},
  {e:'cold',a:'بارد / يشعر بالبرد',em:'🥶'},
  {e:'old',a:'كبير في السنّ / قديم',em:'👴'},
  {e:'young',a:'صغير في السنّ / شابّ',em:'🧒'},
  {e:'tall',a:'طويل',em:'🦒'},
  {e:'short',a:'قصير',em:'🐁'},
  // — كلمات —
  {e:"let's",a:'هيّا لـ / دعنا',em:'👉'},
  {e:'or',a:'أو / أم',em:'🔀'},
  {e:'too',a:'أيضاً',em:'➕'},
  {e:'very',a:'جداً',em:'❗'},
  {e:'now',a:'الآن',em:'⏱️'},
  {e:'Mr.',a:'السيّد',em:'👨'},
  {e:'Mrs.',a:'السيّدة (المتزوّجة)',em:'👩'},
  {e:'Miss',a:'الآنسة',em:'👧'},
],
l2:[
  // — القاعدة العسكرية —
  {e:'base',a:'قاعدة (عسكرية)',em:'🪖'},
  {e:'Air Force',a:'سلاح الجوّ',em:'✈️'},
  {e:'building',a:'مبنى',em:'🏢'},
  {e:'office',a:'مكتب',em:'🗂️'},
  {e:'barracks',a:'ثكنة / سكن الجنود',em:'🛏️'},
  {e:'dining hall',a:'قاعة الطعام',em:'🍽️'},
  {e:'mess hall',a:'مطعم الجنود',em:'🍲'},
  {e:'snack bar',a:'مقصف / كافتيريا',em:'🥤'},
  {e:'commissary',a:'متجر البقالة في القاعدة',em:'🛒'},
  {e:'Base Exchange (BX)',a:'سوق القاعدة (BX)',em:'🏬'},
  {e:'hospital',a:'مستشفى',em:'🏥'},
  {e:'dispensary',a:'عيادة / مستوصف',em:'💊'},
  {e:'library',a:'مكتبة',em:'📚'},
  {e:'bus',a:'حافلة',em:'🚌'},
  {e:'bus stop',a:'موقف الحافلة',em:'🚏'},
  {e:'bulletin board',a:'لوحة الإعلانات',em:'📌'},
  {e:'schedule',a:'جدول (مواعيد)',em:'🗓️'},
  {e:'room',a:'غرفة',em:'🚪'},
  {e:'bed',a:'سرير',em:'🛏️'},
  {e:'question',a:'سؤال',em:'❓'},
  {e:'answer',a:'جواب / يجيب',em:'💬'},
  {e:'ask',a:'يسأل',em:'🙋'},
  {e:'belong to',a:'يخصّ / مِلك لـ',em:'🏷️'},
  // — كلمات —
  {e:'where',a:'أين',em:'📍'},
  {e:'whose',a:'لمن',em:'🔑'},
  {e:'our',a:'ـنا (ملكنا)',em:'👥'},
  {e:'their',a:'ـهم (ملكهم)',em:'👨‍👩‍👦'},
  {e:'inside',a:'داخل',em:'🏠'},
  {e:'outside',a:'خارج',em:'🌳'},
  {e:'big',a:'كبير',em:'🐘'},
  {e:'small',a:'صغير',em:'🐜'},
  {e:'thousand',a:'ألف',em:'🔢'},
],
l3:[
  // — الوجبات —
  {e:'food',a:'طعام',em:'🍲'},
  {e:'meal',a:'وجبة',em:'🍽️'},
  {e:'breakfast',a:'فطور',em:'🍳'},
  {e:'lunch',a:'غداء',em:'🥪'},
  {e:'dinner',a:'عشاء',em:'🍛'},
  {e:'drink',a:'يشرب / مشروب',past:'drank',pa:'شرب',em:'🥤'},
  {e:'eat',a:'يأكل',past:'ate',pa:'أكل',em:'🍴'},
  // — اللحوم —
  {e:'meat',a:'لحم',em:'🥩'},
  {e:'beef',a:'لحم بقر',em:'🐄'},
  {e:'lamb',a:'لحم ضأن / خروف',em:'🐑'},
  {e:'pork',a:'لحم خنزير',em:'🐖'},
  {e:'chicken',a:'دجاج',em:'🍗'},
  {e:'fish',a:'سمك',em:'🐟'},
  {e:'egg',a:'بيضة',em:'🥚'},
  // — الفواكه والخبز —
  {e:'fruit',a:'فاكهة',em:'🍉'},
  {e:'apple',a:'تفّاحة',em:'🍎'},
  {e:'banana',a:'موزة',em:'🍌'},
  {e:'orange',a:'برتقالة',em:'🍊'},
  {e:'pear',a:'كمّثرى',em:'🍐'},
  {e:'cherry',a:'كرز',em:'🍒'},
  {e:'bread',a:'خبز',em:'🍞'},
  {e:'toast',a:'خبز محمّص',em:'🍞'},
  {e:'rice',a:'أرز',em:'🍚'},
  {e:'salad',a:'سلطة',em:'🥗'},
  // — المشروبات —
  {e:'water',a:'ماء',em:'💧'},
  {e:'milk',a:'حليب',em:'🥛'},
  {e:'juice',a:'عصير',em:'🧃'},
  {e:'coffee',a:'قهوة',em:'☕'},
  {e:'tea',a:'شاي',em:'🍵'},
  // — أفعال وصفات —
  {e:'buy',a:'يشتري',em:'🛍️'},
  {e:'study',a:'يذاكر / يدرس',em:'📖'},
  {e:'read',a:'يقرأ',em:'📰'},
  {e:'talk',a:'يتحدّث',em:'🗣️'},
  {e:'watch',a:'يشاهد',em:'📺'},
  {e:'movie',a:'فيلم',em:'🎬'},
  {e:'hungry',a:'جائع',em:'😋'},
  {e:'thirsty',a:'عطشان',em:'🥵'},
  {e:'bored',a:'ملول / يشعر بالملل',em:'🥱'},
  {e:'vowel',a:'حرف علّة (a e i o u)',em:'🅰️'},
  {e:'consonant',a:'حرف ساكن',em:'🅱️'},
],
l4:[
  {e:'who',a:'من (للأشخاص)',em:'🙋'},
  {e:'homework',a:'واجب منزلي',em:'📝'},
  {e:'count',a:'يعدّ',em:'🔢'},
  {e:'check',a:'يتحقّق / يراجع',em:'✔️'},
  {e:'do',a:'يفعل',em:'🛠️'},
  {e:'correct',a:'صحيح',em:'✅'},
  {e:'right',a:'صحيح / صواب',em:'👍'},
  {e:'wrong',a:'خطأ',em:'❌'},
  {e:'same',a:'نفس الشيء / متشابه',em:'🟰'},
  {e:'different',a:'مختلف',em:'🔀'},
  {e:'nothing',a:'لا شيء',em:'🫙'},
  {e:'million',a:'مليون',em:'💰'},
  {e:"It's time for …",a:'حان وقت …',em:'⏰'},
  {e:'Me, too.',a:'وأنا كذلك',em:'🙋'},
  {e:"You're welcome.",a:'عفواً (ردّاً على الشكر)',em:'😊'},
  {e:'Nothing much.',a:'لا شيء مهمّ',em:'🤷'},
]
};

// ═══════════════════════════════════════
// GRAMMAR
// ═══════════════════════════════════════
const GRAMMAR={
l1:[
  {
    title:'Adjectives after be (He is happy.)', ar:'الصفة بعد am / is / are (He is happy.)',
    rule:'الصفة تأتي بعد فعل الكون: الفاعل + am/is/are + صفة. لا نضع a قبل الصفة وحدها. والسؤال: نقدّم الفعل: Is he young?',
    parts:[
      {t:'Subject + be + adjective',d:'He is happy. · She is tall. · I am young.'},
      {t:'النفي',d:"She isn't sad."},
      {t:'السؤال',d:'Is he young? — Yes, he is. / No, he isn\'t.'},
    ],
    check:{q:'He is not old. He is very _______.',o:['young','cold','thirsty','well'],a:0,en:'opposite of old → young',ar:'عكس old → young'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'am / is / are (not)',c:'v'},{t:'+',c:'p'},{t:'صفة',c:'k'}],
    compare:[
      {c1:'She is tall.',c2:'Is she tall?',ar:'جملة ↔ سؤال'},
      {c1:'happy ↔ sad · hot ↔ cold',c2:'old ↔ young · tall ↔ short',ar:'أضداد'},
    ],
    examples:[
      {s:'Is Mr. Bates cold? — Yes, Mr. Bates is cold.',tr:'هل السيّد بيتس بردان؟ — نعم.',ar:'سؤال بالصفة',ok:true},
      {s:'This homework is very easy.',tr:'هذا الواجب سهل جداً.',ar:'very + صفة',ok:true},
      {s:'She is a happy.',wrong:'a happy',right:'happy',tr:'لا نضع a قبل الصفة وحدها.',ok:false},
    ]
  },
  {
    title:'Irregular plurals (man → men)', ar:'الجمع الشاذّ: man → men · child → children',
    rule:'أغلب الأسماء نجمعها بـ s، لكن بعضها شاذّ: man → men · woman → women · child → children · person → people. والأسماء المنتهية بـ x أو s نضيف لها es: box → boxes. والمنتهية بـ y بعد حرف ساكن: family → families.',
    parts:[
      {t:'شاذّ',d:'one man → two men · one person → two people'},
      {t:'+ es',d:'one box → three boxes · class → classes'},
      {t:'y → ies',d:'one family → two families'},
    ],
    check:{q:'I have two _______.',o:['children','child','man','sister'],a:0,en:'two + plural → children',ar:'two + جمع → children'},
    formula:[{t:'man → men',c:'v'},{t:'·',c:'p'},{t:'child → children',c:'k'},{t:'·',c:'p'},{t:'box → boxes',c:'s'}],
    compare:[
      {c1:'one woman',c2:'two women',ar:'مفرد ↔ جمع'},
      {c1:'one person',c2:'five people',ar:'مفرد ↔ جمع'},
    ],
    examples:[
      {s:'Those men are my brothers.',tr:'أولئك الرجال إخوتي.',ar:'men',ok:true},
      {s:'They have three children.',tr:'لديهم ثلاثة أطفال.',ar:'children',ok:true},
      {s:'Two mans are outside.',wrong:'mans',right:'men',tr:'جمع man هو men.',ok:false},
    ]
  },
  {
    title:"and · or · Let's", ar:'and (و) · or (أو/أم) · Let\'s (هيّا)',
    rule:'and تجمع شيئين: Louise and Charles are happy. و or للاختيار في السؤال: Is your family big or small? و Let\'s + فعل للاقتراح: Let\'s go to the lab.',
    parts:[
      {t:'and = و',d:'Frank and Joe are teachers.'},
      {t:'or = أم (اختيار)',d:'Is the classroom hot or cold?'},
      {t:"Let's + فعل مجرّد",d:"Let's go to the lab now."},
    ],
    check:{q:"Let's _______ to the classroom now.",o:['go','going','to go','gone'],a:0,en:"Let's + base verb",ar:'Let\'s + فعل مجرّد → go'},
    formula:[{t:'A',c:'s'},{t:'and / or',c:'v'},{t:'B',c:'s'},{t:'·',c:'p'},{t:"Let's + فعل",c:'k'}],
    compare:[
      {c1:'Tom is a cook, and Mary is a mechanic.',c2:'Is Mary young or old?',ar:'and ↔ or'},
      {c1:"Let's go.",c2:"Let's to go. ✗",ar:'بدون to'},
    ],
    examples:[
      {s:'Frank is a teacher. Joe is a teacher, too. → Joe and Frank are teachers.',tr:'فرانك وجو معلّمان.',ar:'and',ok:true},
      {s:'Is your father sick or well?',tr:'هل والدك مريض أم بخير؟',ar:'or',ok:true},
      {s:"Let's going to lab now.",wrong:"Let's going",right:"Let's go",tr:'بعد Let\'s فعل مجرّد.',ok:false},
    ]
  }
],
l2:[
  {
    title:'Where …? (location)', ar:'السؤال عن المكان: Where is …?',
    rule:'نسأل عن المكان بـ Where is (Where\'s) للمفرد و Where are للجمع. ونجيب بحرف مكان: at the mess hall · in the library · on the base · outside / inside.',
    parts:[
      {t:"Where's + مفرد?",d:"Where's Joe? — He's at the mess hall."},
      {t:'Where are + جمع?',d:'Where are Tom and Mary? — They\'re at the snack bar.'},
      {t:'at / in / on',d:'at the bus stop · in the classroom · on the base'},
    ],
    check:{q:'_______ Tom and Mary?',o:['Where are','Where is',"Where's",'Whose'],a:0,en:'two people → Where are',ar:'شخصان → Where are'},
    formula:[{t:'Where',c:'v'},{t:'+',c:'p'},{t:'is / are',c:'s'},{t:'+',c:'p'},{t:'الشخص / الشيء ?',c:'k'}],
    compare:[
      {c1:'Where is the pen?',c2:"It's on the table.",ar:'السؤال ↔ الجواب'},
      {c1:'at the bus stop',c2:'in the library',ar:'at ↔ in'},
    ],
    examples:[
      {s:"Excuse me, please. Where's the hospital?",tr:'لو سمحت، أين المستشفى؟',ar:'Where\'s',ok:true},
      {s:'The students are at the bus stop.',tr:'الطلاب عند موقف الحافلة.',ar:'at',ok:true},
      {s:'Where is Tom and Mary?',wrong:'Where is (لاثنين)',right:'Where are',tr:'مع شخصين نستخدم are.',ok:false},
    ]
  },
  {
    title:'Whose …? · our / your / their', ar:'لمن …؟ (Whose) · ملكنا our · ملككم your · ملكهم their',
    rule:'نسأل عن الملكية بـ Whose + اسم: Whose book is that? ونجيب: It\'s my book · It belongs to the teacher · That\'s Mary\'s pen. والضمائر: my · your · his · her · our · their.',
    parts:[
      {t:'Whose + اسم + is this/that?',d:'Whose classroom is this? — It\'s our classroom.'},
      {t:'belong to = يخصّ',d:'This book belongs to me. = This is my book.'},
      {t:'our / their',d:'This is our flag. · That is their office.'},
    ],
    check:{q:'This book belongs to me.',o:['This is my book.','This is our book.','This is your book.','This is his book.'],a:0,en:'me → my',ar:'لي → my book'},
    formula:[{t:'Whose',c:'v'},{t:'+',c:'p'},{t:'اسم',c:'k'},{t:'+',c:'p'},{t:'is this / that ?',c:'s'}],
    compare:[
      {c1:'Whose pen is that? (لمن)',c2:"Where's the pen? (أين)",ar:'Whose ↔ Where'},
      {c1:"It's our classroom.",c2:"It's their classroom.",ar:'our ↔ their'},
    ],
    examples:[
      {s:"Whose books are these? — They are my books.",tr:'لمن هذه الكتب؟ — إنها كتبي.',ar:'Whose',ok:true},
      {s:"Whose pencil is this? — It belongs to the teacher.",tr:'لمن هذا القلم؟ — يخصّ المعلّم.',ar:'belongs to',ok:true},
      {s:"Whose book is that? — That's me book.",wrong:'me book',right:'my book',tr:'للملكية نقول my.',ok:false},
    ]
  },
  {
    title:'Numbers 1,000 and above', ar:'الأرقام بالآلاف (1,000 · 413,000 · 2,276)',
    rule:'نقرأ الآلاف: الرقم + thousand ثم الباقي: 2,276 = two thousand, two hundred and seventy-six. و 413,000 = four hundred and thirteen thousand. thousand لا تُجمع بعد رقم (two thousand وليس two thousands).',
    parts:[
      {t:'1,000 = one thousand',d:'10,000 = ten thousand · 100,000 = one hundred thousand'},
      {t:'رقم + thousand + الباقي',d:'2,276 = two thousand, two hundred and seventy-six'},
      {t:'… thousand',d:'470,000 = four hundred and seventy thousand'},
    ],
    check:{q:'four hundred and thirteen thousand',o:['413,000','430,000','431,000','423,000'],a:0,en:'413 thousand',ar:'413 ألف → 413,000'},
    formula:[{t:'رقم',c:'s'},{t:'+',c:'p'},{t:'thousand',c:'v'},{t:'+',c:'p'},{t:'hundred(s) and …',c:'k'}],
    compare:[
      {c1:'470,000 = four hundred and seventy thousand',c2:'407,000 = four hundred and seven thousand',ar:'انتبه للترتيب'},
      {c1:'two thousand ✓',c2:'two thousands ✗',ar:'بدون s'},
    ],
    examples:[
      {s:'These are our 2,276 vocabulary words.',tr:'هذه كلماتنا الـ2,276.',ar:'two thousand, two hundred and seventy-six',ok:true},
      {s:'four hundred and seventy thousand = 470,000',tr:'أربعمئة وسبعون ألفاً.',ar:'470,000',ok:true},
      {s:'three thousands students',wrong:'thousands',right:'three thousand students',tr:'بعد الرقم لا نجمع thousand.',ok:false},
    ]
  }
],
l3:[
  {
    title:'a / an', ar:'أداة النكرة: a قبل الساكن · an قبل حرف العلّة',
    rule:'نستخدم an قبل الكلمة التي تبدأ بصوت حرف علّة (a · e · i · o · u): an apple · an egg · an orange · an ID card. ونستخدم a قبل الصوت الساكن: a pear · a dollar · a woman.',
    parts:[
      {t:'an + صوت علّة',d:'an apple · an egg · an umbrella · an office'},
      {t:'a + صوت ساكن',d:'a box · a cherry · a question · a fish'},
      {t:'العبرة بالصوت',d:'an ID card (ينطق آي)'},
    ],
    check:{q:'_______ orange',o:['an','a','the','two'],a:0,en:'vowel sound → an',ar:'يبدأ بحرف علّة → an'},
    formula:[{t:'an',c:'v'},{t:'+',c:'p'},{t:'a e i o u',c:'k'},{t:'·',c:'p'},{t:'a + غيرها',c:'s'}],
    compare:[
      {c1:'an apple',c2:'a pear',ar:'an ↔ a'},
      {c1:'an example',c2:'a word',ar:'an ↔ a'},
    ],
    examples:[
      {s:"I'm eating an apple.",tr:'آكل تفّاحة.',ar:'an apple',ok:true},
      {s:'That is a snack bar.',tr:'ذلك مقصف.',ar:'a snack bar',ok:true},
      {s:'He has a egg.',wrong:'a egg',right:'an egg',tr:'egg يبدأ بحرف علّة → an.',ok:false},
    ]
  },
  {
    title:"Present progressive (I'm eating)", ar:'المضارع المستمر: am / is / are + ‑ing',
    rule:'نستخدمه لما يحدث الآن: الفاعل + am/is/are + فعل‑ing. I\'m eating breakfast now. · They\'re studying. والنفي بـ not: I\'m not eating.',
    parts:[
      {t:'I am + ‑ing',d:"I'm eating lunch."},
      {t:'He / She / It is + ‑ing',d:"Sgt Jones is drinking coffee."},
      {t:'We / You / They are + ‑ing',d:"They're talking."},
    ],
    check:{q:'What are they _______?',o:['eating','eat','eats','do eat'],a:0,en:'are + -ing',ar:'are + فعل‑ing → eating'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'am / is / are',c:'v'},{t:'+',c:'p'},{t:'verb‑ing',c:'k'}],
    compare:[
      {c1:"I'm eating lunch.",c2:"I'm not eating lunch.",ar:'إثبات ↔ نفي'},
      {c1:'He is opening the book.',c2:'They are sitting down.',ar:'is ↔ are'},
    ],
    examples:[
      {s:"Sgt Jones and Sgt Peterson are eating breakfast.",tr:'الرقيبان جونز وبيترسون يتناولان الفطور.',ar:'are eating',ok:true},
      {s:'Our teacher is writing words on the board.',tr:'معلّمنا يكتب كلمات على السبّورة.',ar:'is writing',ok:true},
      {s:'She eating lunch now.',wrong:'She eating',right:'She is eating',tr:'لا بدّ من is قبل ‑ing.',ok:false},
    ]
  },
  {
    title:'Yes/no questions: Are you studying?', ar:'السؤال بنعم/لا في المضارع المستمر',
    rule:'نقدّم am/is/are على الفاعل: Are you studying? · Is Jane eating lunch? والإجابة: Yes, she is (eating lunch). · No, they aren\'t / No, they\'re not.',
    parts:[
      {t:'Is / Are + فاعل + ‑ing?',d:'Is Joe eating lunch?'},
      {t:'Yes, + ضمير + is/are',d:'Yes, he is. · Yes, they are.'},
      {t:'No, + ضمير + isn\'t/aren\'t',d:"No, he isn't. · No, they're not."},
    ],
    check:{q:"It's 12:00. Is Joe eating lunch?",o:['Yes, he is.',"Yes, he isn't.","No, they aren't.",'Yes, they are.'],a:0,en:'Joe → he is',ar:'جو → Yes, he is'},
    formula:[{t:'Is / Are',c:'v'},{t:'+',c:'p'},{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'verb‑ing …?',c:'k'}],
    compare:[
      {c1:'Are you studying?',c2:"Not really. I'm reading.",ar:'سؤال ↔ جواب'},
      {c1:'Yes, I am.',c2:"No, I'm not.",ar:'نعم ↔ لا'},
    ],
    examples:[
      {s:'Hey, are you studying? — Not really.',tr:'هل تذاكر؟ — ليس تماماً.',ar:'Are you …ing?',ok:true},
      {s:"Are they eating lunch? — No, they aren't.",tr:'هل يتناولون الغداء؟ — لا.',ar:"No, they aren't",ok:true},
      {s:'Is she eat lunch?',wrong:'Is she eat',right:'Is she eating',tr:'مع is نضيف ‑ing.',ok:false},
    ]
  }
],
l4:[
  {
    title:'Who …? (people)', ar:'السؤال عن الأشخاص بـ Who',
    rule:'Who = من (للأشخاص). Who is your teacher? · Who\'s that man? — He\'s my father. ومع المستمر: Who is reading a book? — Sue is. (Who\'s = Who is، وليست Whose).',
    parts:[
      {t:'Who is + شخص?',d:"Who's Sue Jones? — I am Sue Jones."},
      {t:'Who is + ‑ing?',d:'Who is standing at the board? — Two students are.'},
      {t:"Who's ≠ Whose",d:"Who's tired? (من) · Whose pen? (لمن)"},
    ],
    check:{q:'Who is tired? (short form)',o:["Who's tired?","Whose tired?","Who his tired?","Whose's tired?"],a:0,en:"Who is = Who's",ar:'Who is = Who\'s'},
    formula:[{t:'Who',c:'v'},{t:'+',c:'p'},{t:'is',c:'s'},{t:'+',c:'p'},{t:'… ?',c:'k'}],
    compare:[
      {c1:"Who's that man? — He's my father.",c2:"Whose book is that? — It's mine.",ar:'Who ↔ Whose'},
      {c1:'Who is the pilot?',c2:'Mr. Glenn is the pilot.',ar:'سؤال ↔ جواب'},
    ],
    examples:[
      {s:"Who's that man? — He's my father.",tr:'من ذلك الرجل؟ — إنه أبي.',ar:'Who',ok:true},
      {s:'Who is studying in the classroom?',tr:'من يذاكر في الفصل؟',ar:'Who + ‑ing',ok:true},
      {s:"Whose that man?",wrong:'Whose',right:"Who's",tr:'للسؤال عن الشخص نقول Who\'s.',ok:false},
    ]
  },
  {
    title:'What / Where + ‑ing', ar:'What are you doing? · Where are you going?',
    rule:'نسأل عن الفعل الآن بـ What + am/is/are + فاعل + doing? ونسأل عن المكان بـ Where + am/is/are + فاعل + going?',
    parts:[
      {t:'What … doing?',d:"What are you doing? — I'm counting my money."},
      {t:'Where … going?',d:"Where are you going? — I'm going to the library."},
      {t:'What … eating?',d:"What are you eating? — An orange."},
    ],
    check:{q:'Where is he _______?',o:['going','go','goes','time for go'],a:0,en:'is + -ing',ar:'is + ‑ing → going'},
    formula:[{t:'What / Where',c:'v'},{t:'+',c:'p'},{t:'am / is / are',c:'s'},{t:'+',c:'p'},{t:'Subject + ‑ing ?',c:'k'}],
    compare:[
      {c1:'What are they doing?',c2:"They're talking.",ar:'What ↔ فعل'},
      {c1:'Where is Jennifer going?',c2:"She's going to a movie.",ar:'Where ↔ مكان'},
    ],
    examples:[
      {s:"What are you doing? — I'm counting my money.",tr:'ماذا تفعل؟ — أعدّ نقودي.',ar:'What … doing',ok:true},
      {s:"Where is Sue studying? — In her room.",tr:'أين تذاكر سو؟ — في غرفتها.',ar:'Where',ok:true},
      {s:'Where Jennifer is going?',wrong:'Where Jennifer is',right:'Where is Jennifer',tr:'في السؤال نقدّم is على الفاعل.',ok:false},
    ]
  },
  {
    title:"Money · It's time for … · Let's", ar:'الأسعار والنقود · حان وقت … · هيّا',
    rule:'نقرأ السعر: $4.87 = four dollars and eighty-seven cents. ونقول It\'s time for + اسم (It\'s time for lunch). ونقترح بـ Let\'s + فعل. ونردّ على الشكر بـ You\'re welcome. ونوافق بـ Me, too.',
    parts:[
      {t:'$ + cents',d:'$9.78 = nine dollars and seventy-eight cents'},
      {t:"It's time for + اسم",d:"It's 10:35. It's time for lab."},
      {t:"Thank you. → You're welcome.",d:"I'm tired. → Me, too. Let's go to bed."},
    ],
    check:{q:"Let's go. _______ class.",o:["It's time for","It's time to","It's time in","It's time on"],a:0,en:'time for + noun',ar:'time for + اسم'},
    formula:[{t:"It's time",c:'v'},{t:'+',c:'p'},{t:'for',c:'s'},{t:'+',c:'p'},{t:'lunch / class / lab',c:'k'}],
    compare:[
      {c1:'$4.87',c2:'four dollars and eighty-seven cents',ar:'الرقم ↔ القراءة'},
      {c1:'Thank you.',c2:"You're welcome.",ar:'الشكر ↔ الردّ'},
    ],
    examples:[
      {s:"It's time for lunch. Let's go to the mess hall.",tr:'حان وقت الغداء، هيّا إلى مطعم الجنود.',ar:"It's time for",ok:true},
      {s:"This book is $15.95. — Let's buy it for Dad.",tr:'هذا الكتاب بـ15.95 دولاراً. — لنشتره لأبي.',ar:"Let's",ok:true},
      {s:'Mary: Thank you. Jane: Me, too.',wrong:'Me, too',right:"You're welcome",tr:'الردّ على الشكر You\'re welcome.',ok:false},
    ]
  }
]
};

// ═══════════════════════════════════════
// WO — رتّب الجملة (word order)
// ═══════════════════════════════════════
const WO={
l1:[
  {words:['My','family','is','big'],ans:'My family is big.',tr:'عائلتي كبيرة.',ar:'صفة'},
  {words:['Dad','this','is','my','friend','Zack'],ans:'Dad, this is my friend, Zack.',tr:'أبي، هذا صديقي زاك.',ar:'التعريف'},
  {words:['Is','he','young'],ans:'Is he young?',tr:'هل هو صغير السنّ؟',ar:'سؤال بالصفة'},
  {words:['She','is','not','sad'],ans:'She is not sad.',tr:'هي ليست حزينة.',ar:'نفي'},
  {words:["Let's",'go','to','the','lab'],ans:"Let's go to the lab.",tr:'هيّا إلى المختبر.',ar:"Let's"},
  {words:['Is','your','family','big','or','small'],ans:'Is your family big or small?',tr:'هل عائلتك كبيرة أم صغيرة؟',ar:'or'},
  {words:['Louise','and','Charles','are','happy'],ans:'Louise and Charles are happy.',tr:'لويز وتشارلز سعيدان.',ar:'and'},
],
l2:[
  {words:['Where','is','the','hospital'],ans:'Where is the hospital?',tr:'أين المستشفى؟',ar:'Where'},
  {words:['He','is','at','the','mess','hall'],ans:'He is at the mess hall.',tr:'هو في مطعم الجنود.',ar:'at'},
  {words:['Whose','classroom','is','this'],ans:'Whose classroom is this?',tr:'لمن هذا الفصل؟',ar:'Whose'},
  {words:['It','is','our','classroom'],ans:'It is our classroom.',tr:'إنه فصلنا.',ar:'our'},
  {words:['This','book','belongs','to','me'],ans:'This book belongs to me.',tr:'هذا الكتاب يخصّني.',ar:'belong to'},
  {words:['Excuse','me','please'],ans:'Excuse me, please.',tr:'لو سمحت.',ar:'أدب'},
  {words:['The','students','are','at','the','bus','stop'],ans:'The students are at the bus stop.',tr:'الطلاب عند موقف الحافلة.',ar:'المكان'},
],
l3:[
  {words:['Are','you','studying'],ans:'Are you studying?',tr:'هل تذاكر؟',ar:'سؤال مستمر'},
  {words:['I','am','eating','lunch'],ans:'I am eating lunch.',tr:'أتناول الغداء.',ar:'am + ing'},
  {words:['I','am','not','eating','lunch'],ans:'I am not eating lunch.',tr:'لا أتناول الغداء.',ar:'نفي'},
  {words:['Is','Jane','eating','lunch'],ans:'Is Jane eating lunch?',tr:'هل جين تتناول الغداء؟',ar:'Is … ing'},
  {words:['Yes','she','is'],ans:'Yes, she is.',tr:'نعم.',ar:'إجابة قصيرة'},
  {words:['I','am','going','to','the','commissary'],ans:'I am going to the commissary.',tr:'أنا ذاهب إلى بقالة القاعدة.',ar:'going to'},
  {words:['He','is','eating','an','apple'],ans:'He is eating an apple.',tr:'يأكل تفّاحة.',ar:'an'},
],
l4:[
  {words:['Who','is','your','teacher'],ans:'Who is your teacher?',tr:'من معلّمك؟',ar:'Who'},
  {words:['What','are','you','doing'],ans:'What are you doing?',tr:'ماذا تفعل؟',ar:'What … doing'},
  {words:['Where','is','that','student','going'],ans:'Where is that student going?',tr:'إلى أين يذهب ذلك الطالب؟',ar:'Where … going'},
  {words:["It's",'time','for','lunch'],ans:"It's time for lunch.",tr:'حان وقت الغداء.',ar:"It's time for"},
  {words:["Let's",'buy','it','for','Dad'],ans:"Let's buy it for Dad.",tr:'لنشتره لأبي.',ar:"Let's"},
  {words:["Who's",'reading','a','book'],ans:"Who's reading a book?",tr:'من يقرأ كتاباً؟',ar:"Who's + ing"},
  {words:['Your','answer','is','correct'],ans:'Your answer is correct.',tr:'إجابتك صحيحة.',ar:'correct'},
]
};

// ═══════════════════════════════════════
// EE — «تقييم» (من التقييم الرسمي EE + Performance Check + الواجبات)
// ═══════════════════════════════════════
const EE={
l1:[
  // EE · Select the best answer
  {q:"She's a young _______.",o:["man","boy","woman","Mr."],a:2,en:"she → woman",ar:'she → woman',tr:'هي امرأة شابّة.'},
  {q:"I have two _______.",o:["child","man","sister","children"],a:3,en:"two + plural → children",ar:'two + جمع → children',tr:'لديّ طفلان.'},
  {q:"Tom is my _______.",o:["friend","friends","brothers","fathers"],a:0,en:"one person → friend",ar:'شخص واحد → friend',tr:'توم صديقي.'},
  {q:"These are our six hundred and fifty-eight students.",o:["566","658","586","685"],a:1,en:"six hundred fifty-eight = 658",ar:'ستّمئة وثمانية وخمسون',tr:'هؤلاء طلابنا الـ658.'},
  {q:"Frank is a teacher. Joe is a teacher, too.",o:["Frank and Joe are not teachers.","Frank or Joe are not teachers.","Joe and Frank are teachers.","Joe or Frank are teachers."],a:2,en:"both → and",ar:'الاثنان → and',tr:'فرانك وجو معلّمان.'},
  {q:"Is the classroom hot _______ cold?",o:["and","or","very","too"],a:1,en:"choice → or",ar:'اختيار → or',tr:'هل الفصل حارّ أم بارد؟'},
  {q:"Let's _______ to lab now.",o:["going","to go","be go","go"],a:3,en:"Let's + base verb",ar:'Let\'s + فعل مجرّد',tr:'هيّا إلى المختبر الآن.'},
  {q:"Tom is a cook, _______ Mary is a mechanic.",o:["or","and","to","too"],a:1,en:"add → and",ar:'إضافة → and',tr:'توم طبّاخ، وماري ميكانيكية.'},
  {q:"She is not a boy. She's a _______.",o:["brother","girl","father","children"],a:1,en:"not boy → girl",ar:'ليست ولداً → girl',tr:'ليست ولداً، إنها بنت.'},
  {q:"Is he happy?",o:["Yes, he's angry.","No, he is.","Yes, he is.","No, he's happy."],a:2,en:"Yes, he is.",ar:'Yes, he is',tr:'هل هو سعيد؟ — نعم.'},
  {q:"Is your _______ sick or well? (= father)",o:["mother","dad","brother","sister"],a:1,en:"father = dad",ar:'father = dad',tr:'هل أبوك مريض أم بخير؟'},
  {q:"Which question is correct?",o:["What time it is?","Is what time?","What time is it?","Is it what time?"],a:2,en:"What time is it?",ar:'الترتيب الصحيح → What time is it?',tr:'كم الساعة؟'},
  // Homework · Select the best answer
  {q:"X and G are _______.",o:["numbers","letters","alphabet","words"],a:1,en:"X, G → letters",ar:'حروف → letters',tr:'X و G حروف.'},
  {q:"seven hundred and sixty-seven",o:["676","766","767","677"],a:2,en:"767",ar:'767',tr:'سبعمئة وسبعة وستّون.'},
  {q:"Tom: Thank you. Bill: _______",o:["Me, too.","You're welcome.","Fine, thanks.","Excuse me, please."],a:1,en:"thanks → You're welcome",ar:'الردّ على الشكر',tr:'توم: شكراً. بيل: عفواً.'},
  {q:"That girl is my _______.",o:["sister","dad","brother","father"],a:0,en:"girl → sister",ar:'بنت → sister',tr:'تلك البنت أختي.'},
  {q:"Homework _______ good.",o:["is","are","am","be"],a:0,en:"homework → is",ar:'homework مفرد → is',tr:'الواجب جيّد.'},
  {q:"This homework is fun _______ easy.",o:["no","very","and","too"],a:2,en:"fun + easy → and",ar:'تجمع صفتين → and',tr:'هذا الواجب ممتع وسهل.'},
  {q:"He is not old. He is very _______.",o:["cold","thirsty","well","young"],a:3,en:"not old → young",ar:'عكس old → young',tr:'ليس كبيراً، هو صغير جداً.'},
  {q:"_______ open the door.",o:["Is","What","The","Let's"],a:3,en:"suggestion → Let's",ar:'اقتراح → Let\'s',tr:'هيّا نفتح الباب.'},
  {q:"Ted: I'm tired. Bob: _______",o:["Me, too.","You're welcome.","Glad to meet you.","Thank you."],a:0,en:"same feeling → Me, too",ar:'وأنا كذلك → Me, too',tr:'تِد: أنا متعب. بوب: وأنا كذلك.'},
],
l2:[
  // EE · Select the best answer
  {q:"My office is in that _______.",o:["building","bus stop","bed","schedule"],a:0,en:"office → building",ar:'مكتب في مبنى',tr:'مكتبي في ذلك المبنى.'},
  {q:"My room is not big. It is very _______.",o:["thousand","small","outside","happy"],a:1,en:"not big → small",ar:'عكس big → small',tr:'غرفتي ليست كبيرة، إنها صغيرة جداً.'},
  {q:"This book belongs to me.",o:["This is my book.","This is our book.","This is your book.","This is his book."],a:0,en:"me → my",ar:'لي → my',tr:'هذا كتابي.'},
  {q:"four hundred and thirteen thousand",o:["430,000","431,000","423,000","413,000"],a:3,en:"413,000",ar:'413 ألفاً',tr:'أربعمئة وثلاثة عشر ألفاً.'},
  {q:"Whose pencil is this?",o:["Thank you. It is.","It's very cold.","It belongs to the teacher.","Yes, the girl is sick."],a:2,en:"whose → belongs to",ar:'لمن؟ → يخصّ المعلّم',tr:'لمن هذا القلم؟ — يخصّ المعلّم.'},
  {q:"Mr. Jones is _______.",o:["library","outside","they","women"],a:1,en:"place → outside",ar:'مكان → outside',tr:'السيّد جونز في الخارج.'},
  {q:"The students are _______ the bus stop.",o:["on","to","at","in"],a:2,en:"at the bus stop",ar:'عند الموقف → at',tr:'الطلاب عند موقف الحافلة.'},
  {q:"Whose books are these?",o:["They my books.","They are me book.","They is me books.","They are my books."],a:3,en:"They are my books.",ar:'They are my books',tr:'لمن هذه الكتب؟ — إنها كتبي.'},
  {q:"These are our 2,276 vocabulary words.",o:["two thousand, two hundred and sixty-seven","two thousand, two hundred and seventy-seven","two thousand, two hundred and sixty-six","two thousand, two hundred and seventy-six"],a:3,en:"2,276",ar:'ألفان ومئتان وستّة وسبعون',tr:'هذه كلماتنا الـ2,276.'},
  {q:"Where is your teacher?",o:["It is big.","She is outside.","He is our teacher.","I am in the snack bar."],a:1,en:"where → place",ar:'أين؟ → مكان',tr:'أين معلّمتك؟ — في الخارج.'},
  {q:"The students are _______ their classrooms.",o:["for","to","on","in"],a:3,en:"in the classroom",ar:'داخل الفصل → in',tr:'الطلاب في فصولهم.'},
  {q:"_______ Tom and Mary?",o:["Whose","Where's","Where are","Where is"],a:2,en:"two people → Where are",ar:'شخصان → Where are',tr:'أين توم وماري؟'},
  // Performance Check (ص 54–55)
  {q:"four hundred and seventy thousand",o:["417,000","400,070","470,000","407,000"],a:2,en:"470,000",ar:'470 ألفاً',tr:'أربعمئة وسبعون ألفاً.'},
  {q:"Whose book is that?",o:["That's me book.","That's a book.","That's the book.","That's my book."],a:3,en:"my book",ar:'ملكية → my book',tr:'لمن ذلك الكتاب؟ — إنه كتابي.'},
  {q:"The students are _______.",o:["in the homework","in the notebook","in the wall","in the classroom"],a:3,en:"in the classroom",ar:'في الفصل',tr:'الطلاب في الفصل.'},
  {q:"The hospital is _______.",o:["on the car","on the base","on the weekend","on the classroom"],a:1,en:"on the base",ar:'في القاعدة → on the base',tr:'المستشفى في القاعدة.'},
  {q:"Where is Tom? He's _______.",o:["outside","a pilot","hospital","my brother"],a:0,en:"where → outside",ar:'أين؟ → outside',tr:'أين توم؟ في الخارج.'},
  {q:"Let's go to the mess hall. (= ?)",o:["library","lab","commissary","dining hall"],a:3,en:"mess hall = dining hall",ar:'mess hall = dining hall',tr:'هيّا إلى قاعة الطعام.'},
  {q:"Is your room big? No, it's very _______.",o:["tall","small","sick","outside"],a:1,en:"not big → small",ar:'عكس big',tr:'هل غرفتك كبيرة؟ لا، صغيرة جداً.'},
  {q:"Where is Jane's bed?",o:["in the dining hall","in the snack bar","in the barracks","in the mess hall"],a:2,en:"bed → barracks",ar:'السرير في الثكنة',tr:'أين سرير جين؟ في الثكنة.'},
  {q:"Let's ask a _______.",o:["building","question","commissary","schedule"],a:1,en:"ask a question",ar:'نسأل سؤالاً',tr:'لنسأل سؤالاً.'},
  {q:"You go to the _______ for medicine.",o:["barracks","mess hall","chow hall","dispensary"],a:3,en:"medicine → dispensary",ar:'الدواء → العيادة',tr:'تذهب إلى العيادة للدواء.'},
  // Homework · Where / What / Whose
  {q:"_______ is the dispensary? — It's on the base.",o:["Where","What","Whose"],a:0,en:"place → Where",ar:'مكان → Where',tr:'أين العيادة؟ في القاعدة.'},
  {q:"_______ is in the library? — Books are in the library.",o:["What","Where","Whose"],a:0,en:"thing → What",ar:'شيء → What',tr:'ماذا يوجد في المكتبة؟ كتب.'},
  {q:"_______ books are those? — Those are my books.",o:["Whose","Where","What"],a:0,en:"owner → Whose",ar:'لمن → Whose',tr:'لمن تلك الكتب؟ إنها كتبي.'},
  {q:"_______ pen is that? — That's Mary's pen.",o:["Whose","What","Where"],a:0,en:"owner → Whose",ar:'لمن → Whose',tr:'لمن ذلك القلم؟ قلم ماري.'},
  {q:"_______ are Linda and Tom? — They are at the snack bar.",o:["Where","What","Whose"],a:0,en:"place → Where",ar:'مكان → Where',tr:'أين ليندا وتوم؟ في المقصف.'},
  {q:"_______ is that? — It's a schedule.",o:["What","Where","Whose"],a:0,en:"thing → What",ar:'شيء → What',tr:'ما ذلك؟ إنه جدول.'},
],
l3:[
  // EE · Select the best answer
  {q:"It's break time. _______ go to the snack bar.",o:["Me, too.","Let's","Who","Whose"],a:1,en:"suggestion → Let's",ar:'اقتراح → Let\'s',tr:'إنه وقت الاستراحة، هيّا إلى المقصف.'},
  {q:"_______ is he eating dinner?",o:["What","Who","Where","Where's"],a:2,en:"place → Where",ar:'مكان → Where',tr:'أين يتناول العشاء؟'},
  {q:"A: Is that the right answer? B: Yes, it's _______.",o:["correct","wrong","different","incorrect"],a:0,en:"right = correct",ar:'صحيح → correct',tr:'هل تلك الإجابة الصحيحة؟ نعم، صحيحة.'},
  {q:"_______ is Miss Adams going?",o:["Where","What","Who","Who's"],a:0,en:"going → Where",ar:'ذاهبة إلى أين → Where',tr:'إلى أين تذهب الآنسة آدمز؟'},
  {q:"_______ is studying in the classroom?",o:["What","Where","Who","When"],a:2,en:"person → Who",ar:'شخص → Who',tr:'من يذاكر في الفصل؟'},
  {q:"_______ pencil is that?",o:["Where","When","Whose"],a:2,en:"owner → Whose",ar:'لمن → Whose',tr:'لمن ذلك القلم؟'},
  // a / an (ص 61)
  {q:"_______ box",o:["a","an"],a:0,en:"consonant → a",ar:'ساكن → a',tr:'صندوق'},
  {q:"_______ alphabet",o:["an","a"],a:0,en:"vowel → an",ar:'علّة → an',tr:'أبجدية'},
  {q:"_______ half dollar",o:["a","an"],a:0,en:"h (consonant) → a",ar:'h ساكن → a',tr:'نصف دولار'},
  {q:"_______ example",o:["an","a"],a:0,en:"vowel → an",ar:'علّة → an',tr:'مثال'},
  {q:"_______ egg",o:["an","a"],a:0,en:"vowel → an",ar:'علّة → an',tr:'بيضة'},
  {q:"_______ cherry",o:["a","an"],a:0,en:"consonant → a",ar:'ساكن → a',tr:'كرزة'},
  {q:"_______ office",o:["an","a"],a:0,en:"vowel → an",ar:'علّة → an',tr:'مكتب'},
  {q:"_______ question",o:["a","an"],a:0,en:"consonant → a",ar:'ساكن → a',tr:'سؤال'},
  // المضارع المستمر (ص 63–68)
  {q:"Sgt Jones and Sgt Peterson _______ breakfast now.",o:["are eating","is eating","eating","eat now"],a:0,en:"two people → are eating",ar:'شخصان → are + ing',tr:'الرقيبان يتناولان الفطور الآن.'},
  {q:"Sgt Jones is eating. → (question)",o:["Is Sgt Jones eating?","Sgt Jones is eating?","Does Sgt Jones eating?","Eating Sgt Jones is?"],a:0,en:"move is to the front",ar:'نقدّم is',tr:'هل يأكل الرقيب جونز؟'},
  {q:"Are they eating? (yes)",o:["Yes, they are.","Yes, they is.","Yes, they eating.","Yes, are they."],a:0,en:"Yes, they are.",ar:'Yes, they are',tr:'هل يأكلون؟ نعم.'},
  {q:"Is she eating? (no)",o:["No, she isn't.","No, she aren't.","No, she not eating.","No, isn't she."],a:0,en:"No, she isn't.",ar:"No, she isn't",tr:'هل تأكل؟ لا.'},
  {q:"Am I eating? (yes)",o:["Yes, you are.","Yes, I am.","Yes, you is.","Yes, am I."],a:0,en:"I → you are",ar:'تسأل عن نفسك → Yes, you are',tr:'هل آكل؟ نعم، أنت تأكل.'},
  {q:"He is _______ the book.",o:["opening","open","opens","to open"],a:0,en:"is + -ing",ar:'is + ‑ing',tr:'يفتح الكتاب.'},
  {q:"I'm thirsty. I want _______.",o:["water","bread","rice","toast"],a:0,en:"thirsty → water",ar:'عطشان → ماء',tr:'أنا عطشان، أريد ماءً.'},
  {q:"An apple, a banana, and a pear are _______.",o:["fruit","meat","drinks","bread"],a:0,en:"→ fruit",ar:'فواكه',tr:'التفّاح والموز والكمّثرى فواكه.'},
],
l4:[
  // EE · Select the best answer
  {q:"Mrs. Lane is Mr. Lane's _______.",o:["husband","wife","brother","son"],a:1,en:"Mrs. → wife",ar:'السيّدة → زوجته',tr:'السيّدة لين زوجة السيّد لين.'},
  {q:"It's time for lunch. _______ go to the mess hall.",o:["Me, too.","Who","Where","Let's"],a:3,en:"suggestion → Let's",ar:'اقتراح → Let\'s',tr:'حان وقت الغداء، هيّا إلى مطعم الجنود.'},
  {q:"_______ are we eating lunch today?",o:["Where","Who","Yes","What"],a:0,en:"place → Where",ar:'مكان → Where',tr:'أين سنتناول الغداء اليوم؟'},
  {q:"Student: Is my answer correct? Teacher: Yes, your answer is _______.",o:["wrong","same","different","right"],a:3,en:"correct = right",ar:'صحيح → right',tr:'هل إجابتي صحيحة؟ نعم، صحيحة.'},
  {q:"Let's go. _______ class.",o:["It's time to","It's time in","It's time for","It's time on"],a:2,en:"time for + noun",ar:'time for + اسم',tr:'هيّا، حان وقت الدرس.'},
  {q:"Mary: Thank you. Jane: _______",o:["Me, too.","You're welcome.","Fine, thanks.","Excuse me."],a:1,en:"thanks → You're welcome",ar:'الردّ على الشكر',tr:'ماري: شكراً. جين: عفواً.'},
  {q:"_______ is Tommy reading his book?",o:["Where","Who","What","Whose"],a:0,en:"place → Where",ar:'مكان → Where',tr:'أين يقرأ تومي كتابه؟'},
  {q:"It's _______ for lab.",o:["same","check","do","time"],a:3,en:"It's time for",ar:'It\'s time for',tr:'حان وقت المختبر.'},
  {q:"Your answers are right. (= ?)",o:["correct","wrong","different","same"],a:0,en:"right = correct",ar:'right = correct',tr:'إجاباتك صحيحة.'},
  {q:"Steve: I'm sick. Frank: _______ Let's go to the dispensary.",o:["Me, too.","You're welcome.","Nothing much.","Glad to meet you."],a:0,en:"same → Me, too",ar:'وأنا كذلك',tr:'ستيف: أنا مريض. فرانك: وأنا كذلك، هيّا للعيادة.'},
  {q:"Who is tired? (short form)",o:["Whose tired?","Who's tired?","Who his tired?","Whose's tired?"],a:1,en:"Who is = Who's",ar:"Who is = Who's",tr:'من المتعب؟'},
  {q:"314,000 and 340,000 are _______.",o:["money","answer","same","different"],a:3,en:"not the same → different",ar:'مختلفان → different',tr:'314,000 و340,000 مختلفان.'},
  // EE · Write the correct question word
  {q:"Mr. Glenn is the pilot. _______ is the pilot?",o:["Who","Where","What"],a:0,en:"person → Who",ar:'شخص → Who',tr:'من الطيّار؟'},
  {q:"The cook is in the mess hall. _______ is the cook?",o:["Where","Who","What"],a:0,en:"place → Where",ar:'مكان → Where',tr:'أين الطبّاخ؟'},
  {q:"My son is studying in New York. _______ is your son studying?",o:["Where","Who","What"],a:0,en:"place → Where",ar:'مكان → Where',tr:'أين يدرس ابنك؟'},
  {q:"This is a ballpoint pen. _______ is that?",o:["What","Who","Where"],a:0,en:"thing → What",ar:'شيء → What',tr:'ما ذلك؟'},
  {q:"Jim is my mechanic. _______ is your mechanic?",o:["Who","What","Where"],a:0,en:"person → Who",ar:'شخص → Who',tr:'من ميكانيكيّك؟'},
  {q:"Those students are eating rice. _______ are the students eating?",o:["What","Who","Where"],a:0,en:"thing → What",ar:'شيء → What',tr:'ماذا يأكل الطلاب؟'},
  {q:"They are eating lunch. _______ are they doing?",o:["What","Who","Where"],a:0,en:"action → What … doing",ar:'الفعل → What',tr:'ماذا يفعلون؟'},
  // EE · Match the answer
  {q:"I'm very hungry.",o:["Me, too. Let's go to the snack bar.","You're cold? I'll close the window.","No, that's not right.","Okay. Let's buy it for Tim."],a:0,en:"hungry → snack bar",ar:'جائع → المقصف',tr:'أنا جائع جداً. — وأنا كذلك، هيّا للمقصف.'},
  {q:"It's cold in here.",o:["You're cold? I'll close the window.","Me, too. Let's go to bed.","That's right. Let's go outside.","Okay. Let's buy it for Tim."],a:0,en:"cold → close the window",ar:'بارد → أغلق النافذة',tr:'الجوّ بارد هنا. — بردان؟ سأغلق النافذة.'},
  {q:"This CD player is $99.95.",o:["Okay. Let's buy it for Tim.","Me, too. Let's go to bed.","You're cold? I'll close the window.","Me, too. Let's go to the dispensary."],a:0,en:"price → let's buy it",ar:'سعر → لنشتره',tr:'هذا المشغّل بـ99.95. — حسناً، لنشتره لتيم.'},
  // Homework · Select the best answer
  {q:"$4.87",o:["four dollars and seventy-eight cents","four dollars and eighty-seven cents","forty dollars and seventy-six cents","fourteen dollars and sixty-six cents"],a:1,en:"4 dollars 87 cents",ar:'4 دولارات و87 سنتاً',tr:'أربعة دولارات وسبعة وثمانون سنتاً.'},
  {q:"eight hundred and seventy-six thousand",o:["800,760","800,076","876,000","870,600"],a:2,en:"876,000",ar:'876 ألفاً',tr:'ثمانمئة وستّة وسبعون ألفاً.'},
  {q:"Who's that man?",o:["She's my teacher.","He's my father.","They're my brothers.","It's my book."],a:1,en:"man → He's",ar:'رجل → He\'s',tr:'من ذلك الرجل؟ — إنه أبي.'},
  {q:"Are the answers the same?",o:["No, they right.","No, they different.","No, they same.","No, they're different."],a:3,en:"No, they're different.",ar:"No, they're different",tr:'هل الإجابات متشابهة؟ لا، مختلفة.'},
  {q:"nine dollars and seventy-eight cents",o:["$9.78","$9.87","$9.77","$9.88"],a:0,en:"$9.78",ar:'9.78 دولار',tr:'تسعة دولارات وثمانية وسبعون سنتاً.'},
  {q:"He is my _______.",o:["daughter","wife","sister","husband"],a:3,en:"he → husband",ar:'هو → زوجي',tr:'هو زوجي.'},
  {q:"919,000",o:["nineteen thousand and nineteen","nine hundred and ninety thousand","nine hundred and nineteen thousand","nine hundred ninety thousand"],a:2,en:"919 thousand",ar:'919 ألفاً',tr:'تسعمئة وتسعة عشر ألفاً.'},
]
};

// ═══════════════════════════════════════
// REVIEW — الدرس 5 (Review · Select the best answer)
// ═══════════════════════════════════════
const REVIEW=[
  {q:"It's 12:00. Is Joe eating lunch?",o:["Yes, he isn't.","Yes, he is.","No, they aren't.","Yes, they are."],a:1,en:"Yes, he is.",ar:'Yes, he is',tr:'الساعة 12، هل يتناول جو الغداء؟ نعم.'},
  {q:"A: What are they doing? B: They're _______.",o:["study","tired","talking","pilots"],a:2,en:"are + -ing",ar:'are + ‑ing → talking',tr:'ماذا يفعلون؟ يتحدّثون.'},
  {q:"A: Where is Joe going? B: He's going _______.",o:["Mr. Johnson","breakfast","to his classroom","12 o'clock"],a:2,en:"going to + place",ar:'going to + مكان',tr:'إلى أين يذهب جو؟ إلى فصله.'},
  {q:"The students are _______.",o:["at the wall","at the pencil","at the library","at the book"],a:2,en:"at + place",ar:'at + مكان → library',tr:'الطلاب في المكتبة.'},
  {q:"A: What are you eating? B: _______",o:["an orange","orange juice","water","a drink"],a:0,en:"eating → an orange",ar:'تأكل → an orange',tr:'ماذا تأكل؟ برتقالة.'},
  {q:"Tom is _______.",o:["on class","on the base","on the barracks","on the mess hall"],a:1,en:"on the base",ar:'في القاعدة → on the base',tr:'توم في القاعدة.'},
  {q:"A: Whose classroom is this? B: It's _______.",o:["in the building","Mr. Johnson","studying","our classroom"],a:3,en:"owner → our classroom",ar:'ملكية → our classroom',tr:'لمن هذا الفصل؟ إنه فصلنا.'},
  {q:"A: Who's John? B: He's _______.",o:["outside","my brother","your pen","at the library"],a:1,en:"who → person",ar:'من؟ → my brother',tr:'من جون؟ إنه أخي.'},
  {q:"_______ are tired.",o:["Mary","That man","Tom and Bill","Your sister"],a:2,en:"are → plural",ar:'are → جمع',tr:'توم وبيل متعبان.'},
  {q:"A: _______ is Sue studying? B: In her room.",o:["When","Where","Who","What"],a:1,en:"In her room → Where",ar:'مكان → Where',tr:'أين تذاكر سو؟ في غرفتها.'},
  {q:"The clock is _______.",o:["at the wall","to the wall","on the wall","under the wall"],a:2,en:"on the wall",ar:'على الحائط → on',tr:'الساعة على الحائط.'},
  {q:"_______ at the lab?",o:["Who's","What","Whose","Where"],a:0,en:"Who is at the lab?",ar:'من في المختبر؟ → Who\'s',tr:'من في المختبر؟'},
  {q:"A: What are Tom and Steve? B: Tom's a pilot, _______ Steve's a mechanic.",o:["or","and","who","are"],a:1,en:"add → and",ar:'إضافة → and',tr:'توم طيّار، وستيف ميكانيكي.'},
  {q:"It's 7:45. Are your students in your classroom?",o:["Yes, they aren't.","Yes, he is.","No, he isn't.","Yes, they are."],a:3,en:"students → they are",ar:'الطلاب → Yes, they are',tr:'هل طلابك في الفصل؟ نعم.'},
  {q:"I'm sick _______ tired.",o:["an","and","very","too"],a:1,en:"two adjectives → and",ar:'صفتان → and',tr:'أنا مريض ومتعب.'},
  {q:"215,000",o:["two thousand and fifteen","two hundred thousand and fifteen","two hundred and fifteen thousand","two hundred and thousand and fifteen"],a:2,en:"215 thousand",ar:'215 ألفاً',tr:'مئتان وخمسة عشر ألفاً.'},
  {q:"A: Where is Jennifer going? B: _______ to a movie.",o:["She's going","She are going","She go","She's go"],a:0,en:"She is going",ar:'She is + going',tr:'إلى أين تذهب جينيفر؟ إلى فيلم.'},
  {q:"Our teacher is _______ words on the board.",o:["listening","writing","closing","sitting"],a:1,en:"words on the board → writing",ar:'يكتب → writing',tr:'معلّمنا يكتب كلمات على السبّورة.'},
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
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 1 — العائلة',w:[
    {e:'family',a:'عائلة',em:'👨‍👩‍👧‍👦'},{e:'father',a:'أب',em:'👨'},{e:'mother',a:'أمّ',em:'👩'},
    {e:'brother',a:'أخ',em:'🧑'},{e:'sister',a:'أخت',em:'👩'},{e:'daughter',a:'ابنة',em:'👧'},
    {e:'children',a:'أطفال',em:'🧒'},{e:'happy',a:'سعيد',em:'😀'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 2 — القاعدة',w:[
    {e:'building',a:'مبنى',em:'🏢'},{e:'office',a:'مكتب',em:'🗂️'},{e:'hospital',a:'مستشفى',em:'🏥'},
    {e:'library',a:'مكتبة',em:'📚'},{e:'barracks',a:'ثكنة',em:'🛏️'},{e:'schedule',a:'جدول',em:'🗓️'},
    {e:'question',a:'سؤال',em:'❓'},{e:'whose',a:'لمن',em:'🔑'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 3 — الأكل والشرب',w:[
    {e:'breakfast',a:'فطور',em:'🍳'},{e:'lunch',a:'غداء',em:'🥪'},{e:'dinner',a:'عشاء',em:'🍛'},
    {e:'chicken',a:'دجاج',em:'🍗'},{e:'apple',a:'تفّاحة',em:'🍎'},{e:'banana',a:'موزة',em:'🍌'},
    {e:'coffee',a:'قهوة',em:'☕'},{e:'water',a:'ماء',em:'💧'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 4 — الوقت والنقود',w:[
    {e:'homework',a:'واجب',em:'📝'},{e:'correct',a:'صحيح',em:'✅'},{e:'wrong',a:'خطأ',em:'❌'},
    {e:'different',a:'مختلف',em:'🔀'},{e:'same',a:'نفس',em:'🟰'},{e:'million',a:'مليون',em:'💰'},
    {e:'count',a:'يعدّ',em:'🔢'},{e:'nothing',a:'لا شيء',em:'🫙'},
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
