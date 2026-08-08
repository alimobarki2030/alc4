// ═══════════════════════════════════════
// DATA — BOOK 12
// Lesson 1 (See the USA!) — vocab, grammar, word-order, per-lesson quiz.
// Built lesson by lesson; more lessons get appended here later.
// ═══════════════════════════════════════
const BOOK_ID='book12';

const LESSON_META={
  l1:{ico:'🗽',title:'Lesson 1 — See the USA!',sub:'خطط السفر والطقس · الشرط الأول (if) · المضارع التام (for/since/ever)'}
};
const LESSON_KEYS=Object.keys(LESSON_META);

// ═══════════════════════════════════════
// VOCABULARY
// ═══════════════════════════════════════
const VOCAB={
l1:[
  // — الطقس والمناخ —
  {e:'climate',a:'مناخ',em:'🌡️'},
  {e:'heat',a:'حرارة / حرّ',em:'🔥'},
  {e:'humidity',a:'رطوبة',em:'💦'},
  {e:'humid',a:'رطب',em:'💧'},
  {e:'breeze',a:'نسيم',em:'🍃'},
  {e:'wind',a:'رياح',em:'🌬️'},
  {e:'blow',a:'تهبّ (الريح)',past:'blew',pa:'هبّت',em:'💨'},
  {e:'clear up',a:'يصفو (الطقس)',em:'☀️'},
  {e:'freezing',a:'متجمّد / شديد البرودة',em:'🥶'},
  {e:'calm',a:'هادئ / ساكن',em:'😌'},
  {e:'clear',a:'صافٍ',em:'🌤️'},
  // — البحر والسفر —
  {e:'beach',a:'شاطئ',em:'🏖️'},
  {e:'sea',a:'بحر',em:'🌊'},
  {e:'deep',a:'عميق',em:'🌊'},
  {e:'slippery',a:'زلِق',em:'⚠️'},
  {e:'slip',a:'ينزلق',em:'🛝'},
  {e:'dangerous',a:'خطير',em:'⚠️'},
  {e:'unpleasant',a:'غير سارّ / مزعج',em:'😖'},
  {e:'thought',a:'فكرة / رأي',em:'💭'},
  // — أفعال —
  {e:'be over',a:'ينتهي',em:'🏁'},
  {e:'last',a:'يدوم / يستمرّ',em:'⏳'},
  {e:'remain',a:'يبقى',em:'📍'},
  {e:'stay',a:'يبقى / يمكث',em:'🏨'},
  {e:'belong to',a:'يخصّ / ينتمي إلى',em:'📎'},
  {e:'expect',a:'يتوقّع',em:'🔮'},
  {e:'could use',a:'يودّ لو يحصل على',em:'🙏'},
  // — كلمات أخرى —
  {e:'if',a:'إذا / لو',em:'🔀'},
  {e:'during',a:'خلال / أثناء',em:'⏱️'},
  {e:'ever',a:'في أيّ وقت / سبق',em:'❓'},
  {e:'except',a:'ما عدا',em:'➖'},
  {e:'frightened',a:'خائف / مذعور',em:'😨'},
  {e:'like',a:'مثل',em:'🟰'},
  {e:'no longer',a:'لم يعد',em:'🚫'},
  {e:'none',a:'لا شيء / لا أحد',em:'0️⃣'},
  {e:'occasionally',a:'أحياناً / من حينٍ لآخر',em:'🔁'},
  {e:'quiet',a:'هادئ',em:'🤫'},
]
};

// ═══════════════════════════════════════
// GRAMMAR
// ═══════════════════════════════════════
const GRAMMAR={
l1:[
  {
    title:'The conditional (present/future)', ar:'الشرط الأول (الحقيقي في الحاضر/المستقبل)',
    rule:'للتعبير عن شرطٍ ممكن ونتيجته: If + مضارع بسيط , will + فعل. الجملتان قابلتان للتبديل. "If we have free time, we\'ll go to the beach."',
    parts:[
      {t:'If + مضارع , will + فعل',d:'If we have free time, we\'ll go to the beach.'},
      {t:'السؤال',d:'Where will you go if you have free time?'},
      {t:'بعد if مضارع (لا will)',d:'نقول if the weather clears up (وليس if it will clear).'},
    ],
    check:{q:"If we have free time, we _______ go to the beach.",o:['will','would','are','have'],a:0,en:'النتيجة → will + فعل',ar:'جواب الشرط → will'},
    formula:[{t:'If',c:'v'},{t:'+',c:'p'},{t:'مضارع بسيط',c:'s'},{t:',',c:'p'},{t:'will + فعل',c:'k'}],
    compare:[
      {c1:'If it rains, we\'ll stay home.',c2:'We\'ll stay home if it rains.',ar:'ترتيب الجملتين'},
      {c1:'if the weather clears up (صحيح)',c2:'if the weather will clear up (خطأ)',ar:'بعد if مضارع'},
    ],
    examples:[
      {s:"If we have free time, we'll go to the beach.",tr:'إذا كان لدينا وقت فراغ، سنذهب إلى الشاطئ.',ar:'if + مضارع , will',ok:true},
      {s:'What will you do if the weather clears up?',tr:'ماذا ستفعل إذا صفا الطقس؟',ar:'سؤال شرطي',ok:true},
      {s:"If it will rain, we'll stay home.",wrong:'if it will rain',right:'if it rains',tr:'بعد if نضع المضارع: if it rains.',ok:false},
    ]
  },
  {
    title:'Present perfect with for / since', ar:'المضارع التام مع for / since',
    rule:'لحدثٍ بدأ في الماضي وما زال مستمرّاً: (have/has) + التصريف الثالث. مع for (مدّة) و since (نقطة بداية).',
    parts:[
      {t:'have/has + past participle',d:'I have lived here for two years.'},
      {t:'for = لمدّة',d:'for two years · for a week.'},
      {t:'since = منذ (نقطة)',d:'since 2001 · since last year.'},
    ],
    check:{q:"John has owned his car _______ 2001.",o:['since','for','ago','during'],a:0,en:'نقطة زمنية → since',ar:'نقطة بداية → since'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'have/has',c:'v'},{t:'+',c:'p'},{t:'past participle + for/since',c:'k'}],
    compare:[
      {c1:'for two years (مدّة)',c2:'since 2001 (نقطة)',ar:'for ↔ since'},
      {c1:'I have gone to this school for two months.',c2:'Jane has taught English since 1990.',ar:'أمثلة'},
    ],
    examples:[
      {s:'I have gone to this school for two months.',tr:'أدرس في هذه المدرسة منذ شهرين.',ar:'have gone + for',ok:true},
      {s:'Jane has taught English since 1990.',tr:'تُدرّس جين الإنجليزية منذ 1990.',ar:'has taught + since',ok:true},
      {s:'I have lived here since two years.',wrong:'since two years',right:'for two years',tr:'مع المدّة نستخدم for: for two years.',ok:false},
    ]
  },
  {
    title:'Present perfect: ever / times', ar:'المضارع التام للخبرة (ever · مرّات)',
    rule:'للسؤال عن خبرةٍ سابقة نستخدم ever مع المضارع التام، وللإجابة نذكر عدد المرّات (twice · two times).',
    parts:[
      {t:'Have you ever …?',d:'Have you ever been to Chicago?'},
      {t:'العدد في الجواب',d:'I\'ve seen her twice since last year.'},
      {t:'مع since في الجواب',d:'The Wilsons have flown there two times since last year.'},
    ],
    check:{q:"Have you _______ seen your aunt since last year?",o:['ever','since','for','none'],a:0,en:'خبرة سابقة → ever',ar:'هل سبق؟ → ever'},
    formula:[{t:'Have',c:'v'},{t:'+',c:'p'},{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'ever + past participle …?',c:'k'}],
    compare:[
      {c1:'Have you ever been there?',c2:"Yes, I've been there twice.",ar:'السؤال والجواب'},
      {c1:'I have seen her twice.',c2:'They have flown there two times.',ar:'عدد المرّات'},
    ],
    examples:[
      {s:'Have you seen your aunt since last year?',tr:'هل رأيت عمّتك منذ العام الماضي؟',ar:'المضارع التام + since',ok:true},
      {s:"I've seen her twice since last year.",tr:'رأيتها مرّتين منذ العام الماضي.',ar:'twice + since',ok:true},
      {s:'Did you ever seen your aunt?',wrong:'Did you ever seen',right:'Have you ever seen',tr:'مع المضارع التام: Have you ever seen?',ok:false},
    ]
  }
]
};

// ═══════════════════════════════════════
// WO — رتّب الجملة (word order)
// ═══════════════════════════════════════
const WO={
l1:[
  {words:['If','we','have','free','time','we','will','go','to','the','beach'],ans:'If we have free time, we will go to the beach.',tr:'إذا كان لدينا وقت فراغ، سنذهب إلى الشاطئ.',ar:'الشرط الأول'},
  {words:['Where','will','you','go','if','you','have','free','time'],ans:'Where will you go if you have free time?',tr:'إلى أين ستذهب إذا كان لديك وقت فراغ؟',ar:'سؤال شرطي'},
  {words:['I','have','gone','to','this','school','for','two','months'],ans:'I have gone to this school for two months.',tr:'أدرس في هذه المدرسة منذ شهرين.',ar:'المضارع التام + for'},
  {words:['Jane','has','taught','English','since','1990'],ans:'Jane has taught English since 1990.',tr:'تُدرّس جين الإنجليزية منذ 1990.',ar:'has taught + since'},
  {words:['I','expect','to','leave','at','noon'],ans:'I expect to leave at noon.',tr:'أتوقّع أن أغادر ظهراً.',ar:'expect to + فعل'},
  {words:['The','roads','were','slippery','after','it','snowed'],ans:'The roads were slippery after it snowed.',tr:'كانت الطرق زلقة بعد أن أثلجت.',ar:'الطقس والطرق'},
  {words:['These','magazines','belong','to','Pat'],ans:'These magazines belong to Pat.',tr:'هذه المجلّات تخصّ بات.',ar:'belong to'},
]
};

// ═══════════════════════════════════════
// EE — «اختبر» (من تمرين EE الرسمي: Circle the best answer)
// ═══════════════════════════════════════
const EE={
l1:[
  {q:"Bill: Is that movie on TV finished yet? Tim: Yes, it was _______ about 15 minutes ago.",o:["out","over","up","off"],a:1,en:"finished → over",ar:'انتهى → over',tr:'بيل: هل انتهى الفيلم على التلفاز؟ تيم: نعم، انتهى قبل نحو ١٥ دقيقة.'},
  {q:"How long was the movie? It _______ about three hours.",o:["belonged","stayed","lasted","satisfied"],a:2,en:"continued → lasted",ar:'استمرّ/دام → lasted',tr:'كم كان طول الفيلم؟ دام نحو ثلاث ساعات.'},
  {q:"Is Linda still in Italy? Yes, she wants to _______ there until her course ends in December.",o:["stay","blow","connect","slip"],a:0,en:"remain → stay",ar:'تبقى → stay',tr:'هل ما زالت ليندا في إيطاليا؟ نعم، تريد البقاء هناك حتى تنتهي دورتها في ديسمبر.'},
  {q:"What happened to Paul? He _______ on the wet floor and broke his arm.",o:["expected","remained","refunded","slipped"],a:3,en:"lost footing → slipped",ar:'انزلق → slipped',tr:'ماذا حدث لبول؟ انزلق على الأرض المبتلّة وكسر ذراعه.'},
  {q:"All of the students are still here. _______ of them left early.",o:["A few","One","None","All"],a:2,en:"not any → none",ar:'لا أحد → none',tr:'كلّ الطلاب ما زالوا هنا، لم يغادر أحدٌ منهم مبكّراً.'},
  {q:"It looks like the _______ has blown away the clouds.",o:["humidity","beach","heat","wind"],a:3,en:"blows → wind",ar:'التي تهبّ → الرياح (wind)',tr:'يبدو أنّ الرياح قد أبعدت الغيوم.'},
  {q:"Bill: Does the meeting begin at 5:00 or 5:30? Tim: At 5:30. Bill: Thanks for _______.",o:["expecting that to","clearing that up","being over","giving back"],a:1,en:"explaining → clearing that up",ar:'التوضيح → clearing that up',tr:'بيل: هل يبدأ الاجتماع في الخامسة أم الخامسة والنصف؟ تيم: في الخامسة والنصف. بيل: شكراً على التوضيح.'},
  {q:"Bill: Are these your magazines? Tim: No, they're not mine. They _______ to Pat.",o:["belong","stay","blow","slip"],a:0,en:"owned by → belong",ar:'تخصّ → belong',tr:'بيل: هل هذه مجلّاتك؟ تيم: لا، ليست لي، إنها تخصّ بات.'},
  {q:"Bill: Where are you going on your vacation? Tim: I want to go to the _______ and enjoy the beach.",o:["wind","mountains","sea","heat"],a:2,en:"beach → sea",ar:'الشاطئ → البحر (sea)',tr:'بيل: إلى أين ستذهب في إجازتك؟ تيم: أريد الذهاب إلى البحر والاستمتاع بالشاطئ.'},
  {q:"Bill: Is the water in the lake still cold? Tim: Yes, it's _______ outside.",o:["deep","freezing","humid","raining"],a:1,en:"very cold → freezing",ar:'شديد البرودة → freezing',tr:'بيل: هل ما زال ماء البحيرة بارداً؟ تيم: نعم، الجوّ متجمّد في الخارج.'},
  {q:"After it snowed, the roads were _______.",o:["clear","hot","slippery","deep"],a:2,en:"icy → slippery",ar:'زلِقة → slippery',tr:'بعد أن أثلجت، أصبحت الطرق زلقة.'},
  {q:"An icy road can be _______ to drive on.",o:["easy","frightened","quiet","dangerous"],a:3,en:"unsafe → dangerous",ar:'غير آمنة → خطيرة (dangerous)',tr:'الطريق الجليدية قد تكون خطيرة للقيادة عليها.'},
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
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 1 — الطقس والسفر',w:[
    {e:'climate',a:'مناخ',em:'🌡️'},{e:'humidity',a:'رطوبة',em:'💦'},{e:'breeze',a:'نسيم',em:'🍃'},
    {e:'beach',a:'شاطئ',em:'🏖️'},{e:'freezing',a:'متجمّد',em:'🥶'},{e:'slippery',a:'زلِق',em:'⚠️'},
    {e:'dangerous',a:'خطير',em:'⚠️'},{e:'expect',a:'يتوقّع',em:'🔮'},
  ]},
];

// ═══════════════════════════════════════
// LISTENING — فيديوهات الاستماع (Quiz A · B · C)
// ═══════════════════════════════════════
const YT_VIDEOS=[
  {id:'AhGk2cxrgTc',t:'Quiz A',s:'استماع وقراءة مع الحل'},
  {id:'D9BfYUKuM9s',t:'Quiz B',s:'استماع وقراءة مع الحل'},
  {id:'Gtkj9wJK-Zk',t:'Quiz C',s:'استماع وقراءة مع الحل'},
];

// ═══════════════════════════════════════
// ROUTING MANIFEST
// ═══════════════════════════════════════
const SCREENS=['home','lscreen','rscreen','ytscreen','fscreen','spscreen','mkscreen'];
const SCREEN_NAMES={home:'الرئيسية',lscreen:'درس',rscreen:'المراجعة',ytscreen:'الاستماع',fscreen:'الاختبار النهائي',spscreen:'الإملاء',mkscreen:'مراجعة الأخطاء'};
