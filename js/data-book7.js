// ═══════════════════════════════════════
// DATA — BOOK 7
// Lesson 1 (Shapes and Lines) — vocab, grammar, word-order, per-lesson quiz.
// Built lesson by lesson; more lessons get appended here later.
// ═══════════════════════════════════════
const BOOK_ID='book7';

const LESSON_META={
  l1:{ico:'🔷',title:'Lesson 1 — Shapes and Lines',sub:'الأشكال والخطوط والمقارنة'},
  l2:{ico:'🧮',title:'Lesson 2 — Understanding Math',sub:'العمليات الحسابية والمقارنة والفهم القرائي'}
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
]
};

// ═══════════════════════════════════════
// ROUTING MANIFEST — home + lesson + mistake-review screens
// ═══════════════════════════════════════
const SCREENS=['home','lscreen','mkscreen'];
const SCREEN_NAMES={home:'الرئيسية',lscreen:'درس',mkscreen:'مراجعة الأخطاء'};
