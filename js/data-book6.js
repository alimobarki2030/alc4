// ═══════════════════════════════════════
// DATA — BOOK 6
// Only Lesson 1 is ready so far — LESSON_META/LESSON_KEYS only lists
// what actually has content (matches the pattern used while Book 5 was
// built incrementally lesson by lesson). No final exam / listening /
// spelling sections yet — those get added once more lessons + their
// source material exist.
// ═══════════════════════════════════════
const BOOK_ID='book6';

const LESSON_META={
  l1:{ico:'🌦️',title:"Lesson 1 — How's the Weather?",sub:'الطقس والأحوال الجوية'}
};
const LESSON_KEYS=Object.keys(LESSON_META);

// ═══════════════════════════════════════
// VOCABULARY
// ═══════════════════════════════════════
const VOCAB={
l1:[
  {e:'weather',a:'الطقس',em:'🌡️'},
  {e:'sky',a:'السماء',em:'🌤️'},
  {e:'sun',a:'الشمس',em:'☀️'},
  {e:'sunshine',a:'أشعة الشمس',em:'🌞'},
  {e:'cloud',a:'غيمة',em:'☁️'},
  {e:'rain',a:'مطر',em:'🌧️'},
  {e:'shower',a:'زخة مطر خفيفة',em:'🌦️'},
  {e:'storm',a:'عاصفة',em:'⛈️'},
  {e:'snow',a:'ثلج',em:'❄️'},
  {e:'wind',a:'الرياح',em:'💨'},
  {e:'umbrella',a:'مظلة',em:'☂️'},
  {e:'raincoat',a:'معطف المطر',em:'🧥'},
  {e:'change',a:'تغيّر',em:'🔄'},
  {e:'score',a:'نتيجة / علامة',em:'💯'},
  {e:'grade',a:'درجة (بالمدرسة)',em:'📊'},
  {e:'clear',a:'صافي',em:'🔵'},
  {e:'cloudy',a:'غائم',em:'☁️'},
  {e:'dry',a:'جاف',em:'🏜️'},
  {e:'nice',a:'لطيف / جميل',em:'😊'},
  {e:'rainy',a:'ممطر',em:'🌧️'},
  {e:'snowy',a:'مثلج',em:'❄️'},
  {e:'stormy',a:'عاصف',em:'⛈️'},
  {e:'sunny',a:'مشمس',em:'☀️'},
  {e:'wet',a:'مبلل',em:'💧'},
  {e:'windy',a:'عاصف الرياح',em:'🌬️'},
  {e:'get',a:'يصبح / يصير',past:'got',pa:'صار / أصبح',em:'🔀'},
  {e:'rain (verb)',a:'تُمطر',past:'rained',pa:'أمطرت',em:'🌧️'},
  {e:'shine',a:'يلمع / يشرق',past:'shone',pa:'أشرق',em:'✨'},
  {e:'snow (verb)',a:'تُثلج',past:'snowed',pa:'أثلجت',em:'❄️'},
  {e:'think (about)',a:'يعتقد / يفكّر (في)',past:'thought',pa:'اعتقد / فكّر',em:'🤔'},
  {e:'how',a:'كيف',em:'❓'},
]
};

// ═══════════════════════════════════════
// GRAMMAR (قواعد)
// ═══════════════════════════════════════
const GRAMMAR={
l1:[
  {
    title:'Asking Questions with How + BE', ar:'السؤال بـ How + فعل الكينونة',
    rule:'نسأل عن حال شيء أو تجربة بـ How + is/are (حاضر) أو was/were (ماضٍ) — الفعل يتغيّر حسب الفاعل والزمن.',
    check:{q:'How _______ your trip?',o:['is','are','was','were'],a:2,en:'trip is singular, past → was',ar:'trip مفرد وماضٍ → was'},
    compare:[
      {c1:"How's the weather?",c2:"It's cloudy.",ar:'سؤال حاضر عن حال شيء'},
      {c1:'How was your trip?',c2:'It was great!',ar:'سؤال ماضٍ — trip مفرد → was'},
      {c1:'How was the food in the two cities?',c2:'It was about the same.',ar:'سؤال عن تجربة ماضية'},
    ],
    examples:[
      {s:"How's it going?",tr:'كيف الحال؟',ar:'سؤال عام عن الحال — حاضر',ok:true},
      {s:'How was your flight?',tr:'كيف كانت رحلة طيرانك؟',ar:'سؤال ماضٍ عن تجربة',ok:true},
      {s:'How the weather is?',wrong:'the weather is',right:'is the weather',tr:'لازم نقلب السؤال: How + is + الفاعل، مو الترتيب العادي.',ok:false},
    ]
  },
  {
    title:'That + Noun Clause (think)', ar:'جملة كاملة بعد think — أعتقد أنّ',
    rule:'نستخدم think/thinks بالحاضر وthought بالماضي + (that) + جملة كاملة — كلمة that اختيارية ونقدر نحذفها.',
    check:{q:'Bruce _______ the fruit in California is very good.',o:['think','thinks','thought','thinking'],a:1,en:'Bruce = he → thinks',ar:'Bruce = هو → thinks'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'think / thinks / thought',c:'v'},{t:'(that)',c:'k'},{t:'+',c:'p'},{t:'sentence',c:'s'}],
    compare:[
      {c1:'I think this is a good class.',c2:'I think that this is a good class.',ar:'that اختيارية، الجملتين صح'},
      {c1:'"It’s warm inside," Mary said.',c2:"Mary thinks it's warm inside.",ar:'نحوّل كلام مباشر لجملة بـ think'},
      {c1:'"It was cold in New York," said Dick.',c2:'Dick thought it was cold in New York.',ar:'الماضي: thought'},
    ],
    examples:[
      {s:'I think California is a good place to live.',tr:'أعتقد إن كاليفورنيا مكان جميل للعيش.',ar:'think + جملة كاملة',ok:true},
      {s:"Sgt Jackson thought the food wasn't very good.",tr:'الرقيب جاكسون اعتقد إن الأكل ما كان زين.',ar:'thought للماضي',ok:true},
      {s:'Bruce think the food was good.',wrong:'think',right:'thought',tr:'Bruce = هو، ولازم نطابق الزمن — thought للماضي.',ok:false},
    ]
  },
  {
    title:'Asking Questions with That + Noun Clause', ar:'السؤال عن رأي شخص — think',
    rule:'نحط أداة السؤال (What/Where/When/How much...) قبل does/did + الفاعل + think + (that) + الباقي.',
    check:{q:'_______ does Bob think the car will cost?',o:['What','Where','When','Who'],a:0,en:'asking about cost/amount = What',ar:'يسأل عن السعر = What'},
    compare:[
      {c1:'Where does Becky think she’ll go to school?',c2:'She thinks she’ll go to school in Houston.',ar:'Where = مكان'},
      {c1:'When does Mary think John can speak?',c2:'She thinks he can speak next month.',ar:'When = وقت'},
    ],
    examples:[
      {s:'Where does Bob think he can buy a car?',tr:'وين بوب يعتقد يقدر يشتري سيارة؟',ar:'Where + does + فاعل + think',ok:true},
      {s:'What does Tom think about the food?',tr:'وش رأي توم بالأكل؟',ar:'What + does + think about',ok:true},
    ]
  }
]
};

// ═══════════════════════════════════════
// WORD ORDER (رتّب الجملة)
// ═══════════════════════════════════════
const WO={
l1:[
  {words:['I','think','California','is','a','good','place','to','live'],ans:'I think California is a good place to live.',tr:'أعتقد إن كاليفورنيا مكان جميل للعيش.',ar:'think + جملة كاملة'},
  {words:['Paul','thinks','the','change','in','weather','is','good'],ans:'Paul thinks the change in weather is good.',tr:'بول يعتقد إن تغيّر الطقس شي جيد.',ar:'thinks مع he'},
  {words:['Bruce','thought','it','was','cold','in','New','York'],ans:'Bruce thought it was cold in New York.',tr:'بروس اعتقد إنه كان الجو بارد بنيويورك.',ar:'thought للماضي'},
  {words:['How','was','the','weather','in','California','?'],ans:'How was the weather in California ?',tr:'كيف كان الطقس بكاليفورنيا؟',ar:'How + was للسؤال بالماضي'},
  {words:['It','was','raining','and','the','street','was','wet'],ans:'It was raining and the street was wet.',tr:'كانت الدنيا تمطر والشارع كان مبلل.',ar:'وصف حالة ماضية'},
  {words:['Sara','took','her','umbrella','and','walked','to','school'],ans:'Sara took her umbrella and walked to school.',tr:'سارة أخذت مظلتها ومشت للمدرسة.',ar:'فعلين بالماضي متتاليين'},
  {words:['Bruce','wants','to','join','the','Navy'],ans:'Bruce wants to join the Navy.',tr:'بروس يبي ينضم للبحرية.',ar:'want to + فعل'},
  {words:['I','think',"I'll",'fly','with','Bluesky','Airlines','again'],ans:"I think I'll fly with Bluesky Airlines again.",tr:'أعتقد بطير مع بلوسكاي إيرلاينز مرة ثانية.',ar:"think + I'll (مستقبل)"},
]
};

// ═══════════════════════════════════════
// EVALUATION EXERCISES (اختبر) — من ملحق EE الرسمي بالكتاب
// tr = ترجمة حرفية للجملة الصحيحة الكاملة
// ═══════════════════════════════════════
const EE={
l1:[
  {q:"Mary got a bad _______. She didn't study for her test.",o:['score','rain','umbrella','storm'],a:0,en:"didn't study → bad score",ar:'ما ذاكرت = نتيجة سيئة',tr:'مريم حصلت على درجة سيئة. هي ما ذاكرت لاختبارها.'},
  {q:'My teacher _______ that we’ll have a test next week.',o:['thinking about','think about','thinking','thinks'],a:3,en:'teacher (he/she) → thinks',ar:'teacher = هو/هي → thinks',tr:'معلمي يعتقد إنه بيكون عندنا اختبار الأسبوع الجاي.'},
  {q:'It was hot yesterday. It _______ cold last night.',o:['think','got','cloud','sunny'],a:1,en:'got + adjective = became',ar:'got cold = صار باردًا',tr:'كان الجو حار أمس. صار بارد الليلة الماضية.'},
  {q:'Frank _______ the weather in San Antonio was nice.',o:['thinks about','thought that','thought about','thinking that'],a:1,en:'thought that + full clause',ar:'thought that + جملة كاملة بالماضي',tr:'فرانك اعتقد إن الطقس بسان أنطونيو كان لطيف.'},
  {q:"It's summer. The sun is shining. It isn't raining.",o:["It's wet.","It's snowing.","It's hot and dry.","It's a storm."],a:2,en:'summer = hot and dry',ar:'الصيف = حار وجاف',tr:'الصيف. الشمس مشرقة. ما فيه مطر. الجو حار وجاف.'},
  {q:'I had ten pages of homework last night. I _______ tired.',o:['get','got','gets','getting'],a:1,en:'got + adjective = became',ar:'got tired = صار تعبان',tr:'كان عندي عشر صفحات واجب الليلة الماضية. صرت تعبان.'},
  {q:'How _______ your class today?',o:['be','were','are','was'],a:3,en:'class (singular) → was',ar:'class مفرد → was',tr:'كيف كان صفك اليوم؟'},
  {q:"The sun is shining. It's _______ outside.",o:['cloudy','sunny','rainy','windy'],a:1,en:'sun shining = sunny',ar:'الشمس تشرق = sunny',tr:'الشمس مشرقة. الجو مشمس بره.'},
  {q:'It rained last night.',o:['It was a snow storm.','It was a wind storm.','It was a shower.','It was sunny.'],a:2,en:'light rain = a shower',ar:'مطر خفيف = shower',tr:'أمطرت الليلة الماضية. كانت زخة مطر خفيفة.'},
  {q:"Pat's not happy about her test score.",o:['She wants to take the test tomorrow.','She thinks her grade is very good.','She wants to take her test today.','She thinks her grade is very bad.'],a:3,en:'not happy about score → thinks grade is bad',ar:'مو مبسوطة من النتيجة = تعتقد الدرجة سيئة',tr:'بات مو مبسوطة من نتيجة اختبارها. هي تعتقد إن درجتها سيئة جدًا.'},
  {q:"I didn't wear my sweater today. I'm _______ cold.",o:['getting','gets','got','get'],a:0,en:"I'm + getting + adjective = becoming",ar:"I'm getting cold = صرت أحس بالبرد",tr:'ما لبست الكنزة اليوم. صرت أحس بالبرد.'},
  {q:'Snow is wet and _______.',o:['dry','cold','clear','change'],a:1,en:'snow = wet and cold',ar:'الثلج = مبلل وبارد',tr:'الثلج مبلل وبارد.'},
  {q:'Every day I _______ my family.',o:['thinking about','thinks about','think about','think'],a:2,en:'think about + noun (I = present, no s)',ar:'think about + اسم (بدون جملة كاملة)',tr:'كل يوم أفكر بعائلتي.'},
  {q:'Where can you buy a car?',o:['In the afternoon.','In Houston.','In class.','In a minute.'],a:1,en:'where → place answer',ar:'سؤال بـ where جوابه مكان',tr:'وين تقدر تشتري سيارة؟ في هيوستن.'},
  {q:"Don't get wet. Take your _______ with you.",o:['umbrella','shoes','homework','dictionary'],a:0,en:"don't get wet → take umbrella",ar:'عشان ما تتبلل تاخذ umbrella',tr:'لا تتبلل. خذ مظلتك معك.'},
  {q:'I was walking in the rain.',o:['I got hot.','My clothes got dry.','My clothes got wet.',"I'm warm and dry."],a:2,en:'walking in the rain → clothes got wet',ar:'مشى بالمطر = ملابسه صارت مبللة',tr:'كنت أمشي بالمطر. ملابسي صارت مبللة.'},
  {q:'_______ do you think the football game starts?',o:['Where','When','What','Who'],a:1,en:'asking about start time = When',ar:'يسأل عن وقت البداية = When',tr:'متى تعتقد بتبدأ مباراة كرة القدم؟'},
  {q:"Bruce doesn't want to be a civilian.",o:["He thinks he'll be a sailor.","He thinks he'll be a teacher.","He's thinking about going to Spain.","He's thinking about being a civilian."],a:0,en:'not civilian + wants Navy → sailor',ar:'مو مدني وناوي يدخل البحرية = بحّار',tr:'بروس ما يبي يكون مدني. هو يعتقد بيصير بحّار.'},
]
};

// ═══════════════════════════════════════
// ROUTING MANIFEST — home + lesson screen only for now
// ═══════════════════════════════════════
const SCREENS=['home','lscreen'];
const SCREEN_NAMES={home:'الرئيسية',lscreen:'درس'};
