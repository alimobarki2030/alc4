// ═══════════════════════════════════════
// DATA — BOOK 3
// Lesson 1 (He gets up early) — vocab, grammar, word-order, per-lesson quiz.
// Built lesson by lesson; more lessons get appended here later.
// ═══════════════════════════════════════
const BOOK_ID='book3';

const LESSON_META={
  l1:{ico:'⏰',title:'Lesson 1 — He gets up early',sub:'الحياة اليومية · المضارع البسيط · النفي · أسئلة نعم/لا · أوقات اليوم'}
};
const LESSON_KEYS=Object.keys(LESSON_META);

// ═══════════════════════════════════════
// VOCABULARY
// ═══════════════════════════════════════
const VOCAB={
l1:[
  // — الأنشطة اليومية —
  {e:'get up',a:'يستيقظ / ينهض',em:'⏰'},
  {e:'get dressed',a:'يرتدي ملابسه',em:'👕'},
  {e:'take a shower',a:'يستحمّ (دُش)',em:'🚿'},
  {e:'shower',a:'دُش / يستحمّ',em:'🚿'},
  {e:'shave',a:'يحلق',em:'🪒'},
  {e:'swim',a:'يسبح',em:'🏊'},
  {e:'study',a:'يذاكر / يدرس',em:'📖'},
  {e:'sleep',a:'ينام',em:'😴'},
  {e:'go to bed',a:'يذهب إلى الفراش',em:'🛏️'},
  {e:'go to class',a:'يذهب إلى الصفّ',em:'🏫'},
  {e:'eat',a:'يأكل',em:'🍽️'},
  {e:'drink',a:'يشرب',em:'🥤'},
  {e:'want',a:'يريد',em:'🙏'},
  {e:'watch television',a:'يشاهد التلفاز',em:'📺'},
  // — أوقات اليوم —
  {e:'morning',a:'الصباح',em:'🌅'},
  {e:'noon',a:'الظُّهر (١٢ ظهراً)',em:'🌞'},
  {e:'afternoon',a:'بعد الظُّهر',em:'🌤️'},
  {e:'evening',a:'المساء',em:'🌆'},
  {e:'night',a:'الليل',em:'🌙'},
  {e:'midnight',a:'منتصف الليل (١٢ ليلاً)',em:'🕛'},
  {e:'a.m.',a:'صباحاً (قبل الظُّهر)',em:'🔆'},
  {e:'p.m.',a:'مساءً (بعد الظُّهر)',em:'🌘'},
  // — كلمات الوقت والوصف —
  {e:'early',a:'مبكّراً',em:'🐓'},
  {e:'late',a:'متأخّراً',em:'🐢'},
  {e:'before',a:'قبل',em:'⏮️'},
  {e:'after',a:'بعد',em:'⏭️'},
  {e:'every',a:'كل',em:'🔁'},
  {e:'for',a:'لِـ / من أجل',em:'🎯'},
  {e:'hungry',a:'جائع',em:'😋'},
  {e:'thirsty',a:'عطشان',em:'🥵'},
  {e:'lesson',a:'الدرس',em:'📘'},
  {e:'class',a:'الصفّ / الحصّة',em:'🧑‍🏫'},
  {e:'snack',a:'وجبة خفيفة',em:'🍎'},
  // — الوجبات والطعام —
  {e:'breakfast',a:'الفطور',em:'🍳'},
  {e:'lunch',a:'الغداء',em:'🍱'},
  {e:'dinner',a:'العشاء',em:'🍽️'},
  {e:'eggs',a:'بيض',em:'🥚'},
  {e:'fruit',a:'فاكهة',em:'🍇'},
  {e:'salad',a:'سلطة',em:'🥗'},
  {e:'chicken',a:'دجاج',em:'🍗'},
  {e:'beef',a:'لحم بقر',em:'🥩'},
  {e:'fish',a:'سمك',em:'🐟'},
  {e:'water',a:'ماء',em:'💧'},
  {e:'juice',a:'عصير',em:'🧃'},
  {e:'coffee',a:'قهوة',em:'☕'},
  {e:'milk',a:'حليب',em:'🥛'},
],
};

// ═══════════════════════════════════════
// GRAMMAR
// ═══════════════════════════════════════
const GRAMMAR={
l1:[
  {
    title:'Simple Present Tense', ar:'المضارع البسيط (إضافة s)',
    rule:'نستخدم المضارع البسيط للأمور التي نفعلها بانتظام (كل يوم/كل صباح). نضيف s للفعل بعد he · she · it، ولا نضيفها بعد I · you · we · they.',
    parts:[
      {t:'He / She / It + verb + s',d:'المفرد الغائب يأخذ s. مثال: He eats lunch every day. = يأكل الغداء كل يوم.'},
      {t:'I / You / We / They + verb',d:'بلا s. مثال: They eat breakfast every morning. = يأكلون الفطور كل صباح.'},
      {t:'أفعال خاصّة',d:'study → studies · watch → watches · go → goes · do → does.'},
      {t:'كلمات التكرار',d:'every day · every morning · every evening تدلّ على المضارع البسيط.'},
    ],
    check:{q:'She _______ up at 6:00 every day.',o:['get','gets','getting','are get'],a:1,en:'she → gets (add s)',ar:'مع she نضيف s → gets'},
    formula:[{t:'He/She/It',c:'s'},{t:'+',c:'p'},{t:'verb + s',c:'v'},{t:'+',c:'p'},{t:'every day',c:'k'}],
    compare:[
      {c1:'I eat breakfast.',c2:'He eats breakfast.',ar:'مع he نضيف s'},
      {c1:'They study every evening.',c2:'She studies every evening.',ar:'study → studies'},
    ],
    examples:[
      {s:'He gets up at 6:00 a.m. every day.',tr:'يستيقظ الساعة ٦:٠٠ صباحاً كل يوم.',ar:'he → gets',ok:true},
      {s:'They swim at 4:00 every afternoon.',tr:'يسبحون الساعة ٤:٠٠ كل عصر.',ar:'they → swim (بلا s)',ok:true},
      {s:'She study her lesson every evening.',wrong:'study',right:'studies',tr:'مع she: study → studies.',ok:false},
    ]
  },
  {
    title:'Negative Simple Present', ar:'النفي (don\'t / doesn\'t)',
    rule:'للنفي نستخدم doesn\'t (does not) مع he · she · it، و don\'t (do not) مع I · you · we · they، ويبقى الفعل مجرّداً بلا s.',
    parts:[
      {t:"He / She / It + doesn't + verb",d:"المفرد الغائب. مثال: He doesn't sleep late. = لا ينام متأخّراً."},
      {t:"I / You / We / They + don't + verb",d:"مثال: They don't eat in the mess hall. = لا يأكلون في المطعم."},
      {t:'الفعل يعود مجرّداً',d:"بعد doesn't نحذف s: He sleeps → He doesn't sleep."},
    ],
    check:{q:'He _______ sleep late.',o:["don't","doesn't",'not','isn\'t'],a:1,en:"he → doesn't",ar:'مع he نستخدم doesn\'t'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:"don't / doesn't",c:'n'},{t:'+',c:'p'},{t:'verb',c:'v'}],
    compare:[
      {c1:'Pvt Garcia sleeps late.',c2:"Pvt Garcia doesn't sleep late.",ar:'sleeps → doesn\'t sleep'},
      {c1:'They eat in the mess hall.',c2:"They don't eat in the mess hall.",ar:'they → don\'t'},
    ],
    examples:[
      {s:"I don't eat breakfast in the morning.",tr:'لا آكل الفطور في الصباح.',ar:'I → don\'t',ok:true},
      {s:"Susan doesn't go to the gym at 3 p.m.",tr:'لا تذهب سوزان إلى النادي الساعة ٣ مساءً.',ar:'Susan → doesn\'t go',ok:true},
      {s:'He don\'t shave before class.',wrong:"don't",right:"doesn't",tr:'مع he نستخدم doesn\'t.',ok:false},
    ]
  },
  {
    title:'Yes / No Questions', ar:'أسئلة نعم/لا (Do / Does)',
    rule:'لتكوين سؤال نعم/لا نبدأ بـ Do مع I · you · we · they، و Does مع he · she · it، ويبقى الفعل مجرّداً.',
    parts:[
      {t:'Do + I/you/we/they + verb?',d:'مثال: Do the students eat breakfast? = هل يأكل الطلاب الفطور؟'},
      {t:'Does + he/she/it + verb?',d:'مثال: Does Stephen study every night? = هل يذاكر ستيفن كل ليلة؟'},
      {t:'الفعل بلا s في السؤال',d:'Does Jeff sleep late? (وليس sleeps).'},
    ],
    check:{q:'_______ Jeff sleep late every morning?',o:['Do','Does','Is','Are'],a:1,en:'Jeff (he) → Does',ar:'مع المفرد Jeff نبدأ بـ Does'},
    formula:[{t:'Do / Does',c:'v'},{t:'+',c:'p'},{t:'subject',c:'s'},{t:'+',c:'p'},{t:'verb?',c:'k'}],
    compare:[
      {c1:'The students eat breakfast.',c2:'Do the students eat breakfast?',ar:'جمع → Do'},
      {c1:'Stephen eats in the mess hall.',c2:'Does Stephen eat in the mess hall?',ar:'مفرد → Does + eat'},
    ],
    examples:[
      {s:'Do you eat a snack at night?',tr:'هل تأكل وجبة خفيفة في الليل؟',ar:'you → Do',ok:true},
      {s:'Does Jeff sleep late every morning?',tr:'هل ينام جيف متأخّراً كل صباح؟',ar:'Jeff → Does + sleep',ok:true},
      {s:'Does Stephen studies every night?',wrong:'studies',right:'study',tr:'بعد Does يبقى الفعل مجرّداً → study.',ok:false},
    ]
  },
  {
    title:'Long & Short Answers', ar:'الإجابات الطويلة والقصيرة',
    rule:'نُجيب سؤال نعم/لا بإجابة قصيرة: Yes, I do / No, I don\'t · Yes, he does / No, he doesn\'t — بحسب الفاعل.',
    parts:[
      {t:'Yes, I/you/we/they do.',d:'إجابة قصيرة بالإيجاب. مثال: Do you drink coffee? — Yes, I do.'},
      {t:"No, I/you/we/they don't.",d:"مثال: Do you drink coffee? — No, I don't."},
      {t:'Yes, he/she/it does. / No … doesn\'t.',d:'مثال: Does Stephen study? — Yes, he does. / No, he doesn\'t.'},
    ],
    check:{q:'Do you drink coffee? — No, I _______.',o:["don't","doesn't",'not','am not'],a:0,en:"I → don't",ar:'مع I نستخدم don\'t'},
    compare:[
      {c1:'Do you drink coffee?',c2:'Yes, I do. / No, I don\'t.',ar:'I → do / don\'t'},
      {c1:'Does Jan eat dinner early?',c2:'Yes, she does. / No, she doesn\'t.',ar:'she → does / doesn\'t'},
    ],
    examples:[
      {s:'Do you swim after class? — Yes, I do.',tr:'هل تسبح بعد الصفّ؟ — نعم.',ar:'I → do',ok:true},
      {s:"Does Stephen study every night? — No, he doesn't.",tr:'هل يذاكر ستيفن كل ليلة؟ — لا.',ar:'he → doesn\'t',ok:true},
      {s:'Do you eat lunch in your room? — No, I doesn\'t.',wrong:"doesn't",right:"don't",tr:'مع I نستخدم don\'t.',ok:false},
    ]
  }
],
};

// ═══════════════════════════════════════
// WO — "رتّب الجملة" (word order)
// ═══════════════════════════════════════
const WO={
l1:[
  {words:['He','gets','up','at','6:00','every','day'],ans:'He gets up at 6:00 every day.',tr:'يستيقظ الساعة ٦:٠٠ كل يوم.',ar:'المضارع البسيط (he + gets)'},
  {words:['They','go','to','class','every','morning'],ans:'They go to class every morning.',tr:'يذهبون إلى الصفّ كل صباح.',ar:'they + go (بلا s)'},
  {words:['She','studies','her','lesson','every','evening'],ans:'She studies her lesson every evening.',tr:'تذاكر درسها كل مساء.',ar:'study → studies'},
  {words:['He',"doesn't",'sleep','late'],ans:"He doesn't sleep late.",tr:'لا ينام متأخّراً.',ar:'النفي doesn\'t'},
  {words:['I',"don't",'eat','breakfast'],ans:"I don't eat breakfast.",tr:'لا آكل الفطور.',ar:'النفي don\'t'},
  {words:['Do','the','students','eat','breakfast','every','day'],ans:'Do the students eat breakfast every day?',tr:'هل يأكل الطلاب الفطور كل يوم؟',ar:'سؤال بـ Do'},
  {words:['Does','Stephen','study','every','night'],ans:'Does Stephen study every night?',tr:'هل يذاكر ستيفن كل ليلة؟',ar:'سؤال بـ Does'},
  {words:["Let's",'go','to','lunch'],ans:"Let's go to lunch.",tr:'لنذهب إلى الغداء.',ar:'الاقتراح Let\'s'},
],
};

// ═══════════════════════════════════════
// EE — "اختبر" (lesson quiz, multiple choice)
// المصدر: أسئلة التقييم الرسمية (Exercise I) — الدرس ١
// ═══════════════════════════════════════
const EE={
l1:[
  {q:"_______ you eat a snack at night?",o:["Do","Does","Aren't","Doesn't"],a:0,en:"you → Do",ar:'مع you نبدأ السؤال بـ Do',tr:'هل تأكل وجبة خفيفة في الليل؟'},
  {q:"The students eat lunch at _______.",o:["noon","late","now","early"],a:0,en:"lunch time → noon",ar:'وقت الغداء → الظُّهر (noon)',tr:'يأكل الطلاب الغداء عند الظُّهر.'},
  {q:"Jack goes to the mess hall _______ dinner.",o:["in","for","late","early"],a:1,en:"for + meal",ar:'يذهب لأجل العشاء → for dinner',tr:'يذهب جاك إلى المطعم لتناول العشاء.'},
  {q:"1:00 p.m. is in the _______.",o:["night","noon","morning","afternoon"],a:3,en:"1 p.m. → afternoon",ar:'الواحدة مساءً → بعد الظُّهر',tr:'الساعة الواحدة مساءً في فترة بعد الظُّهر.'},
  {q:"Jan and I _______ every day.",o:["swim","swims","are swim","swimming"],a:0,en:"Jan and I (we) → swim",ar:'Jan and I جمع → swim بلا s',tr:'أنا وجان نسبح كل يوم.'},
  {q:"Thursday is _______ Tuesday.",o:["before","after","early","late"],a:1,en:"Thursday comes after Tuesday",ar:'الخميس بعد الثلاثاء → after',tr:'الخميس بعد الثلاثاء.'},
  {q:"It's 11:00 _______. I'm going to bed.",o:["a.m.","p.m.","time","tired"],a:1,en:"going to bed → 11 p.m.",ar:'ذاهب للنوم → ١١ مساءً (p.m.)',tr:'الساعة ١١ مساءً، سأذهب للنوم.'},
  {q:"I _______ come to class late.",o:["am","are","don't","doesn't"],a:2,en:"I → don't",ar:'مع I نستخدم don\'t',tr:'لا آتي إلى الصفّ متأخّراً.'},
  {q:"Rick is buying iced tea at the snack bar. He is _______.",o:["late","early","hungry","thirsty"],a:3,en:"buying a drink → thirsty",ar:'يشتري مشروباً → عطشان',tr:'ريك يشتري شاياً مثلّجاً، فهو عطشان.'},
  {q:"Jim gets up at 6:00. Tom gets up at 6:30. Jim gets up _______ Tom.",o:["before","after","early","late"],a:0,en:"6:00 before 6:30 → before",ar:'٦:٠٠ قبل ٦:٣٠ → before',tr:'يستيقظ جيم قبل توم.'},
  {q:"_______ Jeff sleep late every morning?",o:["Do","Does","Aren't","Wasn't"],a:1,en:"Jeff (he) → Does",ar:'مع المفرد Jeff → Does',tr:'هل ينام جيف متأخّراً كل صباح؟'},
  {q:"The movie is at eight o'clock. Jim comes at seven o'clock. He comes _______.",o:["before","after","early","late"],a:2,en:"comes an hour before → early",ar:'يأتي قبل الموعد → مبكّراً',tr:'الفيلم الساعة الثامنة، وجاء جيم السابعة، فقد جاء مبكّراً.'},
  {q:"Captain Smith is a student. He goes to class _______ day.",o:["in","every","at","a.m."],a:1,en:"regularly → every day",ar:'بانتظام → كل يوم (every)',tr:'الكابتن سميث طالب، يذهب إلى الصفّ كل يوم.'},
  {q:"I get up at 7:00 a.m. Then I _______ before I go to class.",o:["go to bed","get dressed","go to sleep","go early"],a:1,en:"after getting up → get dressed",ar:'بعد الاستيقاظ → يرتدي ملابسه',tr:'أستيقظ ٧:٠٠ صباحاً ثم أرتدي ملابسي قبل الذهاب للصفّ.'},
  {q:"Every night I study my _______.",o:["lesson","class","library","evening"],a:0,en:"study my lesson",ar:'أذاكر درسي → lesson',tr:'كل ليلة أذاكر درسي.'},
  {q:"We eat breakfast in the _______.",o:["noon","evening","morning","afternoon"],a:2,en:"breakfast → morning",ar:'الفطور في الصباح → morning',tr:'نأكل الفطور في الصباح.'},
  {q:"Tom doesn't eat breakfast. At lunch time, he's _______.",o:["sad","angry","tired","hungry"],a:3,en:"no breakfast → hungry",ar:'بلا فطور → جائع',tr:'لا يأكل توم الفطور، فهو جائع وقت الغداء.'},
  {q:"Steve goes to bed at midnight. He goes to bed _______.",o:["late","early","after","before"],a:0,en:"midnight → late",ar:'منتصف الليل → متأخّراً',tr:'يذهب ستيف للنوم منتصف الليل، أي متأخّراً.'},
  {q:"Do you _______ before noon on Saturday?",o:["get","get up","gets up","getting up"],a:1,en:"Do you + base → get up",ar:'بعد Do you فعل مجرّد → get up',tr:'هل تستيقظ قبل الظُّهر يوم السبت؟'},
  {q:"Tom _______ after he _______.",o:["shave, shower","shaving, showering","shaves, showers","shower, shave"],a:2,en:"he → shaves, showers",ar:'مع he نضيف s → shaves, showers',tr:'يحلق توم بعد أن يستحمّ.'},
],
};

// ═══════════════════════════════════════
// REVIEW — "المراجعة"
// ═══════════════════════════════════════
const REVIEW=[
  {q:"He _______ breakfast in the dining hall every morning.",o:["eat","eats","eating","are eat"],a:1,en:"he → eats",ar:'مع he نضيف s → eats',tr:'يأكل الفطور في قاعة الطعام كل صباح.'},
  {q:"They _______ to the mess hall at 6:45.",o:["goes","go","going","gone"],a:1,en:"they → go",ar:'مع they بلا s → go',tr:'يذهبون إلى المطعم الساعة ٦:٤٥.'},
  {q:"Pvt Garcia _______ sleep late.",o:["don't","doesn't","not","isn't"],a:1,en:"he → doesn't",ar:'مع he نستخدم doesn\'t',tr:'لا ينام الجندي غارسيا متأخّراً.'},
  {q:"_______ Hank and Stephen get up early?",o:["Does","Is","Do","Are"],a:2,en:"plural → Do",ar:'جمع → Do',tr:'هل يستيقظ هانك وستيفن مبكّراً؟'},
  {q:"Does Betty drink coffee every afternoon? — Yes, she _______.",o:["do","does","is","doesn't"],a:1,en:"she → does",ar:'مع she → does',tr:'هل تشرب بيتي القهوة كل عصر؟ — نعم.'},
  {q:"12 o'clock in the middle of the day is _______.",o:["midnight","night","noon","evening"],a:2,en:"midday → noon",ar:'منتصف النهار → الظُّهر',tr:'الساعة ١٢ في منتصف النهار هي الظُّهر.'},
  {q:"12 o'clock at night is _______.",o:["noon","midnight","morning","afternoon"],a:1,en:"12 at night → midnight",ar:'منتصف الليل → midnight',tr:'الساعة ١٢ ليلاً هي منتصف الليل.'},
  {q:"I take a _______ and shave in the morning.",o:["snack","shower","lesson","class"],a:1,en:"wash → shower",ar:'يغتسل → shower',tr:'أستحمّ وأحلق في الصباح.'},
  {q:"He's very _______, so he wants to drink water.",o:["hungry","tired","thirsty","early"],a:2,en:"wants water → thirsty",ar:'يريد ماءً → عطشان',tr:'إنه عطشان جداً، لذا يريد شرب الماء.'},
  {q:"I study my lesson in the _______ and go to bed at midnight.",o:["morning","evening","noon","a.m."],a:1,en:"study then sleep → evening",ar:'يذاكر ثم ينام → المساء',tr:'أذاكر درسي في المساء وأنام منتصف الليل.'},
  {q:"Does Stephen study every night? — No, he _______.",o:["don't","isn't","doesn't","not"],a:2,en:"he → doesn't",ar:'مع he → doesn\'t',tr:'هل يذاكر ستيفن كل ليلة؟ — لا.'},
  {q:"_______ eat fish for lunch. I want a salad.",o:["Let's","Do","Does","I'm"],a:0,en:"suggestion → Let's",ar:'اقتراح → Let\'s',tr:'لنأكل السمك على الغداء. أنا أريد سلطة.'},
];
EE.review=REVIEW;

// ═══════════════════════════════════════
// FINAL EXAM (الاختبار النهائي) — يجمع أسئلة الدروس المتاحة
// ═══════════════════════════════════════
const FINAL=dedupe_by_q([
  ...EE.l1,
]);
EE.final=FINAL;

// ═══════════════════════════════════════
// SPELL — الإملاء
// ═══════════════════════════════════════
const SPELL_LESSONS=[
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 1 — الحياة اليومية وأوقات اليوم',w:[
    {e:'morning',a:'الصباح',em:'🌅'},{e:'evening',a:'المساء',em:'🌆'},{e:'midnight',a:'منتصف الليل',em:'🕛'},
    {e:'breakfast',a:'الفطور',em:'🍳'},{e:'hungry',a:'جائع',em:'😋'},{e:'thirsty',a:'عطشان',em:'🥵'},
    {e:'shower',a:'دُش',em:'🚿'},{e:'lesson',a:'الدرس',em:'📘'},{e:'snack',a:'وجبة خفيفة',em:'🍎'},
  ]},
];

// ═══════════════════════════════════════
// LISTENING — (تُضاف فيديوهات Book 3 لاحقاً)
// ═══════════════════════════════════════
const YT_VIDEOS=[];

// ═══════════════════════════════════════
// ROUTING MANIFEST
// ═══════════════════════════════════════
const SCREENS=['home','lscreen','rscreen','fscreen','spscreen','mkscreen'];
const SCREEN_NAMES={home:'الرئيسية',lscreen:'درس',rscreen:'المراجعة',fscreen:'الاختبار النهائي',spscreen:'الإملاء',mkscreen:'مراجعة الأخطاء'};
