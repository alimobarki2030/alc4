// ═══════════════════════════════════════
// DATA — BOOK 14 (المستوى الثالث)
// Lessons 1–4 + Lesson 5 (Review). Source: ALC Book 14 student text,
// homework (HW) and evaluation exercises (EE).
// ═══════════════════════════════════════
const BOOK_ID='book14';

const LESSON_META={
  l1:{ico:'🎖️',title:'Lesson 1 — US Military ranks and insignia',sub:'الرتب العسكرية والخدمة · المستقبل المستمر · as … as للمساواة · just و soon'},
  l2:{ico:'🐄',title:'Lesson 2 — Farms and ranches',sub:'المزارع والحصاد · أحوال الدرجة extremely / quite · جمل when / where · If للاحتمال'},
  l3:{ico:'🎂',title:'Lesson 3 — Happy birthday to you!',sub:'أعياد الميلاد والهدايا · الاسم الفعلي ‑ing · must للاستنتاج · مراجعة الأفعال الناقصة'},
  l4:{ico:'✈️',title:'Lesson 4 — A vacation promise',sub:'السفر والإنترنت · ought to للنصيحة · الكلام المنقول · better / the best'}
};
const LESSON_KEYS=Object.keys(LESSON_META);

// ═══════════════════════════════════════
// VOCABULARY (من صفحة What's new in Lesson ?)
// ═══════════════════════════════════════
const VOCAB={
l1:[
  // — الخدمة العسكرية —
  {e:'armed forces',a:'القوّات المسلّحة',em:'🪖'},
  {e:'Marine Corps',a:'مشاة البحرية',em:'⚓'},
  {e:'service',a:'الخدمة (العسكرية)',em:'🎖️'},
  {e:'serve',a:'يخدم',em:'🫡'},
  {e:'enlist',a:'يتطوّع / يلتحق بالجيش',em:'✍️'},
  {e:'recruit',a:'مجنّد جديد',em:'🧑‍✈️'},
  {e:'personnel',a:'الأفراد / الموظّفون',em:'👥'},
  {e:'enlisted',a:'من الأفراد (غير الضبّاط)',em:'🪖'},
  {e:'noncommissioned officer (NCO)',a:'ضابط صفّ',em:'🎗️'},
  {e:'rank',a:'رتبة',em:'⭐'},
  {e:'grade',a:'درجة (الراتب العسكري)',em:'🔢'},
  {e:'insignia',a:'شارة الرتبة',em:'🎖️'},
  {e:'bar',a:'شريط (شارة الرتبة)',em:'➖'},
  {e:'promote',a:'يرقّي',em:'⬆️'},
  {e:'be promoted',a:'يترقّى',em:'📈'},
  {e:'promotion',a:'ترقية',em:'🏅'},
  {e:'be up for',a:'مرشّح لـ',em:'🗳️'},
  {e:'assign',a:'يكلّف / يعيّن',em:'📋'},
  {e:'assignment',a:'مهمّة / تكليف',em:'📝'},
  {e:'station',a:'يعيّن في موقع / مقرّ عمل',em:'📍'},
  {e:'be stationed',a:'يتمركز / يُنقل إلى',em:'🗺️'},
  {e:'duty',a:'واجب / مهمّة',em:'🛡️'},
  {e:'training',a:'تدريب',em:'🏋️'},
  {e:'train',a:'يدرّب',em:'🎯'},
  {e:'follow-on training (FOT)',a:'تدريب لاحق (تخصّصي)',em:'📚'},
  {e:'opportunity',a:'فرصة',em:'🚪'},
  {e:'chance',a:'فرصة / حظّ',em:'🎲'},
  {e:'retirement',a:'تقاعد',em:'🏖️'},
  {e:'retired',a:'متقاعد',em:'👴'},
  {e:'basic',a:'أساسي / مبتدئ',em:'🔰'},
  {e:'advanced',a:'متقدّم',em:'🚀'},
  // — رتب البحرية —
  {e:'ensign',a:'ملازم ثانٍ (بحرية)',em:'⚓'},
  {e:'lieutenant',a:'ملازم أوّل / نقيب بحري',em:'⚓'},
  {e:'commander',a:'قائد (مقدّم بحري)',em:'⚓'},
  {e:'captain',a:'نقيب / قبطان (عقيد بحري)',em:'👨‍✈️'},
  {e:'petty officer',a:'ضابط صفّ بحري',em:'⚓'},
  {e:'seaman',a:'بحّار',em:'🌊'},
  // — رتب أخرى —
  {e:'private',a:'جندي',em:'🪖'},
  {e:'corporal',a:'عريف',em:'🎗️'},
  {e:'staff sergeant',a:'رقيب أوّل',em:'🎗️'},
  {e:'airman',a:'جندي في سلاح الجوّ',em:'✈️'},
  // — قواعد —
  {e:'just',a:'للتوّ / قبل قليل',em:'⏮️'},
  {e:'soon',a:'قريباً',em:'⏭️'},
],
l2:[
  // — المزرعة —
  {e:'farm',a:'مزرعة',em:'🚜'},
  {e:'farmer',a:'مزارع',em:'👨‍🌾'},
  {e:'ranch',a:'مزرعة مواشٍ',em:'🐎'},
  {e:'rancher',a:'مربّي مواشٍ',em:'🤠'},
  {e:'barn',a:'حظيرة',em:'🛖'},
  {e:'silo',a:'صومعة (لتخزين الحبوب)',em:'🏭'},
  {e:'cattle',a:'ماشية (أبقار)',em:'🐄'},
  {e:'cow',a:'بقرة',em:'🐮'},
  {e:'bull',a:'ثور',em:'🐂'},
  {e:'calf',a:'عجل (الجمع: calves)',em:'🐄'},
  {e:'horse',a:'حصان',em:'🐴'},
  {e:'sheep',a:'خروف / غنم',em:'🐑'},
  {e:'crop',a:'محصول',em:'🌽'},
  {e:'wheat',a:'قمح',em:'🌾'},
  {e:'dirt',a:'تراب / وسخ',em:'🟫'},
  {e:'graze',a:'يرعى',em:'🌿'},
  {e:'raise',a:'يربّي',em:'🐣'},
  {e:'plant',a:'يزرع / نبتة',em:'🌱'},
  {e:'harvest',a:'يحصد / حصاد',em:'🧺'},
  {e:'take care of',a:'يعتني بـ',past:'took care of',pa:'اعتنى بـ',em:'🤲'},
  // — الطبيعة —
  {e:'forest',a:'غابة',em:'🌲'},
  {e:'valley',a:'وادٍ',em:'🏞️'},
  {e:'bridge',a:'جسر',em:'🌉'},
  {e:'cabin',a:'كوخ',em:'🛖'},
  {e:'picnic',a:'نزهة (أكل في الخلاء)',em:'🧺'},
  {e:'blossom',a:'زهرة (شجرة) / يزهر',em:'🌸'},
  {e:'bloom',a:'يزهر / يتفتّح',em:'🌼'},
  {e:'in full bloom',a:'مزهرة بالكامل',em:'🌺'},
  {e:'reflection',a:'انعكاس',em:'🪞'},
  {e:'reflect',a:'يعكس',em:'🪞'},
  {e:'destroy',a:'يدمّر',em:'💥'},
  {e:'destruction',a:'دمار',em:'🌪️'},
  {e:'locate',a:'يحدّد موقع / يقع',em:'📍'},
  {e:'location',a:'موقع',em:'🗺️'},
  {e:'light',a:'يشعل',past:'lit',pa:'أشعل',em:'🔥'},
  {e:'be born',a:'يُولد',em:'👶'},
  {e:'a green thumb',a:'موهبة في الزراعة',em:'👍'},
  // — أحوال الدرجة —
  {e:'extremely',a:'للغاية',em:'🔝'},
  {e:'rather',a:'إلى حدٍّ ما',em:'〰️'},
  {e:'probably',a:'على الأرجح',em:'🤔'},
  {e:'because of',a:'بسبب',em:'➡️'},
  {e:'around',a:'حول',em:'🔄'},
  {e:'thick',a:'كثيف / سميك',em:'🌳'},
],
l3:[
  // — عيد الميلاد —
  {e:'birth',a:'ولادة',em:'👶'},
  {e:'birthday',a:'عيد ميلاد',em:'🎂'},
  {e:'certificate',a:'شهادة (ورقة رسمية)',em:'📜'},
  {e:'candle',a:'شمعة',em:'🕯️'},
  {e:'blow out',a:'يطفئ (بالنفخ)',past:'blew out',pa:'أطفأ',em:'🌬️'},
  {e:'gift',a:'هدية',em:'🎁'},
  {e:'present',a:'هدية',em:'🎀'},
  {e:'wrap',a:'يغلّف',em:'🎁'},
  {e:'surprise',a:'مفاجأة',em:'🎉'},
  {e:'song',a:'أغنية',em:'🎵'},
  {e:'luck',a:'حظّ',em:'🍀'},
  {e:'couple',a:'اثنان / زوجان',em:'👫'},
  // — أفعال —
  {e:'afford',a:'يقدر على تحمّل ثمن',em:'💳'},
  {e:'believe in',a:'يؤمن بـ',em:'🙏'},
  {e:'continue',a:'يستمرّ',em:'▶️'},
  {e:'drop by',a:'يمرّ بزيارة سريعة',past:'dropped by',pa:'مرّ بزيارة',em:'🚪'},
  {e:'drop in',a:'يزور فجأة',em:'🚪'},
  {e:'come over',a:'يأتي للزيارة',past:'came over',pa:'جاء للزيارة',em:'🏠'},
  {e:'go over',a:'يراجع',past:'went over',pa:'راجع',em:'🔍'},
  {e:'look forward to',a:'يتطلّع إلى',em:'😊'},
  {e:'take turns',a:'يتناوبون',past:'took turns',pa:'تناوبوا',em:'🔁'},
  {e:'turn up',a:'يرفع (الصوت)',em:'🔊'},
  {e:'turn down',a:'يخفض (الصوت) / يرفض',em:'🔉'},
  {e:'volume',a:'مستوى الصوت',em:'🎚️'},
  // — صفات وأحوال —
  {e:'broke',a:'مفلس (ما عنده فلوس)',em:'🪙'},
  {e:'poor',a:'فقير',em:'🥀'},
  {e:'rich',a:'غني',em:'💰'},
  {e:'proud',a:'فخور',em:'🦚'},
  {e:'scared',a:'خائف',em:'😨'},
  {e:'comfortable',a:'مريح',em:'🛋️'},
  {e:'uncomfortable',a:'غير مريح',em:'😣'},
  {e:'soft',a:'ناعم / هادئ',em:'🪶'},
  {e:'softly',a:'بهدوء / بصوت منخفض',em:'🤫'},
  {e:'besides',a:'بالإضافة إلى ذلك',em:'➕'},
  {e:'beside',a:'بجانب',em:'↔️'},
  {e:'underneath',a:'تحت / أسفل',em:'⬇️'},
  {e:'from now on',a:'من الآن فصاعداً',em:'⏩'},
  {e:'pretty soon',a:'قريباً جداً',em:'⏳'},
],
l4:[
  // — السفر —
  {e:'abroad',a:'في الخارج (خارج البلد)',em:'🌍'},
  {e:'foreign',a:'أجنبي',em:'🛂'},
  {e:'tour',a:'جولة / يتجوّل',em:'🗺️'},
  {e:'tourist',a:'سائح',em:'📸'},
  {e:'passenger',a:'راكب',em:'🧳'},
  {e:'fare',a:'أجرة (التذكرة)',em:'🎫'},
  {e:'board',a:'يصعد (الطائرة)',em:'🛫'},
  {e:'refreshment',a:'مرطّبات / وجبة خفيفة',em:'🥤'},
  {e:'seat',a:'مقعد',em:'💺'},
  {e:'rough',a:'مضطرب / خشن',em:'🌊'},
  {e:'smooth',a:'سلس / هادئ',em:'🛬'},
  {e:'smoothly',a:'بسلاسة',em:'〰️'},
  {e:'cancel',a:'يلغي',em:'🚫'},
  {e:'group',a:'مجموعة',em:'👥'},
  // — الإنترنت —
  {e:'computer',a:'حاسوب',em:'💻'},
  {e:'Internet',a:'الإنترنت',em:'🌐'},
  {e:'website',a:'موقع إلكتروني',em:'🖥️'},
  {e:'online',a:'على الإنترنت',em:'📶'},
  {e:'e-mail',a:'بريد إلكتروني',em:'📧'},
  // — أفعال —
  {e:'promise',a:'يعد / وعد',em:'🤞'},
  {e:'attempt',a:'يحاول',em:'💪'},
  {e:'ought to',a:'ينبغي / المفروض',em:'☝️'},
  {e:'put aside',a:'يدّخر / يضع جانباً',past:'put aside',pa:'ادّخر',em:'🐷'},
  {e:'report',a:'يبلّغ / تقرير',em:'📰'},
  {e:'smell',a:'يشمّ / رائحة',em:'👃'},
  {e:'taste',a:'يتذوّق / طعم',em:'👅'},
  {e:'take a chance',a:'يجازف',em:'🎲'},
  // — أحوال —
  {e:'accidentally',a:'بالصدفة / عن غير قصد',em:'🙊'},
  {e:'by chance',a:'بالصدفة',em:'🍀'},
  {e:'lucky',a:'محظوظ',em:'🍀'},
  {e:'as soon as',a:'حالما / بمجرّد أن',em:'⚡'},
  {e:'just as',a:'في نفس اللحظة',em:'⏱️'},
  {e:'on and on',a:'باستمرار بلا توقّف',em:'🔁'},
  {e:'by',a:'في موعد أقصاه (by six)',em:'⏰'},
  {e:'better',a:'أفضل (بشكل أحسن)',em:'👍'},
  {e:'worse',a:'أسوأ',em:'👎'},
]
};

// ═══════════════════════════════════════
// GRAMMAR
// ═══════════════════════════════════════
const GRAMMAR={
l1:[
  {
    title:'Future progressive (will be + ‑ing)', ar:'المستقبل المستمر: will be + فعل‑ing',
    rule:'نستخدمه لشيء سيكون مستمراً في وقت محدّد في المستقبل: At this time on Saturday, I\'ll be driving to the beach. التركيب: will (not) + be + فعل‑ing.',
    parts:[
      {t:'will be + ‑ing',d:"We'll be leaving tomorrow morning."},
      {t:'النفي',d:"I won't be working next week."},
      {t:'السؤال',d:'Will you be sleeping at 10 a.m.?'},
    ],
    check:{q:"Look at those dark clouds. I think it _______ in an hour.",o:['will be raining','is rain','will raining','rains be'],a:0,en:'will + be + -ing',ar:'will + be + ‑ing'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'will (not) be',c:'v'},{t:'+',c:'p'},{t:'verb‑ing',c:'k'}],
    compare:[
      {c1:"I'll drive to the beach. (قرار)",c2:"At 9:00 I'll be driving. (مستمر وقتها)",ar:'will ↔ will be ‑ing'},
      {c1:'They will be leaving in July.',c2:"They won't be leaving in July.",ar:'إثبات ↔ نفي'},
    ],
    examples:[
      {s:"We'll be visiting my parents in Dallas next week.",tr:'سنكون في زيارة والديّ في دالاس الأسبوع القادم.',ar:'will be visiting',ok:true},
      {s:"Don't call me before 10 a.m. I'll be sleeping late.",tr:'لا تتّصل قبل العاشرة، سأكون نائماً.',ar:"I'll be sleeping",ok:true},
      {s:'They will leaving in July.',wrong:'will leaving',right:'will be leaving',tr:'لا بدّ من be بين will و ‑ing.',ok:false},
    ]
  },
  {
    title:'as + adjective/adverb + as', ar:'المساواة: as … as (ليس بنفس …)',
    rule:'للمساواة نقول as + صفة + as: Matt is as tall as his father. ومع الفعل as + حال + as: Luke gets up as early as Jim. وللنفي not as … as: Lemons are not as sweet as oranges.',
    parts:[
      {t:'be + as + صفة + as',d:'Matt is now as tall as his father.'},
      {t:'فعل + as + حال + as',d:'Does your brother play soccer as well as your sister?'},
      {t:'not as … as',d:"I don't usually sleep as late as my brother."},
    ],
    check:{q:'Does your brother play soccer as _______ as your sister does?',o:['well','good','better','best'],a:0,en:'verb (play) → adverb well',ar:'مع الفعل → حال well'},
    formula:[{t:'A',c:'s'},{t:'+',c:'p'},{t:'(not) as',c:'v'},{t:'+',c:'p'},{t:'صفة / حال + as + B',c:'k'}],
    compare:[
      {c1:'Lemons are sweeter than limes.',c2:"Lemons aren't as sweet as oranges.",ar:'المقارنة ↔ المساواة'},
      {c1:'as tall as (صفة)',c2:'as fast as (حال)',ar:'مع be ↔ مع الفعل'},
    ],
    examples:[
      {s:'Do you think that Los Angeles is as big as New York?',tr:'هل تظنّ أنّ لوس أنجلوس بحجم نيويورك؟',ar:'as big as',ok:true},
      {s:"Matt isn't as tall as Bob.",tr:'مات ليس بطول بوب.',ar:'not as … as',ok:true},
      {s:'He is as taller as his father.',wrong:'as taller as',right:'as tall as',tr:'بين as و as الصفة الأصلية بدون ‑er.',ok:false},
    ]
  },
  {
    title:'just (recent past) · soon (near future)', ar:'just = للتوّ (ماضٍ قريب) · soon = قريباً (مستقبل قريب)',
    rule:'just تأتي قبل الفعل للحدث اللي صار قبل قليل: I just ate. / I have just finished. و soon غالباً في آخر الجملة لشيء سيحدث قريباً: I\'ll finish my homework soon.',
    parts:[
      {t:'just + الماضي',d:'Mrs. Peters is not here. She just left.'},
      {t:'have just + التصريف الثالث',d:'I have just finished studying.'},
      {t:'… soon',d:"Fred's going to enlist soon."},
    ],
    check:{q:"Would you like something to eat? — No, thanks. I _______ ate.",o:['just','soon','yet','ever'],a:0,en:'recent past → just',ar:'ماضٍ قريب → just'},
    formula:[{t:'just',c:'v'},{t:'+',c:'p'},{t:'الماضي',c:'k'},{t:'·',c:'p'},{t:'المستقبل + soon',c:'s'}],
    compare:[
      {c1:'They just arrived. (ماضٍ)',c2:"They'll arrive soon. (مستقبل)",ar:'just ↔ soon'},
      {c1:'The boss just told us.',c2:'I expect to complete the report soon.',ar:'أمثلة'},
    ],
    examples:[
      {s:'They just arrived after a trip that lasted for three days.',tr:'وصلوا للتوّ بعد رحلة استمرّت ثلاثة أيام.',ar:'just',ok:true},
      {s:"Give me five more minutes. I'll finish my homework soon.",tr:'أعطني خمس دقائق، سأنهي واجبي قريباً.',ar:'soon',ok:true},
      {s:'She soon left. (تقصد قبل قليل)',wrong:'soon left',right:'just left',tr:'للماضي القريب نستخدم just.',ok:false},
    ]
  }
],
l2:[
  {
    title:'Adverbs of degree (extremely · quite · rather …)', ar:'أحوال الدرجة: a little · rather · quite · very · really · so · terribly · extremely',
    rule:'تأتي قبل الصفة أو الحال لتقوية المعنى أو تخفيفه: a little (قليلاً) · rather (إلى حدٍّ ما) · quite · very · really · so · terribly · extremely (للغاية). This summer has been extremely dry.',
    parts:[
      {t:'تخفيف',d:"I'm a little tired. · It's rather cold."},
      {t:'تقوية',d:'She works extremely fast. · The movie was terribly boring.'},
      {t:'قبل صفة أو حال',d:'quite pleased · really carefully'},
    ],
    check:{q:"I'm feeling sick. I'll _______ need to see the doctor tomorrow.",o:['probably','rather','quite','much'],a:0,en:'likely → probably',ar:'على الأرجح → probably'},
    formula:[{t:'adverb of degree',c:'v'},{t:'+',c:'p'},{t:'صفة / حال',c:'k'}],
    compare:[
      {c1:'a little expensive',c2:'extremely expensive',ar:'أخفّ ↔ أقوى'},
      {c1:'very fast',c2:'terribly slow',ar:'أمثلة'},
    ],
    examples:[
      {s:'This summer has been extremely dry.',tr:'هذا الصيف كان جافاً للغاية.',ar:'extremely',ok:true},
      {s:"Yes, I'm quite pleased with her. She works extremely fast.",tr:'نعم، أنا راضٍ عنها تماماً، تعمل بسرعة كبيرة.',ar:'quite · extremely',ok:true},
      {s:'The test was difficult extremely.',wrong:'difficult extremely',right:'extremely difficult',tr:'حال الدرجة يأتي قبل الصفة.',ok:false},
    ]
  },
  {
    title:'when and where clauses', ar:'جمل الوصف بـ when (للزمان) و where (للمكان)',
    rule:'نصف المكان بـ where: the place where I bought my car. ونصف الزمن بـ when: the day when my nephew was born. إذا الكلمة قبلها مكان → where، وإذا زمن (day · time · year) → when.',
    parts:[
      {t:'مكان + where',d:'I love the lake where we went swimming last week.'},
      {t:'زمن + when',d:'Spring is a season when plants grow quickly.'},
      {t:'الاختبار',d:'the place / the city → where · the time / the night → when'},
    ],
    check:{q:'Los Angeles is the city _______ my son was born.',o:['where','when','which','who'],a:0,en:'city (place) → where',ar:'مدينة (مكان) → where'},
    formula:[{t:'مكان / زمن',c:'s'},{t:'+',c:'p'},{t:'where / when',c:'v'},{t:'+',c:'p'},{t:'جملة',c:'k'}],
    compare:[
      {c1:'the place where we keep our horses',c2:'the time when I go to sleep',ar:'where ↔ when'},
      {c1:'the river where you catch fish',c2:'the night when your team lost',ar:'أمثلة'},
    ],
    examples:[
      {s:"Bob's Car Mall is the place where I bought my car.",tr:'معرض بوب للسيّارات هو المكان الذي اشتريت منه سيّارتي.',ar:'where',ok:true},
      {s:'Ten o\'clock is the time when I go to sleep on school nights.',tr:'العاشرة هي الوقت الذي أنام فيه في ليالي الدراسة.',ar:'when',ok:true},
      {s:'Thursday is the day where I go to the library.',wrong:'the day where',right:'the day when',tr:'day زمن → when.',ok:false},
    ]
  },
  {
    title:'If + present progressive / present perfect', ar:'If مع المضارع المستمر والتامّ (احتمال الآن أو المستقبل)',
    rule:'If + مضارع مستمر لشيء يحدث الآن أو مخطّط: If you\'re leaving tomorrow, you should pack tonight. و If + مضارع تامّ لشيء لم يحدث بعد: If you haven\'t seen that movie yet, go see it tonight. والجزء الثاني: will / should / can / أمر.',
    parts:[
      {t:'If + am/is/are ‑ing',d:"If Don isn't leaving soon, he'll be late."},
      {t:'If + have/has + V3',d:"If David's eaten dinner, he can go to the movies."},
      {t:'الجزء الثاني',d:'will · should · can · must · أمر'},
    ],
    check:{q:"If it's raining outside, _______.",o:["you'll want an umbrella","you wanted an umbrella","you had wanted an umbrella","you want an umbrella yesterday"],a:0,en:'present → will',ar:'If + مضارع → will'},
    formula:[{t:'If',c:'v'},{t:'+',c:'p'},{t:'is ‑ing / has V3',c:'s'},{t:',',c:'p'},{t:'will / should / can / أمر',c:'k'}],
    compare:[
      {c1:"If you're going to the mall, take me with you.",c2:"If you haven't eaten yet, go eat dinner now.",ar:'مستمر ↔ تامّ'},
      {c1:"If Tom hasn't lit a fire,",c2:'the room will be very cold.',ar:'شرط ↔ نتيجة'},
    ],
    examples:[
      {s:"If you haven't seen the new movie, you must see it soon.",tr:'إذا لم تشاهد الفيلم الجديد، يجب أن تشاهده قريباً.',ar:"If + haven't seen",ok:true},
      {s:"Linda should buy new tires if she's driving to California.",tr:'على ليندا شراء إطارات جديدة إذا كانت ستقود إلى كاليفورنيا.',ar:"if + she's driving",ok:true},
      {s:"If you didn't learn to drive yet, take a class.",wrong:"didn't learn … yet",right:"haven't learned … yet",tr:'مع yet نستخدم المضارع التامّ.',ok:false},
    ]
  }
],
l3:[
  {
    title:'Gerunds (‑ing) as subject / after prepositions', ar:'الاسم الفعلي ‑ing: فاعلاً، وبعد حرف الجر',
    rule:'نستخدم الفعل + ing كاسم: Walking is good exercise. (فاعل). وبعد حروف الجر دائماً ‑ing: I believe in working hard. · afraid of flying · look forward to seeing (to هنا حرف جر).',
    parts:[
      {t:'‑ing فاعل',d:'Taking a class can help you learn a language.'},
      {t:'حرف جر + ‑ing',d:'My husband is frightened of flying.'},
      {t:'look forward to + ‑ing',d:'We look forward to seeing our old friends.'},
    ],
    check:{q:'We look forward to _______ our old friends every summer.',o:['seeing','see','seen','saw'],a:0,en:'look forward to + -ing',ar:'look forward to + ‑ing'},
    formula:[{t:'‑ing',c:'v'},{t:'= اسم',c:'p'},{t:'·',c:'p'},{t:'حرف جر + ‑ing',c:'k'}],
    compare:[
      {c1:'Walking is good exercise.',c2:'I believe in working hard.',ar:'فاعل ↔ بعد حرف جر'},
      {c1:'Write this down. (أمر)',c2:'Writing is fun. (فاعل)',ar:'مجرّد ↔ ‑ing'},
    ],
    examples:[
      {s:'Listening to music at night helps me relax.',tr:'الاستماع للموسيقى ليلاً يساعدني على الاسترخاء.',ar:'‑ing فاعل',ok:true},
      {s:'The students were excited about meeting the general.',tr:'كان الطلاب متحمّسين لمقابلة الجنرال.',ar:'about + ‑ing',ok:true},
      {s:'Take a class can help you.',wrong:'Take a class',right:'Taking a class',tr:'الفاعل يكون ‑ing.',ok:false},
    ]
  },
  {
    title:'must / must not for deduction', ar:'must للاستنتاج (أكيد) · must not (أكيد لا)',
    rule:'نستخدم must لما نكون متأكّدين تقريباً من استنتاج: Carl\'s not here. He must be sick. و must not لما نستنتج النفي: They never eat cakes. They must not like sweets. وللاحتمال الأضعف: may · might · could.',
    parts:[
      {t:'must + فعل (استنتاج إثبات)',d:'Everyone is late. The traffic must be bad.'},
      {t:'must not + فعل (استنتاج نفي)',d:"Bobby never drinks milk. He must not like the taste."},
      {t:'درجات اليقين',d:'may / might / could (ممكن) → must (متأكّد تقريباً)'},
    ],
    check:{q:"Sam got four tickets already. He _______ drive very carelessly.",o:['must','must not','may not','could not'],a:0,en:'strong guess → must',ar:'استنتاج قوي → must'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'must (not)',c:'v'},{t:'+',c:'p'},{t:'فعل مجرّد',c:'k'}],
    compare:[
      {c1:"It may be a friend. (ممكن)",c2:"It must be my brother. (متأكّد تقريباً)",ar:'may ↔ must'},
      {c1:'He must be sick.',c2:'He must not be at home.',ar:'إثبات ↔ نفي'},
    ],
    examples:[
      {s:"It suddenly started raining. — You must be wet!",tr:'بدأ المطر فجأة. — لا بدّ أنك مبتلّ!',ar:'must be',ok:true},
      {s:"Jane never wants to go to the mall. She must not enjoy shopping.",tr:'جين لا تريد الذهاب للمول أبداً، لا بدّ أنها لا تحبّ التسوّق.',ar:'must not',ok:true},
      {s:'He must to be sick.',wrong:'must to be',right:'must be',tr:'بعد must فعل مجرّد بدون to.',ok:false},
    ]
  },
  {
    title:'Modal review', ar:'مراجعة الأفعال الناقصة: الضرورة · عدم الضرورة · المنع · الطلب',
    rule:'must / have to = ضرورة · don\'t have to = غير ضروري · must not = ممنوع · will / be going to = المستقبل · can / could / will / would + you = طلب مهذّب.',
    parts:[
      {t:'ضرورة vs عدم ضرورة',d:"We have to be on time. · You don't have to take your hat off."},
      {t:'ممنوع',d:'Robert must not hit other kids.'},
      {t:'طلب',d:'Could you drive me home? · Would you visit me tomorrow?'},
    ],
    check:{q:'You _______ take your hat off. You can choose to keep it on.',o:["don't have to","must not","must","had to"],a:0,en:'not necessary → don\'t have to',ar:'غير ضروري → don\'t have to'},
    formula:[{t:'must / have to',c:'v'},{t:'·',c:'p'},{t:"don't have to",c:'s'},{t:'·',c:'p'},{t:'must not',c:'k'}],
    compare:[
      {c1:"You don't have to go. (غير ضروري)",c2:'You must not go. (ممنوع)',ar:'انتبه للفرق'},
      {c1:'Will you lock the door?',c2:"Sure, I'll do it when I leave.",ar:'طلب ↔ ردّ'},
    ],
    examples:[
      {s:"We must not be late.",tr:'يجب ألّا نتأخّر.',ar:'must not',ok:true},
      {s:'Could you give me a call tonight?',tr:'هل يمكنك الاتّصال بي الليلة؟',ar:'طلب مهذّب',ok:true},
      {s:"You must not take your hat off. (تقصد: لست مضطرّاً)",wrong:'must not',right:"don't have to",tr:'must not = ممنوع، don\'t have to = غير ضروري.',ok:false},
    ]
  }
],
l4:[
  {
    title:'ought to for advice', ar:'ought to للنصيحة (ينبغي)',
    rule:'ought to + فعل مجرّد = should (ينبغي). Dan\'s shoes are too tight. He ought to get another pair. والنفي الأشهر: shouldn\'t.',
    parts:[
      {t:'ought to + فعل',d:'You ought to compare the air fares of three airlines.'},
      {t:'= should',d:'You ought to study. = You should study.'},
      {t:'للنصيحة بعد مشكلة',d:'I lost my wallet. — You ought to call the police.'},
    ],
    check:{q:"Dan's shoes are too tight. He _______ get another pair.",o:['ought to','ought','ought to be','oughts to'],a:0,en:'advice → ought to + verb',ar:'نصيحة → ought to + فعل'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'ought to',c:'v'},{t:'+',c:'p'},{t:'فعل مجرّد',c:'k'}],
    compare:[
      {c1:'You ought to go.',c2:'You should go.',ar:'نفس المعنى'},
      {c1:'He ought to rest.',c2:'He oughts to rest. ✗',ar:'لا نضيف s'},
    ],
    examples:[
      {s:'He said that I ought to compare the air fares.',tr:'قال إنه ينبغي أن أقارن أسعار التذاكر.',ar:'ought to',ok:true},
      {s:'You ought to study tonight instead of going to the movie.',tr:'ينبغي أن تذاكر الليلة بدل الذهاب للسينما.',ar:'نصيحة',ok:true},
      {s:'You ought study more.',wrong:'ought study',right:'ought to study',tr:'لا بدّ من to بعد ought.',ok:false},
    ]
  },
  {
    title:'Modals in reported speech', ar:'الكلام المنقول مع will · must · have to · don\'t have to',
    rule:'بعد said / told نرجع الفعل للماضي: will → would · may → might · can → could · must / have to → had to · don\'t have to → didn\'t have to · must not تبقى · could تبقى.',
    parts:[
      {t:'will → would',d:'"I\'ll return later." → Bob said he would return later.'},
      {t:'have to / must → had to',d:'"You have to call three people." → She said I had to call three people.'},
      {t:"don't have to → didn't have to",d:"He said we didn't have to pay the fare."},
    ],
    check:{q:'Stella: "We may drop by next week." → Stella said that they _______ by next week.',o:['might drop','would drop','were dropping','may dropped'],a:0,en:'may → might',ar:'may → might'},
    formula:[{t:'He / She said',c:'s'},{t:'+',c:'p'},{t:'(that)',c:'p'},{t:'would / might / could / had to',c:'v'},{t:'+ فعل',c:'k'}],
    compare:[
      {c1:'"You must not park here."',c2:'He said you must not park here.',ar:'must not تبقى'},
      {c1:'"You don\'t have to do it."',c2:"He said we didn't have to do it.",ar:"didn't have to"},
    ],
    examples:[
      {s:'SSgt Travis said that we had to practice tonight.',tr:'قال الرقيب ترافيس إنه يجب أن نتدرّب الليلة.',ar:'had to',ok:true},
      {s:'The colonel said that we could have a school picnic in the spring.',tr:'قال العقيد إنه يمكننا عمل نزهة مدرسية في الربيع.',ar:'could تبقى',ok:true},
      {s:'Bob said he will return later.',wrong:'will',right:'would',tr:'بعد said تتحوّل will إلى would.',ok:false},
    ]
  },
  {
    title:'well / better / the best · badly / worse / the worst', ar:'المقارنة مع الأحوال الشاذّة: well → better → the best · badly → worse → the worst',
    rule:'well و badly أحوال شاذّة: well → better (than) → the best · badly → worse (than) → the worst. Ed draws better than Carla. Al draws the best of all.',
    parts:[
      {t:'well → better → the best',d:'Tim spelled the best of all.'},
      {t:'badly → worse → the worst',d:'John did worse than Mary. · Mike drives the worst of all.'},
      {t:'مع than للاثنين',d:'Ken scored better than me.'},
    ],
    check:{q:'Mike had three car accidents. Maria had one. Mike drives _______ of all.',o:['the worst','worse','the baddest','the most badly'],a:0,en:'badly → the worst',ar:'الأسوأ بين الكل → the worst'},
    formula:[{t:'well',c:'v'},{t:'→ better →',c:'p'},{t:'the best',c:'k'},{t:'·',c:'p'},{t:'badly → worse → the worst',c:'s'}],
    compare:[
      {c1:'Carla draws well.',c2:'Ed draws better than Carla.',ar:'عادي ↔ مقارنة'},
      {c1:'John did worse than Mary.',c2:'Mike drives the worst of all.',ar:'مقارنة ↔ تفضيل'},
    ],
    examples:[
      {s:"I ran five miles, but I wasn't tired. I ran better than my friend.",tr:'ركضت خمسة أميال ولم أتعب، ركضت أفضل من صديقي.',ar:'better than',ok:true},
      {s:'Mark shot the best of all.',tr:'مارك أصاب الأفضل بين الجميع.',ar:'the best',ok:true},
      {s:'Ken scored weller than me.',wrong:'weller',right:'better',tr:'well شاذّ → better.',ok:false},
    ]
  }
]
};

// ═══════════════════════════════════════
// WO — رتّب الجملة (word order)
// ═══════════════════════════════════════
const WO={
l1:[
  {words:['We','will','be','leaving','tomorrow','morning'],ans:'We will be leaving tomorrow morning.',tr:'سنكون مغادرين صباح الغد.',ar:'المستقبل المستمر'},
  {words:['Matt','is','as','tall','as','his','father'],ans:'Matt is as tall as his father.',tr:'مات بطول والده.',ar:'as … as'},
  {words:['I','have','just','finished','studying'],ans:'I have just finished studying.',tr:'انتهيت للتوّ من المذاكرة.',ar:'just'},
  {words:['I','will','go','home','soon'],ans:'I will go home soon.',tr:'سأذهب للبيت قريباً.',ar:'soon'},
  {words:['I','need','your','full','name','and','rank'],ans:'I need your full name and rank.',tr:'أحتاج اسمك الكامل ورتبتك.',ar:'الرتبة'},
  {words:['He','is','up','for','promotion'],ans:'He is up for promotion.',tr:'هو مرشّح للترقية.',ar:'be up for'},
  {words:['My','brother','wants','to','enlist','in','the','army'],ans:'My brother wants to enlist in the army.',tr:'أخي يريد الالتحاق بالجيش.',ar:'enlist'},
],
l2:[
  {words:['This','summer','has','been','extremely','dry'],ans:'This summer has been extremely dry.',tr:'هذا الصيف كان جافاً للغاية.',ar:'extremely'},
  {words:['I','love','the','lake','where','we','went','swimming'],ans:'I love the lake where we went swimming.',tr:'أحبّ البحيرة التي سبحنا فيها.',ar:'where'},
  {words:['Spring','is','a','season','when','plants','grow','quickly'],ans:'Spring is a season when plants grow quickly.',tr:'الربيع موسم تنمو فيه النباتات بسرعة.',ar:'when'},
  {words:['If','you','are','leaving','tomorrow','pack','tonight'],ans:'If you are leaving tomorrow, pack tonight.',tr:'إذا كنت ستغادر غداً، جهّز حقيبتك الليلة.',ar:'If + ‑ing'},
  {words:['Our','cattle','graze','in','the','fields'],ans:'Our cattle graze in the fields.',tr:'ترعى ماشيتنا في الحقول.',ar:'graze'},
  {words:['Farmers','harvest','their','crops','in','the','fall'],ans:'Farmers harvest their crops in the fall.',tr:'يحصد المزارعون محاصيلهم في الخريف.',ar:'harvest'},
  {words:['Our','train','is','late','because','of','bad','weather'],ans:'Our train is late because of bad weather.',tr:'قطارنا متأخّر بسبب الطقس السيّئ.',ar:'because of'},
],
l3:[
  {words:['Walking','is','good','exercise'],ans:'Walking is good exercise.',tr:'المشي رياضة جيّدة.',ar:'‑ing فاعل'},
  {words:['I','believe','in','working','hard'],ans:'I believe in working hard.',tr:'أؤمن بالعمل الجادّ.',ar:'حرف جر + ‑ing'},
  {words:["Carl's",'not','here','He','must','be','sick'],ans:"Carl's not here. He must be sick.",tr:'كارل ليس هنا، لا بدّ أنه مريض.',ar:'must'},
  {words:['We','look','forward','to','seeing','you'],ans:'We look forward to seeing you.',tr:'نتطلّع لرؤيتك.',ar:'look forward to'},
  {words:['Please','turn','up','the','radio'],ans:'Please turn up the radio.',tr:'ارفع صوت الراديو من فضلك.',ar:'turn up'},
  {words:['We','can','afford','a','new','car'],ans:'We can afford a new car.',tr:'نقدر على شراء سيّارة جديدة.',ar:'afford'},
  {words:['It','must','not','be','my','teacher'],ans:'It must not be my teacher.',tr:'لا بدّ أنه ليس معلّمي.',ar:'must not'},
],
l4:[
  {words:['He','ought','to','get','another','pair'],ans:'He ought to get another pair.',tr:'ينبغي أن يشتري زوجاً آخر.',ar:'ought to'},
  {words:['Ben','will','arrive','by','six',"o'clock"],ans:"Ben will arrive by six o'clock.",tr:'سيصل بن قبل السادسة.',ar:'by'},
  {words:['I','said','Ben','would','arrive','by','six'],ans:'I said Ben would arrive by six.',tr:'قلت إنّ بن سيصل قبل السادسة.',ar:'would'},
  {words:['He','said','we',"didn't",'have','to','pay','the','fare'],ans:"He said we didn't have to pay the fare.",tr:'قال إنه لا داعي لأن ندفع الأجرة.',ar:"didn't have to"},
  {words:['Ed','draws','better','than','Carla'],ans:'Ed draws better than Carla.',tr:'إد يرسم أفضل من كارلا.',ar:'better than'},
  {words:['Al','draws','the','best'],ans:'Al draws the best.',tr:'آل يرسم الأفضل.',ar:'the best'},
  {words:['Call','me','as','soon','as','you','arrive'],ans:'Call me as soon as you arrive.',tr:'اتّصل بي حالما تصل.',ar:'as soon as'},
]
};

// ═══════════════════════════════════════
// EE — «تقييم» (من تمارين التقييم الرسمية Evaluation Exercises)
// ═══════════════════════════════════════
const EE={
l1:[
  // Exercise B — الجمع
  {q:"There was a party for enlisted personnel. The _______ and women there were new recruits. (man)",o:["men","mans","mens","man"],a:0,en:"man → men",ar:'جمع man → men',tr:'الرجال والنساء هناك كانوا مجنّدين جدداً.'},
  {q:"There were cakes, cookies, and many different _______ to eat. (sandwich)",o:["sandwiches","sandwichs","sandwich","sandwiches'"],a:0,en:"-ch → -es",ar:'ينتهي بـ ch → es',tr:'كان هناك كعك وبسكويت وأنواع كثيرة من السندويشات.'},
  {q:"They talked about their _______. (family)",o:["families","familys","familes","family"],a:0,en:"consonant + y → ies",ar:'ساكن + y → ies',tr:'تحدّثوا عن عائلاتهم.'},
  {q:"They told funny _______ about their training. (story)",o:["stories","storys","storyes","story"],a:0,en:"consonant + y → ies",ar:'ساكن + y → ies',tr:'رووا قصصاً مضحكة عن تدريبهم.'},
  // Exercise C — soon / just
  {q:"Fred's going to enlist _______.",o:["soon","just","yet","already"],a:0,en:"future → soon",ar:'مستقبل → soon',tr:'سيلتحق فريد بالجيش قريباً.'},
  {q:"Mrs. Peters is not here. She _______ left.",o:["just","soon","yet","still"],a:0,en:"recent past → just",ar:'ماضٍ قريب → just',tr:'السيّدة بيترز ليست هنا، غادرت للتوّ.'},
  {q:"Give me five more minutes. I'll finish my homework _______.",o:["soon","just","ago","yet"],a:0,en:"future → soon",ar:'مستقبل → soon',tr:'أعطني خمس دقائق، سأنهي واجبي قريباً.'},
  {q:"Dan: Would you like something to eat? Bill: No, thanks, I _______ ate.",o:["just","soon","yet","still"],a:0,en:"recent past → just",ar:'أكلت للتوّ → just',tr:'دان: تريد شيئاً تأكله؟ بيل: لا شكراً، أكلت للتوّ.'},
  {q:"Are you sure that you're going to be promoted _______?",o:["soon","just","ago","ever"],a:0,en:"future → soon",ar:'مستقبل → soon',tr:'هل أنت متأكّد أنك ستُرقّى قريباً؟'},
  {q:"The boss _______ told us to start cleaning the vehicles.",o:["just","soon","yet","ago"],a:0,en:"recent past → just",ar:'ماضٍ قريب → just',tr:'أخبرنا المدير للتوّ أن نبدأ تنظيف المركبات.'},
  // Exercise D — الكلمة الصحيحة
  {q:"Lemons are not _______ than oranges.",o:["sweeter","sweet","sweetly","sweetest"],a:0,en:"than → -er",ar:'than → sweeter',tr:'الليمون ليس أحلى من البرتقال.'},
  {q:"Does your brother play soccer as _______ as your sister does?",o:["well","good","better","best"],a:0,en:"verb → adverb well",ar:'مع الفعل → well',tr:'هل يلعب أخوك الكرة بنفس مهارة أختك؟'},
  {q:"Do you think that Los Angeles is as _______ as New York?",o:["big","bigger","biggest","bigly"],a:0,en:"as + base adjective + as",ar:'as + الصفة الأصلية + as',tr:'هل تظنّ أنّ لوس أنجلوس بحجم نيويورك؟'},
  {q:"Vegetables are _______ than cakes and pies.",o:["healthier","health","healthy","healthiest"],a:0,en:"than → -ier",ar:'than → healthier',tr:'الخضار أصحّ من الكعك والفطائر.'},
  {q:"I don't usually sleep as _______ as my brother.",o:["late","later","latest","lately"],a:0,en:"as + base + as",ar:'as + الأصل + as → late',tr:'لا أنام عادةً متأخّراً مثل أخي.'},
  {q:"Do adults speak as _______ as children?",o:["fast","faster","fastest","fastly"],a:0,en:"as fast as",ar:'as fast as',tr:'هل يتحدّث الكبار بسرعة الأطفال؟'},
  // Exercise E — المستقبل المستمر
  {q:"Bill: When are Mr. and Mrs. Jones going to California? Pat: They _______ in July.",o:["will be leaving","will leaving","are leave","will be leave"],a:0,en:"will be + -ing",ar:'will be + ‑ing',tr:'سيكونان مغادرين في يوليو.'},
  {q:"Sam: Look at those dark clouds. Tim: I think it _______ in an hour.",o:["will be raining","will raining","is be raining","rains be"],a:0,en:"will be + -ing",ar:'will be + ‑ing',tr:'أظنّها ستكون ممطرة خلال ساعة.'},
  {q:"Ben: Are you going to be home next week? Tom: No. We _______ my parents in Dallas.",o:["will be visiting","will visiting","be visiting","visiting will"],a:0,en:"will be + -ing",ar:'will be + ‑ing',tr:'لا، سنكون في زيارة والديّ في دالاس.'},
  {q:"Don't call me before 10 a.m. I _______ late.",o:["will be sleeping","will sleeping","sleep will be","am sleep"],a:0,en:"will be + -ing",ar:'will be + ‑ing',tr:'لا تتّصل قبل العاشرة، سأكون نائماً.'},
  // Exercise F — الكلمة الأفضل
  {q:"My brother wants to _______ in the army after high school.",o:["enlist","allow","cause","cross"],a:0,en:"join the army → enlist",ar:'يلتحق بالجيش → enlist',tr:'أخي يريد الالتحاق بالجيش بعد الثانوية.'},
  {q:"Paul's an ensign. He's in the US _______.",o:["Army","Air Force","Navy","Marine Corps"],a:2,en:"ensign → Navy",ar:'ensign رتبة بحرية',tr:'بول ملازم بحري، هو في البحرية الأمريكية.'},
  {q:"Which statement is correct?",o:["A soldier with problems will have frequent promotions.","New military recruits get a lot of training.","A captain's insignia has one silver bar.","Basic training comes after retirement."],a:1,en:"recruits → training",ar:'المجنّدون الجدد يتدرّبون كثيراً',tr:'أيّ عبارة صحيحة؟'},
  {q:"I was just _______ this base last month.",o:["traveled on","assigned to","departed from","frightened by"],a:1,en:"assigned to a base",ar:'عُيّنت في القاعدة → assigned to',tr:'عُيّنت في هذه القاعدة الشهر الماضي.'},
  {q:"Chance and _______ have similar meanings.",o:["colonel","enlisted","opportunity","promotion"],a:2,en:"chance = opportunity",ar:'فرصة = opportunity',tr:'chance و opportunity بمعنى واحد.'},
  {q:"Look at the _______ on military people's uniforms to see their rank.",o:["material","poles","insignia","lights"],a:2,en:"rank → insignia",ar:'شارة الرتبة → insignia',tr:'انظر إلى الشارة على زيّهم لتعرف رتبتهم.'},
  {q:"An airman first class is the same as _______ in the navy.",o:["a captain","a seaman","a private","an ensign"],a:1,en:"E-3 → seaman",ar:'نفس الدرجة E-3 → seaman',tr:'الجندي الجوي أول يعادل البحّار في البحرية.'},
  {q:"Many enlisted _______ were assigned new duties.",o:["lieutenants","barracks","personnel","furniture"],a:2,en:"people → personnel",ar:'الأفراد → personnel',tr:'كُلّف كثير من الأفراد بمهامّ جديدة.'},
  {q:"A country's armed _______ help keep a country safe.",o:["duties","grades","forces","chances"],a:2,en:"armed forces",ar:'القوّات المسلّحة → forces',tr:'القوّات المسلّحة تحمي البلد.'},
  {q:"You should take _______ math classes if you want to go to college.",o:["basic","enlisted","retired","advanced"],a:3,en:"college → advanced",ar:'للجامعة → متقدّمة',tr:'ينبغي أن تأخذ دروس رياضيات متقدّمة إذا أردت دخول الجامعة.'},
  {q:"Lt Nichols: Was Lieutenant Smith _______? Lt Carter: Yes, he was. He's a captain now.",o:["promoted","enlisted","invited","lowered"],a:0,en:"captain now → promoted",ar:'صار نقيباً → promoted',tr:'هل رُقّي الملازم سميث؟ نعم، هو نقيب الآن.'},
  {q:"A lieutenant colonel in the US Air Force is an _______.",o:["O-3","O-4","O-5","O-6"],a:2,en:"Lt Col = O-5",ar:'المقدّم = O-5',tr:'المقدّم في سلاح الجوّ درجته O-5.'},
  {q:"Did you know that James is _______ in Japan? He'll be there for several years.",o:["served","trained","enlisted","stationed"],a:3,en:"live/work at a base → stationed",ar:'متمركز → stationed',tr:'هل تعلم أنّ جيمس متمركز في اليابان؟'},
  {q:"The teacher gave us a difficult _______ for homework.",o:["insignia","assignment","personnel","promotion"],a:1,en:"homework → assignment",ar:'مهمّة / واجب → assignment',tr:'أعطانا المعلّم واجباً صعباً.'},
  {q:"There's going to be a big _______ for Colonel Wall when he's finished serving next summer.",o:["retirement party","military plane","pedestrian road","personnel form"],a:0,en:"finished serving → retirement party",ar:'حفل تقاعد',tr:'سيُقام حفل تقاعد كبير للعقيد وول.'},
  {q:"After Sergeant Wilson finishes his assignment here, where will his follow-on _______ be?",o:["retirement","promotion","opportunity","training"],a:3,en:"follow-on training",ar:'التدريب اللاحق → training',tr:'أين سيكون تدريبه اللاحق؟'},
  {q:"My brother is a very good businessman, so he's often _______ promotion.",o:["onto","up for","next to","out of"],a:1,en:"be up for promotion",ar:'مرشّح للترقية → up for',tr:'أخي رجل أعمال ممتاز، لذا هو غالباً مرشّح للترقية.'},
  {q:"A lieutenant in the US Navy is an _______.",o:["O-1","O-2","O-3","O-4"],a:2,en:"Navy lieutenant = O-3",ar:'Lieutenant البحرية = O-3',tr:'الملازم في البحرية درجته O-3.'},
],
l2:[
  // Exercise C — when / where clauses
  {q:"July 12, 2003 was the day _______.",o:["when my nephew was born.","where I keep my pens and pencils.","where students can study quietly.","where everything costs a dollar."],a:0,en:"day → when",ar:'يوم → when',tr:'12 يوليو 2003 كان اليوم الذي وُلد فيه ابن أخي.'},
  {q:"My desk is the place _______.",o:["where I keep my pens and pencils.","when I play soccer with my friends.","when my nephew was born.","where everything costs a dollar."],a:0,en:"desk → keep pens",ar:'مكتبي → where I keep my pens',tr:'مكتبي هو المكان الذي أضع فيه أقلامي.'},
  {q:"The library is the place _______.",o:["where students can study quietly.","when I play soccer with my friends.","where everything costs a dollar.","when my nephew was born."],a:0,en:"library → study quietly",ar:'المكتبة → المذاكرة بهدوء',tr:'المكتبة هي المكان الذي يذاكر فيه الطلاب بهدوء.'},
  {q:"Three o'clock is the time _______.",o:["when I play soccer with my friends.","where I keep my pens.","where students study.","where everything costs a dollar."],a:0,en:"time → when",ar:'وقت → when',tr:'الثالثة هي الوقت الذي ألعب فيه الكرة.'},
  // Exercise D — where / when
  {q:"Bob's Car Mall is the place _______ I bought my car.",o:["where","when"],a:0,en:"place → where",ar:'مكان → where',tr:'معرض بوب هو المكان الذي اشتريت منه سيّارتي.'},
  {q:"Is that the river _______ you and your father go catch fish?",o:["where","when"],a:0,en:"river → where",ar:'نهر (مكان) → where',tr:'هل هذا النهر الذي تصطاد فيه مع والدك؟'},
  {q:"Thursday afternoons is the time _______ I go to the library to study.",o:["when","where"],a:0,en:"time → when",ar:'وقت → when',tr:'عصر الخميس هو الوقت الذي أذهب فيه للمكتبة.'},
  {q:"That red barn is the place _______ we keep our horses.",o:["where","when"],a:0,en:"place → where",ar:'مكان → where',tr:'تلك الحظيرة الحمراء هي المكان الذي نضع فيه خيولنا.'},
  {q:"Tell us about the night _______ your team lost the game.",o:["when","where"],a:0,en:"night → when",ar:'ليلة (زمن) → when',tr:'أخبرنا عن الليلة التي خسر فيها فريقك.'},
  {q:"My mother remembers the time _______ milk cost ten cents a pint.",o:["when","where"],a:0,en:"time → when",ar:'وقت → when',tr:'تتذكّر أمّي الوقت الذي كان فيه الحليب بعشرة سنتات.'},
  {q:"Los Angeles is the city _______ my son was born.",o:["where","when"],a:0,en:"city → where",ar:'مدينة → where',tr:'لوس أنجلوس هي المدينة التي وُلد فيها ابني.'},
  // Exercise E/F — if-clauses
  {q:"If it's raining outside, _______.",o:["you'll want an umbrella.","he'll need change to pay the fare.","if she's studying tonight.","the room will be very cold."],a:0,en:"rain → umbrella",ar:'مطر → مظلّة',tr:'إذا كانت تمطر في الخارج، ستحتاج مظلّة.'},
  {q:"If John's taking the bus, _______.",o:["he'll need change to pay the fare.","you'll want an umbrella.","you must see it soon.","the room will be very cold."],a:0,en:"bus → fare",ar:'الحافلة → الأجرة',tr:'إذا كان جون سيأخذ الحافلة، سيحتاج فكّة للأجرة.'},
  {q:"If Tom hasn't lit a fire, _______.",o:["the room will be very cold.","you must see it soon.","he'll need change.","you'll want an umbrella."],a:0,en:"no fire → cold",ar:'بدون نار → بارد',tr:'إذا لم يشعل توم النار، ستكون الغرفة باردة جداً.'},
  {q:"If you haven't seen the new movie, _______.",o:["you must see it soon.","the room will be very cold.","he'll need change.","if she's studying tonight."],a:0,en:"movie → see it",ar:'الفيلم → شاهده',tr:'إذا لم تشاهد الفيلم الجديد، يجب أن تشاهده قريباً.'},
  // Exercise G/H — present progressive / present perfect
  {q:"If your laundry _______ in a few minutes, please get mine, too.",o:["you're picking up","you picked up","you'll pick up","you pick up yesterday"],a:0,en:"present progressive",ar:'مضارع مستمر',tr:'إذا كنت ستأخذ غسيلك بعد دقائق، خذ غسيلي معك.'},
  {q:"If _______ to Dallas, we don't have to pack anymore.",o:["we're not going","we not go","we didn't go","we won't going"],a:0,en:"present progressive (neg)",ar:'نفي المضارع المستمر',tr:'إذا لم نكن ذاهبين إلى دالاس، فلا داعي للتجهيز.'},
  {q:"Linda should buy new tires if _______ to California.",o:["she's driving","she drove","she'll drove","she driving"],a:0,en:"present progressive",ar:'مضارع مستمر → she\'s driving',tr:'على ليندا شراء إطارات إذا كانت ستقود إلى كاليفورنيا.'},
  {q:"Take a driver's education class if _______ to drive yet.",o:["you haven't learned","you didn't learned","you don't learned","you not learn"],a:0,en:"yet → present perfect",ar:'yet → مضارع تامّ',tr:'خذ دورة قيادة إذا لم تتعلّم القيادة بعد.'},
  {q:"If the students _______ the test, they should go outside.",o:["have completed","completing","has completed","complete yesterday"],a:0,en:"present perfect (plural)",ar:'have + V3 للجمع',tr:'إذا أكمل الطلاب الاختبار، عليهم الخروج.'},
  {q:"We'll go to the game if Linda _______ her work.",o:["has finished","have finished","finishing","finish will"],a:0,en:"present perfect (she)",ar:'has + V3',tr:'سنذهب للمباراة إذا أنهت ليندا عملها.'},
  // Exercise I — الكلمة الأفضل
  {q:"Do the flowers in your garden _______ in the spring?",o:["light","harvest","bloom","reflect"],a:2,en:"flowers → bloom",ar:'الزهور تتفتّح → bloom',tr:'هل تتفتّح الزهور في حديقتك في الربيع؟'},
  {q:"Mr. Clark _______ cows and horses.",o:["serves","locates","destroys","raises"],a:3,en:"animals → raises",ar:'يربّي → raises',tr:'السيّد كلارك يربّي الأبقار والخيول.'},
  {q:"Our cattle _______ on grass in the fields.",o:["graze","reflect","make","plant"],a:0,en:"eat grass → graze",ar:'ترعى → graze',tr:'ترعى ماشيتنا العشب في الحقول.'},
  {q:"Cows, calves, and bulls are _______.",o:["dirt","wheat","cattle","air"],a:2,en:"→ cattle",ar:'ماشية → cattle',tr:'الأبقار والعجول والثيران ماشية.'},
  {q:"I need a match to _______ my cigarette.",o:["raise","reflect","measure","light"],a:3,en:"match → light",ar:'يشعل → light',tr:'أحتاج عود ثقاب لأشعل سيجارتي.'},
  {q:"Farmers usually _______ their crops in the fall.",o:["make","harvest","salute","throw"],a:1,en:"crops → harvest",ar:'يحصدون → harvest',tr:'يحصد المزارعون محاصيلهم عادة في الخريف.'},
  {q:"The cows and horses sleep in the _______.",o:["barn","silo","bridge","lake"],a:0,en:"animals sleep → barn",ar:'حظيرة → barn',tr:'تنام الأبقار والخيول في الحظيرة.'},
  {q:"You can make bread from _______.",o:["wheat","blossoms","grass","dirt"],a:0,en:"bread → wheat",ar:'الخبز من القمح',tr:'يمكنك صنع الخبز من القمح.'},
  {q:"My neighbor _______ my cat during my vacation.",o:["throws away","runs out of","takes care of","tries on"],a:2,en:"look after → takes care of",ar:'يعتني بـ → takes care of',tr:'جاري يعتني بقطّتي خلال إجازتي.'},
  {q:"The baby has a lot of hair. Her hair is very _______.",o:["tall","thick","thin","tired"],a:1,en:"a lot of hair → thick",ar:'كثيف → thick',tr:'شعر الطفلة كثيف جداً.'},
  {q:"Farmer Jones will have a good corn _______ next month.",o:["crop","blossom","valley","forest"],a:0,en:"corn → crop",ar:'محصول → crop',tr:'سيكون للمزارع جونز محصول ذرة جيّد الشهر القادم.'},
  {q:"Build is the opposite of _______.",o:["decrease","raise","locate","destroy"],a:3,en:"build ↔ destroy",ar:'يبني ↔ يدمّر',tr:'عكس يبني هو يدمّر.'},
  {q:"You'll often find a _______ between two mountains.",o:["reflection","valley","picnic","harvest"],a:1,en:"between mountains → valley",ar:'بين جبلين → وادٍ',tr:'غالباً تجد وادياً بين جبلين.'},
  {q:"Our train's going to be late _______ bad weather.",o:["around","instead of","because of","since"],a:2,en:"reason → because of",ar:'السبب → because of',tr:'سيتأخّر قطارنا بسبب الطقس السيّئ.'},
  {q:"We need some wood. Let's go into the _______ to get some.",o:["lake","crop","farm","forest"],a:3,en:"wood → forest",ar:'خشب → غابة',tr:'نحتاج خشباً، لنذهب للغابة.'},
  {q:"I'm feeling sick. I'll _______ need to see the doctor tomorrow.",o:["rather","probably","quite","much"],a:1,en:"likely → probably",ar:'على الأرجح → probably',tr:'أشعر بالمرض، على الأرجح سأحتاج الطبيب غداً.'},
  {q:"Thousands of bugs landed on our fields and _______ all the crops.",o:["blossomed","retired","destroyed","located"],a:2,en:"bugs → destroyed",ar:'دمّرت → destroyed',tr:'حطّت آلاف الحشرات على حقولنا ودمّرت المحاصيل.'},
  {q:"We walked in the park and looked for a nice place to have our _______.",o:["picnic","bridge","valley","location"],a:0,en:"eat outside → picnic",ar:'نزهة → picnic',tr:'مشينا في الحديقة وبحثنا عن مكان جميل لنزهتنا.'},
],
l3:[
  // Exercise A — gerunds
  {q:"We look forward to _______ our old friends every summer.",o:["seen","see","saw","seeing"],a:3,en:"look forward to + -ing",ar:'look forward to + ‑ing',tr:'نتطلّع لرؤية أصدقائنا القدامى كلّ صيف.'},
  {q:"_______ this down, please.",o:["Writing","Write","Written","Wrote"],a:1,en:"command → base verb",ar:'أمر → Write',tr:'اكتب هذا من فضلك.'},
  {q:"My husband is frightened of _______.",o:["flying","fly","flew","flown"],a:0,en:"preposition + -ing",ar:'حرف جر + ‑ing',tr:'زوجي يخاف من الطيران.'},
  {q:"_______ a class can help you learn a language.",o:["Took","Take","Taking","Taken"],a:2,en:"subject → -ing",ar:'فاعل → Taking',tr:'أخذ دورة يمكن أن يساعدك على تعلّم لغة.'},
  {q:"Do you want to _______ to a movie tonight?",o:["went","going","go","gone"],a:2,en:"want to + base",ar:'want to + مجرّد',tr:'هل تريد الذهاب لفيلم الليلة؟'},
  {q:"Be careful with this glass. Don't _______ it.",o:["breaking","broke","break","broken"],a:2,en:"don't + base",ar:"don't + مجرّد",tr:'انتبه لهذا الكوب، لا تكسره.'},
  // Exercise B — المعاني
  {q:"to continue",o:["to do something without stopping","to make a visit without asking","not loudly","out of money"],a:0,en:"continue = keep doing",ar:'يستمرّ',tr:'يستمرّ = يفعل الشيء بلا توقّف.'},
  {q:"to drop in",o:["to make a visit, often without asking first","to do something without stopping","in a very short time","also"],a:0,en:"drop in = visit",ar:'زيارة مفاجئة',tr:'يزور فجأة.'},
  {q:"certificate",o:["a paper that shows something important","out of money","having great satisfaction","not loudly"],a:0,en:"certificate = paper",ar:'شهادة = ورقة',tr:'شهادة = ورقة تثبت شيئاً مهمّاً.'},
  {q:"besides",o:["also","not loudly","out of money","in a very short time"],a:0,en:"besides = also",ar:'بالإضافة = also',tr:'بالإضافة إلى ذلك = أيضاً.'},
  {q:"pretty soon",o:["in a very short time","also","not loudly","to continue"],a:0,en:"pretty soon = very soon",ar:'قريباً جداً',tr:'قريباً جداً.'},
  {q:"proud",o:["having a feeling of great satisfaction","out of money","not loudly","also"],a:0,en:"proud = satisfied",ar:'فخور',tr:'فخور = شعور برضا كبير.'},
  {q:"broke",o:["out of money","having great satisfaction","a paper","not loudly"],a:0,en:"broke = no money",ar:'مفلس',tr:'مفلس = بلا مال.'},
  // Exercise C — gerunds من الصندوق
  {q:"Would you like to have a roommate instead of _______ alone?",o:["living","live","lived","to live"],a:0,en:"instead of + -ing",ar:'instead of + ‑ing',tr:'هل تحبّ أن يكون لك زميل سكن بدل العيش وحدك؟'},
  {q:"I'm broke. Not _______ any money is difficult.",o:["having","have","had","to has"],a:0,en:"subject → -ing",ar:'فاعل → having',tr:'أنا مفلس، عدم امتلاك المال صعب.'},
  {q:"_______ TV is not good for young children.",o:["Watching","Watch","Watched","To watching"],a:0,en:"subject → -ing",ar:'فاعل → Watching',tr:'مشاهدة التلفاز ليست جيّدة للأطفال.'},
  {q:"Are you unhappy about _______ the game last night?",o:["losing","lose","lost","to lose"],a:0,en:"about + -ing",ar:'about + ‑ing',tr:'هل أنت حزين بسبب خسارة المباراة البارحة؟'},
  {q:"_______ my own home is something that I look forward to.",o:["Buying","Buy","Bought","To buying"],a:0,en:"subject → -ing",ar:'فاعل → Buying',tr:'شراء بيتي الخاصّ شيء أتطلّع إليه.'},
  {q:"Mrs. Lind is going to London, but she's nervous about _______.",o:["flying","fly","flew","flown"],a:0,en:"about + -ing",ar:'about + ‑ing',tr:'ستسافر السيّدة لِند للندن لكنها متوتّرة من الطيران.'},
  // Exercise D — نفس المعنى
  {q:"Could you drive me home?",o:["Would you drive me?","Will you leave early?","You don't have to go.","We must not be late."],a:0,en:"request = request",ar:'طلب = طلب',tr:'هل يمكنك إيصالي للبيت؟'},
  {q:"You don't have to take your hat off.",o:["You can choose to remove it or keep it on.","We don't allow him to do that.","We must not be late.","Will you help him?"],a:0,en:"not necessary",ar:'غير ضروري = لك الخيار',tr:'لست مضطرّاً لخلع قبّعتك.'},
  {q:"Robert must not hit other kids.",o:["We don't allow him to do that.","You don't have to go.","Could you drop by then?","Will you leave early?"],a:0,en:"must not = not allowed",ar:'ممنوع = لا نسمح',tr:'يجب ألّا يضرب روبرت الأطفال.'},
  {q:"We have to be on time.",o:["We must not be late.","You don't have to go.","Will you help him?","Is she going to come then?"],a:0,en:"have to = must",ar:'يجب أن نكون في الموعد',tr:'يجب أن نكون في الموعد.'},
  {q:"Would you visit me tomorrow?",o:["Could you drop by then?","Will you leave early?","We must not be late.","You don't have to go."],a:0,en:"visit = drop by",ar:'زيارة = drop by',tr:'هل تزورني غداً؟'},
  // Exercise E — must / must not
  {q:"Everyone is arriving late to work. The traffic _______ be bad.",o:["must","must not"],a:0,en:"strong guess → must",ar:'استنتاج → must',tr:'الجميع يتأخّر، لا بدّ أنّ الزحام شديد.'},
  {q:"Frank always asks to drive. He really _______ like to drive.",o:["must","must not"],a:0,en:"always asks → must",ar:'دائماً يطلب → must',tr:'فرانك يطلب القيادة دائماً، لا بدّ أنه يحبّها.'},
  {q:"Robert is getting low grades in math. He _______ understand math.",o:["must not","must"],a:0,en:"low grades → must not",ar:'درجات منخفضة → must not',tr:'لا بدّ أنّ روبرت لا يفهم الرياضيات.'},
  {q:"Mark isn't sick, but he's off today. He _______ have something to do.",o:["must","must not"],a:0,en:"guess → must",ar:'استنتاج → must',tr:'لا بدّ أنّ لديه شيئاً يفعله.'},
  {q:"Your daughter's been sick for a week. You _______ be worried.",o:["must","must not"],a:0,en:"guess → must",ar:'استنتاج → must',tr:'ابنتك مريضة منذ أسبوع، لا بدّ أنك قلق.'},
  // Exercise G — الطلب والردّ
  {q:"Will you lock the door, please?",o:["Sure, I'll do it when I leave.","I can't. I won't be near a phone.","I'm sorry, I can't cook.","I can try. Is it very difficult?"],a:0,en:"lock door → when I leave",ar:'أقفله عند خروجي',tr:'هل تقفل الباب؟ — طبعاً، عند خروجي.'},
  {q:"Could you give me a call tonight?",o:["I can't. I won't be near a phone.","Yes, I will. It's my turn to do them.","Sure, I'll do it when I leave.","I'm sorry, I can't cook."],a:0,en:"call → phone",ar:'اتّصال → هاتف',tr:'هل تتّصل بي الليلة؟ — لا أستطيع، لن أكون قرب هاتف.'},
  {q:"Will you sign this letter now?",o:["Sorry, I can't sign until I've read it.","I'm sorry, I can't cook.","Yes, I will. It's my turn to do them.","I can try. Is it very difficult?"],a:0,en:"sign → read it",ar:'توقيع → أقرأه أولاً',tr:'هل توقّع هذه الرسالة الآن؟ — آسف، ليس قبل أن أقرأها.'},
  {q:"Can you help me with my math?",o:["I can try. Is it very difficult?","I'm sorry, I can't cook.","Sure, I'll do it when I leave.","Sorry, I can't sign."],a:0,en:"help → I can try",ar:'سأحاول',tr:'هل تساعدني في الرياضيات؟ — سأحاول، هل هي صعبة؟'},
  // Exercise H — الإجابة الأفضل
  {q:"Mary has a lot of _______. She just won $10,000.",o:["pain","candles","luck","songs"],a:2,en:"won → luck",ar:'حظّ → luck',tr:'ماري محظوظة جداً، ربحت 10,000 دولار.'},
  {q:"We got a _______ which says that we completed the course.",o:["certificate","turn","birthday","couple"],a:0,en:"paper → certificate",ar:'شهادة → certificate',tr:'حصلنا على شهادة تثبت إكمالنا الدورة.'},
  {q:"Please _______ the radio. I can't hear it.",o:["come over","turn off","turn up","take turns"],a:2,en:"can't hear → turn up",ar:'ارفع الصوت → turn up',tr:'ارفع صوت الراديو من فضلك، لا أسمعه.'},
  {q:"She was born ten years ago today. Today's her _______.",o:["birth","candle","present","birthday"],a:3,en:"→ birthday",ar:'عيد ميلادها',tr:'اليوم عيد ميلادها.'},
  {q:"Do you mind if I _______ tonight?",o:["drop by","turn down","blow out","am born"],a:0,en:"visit → drop by",ar:'أمرّ عليك → drop by',tr:'هل تمانع إن مررت عليك الليلة؟'},
  {q:"Mark: My son's afraid of big dogs. Tom: Why is he _______ them?",o:["proud of","excited by","scared of","pleased with"],a:2,en:"afraid = scared",ar:'خائف → scared of',tr:'لماذا يخاف منها؟'},
  {q:"My grandfather has a lot of money. He's _______.",o:["poor","rich","sick","tall"],a:1,en:"a lot of money → rich",ar:'غني → rich',tr:'جدّي لديه مال كثير، هو غني.'},
  {q:"Bill slept well last night. His bed was _______.",o:["comfortable","unpleasant","underneath","certain"],a:0,en:"slept well → comfortable",ar:'مريح → comfortable',tr:'نام بيل جيّداً، كان سريره مريحاً.'},
  {q:"\"She wrapped the book\" means she _______.",o:["put it out","paid a lot for it","put it aside","put paper around it"],a:3,en:"wrap = put paper around",ar:'غلّفته بالورق',tr:'غلّفت الكتاب = وضعت حوله ورقاً.'},
  {q:"We have enough money to get a new car. We can _______ it.",o:["afford","continue","drop in","believe in"],a:0,en:"enough money → afford",ar:'نقدر على ثمنه → afford',tr:'لدينا مال كافٍ، نقدر على شرائها.'},
  {q:"Rick: Can you lend me a couple of pencils? Jane: Okay. I have _______ for you.",o:["four","two","twelve","ten"],a:1,en:"a couple = two",ar:'couple = اثنان',tr:'هل تقرضني قلمين؟ حسناً، عندي اثنان لك.'},
  {q:"Do you have a match? I need one for the _______ on the cake.",o:["candles","gifts","blossoms","sweets"],a:0,en:"match → candles",ar:'الشموع → candles',tr:'هل لديك عود ثقاب؟ أحتاجه لشموع الكعكة.'},
  {q:"My daughter received a lot of _______ for her birthday.",o:["ages","goals","sales","gifts"],a:3,en:"birthday → gifts",ar:'هدايا → gifts',tr:'تلقّت ابنتي هدايا كثيرة في عيد ميلادها.'},
  {q:"The students _______ answering the questions.",o:["took turns","turned","took off","turned on"],a:0,en:"one after another → took turns",ar:'تناوبوا → took turns',tr:'تناوب الطلاب على الإجابة.'},
  {q:"John's excited about his trip next month. He's _______ it.",o:["frightened about","looking forward to","worried about","bored by"],a:1,en:"excited → looking forward to",ar:'متحمّس → يتطلّع إليها',tr:'جون متحمّس لرحلته، يتطلّع إليها.'},
],
l4:[
  // Exercise B — طابق السؤال بالجواب
  {q:"Why was this flight better than your last one?",o:["The weather wasn't as rough as before, so we had a smoother flight.","Because I wanted to compare fares to New York.","They pay a fare, board a vehicle, and sit in their seats.","JetWind has the best one online."],a:0,en:"better flight → smoother",ar:'رحلة أفضل → أهدأ',tr:'لماذا كانت هذه الرحلة أفضل؟ — الطقس لم يكن مضطرباً.'},
  {q:"Why did you connect to the Internet last night?",o:["Because I wanted to compare fares to New York.","The apple pie was the best.","She said that all passengers had to board.","They pay a fare and sit in their seats."],a:0,en:"Internet → compare fares",ar:'لمقارنة الأسعار',tr:'لماذا دخلت الإنترنت؟ — لأقارن أسعار التذاكر.'},
  {q:"What advice did your friend give?",o:["He said that I ought to compare the air fares of three or four airlines.","The weather wasn't as rough as before.","JetWind has the best one online.","They pay a fare."],a:0,en:"advice → ought to",ar:'نصيحة → ought to',tr:'بماذا نصحك صديقك؟ — قال ينبغي أن أقارن الأسعار.'},
  {q:"What did the flight attendant at the gate just say?",o:["She said that all passengers had to board the plane as soon as possible.","He said that I ought to compare the air fares.","The apple pie was the best.","Because I wanted to compare fares."],a:0,en:"reported speech → had to",ar:'كلام منقول → had to',tr:'ماذا قالت المضيفة؟ — قالت إنّ على الركّاب الصعود فوراً.'},
  {q:"Which refreshment was the best?",o:["The apple pie was the best because it smelled terrific and tasted great.","JetWind has the best one online.","They pay a fare.","The weather wasn't rough."],a:0,en:"refreshment → apple pie",ar:'المرطّبات → فطيرة التفّاح',tr:'أيّ المرطّبات كانت الأفضل؟ — فطيرة التفّاح.'},
  {q:"What do passengers do?",o:["They pay a fare, board a vehicle, and sit in their seats.","JetWind has the best website.","She said all passengers had to board.","The apple pie was the best."],a:0,en:"passengers → pay a fare, board",ar:'الركّاب يدفعون ويصعدون',tr:'ماذا يفعل الركّاب؟'},
  {q:"Which airline has the best website?",o:["JetWind has the best one online because it's the easiest to use.","They pay a fare.","The weather wasn't rough.","The apple pie was the best."],a:0,en:"website → JetWind",ar:'أفضل موقع → JetWind',tr:'أيّ شركة طيران لديها أفضل موقع؟'},
  // Exercise D — well / badly
  {q:"Bill spelled five words wrong. Tim spelled two wrong. Alice spelled four wrong. Tim spelled _______ of all.",o:["the best","better","the well","best than"],a:0,en:"fewest mistakes → the best",ar:'أقلّ أخطاء → the best',tr:'تيم تهجّى الأفضل بين الجميع.'},
  {q:"My friend ran three miles and was tired. I ran five miles but wasn't tired. I ran _______ my friend.",o:["better than","the best","weller than","good than"],a:0,en:"well → better than",ar:'well → better than',tr:'ركضت أفضل من صديقي.'},
  {q:"Mike had three car accidents. Maria had one. Gloria had two. Mike drives _______ of all.",o:["the worst","worse","the baddest","worst than"],a:0,en:"badly → the worst",ar:'badly → the worst',tr:'مايك يقود الأسوأ بين الجميع.'},
  {q:"Steve shot four birds. Rick shot six. Mark shot seven. Mark shot _______ of all.",o:["the best","better","the most well","best than"],a:0,en:"well → the best",ar:'well → the best',tr:'مارك أصاب الأفضل بين الجميع.'},
  {q:"I scored 10 points. Ken scored 16 points. Ken scored _______ me.",o:["better than","the best","weller than","good than"],a:0,en:"two people → better than",ar:'اثنان → better than',tr:'كين سجّل أفضل منّي.'},
  // Exercise E — reported speech
  {q:"Bob: I'll return later. — Bob said he _______ later.",o:["might return","returned","would return"],a:2,en:"will → would",ar:'will → would',tr:'قال بوب إنه سيعود لاحقاً.'},
  {q:"Stella: We may drop by next week. — Stella said that they _______ by next week.",o:["were dropping","would drop","might drop"],a:2,en:"may → might",ar:'may → might',tr:'قالت ستيلا إنهم ربّما يمرّون الأسبوع القادم.'},
  {q:"Driving instructor: You must not park here. — The driving instructor said you _______ park here.",o:["have had to","must not","didn't have to"],a:1,en:"must not stays",ar:'must not تبقى',tr:'قال مدرّب القيادة إنه يجب ألّا تقف هنا.'},
  {q:"SSgt Travis: You and your men must practice tonight. — SSgt Travis said that we _______ practice tonight.",o:["had to","can","could"],a:0,en:"must → had to",ar:'must → had to',tr:'قال الرقيب إنه يجب أن نتدرّب الليلة.'},
  {q:"Mr. Clark: You don't have to do all the homework. — Mr. Clark said we _______ do all the homework.",o:["must not","didn't have to","didn't"],a:1,en:"don't have to → didn't have to",ar:"don't have to → didn't have to",tr:'قال إنه لا داعي لحلّ كلّ الواجب.'},
  {q:"Lt Col Blue: We could have a school picnic in the spring. — The colonel said that we _______ a school picnic in the spring.",o:["could have","would have","have had"],a:0,en:"could stays",ar:'could تبقى',tr:'قال العقيد إنه يمكننا عمل نزهة في الربيع.'},
  {q:"Ms. Oliver: You have to call three people back. — She said you _______ three people back.",o:["were calling","would call","had to call"],a:2,en:"have to → had to",ar:'have to → had to',tr:'قالت إنّ عليك معاودة الاتّصال بثلاثة أشخاص.'},
  // Exercise F — الإجابة الأفضل
  {q:"We met our friends at the movies by chance. We met them _______.",o:["accidentally","smoothly","easily","proudly"],a:0,en:"by chance = accidentally",ar:'بالصدفة',tr:'قابلنا أصدقاءنا بالصدفة.'},
  {q:"Call me as soon as you arrive home. (as soon as = ?)",o:["when","before","after","by"],a:0,en:"as soon as ≈ when",ar:'حالما ≈ when',tr:'اتّصل بي حالما تصل البيت.'},
  {q:"I think Jane's making some coffee. Can you _______ it, too?",o:["read","connect","board","smell"],a:3,en:"coffee → smell",ar:'تشمّها → smell',tr:'أظنّ جين تحضّر قهوة، هل تشمّها أيضاً؟'},
  {q:"Dana slipped on the icy road _______ she got out of the car.",o:["besides","underneath","abroad","just as"],a:3,en:"same moment → just as",ar:'في نفس اللحظة → just as',tr:'انزلقت دانا على الطريق المتجمّد لحظة نزولها من السيّارة.'},
  {q:"We had a difficult boat trip. The ocean was _______.",o:["smooth","fast","rough","calm"],a:2,en:"difficult trip → rough",ar:'مضطرب → rough',tr:'كانت رحلة القارب صعبة، كان المحيط مضطرباً.'},
  {q:"They had to _______ the picnic because of bad weather.",o:["open","plan","promise","cancel"],a:3,en:"bad weather → cancel",ar:'يلغي → cancel',tr:'اضطرّوا لإلغاء النزهة بسبب الطقس.'},
  {q:"Good things always happen to her. She's so _______.",o:["lucky","basic","upset","soft"],a:0,en:"good things → lucky",ar:'محظوظة → lucky',tr:'الأشياء الجيّدة تحدث لها دائماً، هي محظوظة جداً.'},
  {q:"The meeting continued for a long time. It went _______.",o:["from now on","on and on","in a hurry","right away"],a:1,en:"long time → on and on",ar:'استمرّ بلا توقّف → on and on',tr:'استمرّ الاجتماع طويلاً بلا توقّف.'},
  {q:"The soup is delicious. It has a wonderful _______.",o:["touch","meal","sound","taste"],a:3,en:"delicious → taste",ar:'طعم → taste',tr:'الحساء لذيذ، طعمه رائع.'},
  {q:"I don't know how to fix a lamp, but I'll _______ to do it well.",o:["ought","used","serve","attempt"],a:3,en:"try → attempt",ar:'أحاول → attempt',tr:'لا أعرف إصلاح المصباح، لكنّي سأحاول.'},
  {q:"If I make you a _______ to take you sightseeing, I'll certainly do it.",o:["program","problem","promotion","promise"],a:3,en:"make a promise",ar:'وعد → promise',tr:'إذا وعدتك بجولة سياحية، سأفعلها بالتأكيد.'},
  {q:"Many people take _______ when they are in foreign cities.",o:["turns","barns","fares","tours"],a:3,en:"foreign cities → tours",ar:'جولات → tours',tr:'كثير من الناس يأخذون جولات في المدن الأجنبية.'},
]
};

// ═══════════════════════════════════════
// REVIEW — الدرس 5 (Review) + أسئلة الواجبات (Homework)
// ═══════════════════════════════════════
const REVIEW=[
  // — Lesson 5 · Select the meaning of the underlined word —
  {q:"I'm on the phone now. I'm talking to Cindy. (on the phone = ?)",o:["using the phone","cleaning the phone"],a:0,en:"on the phone = using it",ar:'أتحدّث بالهاتف',tr:'أنا على الهاتف الآن، أتحدّث مع سيندي.'},
  {q:"The flight to England was very rough. (rough = ?)",o:["long","uncomfortable"],a:1,en:"rough flight = uncomfortable",ar:'رحلة مضطربة = غير مريحة',tr:'كانت الرحلة إلى إنجلترا مضطربة جداً.'},
  {q:"The cows are grazing on the hill. (grazing = ?)",o:["sleeping on the land","eating plants and grass"],a:1,en:"graze = eat grass",ar:'ترعى = تأكل العشب',tr:'الأبقار ترعى على التلّ.'},
  {q:"Do you have a couple of dollars? (a couple = ?)",o:["two","three"],a:0,en:"couple = two",ar:'couple = اثنان',tr:'هل معك دولاران؟'},
  {q:"Give all of the money to the children. (all = ?)",o:["75%","100%"],a:1,en:"all = 100%",ar:'كلّ = 100%',tr:'أعطِ كلّ المال للأطفال.'},
  {q:"A lot of young people join the service after graduation. (the service = ?)",o:["history, science, and math classes","army, navy, and air force"],a:1,en:"service = military",ar:'الخدمة = الجيش',tr:'كثير من الشباب ينضمّون للخدمة العسكرية بعد التخرّج.'},
  {q:"I'm an E-5 in the US Army. (E-5 = ?)",o:["sergeant","private"],a:0,en:"E-5 = sergeant",ar:'E-5 = رقيب',tr:'أنا E-5 في الجيش الأمريكي.'},
  {q:"The train fares are expensive this year. (fares = ?)",o:["schedules","prices"],a:1,en:"fare = price",ar:'الأجرة = السعر',tr:'أجور القطار غالية هذا العام.'},
  {q:"He's an officer in the US Navy. (officer = ?)",o:["commander","seaman"],a:0,en:"officer → commander",ar:'ضابط → commander',tr:'هو ضابط في البحرية الأمريكية.'},
  // — Lesson 5 · Exercise R (modals) —
  {q:"The sergeant said that we _______ smoke in the barracks.",o:["had to","wouldn't","must not"],a:2,en:"prohibition → must not",ar:'ممنوع → must not',tr:'قال الرقيب إنه يجب ألّا ندخّن في الثكنة.'},
  {q:"My car's back from the mechanic. You _______ pick me up.",o:["would not","don't have to","must not"],a:1,en:"not necessary → don't have to",ar:'غير ضروري',tr:'عادت سيّارتي من الميكانيكي، لا داعي لأن تأخذني.'},
  {q:"I'm tired now. I won't work tonight. I _______ do it in the morning.",o:["going to","had to","will"],a:2,en:"future → will",ar:'مستقبل → will',tr:'أنا متعب، سأعمل صباحاً.'},
  {q:"Tom: What will you do after graduation? Carl: I'm _______ enlist in the navy.",o:["would","going to","could"],a:1,en:"I'm going to",ar:'I\'m going to',tr:'سألتحق بالبحرية.'},
  {q:"Matt: _______ you help me move this desk? Don: Yes, I can.",o:["Could","Must","Going to"],a:0,en:"request → Could",ar:'طلب → Could',tr:'هل تساعدني في نقل المكتب؟ نعم.'},
  {q:"Sgt Blake: When do you have to report to your new base? Sgt Clark: I _______ be there no later than Saturday.",o:["must","would","could"],a:0,en:"necessity → must",ar:'ضرورة → must',tr:'يجب أن أكون هناك قبل السبت.'},
  {q:"We _______ drive fast near a school.",o:["must not","not going to","don't have to"],a:0,en:"prohibition → must not",ar:'ممنوع → must not',tr:'يجب ألّا نقود بسرعة قرب المدرسة.'},
  // — Lesson 5 · Circle the best answer —
  {q:"People build _______ to cross rivers.",o:["cabins","bridges","forests"],a:1,en:"cross rivers → bridges",ar:'جسور',tr:'يبني الناس الجسور لعبور الأنهار.'},
  {q:"Ted _______ his mother that he'd call her every weekend.",o:["promised","reported","canceled"],a:0,en:"he'd call → promised",ar:'وعد → promised',tr:'وعد تِد أمّه أن يتّصل بها كلّ نهاية أسبوع.'},
  {q:"Captain Smith received a _______ major.",o:["station for","retirement from","promotion to"],a:2,en:"captain → major",ar:'ترقية إلى رائد',tr:'حصل النقيب سميث على ترقية إلى رائد.'},
  {q:"How many _______ does the baby have?",o:["tooth","teeth","teeths"],a:1,en:"tooth → teeth",ar:'جمع tooth → teeth',tr:'كم سنّاً عند الطفل؟'},
  {q:"The _______ on apple trees are usually pink and white.",o:["blossoms","farms","plants"],a:0,en:"flowers on trees → blossoms",ar:'أزهار الشجر',tr:'أزهار أشجار التفّاح عادة وردية وبيضاء.'},
  {q:"The general will be _______ the base tomorrow.",o:["boarding","touring","continuing"],a:1,en:"visit around → touring",ar:'يتجوّل في القاعدة',tr:'سيقوم الجنرال بجولة في القاعدة غداً.'},
  {q:"There are twenty _______ on her cake.",o:["picnics","gifts","candles"],a:2,en:"cake → candles",ar:'شموع',tr:'هناك عشرون شمعة على كعكتها.'},
  {q:"The students always _______ Friday.",o:["blow out","look forward to","put aside"],a:1,en:"Friday → look forward to",ar:'يتطلّعون ليوم الجمعة',tr:'يتطلّع الطلاب دائماً ليوم الجمعة.'},
  {q:"The _______ for a general is made up of one or more stars.",o:["insignia","grade","duty"],a:0,en:"stars → insignia",ar:'الشارة → insignia',tr:'شارة الجنرال نجمة أو أكثر.'},
  {q:"Schools in the US need to see a birth _______ for each new student.",o:["location","website","certificate"],a:2,en:"birth certificate",ar:'شهادة ميلاد',tr:'تحتاج المدارس شهادة ميلاد لكلّ طالب جديد.'},
  {q:"Jane found a $20 bill on the street. She certainly had some good _______.",o:["luck","gift","song"],a:0,en:"found money → luck",ar:'حظّ',tr:'وجدت جين 20 دولاراً في الشارع، حظّها جيّد.'},
  {q:"Mr. Cole has over 500 sheep on his _______.",o:["picnic","ranch","crop"],a:1,en:"sheep → ranch",ar:'مزرعة مواشٍ',tr:'لدى السيّد كول أكثر من 500 خروف في مزرعته.'},
  {q:"Monica didn't know about the party for her. It was a _______.",o:["report","location","surprise"],a:2,en:"didn't know → surprise",ar:'مفاجأة',tr:'لم تكن مونيكا تعلم بالحفلة، كانت مفاجأة.'},
  {q:"I can't _______ to buy a car. I don't have enough money.",o:["enlist","sing","afford"],a:2,en:"money → afford",ar:'أقدر على ثمنها → afford',tr:'لا أقدر على شراء سيّارة، ليس لديّ مال كافٍ.'},
  {q:"Mr. and Mrs. Jones have five _______.",o:["children","childrens","childs"],a:0,en:"child → children",ar:'جمع child → children',tr:'لدى عائلة جونز خمسة أطفال.'},
];

// — واجب الدرس 1 (Homework · Circle the best answer) —
REVIEW.push(
  {q:"Frank: Why did Martin get that short haircut? Tony: He _______ in the army.",o:["retired","promoted","enlisted"],a:2,en:"join army → enlisted",ar:'التحق → enlisted',tr:'لماذا قصّ مارتن شعره؟ التحق بالجيش.'},
  {q:"What does Jack do in the air force? — He has an interesting job. He _______ dogs.",o:["trains","serves","learns"],a:0,en:"teach dogs → trains",ar:'يدرّب → trains',tr:'يدرّب الكلاب.'},
  {q:"I _______ my country. I was in the military for five years.",o:["assigned","served","retired"],a:1,en:"military → served",ar:'خدمت بلدي → served',tr:'خدمت بلدي خمس سنوات في الجيش.'},
  {q:"In the US, the _______ are made of the Army, the Navy, the Marine Corps, and the Air Force.",o:["armed forces","military ranks","assignments"],a:0,en:"→ armed forces",ar:'القوّات المسلّحة',tr:'تتكوّن القوّات المسلّحة الأمريكية من…'},
  {q:"A gold bar is the _______ for a second lieutenant in the US Army.",o:["opportunity","ensign","insignia"],a:2,en:"bar → insignia",ar:'شارة → insignia',tr:'الشريط الذهبي شارة الملازم الثاني.'},
  {q:"If you want to get a job in this bank, you need to go to the _______ office.",o:["personnel","opportunity","promotion"],a:0,en:"jobs → personnel office",ar:'شؤون الموظّفين',tr:'إذا أردت وظيفة في البنك، اذهب لمكتب شؤون الموظّفين.'},
  {q:"They've just joined the army. They're new _______.",o:["captains","recruits","retired men"],a:1,en:"just joined → recruits",ar:'مجنّدون جدد',tr:'التحقوا للتوّ بالجيش، هم مجنّدون جدد.'},
  {q:"Did you see the general in Washington? — No, I didn't have the _______ to see him.",o:["training","opportunity","promotion"],a:1,en:"chance → opportunity",ar:'فرصة',tr:'لم تسنح لي الفرصة لرؤيته.'},
  {q:"If you're a father, it's your _______ to spend time with your family.",o:["location","bar","duty"],a:2,en:"responsibility → duty",ar:'واجبك → duty',tr:'إذا كنت أباً، فمن واجبك قضاء الوقت مع عائلتك.'},
  {q:"What are you going to do after your _______? — I'm going to relax for a few months.",o:["retirement","corporal","commander"],a:0,en:"stop working → retirement",ar:'تقاعد',tr:'ماذا ستفعل بعد تقاعدك؟'},
  {q:"I didn't know how to use that weapon until I got some _______.",o:["duty","training","location"],a:1,en:"learn → training",ar:'تدريب',tr:'لم أعرف استخدام السلاح حتى تلقّيت تدريباً.'},
  {q:"My mother doesn't work any longer. She's _______.",o:["retired","promoted","assigned"],a:0,en:"no longer works → retired",ar:'متقاعدة',tr:'أمّي لا تعمل الآن، هي متقاعدة.'},
  {q:"I don't know anything about cooking. I need to take _______ class.",o:["a basic","an advanced","an O-1"],a:0,en:"beginner → basic",ar:'مبتدئ → basic',tr:'لا أعرف الطبخ، أحتاج دورة أساسية.'},
  {q:"Soldier, we _______ you at a new post. Here are your orders.",o:["are up for","are stationing","have enlisted"],a:1,en:"new post → stationing",ar:'نعيّنك في موقع جديد',tr:'أيّها الجندي، سنعيّنك في موقع جديد.'}
);

// — واجب الدرس 2 (Homework · Circle the best answer) —
REVIEW.push(
  {q:"Where did they build the new commissary? — They _______ it on Trent Street.",o:["destroyed","reflected","located"],a:2,en:"place it → located",ar:'وضعوه في موقع → located',tr:'أين بنوا البقالة الجديدة؟ في شارع ترِنت.'},
  {q:"My aunt _______ six children.",o:["raised","bloomed","planted"],a:0,en:"children → raised",ar:'ربّت → raised',tr:'ربّت عمّتي ستّة أطفال.'},
  {q:"Karen left work an hour ago. She's _______ at home by now.",o:["extremely","rather","probably"],a:2,en:"likely → probably",ar:'على الأرجح',tr:'غادرت كارين قبل ساعة، على الأرجح هي في البيت الآن.'},
  {q:"The children sat _______ the teacher and listened to her stories.",o:["around","ever","farther"],a:0,en:"in a circle → around",ar:'حول',tr:'جلس الأطفال حول المعلّمة.'},
  {q:"The lake's very calm today. I can see my _______.",o:["harvest","reflection","promotion"],a:1,en:"calm water → reflection",ar:'انعكاسي',tr:'البحيرة هادئة، أرى انعكاسي.'},
  {q:"The major will be late _______ the snow storm.",o:["rather","a lot","because of"],a:2,en:"reason → because of",ar:'بسبب',tr:'سيتأخّر الرائد بسبب العاصفة.'},
  {q:"My uncle _______ his own vegetables in his garden.",o:["grows","reflects","repairs"],a:0,en:"vegetables → grows",ar:'يزرع → grows',tr:'عمّي يزرع خضاره في حديقته.'},
  {q:"I live in the _______ between those mountains.",o:["bridge","valley","thick"],a:1,en:"between mountains → valley",ar:'وادٍ',tr:'أسكن في الوادي بين تلك الجبال.'},
  {q:"There are a lot of deer in that _______.",o:["forest","blossom","farmer"],a:0,en:"deer → forest",ar:'غابة',tr:'هناك غزلان كثيرة في تلك الغابة.'},
  {q:"Children must wash their hands after they play in the _______.",o:["cow","dirt","gate"],a:1,en:"wash hands → dirt",ar:'التراب',tr:'يجب أن يغسل الأطفال أيديهم بعد اللعب في التراب.'},
  {q:"_______ are large animals you can find on a ranch.",o:["Cows and bulls","Blossoms and flowers","Silos and barns"],a:0,en:"animals → cows and bulls",ar:'حيوانات',tr:'الأبقار والثيران حيوانات كبيرة في المزرعة.'},
  {q:"My son raises cattle. He's a _______.",o:["cattler","raiser","rancher"],a:2,en:"cattle → rancher",ar:'مربّي مواشٍ',tr:'ابني يربّي الماشية، هو مربّي مواشٍ.'},
  {q:"The trees look beautiful when they are _______.",o:["because of","in bloom","a green thumb"],a:1,en:"flowers → in bloom",ar:'مزهرة',tr:'تبدو الأشجار جميلة وهي مزهرة.'},
  {q:"The long winter _______ me feel sad.",o:["lights","makes","harvests"],a:1,en:"make + feel",ar:'يجعلني → makes',tr:'الشتاء الطويل يجعلني حزيناً.'},
  {q:"The grass is so green and _______. It's really beautiful.",o:["thick","sick","quiet"],a:0,en:"grass → thick",ar:'كثيف',tr:'العشب أخضر وكثيف.'}
);

// — واجب الدرس 4 (Homework · Circle the best answer) —
REVIEW.push(
  {q:"Mr. King spent a lot of time to write a complete _______ for his boss.",o:["group","tour","report"],a:2,en:"write → report",ar:'تقرير',tr:'أمضى السيّد كينغ وقتاً طويلاً في كتابة تقرير كامل لمديره.'},
  {q:"I'll certainly help you. I _______ that I'll help you.",o:["promise","taste","take a chance"],a:0,en:"certainly → promise",ar:'أعدك',tr:'سأساعدك بالتأكيد، أعدك.'},
  {q:"Bob looked at dozens of _______ to find the information he needed.",o:["fares","refreshments","websites"],a:2,en:"information → websites",ar:'مواقع إلكترونية',tr:'تصفّح بوب عشرات المواقع ليجد المعلومات.'},
  {q:"Let's _______ the old part of the city today and have lunch there.",o:["tour","board","smell"],a:0,en:"visit → tour",ar:'نتجوّل',tr:'لنتجوّل في الجزء القديم من المدينة.'},
  {q:"I feel _______ because the flight is really rough.",o:["great","sick","lucky"],a:1,en:"rough flight → sick",ar:'أشعر بالغثيان',tr:'أشعر بالمرض لأنّ الرحلة مضطربة.'},
  {q:"Please give me more _______ because the taste is great.",o:["money","soup","time"],a:1,en:"taste → soup",ar:'حساء',tr:'أعطني المزيد من الحساء، طعمه رائع.'},
  {q:"How many people are in your _______?",o:["computer","passenger","group"],a:2,en:"people → group",ar:'مجموعتك',tr:'كم شخصاً في مجموعتك؟'},
  {q:"Ron: Did you put aside any cake for Ann? Tim: Yes, I'm _______ some for her.",o:["saving","cooking","eating"],a:0,en:"put aside = save",ar:'أدّخر → saving',tr:'هل خبّأت كعكاً لآن؟ نعم، أحتفظ ببعضه لها.'}
);
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
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 1 — الرتب والخدمة',w:[
    {e:'enlist',a:'يلتحق بالجيش',em:'✍️'},{e:'recruit',a:'مجنّد',em:'🧑‍✈️'},{e:'personnel',a:'الأفراد',em:'👥'},
    {e:'insignia',a:'شارة',em:'🎖️'},{e:'promotion',a:'ترقية',em:'🏅'},{e:'assignment',a:'مهمّة',em:'📝'},
    {e:'opportunity',a:'فرصة',em:'🚪'},{e:'retirement',a:'تقاعد',em:'🏖️'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 2 — المزارع',w:[
    {e:'cattle',a:'ماشية',em:'🐄'},{e:'harvest',a:'يحصد',em:'🧺'},{e:'valley',a:'وادٍ',em:'🏞️'},
    {e:'forest',a:'غابة',em:'🌲'},{e:'bridge',a:'جسر',em:'🌉'},{e:'reflection',a:'انعكاس',em:'🪞'},
    {e:'extremely',a:'للغاية',em:'🔝'},{e:'probably',a:'على الأرجح',em:'🤔'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 3 — أعياد الميلاد',w:[
    {e:'birthday',a:'عيد ميلاد',em:'🎂'},{e:'certificate',a:'شهادة',em:'📜'},{e:'candle',a:'شمعة',em:'🕯️'},
    {e:'surprise',a:'مفاجأة',em:'🎉'},{e:'afford',a:'يقدر على ثمنه',em:'💳'},{e:'comfortable',a:'مريح',em:'🛋️'},
    {e:'proud',a:'فخور',em:'🦚'},{e:'continue',a:'يستمرّ',em:'▶️'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 4 — السفر',w:[
    {e:'abroad',a:'في الخارج',em:'🌍'},{e:'foreign',a:'أجنبي',em:'🛂'},{e:'passenger',a:'راكب',em:'🧳'},
    {e:'refreshment',a:'مرطّبات',em:'🥤'},{e:'website',a:'موقع إلكتروني',em:'🖥️'},{e:'promise',a:'وعد',em:'🤞'},
    {e:'accidentally',a:'بالصدفة',em:'🙊'},{e:'cancel',a:'يلغي',em:'🚫'},
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
