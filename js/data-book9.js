// ═══════════════════════════════════════
// DATA — BOOK 9
// Lesson 1 (I'd like to open an account) — vocab, grammar, word-order, per-lesson quiz.
// Built lesson by lesson; more lessons get appended here later.
// ═══════════════════════════════════════
const BOOK_ID='book9';

const LESSON_META={
  l1:{ico:'🏦',title:"Lesson 1 — I'd like to open an account",sub:'البنوك · المضارع المستمر للمستقبل · because · أفعال الإحساس (linking)'}
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
  {e:'savings account',a:'حساب التوفير',em:'🐖'},
  {e:'deposit',a:'إيداع / يودع',em:'💰'},
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
  {e:'save',a:'يوفّر (المال)',em:'🐖'},
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
]
};

// ═══════════════════════════════════════
// FINAL EXAM (الاختبار النهائي) — يجمع أسئلة الدروس المتاحة
// ═══════════════════════════════════════
const FINAL=dedupe_by_q([
  ...EE.l1,
]);
EE.final=FINAL;

// ═══════════════════════════════════════
// SPELLING — write from listening
// ═══════════════════════════════════════
const SPELL_LESSONS=[
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 1 — البنوك',w:[
    {e:'account',a:'حساب',em:'🏦'},{e:'deposit',a:'إيداع',em:'💰'},{e:'withdraw',a:'يسحب',em:'🏧'},
    {e:'signature',a:'توقيع',em:'✍️'},{e:'passport',a:'جواز سفر',em:'🛂'},{e:'checkbook',a:'دفتر شيكات',em:'📗'},
    {e:'wallet',a:'محفظة',em:'👛'},{e:'bitter',a:'مرّ',em:'💊'},
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
