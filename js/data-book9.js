// ═══════════════════════════════════════
// DATA — BOOK 9
// Lesson 1 (I'd like to open an account) — vocab, grammar, word-order, per-lesson quiz.
// Built lesson by lesson; more lessons get appended here later.
// ═══════════════════════════════════════
const BOOK_ID='book9';

const LESSON_META={
  l1:{ico:'🏦',title:"Lesson 1 — I'd like to open an account",sub:'البنوك · المضارع المستمر للمستقبل · because · أفعال الإحساس (linking)'},
  l2:{ico:'🚗',title:'Lesson 2 — What happened?',sub:'الحوادث والمرور · الماضي المستمر · الأوامر بـ tell/ask · المقارنة والتباين'}
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
]
};

// ═══════════════════════════════════════
// FINAL EXAM (الاختبار النهائي) — يجمع أسئلة الدروس المتاحة
// ═══════════════════════════════════════
const FINAL=dedupe_by_q([
  ...EE.l1,
  ...EE.l2,
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
