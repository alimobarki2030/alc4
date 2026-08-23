// ═══════════════════════════════════════
// DATA — BOOK 9
// Lesson 1 (I'd like to open an account) — vocab, grammar, word-order, per-lesson quiz.
// Built lesson by lesson; more lessons get appended here later.
// ═══════════════════════════════════════
const BOOK_ID='book9';

const LESSON_META={
  l1:{ico:'🏦',title:"Lesson 1 — I'd like to open an account",sub:'البنوك · المضارع المستمر للمستقبل · because · أفعال الإحساس (linking)'},
  l2:{ico:'🚗',title:'Lesson 2 — What happened?',sub:'الحوادث والمرور · الماضي المستمر · الأوامر بـ tell/ask · المقارنة والتباين'},
  l3:{ico:'💬',title:'Lesson 3 — A piece of advice',sub:'النصيحة والاقتراح · should / could · أحوال الطريقة (-ly) · How'},
  l4:{ico:'🏜️',title:'Lesson 4 — A trip to New Mexico',sub:'السفر والفنادق · الصفة + that · جُمل that الاسمية · الاعتذار apologize for + ing'}
};
const LESSON_KEYS=Object.keys(LESSON_META);

// ═══════════════════════════════════════
// VOCABULARY
// ═══════════════════════════════════════
const VOCAB={
l1:[
  // — البنك والحسابات —
  {e:'account',a:'حساب بنكي',em:'🏦'},
  {e:'checking account',a:'الحساب الجاري',em:'🏦'},
  {e:'savings account',a:'حساب التوفير',em:'💰'},
  {e:'deposit',a:'إيداع / يودع',em:'📥'},
  {e:'withdrawal',a:'سحب (مبلغ)',em:'🏧'},
  {e:'withdraw',a:'يسحب',past:'withdrew',pa:'سحب',em:'🏧'},
  {e:'cash',a:'نقد / يصرف شيكاً',em:'💵'},
  {e:'bill',a:'ورقة نقدية',em:'💵'},
  {e:'checkbook',a:'دفتر شيكات',em:'📗'},
  {e:'credit card',a:'بطاقة ائتمان',em:'💳'},
  {e:'debit card',a:'بطاقة سحب (مدينة)',em:'💳'},
  {e:'card',a:'بطاقة',em:'💳'},
  {e:'form',a:'استمارة / نموذج',em:'📋'},
  {e:'slip',a:'قسيمة',em:'🧾'},
  {e:'signature',a:'توقيع',em:'✍️'},
  {e:'information',a:'معلومات',em:'ℹ️'},
  {e:'wallet',a:'محفظة',em:'👛'},
  {e:'passport',a:'جواز سفر',em:'🛂'},
  // — الأفعال —
  {e:'open an account',a:'يفتح حساباً',em:'🆕'},
  {e:'close an account',a:'يغلق حساباً',em:'❌'},
  {e:'fill out',a:'يعبّئ (نموذجاً)',em:'🖊️'},
  {e:'complete',a:'يكمل / يُتمّ',em:'✅'},
  {e:'save',a:'يوفّر (المال)',em:'🪙'},
  {e:'spend',a:'ينفق',past:'spent',pa:'أنفق',em:'🛍️'},
  {e:'lose',a:'يفقد',past:'lost',pa:'فقد',em:'❓'},
  {e:'hide',a:'يخبّئ',past:'hid',pa:'خبّأ',em:'🙈'},
  {e:'feel',a:'يشعر / يلمس',past:'felt',pa:'شعر',em:'🤚'},
  {e:'take out of',a:'يسحب من',em:'📤'},
  // — أفعال الإحساس (linking) والتذوّق —
  {e:'taste',a:'يتذوّق / مذاق',em:'👅'},
  {e:'smell',a:'يشمّ / رائحة',em:'👃'},
  {e:'sound',a:'يبدو (صوتاً)',em:'🔊'},
  {e:'look',a:'يبدو (منظراً)',em:'👀'},
  {e:'sweet',a:'حلو',em:'🍪'},
  {e:'salty',a:'مالح',em:'🧂'},
  {e:'sour',a:'حامض',em:'🍋'},
  {e:'bitter',a:'مرّ',em:'💊'},
  {e:'safe',a:'آمن',em:'🔒'},
  // — ظروف —
  {e:'immediately',a:'فوراً',em:'⏱️'},
  {e:'right away',a:'حالاً',em:'⚡'},
  {e:'soon',a:'قريباً',em:'🔜'},
],
l2:[
  // — الحادث والمركبات —
  {e:'accident',a:'حادث',em:'💥'},
  {e:'automobile',a:'سيارة (آلية)',em:'🚗'},
  {e:'auto',a:'سيارة',em:'🚙'},
  {e:'bicycle',a:'درّاجة هوائية',em:'🚲'},
  {e:'bike',a:'درّاجة',em:'🚲'},
  {e:'traffic',a:'حركة المرور',em:'🚦'},
  {e:'traffic jam',a:'ازدحام مروري',em:'🚗'},
  {e:'pole',a:'عمود',em:'🗼'},
  {e:'dent',a:'انبعاج',em:'🔨'},
  {e:'curve',a:'منعطف',em:'↪️'},
  // — الشرطة والقانون —
  {e:'police officer',a:'ضابط شرطة',em:'👮'},
  {e:'ticket',a:'مخالفة',em:'🎫'},
  {e:'fine',a:'غرامة',em:'💵'},
  {e:'fault',a:'خطأ / مسؤولية',em:'⚠️'},
  {e:'at fault',a:'المخطئ / المتسبّب',em:'🙅'},
  {e:'law',a:'قانون',em:'⚖️'},
  {e:'insurance',a:'تأمين',em:'🛡️'},
  {e:'seat belt',a:'حزام الأمان',em:'🔗'},
  // — الأفعال —
  {e:'break',a:'يكسر',past:'broke',pa:'كسر',em:'💔'},
  {e:'cause',a:'يسبّب',em:'➡️'},
  {e:'cross',a:'يعبر',em:'🚸'},
  {e:'obey',a:'يطيع / يلتزم',em:'✅'},
  {e:'bother',a:'يزعج',em:'😤'},
  {e:'fasten',a:'يربط / يثبّت',em:'🔒'},
  {e:'buckle up',a:'يربط الحزام',em:'🔗'},
  {e:'keep on',a:'يستمرّ',past:'kept on',pa:'استمرّ',em:'🔁'},
  {e:'ride',a:'يركب',past:'rode',pa:'ركب',em:'🚴'},
  {e:'run',a:'يقطع (إشارة) / يركض',past:'ran',pa:'قطع',em:'🏃'},
  {e:'face',a:'يواجه',em:'😐'},
  // — الصفات وأخرى —
  {e:'careful',a:'حَذِر',em:'🧐'},
  {e:'careless',a:'مُهمِل',em:'🙄'},
  {e:'heavy traffic',a:'ازدحام كثيف',em:'🚙'},
  {e:'in front of',a:'أمام',em:'⬆️'},
  {e:'in back of',a:'خلف',em:'⬇️'},
  {e:'behind',a:'خلف',em:'🔙'},
  {e:'across',a:'عبر / على الجانب الآخر',em:'↔️'},
  {e:'similar',a:'متشابه',em:'🟰'},
],
l3:[
  // — النصيحة والعلاقات —
  {e:'advice',a:'نصيحة',em:'💬'},
  {e:'opinion',a:'رأي',em:'💭'},
  {e:'truth',a:'الحقيقة',em:'✔️'},
  {e:'lie',a:'كذبة / يكذب',em:'🤥'},
  {e:'a little white lie',a:'كذبة بيضاء',em:'🕊️'},
  {e:'secret',a:'سرّ',em:'🤫'},
  {e:'story',a:'قصة',em:'📖'},
  {e:'feelings',a:'مشاعر',em:'❤️'},
  {e:'friendship',a:'صداقة',em:'🤝'},
  {e:'roommate',a:'شريك السكن',em:'🧑‍🤝‍🧑'},
  {e:'party',a:'حفلة',em:'🎉'},
  // — الأشياء —
  {e:'garage',a:'ورشة / مرآب',em:'🔧'},
  {e:'tool',a:'أداة',em:'🛠️'},
  // — الأفعال —
  {e:'should',a:'ينبغي (نصيحة)',em:'✅'},
  {e:'could',a:'يمكن (اقتراح)',em:'💡'},
  {e:'borrow',a:'يستعير',em:'📥'},
  {e:'lend',a:'يُعير',past:'lent',pa:'أعار',em:'📤'},
  {e:'care about',a:'يهتمّ بـ',em:'🥰'},
  {e:'care for',a:'يحبّ / يعتني بـ',em:'💗'},
  {e:'not care for',a:'لا يستحسن / لا يحبّ',em:'🙁'},
  {e:'enjoy',a:'يستمتع بـ',em:'😊'},
  {e:'fix',a:'يُصلح',em:'🔩'},
  {e:'repair',a:'يُصلح',em:'🔧'},
  {e:'guess',a:'يظنّ / يخمّن',em:'🤔'},
  {e:'hurt',a:'يؤذي / يجرح',past:'hurt',pa:'آذى',em:'🤕'},
  {e:'go out',a:'يخرج (للترفيه)',past:'went out',pa:'خرج',em:'🚶'},
  {e:'park',a:'يركن السيارة',em:'🅿️'},
  // — أحوال الطريقة والصفات —
  {e:'carefully',a:'بعناية',em:'🧐'},
  {e:'carelessly',a:'بإهمال',em:'🙄'},
  {e:'correctly',a:'بشكل صحيح',em:'✔️'},
  {e:'easily',a:'بسهولة',em:'👌'},
  {e:'slowly',a:'ببطء',em:'🐢'},
  {e:'safely',a:'بأمان',em:'🛡️'},
  {e:'badly',a:'بشكل سيّئ',em:'👎'},
  {e:'fast',a:'بسرعة',em:'⚡'},
  {e:'excited',a:'متحمّس',em:'🤩'},
  {e:'maybe',a:'ربما',em:'❓'},
  {e:'someone',a:'شخص ما',em:'🧍'},
  {e:'anyone',a:'أيّ أحد',em:'🙋'},
  {e:'in my opinion',a:'في رأيي',em:'💭'},
],
l4:[
  // — السفر والسيارة —
  {e:'gas station',a:'محطة وقود',em:'⛽'},
  {e:'gasoline',a:'بنزين / وقود',em:'⛽'},
  {e:'tank',a:'خزّان الوقود',em:'🛢️'},
  {e:'gauge',a:'مؤشّر (العدّاد)',em:'🎚️'},
  {e:'baggage',a:'أمتعة',em:'🧳'},
  {e:'alarm clock',a:'منبّه',em:'⏰'},
  {e:'motel',a:'نُزُل / موتيل',em:'🏨'},
  // — غرفة الفندق —
  {e:'bill',a:'الفاتورة',em:'🧾'},
  {e:'closet',a:'خزانة ملابس',em:'🚪'},
  {e:'hanger',a:'علّاقة ملابس',em:'🧷'},
  {e:'sheet',a:'ملاءة',em:'🛏️'},
  {e:'pillow',a:'وسادة',em:'🛌'},
  {e:'blanket',a:'بطّانية',em:'🧣'},
  {e:'bathtub',a:'حوض استحمام',em:'🛁'},
  {e:'restroom',a:'دورة مياه',em:'🚻'},
  {e:'laundry',a:'غسيل',em:'🧺'},
  {e:'lady',a:'سيدة',em:'👩'},
  // — الأفعال —
  {e:'apologize',a:'يعتذر',em:'🙇'},
  {e:'forgive',a:'يسامح',past:'forgave',pa:'سامح',em:'🤝'},
  {e:'hang up',a:'يعلّق (الملابس)',past:'hung up',pa:'علّق',em:'🧷'},
  {e:'mean to',a:'ينوي',past:'meant to',pa:'نوى',em:'🎯'},
  {e:'realize',a:'يُدرك',em:'💡'},
  {e:'run out of',a:'ينفد منه',past:'ran out of',pa:'نفد',em:'🈳'},
  {e:'fill up',a:'يملأ',em:'🔋'},
  {e:'spill',a:'يسكب',em:'💧'},
  {e:'step on',a:'يدوس على',em:'👣'},
  {e:'bathe',a:'يستحمّ',em:'🛀'},
  {e:'take a bath',a:'يأخذ حمّاماً',em:'🛁'},
  {e:'hope to',a:'يأمل أن',em:'🌟'},
  {e:'worry',a:'يقلق',em:'😟'},
  // — الصفات —
  {e:'empty',a:'فارغ',em:'⭕'},
  {e:'full',a:'ممتلئ',em:'🔵'},
  {e:'ready',a:'جاهز',em:'✅'},
  {e:'pleased',a:'مسرور',em:'😌'},
  {e:'sorry',a:'آسف',em:'🙁'},
  {e:'worried about',a:'قلق بشأن',em:'😰'},
  {e:'soft',a:'ناعم',em:'☁️'},
  {e:'hard',a:'قاسٍ / صلب',em:'🧱'},
  {e:'almost',a:'تقريباً',em:'≈'},
  {e:'really',a:'حقّاً',em:'❗'},
]
};

// ═══════════════════════════════════════
// GRAMMAR (قواعد)
// ═══════════════════════════════════════
const GRAMMAR={
l1:[
  {
    title:'Present Progressive for the future', ar:'المضارع المستمر للتعبير عن المستقبل',
    rule:'نستخدم (am/is/are + الفعل+ing) للحديث عن خطّة مستقبلية مؤكّدة أو مرتّبة، غالباً مع كلمة زمن مستقبلية (tomorrow · tonight · next week).',
    parts:[
      {t:'am/is/are + verb-ing',d:'مثال: I am flying to Paris tomorrow. = سأسافر جوّاً إلى باريس غداً.'},
      {t:'مع زمن مستقبلي',d:'tomorrow · tonight · next week · on Monday. مثال: We are leaving tonight.'},
      {t:'= will / be going to',d:'الثلاثة للمستقبل؛ المضارع المستمر للخطط المؤكّدة: The plane is arriving at 3:00.'},
    ],
    check:{q:'We _______ to Italy tomorrow morning.',o:['are flying','fly','will flying','flied'],a:0,en:'future plan → are flying',ar:'خطة مستقبلية مؤكّدة → are flying'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'am/is/are',c:'v'},{t:'+',c:'p'},{t:'verb-ing',c:'k'}],
    compare:[
      {c1:'The plane arrives at 3:00. (جدول)',c2:'The plane is arriving at 3:00. (خطة مؤكّدة)',ar:'المضارع المستمر للمستقبل القريب المؤكّد'},
      {c1:'I will visit her tonight.',c2:'I am visiting her tonight.',ar:'كلاهما للمستقبل'},
    ],
    examples:[
      {s:'We are flying to Rome tonight.',tr:'سنسافر جوّاً إلى روما الليلة.',ar:'are + flying = خطة مستقبلية',ok:true},
      {s:'Our plane is arriving tomorrow morning.',tr:'ستصل طائرتنا صباح الغد.',ar:'is + arriving = المستقبل',ok:true},
      {s:'I am fly to Dallas tomorrow.',wrong:'am fly',right:'am flying',tr:'لا بدّ من إضافة ing بعد am/is/are.',ok:false},
    ]
  },
  {
    title:'Using because to connect clauses', ar:'because لربط جملتين (السبب)',
    rule:'because تبدأ الجملة التي تُفسّر السبب. عند الكلام نضع جملة because في النهاية؛ وعند الكتابة يمكن أن تأتي في البداية (مع فاصلة).',
    parts:[
      {t:'result + because + reason',d:'مثال: I\'m tired because I worked late. = أنا متعب لأنني عملت متأخراً.'},
      {t:'Why …? → because …',d:'للإجابة عن السؤال بـ why. مثال: Why is she studying? Because she has a test.'},
      {t:'في الكتابة يمكن التقديم',d:'Because it was raining, they went to the airport. (مع فاصلة)'},
    ],
    check:{q:'Why is she studying? She\'s studying _______ she has a test.',o:['because','but','so','and'],a:0,en:'reason → because',ar:'السبب → because'},
    formula:[{t:'Result',c:'s'},{t:'+',c:'p'},{t:'because',c:'v'},{t:'+',c:'p'},{t:'reason',c:'k'}],
    compare:[
      {c1:'He\'s eating fish because it\'s cheap.',c2:'He\'s eating fish because he likes it.',ar:'because تُقدّم السبب'},
      {c1:'كلام: I stayed home because I was sick.',c2:'كتابة: Because I was sick, I stayed home.',ar:'الموضع يختلف بين الكلام والكتابة'},
    ],
    examples:[
      {s:"I'm working late because I want to make more money.",tr:'أعمل متأخراً لأنني أريد كسب مال أكثر.',ar:'because = السبب',ok:true},
      {s:"He'll take the bus because his car isn't working.",tr:'سيركب الحافلة لأنّ سيّارته معطّلة.',ar:'result + because + reason',ok:true},
      {s:'She went to the doctor because sick.',wrong:'because sick',right:'because she was sick',tr:'بعد because جملة كاملة (فاعل + فعل).',ok:false},
    ]
  },
  {
    title:'Linking verbs (taste · smell · sound · feel · look)', ar:'أفعال الإحساس (الرابطة) + صفة',
    rule:'أفعال الإحساس (taste/smell/sound/feel/look) تعمل مثل is: تصل الفاعل بصفة تصفه — لا بظرف. مثال: The soup tastes good (لا: tastes well).',
    parts:[
      {t:'subject + linking verb + صفة',d:'مثال: This cookie tastes sweet. = هذه الكعكة مذاقها حلو.'},
      {t:'taste/smell/sound/feel/look',d:'كلها ترتبط بصفة: It smells good · It looks new · It feels soft.'},
      {t:'صفة لا ظرف',d:'نقول tastes good لا tastes well؛ لأنّ الصفة تصف الفاعل.'},
    ],
    check:{q:'This medicine tastes very _______.',o:['bitter','bitterly','quickly','well'],a:0,en:'linking verb + adjective → bitter',ar:'الفعل الرابط + صفة → bitter'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'taste/look/smell…',c:'v'},{t:'+',c:'p'},{t:'adjective',c:'k'}],
    compare:[
      {c1:'This is good.',c2:'This tastes good.',ar:'الفعل الرابط يحلّ محلّ is'},
      {c1:'She looks happy.',c2:'The music sounds beautiful.',ar:'فعل إحساس + صفة'},
    ],
    examples:[
      {s:'These chips taste salty.',tr:'هذه الرقائق مذاقها مالح.',ar:'taste + صفة (salty)',ok:true},
      {s:'The music sounds beautiful.',tr:'الموسيقى تبدو جميلة.',ar:'sound + صفة (beautiful)',ok:true},
      {s:'This lemon tastes sourly.',wrong:'sourly',right:'sour',tr:'بعد الفعل الرابط نضع صفة لا ظرفاً: tastes sour.',ok:false},
    ]
  }
],
l2:[
  {
    title:'Using the Past Progressive', ar:'الماضي المستمر',
    rule:'للتعبير عن فعل كان مستمراً في الماضي: (was/were) + الفعل+ing. وغالباً يُقاطعه حدث بالماضي البسيط مع when.',
    parts:[
      {t:'was + verb-ing',d:'أنا/هو/هي/it. مثال: I was driving to work. = كنت أقود إلى العمل.'},
      {t:'were + verb-ing',d:'you/we/they. مثال: They were crossing the street. = كانوا يعبرون الشارع.'},
      {t:'مع when',d:'حدث مستمر يقاطعه حدث قصير: I was driving when the storm began.'},
    ],
    check:{q:'John _______ soccer when he broke his leg.',o:['was playing','plays','play','played'],a:0,en:'ongoing past action → was playing',ar:'فعل مستمر في الماضي → was playing'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'was/were',c:'v'},{t:'+',c:'p'},{t:'verb-ing',c:'k'}],
    compare:[
      {c1:'I drove to work. (انتهى)',c2:'I was driving to work. (كان مستمراً)',ar:'الماضي البسيط ↔ المستمر'},
      {c1:'She was cooking',c2:'when you called.',ar:'مستمر + when + حدث قصير'},
    ],
    examples:[
      {s:'They were eating lunch when I saw them.',tr:'كانوا يتناولون الغداء حين رأيتهم.',ar:'were + eating',ok:true},
      {s:'I was driving when the storm began.',tr:'كنت أقود حين بدأت العاصفة.',ar:'was + driving',ok:true},
      {s:'What you doing at 7 p.m.?',wrong:'you doing',right:'were you doing',tr:'لا بدّ من was/were: What were you doing?',ok:false},
    ]
  },
  {
    title:'Indirect commands & requests with tell / ask', ar:'الأوامر والطلبات غير المباشرة بـ tell / ask',
    rule:'لنقل أمر أو طلب لشخص آخر: Tell/Ask + (مفعول) + to + الفعل. وللنفي: … not to + الفعل. tell للأمر، ask للطلب المهذّب.',
    parts:[
      {t:'Tell + مفعول + to + verb',d:'أمر: Tell him to pick me up at 5. = أخبره أن يقلّني الخامسة.'},
      {t:'Ask + مفعول + to + verb',d:'طلب: Ask her to call me. = اطلب منها أن تتّصل بي.'},
      {t:'النفي: not to',d:'Tell them not to be late. = أخبرهم ألّا يتأخّروا.'},
    ],
    check:{q:'The captain told Sgt Jones _______ bring the schedule.',o:['to','for','that','at'],a:0,en:'tell + object + to + verb',ar:'tell + مفعول + to + فعل',},
    formula:[{t:'Tell/Ask',c:'v'},{t:'+',c:'p'},{t:'someone',c:'s'},{t:'+',c:'p'},{t:'(not) to + verb',c:'k'}],
    compare:[
      {c1:'"Close the door." (مباشر)',c2:'Tell him to close the door. (غير مباشر)',ar:'أمر مباشر ↔ غير مباشر'},
      {c1:'Ask her to help. (طلب)',c2:'Tell her not to wait. (نفي)',ar:'ask طلب · not to نفي'},
    ],
    examples:[
      {s:'She asked us to fill out these forms.',tr:'طلبت منّا تعبئة هذه النماذج.',ar:'ask + us + to fill out',ok:true},
      {s:'The officer told me not to run red lights.',tr:'أخبرني الضابط ألّا أقطع الإشارات الحمراء.',ar:'told + me + not to run',ok:true},
      {s:'Tell him close the door.',wrong:'him close',right:'him to close',tr:'لا بدّ من to قبل الفعل: Tell him to close.',ok:false},
    ]
  },
  {
    title:'Comparing and contrasting', ar:'المقارنة والتباين (التشابه والاختلاف)',
    rule:'للمقارنة: A is like / the same as / similar to / different from B. وللجمع: They are alike / the same / similar / different.',
    parts:[
      {t:'the same as / like',d:'تطابق أو تشابه قوي: Bill\'s job is the same as Ken\'s.'},
      {t:'similar to',d:'متشابه (لا متطابق): Jane\'s watch is similar to Amy\'s.'},
      {t:'different from',d:'مختلف: This dog is different from that dog.'},
    ],
    check:{q:'A dime is _______ ten cents.',o:['the same as','different from','similar','like a'],a:0,en:'equal value → the same as',ar:'قيمة متساوية → the same as'},
    formula:[{t:'A',c:'s'},{t:'is',c:'v'},{t:'like/same as/similar to/different from',c:'k'},{t:'+',c:'p'},{t:'B',c:'s'}],
    compare:[
      {c1:'Our cars are alike. (متشابهة)',c2:'Our cars are different. (مختلفة)',ar:'alike ↔ different'},
      {c1:'is the same as + اسم',c2:'are the same (بلا اسم)',ar:'الصيغتان'},
    ],
    examples:[
      {s:'Their jobs are the same.',tr:'وظيفتاهما متطابقتان.',ar:'are the same',ok:true},
      {s:'A triangle is different from a square.',tr:'المثلّث مختلف عن المربّع.',ar:'different from',ok:true},
      {s:'My car is same as his car.',wrong:'same as',right:'the same as',tr:'الصحيح the same as (بأداة التعريف the).',ok:false},
    ]
  }
],
l3:[
  {
    title:'Using should to ask for and give advice', ar:'should لطلب النصيحة وإعطائها',
    rule:'should (ينبغي) لطلب النصيحة أو إعطائها. مثل باقي الأفعال الناقصة: should + الفعل المجرّد. للنفي: shouldn\'t.',
    parts:[
      {t:'What should I do?',d:'لطلب النصيحة. مثال: I lost my wallet. What should I do?'},
      {t:'You should + verb',d:'لإعطاء النصيحة. مثال: You should wait for your friend.'},
      {t:"shouldn't = نصيحة بالنفي",d:'You shouldn\'t leave now. = لا ينبغي أن تغادر الآن.'},
    ],
    check:{q:"I didn't pass the test. What _______ I do?",o:['should','am','will','being'],a:0,en:'ask for advice → should',ar:'طلب النصيحة → should'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'should / shouldn\'t',c:'v'},{t:'+',c:'p'},{t:'base verb',c:'k'}],
    compare:[
      {c1:'You should study every day. (نصيحة)',c2:"You shouldn't buy the red one. (نصيحة بالنفي)",ar:'إثبات ↔ نفي'},
      {c1:'What should I do?',c2:'Which tie should I buy?',ar:'السؤال بـ should'},
    ],
    examples:[
      {s:'You should ask the teacher for help.',tr:'ينبغي أن تطلب مساعدة المعلّم.',ar:'نصيحة → should',ok:true},
      {s:"You shouldn't leave now. It's raining.",tr:'لا ينبغي أن تغادر الآن، إنها تُمطر.',ar:"نصيحة بالنفي → shouldn't",ok:true},
      {s:'What I should do?',wrong:'What I should do',right:'What should I do',tr:'في السؤال يسبق should الفاعل: What should I do?',ok:false},
    ]
  },
  {
    title:'Using could to give suggestions', ar:'could لتقديم الاقتراحات',
    rule:'could (يمكن أن) لتقديم اقتراح لطيف. نستخدمها في الجمل المُثبتة فقط: You could + الفعل المجرّد.',
    parts:[
      {t:'You could + verb',d:'اقتراح لطيف. مثال: You could call a taxi. = يمكنك أن تطلب سيارة أجرة.'},
      {t:'اقتراح لا أمر',d:'أخفّ من should: You could get a small dog. = ربما تأخذ كلباً صغيراً.'},
      {t:'مُثبتة فقط',d:'نستخدم could للاقتراح في الإثبات لا النفي.'},
    ],
    check:{q:"You can't get to the airport. You _______ call a taxi.",o:['could','should not','must not',"don't"],a:0,en:'gentle suggestion → could',ar:'اقتراح لطيف → could'},
    formula:[{t:'You',c:'s'},{t:'+',c:'p'},{t:'could',c:'v'},{t:'+',c:'p'},{t:'base verb',c:'k'}],
    compare:[
      {c1:'You should tell them. (نصيحة أقوى)',c2:'You could ask them. (اقتراح أخفّ)',ar:'should ↔ could'},
      {c1:'You could call a taxi.',c2:'You could borrow a car.',ar:'اقتراحات بديلة'},
    ],
    examples:[
      {s:'You could get some used furniture.',tr:'يمكنك أن تأخذ أثاثاً مستعملاً.',ar:'اقتراح → could',ok:true},
      {s:'You could go out with your friends to a restaurant.',tr:'يمكنك الخروج مع أصدقائك إلى مطعم.',ar:'could + verb',ok:true},
      {s:'You could to call a taxi.',wrong:'could to call',right:'could call',tr:'بعد could فعل مجرّد بلا to: could call.',ok:false},
    ]
  },
  {
    title:'Adverbs of manner (-ly) & How', ar:'أحوال الطريقة (-ly) والسؤال بـ How',
    rule:'حال الطريقة يصف كيف يحدث الفعل، ويأتي غالباً بعد الفعل. نُكوّنه بإضافة -ly للصفة: safe→safely. وشاذّ: good→well، fast→fast. ونسأل عن الطريقة بـ How.',
    parts:[
      {t:'adjective + ly = adverb',d:'safe→safely · careful→carefully · easy→easily (y→ily).'},
      {t:'شواذّ',d:'good→well · fast→fast · hard→hard.'},
      {t:'How …?',d:'How does he drive? → He drives carefully.'},
    ],
    check:{q:'She is a careful driver. She drives _______.',o:['carefully','careful','care','carefuly'],a:0,en:'verb needs an adverb → carefully',ar:'الفعل يحتاج حالاً → carefully'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'verb',c:'v'},{t:'+',c:'p'},{t:'adverb (-ly)',c:'k'}],
    compare:[
      {c1:'She is a safe driver. (صفة)',c2:'She drives safely. (حال)',ar:'الصفة تصف الاسم · الحال يصف الفعل'},
      {c1:'He is a good cook.',c2:'He cooks well.',ar:'good → well (شاذّ)'},
    ],
    examples:[
      {s:'He read his book carelessly.',tr:'قرأ كتابه بإهمال.',ar:'careless → carelessly',ok:true},
      {s:'They passed the test easily.',tr:'اجتازوا الاختبار بسهولة.',ar:'easy → easily',ok:true},
      {s:'She drives careful.',wrong:'careful',right:'carefully',tr:'بعد الفعل نضع حالاً: drives carefully.',ok:false},
    ]
  }
],
l4:[
  {
    title:'Using adjective + that', ar:'الصفة + that (سبب الشعور)',
    rule:'بعد صفات المشاعر (happy/pleased/glad/angry/sorry/upset/worried) نضع جملة تبدأ بـ that لتفسير السبب («لماذا؟»). كلمة that اختيارية.',
    parts:[
      {t:'I\'m happy that …',d:'مثال: I\'m happy that you came. = أنا سعيد لأنك أتيت.'},
      {t:'that = السبب',d:'الجملة بعد that تجيب عن «لماذا يشعر بذلك؟».'},
      {t:'that اختيارية',d:'I\'m sorry (that) I\'m late. = آسف لأنني تأخّرت.'},
    ],
    check:{q:"I'm pleased _______ you came to my party.",o:['that','to','for','because of'],a:0,en:'adjective of feeling + that',ar:'صفة شعور + that',},
    formula:[{t:"I'm",c:'s'},{t:'+',c:'p'},{t:'happy/sorry/glad…',c:'v'},{t:'+',c:'p'},{t:'(that) + clause',c:'k'}],
    compare:[
      {c1:'I\'m glad. + I came.',c2:'I\'m glad that I came.',ar:'دمج بجملة that'},
      {c1:'Is he angry that I didn\'t call?',c2:'No, he isn\'t upset that you didn\'t call.',ar:'السؤال والنفي'},
    ],
    examples:[
      {s:'The students are happy that they didn\'t have a test.',tr:'الطلاب سعداء لأنه لم يكن لديهم اختبار.',ar:'happy + that',ok:true},
      {s:'She isn\'t worried that her friend is late.',tr:'ليست قلقة لأنّ صديقها تأخّر.',ar:'worried + that',ok:true},
      {s:'I\'m sorry for I\'m late.',wrong:'for I\'m late',right:'that I\'m late',tr:'مع صفة الشعور نستخدم that لا for + جملة.',ok:false},
    ]
  },
  {
    title:'That noun clauses', ar:'جُمَل that الاسمية',
    rule:'بعد أفعال مثل think/know/hope/guess/hear/forget/remember/realize نضع جملة اسمية تبدأ بـ that. وكلمة that اختيارية.',
    parts:[
      {t:'think/know/hope + that',d:'مثال: I think that the weather\'s nice. = أظنّ أنّ الطقس جميل.'},
      {t:'أفعال شائعة',d:'forget · guess · hear · realize · learn · remember · understand + جملة that.'},
      {t:'that اختيارية',d:'I hope (that) it doesn\'t rain.'},
    ],
    check:{q:"Paul doesn't know _______ the test starts at 10:00.",o:['that','to','for','what'],a:0,en:'noun clause → that',ar:'جملة اسمية → that',},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'think/know/hope…',c:'v'},{t:'+',c:'p'},{t:'(that) + clause',c:'k'}],
    compare:[
      {c1:'The weather\'s nice today.',c2:'I think that the weather\'s nice today.',ar:'جملة → جملة اسمية بعد think'},
      {c1:'I hope that it doesn\'t rain.',c2:'Did you forget that we have a test?',ar:'hope · forget + that'},
    ],
    examples:[
      {s:'I guess that I\'ll have to study tomorrow.',tr:'أظنّ أنني سأضطرّ للمذاكرة غداً.',ar:'guess + that',ok:true},
      {s:'Do you realize that the test will be difficult?',tr:'هل تُدرك أنّ الاختبار سيكون صعباً؟',ar:'realize + that',ok:true},
      {s:'I think the weather nice today.',wrong:'the weather nice',right:'that the weather\'s nice',tr:'لا بدّ من جملة كاملة بعد think: that the weather\'s nice.',ok:false},
    ]
  },
  {
    title:'Using apologize for + ing', ar:'الاعتذار apologize for + الفعل+ing',
    rule:'للاعتذار عن فعلٍ: apologize (to someone) for + الفعل+ing. وللنفي: for not + الفعل+ing.',
    parts:[
      {t:'apologize for + verb-ing',d:'مثال: I apologize for spilling your tea. = أعتذر عن سكب شايك.'},
      {t:'apologize to + شخص',d:'The waitress apologized to John. = اعتذرت النادلة لجون.'},
      {t:'النفي: for not + ing',d:'I apologize for not writing. = أعتذر لعدم مراسلتي.'},
    ],
    check:{q:"I want to apologize _______ spilling your iced tea.",o:['for','to','that','with'],a:0,en:'apologize + for + ing',ar:'apologize + for + الفعل+ing',},
    formula:[{t:'apologize',c:'v'},{t:'+',c:'p'},{t:'(to someone)',c:'s'},{t:'+',c:'p'},{t:'for (not) verb-ing',c:'k'}],
    compare:[
      {c1:'apologize for being late',c2:'apologize for not calling',ar:'إثبات ↔ نفي'},
      {c1:'I\'m sorry I\'m late.',c2:'I apologize for being late.',ar:'صيغتان للاعتذار'},
    ],
    examples:[
      {s:'The waitress apologized to John for spilling the iced tea.',tr:'اعتذرت النادلة لجون عن سكب الشاي المثلّج.',ar:'apologized to … for + ing',ok:true},
      {s:'We apologized to the lady for not returning the books.',tr:'اعتذرنا للسيدة لعدم إعادتنا الكتب.',ar:'for not + returning',ok:true},
      {s:'I apologize for be late.',wrong:'for be late',right:'for being late',tr:'بعد for نضع الفعل+ing: for being late.',ok:false},
    ]
  }
]
};

// ═══════════════════════════════════════
// WO — رتّب الجملة (word order)
// ═══════════════════════════════════════
const WO={
l1:[
  {words:["I'd",'like','to','open','a','bank','account'],ans:"I'd like to open a bank account.",tr:'أودّ أن أفتح حساباً بنكياً.',ar:'وظيفة البنك'},
  {words:['Can','I','cash','this','check','today'],ans:'Can I cash this check today?',tr:'هل يمكنني صرف هذا الشيك اليوم؟',ar:'cash a check'},
  {words:['Please','fill','out','this','deposit','slip'],ans:'Please fill out this deposit slip.',tr:'من فضلك عبّئ قسيمة الإيداع هذه.',ar:'fill out · slip'},
  {words:['We','are','flying','to','Italy','tomorrow','morning'],ans:'We are flying to Italy tomorrow morning.',tr:'سنسافر جوّاً إلى إيطاليا صباح الغد.',ar:'المضارع المستمر للمستقبل'},
  {words:["I'm",'working','late','because','I','want','more','money'],ans:"I'm working late because I want more money.",tr:'أعمل متأخراً لأنني أريد مالاً أكثر.',ar:'because = السبب'},
  {words:['This','soup','tastes','very','salty'],ans:'This soup tastes very salty.',tr:'هذا الحساء مذاقه مالح جداً.',ar:'فعل الإحساس + صفة'},
  {words:['He','wants','to','withdraw','fifty','dollars'],ans:'He wants to withdraw fifty dollars.',tr:'يريد أن يسحب خمسين دولاراً.',ar:'withdraw'},
],
l2:[
  {words:['John','was','playing','soccer','when','he','broke','his','leg'],ans:'John was playing soccer when he broke his leg.',tr:'كان جون يلعب كرة القدم حين كسر ساقه.',ar:'الماضي المستمر + when'},
  {words:['They','were','crossing','the','street'],ans:'They were crossing the street.',tr:'كانوا يعبرون الشارع.',ar:'were + crossing'},
  {words:['The','careless','driver','ran','the','red','light'],ans:'The careless driver ran the red light.',tr:'قطع السائق المُهمل الإشارة الحمراء.',ar:'ran the red light'},
  {words:['Please','fasten','your','seat','belt'],ans:'Please fasten your seat belt.',tr:'من فضلك اربط حزام الأمان.',ar:'fasten · seat belt'},
  {words:['Tell','him','to','pick','me','up','at','five'],ans:'Tell him to pick me up at five.',tr:'أخبره أن يقلّني الخامسة.',ar:'tell + to + فعل'},
  {words:['Ask','her','to','call','me','tomorrow'],ans:'Ask her to call me tomorrow.',tr:'اطلب منها أن تتّصل بي غداً.',ar:'ask + to + فعل'},
  {words:['Our','cars','are','different','from','each','other'],ans:'Our cars are different from each other.',tr:'سيّارتانا مختلفتان عن بعضهما.',ar:'different from'},
],
l3:[
  {words:['What','should','I','do'],ans:'What should I do?',tr:'ماذا ينبغي أن أفعل؟',ar:'طلب النصيحة بـ should'},
  {words:['You','should','wait','for','your','friend'],ans:'You should wait for your friend.',tr:'ينبغي أن تنتظر صديقك.',ar:'should + verb'},
  {words:['You','could','call','a','taxi'],ans:'You could call a taxi.',tr:'يمكنك أن تطلب سيارة أجرة.',ar:'could = اقتراح'},
  {words:['He','drives','very','carefully'],ans:'He drives very carefully.',tr:'يقود بحذر شديد.',ar:'حال الطريقة carefully'},
  {words:['How','does','he','drive'],ans:'How does he drive?',tr:'كيف يقود؟',ar:'السؤال بـ How'},
  {words:['Can','I','borrow','your','tools'],ans:'Can I borrow your tools?',tr:'هل يمكنني استعارة أدواتك؟',ar:'borrow'},
  {words:['Please','tell','me','the','truth'],ans:'Please tell me the truth.',tr:'من فضلك قل لي الحقيقة.',ar:'tell + the truth'},
],
l4:[
  {words:["I'm",'happy','that','you','came'],ans:"I'm happy that you came.",tr:'أنا سعيد لأنك أتيت.',ar:'الصفة + that'},
  {words:['I','think','that','the','weather','is','nice'],ans:'I think that the weather is nice.',tr:'أظنّ أنّ الطقس جميل.',ar:'جملة that الاسمية'},
  {words:['I','apologize','for','being','late'],ans:'I apologize for being late.',tr:'أعتذر عن تأخّري.',ar:'apologize for + ing'},
  {words:['Please','forgive','me'],ans:'Please forgive me.',tr:'من فضلك سامحني.',ar:'وظيفة الاعتذار'},
  {words:['We','made','motel','reservations'],ans:'We made motel reservations.',tr:'حجزنا في النُّزُل.',ar:'motel'},
  {words:['I','need','to','fill','up','the','tank'],ans:'I need to fill up the tank.',tr:'أحتاج أن أملأ الخزّان.',ar:'fill up · tank'},
  {words:['We','can','hang','up','our','clothes','in','the','closet'],ans:'We can hang up our clothes in the closet.',tr:'يمكننا تعليق ملابسنا في الخزانة.',ar:'hang up · closet'},
]
};

// ═══════════════════════════════════════
// EE — "اختبر" (lesson quiz, multiple choice)
// المصدر: تمارين التقييم الرسمية (Exercise G) + المضارع المستمر + أفعال الإحساس + because
// ═══════════════════════════════════════
const EE={
l1:[
  // — Evaluation Exercise G (الرسمية · اختر الأنسب) —
  {q:"He wants to take money out of his account. He wants to _______ it.",o:["deposit","save","withdraw","cash"],a:2,en:"take money out → withdraw",ar:'يُخرج مالاً من حسابه → يسحب (withdraw)',tr:'يريد إخراج مال من حسابه، يريد أن يسحبه.'},
  {q:"Jim can't find his hat. He _______ it this morning.",o:["felt","lost","completed","looked"],a:1,en:"can't find → lost",ar:'لا يجده → فقده (lost)',tr:'لا يجد جيم قبّعته. لقد فقدها هذا الصباح.'},
  {q:"The teller wants his _______ at the bottom of the form.",o:["signature","bill","slip","withdrawal"],a:0,en:"sign the form → signature",ar:'أسفل النموذج → توقيع (signature)',tr:'يريد الصرّاف توقيعه أسفل النموذج.'},
  {q:"Pete wants to leave immediately. He wants to leave _______.",o:["right here","right away","soon","safely"],a:1,en:"immediately → right away",ar:'فوراً → حالاً (right away)',tr:'يريد بيت المغادرة فوراً، يريد أن يغادر حالاً.'},
  {q:"Ted put $50 into his account. He _______ the money.",o:["cashed","filled out","hid","deposited"],a:3,en:"put into account → deposited",ar:'وضع في الحساب → أودع (deposited)',tr:'وضع تيد 50 دولاراً في حسابه، أودع المال.'},
  {q:"Mrs. Anderson needs a _______ to travel to Germany.",o:["bill","deposit","passport","wallet"],a:2,en:"travel abroad → passport",ar:'السفر للخارج → جواز سفر (passport)',tr:'تحتاج السيدة أندرسون جواز سفر للسفر إلى ألمانيا.'},
  {q:"The bank needs _______ about you: your name, address, phone number.",o:["credit card","checkbook","information","account"],a:2,en:"name/address → information",ar:'الاسم والعنوان → معلومات (information)',tr:'يحتاج البنك معلومات عنك: اسمك وعنوانك ورقم هاتفك.'},
  {q:"Before Bob rented the apartment, he filled out a _______.",o:["form","deposit","debit card","savings account"],a:0,en:"fill out a → form",ar:'يعبّئ → نموذجاً (form)',tr:'قبل أن يستأجر بوب الشقة، عبّأ نموذجاً.'},
  {q:"I can't buy a new TV because I want to _______ my money for a vacation.",o:["taste","sound","save","lose"],a:2,en:"keep money → save",ar:'يحتفظ بالمال → يوفّر (save)',tr:'لا أستطيع شراء تلفاز جديد لأنني أريد أن أوفّر مالي لإجازة.'},
  {q:"That small piece of paper is a deposit _______; please complete it.",o:["lemon","wallet","card","slip"],a:3,en:"deposit paper → slip",ar:'ورقة الإيداع الصغيرة → قسيمة (slip)',tr:'تلك الورقة الصغيرة قسيمة إيداع؛ من فضلك أكملها.'},
  {q:"I can't drink this medicine. It tastes very _______.",o:["bitter","sweet","safe","soon"],a:0,en:"bad medicine → bitter",ar:'الدواء غير مستساغ → مرّ (bitter)',tr:'لا أستطيع شرب هذا الدواء، مذاقه مرّ جداً.'},
  {q:"I want to _______ a check because I need some money for lunch.",o:["feel","spend","hide","cash"],a:3,en:"get money from a check → cash",ar:'يأخذ نقداً من شيك → يصرفه (cash)',tr:'أريد صرف شيك لأنني بحاجة إلى مال للغداء.'},
  {q:"I left a five-dollar _______ on the table as a tip for the waiter.",o:["slip","bill","checkbook","signature"],a:1,en:"five-dollar → bill",ar:'ورقة نقدية بخمسة دولارات → bill',tr:'تركت ورقة بخمسة دولارات على الطاولة إكرامية للنادل.'},
  {q:"The children are _______ in the back yard. I can't find them.",o:["filling out","hiding","taking out","losing"],a:1,en:"can't find them → hiding",ar:'لا أجدهم → يختبئون (hiding)',tr:'الأطفال يختبئون في الفناء الخلفي، لا أستطيع أن أجدهم.'},
  // — Present progressive for future (التقييم Exercise C) —
  {q:"Her friends will visit her tonight. → Her friends _______ her tonight.",o:["are visiting","visits","will visiting","visited"],a:0,en:"future plan → are visiting",ar:'المستقبل بالمضارع المستمر → are visiting',tr:'سيزورها أصدقاؤها الليلة. → أصدقاؤها يزورونها الليلة.'},
  {q:"The train is going to leave at 5 p.m. → The train _______ at 5 p.m.",o:["is leaving","leaves","leaving","left"],a:0,en:"be going to → is leaving",ar:'المضارع المستمر للمستقبل → is leaving',tr:'سيغادر القطار الساعة الخامسة مساءً.'},
  // — Linking verbs (التقييم Exercise D) —
  {q:"This soup _______ very salty. I can't eat it.",o:["tastes","eats","cooks","drinks"],a:0,en:"linking verb of taste → tastes",ar:'فعل التذوّق الرابط → tastes',tr:'هذا الحساء مذاقه مالح جداً، لا أستطيع أكله.'},
  {q:"Something _______ good in the kitchen. Are you making cookies?",o:["smells","hears","looks at","listens"],a:0,en:"good in kitchen → smells",ar:'رائحة طيّبة في المطبخ → smells',tr:'رائحة شيء طيّبة في المطبخ، هل تصنع كعكاً؟'},
  {q:"That jacket _______ very expensive. Is it?",o:["looks","sees","watches","reads"],a:0,en:"appearance → looks",ar:'المنظر → looks',tr:'تلك السترة تبدو غالية جداً، أهي كذلك؟'},
  // — because (التقييم) —
  {q:"He'll take the bus _______ his car isn't working.",o:["because","but","so","and"],a:0,en:"reason → because",ar:'السبب → because',tr:'سيركب الحافلة لأنّ سيّارته معطّلة.'},
],
l2:[
  // — Evaluation Exercise G (الرسمية · circle the best answer) —
  {q:"There was a(n) _______ accident on Spring Street.",o:["fault","ticket","police","automobile"],a:3,en:"car crash → automobile accident",ar:'حادث سيارات → automobile accident',tr:'وقع حادث سيّارات في شارع سبرينغ.'},
  {q:"A small car _______ a red light and hit a bicycle.",o:["ran","caused","bothered","faced"],a:0,en:"went through red light → ran",ar:'قطع الإشارة الحمراء → ran',tr:'قطعت سيّارة صغيرة الإشارة الحمراء وصدمت درّاجة.'},
  {q:"Tom was wearing a(n) _______ and wasn't hurt.",o:["insurance","seat belt","curve","light"],a:1,en:"protects in a crash → seat belt",ar:'يحمي عند الحادث → حزام الأمان',tr:'كان توم يرتدي حزام الأمان فلم يُصَب.'},
  {q:"The other driver was fast and _______.",o:["behind","across","in front of","careless"],a:3,en:"fast + not careful → careless",ar:'سريع وغير حذر → مُهمِل (careless)',tr:'كان السائق الآخر سريعاً ومُهمِلاً.'},
  {q:"The driver of the small car caused the accident; he was _______.",o:["left","at fault","dark","careful"],a:1,en:"caused it → at fault",ar:'هو المتسبّب → at fault',tr:'سائق السيّارة الصغيرة تسبّب في الحادث؛ هو المخطئ.'},
  {q:"Frank got a(n) _______ for the accident.",o:["auto","law","ticket","cause"],a:2,en:"police citation → ticket",ar:'مخالفة من الشرطة → ticket',tr:'حصل فرانك على مخالفة بسبب الحادث.'},
  {q:"The driver didn't stop at the light and didn't _______ the law.",o:["obey","face","run","happen"],a:0,en:"follow the law → obey",ar:'يلتزم بالقانون → obey',tr:'لم يتوقّف السائق عند الإشارة ولم يلتزم بالقانون.'},
  {q:"The _______ arrived at the accident.",o:["police","stop","place","curve"],a:0,en:"who comes to an accident → police",ar:'مَن يصل للحادث → الشرطة',tr:'وصلت الشرطة إلى موقع الحادث.'},
  {q:"John had to pay a(n) _______ for his ticket.",o:["fault","insurance","fine","law"],a:2,en:"money for a ticket → fine",ar:'مبلغ المخالفة → غرامة (fine)',tr:'اضطرّ جون لدفع غرامة على مخالفته.'},
  {q:"Beth was late to work because of the _______ on the highway.",o:["light","curve","fault","traffic jam"],a:3,en:"cars not moving → traffic jam",ar:'ازدحام يوقف السير → traffic jam',tr:'تأخّرت بيث عن العمل بسبب الازدحام المروري على الطريق السريع.'},
  {q:"The city library is _______ the street from the bank.",o:["similar","left","at fault","across"],a:3,en:"on the other side → across",ar:'على الجانب الآخر → across',tr:'مكتبة المدينة على الجانب الآخر من الشارع مقابل البنك.'},
  {q:"Fred _______ driving on the highway until morning.",o:["rode","bothered","kept on","obeyed"],a:2,en:"continued → kept on",ar:'استمرّ → kept on',tr:'واصل فريد القيادة على الطريق السريع حتى الصباح.'},
  {q:"He _______ his arm in a soccer game.",o:["happened","broke","faced","buckled"],a:1,en:"injured → broke",ar:'كسر ذراعه → broke',tr:'كسر ذراعه في مباراة كرة قدم.'},
  {q:"What _______ the problem in the barracks?",o:["crossed","caused","ran","fastened"],a:1,en:"made it happen → caused",ar:'ما الذي سبّبه → caused',tr:'ما الذي سبّب المشكلة في الثكنة؟'},
  // — Vocabulary review + comparing + past progressive —
  {q:"You can turn on the TV. It doesn't _______ me.",o:["break","ride","bother","cause"],a:2,en:"doesn't annoy me → bother",ar:'لا يزعجني → bother',tr:'يمكنك تشغيل التلفاز، فهو لا يزعجني.'},
  {q:"Be careful. There's a _______ in the road here.",o:["law","straight","curve","fine"],a:2,en:"bend in the road → curve",ar:'انحناء في الطريق → منعطف (curve)',tr:'انتبه، هناك منعطف في الطريق هنا.'},
  {q:"In the US, you must buy _______ to pay for auto accidents.",o:["bicycle","place","insurance","ticket"],a:2,en:"pays for accidents → insurance",ar:'يدفع تكاليف الحوادث → تأمين (insurance)',tr:'في أمريكا يجب شراء تأمين لتغطية حوادث السيارات.'},
  {q:"A triangle is _______ a square.",o:["the same as","like","similar to","different from"],a:3,en:"not the same shape → different from",ar:'شكل مختلف → different from',tr:'المثلّث مختلف عن المربّع.'},
  {q:"John _______ soccer when he broke his leg.",o:["was playing","plays","play","playing"],a:0,en:"ongoing past → was playing",ar:'فعل مستمر في الماضي → was playing',tr:'كان جون يلعب كرة القدم حين كسر ساقه.'},
],
l3:[
  // — Evaluation Exercise G (الرسمية · circle the best answer) —
  {q:"The mechanic is going to _______ Mike's car at the garage.",o:["enjoy","lend","repair","hurt"],a:2,en:"fix a car → repair",ar:'يُصلح السيارة → repair',tr:'سيُصلح الميكانيكي سيارة مايك في الورشة.'},
  {q:"Larry and Mike live together in the same apartment. They're _______.",o:["anyone","roommates","someone","friendship"],a:1,en:"share an apartment → roommates",ar:'يتشاركان الشقة → شريكا سكن (roommates)',tr:'يعيش لاري ومايك معاً في الشقة نفسها؛ هما شريكا سكن.'},
  {q:"Jack, can I _______ a couple of dollars from you for lunch?",o:["borrow","guess","lie","lend"],a:0,en:"take temporarily → borrow",ar:'يأخذ مؤقتاً → يستعير (borrow)',tr:'جاك، هل يمكنني أن أستعير منك بضعة دولارات للغداء؟'},
  {q:"I'd like to hear your _______ of this book. Is it interesting?",o:["advice","opinion","truth","story"],a:1,en:"what you think → opinion",ar:'ما رأيك → opinion',tr:'أودّ أن أسمع رأيك في هذا الكتاب، هل هو ممتع؟'},
  {q:"Jim told his father he was studying, but he wasn't. He _______ to his father.",o:["enjoyed","parked","borrowed","lied"],a:3,en:"said something untrue → lied",ar:'قال ما ليس صحيحاً → كذب (lied)',tr:'قال جيم لأبيه إنه يذاكر ولم يكن كذلك؛ لقد كذب على أبيه.'},
  {q:"Sam had a problem. He asked his father for _______.",o:["story","feelings","advice","tool"],a:2,en:"ask for help → advice",ar:'يطلب مساعدة/نصح → advice',tr:'كان لدى سام مشكلة، فطلب النصيحة من أبيه.'},
  {q:"Ted, will you _______ me fifty cents? I want to buy a soda.",o:["fix","borrow","lend","care for"],a:2,en:"give temporarily → lend",ar:'يُعطي مؤقتاً → يُعير (lend)',tr:'تِد، هل تُعيرني خمسين سنتاً؟ أريد شراء مشروب غازي.'},
  {q:"I can't find Ed. I _______ he left early today.",o:["guess","should","care about","lie"],a:0,en:"think/suppose → guess",ar:'أظنّ → guess',tr:'لا أجد إد. أظنّ أنه غادر مبكراً اليوم.'},
  {q:"John said he needed a new _______ to fix my car.",o:["opinion","story","tool","advice"],a:2,en:"to fix → a tool",ar:'للإصلاح → أداة (tool)',tr:'قال جون إنه يحتاج أداة جديدة ليُصلح سيارتي.'},
  {q:"Everyone should tell the _______.",o:["lie","garage","friendship","truth"],a:3,en:"be honest → the truth",ar:'الصدق → الحقيقة (the truth)',tr:'ينبغي على الجميع أن يقولوا الحقيقة.'},
  {q:"Pam is a nice person and doesn't want to _______ people.",o:["hurt","borrow","park","lend"],a:0,en:"not harm → hurt",ar:'لا تؤذي → hurt',tr:'بام شخص لطيف ولا تريد أن تؤذي الناس.'},
  {q:"Jack works on cars and _______ his job.",o:["guesses","could","lies","enjoys"],a:3,en:"likes his work → enjoys",ar:'يحبّ عمله → يستمتع (enjoys)',tr:'يعمل جاك على السيارات ويستمتع بعمله.'},
  {q:"She doesn't know _______ in her new school.",o:["roommate","anyone","story","advice"],a:1,en:"negative → anyone",ar:'مع النفي → anyone',tr:'لا تعرف أحداً في مدرستها الجديدة.'},
  {q:"Jack works in the biggest _______ in town.",o:["tool","garage","secret","opinion"],a:1,en:"repair place → garage",ar:'مكان إصلاح السيارات → ورشة (garage)',tr:'يعمل جاك في أكبر ورشة في المدينة.'},
  // — should / could / adverbs (التقييم + القواعد) —
  {q:"I lost my wallet. What _______ I do?",o:["should","am","being","was"],a:0,en:"ask for advice → should",ar:'طلب النصيحة → should',tr:'فقدت محفظتي. ماذا ينبغي أن أفعل؟'},
  {q:"You can't get a taxi? You _______ borrow a friend's car.",o:["could","must not","shouldn't","don't"],a:0,en:"gentle suggestion → could",ar:'اقتراح لطيف → could',tr:'لا تجد سيارة أجرة؟ يمكنك أن تستعير سيارة صديق.'},
  {q:"She is a careful driver. She drives _______.",o:["carefully","careful","care","carefuly"],a:0,en:"verb + adverb → carefully",ar:'الفعل يحتاج حالاً → carefully',tr:'هي سائقة حذِرة، تقود بحذر.'},
  {q:"You must not drive _______ on the highway.",o:["safely","well","slowly","nicely"],a:2,en:"highway needs speed → not slowly",ar:'الطريق السريع → ألّا تقود ببطء (slowly)',tr:'يجب ألّا تقود ببطء على الطريق السريع.'},
],
l4:[
  // — Evaluation Exercise G (الرسمية · circle the best answer) —
  {q:"Did Bob _______ that he locked the door?",o:["sorry","really","realize","forgive"],a:2,en:"become aware → realize",ar:'ينتبه/يُدرك → realize',tr:'هل أدرك بوب أنه أقفل الباب؟'},
  {q:"Do you have any more _______ to hang up my shirts?",o:["gauges","hangers","closet","baggage"],a:1,en:"to hang clothes → hangers",ar:'لتعليق الملابس → علّاقات (hangers)',tr:'هل لديك المزيد من العلّاقات لأعلّق قمصاني؟'},
  {q:"Jim _______ for being late last night.",o:["apologized","pleased","hung up","hoped to"],a:0,en:"said sorry → apologized",ar:'قال آسف → اعتذر (apologized)',tr:'اعتذر جيم عن تأخّره الليلة الماضية.'},
  {q:"The room is cold. Do you want another _______ on the bed?",o:["end","blanket","laundry","pillow"],a:1,en:"cold → blanket",ar:'الغرفة باردة → بطّانية (blanket)',tr:'الغرفة باردة، هل تريد بطّانية أخرى على السرير؟'},
  {q:"Hang that new dress in the _______.",o:["motel","restroom","bathtub","closet"],a:3,en:"hang clothes in → closet",ar:'تُعلَّق الملابس في → الخزانة (closet)',tr:'علّق ذلك الفستان الجديد في الخزانة.'},
  {q:"I _______ stay in California for ten days.",o:["fill up","realize","hope to","worry"],a:2,en:"wish/plan → hope to",ar:'يأمل/ينوي → hope to',tr:'آمل أن أبقى في كاليفورنيا عشرة أيام.'},
  {q:"Here is a soft _______ to put under your head.",o:["closet","bill","pillow","gauge"],a:2,en:"under the head → pillow",ar:'تحت الرأس → وسادة (pillow)',tr:'هذه وسادة ناعمة تضعها تحت رأسك.'},
  {q:"I _______ call Mike last night, but I got busy and didn't do it.",o:["meant to","apologized","ready","forgive"],a:0,en:"intended → meant to",ar:'نويت → meant to',tr:'نويت الاتصال بمايك الليلة الماضية لكنني انشغلت ولم أفعل.'},
  {q:"Ed's _______ that he missed the show.",o:["hope to","step on","sorry","spill"],a:2,en:"regret → sorry",ar:'نادم/آسف → sorry',tr:'إد آسف لأنه فاته العرض.'},
  {q:"I need to _______ the gas tank before we drive to New Mexico.",o:["hang up","run out of","almost","fill up"],a:3,en:"add gas → fill up",ar:'يملأ الوقود → fill up',tr:'أحتاج أن أملأ خزّان الوقود قبل أن نقود إلى نيومكسيكو.'},
  {q:"Please don't _______ about the travel; it's safe.",o:["worry","mean to","apologize","sorry"],a:0,en:"don't be anxious → worry",ar:'لا تقلق → worry',tr:'من فضلك لا تقلق بشأن السفر؛ إنه آمن.'},
  {q:"Peter always _______ her feet when he dances.",o:["pleases","runs out of","forgives","steps on"],a:3,en:"puts foot on → steps on",ar:'يدوس على → steps on',tr:'بيتر دائماً يدوس على قدميها حين يرقص.'},
  {q:"Please _______ that dirty dog.",o:["spill","bathe","hang","fill up"],a:1,en:"wash → bathe",ar:'يغسل/يستحمّ → bathe',tr:'من فضلك استحمّ ذلك الكلب المتّسخ (اغسله).'},
  {q:"We need to wait for Bill; he isn't _______.",o:["so","ready","almost","really"],a:1,en:"not prepared → ready",ar:'ليس مستعدّاً → ready',tr:'علينا انتظار بيل؛ فهو ليس جاهزاً.'},
  // — القواعد: الصفة + that · جملة that · apologize for + ing —
  {q:"I'm pleased _______ you came to my party.",o:["that","to","for","of"],a:0,en:"adjective of feeling + that",ar:'صفة شعور + that',tr:'يسرّني أنك أتيت إلى حفلتي.'},
  {q:"I think _______ the weather is nice today.",o:["that","to","for","what"],a:0,en:"noun clause → that",ar:'جملة اسمية → that',tr:'أظنّ أنّ الطقس جميل اليوم.'},
  {q:"The waitress apologized _______ spilling the tea.",o:["for","to","that","with"],a:0,en:"apologize for + ing",ar:'apologize for + الفعل+ing',tr:'اعتذرت النادلة عن سكب الشاي.'},
  {q:"After 5 hours, the tank was almost _______.",o:["full","empty","ready","soft"],a:1,en:"needs gas → almost empty",ar:'يحتاج وقوداً → شبه فارغ (empty)',tr:'بعد خمس ساعات، كان الخزّان شبه فارغ.'},
]
};

// ═══════════════════════════════════════
// REVIEW (مراجعة) — Lesson 5 Review · Exercise A «Select the best answer»
// تجمع الدروس 1–4 (البنوك · الحوادث · النصيحة · السفر)
// ═══════════════════════════════════════
const REVIEW=[
  {q:"Mike spends a lot of _______ when he goes downtown.",o:["fine","end","cash","pillow"],a:2,en:"spends money → cash",ar:'ينفق مالاً → نقد (cash)',tr:'يُنفق مايك مالاً كثيراً عندما يذهب إلى وسط المدينة.'},
  {q:"Drive slowly because this road has a big _______.",o:["curve","bill","motel","ticket"],a:0,en:"bend in road → curve",ar:'انحناء في الطريق → منعطف (curve)',tr:'قُد ببطء لأنّ هذا الطريق فيه منعطف كبير.'},
  {q:"Jack, what's your _______ about the game?",o:["hanger","opinion","cause","end"],a:1,en:"what you think → opinion",ar:'ما رأيك → opinion',tr:'جاك، ما رأيك في المباراة؟'},
  {q:"The Smiths have a lot of _______ to take to the airport.",o:["light","tank","baggage","closet"],a:2,en:"luggage → baggage",ar:'أمتعة السفر → baggage',tr:'لدى آل سميث الكثير من الأمتعة لأخذها إلى المطار.'},
  {q:"Did you _______ your homework?",o:["forgive","realize","cause","complete"],a:3,en:"finish → complete",ar:'يُنجز/يُكمل → complete',tr:'هل أكملت واجبك؟'},
  {q:"The students need to _______ the street to go to school.",o:["cross","worry","fasten","spill"],a:0,en:"go across → cross",ar:'يعبر الشارع → cross',tr:'يحتاج الطلاب لعبور الشارع للذهاب إلى المدرسة.'},
  {q:"Ted, will the mechanic _______ your car today?",o:["fix","hope","ride","run out of"],a:0,en:"repair → fix",ar:'يُصلح → fix',tr:'تِد، هل سيُصلح الميكانيكي سيارتك اليوم؟'},
  {q:"At the _______ of class we take a break for ten minutes.",o:["light","end","form","tool"],a:1,en:"finish point → end",ar:'نهاية الحصّة → end',tr:'في نهاية الحصّة نأخذ استراحة عشر دقائق.'},
  {q:"We're late for the flight. We need to leave _______.",o:["correctly","lose","across","immediately"],a:3,en:"right now → immediately",ar:'فوراً → immediately',tr:'تأخّرنا عن الرحلة، علينا المغادرة فوراً.'},
  {q:"The new bank is _______ the post office.",o:["behind","maybe","immediately","left"],a:0,en:"in back of → behind",ar:'خلف → behind',tr:'البنك الجديد خلف مكتب البريد.'},
  {q:"I didn't see Jim at lunch. _______ he went home early.",o:["Careless","Easily","Maybe","Safe"],a:2,en:"perhaps → maybe",ar:'ربما → Maybe',tr:'لم أرَ جيم في الغداء. ربما ذهب إلى البيت مبكراً.'},
  {q:"The motel bed has a blanket, _______, and pillow.",o:["card","sheet","fault","story"],a:1,en:"bed linen → sheet",ar:'مفروشات السرير → ملاءة (sheet)',tr:'سرير النُّزُل فيه بطّانية وملاءة ووسادة.'},
  {q:"Sam wants to _______ some money into his bank account.",o:["deposit","fill out","face","fix"],a:0,en:"put money in → deposit",ar:'يضع مالاً في الحساب → يودع (deposit)',tr:'يريد سام أن يودع بعض المال في حسابه البنكي.'},
  {q:"Drivers need _______ to drive a car in Texas.",o:["place","park","signature","insurance"],a:3,en:"required to drive → insurance",ar:'مطلوب للقيادة → تأمين (insurance)',tr:'يحتاج السائقون إلى تأمين لقيادة سيارة في تكساس.'},
  {q:"Mike told us a funny _______ about his graduation.",o:["auto","slip","story","advice"],a:2,en:"told a … → story",ar:'حكاية طريفة → قصة (story)',tr:'حكى لنا مايك قصة طريفة عن تخرّجه.'},
  {q:"The small, red car _______ a red light at the intersection.",o:["buckled up","ran","cared for","spent"],a:1,en:"went through → ran (the light)",ar:'قطع الإشارة → ran',tr:'قطعت السيارة الحمراء الصغيرة إشارة حمراء عند التقاطع.'},
  {q:"Jack wants to _______ five dollars for his lunch.",o:["withdraw","obey","hurt","sound"],a:0,en:"take from account → withdraw",ar:'يسحب من حسابه → withdraw',tr:'يريد جاك أن يسحب خمسة دولارات لغدائه.'},
  {q:"What _______? Did you have an accident?",o:["bothered","happened","hid","repaired"],a:1,en:"what took place → happened",ar:'ماذا حدث → happened',tr:'ماذا حدث؟ هل تعرّضت لحادث؟'},
  {q:"Jim's father doesn't _______ fish.",o:["care for","ride","guess","look"],a:0,en:"doesn't like → care for",ar:'لا يحبّ → care for',tr:'والد جيم لا يحبّ السمك.'},
  {q:"The waitress _______ some juice on the floor.",o:["deposited","borrowed","fastened","spilled"],a:3,en:"dropped liquid → spilled",ar:'سكب سائلاً → spilled',tr:'سكبت النادلة بعض العصير على الأرض.'},
  {q:"It's 11:50. It'll _______ be time for lunch.",o:["safe","soon","in front of","behind"],a:1,en:"in a short time → soon",ar:'بعد قليل → قريباً (soon)',tr:'الساعة 11:50، سيحين وقت الغداء قريباً.'},
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
// SPELLING — write from listening
// ═══════════════════════════════════════
const SPELL_LESSONS=[
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 1 — البنوك',w:[
    {e:'account',a:'حساب',em:'🏦'},{e:'deposit',a:'إيداع',em:'📥'},{e:'withdraw',a:'يسحب',em:'🏧'},
    {e:'signature',a:'توقيع',em:'✍️'},{e:'passport',a:'جواز سفر',em:'🛂'},{e:'checkbook',a:'دفتر شيكات',em:'📗'},
    {e:'wallet',a:'محفظة',em:'👛'},{e:'bitter',a:'مرّ',em:'💊'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 2 — الحوادث والمرور',w:[
    {e:'accident',a:'حادث',em:'💥'},{e:'automobile',a:'سيارة',em:'🚗'},{e:'traffic',a:'مرور',em:'🚦'},
    {e:'insurance',a:'تأمين',em:'🛡️'},{e:'careless',a:'مُهمِل',em:'🙄'},{e:'obey',a:'يلتزم',em:'✅'},
    {e:'curve',a:'منعطف',em:'↪️'},{e:'fasten',a:'يربط',em:'🔒'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 3 — النصيحة',w:[
    {e:'advice',a:'نصيحة',em:'💬'},{e:'opinion',a:'رأي',em:'💭'},{e:'truth',a:'الحقيقة',em:'✔️'},
    {e:'secret',a:'سرّ',em:'🤫'},{e:'borrow',a:'يستعير',em:'📥'},{e:'garage',a:'ورشة',em:'🔧'},
    {e:'carefully',a:'بعناية',em:'🧐'},{e:'roommate',a:'شريك السكن',em:'🧑‍🤝‍🧑'},
  ]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 4 — السفر والفنادق',w:[
    {e:'motel',a:'نُزُل',em:'🏨'},{e:'baggage',a:'أمتعة',em:'🧳'},{e:'blanket',a:'بطّانية',em:'🧣'},
    {e:'pillow',a:'وسادة',em:'🛌'},{e:'closet',a:'خزانة',em:'🚪'},{e:'apologize',a:'يعتذر',em:'🙇'},
    {e:'gasoline',a:'بنزين',em:'⛽'},{e:'realize',a:'يُدرك',em:'💡'},
  ]},
];

// ═══════════════════════════════════════
// LISTENING — لا يوجد فيديوهات لهذا الكتاب بعد
// ═══════════════════════════════════════
const YT_VIDEOS=[
  {id:'IWQ67WV9kLM',t:'Quiz A',s:'استماع وقراءة مع الحل'},
  {id:'B4oVLEctpSI',t:'Quiz B',s:'استماع وقراءة مع الحل'},
  {id:'Y0-_44s-b_o',t:'Quiz C',s:'استماع وقراءة مع الحل'},
];

// ═══════════════════════════════════════
// ROUTING MANIFEST
// ═══════════════════════════════════════
const SCREENS=['home','lscreen','rscreen','ytscreen','fscreen','vtscreen','spscreen','mkscreen'];
const SCREEN_NAMES={home:'الرئيسية',lscreen:'درس',rscreen:'المراجعة',ytscreen:'الاستماع',fscreen:'الاختبار النهائي',vtscreen:'اختبار المفردات',spscreen:'الإملاء',mkscreen:'مراجعة الأخطاء'};
