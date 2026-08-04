// ═══════════════════════════════════════
// DATA — BOOK 7
// Lesson 1 (Shapes and Lines) — vocab, grammar, word-order, per-lesson quiz.
// Built lesson by lesson; more lessons get appended here later.
// ═══════════════════════════════════════
const BOOK_ID='book7';

const LESSON_META={
  l1:{ico:'🔷',title:'Lesson 1 — Shapes and Lines',sub:'الأشكال والخطوط · وصف الأشياء والمقارنة بينها'},
  l2:{ico:'🧮',title:'Lesson 2 — Understanding Math',sub:'فهم الرياضيات · العمليات الحسابية والفهم القرائي'},
  l3:{ico:'🏡',title:'Lesson 3 — American Homes',sub:'البيوت الأمريكية · ظروف المكان وصيغة التفضيل'},
  l4:{ico:'🛋️',title:'Lesson 4 — Inside the House',sub:'داخل البيت · الأثاث والمطبخ والغرض من الأشياء'}
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
  {e:'rectangle',a:'مستطيل',em:'▭'},
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
  {e:'compare',a:'يقارن',em:'🆚'},
  {e:'round',a:'مستدير',em:'⭕'},
  {e:'curved',a:'منحنٍ',em:'〰️'},
  {e:'straight',a:'مستقيم',em:'📏'},
  {e:'wide',a:'عريض / واسع',em:'↔️'},
  {e:'narrow',a:'ضيّق',em:'▫️'},
  {e:'big',a:'كبير',em:'🔶'},
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
  {e:'both',a:'كِلاهما',em:'👫'},
  {e:'other',a:'الآخر / الباقي',em:'↩️'},
],
l2:[
  // — أسماء Nouns —
  {e:'problem',a:'مسألة (حسابية)',em:'🧮'},
  {e:'answer',a:'الإجابة / الحلّ',em:'✅'},
  {e:'total',a:'المجموع الكلّي',em:'🧾'},
  {e:'price',a:'السِّعر',em:'🏷️'},
  {e:'weight',a:'الوَزن',em:'⚖️'},
  {e:'half / halves',a:'نِصف / أنصاف',em:'🌗'},
  {e:'top',a:'الأعلى',em:'🔝'},
  {e:'bottom',a:'الأسفل',em:'🔽'},
  {e:'center',a:'المركز',em:'🎯'},
  {e:'radius',a:'نصف القُطر',em:'📏'},
  {e:'diameter',a:'القُطر (يعبُر المركز)',em:'↔️'},
  {e:'circumference',a:'المحيط (محيط الدائرة)',em:'⭕'},
  {e:'error',a:'خطأ',em:'❌'},
  {e:'explanation',a:'شرح / تفسير',em:'💬'},
  // — أفعال Verbs —
  {e:'understand',a:'يفهم',past:'understood',pa:'فَهِم',em:'💡'},
  {e:'explain',a:'يشرح',em:'🗣️'},
  {e:'count',a:'يَعُدّ',em:'🔢'},
  {e:'add',a:'يجمع (يُضيف)',em:'➕'},
  {e:'subtract',a:'يطرح',em:'➖'},
  {e:'multiply',a:'يضرب',em:'✖️'},
  {e:'divide',a:'يقسم',em:'➗'},
  {e:'equal',a:'يساوي',em:'🟰'},
  {e:'weigh',a:'يَزِن',em:'⚖️'},
  {e:'solve',a:'يحلّ (المسألة)',em:'🧩'},
  {e:'make a mistake',a:'يُخطئ',past:'made a mistake',pa:'أخطأ',em:'🙈'},
  // — الرموز الحسابية Symbols —
  {e:'plus (+)',a:'زائد — علامة الجمع',em:'➕'},
  {e:'minus (−)',a:'ناقص — علامة الطرح',em:'➖'},
  {e:'times (×)',a:'ضَرْب — علامة الضرب',em:'✖️'},
  {e:'divided by (÷)',a:'مقسوم على',em:'➗'},
  {e:'equals (=)',a:'يساوي',em:'🟰'},
  // — كلمات أخرى Other words —
  {e:'easy',a:'سهل',em:'😊'},
  {e:'hard',a:'صعب',em:'😓'},
  {e:'heavy',a:'ثقيل',em:'🏋️'},
  {e:'light',a:'خفيف (الوَزن)',em:'🪶'},
  {e:'more',a:'أكثر',em:'⬆️'},
  {e:'each',a:'كلّ واحد (على حِدة)',em:'☝️'},
  {e:'straight',a:'مستقيم',em:'📐'},
  {e:'present',a:'حاضِر',em:'🙋'},
  {e:'absent',a:'غائب',em:'🚫'},
],
l3:[
  // — أجزاء البيت House parts —
  {e:'roof',a:'السَّقف',em:'🏠'},
  {e:'garage',a:'الكراج / المرآب',em:'🚗'},
  {e:'yard',a:'الفِناء / الحوش',em:'🌳'},
  {e:'backyard',a:'الفناء الخلفي',em:'🏡'},
  {e:'fence',a:'السِّياج / السُّور',em:'🧱'},
  {e:'gate',a:'البوّابة',em:'🚪'},
  {e:'grass',a:'العُشب',em:'🌱'},
  {e:'flower',a:'زهرة',em:'🌸'},
  {e:'hill',a:'تلّة',em:'⛰️'},
  {e:'land',a:'أرض / يابسة',em:'🏞️'},
  {e:'river',a:'نهر',em:'🌊'},
  // — أنواع المساكن Types of homes —
  {e:'apartment',a:'شقّة',em:'🏢'},
  {e:'town house',a:'بيت متلاصق (تاون هاوس)',em:'🏘️'},
  {e:'mobile home',a:'بيت متنقّل',em:'🚐'},
  {e:'fixer-upper',a:'بيت يحتاج ترميمًا',em:'🔨'},
  {e:'tepee',a:'خيمة هندية (تيبي)',em:'⛺'},
  // — الحيوانات Animals —
  {e:'animal',a:'حيوان',em:'🐾'},
  {e:'bird',a:'طائر',em:'🐦'},
  {e:'cat',a:'قطة',em:'🐱'},
  {e:'dog',a:'كلب',em:'🐶'},
  {e:'fish',a:'سمكة',em:'🐟'},
  {e:'horse',a:'حصان',em:'🐴'},
  {e:'rabbit',a:'أرنب',em:'🐰'},
  // — الفضاء والطبيعة Space & nature —
  {e:'sun',a:'الشمس',em:'☀️'},
  {e:'earth',a:'الأرض (الكوكب)',em:'🌍'},
  {e:'moon',a:'القمر',em:'🌙'},
  {e:'star',a:'نجمة',em:'⭐'},
  {e:'world',a:'العالَم',em:'🌐'},
  // — الزمن Time —
  {e:'past',a:'الماضي (قديمًا)',em:'⏮️'},
  {e:'present',a:'الحاضر (حديثًا)',em:'🕐'},
  // — أفعال Verbs —
  {e:'climb',a:'يتسلّق',em:'🧗'},
  {e:'run',a:'يجري',past:'ran',pa:'جرى',em:'🏃'},
],
l4:[
  // — غرفة المعيشة Living room —
  {e:'furniture',a:'الأثاث',em:'🛋️'},
  {e:'sofa / couch',a:'الأريكة / الكنبة',em:'🛋️'},
  {e:'armchair',a:'كرسي بذراعين',em:'🪑'},
  {e:'coffee table',a:'طاولة القهوة',em:'☕'},
  {e:'lamp',a:'مصباح',em:'💡'},
  {e:'rug / carpet',a:'سجّادة / موكيت',em:'🧶'},
  {e:'curtain / drapes',a:'ستارة / ستائر',em:'🪟'},
  {e:'bookcase / shelf',a:'خزانة كتب / رفّ',em:'📚'},
  {e:'cabinet',a:'خِزانة (بأبواب)',em:'🗄️'},
  {e:'drawer',a:'دُرج',em:'📥'},
  {e:'fan',a:'مروحة',em:'🪭'},
  {e:'ceiling',a:'السَّقف (من الداخل)',em:'🔝'},
  {e:'floor',a:'الأرضية',em:'🟫'},
  // — المطبخ Kitchen —
  {e:'kitchen',a:'المطبخ',em:'🍽️'},
  {e:'sink',a:'الحوض',em:'🚰'},
  {e:'faucet',a:'الصنبور / الحنفية',em:'💧'},
  {e:'stove',a:'الموقد / البوتاجاز',em:'🔥'},
  {e:'refrigerator',a:'الثلّاجة',em:'🧊'},
  {e:'dishwasher',a:'غسّالة الصحون',em:'🧽'},
  {e:'microwave oven',a:'فرن الميكروويف',em:'♨️'},
  {e:'toaster',a:'محمّصة الخبز',em:'🍞'},
  {e:'pot',a:'قِدر',em:'🍲'},
  {e:'pan',a:'مقلاة',em:'🍳'},
  {e:'can',a:'عُلبة (طعام معلّب)',em:'🥫'},
  {e:'can opener',a:'فتّاحة العُلب',em:'🔧'},
  {e:'plug',a:'القابس (الفيشة)',em:'🔌'},
  {e:'outlet',a:'المقبس (الكهرباء)',em:'⚡'},
  {e:'appliance',a:'جهاز كهربائي',em:'🧰'},
  // — أفعال Verbs —
  {e:'use',a:'يستخدم',em:'✋'},
  {e:'keep',a:'يحفظ',past:'kept',pa:'حفِظ',em:'📦'},
  {e:'lay',a:'يضع (أفقيًّا)',past:'laid',pa:'وضَع',em:'⬇️'},
  {e:'plug in',a:'يوصّل بالكهرباء',em:'🔋'},
  // — صفات Adjectives —
  {e:'pretty',a:'جميل / حلو',em:'😍'},
  {e:'ugly',a:'قبيح',em:'🙁'},
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
      {s:'Jim has an umbrella large.',wrong:'umbrella large',right:'large umbrella',tr:'الصفة قبل الاسم → large umbrella.',ok:false},
    ]
  }
],
l2:[
  {
    title:'Comparative Adjectives — -er … than', ar:'صيغة التفضيل: المقارنة بين شيئين',
    rule:'للمقارنة بين شيئين نضيف -er إلى الصفة القصيرة، ونتبعها بـ than (مِن).',
    parts:[
      {t:'adjective + -er + than',d:'صفة + er + than. مثال: A car is faster than a bike. = السيارة أسرع من الدرّاجة.'},
      {t:'add -er',d:'لأغلب الصفات نضيف -er فقط. مثل: tall → taller، small → smaller، clean → cleaner.'},
      {t:'drop silent -e, add -er',d:'إذا انتهت الصفة بـ e صامتة نحذفها: nice → nicer، large → larger، wide → wider.'},
      {t:'double the consonant',d:'مقطع واحد على نمط (ساكن–متحرك–ساكن): نضاعف الحرف الأخير: big → bigger، hot → hotter، wet → wetter.'},
      {t:'y → i, add -er',d:'إذا انتهت بحرف y نحوّله إلى i: happy → happier، heavy → heavier، easy → easier.'},
    ],
    check:{q:'This box is _______ than that one. (heavy)',o:['heavyer','heavier','more heavy','heaviest'],a:1,en:'heavy → heavier (y→i)',ar:'heavy تنتهي بـ y → heavier'},
    formula:[{t:'adjective',c:'v'},{t:'+',c:'p'},{t:'-er',c:'s'},{t:'+',c:'p'},{t:'than',c:'k'}],
    compare:[
      {c1:'The first problem is easy.',c2:'The first problem is easier than the second.',ar:'easy → easier (y→i)'},
      {c1:'This belt is wide.',c2:'This belt is wider than that one.',ar:'wide → wider (حذف e)'},
    ],
    examples:[
      {s:'A table-tennis ball is lighter than a baseball.',tr:'كرة تنس الطاولة أخفّ من كرة البيسبول.',ar:'light → lighter',ok:true},
      {s:'Tom is taller than Tim.',tr:'توم أطول من تيم.',ar:'tall → taller + than',ok:true},
      {s:'This problem is more hard than that one.',wrong:'more hard',right:'harder',tr:'الصفة القصيرة تأخذ -er لا more → harder.',ok:false},
    ]
  },
  {
    title:'some / any', ar:'بعض / أيّ',
    rule:'نستخدم some في الجُمل المُثبتة، و any في النفي والأسئلة.',
    parts:[
      {t:'some',d:'في الإثبات. مثال: He has some stamps. = عنده بعض الطوابع.'},
      {t:'any',d:'في النفي والسؤال. مثال: Do you have any stamps? / I don’t have any. = هل عندك أيّ طوابع؟ / ليس عندي أيّ.'},
    ],
    check:{q:"I looked for chairs, but I didn't see _______.",o:['some','any','both','other'],a:1,en:'negative → any',ar:'جملة منفية → any'},
    compare:[
      {c1:'I have some money.',c2:"I don't have any money.",ar:'إثبات some ←→ نفي any'},
      {c1:'She bought some bread.',c2:'Did she buy any bread?',ar:'إثبات some ←→ سؤال any'},
    ],
    examples:[
      {s:'We need some more chairs for the class.',tr:'نحتاج بعض الكراسي الإضافية للصف.',ar:'إثبات → some',ok:true},
      {s:'Does the army have any boats?',tr:'هل لدى الجيش أيّ قوارب؟',ar:'سؤال → any',ok:true},
      {s:"I don't want some coffee.",wrong:'some',right:'any',tr:'مع النفي نستخدم any → any coffee.',ok:false},
    ]
  },
  {
    title:'both / one … the other', ar:'كِلاهما / أحدهما … والآخر',
    rule:'نتحدّث عن شيئين: both للاثنين معاً، و one للأول و the other للثاني (الباقي)، و each لكلّ واحد على حِدة.',
    parts:[
      {t:'both',d:'كِلاهما — الاثنان معاً، وتأتي قبل اسم جمع. مثال: Both problems are easy. = كلتا المسألتين سهلة.'},
      {t:'one … the other',d:'الأول one، والباقي the other. مثال: One is right; the other is wrong. = واحد صحيح والآخر خطأ.'},
      {t:'each',d:'كلّ واحد على حِدة. مثال: Each answer is different. = كل إجابة مختلفة.'},
    ],
    check:{q:'Julie and Judy are twins. _______ have brown hair.',o:['Each','The other','Both','Any'],a:2,en:'the two together → Both',ar:'الاثنتان معاً → Both'},
    compare:[
      {c1:'This ball is heavy. The other ball is heavy, too.',c2:'Both balls are heavy.',ar:'الاثنان → both + اسم جمع'},
      {c1:'One line is straight.',c2:'The other line is curved.',ar:'one … the other'},
    ],
    examples:[
      {s:'Julie and Judy are both good at sports.',tr:'جولي وجودي كلتاهما بارعتان في الرياضة.',ar:'both',ok:true},
      {s:'One shape is a circle; the other is a square.',tr:'شكلٌ دائرة، والآخر مربّع.',ar:'one … the other',ok:true},
      {s:'Both boy is tall.',wrong:'boy is',right:'boys are',tr:'both تحتاج اسماً جمعاً وفعلاً جمعاً → boys are.',ok:false},
    ]
  },
  {
    title:'Reading Skill — Topic vs Main Idea', ar:'مهارة القراءة: الموضوع مقابل الفكرة الرئيسية',
    rule:'الموضوع (Topic) = عمّاذا تتحدّث الفقرة؟ ويُكتب كلمة أو عبارة قصيرة. الفكرة الرئيسية (Main Idea) = أهمّ ما تقوله الفقرة عن الموضوع، وتُكتب جملة كاملة.',
    parts:[
      {t:'Topic',d:'الموضوع — بأيّ شيء تدور الفقرة؟ يُكتب كلمة أو عبارة قصيرة. مثال: sports.'},
      {t:'Main Idea',d:'الفكرة الرئيسية — أهمّ نقطة عن الموضوع، وتُكتب جملة كاملة. مثال: My friends like sports.'},
      {t:'Reference',d:'المرجع — انتبه لِما يعود عليه الضمير (it / them / they / he). مثال: “John swims. He is fast.” → He = John.'},
    ],
    check:{q:'John swims. Mary plays soccer. Jack plays basketball. My friends like sports. → الفكرة الرئيسية؟',o:['swimming','My friends like sports.','soccer','basketball'],a:1,en:'the sentence that tells about all',ar:'الجملة الجامعة = الفكرة الرئيسية'},
    compare:[
      {c1:'Topic: sports',c2:'Main idea: My friends like sports.',ar:'الموضوع عبارة قصيرة، والفكرة جملة كاملة'},
      {c1:'We drew triangles and circles.',c2:'Topic: shapes in math',ar:'استخرج الموضوع من التفاصيل'},
    ],
    examples:[
      {s:'The topic is one word or a short phrase.',tr:'الموضوع كلمة واحدة أو عبارة قصيرة.',ar:'Topic',ok:true},
      {s:'The main idea is the sentence that tells about all the others.',tr:'الفكرة الرئيسية هي الجملة التي تُلخّص بقية الجُمل.',ar:'Main idea',ok:true},
    ]
  }
],
l3:[
  {
    title:'Superlative Adjectives — the -est', ar:'صيغة التفضيل العُليا: الأعلى بين ثلاثة فأكثر',
    rule:'للتفضيل بين ثلاثة فأكثر نضيف -est إلى الصفة القصيرة ونسبقها بـ the. مثال: the tallest = الأطول.',
    parts:[
      {t:'the + adjective + -est',d:'the + صفة + est. مثال: John is the tallest of the three. = جون الأطول بين الثلاثة.'},
      {t:'add -est',d:'لأغلب الصفات نضيف -est. مثل: tall → the tallest، clean → the cleanest، weak → the weakest.'},
      {t:'drop silent -e, add -st',d:'إذا انتهت بـ e صامتة نحذفها: nice → the nicest، large → the largest، late → the latest.'},
      {t:'double the consonant',d:'مقطع واحد (ساكن–متحرك–ساكن): نضاعف الحرف الأخير: big → the biggest، hot → the hottest، wet → the wettest.'},
      {t:'y → i, add -est',d:'إذا انتهت بحرف y نحوّله إلى i: happy → the happiest، heavy → the heaviest، easy → the easiest.'},
    ],
    check:{q:'Of the three boxes, this one is _______. (small)',o:['smaller','the smallest','more small','smallest'],a:1,en:'three items → the smallest',ar:'ثلاثة أشياء → the smallest'},
    formula:[{t:'the',c:'k'},{t:'+',c:'p'},{t:'adjective',c:'v'},{t:'+',c:'p'},{t:'-est',c:'s'}],
    compare:[
      {c1:'Comparative: Bill is taller than John.',c2:'Superlative: Bill is the tallest of all.',ar:'بين اثنين -er / بين ثلاثة the -est'},
      {c1:'Peter is young.',c2:'Peter is the youngest in the family.',ar:'young → the youngest'},
    ],
    examples:[
      {s:'These prices are the lowest of all the restaurants.',tr:'هذه الأسعار هي الأدنى بين كل المطاعم.',ar:'low → the lowest',ok:true},
      {s:'Mary is the youngest, and Tom is the oldest.',tr:'ماري الأصغر، وتوم الأكبر.',ar:'young→youngest، old→oldest',ok:true},
      {s:'This is the most tall building.',wrong:'most tall',right:'tallest',tr:'الصفة القصيرة تأخذ the -est لا most → the tallest.',ok:false},
    ]
  },
  {
    title:'Talking about Location — prepositions', ar:'ظروف المكان: أين يقع الشيء؟',
    rule:'نستخدم كلمات الموقع لنصف مكان الشيء بالنسبة لغيره.',
    parts:[
      {t:'above / below',d:'above = فوق، below = تحت. مثال: The clock is above the door. = الساعة فوق الباب.'},
      {t:'next to / by',d:'next to = بجوار، by = بجانب. مثال: The desk is next to the window. = المكتب بجوار النافذة.'},
      {t:'in front of / in back of',d:'in front of = أمام، in back of (behind) = خلف. مثال: The car is in front of the house.'},
      {t:'over / around / between',d:'over = فوق (يعلو)، around = حول، between = بين. مثال: A fence goes around the yard.'},
      {t:'high / low',d:'high = مرتفع، low = منخفض. مثال: The birds fly high. = الطيور تطير عاليًا.'},
    ],
    check:{q:'The clock is _______ the door. (higher position)',o:['below','above','next','around'],a:1,en:'higher = above',ar:'في الأعلى → above'},
    compare:[
      {c1:'The pencil is next to the book.',c2:'The pens are in front of you.',ar:'next to = بجوار / in front of = أمام'},
      {c1:'The roof is above the rooms.',c2:'The garage is below the bedroom.',ar:'above ←→ below'},
    ],
    examples:[
      {s:'There is a fence around the backyard.',tr:'يوجد سياج حول الفناء الخلفي.',ar:'around = حول',ok:true},
      {s:'The mailman left the package by the door.',tr:'ترك ساعي البريد الطرد بجانب الباب.',ar:'by = بجانب',ok:true},
      {s:'The teacher desk is front the room.',wrong:'front the room',right:'in front of the room',tr:'الصيغة الصحيحة in front of.',ok:false},
    ]
  },
  {
    title:'How old …?', ar:'كم عُمر …؟',
    rule:'نسأل عن العُمر بـ How old …? ونجيب بـ … years old. ونقول متى حدث شيء بـ … years ago.',
    parts:[
      {t:'How old is …?',d:'للسؤال عن عمر شخص أو شيء. مثال: How old is your house? = كم عمر بيتك؟'},
      {t:'… years old',d:'للإجابة عن العمر. مثال: It’s two years old. = عمره سنتان.'},
      {t:'… years ago',d:'للتعبير عن زمن مضى. مثال: We bought it four years ago. = اشتريناه قبل أربع سنوات.'},
    ],
    check:{q:'_______ is your son? — He’s seven years old.',o:['How many','How old','How much','How long'],a:1,en:'age → How old',ar:'السؤال عن العمر → How old'},
    compare:[
      {c1:'How old is the house?',c2:'It’s ten years old.',ar:'سؤال العمر / جواب العمر'},
      {c1:'We bought it three years ago.',c2:'My father is 55 years old.',ar:'years ago (زمن مضى) / years old (عمر)'},
    ],
    examples:[
      {s:'How old is your car? — It’s five years old.',tr:'كم عمر سيارتك؟ — عمرها خمس سنوات.',ar:'years old = العمر',ok:true},
      {s:'They bought the computer six years ago.',tr:'اشتروا الحاسوب قبل ست سنوات.',ar:'years ago = زمن مضى',ok:true},
      {s:'How old your house is?',wrong:'How old your house is',right:'How old is your house',tr:'نقدّم الفعل is بعد How old.',ok:false},
    ]
  },
  {
    title:'Reading Skill — Pronoun References', ar:'مهارة القراءة: مرجع الضمير',
    rule:'الضمير يحلّ محلّ اسم ذُكر قبله. اسأل: هذا الضمير يعود على مَن/ماذا؟ (it / they / he / she / them / there).',
    parts:[
      {t:'it / they',d:'للأشياء. it للمفرد، they للجمع. مثال: “The car is in the garage. It won’t start.” → It = the car.'},
      {t:'he / she',d:'للأشخاص. he للمذكّر، she للمؤنّث. مثال: “Ted has a dog. He likes to run.” → He = Ted.'},
      {t:'them / there',d:'them = مفعول جمع، there = مكان. مثال: “She cuts the flowers and puts them inside.” → them = the flowers.'},
    ],
    check:{q:'“Bob and Peter studied math. They were tired.” The word They = _______.',o:['the math','Bob and Peter','the homework','the teacher'],a:1,en:'They → Bob and Peter',ar:'They تعود على Bob and Peter'},
    compare:[
      {c1:'“There are apples on the trees. They are delicious.”',c2:'They = the apples',ar:'الضمير يعود على أقرب اسم مناسب'},
      {c1:'“Ted lives in Houston. He’ll fly to Paris.”',c2:'He = Ted',ar:'he للشخص المذكّر'},
    ],
    examples:[
      {s:'Our dog likes the yard. He runs there every day.',tr:'كلبنا يحبّ الفناء. يجري فيه كل يوم.',ar:'He = the dog / there = the yard',ok:true},
      {s:'The Smiths grow flowers and sell them.',tr:'آل سميث يزرعون الزهور ويبيعونها.',ar:'them = the flowers',ok:true},
    ]
  }
],
l4:[
  {
    title:'Talking about Purpose — to + verb / for + -ing', ar:'الغرض من الأشياء: لماذا نستخدمها؟',
    rule:'للتعبير عن الغرض من شيء نستخدم صيغتين متساويتين في المعنى: to + مصدر، أو for + فعل-ing.',
    parts:[
      {t:'What … for?',d:'للسؤال عن الغرض. مثال: What do we use a stove for? = فيمَ نستخدم الموقد؟'},
      {t:'to + verb',d:'الغرض بصيغة to + المصدر. مثال: We use a stove to cook food. = نستخدم الموقد لطهي الطعام.'},
      {t:'for + verb-ing',d:'نفس المعنى بصيغة for + فعل-ing. مثال: We use a stove for cooking food.'},
    ],
    check:{q:'I use a sink _______ dishes.',o:['to washing','for washing','for wash','to washes'],a:1,en:'for + -ing → for washing',ar:'for + فعل-ing → for washing'},
    formula:[{t:'use',c:'v'},{t:'+ thing +',c:'p'},{t:'to + verb',c:'s'},{t:'/',c:'p'},{t:'for + -ing',c:'k'}],
    compare:[
      {c1:'We use glasses to read.',c2:'We use glasses for reading.',ar:'to + مصدر = for + ing (نفس المعنى)'},
      {c1:'She uses a knife to cut meat.',c2:'She uses a knife for cutting meat.',ar:'صيغتان للغرض'},
    ],
    examples:[
      {s:'They use the living room to watch TV.',tr:'يستخدمون غرفة المعيشة لمشاهدة التلفاز.',ar:'to + watch',ok:true},
      {s:'He uses the microwave for warming his coffee.',tr:'يستخدم الميكروويف لتدفئة قهوته.',ar:'for + warming',ok:true},
      {s:'I use a pan for cook eggs.',wrong:'for cook',right:'for cooking',tr:'بعد for نضع فعل-ing → for cooking.',ok:false},
    ]
  },
  {
    title:'Adverbs of Frequency', ar:'ظروف التكرار: كم مرّة يحدث الشيء؟',
    rule:'تصف كم مرّة يحدث الفعل، وتأتي عادةً قبل الفعل الرئيسي، وبعد فعل be.',
    parts:[
      {t:'always (100%)',d:'دائمًا — كل مرّة. مثال: He always plays on Fridays.'},
      {t:'usually / often',d:'usually = عادةً (معظم الأوقات)، often = غالبًا (مرّات كثيرة).'},
      {t:'sometimes (50%)',d:'أحيانًا — ليس دائمًا. مثال: He sometimes plays golf.'},
      {t:'seldom / never (0%)',d:'seldom = نادرًا (يكاد لا)، never = أبدًا (ولا مرّة).'},
      {t:'الموقع',d:'قبل الفعل الرئيسي: He always runs. وبعد فعل be: He is always late.'},
    ],
    check:{q:'Tom runs every single day. Tom _______ runs.',o:['seldom','never','always','sometimes'],a:2,en:'every day → always',ar:'كل يوم → always (دائمًا)'},
    compare:[
      {c1:'He always eats breakfast. (كل يوم)',c2:'He seldom eats breakfast. (نادرًا)',ar:'100% ←→ نادرًا'},
      {c1:'She is usually happy.',c2:'She usually smiles.',ar:'بعد be / قبل الفعل الرئيسي'},
    ],
    examples:[
      {s:'We always brush our teeth in the morning.',tr:'نفرّش أسناننا دائمًا في الصباح.',ar:'always قبل الفعل',ok:true},
      {s:'He is never late for class.',tr:'لا يتأخّر أبدًا عن الصف.',ar:'never بعد is',ok:true},
      {s:'I go always to the gym.',wrong:'go always',right:'always go',tr:'ظرف التكرار قبل الفعل الرئيسي → always go.',ok:false},
    ]
  },
  {
    title:'Reading Skill — Pronoun & Contextual References', ar:'مهارة القراءة: مرجع الضمير والكلمات',
    rule:'الضمير أو الكلمة المرجعية (it / they / them / this furniture / these appliances) تحلّ محلّ اسم ذُكر قبلها. اسأل: تعود على ماذا؟',
    parts:[
      {t:'it / they / them',d:'it للمفرد، they/them للجمع. مثال: “The dishes are dirty. Wash them.” → them = the dishes.'},
      {t:'this / these + noun',d:'كلمة مرجعية تلخّص ما سبق. مثال: “He bought a sofa and a lamp. This furniture is new.” → this furniture = the sofa and lamp.'},
    ],
    check:{q:'“Mary runs every Monday with friends. They meet at a park.” The word “They” = _______.',o:['the park','Mary and her friends','the town','Monday'],a:1,en:'They → Mary and her friends',ar:'They تعود على ماري وأصدقائها'},
    compare:[
      {c1:'“The forks are in the drawer. I put them there.”',c2:'them = the forks',ar:'الضمير يعود على أقرب اسم مناسب'},
      {c1:'“He got a stove and a sink. These appliances are new.”',c2:'these appliances = the stove and sink',ar:'كلمة مرجعية جامعة'},
    ],
    examples:[
      {s:'We use the living room for watching TV. It is large.',tr:'نستخدم غرفة المعيشة لمشاهدة التلفاز. إنها كبيرة.',ar:'It = the living room',ok:true},
      {s:'Mom bought new curtains and hung them up.',tr:'أمّي اشترت ستائر جديدة وعلّقتها.',ar:'them = the curtains',ok:true},
    ]
  },
  {
    title:'lay / laid — placing something down', ar:'فعل lay: وضع الشيء أفقيًّا',
    rule:'lay تعني «يضع شيئًا أفقيًّا على سطح». تصريفها: lay / lays / laying / (الماضي) laid.',
    parts:[
      {t:'lay / lays',d:'المضارع. مثال: I lay the book on the table. / He lays the book on the table.'},
      {t:'laying',d:'المضارع المستمرّ. مثال: She is laying the papers on the desk.'},
      {t:'laid (past)',d:'الماضي. مثال: Yesterday he laid the books on the table.'},
    ],
    check:{q:'Yesterday she _______ the paper on the table.',o:['lays','lay','laid','laying'],a:2,en:'past → laid',ar:'الماضي → laid'},
    compare:[
      {c1:'Present: He lays his keys on the shelf.',c2:'Past: He laid his keys on the shelf.',ar:'lays ←→ laid'},
      {c1:'I lay the rug on the floor.',c2:'I am laying the rug on the floor.',ar:'البسيط / المستمرّ'},
    ],
    examples:[
      {s:'He lays his books on the coffee table every day.',tr:'يضع كتبه على طاولة القهوة كل يوم.',ar:'lays (مضارع)',ok:true},
      {s:'She laid the towel on the sink last night.',tr:'وضعت المنشفة على الحوض ليلة أمس.',ar:'laid (ماضٍ)',ok:true},
      {s:'Yesterday I lay the plates on the table.',wrong:'lay',right:'laid',tr:'الماضي من lay هو laid.',ok:false},
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
],
l2:[
  {words:['Tom','is','taller','than','Tim'],ans:'Tom is taller than Tim.',tr:'توم أطول من تيم.',ar:'صيغة التفضيل + than'},
  {words:['The','first','problem','is','easier','than','the','second'],ans:'The first problem is easier than the second.',tr:'المسألة الأولى أسهل من الثانية.',ar:'easy → easier'},
  {words:['Both','balls','are','the','same','weight'],ans:'Both balls are the same weight.',tr:'كلتا الكرتين لهما نفس الوزن.',ar:'both + اسم جمع'},
  {words:['Nine','divided','by','three','equals','three'],ans:'Nine divided by three equals three.',tr:'تسعة مقسومة على ثلاثة يساوي ثلاثة.',ar:'÷ عملية القسمة'},
  {words:['Please','add','these','numbers','together'],ans:'Please add these numbers together.',tr:'من فضلك اجمع هذه الأرقام معاً.',ar:'add = يجمع'},
  {words:['The','red','coat','is','heavier','than','the','blue','one'],ans:'The red coat is heavier than the blue one.',tr:'المعطف الأحمر أثقل من الأزرق.',ar:'heavy → heavier'},
  {words:['A','diameter','passes','through','the','center'],ans:'A diameter passes through the center.',tr:'القُطر يمرّ عبر المركز.',ar:'diameter / center'},
],
l3:[
  {words:['The','house','has','a','red','roof'],ans:'The house has a red roof.',tr:'البيت له سقف أحمر.',ar:'الصفة قبل الاسم + roof'},
  {words:['There','is','a','fence','around','the','backyard'],ans:'There is a fence around the backyard.',tr:'يوجد سياج حول الفناء الخلفي.',ar:'around = ظرف مكان'},
  {words:['John','is','the','tallest','of','the','three'],ans:'John is the tallest of the three.',tr:'جون الأطول بين الثلاثة.',ar:'صيغة التفضيل العُليا the -est'},
  {words:['The','garage','is','next','to','the','house'],ans:'The garage is next to the house.',tr:'الكراج بجوار البيت.',ar:'next to = بجوار'},
  {words:['The','moon','travels','around','the','earth'],ans:'The moon travels around the earth.',tr:'القمر يدور حول الأرض.',ar:'around the earth'},
  {words:['How','old','is','your','house'],ans:'How old is your house?',tr:'كم عمر بيتك؟',ar:'سؤال العمر How old'},
  {words:['This','is','the','smallest','box','of','all'],ans:'This is the smallest box of all.',tr:'هذا أصغر صندوق على الإطلاق.',ar:'the smallest of all'},
],
l4:[
  {words:['I','use','a','stove','to','cook','food'],ans:'I use a stove to cook food.',tr:'أستخدم الموقد لطهي الطعام.',ar:'الغرض: to + مصدر'},
  {words:['She','uses','a','sink','for','washing','dishes'],ans:'She uses a sink for washing dishes.',tr:'تستخدم الحوض لغسل الصحون.',ar:'الغرض: for + ing'},
  {words:['Tom','always','eats','at','the','snack','bar'],ans:'Tom always eats at the snack bar.',tr:'توم يأكل دائمًا في المقصف.',ar:'always قبل الفعل'},
  {words:['Please','plug','in','the','lamp'],ans:'Please plug in the lamp.',tr:'من فضلك وصّل المصباح بالكهرباء.',ar:'plug in'},
  {words:['The','forks','are','in','the','drawer'],ans:'The forks are in the drawer.',tr:'الشوك في الدُّرج.',ar:'مفردات المطبخ'},
  {words:['We','keep','the','milk','in','the','refrigerator'],ans:'We keep the milk in the refrigerator.',tr:'نحفظ الحليب في الثلّاجة.',ar:'keep + refrigerator'},
  {words:['He','laid','the','books','on','the','table'],ans:'He laid the books on the table.',tr:'وضع الكتب على الطاولة.',ar:'laid (ماضي lay)'},
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
],
l2:[
  // Book 7 · Lesson 2 · Evaluation Exercises (EE-10 → EE-12)
  // Exercise G — select the best answer
  {q:"Mike is 30. David is 50. David is _______ Mike.",o:["more older","the oldest","older than","oldest than"],a:2,en:"comparative: old → older than",ar:'صيغة التفضيل: older than (أكبر سنًّا من)',tr:'مايك عمره ٣٠ وديفيد ٥٠. ديفيد أكبر سنًّا من مايك.'},
  {q:"Ten _______ two is five.   (10 ÷ 2 = 5)",o:["into","multiplied by","plus","divided by"],a:3,en:"10 ÷ 2 = 5 → divided by",ar:'القسمة ÷ → divided by (مقسوم على)',tr:'عشرة مقسومة على اثنين يساوي خمسة.'},
  {q:"Winter in Texas is _______ winter in New York.",o:["warmest","warm","warmer than","the warm"],a:2,en:"comparative: warm → warmer than",ar:'صيغة التفضيل: warmer than (أدفأ من)',tr:'الشتاء في تكساس أدفأ من الشتاء في نيويورك.'},
  {q:"Ten _______ two is twenty.   (10 × 2 = 20)",o:["into","multiplied by","plus","divided by"],a:1,en:"10 × 2 = 20 → multiplied by",ar:'الضرب × → multiplied by (مضروب في)',tr:'عشرة مضروبة في اثنين يساوي عشرين.'},
  {q:"I got this problem wrong. Can you _______ it to me?",o:["center","count","explain","subtract"],a:2,en:"give an explanation → explain",ar:'يشرح → explain',tr:'حللت هذه المسألة خطأً. هل يمكنك أن تشرحها لي؟'},
  {q:"Give two cookies to _______ of the children.",o:["other","total","easy","each"],a:3,en:"to every one → each",ar:'لكل واحد على حِدة → each',tr:'أعطِ قطعتَي بسكويت لكل واحد من الأطفال.'},
  {q:"Six _______ three is three.   (6 − 3 = 3)",o:["plus","minus","subtract","divide"],a:1,en:"6 − 3 = 3 → minus",ar:'الطرح − → minus (ناقص)',tr:'ستة ناقص ثلاثة يساوي ثلاثة.'},
  {q:"Are all the students on the bus? — I don't know. I'll _______ them.",o:["add","explain","answer","count"],a:3,en:"count the students",ar:'يَعُدّ → count',tr:'هل كل الطلاب في الحافلة؟ — لا أعرف، سأعُدّهم.'},
  {q:"How much does this book cost? — The _______ of the book is $20.00.",o:["circumference","price","description","problem"],a:1,en:"how much it costs → price",ar:'السِّعر → price',tr:'كم يكلّف هذا الكتاب؟ — سِعر الكتاب ٢٠ دولاراً.'},
  {q:"Do you want cake or ice cream? — I want _______, please.",o:["other","any","both","some"],a:2,en:"cake AND ice cream → both",ar:'الاثنان معاً → both (كلاهما)',tr:'أتريد كعكاً أم آيس كريم؟ — أريد كليهما من فضلك.'},
  {q:"What does 6 + 5 + 3 equal? — The _______ is 14.",o:["problem","total","plus","error"],a:1,en:"the sum → total",ar:'المجموع الكلّي → total',tr:'كم يساوي ٦ + ٥ + ٣؟ — المجموع ١٤.'},
  {q:"Where do I put the flowers? — Put them in the _______ of the table.",o:["back","center","wide","tall"],a:1,en:"the middle → center",ar:'المنتصف → center (المركز)',tr:'أين أضع الزهور؟ — ضعها في منتصف الطاولة.'},
  // Exercise H — the word that means the same as the underlined word
  {q:'Jack has a test today and wants to make a good grade on it. The word "it" means _______.',o:["last night","test","TV","class"],a:1,en:'grade on it = grade on the test',ar:'الضمير it يعود على → test (الاختبار)',tr:'لدى جاك اختبار اليوم ويريد درجة جيدة فيه. كلمة it تعود على الاختبار.'},
  // Exercise I — choose the topic
  {q:'"Judy likes her town. The weather is nice. There are shops, theaters, and good schools." The topic is _______.',o:["Judy's children","good schools","Judy's town","shopping and sports"],a:2,en:"the paragraph is about her town",ar:'الفقرة تدور حول بلدتها → Judy’s town',tr:'الفقرة كلها عن بلدة جودي → الموضوع: بلدة جودي.'},
  // Exercise J — choose the main idea
  {q:'"Many children like snow. They play outside and make snow people. They have lots of fun in the snow." The main idea is _______.',o:["Snow is cold and wet.","Schools close when it snows.","Children like to go to school.","Children like snow."],a:3,en:"the sentence that tells about all",ar:'الجملة الجامعة → Children like snow.',tr:'الفكرة الرئيسية التي تلخّص الفقرة: الأطفال يحبّون الثلج.'},
],
l3:[
  // Book 7 · Lesson 3 · Evaluation Exercises (EE-16 → EE-18)
  // Exercise C — pronoun references (from the Lesson 3 reading, p.65)
  {q:'"Bob and Peter studied math. They were tired." The word "They" refers to _______.',o:["the math","Bob and Peter","the homework","the tests"],a:1,en:"They → Bob and Peter",ar:'They تعود على Bob and Peter',tr:'الضمير They يعود على بوب وبيتر.'},
  {q:'"The car is in the garage. It won\'t start." The word "It" refers to _______.',o:["the garage","the house","the car","the road"],a:2,en:"It → the car",ar:'It تعود على السيارة (the car)',tr:'الضمير It يعود على السيارة.'},
  {q:'"Ted lives in Houston. He\'ll fly to Paris." The word "He" refers to _______.',o:["Paris","Houston","Ted","the pilot"],a:2,en:"He → Ted",ar:'He تعود على Ted',tr:'الضمير He يعود على تِد.'},
  {q:'"Mrs. Peters cuts the flowers and puts them inside." The word "them" refers to _______.',o:["the flowers","the Smiths","the tables","the children"],a:0,en:"them → the flowers",ar:'them تعود على الزهور (the flowers)',tr:'الضمير them يعود على الزهور.'},
  // Exercise D — opposites
  {q:'The opposite of "high" is _______.',o:["above","low","over","tall"],a:1,en:"high/low are opposites",ar:'عكس high = low',tr:'عكس كلمة high (مرتفع) هو low (منخفض).'},
  {q:'The opposite of "above" is _______.',o:["over","around","below","by"],a:2,en:"above/below are opposites",ar:'عكس above = below',tr:'عكس كلمة above (فوق) هو below (تحت).'},
  {q:'The opposite of "front" is _______.',o:["rear","side","top","gate"],a:0,en:"front/rear are opposites",ar:'عكس front (الأمام) = rear (الخلف)',tr:'عكس كلمة front هو rear.'},
  {q:'The opposite of "past" is _______.',o:["old","present","late","world"],a:1,en:"past/present are opposites",ar:'عكس past (الماضي) = present (الحاضر)',tr:'عكس كلمة past هو present.'},
  // Exercise E — fill in the blank (house & nature vocabulary)
  {q:"The dogs run and play on the green _______ in the backyard.",o:["roof","grass","river","moon"],a:1,en:"green ground → grass",ar:'الأرض الخضراء → grass (العشب)',tr:'الكلاب تجري وتلعب على العشب الأخضر في الفناء الخلفي.'},
  {q:"The house is white and has a red _______ on top.",o:["fence","gate","roof","yard"],a:2,en:"top of the house → roof",ar:'أعلى البيت → roof (السقف)',tr:'البيت أبيض وله سقف أحمر في الأعلى.'},
  {q:"We keep our car in the _______.",o:["garage","river","hill","star"],a:0,en:"place for the car → garage",ar:'مكان السيارة → garage (الكراج)',tr:'نضع سيارتنا في الكراج.'},
  {q:"At night you can see the moon and the _______ in the sky.",o:["grass","stars","fence","roof"],a:1,en:"in the night sky → stars",ar:'في سماء الليل → stars (النجوم)',tr:'في الليل ترى القمر والنجوم في السماء.'},
  // Location prepositions (p.66-68)
  {q:"The clock is _______ the door, near the top of the wall.",o:["below","above","between","behind"],a:1,en:"higher position → above",ar:'في الأعلى → above (فوق)',tr:'الساعة فوق الباب قرب أعلى الجدار.'},
  {q:"There is a fence _______ the backyard to keep the dogs inside.",o:["around","under","above","into"],a:0,en:"encloses the yard → around",ar:'يحيط بالفناء → around (حول)',tr:'يوجد سياج حول الفناء الخلفي ليبقي الكلاب بالداخل.'},
  // Grammar: superlative & how old
  {q:"Peter is 3, Mary is 9, and Tom is 36. Peter is _______.",o:["the oldest","older","the youngest","younger"],a:2,en:"smallest age → the youngest",ar:'الأصغر سنًّا → the youngest',tr:'بيتر ٣، وماري ٩، وتوم ٣٦. بيتر هو الأصغر.'},
  {q:"Of the three restaurants, The Hills has _______ prices.",o:["lower","the lowest","low","less"],a:1,en:"three items → the lowest",ar:'بين ثلاثة → the lowest (الأدنى)',tr:'من بين المطاعم الثلاثة، مطعم The Hills له أدنى الأسعار.'},
  {q:"_______ is your house? — It's ten years old.",o:["How much","How many","How old","How long"],a:2,en:"age of the house → How old",ar:'السؤال عن العمر → How old',tr:'كم عمر بيتك؟ — عمره عشر سنوات.'},
  // Exercise F — select the best answer
  {q:"On the weekends, we like to take our boat to the _______.",o:["moon","land","earth","river"],a:3,en:"a boat goes on the → river",ar:'القارب يسير في → river (النهر)',tr:'في عطلة نهاية الأسبوع نحبّ أن نأخذ قاربنا إلى النهر.'},
  {q:"The earth is made of _______ and water.",o:["land","sky","stars","sun"],a:0,en:"earth = land and water",ar:'الأرض مكوّنة من يابسة وماء → land',tr:'الأرض مكوّنة من اليابسة والماء.'},
  {q:"Is 85 out of 100 a very _______ score on this test?",o:["low","high","wide","front"],a:1,en:"85/100 is a high score",ar:'٨٥ من ١٠٠ درجة مرتفعة → high',tr:'هل ٨٥ من ١٠٠ درجة مرتفعة جدًّا في هذا الاختبار؟'},
],
l4:[
  // Book 7 · Lesson 4 · Evaluation Exercises (EE-19 → EE-24)
  // Exercise G — read the question, choose the best answer
  {q:"Those flowers are very _______.",o:["narrow","pretty","easy","fast"],a:1,en:"flowers look nice → pretty",ar:'الزهور جميلة → pretty',tr:'تلك الزهور جميلة جدًّا.'},
  {q:"Couches are the same as _______.",o:["armchairs","lamps","sofas","bookcases"],a:2,en:"couch = sofa",ar:'الأريكة (couch) = sofa',tr:'الأرائك (couches) هي نفسها الـ sofas.'},
  {q:"Which _______ are the forks in?",o:["stove","oven","refrigerator","drawer"],a:3,en:"forks are kept in a drawer",ar:'الشوك تُحفظ في الدُّرج → drawer',tr:'في أيّ دُرج توجد الشوك؟'},
  {q:"We cook eggs on the _______.",o:["stove","pot","sink","kitchen"],a:0,en:"cook on a stove",ar:'نطهو على الموقد → stove',tr:'نطهو البيض على الموقد.'},
  {q:"We can keep these new dishes in the _______ next to the sink.",o:["cabinet","pot","drapes","fan"],a:0,en:"dishes go in a cabinet",ar:'نحفظ الصحون في الخِزانة → cabinet',tr:'نحفظ هذه الصحون في الخِزانة بجوار الحوض.'},
  {q:"Jackie made new _______ for the window.",o:["furniture","fans","drawers","curtains"],a:3,en:"for the window → curtains",ar:'للنافذة → ستائر curtains',tr:'صنعت جاكي ستائر جديدة للنافذة.'},
  {q:"The food isn't cold because John turned off the _______.",o:["kitchen","sink","refrigerator","faucet"],a:2,en:"keeps food cold → refrigerator",ar:'يحفظ الطعام باردًا → الثلّاجة',tr:'الطعام ليس باردًا لأن جون أطفأ الثلّاجة.'},
  {q:"Put the dishes in the _______, and we'll wash them later.",o:["sink","stove","drawer","microwave"],a:0,en:"wash dishes in a sink",ar:'نغسل الصحون في الحوض → sink',tr:'ضع الصحون في الحوض وسنغسلها لاحقًا.'},
  {q:"Please _______ the radio. I want to listen to some music.",o:["keep","plug in","climb","lay down"],a:1,en:"connect to power → plug in",ar:'يوصّل بالكهرباء → plug in',tr:'من فضلك وصّل الراديو بالكهرباء، أريد أن أستمع لبعض الموسيقى.'},
  {q:"Bob bought a new table and chairs. He likes his new _______.",o:["faucet","plug","furniture","ceiling"],a:2,en:"table and chairs = furniture",ar:'طاولة وكراسي = أثاث furniture',tr:'اشترى بوب طاولة وكراسي جديدة. يحبّ أثاثه الجديد.'},
  {q:"Our family watches TV in the _______.",o:["living room","drawer","coffee table","refrigerator"],a:0,en:"watch TV in the living room",ar:'نشاهد التلفاز في غرفة المعيشة',tr:'عائلتنا تشاهد التلفاز في غرفة المعيشة.'},
  {q:"Can you put this book on the top _______?",o:["fan","sink","lamp","shelf"],a:3,en:"a book goes on a shelf",ar:'الكتاب يوضع على الرفّ → shelf',tr:'هل يمكنك وضع هذا الكتاب على الرفّ العلوي؟'},
  // Exercise D — adverbs of frequency
  {q:"Tom runs every single day. Tom _______ runs.",o:["seldom","never","always","sometimes"],a:2,en:"every day → always",ar:'كل يوم → always (دائمًا)',tr:'توم يجري كل يوم. توم يجري دائمًا.'},
  {q:"Jack and Jane take a vacation only once every three years. They _______ take a vacation.",o:["always","usually","seldom","often"],a:2,en:"almost never → seldom",ar:'يكاد لا → seldom (نادرًا)',tr:'جاك وجين يأخذان إجازة مرّة كل ثلاث سنوات. نادرًا ما يأخذان إجازة.'},
  // Exercise F — purpose (to / for)
  {q:"What do we use a stove for? — We use a stove _______ food.",o:["to cook","cooking","cook","cooked"],a:0,en:"purpose → to + verb",ar:'الغرض → to + مصدر (to cook)',tr:'فيمَ نستخدم الموقد؟ — نستخدمه لطهي الطعام.'},
  {q:"I use glasses _______ reading books.",o:["to","for","with","by"],a:1,en:"for + -ing → for reading",ar:'for + فعل-ing → for reading',tr:'أستخدم النظّارة للقراءة.'},
  // Exercise E — lay / laid
  {q:"He _______ the books on the table every morning.",o:["lay","lays","laid","laying"],a:1,en:"He + present → lays",ar:'مع He في المضارع → lays',tr:'يضع الكتب على الطاولة كل صباح.'},
  {q:"Yesterday she _______ the paper on the desk.",o:["lays","laid","lay","laying"],a:1,en:"past → laid",ar:'الماضي → laid',tr:'أمس وضعت الورقة على المكتب.'},
  // Exercise B — pronoun reference
  {q:'"Mary runs every Monday with friends. They meet at a park." The word "They" refers to _______.',o:["the park","Mary and her friends","the town","Monday"],a:1,en:"They → Mary and her friends",ar:'They تعود على ماري وأصدقائها',tr:'الضمير They يعود على ماري وأصدقائها.'},
  // Exercise I — topic / main idea
  {q:'"We can learn about countries, foods, music, and people from travel." The main idea is _______.',o:["Travel is only for vacations.","We can learn many different things from travel.","Music is the best subject.","Countries are far away."],a:1,en:"the sentence that sums it up",ar:'الجملة الجامعة = الفكرة الرئيسية',tr:'الفكرة الرئيسية: يمكننا تعلّم أشياء كثيرة مختلفة من السفر.'},
]
};

// ═══════════════════════════════════════
// REVIEW — "مراجعة شاملة" (Lesson 5 review, Exercise K), spanning L1–L4
// ═══════════════════════════════════════
const REVIEW=[
  {q:"A diameter divides a circle into _______.",o:["tops","problems","halves","errors"],a:2,en:"a diameter cuts a circle in two → halves",ar:'القُطر يقسم الدائرة إلى نصفين → halves',tr:'القُطر يقسم الدائرة إلى نصفين.'},
  {q:"Open the _______ to go into the backyard.",o:["shape","gate","drawer","cabinet"],a:1,en:"a fence opening → gate",ar:'مدخل السياج → gate (البوّابة)',tr:'افتح البوّابة لتدخل الفناء الخلفي.'},
  {q:"The sun is much _______ than the moon.",o:["nearer","larger","nearest","largest"],a:1,en:"comparison with 'than' → larger",ar:'مقارنة مع than → larger (أكبر)',tr:'الشمس أكبر بكثير من القمر.'},
  {q:"A triangle has three _______.",o:["sides","shapes","squares","circles"],a:0,en:"a triangle has three sides",ar:'المثلّث له ثلاثة أضلاع → sides',tr:'المثلّث له ثلاثة أضلاع.'},
  {q:"A line from the center of a circle to its edge is the circle's _______.",o:["front","shape","radius","side"],a:2,en:"center → edge = radius",ar:'من المركز إلى الحافّة → radius (نصف القُطر)',tr:'الخط من مركز الدائرة إلى حافّتها هو نصف القُطر.'},
  {q:"Drapes are like _______.",o:["rugs","chairs","curtains","drawers"],a:2,en:"drapes = heavy curtains",ar:'drapes تشبه الستائر → curtains',tr:'الستائر الثقيلة (drapes) تشبه الستائر (curtains).'},
  {q:"The teacher is writing on the board in the _______ of the room.",o:["front","opposite","bottom","half"],a:0,en:"board is at the front",ar:'السبورة في مقدّمة الغرفة → front',tr:'المعلّم يكتب على السبورة في مقدّمة الغرفة.'},
  {q:"It's hot in here. — Okay, I'll turn on the _______.",o:["stove","refrigerator","television","fan"],a:3,en:"cools the room → fan",ar:'يبرّد الغرفة → fan (المروحة)',tr:'الجوّ حارّ هنا. — حسنًا، سأشغّل المروحة.'},
  {q:"This is a nice desk. — Yes, it has six large _______.",o:["books","carpets","drawers","errors"],a:2,en:"a desk has drawers",ar:'المكتب فيه أدراج → drawers',tr:'هذا مكتب جميل. — نعم، فيه ستة أدراج كبيرة.'},
  {q:"Did you buy a new couch for your apartment? — No, I don't need any new _______.",o:["grass","furniture","explanation","appliance"],a:1,en:"a couch is furniture",ar:'الأريكة من الأثاث → furniture',tr:'هل اشتريت أريكة جديدة لشقّتك؟ — لا، لا أحتاج أيّ أثاث جديد.'},
  {q:"Where is your brother's house? — It's on that _______ hill.",o:["low","rear","high","light"],a:2,en:"up on a hill → high",ar:'على تلّة مرتفعة → high',tr:'أين بيت أخيك؟ — إنه على تلك التلّة المرتفعة.'},
  {q:"I call my wife every night. I also talk to my wife _______.",o:["seldom","often","never","yesterday"],a:1,en:"every night → often",ar:'كل ليلة → often (كثيرًا)',tr:'أتّصل بزوجتي كل ليلة. أتحدّث مع زوجتي كثيرًا أيضًا.'},
];
EE.review=REVIEW;

// ═══════════════════════════════════════
// FINAL EXAM (الاختبار النهائي الشامل)
// كل أسئلة "اختبر" من الدروس 1-4 مجمّعة (نفس طريقة بقية الكتب)
// ═══════════════════════════════════════
const FINAL=dedupe_by_q([
  ...EE.l1,
  ...EE.l2,
  ...EE.l3,
  ...EE.l4,
]);
EE.final=FINAL;

// ═══════════════════════════════════════
// SPELLING — write from listening (by lesson)
// كلمات مختارة من مفردات كل درس
// ═══════════════════════════════════════
const SPELL_LESSONS=[
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 1 — الأشكال والخطوط',w:[
    {e:'circle',a:'دائرة',em:'⭕'},{e:'square',a:'مربّع',em:'⬜'},{e:'triangle',a:'مثلّث',em:'🔺'},
    {e:'rectangle',a:'مستطيل',em:'▭'},{e:'angle',a:'زاوية',em:'📐'},{e:'straight',a:'مستقيم',em:'📏'},
    {e:'narrow',a:'ضيّق',em:'▫️'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 2 — فهم الرياضيات',w:[
    {e:'divide',a:'يقسم',em:'➗'},{e:'multiply',a:'يضرب',em:'✖️'},{e:'subtract',a:'يطرح',em:'➖'},
    {e:'weight',a:'الوَزن',em:'⚖️'},{e:'radius',a:'نصف القُطر',em:'📏'},{e:'diameter',a:'القُطر',em:'↔️'},
    {e:'circumference',a:'المحيط',em:'⭕'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 3 — البيوت',w:[
    {e:'garage',a:'الكراج',em:'🚗'},{e:'fence',a:'السِّياج',em:'🧱'},{e:'grass',a:'العُشب',em:'🌱'},
    {e:'flower',a:'زهرة',em:'🌸'},{e:'river',a:'نهر',em:'🌊'},{e:'world',a:'العالَم',em:'🌐'},
    {e:'climb',a:'يتسلّق',em:'🧗'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 4 — داخل البيت',w:[
    {e:'furniture',a:'الأثاث',em:'🛋️'},{e:'cabinet',a:'خِزانة',em:'🗄️'},{e:'drawer',a:'دُرج',em:'📥'},
    {e:'refrigerator',a:'الثلّاجة',em:'🧊'},{e:'dishwasher',a:'غسّالة الصحون',em:'🧽'},
    {e:'toaster',a:'محمّصة الخبز',em:'🍞'},{e:'kitchen',a:'المطبخ',em:'🍽️'},
  ]},
];

// ═══════════════════════════════════════
// LISTENING — YouTube listening & reading quizzes (LangVox)
// ═══════════════════════════════════════
const YT_VIDEOS=[
  {id:'7e1IlBMn4TM',t:'Quiz A',s:'استماع وقراءة مع الحل'},
  {id:'_yfEa0ONRnc',t:'Quiz B',s:'استماع وقراءة مع الحل'},
  {id:'zO_KByxJk6E',t:'Quiz C',s:'استماع وقراءة مع الحل'},
];

// ═══════════════════════════════════════
// ROUTING MANIFEST — home + lesson + review + listening + mistake-review
// ═══════════════════════════════════════
const SCREENS=['home','lscreen','rscreen','ytscreen','fscreen','spscreen','mkscreen'];
const SCREEN_NAMES={home:'الرئيسية',lscreen:'درس',rscreen:'المراجعة',ytscreen:'الاستماع',fscreen:'الاختبار النهائي',spscreen:'الإملاء',mkscreen:'مراجعة الأخطاء'};
