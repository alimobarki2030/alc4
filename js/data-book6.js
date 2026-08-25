// ═══════════════════════════════════════
// DATA — BOOK 6
// All 4 lessons are complete (vocab, grammar, word-order, per-lesson quiz).
// No final exam / review / listening / spelling sections yet — those get
// added once their source material exists (see Book 4/5 for the pattern).
// ═══════════════════════════════════════
const BOOK_ID='book6';

const LESSON_META={
  l1:{ico:'🌦️',title:"Lesson 1 — How's the Weather?",sub:'كيف حال الطقس؟ · الطقس وصياغة الأسئلة'},
  l2:{ico:'✈️',title:'Lesson 2 — Taking a Trip',sub:'القيام برحلة · السفر والمطاعم'},
  l3:{ico:'📮',title:'Lesson 3 — Sending Mail',sub:'إرسال البريد · البريد والبنك'},
  l4:{ico:'🏕️',title:"Lesson 4 — Let's Take a Vacation",sub:'لنأخذ إجازة · الإجازات والأسئلة (Why…Because)'}
};
const LESSON_KEYS=Object.keys(LESSON_META);

// ═══════════════════════════════════════
// VOCABULARY
// ═══════════════════════════════════════
const VOCAB={
l1:[
  {e:'weather',a:'الطقس',alt:['الجو'],em:'🌡️'},
  {e:'sky',a:'السماء',em:'🌤️'},
  {e:'sun',a:'الشمس',em:'☀️'},
  {e:'sunshine',a:'أشعة الشمس',em:'🌞'},
  {e:'cloud',a:'غيمة',alt:['سحابة'],em:'☁️'},
  {e:'rain',a:'مطر',em:'🌧️'},
  {e:'shower',a:'زخة مطر خفيفة',em:'🌦️'},
  {e:'storm',a:'عاصفة',em:'⛈️'},
  {e:'snow',a:'ثلج',em:'❄️'},
  {e:'wind',a:'الرياح',em:'💨'},
  {e:'umbrella',a:'مظلة',alt:['شمسية'],em:'☂️'},
  {e:'raincoat',a:'معطف المطر',em:'🧥'},
  {e:'change',a:'تغيّر',alt:['يغيّر','يبدّل','تبديل','تغيير'],em:'🔄'},
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
  {e:'windy',a:'كثير الرياح',em:'🌬️'},
  {e:'get',a:'يصبح / يصير',alt:['يحصل','يحصل على'],past:'got',pa:'صار / أصبح',em:'🔀'},
  {e:'rain (verb)',a:'تُمطر',past:'rained',pa:'أمطرت',em:'🌧️'},
  {e:'shine',a:'يلمع / يشرق',past:'shone',pa:'أشرق',em:'✨'},
  {e:'snow (verb)',a:'تُثلج',past:'snowed',pa:'أثلجت',em:'❄️'},
  {e:'think (about)',a:'يعتقد / يفكّر (في)',past:'thought',pa:'اعتقد / فكّر',em:'🤔'},
  {e:'how',a:'كيف',em:'❓'},
],
l2:[
  {e:'blade',a:'نصل',alt:['شفرة'],em:'🔪'},
  {e:'boat',a:'قارب',alt:['مركب','زورق'],em:'🛥️'},
  {e:'check',a:'فاتورة الحساب',em:'🧾'},
  {e:'helicopter',a:'طائرة هليكوبتر',em:'🚁'},
  {e:'home',a:'البيت / المنزل',em:'🏠'},
  {e:'house',a:'بيت (منزل سكني)',em:'🏡'},
  {e:'jet',a:'طائرة نفاثة',em:'✈️'},
  {e:'train',a:'قطار',em:'🚆'},
  {e:'ship',a:'سفينة',em:'🚢'},
  {e:'vehicle',a:'مركبة',alt:['عربة','سيارة'],em:'🚗'},
  {e:'menu',a:'قائمة الطعام',em:'📋'},
  {e:'order',a:'طلب (اسم) / يطلب (فعل)',em:'📝'},
  {e:'server',a:'نادل / نادلة (مقدّم الخدمة)',em:'🧑‍🍳'},
  {e:'tip',a:'بقشيش',alt:['بخشيش','إكرامية'],em:'💵'},
  {e:'waiter',a:'نادل',em:'🧑‍🍽️'},
  {e:'waitress',a:'نادلة',em:'👩‍🍽️'},
  {e:'cry',a:'يبكي',past:'cried',pa:'بكى',em:'😢'},
  {e:'cut',a:'يقطع',alt:['قطع','يقصّ'],past:'cut',pa:'قطع',em:'✂️'},
  {e:'get to',a:'يصل إلى',past:'got to',pa:'وصل إلى',em:'📍'},
  {e:'get in',a:'يركب (سيارة/تاكسي)',past:'got in',pa:'ركب',em:'🚗'},
  {e:'get out (of)',a:'ينزل من (سيارة/تاكسي)',past:'got out (of)',pa:'نزل من',em:'🚕'},
  {e:'get on',a:'يركب (باص/قطار/طائرة)',past:'got on',pa:'ركب',em:'🚌'},
  {e:'get off',a:'ينزل من (باص/قطار/طائرة)',past:'got off',pa:'نزل من',em:'🚌'},
  {e:'leave',a:'يترك / يغادر',past:'left',pa:'ترك / غادر',em:'🚪'},
  {e:'travel',a:'يسافر',alt:['سفر','يرتحل'],em:'🧳'},
  {e:'would like (to)',a:'يحب / يود (أن)',em:'🙏'},
  {e:'anything',a:'أي شي',alt:['أي شيء'],em:'❓'},
  {e:'awful',a:'فظيع / سيء جدًا',em:'😖'},
  {e:'by',a:'بواسطة (وسيلة نقل)',em:'🚏'},
  {e:'delicious',a:'لذيذ',alt:['شهي','لذيذة'],em:'😋'},
  {e:'else',a:'آخر / غير ذلك',em:'➕'},
  {e:'her',a:'لها / إياها (ضمير مفعول)',em:'👩'},
  {e:'him',a:'له / إياه (ضمير مفعول)',em:'👨'},
  {e:'later',a:'لاحقًا',em:'⏰'},
  {e:'me',a:'لي / إياي (ضمير مفعول)',em:'🙋'},
  {e:'nothing',a:'لا شيء',em:'🚫'},
  {e:'something',a:'شيء ما',alt:['شيء'],em:'❔'},
  {e:'sure',a:'متأكد / أكيد',em:'👍'},
  {e:'them',a:'لهم / إياهم (ضمير مفعول)',em:'👥'},
  {e:'upset',a:'منزعج / مستاء',alt:['غاضب','حزين'],em:'😟'},
  {e:'us',a:'لنا / إيانا (ضمير مفعول)',em:'🙌'},
  {e:'without',a:'بدون',alt:['من دون','بلا'],em:'➖'},
],
l3:[
  {e:'address',a:'عنوان',em:'🏠'},
  {e:'bank',a:'بنك',em:'🏦'},
  {e:'check',a:'شيك',em:'🧾'},
  {e:"driver's license",a:'رخصة القيادة',em:'🪪'},
  {e:'envelope',a:'ظرف (رسالة)',em:'✉️'},
  {e:'identification',a:'بطاقة هوية',em:'🪪'},
  {e:'letter',a:'رسالة',alt:['خطاب'],em:'💌'},
  {e:'letter carrier',a:'ساعي البريد',em:'📬'},
  {e:'mail',a:'بريد',em:'📮'},
  {e:'mailman / mailmen',a:'ساعي بريد / سعاة بريد',em:'👨‍✉️'},
  {e:'money order',a:'حوالة مالية',em:'💸'},
  {e:'package',a:'طرد',alt:['حزمة','رزمة'],em:'📦'},
  {e:'postcard',a:'بطاقة بريدية',em:'🖼️'},
  {e:'post office',a:'مكتب البريد',em:'🏤'},
  {e:'return address',a:'عنوان المرسل',em:'↩️'},
  {e:'stamp',a:'طابع بريد',em:'🏷️'},
  {e:'street',a:'شارع',alt:['طريق'],em:'🛣️'},
  {e:'teller',a:'صراف (بنك)',em:'🧑‍💼'},
  {e:"traveler's check",a:'شيك سياحي',em:'🧳'},
  {e:'deliver',a:'يوصّل',alt:['يسلّم','يوزّع','توصيل'],em:'🚚'},
  {e:'finish',a:'يخلّص / ينهي',alt:['ينتهي','إنهاء','ينجز'],em:'✅'},
  {e:'give',a:'يعطي',alt:['يمنح','إعطاء'],past:'gave',pa:'أعطى',em:'🎁'},
  {e:'mail (verb)',a:'يبعث بالبريد',alt:['يرسل','يرسل بالبريد','يبعث'],em:'📤'},
  {e:'pick out',a:'يختار',alt:['ينتقي','اختيار','يصطفي'],em:'👉'},
  {e:'send',a:'يرسل',alt:['يبعث','إرسال'],past:'sent',pa:'أرسل',em:'📨'},
  {e:'show',a:'يري / يوضّح',alt:['يعرض','عرض','يُظهر','يشاهد'],em:'👀'},
  {e:'sign',a:'يوقّع',alt:['توقيع','يوقع'],em:'✍️'},
  {e:'also',a:'أيضًا',alt:['كمان'],em:'➕'},
  {e:'crowded',a:'مزدحم',alt:['مكتظ','مزحوم'],em:'👥'},
  {e:'near',a:'قريب من',alt:['قريب','بجانب','بالقرب'],em:'📍'},
],
l4:[
  {e:'camera',a:'كاميرا',em:'📷'},
  {e:'film',a:'فيلم (شريط تصوير)',em:'🎞️'},
  {e:'hotel',a:'فندق',em:'🏨'},
  {e:'lake',a:'بحيرة',em:'🏞️'},
  {e:'mountain',a:'جبل',em:'⛰️'},
  {e:'ocean',a:'محيط',em:'🌊'},
  {e:'river',a:'نهر',em:'🏞️'},
  {e:'desert',a:'صحراء',em:'🏜️'},
  {e:'waterfall',a:'شلال',em:'💦'},
  {e:'stream',a:'جدول ماء',em:'💧'},
  {e:'tent',a:'خيمة',em:'⛺'},
  {e:'rest',a:'راحة',alt:['استراحة','يرتاح'],em:'😌'},
  {e:'roll (of)',a:'لفة / بكرة (من)',em:'🎞️'},
  {e:'sight',a:'معلم سياحي / منظر',em:'👁️'},
  {e:'sightseeing',a:'التجوّل السياحي',em:'🗺️'},
  {e:'state',a:'ولاية',em:'🏛️'},
  {e:'tree',a:'شجرة',em:'🌳'},
  {e:'vacation',a:'إجازة',alt:['عطلة'],em:'🏖️'},
  {e:'check in',a:'يسجّل الوصول (فندق)',em:'📝'},
  {e:'check out',a:'يسجّل المغادرة (فندق)',em:'🧳'},
  {e:'load',a:'يحمّل (الكاميرا بالفيلم)',em:'🔄'},
  {e:'relax',a:'يسترخي',alt:['يرتاح','يستريح'],em:'😌'},
  {e:'smile',a:'يبتسم',em:'😊'},
  {e:'stay',a:'يقيم / يبقى',alt:['يمكث','إقامة'],em:'🏨'},
  {e:'because',a:'لأن',alt:['بسبب','لأنّ'],em:'🔗'},
  {e:'but',a:'لكن',alt:['ولكن','بل'],em:'↔️'},
  {e:'final',a:'أخير / نهائي',em:'🏁'},
  {e:'for (time)',a:'لمدة',em:'⏱️'},
  {e:'long (trip/time)',a:'طويل (رحلة/وقت)',em:'📏'},
  {e:'overnight',a:'لليلة واحدة / طوال الليل',em:'🌙'},
  {e:'short (trip/time)',a:'قصير (رحلة/وقت)',em:'📏'},
  {e:'why',a:'لماذا',em:'❓'},
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
      {s:'How the weather is?',wrong:'the weather is',right:'is the weather',tr:'لازم نقلب السؤال: How + is + الفاعل، وليس الترتيب العادي.',ok:false},
    ]
  },
  {
    title:'That + Noun Clause (think)', ar:'جملة كاملة بعد think — أعتقد أنّ',
    rule:'نستخدم think/thinks بالحاضر وthought بالماضي + (that) + جملة كاملة — كلمة that اختيارية ونقدر نحذفها.',
    parts:[{"t":"think / thinks","d":"للحاضر (thinks مع he/she/it) + (that) + جملة. كلمة that اختيارية. مثال: I think that it is good."},{"t":"thought","d":"للماضي + (that) + جملة. مثال: I thought that it was cold."}],
    check:{q:'Bruce _______ the fruit in California is very good.',o:['think','thinks','thought','thinking'],a:1,en:'Bruce = he → thinks',ar:'Bruce = هو → thinks'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'think / thinks / thought',c:'v'},{t:'(that)',c:'k'},{t:'+',c:'p'},{t:'sentence',c:'s'}],
    compare:[
      {c1:'I think this is a good class.',c2:'I think that this is a good class.',ar:'that اختيارية، الجملتين صح'},
      {c1:'"It’s warm inside," Mary said.',c2:"Mary thinks it's warm inside.",ar:'نحوّل كلام مباشر لجملة بـ think'},
      {c1:'"It was cold in New York," said Dick.',c2:'Dick thought it was cold in New York.',ar:'الماضي: thought'},
    ],
    examples:[
      {s:'I think California is a good place to live.',tr:'أعتقد أن كاليفورنيا مكان جميل للعيش.',ar:'think + جملة كاملة',ok:true},
      {s:"Sgt Jackson thought the food wasn't very good.",tr:'الرقيب جاكسون اعتقد أن الأكل ما كان جيداً.',ar:'thought للماضي',ok:true},
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
      {s:'Where does Bob think he can buy a car?',tr:'أين يعتقد بوب أنه يقدر يشتري سيارة؟',ar:'Where + does + فاعل + think',ok:true},
      {s:'What does Tom think about the food?',tr:'ما رأي توم بالأكل؟',ar:'What + does + think about',ok:true},
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
      {s:'How will he get to San Diego?',tr:'كيف سيصل إلى سان دييغو؟',ar:'How + will + فاعل + فعل',ok:true},
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
      {s:"I'd like a chicken sandwich.",tr:'أريد ساندويش دجاج.',ar:"'d like + اسم",ok:true},
      {s:"We'd like to order now.",tr:'نريد أن نطلب الآن.',ar:"'d like to + فعل",ok:true},
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
      {s:'Would you like to go with me?',tr:'تريد أن تذهب معي؟',ar:'Would + فاعل + like to',ok:true},
      {s:'What would you like to see there?',tr:'ماذا تريد أن ترى هناك؟',ar:'أداة سؤال + would + فاعل + like to',ok:true},
      {s:'Would you to like go?',wrong:'to like',right:'like to',tr:'الترتيب الصحيح: would + فاعل + like + to + فعل.',ok:false},
    ]
  },
  {
    title:'Using Something, Nothing, Anything, and Else', ar:'something / nothing / anything / else',
    rule:'نستخدم something بالإثبات، anything بالنفي، وsomething أو anything بالسؤال — else تُضاف بعدها للسؤال عن شيء إضافي.',
    parts:[{"t":"something","d":"في الإثبات. مثال: I want something."},{"t":"anything","d":"في النفي. مثال: I don't want anything."},{"t":"else","d":"تُضاف بعدها للسؤال عن شيء إضافي. مثال: Anything else? = شيء آخر؟"}],
    check:{q:"I didn't buy _______ at the store.",o:['something','nothing','anything','else'],a:2,en:'negative sentence → anything',ar:'جملة منفية → anything'},
    compare:[
      {c1:"I'd like something to drink.",c2:"I don't want anything to drink.",ar:'إثبات = something / نفي = anything'},
      {c1:'Would you like something else?',c2:'No, nothing else, thank you.',ar:'سؤال = something / جواب منفي = nothing'},
      {c1:'Is there anything wrong?',c2:"No, nothing's wrong.",ar:'سؤال = anything / جواب منفي = nothing'},
    ],
    examples:[
      {s:"I didn't eat anything for lunch.",tr:'ما أكلت شيئاً للغداء.',ar:'نفي = anything',ok:true},
      {s:'Would you like something else?',tr:'تريد شيئاً آخر؟',ar:'سؤال مهذّب = something',ok:true},
      {s:"I didn't buy something.",wrong:'something',right:'anything',tr:'بالنفي نستخدم anything وليس something.',ok:false},
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
],
l3:[
  {
    title:'Making Sentences with an Indirect Object', ar:'المفعول غير المباشر',
    rule:'نقدر نصيغ الجملة بطريقتين بنفس المعنى: فعل + شيء + to/for + شخص، أو فعل + شخص (مباشرة بدون to/for) + شيء.',
    check:{q:'Sara mailed _______ a package.',o:['to Bruce','Bruce','for Bruce','Bruce to'],a:1,en:'indirect object comes right after the verb, no preposition',ar:'المفعول غير المباشر يجي مباشرة بعد الفعل بدون حرف جر',tr:'سارة أرسلت لبروس طرداً.'},
    compare:[
      {c1:'Sara will send a package to him.',c2:'Sara will send him a package.',ar:'نفس المعنى — نبدّل الترتيب ونشيل to'},
      {c1:'Bruce mailed a postcard to her.',c2:'Bruce mailed her a postcard.',ar:'her تجي مباشرة بعد الفعل'},
      {c1:'The dentist gives toothbrushes to the children.',c2:'The dentist gives the children toothbrushes.',ar:'gives + شخص + شيء'},
    ],
    examples:[
      {s:'Mrs. Swenson sent Bruce some money.',tr:'السيدة سوينسون أرسلت لبروس بعض المال.',ar:'sent + شخص + شيء (بدون to)',ok:true},
      {s:'The mailman will leave you some letters.',tr:'ساعي البريد سيترك لك بعض الرسائل.',ar:'will leave + شخص + شيء',ok:true},
      {s:'Sara mailed to Bruce a package.',wrong:'to Bruce a package',right:'Bruce a package',tr:'لما نحذف to لازم نحط الشخص مباشرة بعد الفعل: mailed Bruce a package.',ok:false},
    ]
  },
  {
    title:'Using Also', ar:'أيضًا — also',
    rule:'also (بمعنى too) تدل أن فعلًا أو صفة تنطبق على شخص أو شيء آخر أيضًا — تأتي بعد BE/can/does، أو قبل الفعل الأساسي.',
    check:{q:'Bruce is in the Navy. Kelly _______ in the Navy.',o:['also is','is also','also','is'],a:1,en:'also comes right after BE',ar:'also تجي بعد BE مباشرة',tr:'بروس في البحرية. كيلي أيضاً في البحرية.'},
    compare:[
      {c1:'Sara chose a CD player for Bruce.',c2:'She also made him some cookies.',ar:'also قبل الفعل الأساسي'},
      {c1:"She'll go to the bank.",c2:"She'll also go to the post office.",ar:'also بعد will'},
      {c1:'Bruce is in the Navy.',c2:'Kelly is also in the Navy.',ar:'also بعد is'},
    ],
    examples:[
      {s:'A letter carrier also delivers packages.',tr:'ساعي البريد أيضاً يوصّل الطرود.',ar:'also قبل الفعل الأساسي',ok:true},
      {s:'A military ID card is also identification.',tr:'بطاقة الهوية العسكرية هي أيضاً بطاقة تعريف.',ar:'also بعد is',ok:true},
      {s:'She also is tired.',wrong:'also is',right:'is also',tr:'also تجي بعد BE مباشرة: is also.',ok:false},
    ]
  }
],
l4:[
  {
    title:'Combining Sentences with And/But', ar:'دمج الجمل — and/but',
    rule:'نستخدم and لربط جملتين متشابهتين بالمعنى (إضافة)، وbut لربط جملتين بمعنى متعاكس (تناقض).',
    parts:[{"t":"and","d":"لربط جملتين متشابهتين بالمعنى (إضافة). مثال: I like tea and coffee."},{"t":"but","d":"لربط جملتين بمعنى متعاكس (تناقض). مثال: I like tea but not coffee."}],
    check:{q:"John speaks Spanish, _______ he doesn't speak French.",o:['and','but'],a:1,en:'opposite ideas → but',ar:'فكرتان متعاكستان → but',tr:'جون يتكلم إسباني، لكن ما يتكلم فرنسي.'},
    compare:[
      {c1:'My vacation is next month.',c2:'My vacation is next month, and I want to travel.',ar:'and لإضافة فكرة مشابهة'},
      {c1:"I didn't at first.",c2:"I like the Navy now, but I didn't at first.",ar:'but لعكس الفكرة'},
      {c1:'Jan signed her letter.',c2:'Jan signed her letter, and then she put it in an envelope.',ar:'and لتتابع الأحداث'},
    ],
    examples:[
      {s:"Meg drinks coffee at breakfast, but she doesn't drink it at lunch.",tr:'ميغ تشرب قهوة بالفطور، لكن ما تشربها بالغداء.',ar:'but = تناقض',ok:true},
      {s:'Their teacher asked a question, and all the students answered.',tr:'معلمهم سأل سؤالاً، والطلاب كلهم أجابوا.',ar:'and = إضافة / تتابع',ok:true},
      {s:'Ted reads a lot of books, and his brother never reads any.',wrong:'and',right:'but',tr:'تيد يقرأ كتباً كثيرة، لكن أخوه ما يقرأ ولا كتاب — تناقض فلازم but.',ok:false},
    ]
  },
  {
    title:'Answering Why Questions with Because', ar:'الإجابة على أسئلة Why بـ Because',
    rule:'نسأل بـ Why...؟ ونجاوب بـ Because + جملة كاملة توضح السبب.',
    check:{q:'Why did your brother travel to Hawaii?',o:['Because he likes the ocean.','He likes the ocean.','Why he likes the ocean.','Because likes the ocean.'],a:0,en:'answer starts with Because + full clause',ar:'الجواب يبدأ بـ Because + جملة كاملة',tr:'لماذا سافر أخوك إلى هاواي؟ لأنه يحب المحيط.'},
    compare:[
      {c1:'Why are you smiling?',c2:"Because I'm happy.",ar:'سؤال why + جواب because'},
      {c1:'Why is Tom upset?',c2:'Because his test grade was bad.',ar:'يوضح السبب بجملة كاملة'},
      {c1:'Why did you go to California?',c2:'Because my family lives there.',ar:'because + سبب'},
    ],
    examples:[
      {s:"Because it's hot and sunny.",tr:'لأن الجو حار ومشمس.',ar:'جواب Why بجملة سبب',ok:true},
      {s:'Because he studied.',tr:'لأنه ذاكر.',ar:'because + سبب',ok:true},
      {s:'Why I like the ocean.',wrong:'Why I like',right:'Because I like',tr:'الجواب لازم يبدأ بـ Because وليس Why.',ok:false},
    ]
  }
]
};

// ═══════════════════════════════════════
// WORD ORDER (رتّب الجملة)
// ═══════════════════════════════════════
const WO={
l1:[
  {words:['I','think','California','is','a','good','place','to','live'],ans:'I think California is a good place to live.',tr:'أعتقد أن كاليفورنيا مكان جميل للعيش.',ar:'think + جملة كاملة'},
  {words:['Paul','thinks','the','change','in','weather','is','good'],ans:'Paul thinks the change in weather is good.',tr:'بول يعتقد أن تغيّر الطقس شيء جيد.',ar:'thinks مع he'},
  {words:['Bruce','thought','it','was','cold','in','New','York'],ans:'Bruce thought it was cold in New York.',tr:'بروس اعتقد أن الجو كان بارداً بنيويورك.',ar:'thought للماضي'},
  {words:['How','was','the','weather','in','California','?'],ans:'How was the weather in California ?',tr:'كيف كان الطقس بكاليفورنيا؟',ar:'How + was للسؤال بالماضي'},
  {words:['It','was','raining','and','the','street','was','wet'],ans:'It was raining and the street was wet.',tr:'كانت الدنيا تمطر والشارع كان مبلل.',ar:'وصف حالة ماضية'},
  {words:['Sara','took','her','umbrella','and','walked','to','school'],ans:'Sara took her umbrella and walked to school.',tr:'سارة أخذت مظلتها ومشت للمدرسة.',ar:'فعلين بالماضي متتاليين'},
  {words:['Bruce','wants','to','join','the','Navy'],ans:'Bruce wants to join the Navy.',tr:'بروس يريد أن ينضم للبحرية.',ar:'want to + فعل'},
  {words:['I','think',"I'll",'fly','with','Bluesky','Airlines','again'],ans:"I think I'll fly with Bluesky Airlines again.",tr:'أعتقد أنني سأطير مع بلوسكاي إيرلاينز مرة ثانية.',ar:"think + I'll (مستقبل)"},
],
l2:[
  {words:['Bruce','is','going','in','the','Navy'],ans:'Bruce is going in the Navy.',tr:'بروس ملتحق بالبحرية.',ar:'مضارع مستمر يعبّر عن خطة مستقبلية'},
  {words:["He'll",'go','to','San','Diego','by','plane'],ans:"He'll go to San Diego by plane.",tr:'سيذهب إلى سان دييغو بالطائرة.',ar:'will + by + وسيلة النقل'},
  {words:['I','would','like','a','chicken','sandwich'],ans:'I would like a chicken sandwich.',tr:'أريد ساندويش دجاج.',ar:'would like + اسم'},
  {words:['We','would','like','to','order','now'],ans:'We would like to order now.',tr:'نريد أن نطلب الآن.',ar:'would like to + فعل'},
  {words:['Would','you','like','something','to','drink','?'],ans:'Would you like something to drink ?',tr:'تريد شيئاً تشربه؟',ar:'سؤال would + like + something'},
  {words:['I',"didn't",'eat','anything','for','lunch'],ans:"I didn't eat anything for lunch.",tr:'ما أكلت شيئاً للغداء.',ar:'نفي = anything'},
  {words:['Bruce','talked','to','her'],ans:'Bruce talked to her.',tr:'بروس تكلم معها.',ar:'ضمير المفعول بعد حرف جر'},
  {words:['The','server','brought','us','the','check'],ans:'The server brought us the check.',tr:'النادل أحضر لنا الفاتورة.',ar:'us = ضمير مفعول لـ we'},
],
l3:[
  {words:['Sara','will','send','him','a','package'],ans:'Sara will send him a package.',tr:'سارة سترسل له طرداً.',ar:'will send + شخص + شيء'},
  {words:['Bruce','mailed','her','a','postcard'],ans:'Bruce mailed her a postcard.',tr:'بروس أرسل لها بطاقة بريدية.',ar:'mailed + شخص + شيء'},
  {words:['I','need','to','cash','a','check'],ans:'I need to cash a check.',tr:'أحتاج أصرف شيك.',ar:'cash a check تعبير مفيد'},
  {words:['You','need','some','identification'],ans:'You need some identification.',tr:'تحتاج بطاقة هوية.',ar:'need + مفعول'},
  {words:['The','bank','is','near','the','post','office'],ans:'The bank is near the post office.',tr:'البنك قريب من مكتب البريد.',ar:'near = قريب من'},
  {words:['Walk','to','First','Street','and','turn','right'],ans:'Walk to First Street and turn right.',tr:'امشِ إلى شارع فيرست ولف يمين.',ar:'تعليمات اتجاهات'},
  {words:['She','also','went','to','the','bank'],ans:'She also went to the bank.',tr:'هي أيضاً ذهبت للبنك.',ar:'also قبل الفعل الماضي'},
  {words:['Kelly','is','also','in','the','Navy'],ans:'Kelly is also in the Navy.',tr:'كيلي أيضاً في البحرية.',ar:'also بعد is'},
],
l4:[
  {words:['My','vacation','is','next','month'],ans:'My vacation is next month.',tr:'إجازتي الشهر القادم.',ar:'جملة بسيطة عن الوقت'},
  {words:['I','like','the','Navy','now','but','I',"didn't",'at','first'],ans:"I like the Navy now, but I didn't at first.",tr:'أحب البحرية الآن، لكن ما كنت أحبها في البداية.',ar:'but لعكس الفكرة'},
  {words:['Why','are','you','smiling'],ans:'Why are you smiling ?',tr:'لماذا تبتسم؟',ar:'سؤال Why'},
  {words:['Because',"I'm",'happy'],ans:"Because I'm happy.",tr:'لأني سعيد.',ar:'جواب Because'},
  {words:['We','stayed','at','the','hotel','overnight'],ans:'We stayed at the hotel overnight.',tr:'بقينا بالفندق طول الليل.',ar:'overnight = لليلة كاملة'},
  {words:['I',"can't",'wait','to','take','my','vacation'],ans:"I can't wait to take my vacation.",tr:'ما أقدر أنتظر أن آخذ إجازتي.',ar:'take a vacation تعبير مفيد'},
  {words:['She','always','smiles','in','pictures'],ans:'She always smiles in pictures.',tr:'هي دائماً تبتسم بالصور.',ar:'مضارع بسيط لعادة'},
  {words:['You','have','to','check','out','before','noon'],ans:'You have to check out before noon.',tr:'لازم تسجل مغادرتك قبل الظهر.',ar:'check out تعبير فندقي'},
]
};

// ═══════════════════════════════════════
// EVALUATION EXERCISES (اختبر) — من ملحق EE الرسمي بالكتاب
// tr = ترجمة حرفية للجملة الصحيحة الكاملة
// ═══════════════════════════════════════
const EE={
l1:[
  {q:"Mary got a bad _______. She didn't study for her test.",o:['score','rain','umbrella','storm'],a:0,en:"didn't study → bad score",ar:'ما ذاكرت = نتيجة سيئة',tr:'مريم حصلت على درجة سيئة. هي ما ذاكرت لاختبارها.'},
  {q:'My teacher _______ that we’ll have a test next week.',o:['thinking about','think about','thinking','thinks'],a:3,en:'teacher (he/she) → thinks',ar:'teacher = هو/هي → thinks',tr:'معلمي يعتقد أنه سيكون عندنا اختبار الأسبوع القادم.'},
  {q:'It was hot yesterday. It _______ cold last night.',o:['think','got','cloud','sunny'],a:1,en:'got + adjective = became',ar:'got cold = صار باردًا',tr:'كان الجو حار أمس. صار بارد الليلة الماضية.'},
  {q:'Frank _______ the weather in San Antonio was nice.',o:['thinks about','thought that','thought about','thinking that'],a:1,en:'thought that + full clause',ar:'thought that + جملة كاملة بالماضي',tr:'فرانك اعتقد أن الطقس بسان أنطونيو كان لطيفاً.'},
  {q:"It's summer. The sun is shining. It isn't raining.",o:["It's wet.","It's snowing.","It's hot and dry.","It's a storm."],a:2,en:'summer = hot and dry',ar:'الصيف = حار وجاف',tr:'الصيف. الشمس مشرقة. ما فيه مطر. الجو حار وجاف.'},
  {q:'I had ten pages of homework last night. I _______ tired.',o:['get','got','gets','getting'],a:1,en:'got + adjective = became',ar:'got tired = صار تعبان',tr:'كان عندي عشر صفحات واجب الليلة الماضية. صرت تعبان.'},
  {q:'How _______ your class today?',o:['be','were','are','was'],a:3,en:'class (singular) → was',ar:'class مفرد → was',tr:'كيف كان صفك اليوم؟'},
  {q:"The sun is shining. It's _______ outside.",o:['cloudy','sunny','rainy','windy'],a:1,en:'sun shining = sunny',ar:'الشمس تشرق = sunny',tr:'الشمس مشرقة. الجو مشمس بالخارج.'},
  {q:'It rained last night.',o:['It was a snow storm.','It was a wind storm.','It was a shower.','It was sunny.'],a:2,en:'light rain = a shower',ar:'مطر خفيف = shower',tr:'أمطرت الليلة الماضية. كانت زخة مطر خفيفة.'},
  {q:"Pat's not happy about her test score.",o:['She wants to take the test tomorrow.','She thinks her grade is very good.','She wants to take her test today.','She thinks her grade is very bad.'],a:3,en:'not happy about score → thinks grade is bad',ar:'مو مبسوطة من النتيجة = تعتقد الدرجة سيئة',tr:'بات ليست مبسوطة من نتيجة اختبارها. هي تعتقد أن درجتها سيئة جداً.'},
  {q:"I didn't wear my sweater today. I'm _______ cold.",o:['getting','gets','got','get'],a:0,en:"I'm + getting + adjective = becoming",ar:"I'm getting cold = صرت أحس بالبرد",tr:'ما لبست الكنزة اليوم. صرت أحس بالبرد.'},
  {q:'Snow is wet and _______.',o:['dry','cold','clear','change'],a:1,en:'snow = wet and cold',ar:'الثلج = مبلل وبارد',tr:'الثلج مبلل وبارد.'},
  {q:'Every day I _______ my family.',o:['thinking about','thinks about','think about','think'],a:2,en:'think about + noun (I = present, no s)',ar:'think about + اسم (بدون جملة كاملة)',tr:'كل يوم أفكر بعائلتي.'},
  {q:'Where can you buy a car?',o:['In the afternoon.','In Houston.','In class.','In a minute.'],a:1,en:'where → place answer',ar:'سؤال بـ where جوابه مكان',tr:'أين تقدر تشتري سيارة؟ في هيوستن.'},
  {q:"Don't get wet. Take your _______ with you.",o:['umbrella','shoes','homework','dictionary'],a:0,en:"don't get wet → take umbrella",ar:'عشان ما تتبلل تاخذ umbrella',tr:'لا تتبلل. خذ مظلتك معك.'},
  {q:'I was walking in the rain.',o:['I got hot.','My clothes got dry.','My clothes got wet.',"I'm warm and dry."],a:2,en:'walking in the rain → clothes got wet',ar:'مشى بالمطر = ملابسه صارت مبللة',tr:'كنت أمشي بالمطر. ملابسي صارت مبللة.'},
  {q:'_______ do you think the football game starts?',o:['Where','When','What','Who'],a:1,en:'asking about start time = When',ar:'يسأل عن وقت البداية = When',tr:'متى تعتقد ستبدأ مباراة كرة القدم؟'},
  {q:"Bruce doesn't want to be a civilian.",o:["He thinks he'll be a sailor.","He thinks he'll be a teacher.","He's thinking about going to Spain.","He's thinking about being a civilian."],a:0,en:'not civilian + wants Navy → sailor',ar:'مو مدني وناوي يدخل البحرية = بحّار',tr:'بروس ما يريد أن يكون مدنياً. هو يعتقد أنه سيصبح بحّاراً.'},
],
l2:[
  {q:'I live in San Antonio. My _______ is here.',o:['boat','jet','home'],a:2,en:'context: residing → home',ar:'يسكن بسان أنطونيو → بيته هنا',tr:'أسكن بسان أنطونيو. بيتي هنا.'},
  {q:'My brother is a pilot. He flies a _______.',o:['boat','helicopter','vehicle'],a:1,en:'pilot flies a helicopter',ar:'الطيار يطير بمروحية',tr:'أخي طيار. هو يطير بمروحية.'},
  {q:'A _______ is an airplane.',o:['jet','helicopter','vehicle'],a:0,en:'a jet is a type of airplane',ar:'الجت نوع من الطائرات',tr:'الجت هو نوع من الطائرات.'},
  {q:'A knife has a handle and a _______.',o:['boat','blade','check'],a:1,en:'knife parts: handle + blade',ar:'أجزاء السكين: مقبض ونصل',tr:'السكين له مقبض ونصل.'},
  {q:'I live in that _______ over there. Where do you live?',o:['house','jet','vehicle'],a:0,en:'a place to live = house',ar:'مكان للسكن = house',tr:'أسكن بذلك البيت هناك. أين تسكن أنت؟'},
  {q:'A big boat is a _______.',o:['helicopter','home','ship'],a:2,en:'big boat = ship',ar:'القارب الكبير = ship',tr:'القارب الكبير يسمى سفينة.'},
  {q:'A _______ takes our order in a restaurant.',o:['waiter','cook','clerk'],a:0,en:'takes your order in a restaurant = waiter',ar:'ياخذ الطلب بالمطعم = waiter',tr:'النادل يأخذ طلبنا بالمطعم.'},
  {q:'Jan: Do you want sugar in your coffee? Linda: No thanks, I like it _______ sugar.',o:['sure','without','with'],a:1,en:'declining sugar → without',ar:'يرفض السكر → without',tr:'جان: تريدين سكر بقهوتك؟ ليندا: لا شكراً، أحبها بدون سكر.'},
  {q:'Tom: Are you _______ they were there last night? Ted: Yes. I saw them there.',o:['sure','awful','later'],a:0,en:'confirming certainty → sure',ar:'يتأكد من شي → sure',tr:'توم: متأكد أنهم كانوا هناك البارحة؟ تيد: نعم، شفتهم هناك.'},
  {q:"The show didn't start at 7:00. It started _______.",o:['sure','awful','later'],a:2,en:'started after 7:00 → later',ar:'بدأ بعد الساعة 7 → later',tr:'العرض ما بدأ الساعة 7. بدأ متأخر.'},
  {q:'Our waiter brought us the _______ after our meal.',o:['tip','order','check'],a:2,en:'bill after the meal = check',ar:'الفاتورة بعد الأكل = check',tr:'النادل أحضر لنا الفاتورة بعد الأكل.'},
  {q:'Use your knife to _______ your meat.',o:['leave','cut','get'],a:1,en:'knife is used to cut',ar:'السكين تُستخدم للقطع',tr:'استخدم سكينك لكي تقطع لحمك.'},
],
l3:[
  {q:'This box is for you. It came in the _______ today.',o:['letter','bank','package','mail'],a:3,en:'a box arrives "in the mail"',ar:'الصندوق وصل بالبريد',tr:'هذا الصندوق لك. وصل بالبريد اليوم.'},
  {q:"Henry didn't get my letter. I didn't put the correct _______ on it.",o:['return address','post office','address','check'],a:2,en:"recipient's address needed for delivery",ar:'العنوان الصحيح ضروري للتوصيل',tr:'هنري ما استلم رسالتي. أنا ما حطيت العنوان الصحيح عليها.'},
  {q:'I want to see the letter. Can you please _______ it to me?',o:['sign','finish','show','deliver'],a:2,en:'let me see it = show it',ar:'يريني إياها = show',tr:'أريد أن أرى الرسالة. ممكن تريني إياها؟'},
  {q:"It's time to go to class. Did you _______ your breakfast?",o:['finish','show','sign','give'],a:0,en:'complete breakfast = finish',ar:'خلّص فطوره = finish',tr:'حان وقت الذهاب للصف. أنهيت فطورك؟'},
  {q:"I don't have any money. I have to cash a _______.",o:['stamp','check','bank','package'],a:1,en:'cash a check',ar:'يصرف شيك',tr:'ما عندي نقود. لازم أصرف شيك.'},
  {q:'We bought our dinner in the restaurant with a _______.',o:['post office',"driver's license","traveler's check",'postcard'],a:2,en:'paid with a traveler\'s check',ar:'دفع بشيك سياحي',tr:'دفعنا عشانا بالمطعم بشيك سياحي.'},
  {q:'My sister likes to read. I want to _______ her this book.',o:['bank','mail','finish','sign'],a:1,en:'send by mail = mail',ar:'يبعثلها بالبريد = mail',tr:'أختي تحب تقرأ. أريد أن أرسل لها هذا الكتاب بالبريد.'},
  {q:'Tom wants eggs for breakfast. Bob _______ wants eggs.',o:['sure','how','near','also'],a:3,en:'Bob also wants eggs = too',ar:'بوب أيضًا يريد = also',tr:'توم يريد بيض للفطور. بوب أيضاً يريد بيض.'},
  {q:'_______ are not people.',o:['Tellers','Mail clerks','Money orders','Letter carriers'],a:2,en:'money orders are documents, not people',ar:'الحوالات المالية أوراق مو بشر',tr:'الحوالات المالية ليست بشراً.'},
  {q:'Canada is _______ the United States.',o:['near','at','on','also'],a:0,en:'Canada is near the US',ar:'كندا قريبة من أمريكا',tr:'كندا قريبة من الولايات المتحدة.'},
  {q:'Many families buy food on Saturday. They always have to _______ at the commissary then.',o:['mail a package','give a quiz','make a reservation','stand in line'],a:3,en:'busy Saturday at the commissary = stand in line',ar:'يوم مزدحم بالبقالة = يقفون بالطابور',tr:'عوائل كثيرة تشتري أكل يوم السبت. دائماً لازم يقفوا بالطابور بالبقالة العسكرية وقتها.'},
  {q:'Write your name on the money order. _______ right here, please.',o:['Show','Sign','Give','Finish'],a:1,en:'write your name = sign',ar:'يكتب اسمه = يوقّع',tr:'اكتب اسمك على الحوالة المالية. وقّع هنا لو سمحت.'},
  {q:'Did Al send a postcard to you? Yes, he sent _______ one.',o:['them','him','it','me'],a:3,en:'sent "to you" → answer uses "me"',ar:'أرسل "لك" → الجواب بضمير me',tr:'آل أرسل لك بطاقة بريدية؟ نعم، أرسل لي وحدة.'},
  {q:"Does your teacher give a quiz to your class every day? No, she doesn't give _______ one every day.",o:['it','them','us','you'],a:2,en:'"your class" (the speaker is part of it) → us',ar:'صفك (المتكلم منه) → us',tr:'معلمك يعطي صفك اختبار كل يوم؟ لا، ما تعطينا واحداً كل يوم.'},
  {q:'Can I give a check to Ben? Yes, you can give _______ a check.',o:['her','him','you','us'],a:1,en:'Ben = him',ar:'بين = him',tr:'أقدر أعطي بين شيك؟ نعم، تقدر تعطيه شيك.'},
  {q:'Did Bill buy a CD for Melanie? Yes, he bought _______ a CD.',o:['me','them','her','it'],a:2,en:'Melanie = her',ar:'ميلاني = her',tr:'بيل اشترى لميلاني سي دي؟ نعم، اشترى لها واحداً.'},
  {q:'Did Mr. Jones give an answer to the students? No, he didn\'t give _______ an answer.',o:['you','me','them','us'],a:2,en:'the students = them',ar:'الطلاب = them',tr:'مستر جونز أعطى الطلاب جواب؟ لا، ما أعطاهم جواب.'},
  {q:'Jeff: Excuse me, is the post office _______ here?',o:['for','near','with','at'],a:1,en:'near here',ar:'قريب من هنا',tr:'جيف: عفوًا، مكتب البريد قريب من هنا؟'},
  {q:"Man: No, _______ downtown.",o:['that','what',"it's",'this'],a:2,en:"No, it's downtown",ar:'لا، هو وسط البلد',tr:'الرجل: لا، هو وسط البلد.'},
  {q:'Jeff: What _______ is it on?',o:['street','state','address','building'],a:0,en:'What street is it on?',ar:'أي شارع؟',tr:'جيف: أي شارع هو فيه؟'},
  {q:'Man: It\'s on Andrews _______ First Street and Second Street.',o:['near','on','between','without'],a:2,en:'between two streets',ar:'بين شارعين = between',tr:'الرجل: هو بشارع أندروز بين الشارع الأول والثاني.'},
  {q:"Man: It's _______ the library.",o:['without','between','at','next to'],a:3,en:'next to the library',ar:'جنب المكتبة',tr:'الرجل: هو جنب المكتبة.'},
],
l4:[
  {q:"Jan: Can you put some film in my camera? Tom: Sure, I'll _______ it for you.",o:['load','relax','take'],a:0,en:'put film in a camera = load',ar:'يحمّل الكاميرا بالفيلم',tr:'جان: تقدر تحط فيلم بكاميرتي؟ توم: أكيد، سأحمّلها لك.'},
  {q:'Class ends June 15th. Our _______ test is June 14th.',o:['short','final','later'],a:1,en:'the last test before class ends = final',ar:'آخر اختبار = final',tr:'الصف ينتهي 15 يونيو. اختبارنا النهائي يوم 14 يونيو.'},
  {q:'Tom: What time did your plane get in? John: Oh, it was late. It _______ got in at midnight.',o:['too','at first','finally'],a:2,en:'eventually, after delay = finally',ar:'بعد تأخير = finally',tr:'توم: أي وقت وصلت طائرتك؟ جون: كان متأخر. وصلت أخيرًا نص الليل.'},
  {q:"That _______ doesn't turn brown in winter; it's always green.",o:['tree','lake','vacation'],a:0,en:'turns brown / stays green = a tree',ar:'يصفر أو يخضر = شجرة',tr:'تلك الشجرة ما تصفر بالشتاء؛ هي دائماً خضراء.'},
  {q:'Dallas has many nice _______. You can stay in any one of them.',o:['lakes','mountains','hotels'],a:2,en:'stay in = hotels',ar:'يقيم في = فنادق',tr:'دالاس فيها فنادق جميلة كثيرة. تقدر تقيم بأي واحد منها.'},
  {q:'You have to _______ of this hotel before noon.',o:['rest','check in','check out'],a:2,en:'before noon = standard checkout time',ar:'قبل الظهر = وقت تسجيل المغادرة المعتاد',tr:'لازم تسجل مغادرتك من هذا الفندق قبل الظهر.'},
  {q:'I think that she likes me. She _______ at me.',o:['went sightseeing','smiled','took a picture'],a:1,en:'sign of liking someone = smiled',ar:'علامة الإعجاب = ابتسمت',tr:'أعتقد أنها تحبني. هي ابتسمت لي.'},
  {q:'Ed and Brian went to Houston. They stayed there _______ and came back this morning.',o:['final','overnight','rest'],a:1,en:'stayed one night = overnight',ar:'باتوا ليلة = overnight',tr:'إيد وبراين ذهبوا هيوستن. باتوا هناك ليلة ورجعوا الصباح.'},
  {q:'My friend Linda lives in the _______ of California.',o:['state','country','ocean'],a:0,en:'California is a state',ar:'كاليفورنيا ولاية',tr:'صديقتي ليندا تسكن بولاية كاليفورنيا.'},
  {q:'Lt. Hill: What do you do to _______? Lt. Lamb: I play table tennis.',o:['relax','smile','stay'],a:0,en:'playing table tennis = relaxing activity',ar:'لعب تنس الطاولة = نشاط استرخاء',tr:'الملازم هيل: ماذا تفعل لكي ترتاح؟ الملازم لامب: ألعب تنس طاولة.'},
  {q:'How long was your vacation?',o:['Next month.','Two weeks.','In June.'],a:1,en:'"how long" asks about duration',ar:'How long يسأل عن المدة',tr:'كم طالت إجازتك؟ أسبوعين.'},
  {q:'Jane: _______ did you go to California for your vacation?',o:['Where','Who','Why','What'],a:2,en:'answer gives a reason → Why',ar:'الجواب سبب → Why',tr:'جين: لماذا ذهبتِ كاليفورنيا لإجازتك؟'},
  {q:'Barb: _______ my family lives there.',o:['Also','And','Because','But'],a:2,en:'gives a reason = Because',ar:'يعطي سبب = Because',tr:'بارب: لأن عائلتي تسكن هناك.'},
  {q:'Jane: How _______ did you stay?',o:['long','many','short','final'],a:0,en:'"How long" asks duration',ar:'How long = كم المدة',tr:'جين: كم المدة التي بقيتِها؟'},
  {q:'Barb: Just three days. My vacation was very _______.',o:['long','short','final','overnight'],a:1,en:'three days = short',ar:'ثلاث أيام = قصيرة',tr:'بارب: فقط ثلاث أيام. إجازتي كانت قصيرة جداً.'},
  {q:"John speaks Spanish, _______ he doesn't speak French.",o:['and','but'],a:1,en:'opposite ideas → but',ar:'فكرتان متعاكستان → but',tr:'جون يتكلم إسباني، لكن ما يتكلم فرنسي.'},
  {q:'Jan signed her letter, _______ then she put it in an envelope.',o:['and','but'],a:0,en:'sequence of similar actions → and',ar:'تتابع أفعال → and',tr:'جان وقّعت رسالتها، وبعدها حطتها بالظرف.'},
  {q:"Meg drinks coffee at breakfast, _______ she doesn't drink it at lunch.",o:['and','but'],a:1,en:'opposite ideas → but',ar:'فكرتان متعاكستان → but',tr:'ميغ تشرب قهوة بالفطور، لكن ما تشربها بالغداء.'},
  {q:'Ted reads a lot of books, _______ his brother never reads any.',o:['and','but'],a:1,en:'opposite ideas → but',ar:'فكرتان متعاكستان → but',tr:'تيد يقرأ كتب كثيرة، لكن أخوه ما يقرأ ولا كتاب.'},
  {q:'Their teacher asked a question, _______ all the students answered.',o:['and','but'],a:0,en:'addition/result → and',ar:'إضافة أو نتيجة → and',tr:'معلمهم سأل سؤالاً، والطلاب كلهم أجابوا.'},
]
};

// ═══════════════════════════════════════
// REVIEW 6 (قسم المراجعة) — EXERCISE W، منفصل عن الدروس (16 سؤال)
// ═══════════════════════════════════════
const REVIEW=[
  {q:"Frank got a bad _______ on the book quiz because he didn't study.",o:["score","test","lesson","name"],a:0,en:"you get a bad score on a quiz",ar:"درجة سيئة = bad score",tr:"حصل فرانك على درجة سيئة في اختبار الكتاب لأنه لم يدرس."},
  {q:"My father's plane arrived at 9:15 last night.",o:["It got in.","It got off.","It got on.","It got up."],a:0,en:"a plane 'gets in' = arrives",ar:"وصول الطائرة = get in",tr:"طائرة والدي وصلت الساعة 9:15 مساء أمس. (get in = يصل)"},
  {q:"She can drive a car now because she got her driver's _______.",o:["check","order","identification","license"],a:3,en:"driver's license",ar:"رخصة القيادة",tr:"تستطيع قيادة السيارة الآن لأنها حصلت على رخصة القيادة."},
  {q:"There was a _______ this morning. It rained only five minutes.",o:["snow","sun","weather","shower"],a:3,en:"a shower = brief rain",ar:"زخة مطر قصيرة = shower",tr:"كان هناك زخة مطر هذا الصباح. أمطرت خمس دقائق فقط."},
  {q:"I can't mail a letter because I don't have _______.",o:["a menu","an envelope","a blade","a post office"],a:1,en:"you need an envelope to mail a letter",ar:"ظرف = envelope",tr:"لا أستطيع إرسال الرسالة لأنه ليس لدي ظرف."},
  {q:"Tom lives in that big white _______ over there.",o:["street","plate","house","sky"],a:2,en:"you live in a house",ar:"بيت = house",tr:"يعيش توم في ذلك البيت الأبيض الكبير هناك."},
  {q:"The food at the restaurant is delicious.",o:["It's awful.","It's very good.","It's very bad.","It's crowded."],a:1,en:"delicious = very good",ar:"لذيذ = very good",tr:"الطعام في المطعم لذيذ. (delicious = very good)"},
  {q:"What would you like to do tonight?",o:["I didn't go out.","I'd like to see a movie.","I saw a movie.","I went to the movie."],a:1,en:"'would like' asks about a future wish",ar:"would like للرغبة في المستقبل",tr:"ماذا تحب أن تفعل الليلة؟ — أحب أن أشاهد فيلماً."},
  {q:"I think _______ it will snow tomorrow.",o:["this","they","them","that"],a:3,en:"I think that ...",ar:"I think that = أعتقد أنّ",tr:"أعتقد أنها ستُثلج غداً."},
  {q:"Ms. Jacobs mailed a package to her brother.",o:["He mailed his sister a package.","She mailed her brother a package.","He mailed his brother a package.","She mailed her sister a package."],a:1,en:"Ms. Jacobs = she; to her brother",ar:"السيدة جاكوبس = she، والمُرسَل إليه أخوها",tr:"أرسلت السيدة جاكوبس طرداً لأخيها."},
  {q:"Why are you wearing your winter coat?",o:["Because I'm cold.","Because I'm hot.","Because I'm tired.","Because I'm hungry."],a:0,en:"winter coat → because I'm cold",ar:"معطف الشتاء لأنه بردان",tr:"لماذا ترتدي معطف الشتاء؟ — لأنني بردان."},
  {q:"Where is your daughter?",o:["I think he's at the post office.","I think she was at home.","I think she's at the post office.","I think he will be here."],a:2,en:"daughter = she; present 'is'",ar:"daughter = she، والسؤال بصيغة المضارع",tr:"أين ابنتك؟ — أعتقد أنها في مكتب البريد."},
  {q:"How did your mother and father get from Paris to Rome?",o:["They flew by train.","They will go on the train.","They went by train.","They wanted to walk."],a:2,en:"past 'did' → went ('flew by train' is contradictory)",ar:"سؤال بالماضي did → went",tr:"كيف وصل والداك من باريس إلى روما؟ — ذهبا بالقطار."},
  {q:"Would you like some coffee or tea?",o:["Where is the coffee?","No, I don't want something, thanks.","Yes, I had some coffee.","No, I don't want anything, thanks."],a:3,en:"a negative sentence uses 'anything', not 'something'",ar:"مع النفي نستخدم anything لا something",tr:"هل تريد بعض القهوة أو الشاي؟ — لا، لا أريد شيئاً، شكراً."},
  {q:"We stayed at the hotel from 4:45 p.m. to 10:00 a.m.",o:["We stayed a week.","We stayed a month.","We stayed overnight.","We stayed for a dozen hours."],a:2,en:"evening to morning = overnight",ar:"من المساء حتى الصباح = طوال الليل",tr:"بقينا في الفندق من 4:45 مساءً حتى 10:00 صباحاً. (overnight = طوال الليل)"},
  {q:"I want to relax next Saturday.",o:["I want to work.","I want to study.","I want to smile.","I want to rest."],a:3,en:"relax = rest",ar:"relax = يرتاح (rest)",tr:"أريد أن أسترخي السبت القادم. (relax = rest)"},
];
EE.review=REVIEW;

// ═══════════════════════════════════════
// FINAL EXAM (الاختبار النهائي الشامل)
// كل أسئلة "اختبر" بالدروس 1-4 مجمّعة (نفس طريقة Book 4/5)
// ═══════════════════════════════════════
const FINAL=dedupe_by_q([
  ...EE.l1,
  ...EE.l2,
  ...EE.l3,
  ...EE.l4,
]);
EE.final=FINAL;

// ═══════════════════════════════════════
// LISTENING (YouTube videos)
// ═══════════════════════════════════════
const YT_VIDEOS=[
  {id:'XbGyesPWPno',t:'Quiz A',s:'استماع وقراءة مع الحل'},
  {id:'2t6zWxxB4Sg',t:'Quiz B',s:'استماع وقراءة مع الحل'},
  {id:'zES0kAj58bg',t:'Quiz C',s:'استماع وقراءة مع الحل'},
];

// ═══════════════════════════════════════
// SPELLING — write from listening (by lesson)
// كلمات مختارة من مفردات كل درس
// ═══════════════════════════════════════
const SPELL_LESSONS=[
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 1 — الطقس',w:[
    {e:'weather',a:'الطقس',em:'🌡️'},{e:'cloud',a:'غيمة',em:'☁️'},{e:'rain',a:'مطر',em:'🌧️'},
    {e:'storm',a:'عاصفة',em:'⛈️'},{e:'snow',a:'ثلج',em:'❄️'},{e:'wind',a:'الرياح',em:'💨'},
    {e:'umbrella',a:'مظلة',em:'☂️'}]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 2 — السفر والمطاعم',w:[
    {e:'boat',a:'قارب',em:'🛥️'},{e:'train',a:'قطار',em:'🚆'},{e:'ship',a:'سفينة',em:'🚢'},
    {e:'jet',a:'طائرة نفاثة',em:'✈️'},{e:'menu',a:'قائمة الطعام',em:'📋'},{e:'waiter',a:'نادل',em:'🧑‍🍽️'},
    {e:'delicious',a:'لذيذ',em:'😋'}]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 3 — البريد',w:[
    {e:'address',a:'عنوان',em:'🏠'},{e:'bank',a:'بنك',em:'🏦'},{e:'envelope',a:'ظرف',em:'✉️'},
    {e:'letter',a:'رسالة',em:'💌'},{e:'package',a:'طرد',em:'📦'},{e:'stamp',a:'طابع بريد',em:'🏷️'},
    {e:'street',a:'شارع',em:'🛣️'}]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 4 — الإجازات',w:[
    {e:'camera',a:'كاميرا',em:'📷'},{e:'hotel',a:'فندق',em:'🏨'},{e:'lake',a:'بحيرة',em:'🏞️'},
    {e:'mountain',a:'جبل',em:'⛰️'},{e:'ocean',a:'محيط',em:'🌊'},{e:'tent',a:'خيمة',em:'⛺'},
    {e:'vacation',a:'إجازة',em:'🏖️'}]},
];

// ═══════════════════════════════════════
// ROUTING MANIFEST — home + lesson + listening + final + review + spelling
// ═══════════════════════════════════════
const SCREENS=['home','lscreen','ytscreen','lcscreen','fscreen','vtscreen','rscreen','spscreen','mkscreen'];
const SCREEN_NAMES={home:'الرئيسية',lscreen:'درس',ytscreen:'الاستماع',lcscreen:'مهارة الاستماع',fscreen:'الاختبار النهائي',vtscreen:'اختبار المفردات',rscreen:'المراجعة',spscreen:'الإملاء',mkscreen:'مراجعة الأخطاء'};
