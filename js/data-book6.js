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
  l1:{ico:'🌦️',title:"Lesson 1 — How's the Weather?",sub:'الطقس والأحوال الجوية'},
  l2:{ico:'✈️',title:'Lesson 2 — Taking a Trip',sub:'السفر والمطاعم'}
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
],
l2:[
  {e:'blade',a:'سكين',em:'🔪'},
  {e:'boat',a:'قارب',em:'🛥️'},
  {e:'check',a:'فاتورة الحساب',em:'🧾'},
  {e:'helicopter',a:'طائرة هليكوبتر',em:'🚁'},
  {e:'home',a:'البيت / المنزل',em:'🏠'},
  {e:'house',a:'بيت (منزل سكني)',em:'🏡'},
  {e:'jet',a:'طائرة نفاثة',em:'✈️'},
  {e:'train',a:'قطار',em:'🚆'},
  {e:'ship',a:'سفينة',em:'🚢'},
  {e:'vehicle',a:'مركبة',em:'🚗'},
  {e:'menu',a:'قائمة الطعام',em:'📋'},
  {e:'order',a:'طلب (اسم) / يطلب (فعل)',em:'📝'},
  {e:'server',a:'نادل / نادلة (مقدّم الخدمة)',em:'🧑‍🍳'},
  {e:'tip',a:'بقشيش',em:'💵'},
  {e:'waiter',a:'نادل',em:'🧑‍🍽️'},
  {e:'waitress',a:'نادلة',em:'👩‍🍽️'},
  {e:'cry',a:'يبكي',past:'cried',pa:'بكى',em:'😢'},
  {e:'cut',a:'يقطع',past:'cut',pa:'قطع',em:'✂️'},
  {e:'get to',a:'يصل إلى',past:'got to',pa:'وصل إلى',em:'📍'},
  {e:'get in',a:'يركب (سيارة/تاكسي)',past:'got in',pa:'ركب',em:'🚗'},
  {e:'get out (of)',a:'ينزل من (سيارة/تاكسي)',past:'got out (of)',pa:'نزل من',em:'🚕'},
  {e:'get on',a:'يركب (باص/قطار/طائرة)',past:'got on',pa:'ركب',em:'🚌'},
  {e:'get off',a:'ينزل من (باص/قطار/طائرة)',past:'got off',pa:'نزل من',em:'🚌'},
  {e:'leave',a:'يترك / يغادر',past:'left',pa:'ترك / غادر',em:'🚪'},
  {e:'travel',a:'يسافر',em:'🧳'},
  {e:'would like (to)',a:'يحب / يود (أن)',em:'🙏'},
  {e:'anything',a:'أي شي',em:'❓'},
  {e:'awful',a:'فظيع / سيء جدًا',em:'😖'},
  {e:'by',a:'بواسطة (وسيلة نقل)',em:'🚏'},
  {e:'delicious',a:'لذيذ',em:'😋'},
  {e:'else',a:'آخر / غير ذلك',em:'➕'},
  {e:'her',a:'لها / إياها (ضمير مفعول)',em:'👩'},
  {e:'him',a:'له / إياه (ضمير مفعول)',em:'👨'},
  {e:'later',a:'لاحقًا',em:'⏰'},
  {e:'me',a:'لي / إياي (ضمير مفعول)',em:'🙋'},
  {e:'nothing',a:'لا شيء',em:'🚫'},
  {e:'something',a:'شيء ما',em:'❔'},
  {e:'sure',a:'متأكد / أكيد',em:'👍'},
  {e:'them',a:'لهم / إياهم (ضمير مفعول)',em:'👥'},
  {e:'upset',a:'منزعج / مستاء',em:'😟'},
  {e:'us',a:'لنا / إيانا (ضمير مفعول)',em:'🙌'},
  {e:'without',a:'بدون',em:'➖'},
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
],
l2:[
  {
    title:'Asking Questions with How + verb', ar:'السؤال عن وسيلة أو طريقة — How',
    rule:'نسأل عن وسيلة السفر أو طريقة عمل شيء بـ How + فعل مساعد (do/does/did/will) + الفاعل + الفعل الأساسي؟',
    check:{q:'How _______ you get to school yesterday?',o:['do','does','did','will'],a:2,en:'yesterday = past → did',ar:'yesterday = ماضٍ → did'},
    compare:[
      {c1:'How will Bruce get to San Diego?',c2:"He'll go by plane.",ar:'سؤال عن الوسيلة — مستقبل'},
      {c1:'How did you get to work yesterday?',c2:'I got to work by car yesterday.',ar:'سؤال عن الوسيلة — ماضٍ'},
      {c1:'How do you get downtown?',c2:'I take the bus.',ar:'سؤال عام — مضارع'},
    ],
    examples:[
      {s:'How will he get to San Diego?',tr:'كيف بيوصل سان دييغو؟',ar:'How + will + فاعل + فعل',ok:true},
      {s:'How did you get to school today?',tr:'كيف وصلت للمدرسة اليوم؟',ar:'How + did + فاعل + فعل أساسي',ok:true},
      {s:'How you get to work?',wrong:'you get',right:'do you get',tr:'لازم نقلب السؤال: How + do + فاعل + فعل.',ok:false},
    ]
  },
  {
    title:'Making Statements with Would Like (to)', ar:'إثبات مهذّب — Would Like',
    rule:'نستخدم would like بدل want بأسلوب أكثر تهذيبًا: would like + اسم، أو would like to + فعل أساسي.',
    check:{q:'They _______ some coffee.',o:['would like','would liking','likes','would'],a:0,en:'would like + noun',ar:'would like + اسم'},
    compare:[
      {c1:'I want a sandwich.',c2:'I would like a sandwich.',ar:'نفس المعنى — would like أكثر تهذيبًا'},
      {c1:'I want to eat.',c2:'I would like to eat.',ar:'would like to + فعل أساسي'},
      {c1:"She'd like a menu.",c2:"She'd like to order.",ar:"'d like = would like المختصرة"},
    ],
    examples:[
      {s:"I'd like a chicken sandwich.",tr:'أبغى ساندويش دجاج.',ar:"'d like + اسم",ok:true},
      {s:"We'd like to order now.",tr:'نبغى نطلب الحين.',ar:"'d like to + فعل",ok:true},
      {s:'I would like eat now.',wrong:'like eat',right:'like to eat',tr:'لازم نحط to قبل الفعل: would like to eat.',ok:false},
    ]
  },
  {
    title:'Asking Questions with Would Like (to)', ar:'السؤال المهذّب — Would Like',
    rule:'نبدأ السؤال بـ Would + الفاعل + like (to) + الباقي؟ والجواب القصير: Yes, I would. / No, I wouldn’t.',
    check:{q:'_______ you like to go to the movies?',o:['Do','Would','Are','Did'],a:1,en:'polite offer/invitation → Would',ar:'عرض أو دعوة مهذبة → Would'},
    compare:[
      {c1:'Would you like a sports car?',c2:"Sure, I'd like one.",ar:'سؤال بـ would + اسم'},
      {c1:'Would he like tickets to the game?',c2:"Yes, he'd like tickets.",ar:'سؤال عن طرف ثالث'},
      {c1:'Where would you like to go?',c2:"I'd like to go to Canada.",ar:'أداة سؤال + would + فاعل + like to'},
    ],
    examples:[
      {s:'Would you like to go with me?',tr:'تبغى تروح معي؟',ar:'Would + فاعل + like to',ok:true},
      {s:'What would you like to see there?',tr:'وش تبغى تشوف هناك؟',ar:'أداة سؤال + would + فاعل + like to',ok:true},
      {s:'Would you to like go?',wrong:'to like',right:'like to',tr:'الترتيب الصحيح: would + فاعل + like + to + فعل.',ok:false},
    ]
  },
  {
    title:'Using Something, Nothing, Anything, and Else', ar:'something / nothing / anything / else',
    rule:'نستخدم something بالإثبات، anything بالنفي، وsomething أو anything بالسؤال — else تُضاف بعدها للسؤال عن شيء إضافي.',
    check:{q:"I didn't buy _______ at the store.",o:['something','nothing','anything','else'],a:2,en:'negative sentence → anything',ar:'جملة منفية → anything'},
    compare:[
      {c1:"I'd like something to drink.",c2:"I don't want anything to drink.",ar:'إثبات = something / نفي = anything'},
      {c1:'Would you like something else?',c2:'No, nothing else, thank you.',ar:'سؤال = something / جواب منفي = nothing'},
      {c1:'Is there anything wrong?',c2:"No, nothing's wrong.",ar:'سؤال = anything / جواب منفي = nothing'},
    ],
    examples:[
      {s:"I didn't eat anything for lunch.",tr:'ما أكلت شي للغدا.',ar:'نفي = anything',ok:true},
      {s:'Would you like something else?',tr:'تبغى شي ثاني؟',ar:'سؤال مهذّب = something',ok:true},
      {s:"I didn't buy something.",wrong:'something',right:'anything',tr:'بالنفي نستخدم anything مو something.',ok:false},
    ]
  },
  {
    title:'Using Object Pronouns', ar:'ضمائر المفعول',
    rule:'ضمائر المفعول تجي بعد الفعل أو بعد حرف الجر: I→me, you→you, he→him, she→her, it→it, we→us, they→them.',
    check:{q:'Bruce talked to _______.',o:['she','her','hers','he'],a:1,en:'after a preposition → object pronoun her',ar:'بعد حرف الجر → ضمير مفعول her'},
    compare:[
      {c1:'Sara and Bruce were talking.',c2:'She said to Sara, "Be sure to call me."',ar:'me = ضمير المفعول لـ I'},
      {c1:'The server sees Bruce and Sara.',c2:'The server sees us.',ar:'us = ضمير المفعول لـ we'},
      {c1:'The server talked to Bruce and Sara.',c2:'She talked to them.',ar:'them = ضمير المفعول لـ they'},
    ],
    examples:[
      {s:'Bruce talked to her.',tr:'بروس تكلم معها.',ar:'her = ضمير مفعول لـ she',ok:true},
      {s:'Please help us.',tr:'الرجاء ساعدنا.',ar:'us = ضمير مفعول لـ we',ok:true},
      {s:'Bruce talked to she.',wrong:'she',right:'her',tr:'بعد حرف الجر لازم نستخدم ضمير المفعول: her.',ok:false},
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
],
l2:[
  {words:['Bruce','is','going','in','the','Navy'],ans:'Bruce is going in the Navy.',tr:'بروس ملتحق بالبحرية.',ar:'مضارع مستمر يعبّر عن خطة مستقبلية'},
  {words:["He'll",'go','to','San','Diego','by','plane'],ans:"He'll go to San Diego by plane.",tr:'بيروح لسان دييغو بالطائرة.',ar:'will + by + وسيلة النقل'},
  {words:['I','would','like','a','chicken','sandwich'],ans:'I would like a chicken sandwich.',tr:'أبغى ساندويش دجاج.',ar:'would like + اسم'},
  {words:['We','would','like','to','order','now'],ans:'We would like to order now.',tr:'نبغى نطلب الحين.',ar:'would like to + فعل'},
  {words:['Would','you','like','something','to','drink','?'],ans:'Would you like something to drink ?',tr:'تبغى شي تشربه؟',ar:'سؤال would + like + something'},
  {words:['I',"didn't",'eat','anything','for','lunch'],ans:"I didn't eat anything for lunch.",tr:'ما أكلت شي للغدا.',ar:'نفي = anything'},
  {words:['Bruce','talked','to','her'],ans:'Bruce talked to her.',tr:'بروس تكلم معها.',ar:'ضمير المفعول بعد حرف جر'},
  {words:['The','server','brought','us','the','check'],ans:'The server brought us the check.',tr:'النادل جابلنا الفاتورة.',ar:'us = ضمير مفعول لـ we'},
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
],
l2:[
  {q:'I live in San Antonio. My _______ is here.',o:['boat','jet','home'],a:2,en:'context: residing → home',ar:'يسكن بسان أنطونيو → بيته هنا',tr:'أسكن بسان أنطونيو. بيتي هنا.'},
  {q:'My brother is a pilot. He flies a _______.',o:['boat','helicopter','vehicle'],a:1,en:'pilot flies a helicopter',ar:'الطيار يطير بمروحية',tr:'أخوي طيار. هو يطير بمروحية.'},
  {q:'A _______ is an airplane.',o:['jet','helicopter','vehicle'],a:0,en:'a jet is a type of airplane',ar:'الجت نوع من الطائرات',tr:'الجت هو نوع من الطائرات.'},
  {q:'A knife has a handle and a _______.',o:['boat','blade','check'],a:1,en:'knife parts: handle + blade',ar:'أجزاء السكين: مقبض ونصل',tr:'السكين له مقبض ونصل.'},
  {q:'I live in that _______ over there. Where do you live?',o:['house','jet','vehicle'],a:0,en:'a place to live = house',ar:'مكان للسكن = house',tr:'أسكن بذاك البيت هناك. وين تسكن انت؟'},
  {q:'A big boat is a _______.',o:['helicopter','home','ship'],a:2,en:'big boat = ship',ar:'القارب الكبير = ship',tr:'القارب الكبير يسمى سفينة.'},
  {q:'A _______ takes our order in a restaurant.',o:['waiter','cook','clerk'],a:0,en:'takes your order in a restaurant = waiter',ar:'ياخذ الطلب بالمطعم = waiter',tr:'النادل ياخذ طلبنا بالمطعم.'},
  {q:'Jan: Do you want sugar in your coffee? Linda: No thanks, I like it _______ sugar.',o:['sure','without','with'],a:1,en:'declining sugar → without',ar:'يرفض السكر → without',tr:'جان: تبين سكر بقهوتك؟ ليندا: لا شكرًا، أحبها بدون سكر.'},
  {q:'Tom: Are you _______ they were there last night? Ted: Yes. I saw them there.',o:['sure','awful','later'],a:0,en:'confirming certainty → sure',ar:'يتأكد من شي → sure',tr:'توم: متأكد إنهم كانوا هناك البارحة؟ تيد: أيوه، شفتهم هناك.'},
  {q:"The show didn't start at 7:00. It started _______.",o:['sure','awful','later'],a:2,en:'started after 7:00 → later',ar:'بدأ بعد الساعة 7 → later',tr:'العرض ما بدأ الساعة 7. بدأ متأخر.'},
  {q:'Our waiter brought us the _______ after our meal.',o:['tip','order','check'],a:2,en:'bill after the meal = check',ar:'الفاتورة بعد الأكل = check',tr:'النادل جابلنا الفاتورة بعد الأكل.'},
  {q:'Use your knife to _______ your meat.',o:['leave','cut','get'],a:1,en:'knife is used to cut',ar:'السكين تُستخدم للقطع',tr:'استخدم سكينك عشان تقطع لحمك.'},
]
};

// ═══════════════════════════════════════
// ROUTING MANIFEST — home + lesson screen only for now
// ═══════════════════════════════════════
const SCREENS=['home','lscreen'];
const SCREEN_NAMES={home:'الرئيسية',lscreen:'درس'};
