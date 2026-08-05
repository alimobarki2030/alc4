// ═══════════════════════════════════════
// DATA — BOOK 8
// Lesson 1 (Getting directions) — vocab, grammar, word-order, per-lesson quiz.
// Built lesson by lesson; more lessons get appended here later.
// ═══════════════════════════════════════
const BOOK_ID='book8';

const LESSON_META={
  l1:{ico:'🧭',title:'Lesson 1 — Getting directions',sub:'الاتجاهات والإرشاد · المستقبل بـ BE going to · المقارنة'},
  l2:{ico:'🏋️',title:"Lesson 2 — Let's get in shape!",sub:'اللياقة والتمارين · الفعل + to · ضمائر الملكية'},
  l3:{ico:'📞',title:'Lesson 3 — Using the phone',sub:'استخدام الهاتف · المقارنة more/less · may/might · whom'}
};
const LESSON_KEYS=Object.keys(LESSON_META);

// ═══════════════════════════════════════
// VOCABULARY
// ═══════════════════════════════════════
const VOCAB={
l1:[
  // — الاتجاهات والطُّرق —
  {e:'direction',a:'اتجاه',em:'🧭'},
  {e:'directions',a:'إرشادات الطريق',em:'🧭'},
  {e:'north',a:'شمال',em:'⬆️'},
  {e:'south',a:'جنوب',em:'⬇️'},
  {e:'east',a:'شرق',em:'➡️'},
  {e:'west',a:'غرب',em:'⬅️'},
  {e:'straight (ahead)',a:'مستقيم إلى الأمام',em:'⏫'},
  {e:'corner',a:'الزاوية / الناصية',em:'📐'},
  {e:'block',a:'مربّع سكني (مسافة بين شارعين)',em:'🟦'},
  {e:'avenue',a:'جادّة (شارع كبير)',em:'🛣️'},
  {e:'road',a:'طريق',em:'🛣️'},
  {e:'highway',a:'طريق سريع',em:'🛣️'},
  {e:'freeway',a:'طريق حُرّ سريع',em:'🛣️'},
  {e:'exit',a:'مَخرج',em:'🚪'},
  {e:'mile',a:'ميل (1.6 كم)',em:'📏'},
  {e:'kilometer',a:'كيلومتر',em:'📏'},
  {e:'park',a:'حديقة عامّة',em:'🏞️'},
  {e:'ground',a:'الأرض',em:'🟫'},
  {e:'ice',a:'جليد',em:'🧊'},
  {e:'follow',a:'يتبع',em:'👣'},
  {e:'land',a:'تهبط (طائرة)',past:'landed',pa:'هبطت',em:'🛬'},
  {e:'take off',a:'يُقلع (يرتفع)',past:'took off',pa:'أقلع',em:'🛫'},
  {e:'turn (left/right)',a:'ينعطف (يسار/يمين)',em:'↩️'},
  {e:'take (a right/left)',a:'يأخذ (يمين/يسار)',em:'↪️'},
  {e:'grow',a:'ينمو',past:'grew',pa:'نما',em:'🌱'},
  {e:'fall (down)',a:'يسقط',past:'fell',pa:'سقط',em:'🍂'},
  {e:'freeze',a:'يتجمّد',past:'froze',pa:'تجمّد',em:'🥶'},
  // — الحرارة —
  {e:'temperature',a:'درجة الحرارة',em:'🌡️'},
  {e:'thermometer',a:'ميزان الحرارة',em:'🌡️'},
  {e:'degrees (°)',a:'درجات',em:'🌡️'},
  {e:'Fahrenheit (F)',a:'فهرنهايت',em:'🌡️'},
  {e:'Celsius (C) / centigrade',a:'مئوية',em:'🌡️'},
  // — المقارنة —
  {e:'good',a:'جيّد',em:'👍'},
  {e:'better',a:'أفضل',em:'⬆️'},
  {e:'best',a:'الأفضل',em:'🥇'},
  {e:'bad',a:'سيّئ',em:'👎'},
  {e:'worse',a:'أسوأ',em:'⬇️'},
  {e:'worst',a:'الأسوأ',em:'🚫'},
  // — الكتابة / علامات الترقيم —
  {e:'exclamation mark',a:'علامة التعجّب ( ! )',em:'❗'},
  {e:'quotation marks',a:'علامتا الاقتباس',em:'💬',icon:'quote'},
],
l2:[
  // — اللياقة والتمارين —
  {e:'exercise',a:'تمرين / يتمرّن',em:'🏋️'},
  {e:'workout',a:'تمرين رياضي',em:'💪'},
  {e:'work out',a:'يتمرّن',em:'🏋️'},
  {e:'gymnasium (gym)',a:'صالة رياضية',em:'🏟️'},
  {e:'push-up',a:'تمرين ضغط',em:'🤸'},
  {e:'sit-up',a:'تمرين بطن',em:'🧎'},
  {e:'fun',a:'متعة',em:'🎉'},
  {e:'free time',a:'وقت الفراغ',em:'🕹️'},
  {e:'watch',a:'ساعة يد',em:'⌚'},
  {e:'hit',a:'يصيب الهدف',past:'hit',pa:'أصاب',em:'🎯'},
  {e:'miss',a:'يُخطئ الهدف',em:'❌'},
  {e:'try (to)',a:'يحاول',past:'tried',pa:'حاول',em:'🔁'},
  {e:'forget (to)',a:'ينسى',past:'forgot',pa:'نسي',em:'🤔'},
  {e:'remember (to)',a:'يتذكّر',em:'🧠'},
  {e:'shut',a:'يُغلق',past:'shut',pa:'أغلق',em:'🚪'},
  {e:'have fun',a:'يستمتع',em:'😄'},
  {e:'have a good time',a:'يقضي وقتاً ممتعاً',em:'🥳'},
  {e:'get in shape',a:'يستعيد لياقته',em:'✅'},
  {e:'out of shape',a:'غير لائق بدنياً',em:'🚫'},
  {e:'in (good) shape',a:'بلياقة جيدة',em:'💯'},
  {e:'healthy',a:'صحّي',em:'🥗'},
  // — الصفات —
  {e:'beautiful',a:'جميل',em:'😍'},
  {e:'boring',a:'مُمِلّ',em:'😴'},
  {e:'difficult',a:'صعب',em:'😓'},
  {e:'exciting',a:'مثير / ممتع',em:'🤩'},
  {e:'interesting',a:'مشوّق',em:'🤓'},
  {e:'important',a:'مهم',em:'❗'},
  {e:'terrific',a:'رائع',em:'👍'},
  // — ضمائر الملكية —
  {e:'mine',a:'مِلكي',em:'👆'},
  {e:'yours',a:'مِلكك',em:'👉'},
  {e:'his',a:'مِلكه (لمذكّر)',em:'👨'},
  {e:'hers',a:'مِلكها',em:'👩'},
  {e:'its',a:'مِلكه (لغير العاقل)',em:'📦'},
  {e:'ours',a:'مِلكنا',em:'👥'},
  {e:'theirs',a:'مِلكهم',em:'👪'},
],
l3:[
  // — الهاتف —
  {e:'phone call',a:'مكالمة هاتفية',em:'📞'},
  {e:'make a phone call',a:'يُجري مكالمة',past:'made a phone call',pa:'أجرى مكالمة',em:'📞'},
  {e:'call (up)',a:'يتّصل',em:'📲'},
  {e:'operator',a:'عامل الهاتف (المشغّل)',em:'🧑‍💼'},
  {e:'pay phone',a:'هاتف عمومي بعملات',em:'☎️'},
  {e:'public phone',a:'هاتف عمومي',em:'📞'},
  {e:'coin',a:'عملة معدنية',em:'🪙'},
  {e:'change',a:'فكّة (نقود صغيرة)',em:'🪙'},
  {e:'slot',a:'فتحة العملة',em:'🎰'},
  {e:'deposit',a:'يُدخل العملة',em:'💰'},
  {e:'dial tone',a:'نغمة الاتصال',em:'🎵'},
  {e:'area code',a:'رمز المنطقة',em:'🔢'},
  {e:'phone book',a:'دليل الهاتف',em:'📓'},
  {e:'line',a:'الخط الهاتفي',em:'📈'},
  {e:'conversation',a:'محادثة',em:'💬'},
  {e:'bell',a:'جرس',em:'🔔'},
  {e:'ring',a:'يرنّ',past:'rang',pa:'رنّ',em:'🔔'},
  {e:'hang up',a:'يُغلق السماعة',past:'hung up',pa:'أغلق السماعة',em:'📴'},
  {e:'find',a:'يجد',past:'found',pa:'وجد',em:'🔍'},
  {e:'pay',a:'يدفع',past:'paid',pa:'دفع',em:'💵'},
  {e:'factory',a:'مصنع',em:'🏭'},
  {e:'person',a:'شخص',em:'🧍'},
  {e:'page',a:'صفحة',em:'📄'},
  // — الأفعال الناقصة (احتمال) —
  {e:'may',a:'قد / رُبّما',em:'🤔'},
  {e:'might',a:'قد / رُبّما (احتمال أضعف)',em:'🤷'},
  // — الصفات والمقارنة —
  {e:'busy',a:'مشغول (الخط)',em:'🔴'},
  {e:'cheap',a:'رخيص',em:'💸'},
  {e:'expensive',a:'غالٍ',em:'💎'},
  {e:'local',a:'محلي',em:'📍'},
  {e:'long distance',a:'بعيد المسافة',em:'🌐'},
  {e:'international',a:'دولي',em:'🌍'},
  {e:'more',a:'أكثر',em:'➕'},
  {e:'less',a:'أقل',em:'➖'},
  {e:'most',a:'الأكثر',em:'🔼'},
  {e:'least',a:'الأقل',em:'🔽'},
  {e:'whom',a:'مَن (للمفعول)',em:'❓'},
]
};

// ═══════════════════════════════════════
// GRAMMAR (قواعد)
// ═══════════════════════════════════════
const GRAMMAR={
l1:[
  {
    title:'The Future — BE going to', ar:'المستقبل بـ BE going to',
    rule:'للتحدّث عن المستقبل أو خطّة قادمة: (am/is/are) + going to + الفعل المجرّد.',
    parts:[
      {t:'I am going to …',d:'أنا + am. مثال: I am going to leave at 8:00. = سأغادر الساعة 8:00.'},
      {t:'He / She / It is going to …',d:'المفرد الغائب + is. مثال: She is going to land now. = ستهبط الآن.'},
      {t:'We / You / They are going to …',d:'الجمع + are. مثال: They are going to arrive at noon.'},
      {t:'الاختصارات',d:"I'm · He's · She's · It's · We're · You're · They're going to…"},
    ],
    check:{q:'The plane _______ going to land in one hour.',o:['am','is','are','be'],a:1,en:'the plane (it) → is going to',ar:'الطائرة (مفرد) → is going to'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'am/is/are',c:'v'},{t:'+',c:'p'},{t:'going to + verb',c:'k'}],
    compare:[
      {c1:'She leaves at 8:00.',c2:'She is going to leave at 8:00.',ar:'مستقبل → is going to'},
      {c1:'They arrive at noon.',c2:'They are going to arrive at noon.',ar:'جمع → are going to'},
    ],
    examples:[
      {s:"I'm going to grow tomatoes this summer.",tr:'سأزرع الطماطم هذا الصيف.',ar:'I am → I\'m going to',ok:true},
      {s:"The plane is going to take off in an hour.",tr:'ستُقلع الطائرة بعد ساعة.',ar:'the plane (it) → is going to',ok:true},
      {s:'They is going to eat at noon.',wrong:'is',right:'are',tr:'they جمع → are going to.',ok:false},
    ]
  },
  {
    title:'Negative — BE going to', ar:'النفي مع BE going to',
    rule:'للنفي نضع not بعد am/is/are: (am not / isn\'t / aren\'t) + going to + الفعل.',
    parts:[
      {t:"I'm not going to …",d:'أنا + am not. مثال: I\'m not going to buy a jacket.'},
      {t:"He / She / It isn't going to …",d:'المفرد + isn\'t. مثال: It isn\'t going to rain.'},
      {t:"We / You / They aren't going to …",d:'الجمع + aren\'t. مثال: We aren\'t going to leave now.'},
    ],
    check:{q:"It _______ going to rain today.",o:["not","isn't","aren't","am not"],a:1,en:"it → isn't going to",ar:'it (مفرد) → isn\'t going to'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:"am not/isn't/aren't",c:'n'},{t:'+',c:'p'},{t:'going to + verb',c:'v'}],
    compare:[
      {c1:'I am going to buy a sweater.',c2:"I'm not going to buy a sweater.",ar:'إثبات ↔ نفي'},
      {c1:'They are going to leave.',c2:"They aren't going to leave.",ar:'are → aren\'t'},
    ],
    examples:[
      {s:"I'm not going to cook lamb. I'm going to cook beef.",tr:'لن أطبخ لحم الخروف، سأطبخ لحم البقر.',ar:'am not = I\'m not',ok:true},
      {s:"Our plane isn't going to take off on time.",tr:'لن تُقلع طائرتنا في موعدها.',ar:'the plane → isn\'t',ok:true},
      {s:"They not going to swim.",wrong:'not',right:"aren't",tr:'لا بدّ من فعل الكينونة في النفي → aren\'t going to.',ok:false},
    ]
  },
  {
    title:'good / bad → better · worse · best · worst', ar:'المقارنة والتفضيل (شاذّة)',
    rule:'good وbad صفتان شاذّتان: للمقارنة بين اثنين نستخدم better/worse … than، وللأفضل/الأسوأ بين الجميع the best/the worst.',
    parts:[
      {t:'good → better → the best',d:'جيّد ← أفضل ← الأفضل. مثال: Kate\'s score is better than Lee\'s.'},
      {t:'bad → worse → the worst',d:'سيّئ ← أسوأ ← الأسوأ. مثال: Bob\'s score is the worst of all.'},
      {t:'better / worse + than',d:'عند المقارنة بين اثنين نتبعها بـ than (مِن).'},
      {t:'the best / the worst',d:'للأعلى أو الأدنى بين مجموعة نضع the قبلها.'},
    ],
    check:{q:'Robin got 100. That is _______ score of all.',o:['better','the best','good','worse'],a:1,en:'highest of all → the best',ar:'الأعلى بين الجميع → the best'},
    compare:[
      {c1:'Kate: 98, Lee: 93.',c2:"Kate's score is better than Lee's.",ar:'مقارنة بين اثنين → better than'},
      {c1:'Bob: 58 (lowest).',c2:"Bob's score is the worst.",ar:'الأدنى بين الجميع → the worst'},
    ],
    examples:[
      {s:"Jet Stream Air is better than Silver Air.",tr:'طيران جِت ستريم أفضل من طيران سِلفر.',ar:'better + than',ok:true},
      {s:"Blue Sky is the best of all the airlines.",tr:'بلو سكاي هو الأفضل بين كل شركات الطيران.',ar:'the best of all',ok:true},
      {s:"My score is more good than yours.",wrong:'more good',right:'better',tr:'good شاذّة: لا نقول more good بل better.',ok:false},
    ]
  }
],
l2:[
  {
    title:'Verb + to + base verb', ar:'الفعل + to + مصدر',
    rule:'بعد أفعال مثل want · need · try · like · begin · learn · remember · forget نضع to ثم الفعل المجرّد.',
    parts:[
      {t:'want / need + to + verb',d:'مثال: I want to learn. = أريد أن أتعلّم. · She needs to rest. = تحتاج أن ترتاح.'},
      {t:'try / like / begin + to + verb',d:'مثال: He tried to call. = حاول أن يتّصل. · I like to swim. = أحبّ أن أسبح.'},
      {t:'remember / forget + to + verb',d:'مثال: Remember to lock the door. = تذكّر أن تُغلق الباب.'},
    ],
    check:{q:'Don\'t forget _______ the windows.',o:['shut','to shut','shutting','shuts'],a:1,en:'forget + to + verb',ar:'بعد forget نضع to + الفعل → to shut'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'verb (want/need…)',c:'v'},{t:'+',c:'p'},{t:'to + base verb',c:'k'}],
    compare:[
      {c1:'I want a new watch.',c2:'I want to buy a new watch.',ar:'أضفنا to + فعل'},
      {c1:'She tried hard.',c2:'She tried to call you.',ar:'try + to + verb'},
    ],
    examples:[
      {s:'I forgot to lock the door last night.',tr:'نسيت أن أُغلق الباب ليلة أمس.',ar:'forgot + to + lock',ok:true},
      {s:'Mary wants to learn Chinese.',tr:'ماري تريد أن تتعلّم الصينية.',ar:'want + to + learn',ok:true},
      {s:'He needs buy a new car.',wrong:'needs buy',right:'needs to buy',tr:'بعد need لا بدّ من to → needs to buy.',ok:false},
    ]
  },
  {
    title:'Possessive Pronouns', ar:'ضمائر الملكية',
    rule:'ضمير الملكية يحلّ محلّ (صفة الملكية + الاسم) فلا نكرّر الاسم: mine · yours · his · hers · ours · theirs.',
    parts:[
      {t:'mine = my + noun',d:'This is my book → This book is mine. = هذا الكتاب مِلكي.'},
      {t:'yours / his / hers',d:'How\'s your coffee? Mine\'s good. How\'s yours? · That car is hers.'},
      {t:'ours / theirs',d:'This house is ours. = هذا البيت مِلكنا. · That one is theirs. = ذاك مِلكهم.'},
    ],
    check:{q:'My coffee is good. How is _______?',o:['your','yours','you','yes'],a:1,en:'possessive pronoun → yours',ar:'ضمير ملكية يحلّ محلّ (your + coffee) → yours'},
    compare:[
      {c1:'This is my pen.',c2:'This pen is mine.',ar:'my + pen → mine'},
      {c1:'That is her bag.',c2:'That bag is hers.',ar:'her + bag → hers'},
    ],
    examples:[
      {s:"Is this your car? — No, it's not. It's ours.",tr:'هل هذه سيارتك؟ — لا، إنها مِلكنا.',ar:'ours = our car',ok:true},
      {s:'She does hers first, and I do mine later.',tr:'هي تؤدّي واجبها أولاً، وأنا أؤدّي واجبي لاحقاً.',ar:'hers / mine',ok:true},
      {s:'This book is my.',wrong:'my',right:'mine',tr:'في نهاية الجملة نستخدم ضمير الملكية → mine.',ok:false},
    ]
  }
],
l3:[
  {
    title:'Comparative & Superlative — more / less / most / least', ar:'المقارنة والتفضيل للصفات الطويلة',
    rule:'الصفات الطويلة (مثل expensive · exciting · difficult) لا نضيف لها -er/-est، بل نستخدم more/less للمقارنة، و the most/the least للتفضيل.',
    parts:[
      {t:'more + adjective + than',d:'أكثر … مِن. مثال: A car is more expensive than a bike.'},
      {t:'less + adjective + than',d:'أقل … مِن. مثال: A bike is less expensive than a car.'},
      {t:'the most + adjective',d:'الأكثر. مثال: A plane is the most expensive vehicle.'},
      {t:'the least + adjective',d:'الأقل. مثال: A bike is the least expensive vehicle.'},
    ],
    check:{q:'A long distance call is _______ expensive than a local call.',o:['more','most','less','the most'],a:0,en:'more + adj + than',ar:'أغلى من → more expensive than'},
    formula:[{t:'more/less',c:'v'},{t:'+',c:'p'},{t:'adjective',c:'s'},{t:'+',c:'p'},{t:'than',c:'k'}],
    compare:[
      {c1:'A car is fast.',c2:'A car is more expensive than a bike.',ar:'صفة طويلة → more … than'},
      {c1:'A bike is cheap.',c2:'A bike is the least expensive vehicle.',ar:'الأقل → the least'},
    ],
    examples:[
      {s:'A big city is more exciting than a town.',tr:'المدينة الكبيرة أكثر إثارة من البلدة.',ar:'more exciting than',ok:true},
      {s:'A local call is the least expensive.',tr:'المكالمة المحلية هي الأقل تكلفة.',ar:'the least expensive',ok:true},
      {s:'This problem is expensiver than that one.',wrong:'expensiver',right:'more expensive',tr:'الصفة الطويلة لا تأخذ -er، بل more expensive.',ok:false},
    ]
  },
  {
    title:'Possibility — may / might', ar:'الاحتمال: may / might',
    rule:'للتعبير عن احتمال (لسنا متأكّدين 100%) نستخدم may أو might + الفعل المجرّد. might غالباً احتمال أضعف قليلاً.',
    parts:[
      {t:'may / might + verb',d:'مثال: It may rain. = قد تُمطر. · He might not be home. = قد لا يكون بالبيت.'},
      {t:'may not / might not',d:'للنفي: We may not have time. = قد لا يكون لدينا وقت.'},
    ],
    check:{q:'Look at the dark clouds. I think it _______ rain.',o:['might','must','is','has'],a:0,en:'possibility → might',ar:'احتمال المطر → might rain'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'may / might',c:'v'},{t:'+',c:'p'},{t:'base verb',c:'k'}],
    compare:[
      {c1:'It is raining now.',c2:'It might rain later.',ar:'حقيقة ↔ احتمال'},
      {c1:'He is home.',c2:'He may not be home.',ar:'may not = احتمال النفي'},
    ],
    examples:[
      {s:"I'm tired. I may go to bed early tonight.",tr:'أنا متعب. قد أنام مبكراً الليلة.',ar:'may = احتمال',ok:true},
      {s:"He doesn't answer. He might not be home.",tr:'لا يردّ. قد لا يكون في البيت.',ar:'might not = احتمال النفي',ok:true},
      {s:'I think it will maybe rain.',wrong:'will maybe',right:'might',tr:'للاحتمال نستخدم might لا "will maybe".',ok:false},
    ]
  },
  {
    title:'Questions with whom', ar:'السؤال بـ whom',
    rule:'نستخدم whom للسؤال عن المفعول (الشخص الذي يقع عليه الفعل)، وغالباً بعد حرف جرّ: With whom…? / To whom…?',
    parts:[
      {t:'whom = مفعول',d:'who للفاعل، whom للمفعول. مثال: Whom did you call? = مَن اتّصلت به؟'},
      {t:'preposition + whom',d:'مثال: With whom am I speaking? = مع مَن أتحدّث؟'},
    ],
    check:{q:'With _______ am I speaking?',o:['who','whom','whose','what'],a:1,en:'after preposition → whom',ar:'بعد حرف الجرّ with → whom'},
    compare:[
      {c1:'Who called you? (فاعل)',c2:'Whom did you call? (مفعول)',ar:'who فاعل · whom مفعول'},
    ],
    examples:[
      {s:'With whom am I speaking?',tr:'مع مَن أتحدّث؟',ar:'preposition + whom',ok:true},
      {s:'Whom did he see at the party?',tr:'مَن رأى في الحفلة؟',ar:'whom = المفعول',ok:true},
      {s:'With who did you go?',wrong:'who',right:'whom',tr:'بعد حرف الجرّ نستخدم whom لا who.',ok:false},
    ]
  }
]
};

// ═══════════════════════════════════════
// WO — رتّب الجملة (word order)
// ═══════════════════════════════════════
const WO={
l1:[
  {words:['Take','Highway','35','north','for','15','miles'],ans:'Take Highway 35 north for 15 miles.',tr:'اسلك الطريق السريع 35 شمالاً لمسافة 15 ميلاً.',ar:'إعطاء الاتجاهات'},
  {words:['Go','straight','ahead','for','two','blocks'],ans:'Go straight ahead for two blocks.',tr:'اتّجه مستقيماً إلى الأمام مربّعين سكنيّين.',ar:'straight ahead'},
  {words:['Take','a','right','at','the','corner'],ans:'Take a right at the corner.',tr:'انعطف يميناً عند الزاوية.',ar:'take a right'},
  {words:["I'm",'going','to','leave','at','8:00'],ans:"I'm going to leave at 8:00.",tr:'سأغادر الساعة 8:00.',ar:'BE going to'},
  {words:['The','plane','is','going','to','land','now'],ans:'The plane is going to land now.',tr:'ستهبط الطائرة الآن.',ar:'is going to + land'},
  {words:["Kate's",'score','is','better','than',"Lee's"],ans:"Kate's score is better than Lee's.",tr:'درجة كيت أفضل من درجة لي.',ar:'better than'},
  {words:['Water','freezes','at','32','degrees','Fahrenheit'],ans:'Water freezes at 32 degrees Fahrenheit.',tr:'يتجمّد الماء عند 32 درجة فهرنهايت.',ar:'freeze / degrees'},
],
l2:[
  {words:['I','forgot','to','lock','the','door','last','night'],ans:'I forgot to lock the door last night.',tr:'نسيت أن أُغلق الباب ليلة أمس.',ar:'forget + to + verb'},
  {words:['I','want','to','visit','my','brother','next','week'],ans:'I want to visit my brother next week.',tr:'أريد أن أزور أخي الأسبوع القادم.',ar:'want + to'},
  {words:['I','need','to','study','my','English','tonight'],ans:'I need to study my English tonight.',tr:'أحتاج أن أذاكر الإنجليزية الليلة.',ar:'need + to'},
  {words:['I','learned','to','play','tennis','last','year'],ans:'I learned to play tennis last year.',tr:'تعلّمت أن ألعب التنس العام الماضي.',ar:'learn + to'},
  {words:["I'll",'try','to','do','my','homework','tonight'],ans:"I'll try to do my homework tonight.",tr:'سأحاول أن أُنجز واجبي الليلة.',ar:'try + to'},
  {words:['This','book','is','mine'],ans:'This book is mine.',tr:'هذا الكتاب مِلكي.',ar:'ضمير الملكية mine'},
  {words:['That','car','is','hers'],ans:'That car is hers.',tr:'تلك السيارة مِلكها.',ar:'ضمير الملكية hers'},
],
l3:[
  {words:['A','long','distance','call','is','more','expensive','than','a','local','call'],ans:'A long distance call is more expensive than a local call.',tr:'المكالمة البعيدة أغلى من المكالمة المحلية.',ar:'more … than'},
  {words:['Dallas','is','less','windy','than','Chicago'],ans:'Dallas is less windy than Chicago.',tr:'دالاس أقل رياحاً من شيكاغو.',ar:'less … than'},
  {words:['He','buys','the','most','expensive','clothes'],ans:'He buys the most expensive clothes.',tr:'يشتري أغلى الملابس.',ar:'the most'},
  {words:['I','think','it','might','rain','tonight'],ans:'I think it might rain tonight.',tr:'أظنّ أنها قد تُمطر الليلة.',ar:'might = احتمال'},
  {words:['I','may','go','to','bed','early','tonight'],ans:'I may go to bed early tonight.',tr:'قد أنام مبكراً الليلة.',ar:'may = احتمال'},
  {words:['With','whom','am','I','speaking'],ans:'With whom am I speaking?',tr:'مع مَن أتحدّث؟',ar:'preposition + whom'},
  {words:['Please','deposit','the','coins','in','the','slot'],ans:'Please deposit the coins in the slot.',tr:'من فضلك أدخل العملات في الفتحة.',ar:'deposit / slot'},
]
};

// ═══════════════════════════════════════
// EE — "اختبر" (lesson quiz, multiple choice)
// المصدر: أسئلة التقييم الرسمية (Exercise H) + الاستنتاج + المقارنة
// ═══════════════════════════════════════
const EE={
l1:[
  // — Evaluation Exercise H (الرسمية) —
  {q:"North, south, east, and west are _______.",o:["opposites","directions","degrees","temperatures"],a:1,en:"N/S/E/W are directions",ar:'الجهات الأربع → directions (اتجاهات)',tr:'الشمال والجنوب والشرق والغرب اتجاهات.'},
  {q:"A _______ of 32°F is the same as 0°C.",o:["comma","direction","thermometer","temperature"],a:3,en:"32°F = 0°C is a temperature",ar:'32 فهرنهايت = صفر مئوية → درجة حرارة',tr:'درجة حرارة 32 فهرنهايت تساوي صفر مئوية.'},
  {q:"Some _______ show both Fahrenheit and Celsius.",o:["thermometers","blocks","corners","exclamations"],a:0,en:"instrument that shows temperature → thermometer",ar:'أداة قياس الحرارة → thermometer',tr:'بعض موازين الحرارة تُظهر الفهرنهايت والمئوية معاً.'},
  {q:"Today, the temperature is below 20°F. I can see _______ on the ground.",o:["glass","snow","water","degrees"],a:1,en:"below freezing → snow",ar:'أقل من التجمّد → ثلج (snow)',tr:'اليوم درجة الحرارة أقل من 20 فهرنهايت. أرى ثلجاً على الأرض.'},
  {q:"People like to go to the park because they can see _______.",o:["soldiers and barracks","books and libraries","grass and trees","vehicles and garages"],a:2,en:"in a park → grass and trees",ar:'في الحديقة → عُشب وأشجار',tr:'يحبّ الناس الذهاب إلى الحديقة لأنهم يرون العُشب والأشجار.'},
  {q:"A thermometer shows the temperature in _______.",o:["miles","blocks","degrees","years"],a:2,en:"temperature is measured in degrees",ar:'الحرارة تُقاس بالدرجات → degrees',tr:'يُظهر ميزان الحرارة درجة الحرارة بالدرجات.'},
  {q:"Walk _______ for two blocks to Jones Street.",o:["straight","some","curved","opposite"],a:0,en:"walk straight ahead",ar:'امشِ مستقيماً → straight',tr:'امشِ مستقيماً مربّعين سكنيّين حتى شارع جونز.'},
  {q:"It's very dry this summer. _______ need water to grow.",o:["Buildings","Dishes","Shoes","Plants"],a:3,en:"things that grow → plants",ar:'ما ينمو ويحتاج ماءً → النباتات',tr:'الصيف جافّ جداً. تحتاج النباتات إلى الماء لتنمو.'},
  {q:"I want to take this road. _______",o:["It is the shortest.","It's the cheapest.","It doesn't work.","It's nice to sit on."],a:0,en:"choose a road because it's shortest",ar:'نختار الطريق لأنه الأقصر → the shortest',tr:'أريد سلوك هذا الطريق. إنه الأقصر.'},
  {q:"_______ come to my house tomorrow night?",o:["Are you going to","To you are going","Are you going","You to are going"],a:0,en:"question with BE going to",ar:'سؤال بـ BE going to → Are you going to',tr:'هل ستأتي إلى بيتي ليلة الغد؟'},
  {q:"You can walk to the post office. Walk straight ahead for 4 _______.",o:["inches","blocks","degrees","freeways"],a:1,en:"distance in a town → blocks",ar:'المسافة في المدينة تُقاس بالمربّعات → blocks',tr:'يمكنك المشي إلى مكتب البريد. امشِ مستقيماً أربعة مربّعات.'},
  {q:"Our plane takes off from San Antonio at 2:00 and _______ in Chicago at 4:30.",o:["follows","takes","lands","falls"],a:2,en:"a plane lands",ar:'الطائرة تهبط → lands',tr:'تُقلع طائرتنا من سان أنطونيو الساعة 2:00 وتهبط في شيكاغو الساعة 4:30.'},
  {q:"I need to go to the library. Can you give me _______?",o:["miles","degrees","directions","roads"],a:2,en:"ask for directions",ar:'نطلب الإرشادات → directions',tr:'أريد الذهاب إلى المكتبة. هل يمكنك أن تعطيني الإرشادات؟'},
  {q:"Take this highway for 10 miles. Get off at the _______ to Jefferson Street.",o:["block","park","mile","exit"],a:3,en:"leave a highway at the exit",ar:'نغادر الطريق السريع من المَخرج → exit',tr:'اسلك هذا الطريق السريع 10 أميال، واخرج من مَخرج شارع جيفرسون.'},
  // — Reading: Making inferences (الاستنتاج) —
  {q:"I studied last night, and I think I'll get a good score today. — This means:",o:["You're going to lunch.","You'll play football.","You'll have a test today.","You're doing homework."],a:2,en:"studied + good score → a test",ar:'ذاكر + درجة جيّدة → عنده اختبار اليوم',tr:'ذاكرتُ ليلة أمس وأظنّ أني سأحصل على درجة جيّدة اليوم. → عندك اختبار اليوم.'},
  {q:"Mr. and Mrs. White got their traveler's checks, and now they're leaving. — This means:",o:["They're staying at a hospital.","They're going on a trip.","They're going to the bank.","They're driving a new car."],a:1,en:"traveler's checks → a trip",ar:'شيكات سياحية → ذاهبان في رحلة',tr:'أخذ السيد والسيدة وايت شيكاتهما السياحية والآن يغادران. → ذاهبان في رحلة.'},
  {q:"Class starts at 8:30 a.m., and you're late! — This means:",o:["It's after 8:30 a.m.","It's 7 in the morning.","It's 5 o'clock.","It's 8:25 a.m."],a:0,en:"late for 8:30 → after 8:30",ar:'متأخّر عن 8:30 → الوقت بعد 8:30',tr:'يبدأ الصفّ 8:30 صباحاً وأنت متأخّر! → الوقت بعد 8:30.'},
  {q:"Joe put on a heavy coat, a hat, and gloves, and left the building. — The season is:",o:["summer","winter","spring","fall"],a:1,en:"heavy coat + gloves → winter",ar:'معطف ثقيل وقفازات → الشتاء',tr:'ارتدى جو معطفاً ثقيلاً وقبّعة وقفازات وخرج. → الفصل شتاء.'},
  {q:"My friend Maria is from Spain, and she speaks two languages. — She speaks:",o:["English and Arabic","French, English, and Spanish","only French and English","English and Spanish"],a:3,en:"from Spain + two languages → English and Spanish",ar:'من إسبانيا + لغتان → الإنجليزية والإسبانية',tr:'صديقتي ماريا من إسبانيا وتتحدّث لغتين. → الإنجليزية والإسبانية.'},
  {q:"The Johnsons left the store with a couch, an armchair, a coffee table, and two end tables. — They:",o:["bought a new car","needed new clothes","needed living room furniture","went to eat dinner"],a:2,en:"couch + armchair + tables → living room furniture",ar:'أريكة وطاولات → أثاث غرفة معيشة',tr:'خرج آل جونسون من المتجر بأريكة وكرسيّ وطاولة قهوة وطاولتين جانبيّتين. → احتاجوا أثاث غرفة المعيشة.'},
  {q:"For lunch today, Sam ate two sandwiches, three pieces of chicken, and some salad. — This means:",o:["He had a big breakfast.","He was very hungry.","He didn't eat much.","He wasn't hungry."],a:1,en:"ate a lot → very hungry",ar:'أكل كثيراً → كان جائعاً جداً',tr:'في الغداء أكل سام ساندويتشين وثلاث قطع دجاج وبعض السلطة. → كان جائعاً جداً.'},
  {q:"Sally bought flour, butter, sugar, and chocolate at the store. — She:",o:["wants to make soup","wants to make a sandwich","didn't eat breakfast","wants to make cookies"],a:3,en:"flour + sugar + chocolate → cookies",ar:'طحين وسكّر وشوكولاتة → تريد صنع كوكيز',tr:'اشترت سالي طحيناً وزبدةً وسكّراً وشوكولاتة. → تريد صنع كوكيز.'},
  // — Grammar: comparison with test scores (المقارنة) —
  {q:"Robin has 100. That is _______ score of all.",o:["better","good","the best","worse"],a:2,en:"highest of all → the best",ar:'الأعلى بين الجميع → the best',tr:'حصل روبن على 100. تلك هي أفضل درجة على الإطلاق.'},
  {q:"Kate got 98 and Lee got 93. Kate's score is _______ Lee's.",o:["worse than","the best","better than","the worst"],a:2,en:"98 > 93 → better than",ar:'98 أعلى من 93 → better than',tr:'حصلت كيت على 98 ولي على 93. درجة كيت أفضل من درجة لي.'},
  {q:"Bob got 58 — the lowest. Bob's score is _______.",o:["the best","better","the worst","good"],a:2,en:"lowest of all → the worst",ar:'الأدنى بين الجميع → the worst',tr:'حصل بوب على 58، وهي الأدنى. درجة بوب هي الأسوأ.'},
  {q:"Tina got 62 and Scott got 83. Tina's score is _______ Scott's.",o:["better than","worse than","the best","good"],a:1,en:"62 < 83 → worse than",ar:'62 أقل من 83 → worse than',tr:'حصلت تينا على 62 وسكوت على 83. درجة تينا أسوأ من درجة سكوت.'},
  {q:"We're going to finish _______ time.",o:["in","at","on","for"],a:2,en:"on time = في الموعد",ar:'في الموعد → on time',tr:'سننهي العمل في الموعد.'},
  {q:"Highway 37 _______ its number to 281 when you follow it north.",o:["changes","lands","grows","falls"],a:0,en:"the number changes",ar:'يتغيّر الرقم → changes',tr:'يتغيّر رقم الطريق السريع 37 إلى 281 عندما تتبعه شمالاً.'},
],
l2:[
  // — Verb + to + base verb (Exercise F الرسمية) —
  {q:"The baseball game started late. They didn't _______ to play before 8:30 p.m.",o:["begin","remember","forget","rent"],a:0,en:"didn't begin to play",ar:'بدأ اللعب → begin (didn\'t begin to play)',tr:'بدأت مباراة البيسبول متأخّرة. لم يبدؤوا اللعب قبل 8:30 مساءً.'},
  {q:"Sgt Johnson doesn't _______ buy a new car, but he wants that beautiful red one.",o:["need","to need","need to","to need to"],a:2,en:"doesn't need to + verb",ar:'لا يحتاج أن → need to (need + to + verb)',tr:'الرقيب جونسون لا يحتاج أن يشتري سيارة جديدة، لكنه يريد تلك الحمراء الجميلة.'},
  {q:"Sam said, \"Please don't _______ to turn off the lights when you leave.\"",o:["try","forget","remember","want"],a:1,en:"don't forget to turn off",ar:'لا تنسَ أن → forget (don\'t forget to…)',tr:'قال سام: «من فضلك لا تنسَ أن تُطفئ الأنوار عند مغادرتك».'},
  {q:"Do you know how to play tennis? — No, I _______ to learn.",o:["want","begin","forget","miss"],a:0,en:"want to learn",ar:'أريد أن أتعلّم → want to',tr:'هل تعرف أن تلعب التنس؟ — لا، أريد أن أتعلّم.'},
  {q:"Your shirt is very dirty. — I know. I _______ to put on a clean one.",o:["try","need","forget","hit"],a:1,en:"need to put on",ar:'أحتاج أن ألبس → need to',tr:'قميصك متّسخ جداً. — أعرف، أحتاج أن ألبس واحداً نظيفاً.'},
  {q:"When are you going to study? — I'll _______ to study after dinner tonight.",o:["begin","miss","shut","forget"],a:0,en:"begin to study",ar:'سأبدأ أن أذاكر → begin to',tr:'متى ستذاكر؟ — سأبدأ المذاكرة بعد العشاء الليلة.'},
  {q:"Bob likes _______ swim in the summer.",o:["to","for","at","on"],a:0,en:"like + to + verb",ar:'بعد like نضع to → to swim',tr:'بوب يحبّ أن يسبح في الصيف.'},
  // — Possessive pronouns (Exercise D الرسمية) —
  {q:"How's your food? — Terrific! How's _______? — Mine's okay.",o:["your","yours","you","hers"],a:1,en:"possessive pronoun → yours",ar:'كيف حال طعامك؟ → yours (طعامك)',tr:'كيف طعامك؟ — رائع! وكيف طعامُك أنت؟ — طعامي جيّد.'},
  {q:"Ken: Here's your car, but where's _______? Bob: There's yours, near the barracks.",o:["my","mine","me","its"],a:1,en:"where is my car → mine",ar:'أين سيارتي → mine',tr:'كين: هذه سيّارتك، لكن أين سيّارتي؟ بوب: ها هي سيّارتك قرب الثكنة.'},
  {q:"Sam likes his new teacher, but Jan and I don't like _______.",o:["our","ours","us","theirs"],a:1,en:"our teacher → ours",ar:'معلّمنا نحن → ours',tr:'سام يحبّ معلّمه الجديد، لكنّ جان وأنا لا نحبّ معلّمنا.'},
  {q:"Is John going in our car? — No, he's driving _______.",o:["his","him","he","hers"],a:0,en:"John's car → his",ar:'سيارته هو → his',tr:'هل سيذهب جون في سيّارتنا؟ — لا، إنه يقود سيّارته.'},
  {q:"This house is ours. I thought _______ was the yellow one, said Ned about the Andersons.",o:["their","theirs","them","hers"],a:1,en:"the Andersons' house → theirs",ar:'بيت آل أندرسون → theirs',tr:'هذا البيت مِلكنا. قال نِد عن آل أندرسون: ظننت أن بيتهم هو الأصفر.'},
  // — Inference (Exercise G الرسمية) —
  {q:"Sally drank some water. This means:",o:["She was hungry.","She was thirsty.","She was angry.","She was tired."],a:1,en:"drank water → thirsty",ar:'شربت ماءً → كانت عطشى',tr:'شربت سالي بعض الماء. → كانت عطشى.'},
  {q:"Greg eats an apple every day. This means:",o:["He needs a doctor.","He likes all fruit.","He buys a lot of apples.","He needs more money."],a:2,en:"apple every day → buys a lot",ar:'تفّاحة كل يوم → يشتري كثيراً من التفّاح',tr:'جريج يأكل تفّاحة كل يوم. → يشتري الكثير من التفّاح.'},
  {q:"Terry lives in the barracks. This means:",o:["He bought a new house.","He's in the military.","He eats a lot of food.","He has a lot of money."],a:1,en:"barracks → military",ar:'يسكن الثكنة → في الجيش',tr:'تيري يسكن في الثكنة. → إنه في الجيش.'},
  {q:"Mary called a travel agent and made a reservation. This means:",o:["She's going to a restaurant.","She can't pay for a trip.","She works for a travel agent.","She's going to take a trip."],a:3,en:"reservation → a trip",ar:'حجز عبر وكيل سفر → ستسافر',tr:'اتّصلت ماري بوكيل سفر وحجزت. → ستقوم برحلة.'},
  // — Adjectives (Exercise J الرسمية) —
  {q:"Yesterday's movie was very _______. We loved it!",o:["boring","exciting","difficult","awful"],a:1,en:"loved it → exciting",ar:'أحببناه → مثير (exciting)',tr:'كان فيلم الأمس مثيراً جداً. أحببناه!'},
  {q:"John eats good food _______ healthy.",o:["to stay","staying","stay","for stay"],a:0,en:"purpose → to stay",ar:'الغرض: ليبقى → to stay',tr:'يأكل جون طعاماً جيّداً ليبقى بصحّة جيّدة.'},
],
l3:[
  // — Choose the best answer (Exercise E الرسمية · EE-16/17/18) —
  {q:"Steven wanted to make a phone call. He looked for a _______.",o:["pay phone","factory","local call","person"],a:0,en:"to make a call → pay phone",ar:'ليُجري مكالمة → هاتف عمومي (pay phone)',tr:'أراد ستيفن إجراء مكالمة، فبحث عن هاتف عمومي.'},
  {q:"Janice was in Dallas and needed to call her mother in Los Angeles. She made a _______.",o:["local call","long distance call","bell","nice person"],a:1,en:"another city → long distance",ar:'مدينة بعيدة → مكالمة بعيدة المسافة',tr:'كانت جانيس في دالاس واحتاجت الاتصال بأمها في لوس أنجلوس، فأجرت مكالمة بعيدة المسافة.'},
  {q:"The man put a quarter in the _______ and dialed the number.",o:["change","coin","slot","page"],a:2,en:"where the coin goes → slot",ar:'مكان إدخال العملة → الفتحة (slot)',tr:'وضع الرجل ربع دولار في الفتحة وطلب الرقم.'},
  {q:"Do you think it will rain? — I don't know. It _______.",o:["will","may","must","rang"],a:1,en:"uncertain → it may",ar:'غير متأكّد → قد (it may)',tr:'هل تظنّ أنها ستُمطر؟ — لا أعرف، قد تُمطر.'},
  {q:"Ms. Owens didn't know the phone number. She had to ask the _______.",o:["operator","pay phone","phone book","area code"],a:0,en:"ask a person → operator",ar:'تسأل شخصاً → المشغّل (operator)',tr:'لم تعرف السيدة أوينز الرقم، فاضطرت لسؤال المشغّل.'},
  {q:"A _______ call is the least expensive.",o:["international","long distance","local","phone"],a:2,en:"cheapest → local",ar:'الأرخص → المحلية (local)',tr:'المكالمة المحلية هي الأقل تكلفة.'},
  {q:"You need _______ for a pay phone.",o:["bells","pages","coins","lines"],a:2,en:"a pay phone needs coins",ar:'الهاتف العمومي يحتاج عملات → coins',tr:'تحتاج عملات معدنية للهاتف العمومي.'},
  {q:"Marvin finished his conversation and _______.",o:["found","called up","hung up","rang"],a:2,en:"end a call → hung up",ar:'إنهاء المكالمة → أغلق السماعة (hung up)',tr:'أنهى مارفن محادثته وأغلق السماعة.'},
  {q:"I need to make a call, but I don't have any coins. Do you have _______ for this dollar?",o:["change","phone","operator","slot"],a:0,en:"coins for a dollar → change",ar:'فكّة للدولار → change',tr:'أريد إجراء مكالمة لكن ليس معي عملات. هل عندك فكّة لهذا الدولار؟'},
  {q:"The sky is dark with clouds and the wind is blowing hard. I think _______.",o:["the stars are out","the night is long","winter is the best season","it might rain"],a:3,en:"dark clouds → it might rain",ar:'غيوم داكنة → قد تُمطر (it might rain)',tr:'السماء مظلمة بالغيوم والرياح قوية. أظنّ أنها قد تُمطر.'},
  {q:"We talked for hours. _______",o:["We had a long conversation.","We ate a late dinner.","We don't have a phone.","We went dancing."],a:0,en:"talked for hours → long conversation",ar:'تحدّثنا ساعات → محادثة طويلة',tr:'تحدّثنا لساعات. أجرينا محادثة طويلة.'},
  {q:"I can't buy that car. It costs a lot of money. The car is _______.",o:["cheap","expensive","busy","local"],a:1,en:"costs a lot → expensive",ar:'يكلّف كثيراً → غالٍ (expensive)',tr:'لا أستطيع شراء تلك السيارة، تكلّف كثيراً. السيارة غالية.'},
  {q:"Ellen didn't take Bert's call because she _______.",o:["didn't know his number","needed a pay phone","was too busy","didn't have coins"],a:2,en:"didn't answer → too busy",ar:'لم تردّ → كانت مشغولة جداً',tr:'لم تردّ إلين على مكالمة بيرت لأنها كانت مشغولة جداً.'},
  {q:"My son doesn't have much money. He has _______ five dollars.",o:["less","just","free","count"],a:1,en:"only → just",ar:'فقط → just',tr:'ابني لا يملك مالاً كثيراً. معه خمسة دولارات فقط.'},
  {q:"Who is that _______ in the red sweater?",o:["page","person","phone","public"],a:1,en:"who → person",ar:'مَن ذلك الشخص → person',tr:'مَن ذلك الشخص ذو الكنزة الحمراء؟'},
  {q:"With _______ do you usually eat dinner?",o:["who","her","him","whom"],a:3,en:"preposition + whom",ar:'بعد حرف الجرّ with → whom',tr:'مع مَن تتناول العشاء عادةً؟'},
  {q:"Richard likes all his instructors, but he likes Mr. Miller _______.",o:["the most","more","more than","than"],a:0,en:"superlative → the most",ar:'الأعلى تفضيلاً → the most',tr:'ريتشارد يحبّ كل مدرّبيه، لكنه يحبّ السيد ميلر أكثرهم.'},
  {q:"How much did you _______ for your new watch?",o:["make","may","pay","call"],a:2,en:"cost → pay",ar:'كم دفعت → pay',tr:'كم دفعت ثمناً لساعتك الجديدة؟'},
  {q:"Hello. Is Mrs. Smith there? — _______",o:["Just a minute. I'll see.","This is the operator.","I need to make a call.","There's no public phone here."],a:0,en:"polite phone reply",ar:'ردّ هاتفي مهذّب → لحظة، سأرى',tr:'مرحباً، هل السيدة سميث موجودة؟ — لحظة من فضلك، سأرى.'},
  // — Comparative more/less/most/least (Exercise C الرسمية · EE-14) —
  {q:"Jan has lots of money. She buys the _______ expensive clothes in the store.",o:["least","less","more","most"],a:3,en:"richest buys the most expensive",ar:'الأغلى → the most expensive',tr:'جان لديها مال كثير، تشتري أغلى الملابس في المتجر.'},
  {q:"Joe likes to keep his money. He buys the _______ expensive clothes.",o:["most","more","least","less"],a:2,en:"cheapest → the least expensive",ar:'الأرخص → the least expensive',tr:'جو يحبّ أن يوفّر ماله، يشتري أرخص الملابس.'},
  {q:"This problem is easy. It's _______ difficult than all of the others.",o:["more","less","most","the least"],a:1,en:"easier → less difficult",ar:'أسهل → أقل صعوبة (less difficult)',tr:'هذه المسألة سهلة، أقل صعوبة من كل البقية.'},
]
};

// ═══════════════════════════════════════
// REVIEW (مراجعة)
// ═══════════════════════════════════════
const REVIEW=[
  {q:"Go _______ Pine Street to Main Street and turn left.",o:["up","for","of","at"],a:0,en:"go up a street",ar:'go up = اصعد/اسلك الشارع',tr:'اسلك شارع باين حتى الشارع الرئيسي ثم انعطف يساراً.'},
  {q:"The plane is going to touch the _______ in a second.",o:["sky","ground","exit","corner"],a:1,en:"landing → touch the ground",ar:'الهبوط → تلامس الأرض (ground)',tr:'ستلامس الطائرة الأرض بعد لحظة.'},
  {q:"There are 1.6 _______ in one mile.",o:["miles","exits","kilometers","degrees"],a:2,en:"1 mile ≈ 1.6 km",ar:'الميل ≈ 1.6 كيلومتر',tr:'في الميل الواحد 1.6 كيلومتر.'},
  {q:"Water boils at 212°F or 100°C. Water _______ at 32°F.",o:["boils","grows","freezes","lands"],a:2,en:"32°F = freezing",ar:'32 فهرنهايت = التجمّد → freezes',tr:'يغلي الماء عند 212 فهرنهايت أو 100 مئوية، ويتجمّد عند 32 فهرنهايت.'},
  {q:"When are we going to leave? — We _______ going to leave at 9:00.",o:["am","is","are","be"],a:2,en:"we → are going to",ar:'we → are going to',tr:'متى سنغادر؟ — سنغادر الساعة 9:00.'},
  {q:"That plane isn't landing. It's _______.",o:["taking off","falling","freezing","growing"],a:0,en:"going up → taking off",ar:'ترتفع → taking off (تُقلع)',tr:'تلك الطائرة لا تهبط، بل تُقلع.'},
  {q:"The bookstore is on the _______ of Jefferson and 3rd.",o:["exit","mile","corner","degree"],a:2,en:"meeting of two streets → corner",ar:'التقاء شارعين → corner (الزاوية)',tr:'المكتبة على زاوية شارعَي جيفرسون والثالث.'},
  {q:"Silver Star is _______ airline of all — everyone avoids it.",o:["the best","better","the worst","good"],a:2,en:"everyone avoids → the worst",ar:'الجميع يتجنّبها → الأسوأ (the worst)',tr:'سِلفر ستار هي أسوأ شركة طيران على الإطلاق — الجميع يتجنّبها.'},
];
EE.review=REVIEW;

// ═══════════════════════════════════════
// FINAL EXAM (الاختبار النهائي) — يجمع أسئلة الدروس المتاحة
// ═══════════════════════════════════════
const FINAL=dedupe_by_q([
  ...EE.l1,
  ...EE.l2,
  ...EE.l3,
]);
EE.final=FINAL;

// ═══════════════════════════════════════
// SPELLING — write from listening
// ═══════════════════════════════════════
const SPELL_LESSONS=[
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 1 — الاتجاهات والحرارة',w:[
    {e:'north',a:'شمال',em:'⬆️'},{e:'south',a:'جنوب',em:'⬇️'},{e:'east',a:'شرق',em:'➡️'},
    {e:'west',a:'غرب',em:'⬅️'},{e:'highway',a:'طريق سريع',em:'🛣️'},{e:'corner',a:'الزاوية',em:'📐'},
    {e:'exit',a:'مَخرج',em:'🚪'},{e:'temperature',a:'درجة الحرارة',em:'🌡️'},
    {e:'degrees',a:'درجات',em:'🌡️'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 2 — اللياقة والتمارين',w:[
    {e:'exercise',a:'تمرين',em:'🏋️'},{e:'workout',a:'تمرين رياضي',em:'💪'},{e:'healthy',a:'صحّي',em:'🥗'},
    {e:'beautiful',a:'جميل',em:'😍'},{e:'important',a:'مهم',em:'❗'},{e:'remember',a:'يتذكّر',em:'🧠'},
    {e:'forget',a:'ينسى',em:'🤔'},{e:'exciting',a:'مثير',em:'🤩'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 3 — الهاتف',w:[
    {e:'operator',a:'المشغّل',em:'🧑‍💼'},{e:'coin',a:'عملة معدنية',em:'🪙'},{e:'expensive',a:'غالٍ',em:'💎'},
    {e:'busy',a:'مشغول',em:'🔴'},{e:'conversation',a:'محادثة',em:'💬'},{e:'factory',a:'مصنع',em:'🏭'},
    {e:'local',a:'محلي',em:'📍'},{e:'deposit',a:'يُدخل العملة',em:'💰'},
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
