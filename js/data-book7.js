// ═══════════════════════════════════════
// DATA — BOOK 7
// Lesson 1 (Shapes and Lines) — vocab, grammar, word-order, per-lesson quiz.
// Built lesson by lesson; more lessons get appended here later.
// ═══════════════════════════════════════
const BOOK_ID='book7';

const LESSON_META={
  l1:{ico:'🔷',title:'Lesson 1 — Shapes and Lines',sub:'الأشكال والخطوط والمقارنة'}
};
const LESSON_KEYS=Object.keys(LESSON_META);

// ═══════════════════════════════════════
// VOCABULARY
// ═══════════════════════════════════════
const VOCAB={
l1:[
  {e:'shape',a:'شكل',em:'🔷'},
  {e:'line',a:'خط',em:'➖'},
  {e:'circle',a:'دائرة',em:'⭕'},
  {e:'square',a:'مربّع',em:'⬜'},
  {e:'rectangle',a:'مستطيل',em:'🔳'},
  {e:'triangle',a:'مثلّث',em:'🔺'},
  {e:'side',a:'ضِلع / جانب',em:'📐'},
  {e:'edge',a:'حافّة',em:'🔲'},
  {e:'angle',a:'زاوية',em:'📐'},
  {e:'top',a:'الأعلى',em:'🔝'},
  {e:'bottom',a:'الأسفل',em:'🔽'},
  {e:'center',a:'المنتصف',em:'🎯'},
  {e:'description',a:'وصف',em:'📝'},
  {e:'mistake',a:'خطأ',em:'❌'},
  {e:'math / mathematics',a:'الرياضيات',em:'➗'},
  {e:'job',a:'وظيفة / عمل',em:'💼'},
  {e:'draw',a:'يرسم',past:'drew',pa:'رسم',em:'✏️'},
  {e:'describe',a:'يصف',em:'🗣️'},
  {e:'compare',a:'يقارن',em:'⚖️'},
  {e:'round',a:'مستدير',em:'⭕'},
  {e:'curved',a:'منحنٍ',em:'〰️'},
  {e:'straight',a:'مستقيم',em:'📏'},
  {e:'wide',a:'عريض / واسع',em:'↔️'},
  {e:'narrow',a:'ضيّق',em:'▫️'},
  {e:'big',a:'كبير',em:'🔺'},
  {e:'little',a:'صغير',em:'🔹'},
  {e:'large',a:'كبير / ضخم',em:'🟧'},
  {e:'small',a:'صغير',em:'🔸'},
  {e:'strong',a:'قويّ',em:'💪'},
  {e:'weak',a:'ضعيف',em:'🥀'},
  {e:'fast',a:'سريع',em:'⚡'},
  {e:'slow',a:'بطيء',em:'🐢'},
  {e:'alike',a:'متشابهان',em:'👯'},
  {e:'different',a:'مختلف',em:'🔀'},
  {e:'same',a:'نفس / متماثل',em:'🟰'},
  {e:'both',a:'كِلاهما',em:'✌️'},
  {e:'other',a:'الآخر / الباقي',em:'↩️'},
]
};

// ═══════════════════════════════════════
// GRAMMAR
// ═══════════════════════════════════════
const GRAMMAR={
l1:[
  {
    title:'Contrasting — one / the other', ar:'المقابلة بين شيئين مختلفين',
    rule:'نتحدّث عن شيئين. نبدأ بـ one للأول، ونستخدم the other للثاني (الباقي).',
    parts:[
      {t:'one ...',d:'الأول من شيئين. مثال: One boy is sad. = ولد حزين.'},
      {t:'the other ...',d:'الثاني (الباقي) من شيئين. مثال: The other boy is happy. = الولد الآخر سعيد.'},
    ],
    check:{q:'One book is on the table. _______ book is on the floor.',o:['Other','The other','Both','An other'],a:1,en:'the remaining one → the other',ar:'الباقي من اثنين → The other'},
    compare:[
      {c1:'One ship is new.',c2:'The other ship is old.',ar:'الأول new، والباقي the other'},
      {c1:'One answer is wrong.',c2:'The other answer is right.',ar:'واحد wrong، والآخر the other'},
    ],
    examples:[
      {s:'One boy is sad. The other boy is happy.',tr:'ولد حزين، والولد الآخر سعيد.',ar:'one ... the other',ok:true},
      {s:"Sam had two sandwiches. He ate one. He didn't eat the other one.",tr:'سام كان عنده ساندويتشان. أكل واحداً، ولم يأكل الآخر.',ar:'the other one = الباقي',ok:true},
      {s:'I have two books. One is math. Other is English.',wrong:'Other',right:'The other',tr:'الباقي من اثنين لازم معه the → The other.',ok:false},
    ]
  },
  {
    title:'Comparing — both', ar:'المقابلة بين شيئين متشابهين',
    rule:'لما يشترك شيئان في صفة، نستخدم both (كِلاهما) للإشارة إليهما معاً.',
    parts:[
      {t:'both',d:'كِلاهما — للإشارة إلى الاثنين معاً، وتأتي قبل اسم جمع. مثال: Both brothers are cooks. = كلا الأخوين طبّاخان.'},
    ],
    check:{q:'One truck is George’s. The other is Henry’s. _______ trucks are pick-ups.',o:['Both','Other','The other','Each'],a:0,en:'the two together → both',ar:'الاثنان معاً → Both'},
    compare:[
      {c1:'This restaurant is crowded. The other one is crowded, too.',c2:'Both restaurants are crowded.',ar:'الاثنان → both'},
      {c1:'One cake is delicious. The other is delicious, too.',c2:'Both cakes are delicious.',ar:'both + اسم جمع'},
    ],
    examples:[
      {s:'Both brothers are cooks.',tr:'كلا الأخوين طبّاخان.',ar:'both + اسم جمع',ok:true},
      {s:'We visited two cities. We flew to both cities.',tr:'زُرنا مدينتين. سافرنا جوّاً إلى كلتيهما.',ar:'both cities',ok:true},
      {s:'Both boy is tall.',wrong:'boy is',right:'boys are',tr:'both تحتاج اسماً جمعاً وفعلاً جمعاً → boys are.',ok:false},
    ]
  },
  {
    title:'Placing Adjectives before Nouns', ar:'الصفة قبل الاسم',
    rule:'في الإنجليزية تأتي الصفة قبل الاسم الذي تصفه، لا بعده.',
    parts:[
      {t:'adjective + noun',d:'الصفة أولاً ثم الاسم. مثال: a large package = طرد كبير (وليس package large).'},
    ],
    check:{q:'The mailman brought a _______.',o:['package large','large package','package a large','a large'],a:1,en:'adjective before noun',ar:'الصفة قبل الاسم → large package'},
    formula:[{t:'a / the',c:'k'},{t:'+',c:'p'},{t:'adjective',c:'v'},{t:'+',c:'p'},{t:'noun',c:'s'}],
    compare:[
      {c1:'The package is large.',c2:'a large package',ar:'نحوّل الصفة قبل الاسم'},
      {c1:'The taxi is yellow.',c2:'a yellow taxi',ar:'yellow قبل taxi'},
    ],
    examples:[
      {s:'The old man got off the crowded bus.',tr:'الرجل العجوز نزل من الباص المزدحم.',ar:'old+man، crowded+bus',ok:true},
      {s:'Maggie has a fast car.',tr:'ماغي عندها سيارة سريعة.',ar:'fast قبل car',ok:true},
      {s:'Jim has a umbrella large.',wrong:'umbrella large',right:'large umbrella',tr:'الصفة قبل الاسم → large umbrella.',ok:false},
    ]
  }
]
};

// ═══════════════════════════════════════
// WORD ORDER (رتّب الجملة)
// ═══════════════════════════════════════
const WO={
l1:[
  {words:['The','old','man','got','off','the','crowded','bus'],ans:'The old man got off the crowded bus.',tr:'الرجل العجوز نزل من الباص المزدحم.',ar:'الصفة قبل الاسم'},
  {words:['The','young','pilot','drives','a','fast','car'],ans:'The young pilot drives a fast car.',tr:'الطيّار الشاب يقود سيارة سريعة.',ar:'young+pilot، fast+car'},
  {words:['Both','brothers','are','good','cooks'],ans:'Both brothers are good cooks.',tr:'كلا الأخوين طبّاخان ماهران.',ar:'both + اسم جمع'},
  {words:['The','other','answer','is','right'],ans:'The other answer is right.',tr:'الإجابة الأخرى صحيحة.',ar:'the other = الباقي'},
  {words:['A','triangle','has','three','straight','sides'],ans:'A triangle has three straight sides.',tr:'المثلّث له ثلاثة أضلاع مستقيمة.',ar:'straight+sides'},
  {words:['Jim','drew','a','circle','on','the','board'],ans:'Jim drew a circle on the board.',tr:'جيم رسم دائرة على السبّورة.',ar:'drew = ماضي draw'},
  {words:['The','two','belts','are','the','same','color'],ans:'The two belts are the same color.',tr:'الحزامان لهما نفس اللون.',ar:'the same'},
]
};

// ═══════════════════════════════════════
// EE — "اختبر" (lesson quiz, multiple choice)
// ═══════════════════════════════════════
const EE={
l1:[
  {q:"Nancy _______ three small circles with her pencil.",o:["drew","signed","described","answered"],a:0,en:"draw a shape → drew (past)",ar:'يرسم شكلاً → drew (ماضي draw)',tr:'نانسي رسمت ثلاث دوائر صغيرة بقلمها.'},
  {q:"True is the _______ of false.",o:["same","opposite","other","different"],a:1,en:"true/false are opposites",ar:'true وfalse ضدّان → opposite',tr:'كلمة true هي عكس false.'},
  {q:"Look at these two triangles. They look the same. They are _______.",o:["called","both","other","alike"],a:3,en:"same look → alike",ar:'يبدوان متماثلين → alike',tr:'انظر لهذين المثلثين. يبدوان متماثلين. هما متشابهان.'},
  {q:"Cars are fast. Bicycles are _______.",o:["faster","strong","slow","alike"],a:2,en:"opposite of fast = slow",ar:'عكس fast = slow',tr:'السيارات سريعة. الدرّاجات بطيئة.'},
  {q:"Many balls are _______.",o:["narrow","slow","round","weak"],a:2,en:"a ball is round",ar:'الكرة مستديرة → round',tr:'كثير من الكرات مستديرة.'},
  {q:"A shape with three sides is called a _______.",o:["circle","square","triangle","rectangle"],a:2,en:"3 sides → triangle",ar:'ثلاثة أضلاع → مثلّث',tr:'الشكل الذي له ثلاثة أضلاع يُسمّى مثلّثاً.'},
  {q:"A _______ has four equal sides and four 90° angles.",o:["triangle","circle","square","line"],a:2,en:"equal sides + 90 → square",ar:'أضلاع متساوية + 90° → مربّع',tr:'المربّع له أربعة أضلاع متساوية وأربع زوايا قائمة.'},
  {q:"The line of a circle is _______, not straight.",o:["curved","wide","strong","short"],a:0,en:"a circle's line is curved",ar:'خط الدائرة منحنٍ',tr:'خط الدائرة منحنٍ، وليس مستقيماً.'},
  {q:"Tom has two books. One is a language book. The _______ book is a math book.",o:["both","another","other","same"],a:2,en:"the remaining one → the other",ar:'الباقي من اثنين → the other',tr:'توم عنده كتابان. واحد لغة، والكتاب الآخر رياضيات.'},
  {q:"One brother is a cook, and the other is a cook, too. _______ brothers are cooks.",o:["Both","Other","The other","Each"],a:0,en:"the two together → Both",ar:'الاثنان معاً → Both',tr:'أحد الأخوين طبّاخ، والآخر طبّاخ أيضاً. كلاهما طبّاخ.'},
  {q:"The mailman brought a _______.",o:["package large","large package","package a large","a large"],a:1,en:"adjective before noun",ar:'الصفة قبل الاسم → large package',tr:'ساعي البريد أحضر طرداً كبيراً.'},
  {q:'The opposite of "wide" is _______.',o:["long","narrow","big","tall"],a:1,en:"wide/narrow are opposites",ar:'عكس wide = narrow',tr:'عكس كلمة wide هو narrow.'},
  {q:'The opposite of "strong" is _______.',o:["fast","weak","hard","slow"],a:1,en:"strong/weak are opposites",ar:'عكس strong = weak',tr:'عكس كلمة strong هو weak.'},
  {q:'The opposite of "top" is _______.',o:["side","bottom","edge","center"],a:1,en:"top/bottom are opposites",ar:'عكس top = bottom',tr:'عكس كلمة top هو bottom.'},
  {q:'The opposite of "same" is _______.',o:["alike","both","different","like"],a:2,en:"same/different are opposites",ar:'عكس same = different',tr:'عكس كلمة same هو different.'},
  {q:"A man walked into the library. _______ was looking for a book.",o:["She","He","They","It"],a:1,en:"a man → He",ar:'a man مفرد مذكّر → He',tr:'رجل دخل المكتبة. كان يبحث عن كتاب.'},
  {q:"The students take tests on Fridays. _______ study every night.",o:["He","It","They","She"],a:2,en:"students = plural → They",ar:'students جمع → They',tr:'الطلاب يؤدّون اختبارات أيام الجمعة. يدرسون كل ليلة.'},
  {q:"Alice's umbrella didn't help her. _______ was at home.",o:["She","He","It","They"],a:2,en:"umbrella = It",ar:'المظلّة شيء → It',tr:'مظلّة أليس لم تنفعها. كانت في البيت.'},
  {q:"Jim drew four shapes. Then he _______ them to the students.",o:["described","drew","compared","signed"],a:0,en:"described the shapes",ar:'وصف الأشكال → described',tr:'جيم رسم أربعة أشكال. ثم وصفها للطلاب.'},
  {q:"Martha and Tom want to go to Venezuela. They can travel _______ by plane or by boat.",o:["here","there","where","their"],a:1,en:"to Venezuela = there",ar:'إلى فنزويلا → there',tr:'مارثا وتوم يريدان الذهاب إلى فنزويلا. يمكنهما السفر إلى هناك بالطائرة أو القارب.'},
]
};

// ═══════════════════════════════════════
// ROUTING MANIFEST — home + lesson + mistake-review screens
// ═══════════════════════════════════════
const SCREENS=['home','lscreen','mkscreen'];
const SCREEN_NAMES={home:'الرئيسية',lscreen:'درس',mkscreen:'مراجعة الأخطاء'};
