// ═══════════════════════════════════════
// DATA — BOOK 5
// Everything book-specific: BOOK_ID, lesson/content data, and the routing
// manifest. Consumed by the engine-*.js files (loaded after this).
// ═══════════════════════════════════════
const BOOK_ID='book5';

const LESSON_META={
  l1:{ico:'🤕',title:'Lesson 1 — What’s Wrong?',sub:'ما المشكلة؟ · جسم الإنسان والصحة والأعداد الترتيبية',vocabNote:'🔢 <b>ordinal numbers 1st – 12th</b> (first – twelfth) — تقدر تتعلمها بالتفصيل من تبويب <b>قواعد</b> <svg class="svgico" aria-hidden="true"><use href="#icon-book-open-text"></use></svg>.'},
  l2:{ico:'🧴',title:'Lesson 2 — Where Can I Get Shampoo?',sub:'أين أجد الشامبو؟ · أدوات الحمام والتسوّق'},
  l3:{ico:'🧳',title:'Lesson 3 — I’ll Take a Trip',sub:'سأقوم برحلة · السفر والحجوزات والمستقبل (will)'},
  l4:{ico:'🥛',title:'Lesson 4 — I’ll Buy a Gallon of Milk',sub:'سأشتري غالون حليب · التسوّق والطبخ والكمّية'}
};
const LESSON_KEYS=Object.keys(LESSON_META);

const VOCAB={
l1:[
  {e:'body',a:'الجسم',em:'🧍'},
  {e:'head',a:'الرأس',em:'🤕'},
  {e:'hair',a:'الشعر',em:'💇'},
  {e:'ear',a:'الأذن',em:'👂'},
  {e:'eye',a:'العين',em:'👁️'},
  {e:'eyebrow',a:'الحاجب',em:'🤨'},
  {e:'eyelash',a:'الرمش',em:'👁️'},
  {e:'eyelid',a:'الجفن',em:'😌'},
  {e:'nose',a:'الأنف',em:'👃'},
  {e:'mouth',a:'الفم',em:'👄'},
  {e:'lip',a:'الشفة',em:'👄'},
  {e:'tongue',a:'اللسان',em:'👅'},
  {e:'throat',a:'الحلق',em:'🗣️'},
  {e:'neck',a:'الرقبة',em:'👔'},
  {e:'shoulder',a:'الكتف',em:'🤷'},
  {e:'arm',a:'الذراع',em:'💪'},
  {e:'elbow',a:'المرفق',em:'💪'},
  {e:'wrist',a:'المعصم',em:'⌚'},
  {e:'hand',a:'اليد',em:'✋'},
  {e:'finger',a:'الإصبع',em:'☝️'},
  {e:'thumb',a:'الإبهام',em:'👍'},
  {e:'fingernail',a:'ظفر الإصبع',em:'💅'},
  {e:'nail',a:'الظفر',em:'💅'},
  {e:'leg',a:'الساق / الرجل',em:'🦵'},
  {e:'knee',a:'الركبة',em:'🦵'},
  {e:'ankle',a:'الكاحل',em:'🦶'},
  {e:'foot',a:'القدم',em:'🦶'},
  {e:'feet',a:'الأقدام',em:'🦶'},
  {e:'heel',a:'الكعب',em:'🦶'},
  {e:'toe',a:'إصبع القدم',em:'🦶'},
  {e:'toenail',a:'ظفر إصبع القدم',em:'💅'},
  {e:'skin',a:'الجلد',em:'🧴'},
  {e:'bone',a:'العظم',em:'🦴'},
  {e:'muscle',a:'العضلة',em:'💪'},
  {e:'limb',a:'أحد أطراف الجسم',em:'🦿'},
  {e:'trunk',a:'جذع الجسم',em:'🎽'},
  {e:'part',a:'جزء',em:'🧩'},
  {e:'medicine',a:'الدواء',em:'💊'},
  {e:'drugs',a:'أدوية / عقاقير',em:'💊'},
  {e:'date',a:'تاريخ / موعد',em:'📅'},
  {e:'order',a:'ترتيب / أمر',em:'📋'},
  {e:'hurt',a:'يؤلم / يتأذّى',past:'hurt',pa:'تألّم / تأذّى',em:'🤕'},
  {e:'move',a:'يتحرّك',em:'🚶'},
  {e:'point (to)',a:'يشير (إلى)',em:'👉'},
  {e:'touch',a:'يلمس',em:'👆'},
  {e:'about',a:'حوالي / بخصوص',em:'🔹'},
  {e:'large',a:'كبير',em:'🟧'},
  {e:'last',a:'الأخير / الماضي',em:'🏁'},
  {e:'left',a:'يسار',em:'⬅️'},
  {e:'long',a:'طويل',em:'📏'},
  {e:'next',a:'التالي',em:'➡️'},
  {e:'one',a:'واحد',em:'1️⃣'},
  {e:'ordinal',a:'ترتيبي (الأعداد الترتيبية)',em:'🔢',icon:'list-ordered'},
  {e:'right',a:'يمين / صحيح',em:'✅'},
  {e:'short',a:'قصير',em:'🤏'},
  {e:'sore',a:'ملتهب / مؤلم',em:'🤒'},
  {e:'then',a:'ثمّ / حينها',em:'⏭️'},
  {e:'which',a:'أيّ',em:'❓'},
],
l2:[
  {e:'barbershop',a:'محل الحلاقة',em:'💇‍♂️'},
  {e:'bathroom',a:'الحمام',em:'🛁'},
  {e:'birthday',a:'عيد الميلاد',em:'🎂'},
  {e:'brush',a:'فرشاة (شعر)',em:'🪮'},
  {e:'butter',a:'الزبدة',em:'🧈'},
  {e:'comb',a:'المشط',em:'🪮'},
  {e:'drugstore',a:'الصيدلية',em:'💊'},
  {e:'face',a:'الوجه',em:'🙂'},
  {e:'grocery store',a:'محل البقالة',em:'🛒'},
  {e:'hair',a:'الشعر',em:'💇'},
  {e:'haircut',a:'قصة الشعر',em:'✂️'},
  {e:'mirror',a:'المرآة',em:'🪞'},
  {e:'pepper',a:'الفلفل',em:'🌶️'},
  {e:'pocket',a:'الجيب',em:'👖'},
  {e:'razor',a:'شفرة الحلاقة',em:'🪒'},
  {e:'salt',a:'الملح',em:'🧂'},
  {e:'shampoo',a:'الشامبو',em:'🧴'},
  {e:'sink',a:'المغسلة',em:'🚰'},
  {e:'soap',a:'الصابون',em:'🧼'},
  {e:'soup',a:'الحساء / الشوربة',em:'🍲'},
  {e:'subject',a:'مادة دراسية / موضوع',em:'📘'},
  {e:'sugar',a:'السكر',em:'🧁'},
  {e:'thing',a:'شيء',em:'📦'},
  {e:'toilet',a:'المرحاض',em:'🚽'},
  {e:'toilet paper',a:'ورق التواليت',em:'🧻'},
  {e:'tooth',a:'السن',em:'🦷'},
  {e:'teeth',a:'الأسنان',em:'🦷'},
  {e:'toothbrush',a:'فرشاة الأسنان',em:'🪥'},
  {e:'toothpaste',a:'معجون الأسنان',em:'🧴'},
  {e:'topic',a:'موضوع',em:'📝'},
  {e:'towel',a:'المنشفة',em:'🧺'},
  {e:'washcloth',a:'قطعة قماش للاستحمام',em:'🧽'},
  {e:'brush (verb)',a:'يفرش',past:'brushed',pa:'فرش',em:'🪥'},
  {e:'can',a:'من الممكن / يمكن',alt:['يستطيع','استطيع','يقدر','اقدر','بإمكانه','قادر','ممكن'],em:'🎲'},
  {e:'change',a:'يُغيّر',past:'changed',pa:'غيّر',em:'🔄'},
  {e:'comb (verb)',a:'يُمشّط',past:'combed',pa:'مشّط',em:'🪮'},
  {e:'dry',a:'يُجفّف',past:'dried',pa:'جفّف',em:'🌬️'},
  {e:'get',a:'يحصل على',past:'got',pa:'حصل على',em:'🤲'},
  {e:'need',a:'يحتاج (إلى)',past:'needed',pa:'احتاج',em:'❗'},
  {e:'rinse',a:'يشطف',past:'rinsed',pa:'شطف',em:'🚿'},
  {e:'shampoo (verb)',a:'يغسل بالشامبو',past:'shampooed',pa:'غسل بالشامبو',em:'🧴'},
  {e:'wash',a:'يغسل',past:'washed',pa:'غسل',em:'🧼'},
  {e:'a few',a:'قليل من (معدود)',em:'🔢'},
  {e:'a little',a:'قليل من (غير معدود)',em:'🤏'},
  {e:'a lot of',a:'الكثير من',em:'🔼'},
  {e:'any',a:'أيّ (بالسؤال أو النفي)',em:'❓'},
  {e:'clean',a:'نظيف',em:'✨'},
  {e:'dirty',a:'وسخ',em:'🟤'},
  {e:'lots of',a:'الكثير من',em:'💠'},
  {e:'only',a:'فقط',em:'1️⃣'},
  {e:'some',a:'بعض (بالإثبات)',em:'🔹'},
],
l3:[
  {e:'airline',a:'شركة طيران',alt:['خطوط الطيران','خطوط جوية','خطوط طيران'],em:'✈️'},
  {e:'airport',a:'المطار',em:'🛫'},
  {e:'arrival',a:'الوصول',em:'🛬'},
  {e:'button',a:'زر (الملابس)',em:'🔘'},
  {e:'cuff',a:'كم القميص (الأسورة)',em:'👔'},
  {e:'customer',a:'الزبون',em:'🧑‍💼'},
  {e:'departure',a:'المغادرة',em:'🛫'},
  {e:'doorknob',a:'مقبض الباب',em:'🚪'},
  {e:'flight',a:'رحلة طيران',em:'✈️'},
  {e:'gate',a:'بوابة (المطار)',em:'🚪'},
  {e:'graduation',a:'التخرّج',em:'🎓'},
  {e:'handle',a:'المقبض',em:'🖐️'},
  {e:'instructions',a:'تعليمات',em:'📋'},
  {e:'key',a:'المفتاح',em:'🔑'},
  {e:'knob',a:'المقبض (الدائري)',em:'🔘'},
  {e:'lock',a:'القفل',em:'🔒'},
  {e:'phone',a:'الهاتف',em:'☎️'},
  {e:'reservation',a:'الحجز',em:'📅'},
  {e:'school',a:'المدرسة',em:'🏫'},
  {e:'sharpener',a:'مبراة',em:'✏️'},
  {e:'sleeve',a:'كم الملابس',em:'👕'},
  {e:'suitcase',a:'حقيبة السفر',em:'🧳'},
  {e:'telephone',a:'الهاتف',em:'☎️'},
  {e:'ticket',a:'التذكرة',em:'🎫'},
  {e:'travel agency',a:'وكالة سفريات',em:'🏢'},
  {e:'travel agent',a:'وكيل سفريات',em:'🧑‍💼'},
  {e:'trip',a:'رحلة',em:'🧳'},
  {e:'twin',a:'توأم',em:'👯'},
  {e:'zipper',a:'السحّاب',em:'🤐'},
  {e:'arrive',a:'يصل',em:'🛬'},
  {e:'button (verb)',a:'يزرّر',em:'🔘'},
  {e:'call',a:'يتصل / ينادي',em:'📞'},
  {e:'come back',a:'يرجع',past:'came back',pa:'رجع',em:'🔙'},
  {e:'depart (from)',a:'يغادر (من)',em:'🛫'},
  {e:'go back',a:'يرجع (لمكان)',past:'went back',pa:'رجع (لمكان)',em:'↩️'},
  {e:'graduate',a:'يتخرّج',em:'🎓'},
  {e:'lock (verb)',a:'يقفل',em:'🔒'},
  {e:'meet',a:'يقابل / يلتقي',past:'met',pa:'قابل / التقى',em:'🤝'},
  {e:'pack',a:'يحزم',em:'🧳'},
  {e:'pick up',a:'يستلم / يوصّل شخص',em:'🚗'},
  {e:'pull',a:'يسحب',em:'⬅️'},
  {e:'push',a:'يدفع',em:'➡️'},
  {e:'return',a:'يرجع / يعيد',em:'🔄'},
  {e:'sharpen',a:'يبري',em:'✏️'},
  {e:'stop',a:'يوقف / يتوقف',em:'🛑'},
  {e:'turn',a:'يلف / يدير',em:'🔄'},
  {e:'turn off',a:'يطفئ',em:'🔴'},
  {e:'turn on',a:'يشغّل',em:'🟢'},
  {e:'will',a:'سوف / راح (فعل مساعد للمستقبل)',em:'🔮'},
  {e:"won't",a:'لن (نفي المستقبل — will + not)',em:'🚫'},
  {e:'first',a:'أولاً',em:'1️⃣'},
  {e:'from',a:'من',em:'📍'},
  {e:'in (an hour)',a:'خلال (ساعة)',em:'⏳'},
  {e:'next to',a:'بجانب',em:'➡️'},
  {e:'off',a:'مطفأ',em:'🔴'},
  {e:'on',a:'مشغّل',alt:['على','فوق','يعمل','شغّال'],em:'🟢'},
  {e:'one-way',a:'اتجاه واحد (تذكرة)',em:'➡️'},
  {e:'push-button',a:'بأزرار (هاتف بأزرار)',em:'☎️'},
  {e:'round-trip',a:'ذهاب وعودة (تذكرة)',em:'🔁'},
  {e:'together',a:'مع بعض',em:'🤝'},
  {e:'tonight',a:'الليلة',em:'🌙'},
],
l4:[
  {e:'bar',a:'قالب (شوكولاتة)',em:'🍫'},
  {e:'bean',a:'فاصولياء / لوبيا',em:'🫘'},
  {e:'bottle',a:'زجاجة',em:'🍾'},
  {e:'bowl',a:'وعاء',em:'🥣'},
  {e:'cake',a:'كيك',em:'🎂'},
  {e:'can',a:'علبة معدنية',em:'🥫'},
  {e:'candy',a:'حلوى',em:'🍬'},
  {e:'carrot',a:'جزر',em:'🥕'},
  {e:'cheese',a:'جبن',em:'🧀'},
  {e:'chocolate',a:'شوكولاتة',em:'🍫'},
  {e:'cookie',a:'كوكيز',em:'🍪'},
  {e:'corn',a:'ذرة',em:'🌽'},
  {e:'cup',a:'كوب / فنجان',em:'☕'},
  {e:'dessert',a:'حلى / تحلية',em:'🍮'},
  {e:'dial',a:'قرص الاتصال (بالهاتف القديم)',em:'☎️'},
  {e:'dial tone',a:'نغمة الاتصال',em:'🔊'},
  {e:'dish',a:'طبق',em:'🍽️'},
  {e:'dozen',a:'دزينة (١٢)',em:'🥚'},
  {e:'fork',a:'شوكة',em:'🍴'},
  {e:'gallon',a:'جالون',em:'🥛'},
  {e:'glass',a:'كوب زجاج',em:'🥛'},
  {e:'ham',a:'لحم الفخذ المقدد',em:'🍖'},
  {e:'ice cream',a:'آيسكريم',em:'🍦'},
  {e:'kilogram',a:'كيلوجرام',em:'⚖️'},
  {e:'knife',a:'سكين',em:'🔪'},
  {e:'lettuce',a:'خس',em:'🥬'},
  {e:'napkin',a:'منديل',em:'🧻'},
  {e:'onion',a:'بصل',em:'🧅'},
  {e:'ounce',a:'أونصة',em:'⚖️'},
  {e:'paper',a:'ورق',em:'📄'},
  {e:'pie',a:'فطيرة',em:'🥧'},
  {e:'piece',a:'قطعة',em:'🧩'},
  {e:'pint',a:'باينت (وحدة قياس سوائل)',em:'🥛'},
  {e:'plate',a:'صحن',em:'🍽️'},
  {e:'potato',a:'بطاطس',em:'🥔'},
  {e:'pound',a:'رطل',em:'⚖️'},
  {e:'quart',a:'كوارت (وحدة قياس)',em:'🥛'},
  {e:'receiver',a:'سماعة الهاتف',em:'☎️'},
  {e:'sandwich',a:'ساندويتش',em:'🥪'},
  {e:'slice',a:'شريحة',em:'🍞'},
  {e:'spoon',a:'ملعقة',em:'🥄'},
  {e:'squash',a:'كوسا / قرع',em:'🎃'},
  {e:'tomato',a:'طماطم',em:'🍅'},
  {e:'ton',a:'طن',em:'⚖️'},
  {e:'tube',a:'أنبوب (معجون)',em:'🧴'},
  {e:'vanilla',a:'فانيليا',em:'🍦'},
  {e:'vegetable',a:'خضار',em:'🥦'},
  {e:'dial (verb)',a:'يطلب رقم (بالهاتف)',em:'☎️'},
  {e:'have to',a:'يجب / لازم',past:'had to',pa:'كان لازم',em:'❗'},
  {e:'make',a:'يصنع / يحضّر',past:'made',pa:'صنع / حضّر',em:'👩‍🍳'},
  {e:'among',a:'وسط (لأكثر من شيئين)',em:'👥'},
  {e:'between',a:'بين (شيئين)',em:'↔️'},
  {e:'half',a:'نصف',em:'🍕'},
  {e:'many',a:'كثير (معدود)',em:'🔢'},
  {e:'much',a:'كثير (غير معدود)',em:'🔢'},
]
};

// ═══════════════════════════════════════
// WORD ORDER (رتّب الجملة)
// ═══════════════════════════════════════
const WO={
l1:[
  {words:["I","hurt","my","fingernail"],ans:"I hurt my fingernail.",tr:"أوجعت ظفر إصبعي.",ar:"hurt فعل شاذ: hurt-hurt-hurt"},
  {words:["You","need","some","medicine"],ans:"You need some medicine.",tr:"تحتاج بعض الدواء.",ar:"medicine = الدواء"},
  {words:["She","has","a","sore","muscle"],ans:"She has a sore muscle.",tr:"عندها عضلة مؤلمة.",ar:"sore = مؤلم/ملتهب"},
  {words:["Which","leg","did","you","hurt","?"],ans:"Which leg did you hurt ?",tr:"أي رجل أوجعت؟",ar:"Which + noun للسؤال عن الاختيار"},
  {words:["He","wore","the","white","one"],ans:"He wore the white one.",tr:"لبس الأبيض.",ar:"one = بدل تكرار الاسم (uniform)"},
  {words:["Do","you","like","soccer","or","basketball","?"],ans:"Do you like soccer or basketball ?",tr:"تحب كرة القدم أم السلة؟",ar:"or بين خيارين — تختار واحد"},
  {words:["His","shoes","are","large"],ans:"His shoes are large.",tr:"حذاؤه كبير.",ar:"large = كبير الحجم"},
  {words:["First","was","Steve","Thomas"],ans:"First was Steve Thomas.",tr:"كان الأول ستيف توماس.",ar:"First تدل على الترتيب"},
],
l2:[
  {words:["There","is","a","sink","in","the","bathroom"],ans:"There is a sink in the bathroom.",tr:"يوجد حوض في الحمام.",ar:"sink مفرد → There is"},
  {words:["Do","you","have","any","soap","?"],ans:"Do you have any soap ?",tr:"عندك صابون؟",ar:"سؤال → any"},
  {words:["I","have","a","little","sugar"],ans:"I have a little sugar.",tr:"عندي قليل من السكر.",ar:"sugar غير معدود → a little"},
  {words:["I","want","to","buy","a","few","toothbrushes"],ans:"I want to buy a few toothbrushes.",tr:"أريد أن أشتري بعض فرش الأسنان.",ar:"toothbrushes معدود → a few"},
  {words:["Can","I","get","shampoo","at","the","drugstore","?"],ans:"Can I get shampoo at the drugstore ?",tr:"هل أستطيع أن أحضر شامبو من الصيدلية؟",ar:"can = سؤال عن خيار متاح"},
  {words:["Daniel","washes","his","face","with","soap"],ans:"Daniel washes his face with soap.",tr:"دانيال يغسل وجهه بالصابون.",ar:"washes = يغسل (مضارع، هو)"},
  {words:["He","combs","his","hair"],ans:"He combs his hair.",tr:"يمشط شعره.",ar:"combs = يُمشّط"},
  {words:["You","need","a","haircut"],ans:"You need a haircut.",tr:"تحتاج قصة شعر.",ar:"need = يحتاج"},
],
l3:[
  {words:["He","will","be","at","the","library","tonight"],ans:"He will be at the library tonight.",tr:"سيكون في المكتبة الليلة.",ar:"will قبل الفعل = المستقبل"},
  {words:["Will","he","be","at","the","library","tomorrow","?"],ans:"Will he be at the library tomorrow ?",tr:"سيكون في المكتبة غداً؟",ar:"Will قبل الفاعل = سؤال نعم/لا"},
  {words:["When","will","he","go","to","class","?"],ans:"When will he go to class ?",tr:"متى سيذهب للصف؟",ar:"أداة سؤال + will + فاعل"},
  {words:["The","taxi","picked","her","up","and","stopped","at","the","airport"],ans:"The taxi picked her up and stopped at the airport.",tr:"التاكسي أقلّها وتوقف عند المطار.",ar:"جملة من نص الكتاب"},
  {words:["Diana","will","make","a","reservation","to","Chicago"],ans:"Diana will make a reservation to Chicago.",tr:"ديانا ستحجز إلى شيكاغو.",ar:"will + make a reservation"},
  {words:["I","will","meet","Jim","tomorrow","morning"],ans:"I will meet Jim tomorrow morning.",tr:"سأقابل جيم غداً صباحاً.",ar:"tomorrow + morning"},
  {words:["The","plane","will","arrive","in","an","hour"],ans:"The plane will arrive in an hour.",tr:"الطائرة ستصل خلال ساعة.",ar:"in + مدة زمنية"},
  {words:["Push","the","small","button","on","your","right"],ans:"Push the small button on your right.",tr:"ادفع الزر الصغير على يمينك.",ar:"جملة تعليمات من نص الكتاب"},
],
l4:[
  {words:["I","had","to","take","the","car","to","a","mechanic"],ans:"I had to take the car to a mechanic.",tr:"اضطررت أن آخذ السيارة إلى الميكانيكي.",ar:"had to = ماضي have to"},
  {words:["We","don't","have","a","lot","of","friends","among","the","students"],ans:"We don't have a lot of friends among the students.",tr:"ليس عندنا الكثير من الأصدقاء وسط الطلاب.",ar:"among = وسط أكثر من شخصين"},
  {words:["How","many","dishes","did","you","have","to","wash","?"],ans:"How many dishes did you have to wash ?",tr:"كم صحناً اضطررت أن تغسل؟",ar:"dishes معدود → How many"},
  {words:["How","much","coffee","did","you","drink","?"],ans:"How much coffee did you drink ?",tr:"كم قهوة شربت؟",ar:"coffee غير معدود → How much"},
  {words:["I","have","to","go","to","class"],ans:"I have to go to class.",tr:"يجب أن أذهب إلى الصف.",ar:"have to = التزام"},
  {words:["We","don't","have","to","pay","any","money"],ans:"We don't have to pay any money.",tr:"لسنا مضطرين لدفع أي نقود.",ar:"don't have to = مو ضروري"},
  {words:["You","will","have","to","wear","a","uniform"],ans:"You will have to wear a uniform.",tr:"سيتوجب عليك أن تلبس زياً موحداً.",ar:"will have to = التزام مستقبلي"},
  {words:["She","has","to","make","a","cake","for","the","party"],ans:"She has to make a cake for the party.",tr:"يجب أن تصنع كيكاً للحفلة.",ar:"has to مع she"},
]
};

// ═══════════════════════════════════════
// GRAMMAR (قواعد)
// ═══════════════════════════════════════
const GRAMMAR={
l1:[
  {
    title:'Which + one / ones', ar:'أيّ + one/ones (بدل تكرار الاسم)',
    rule:'نسأل بـ Which عن الاختيار، ونرد بـ one (بدل اسم مفرد) أو ones (بدل اسم جمع) — بدون ما نكرر نفس الاسم.',
    check:{q:'Which arm did he hurt? — He hurt the left _______.',o:['arm','ones','one','arms'],a:2,en:"one replaces the singular noun 'arm'",ar:'one تحل محل الاسم المفرد arm'},
    compare:[
      {c1:'Which tie do you want?',c2:'I want that one.',ar:'one = بدل tie (مفرد)'},
      {c1:'Which suits do you like?',c2:'I like the blue ones.',ar:'ones = بدل suits (جمع)'},
    ],
    examples:[
      {s:'Which leg did you hurt? — I hurt my right one.',tr:'أي رجل أوجعت؟ — أوجعت رجلي اليمنى.',ar:'one = بدل leg',ok:true},
      {s:'Which uniform did he wear? — He wore the white one.',tr:'أي زي لبس؟ — لبس الأبيض.',ar:'one = بدل uniform',ok:true},
      {s:'Which shoes do you like? — We like the black ones.',tr:'أيّ حذاء تحب؟ — نحب الأسود.',ar:'ones = بدل shoes (جمع، أكثر من واحد)',ok:true},
      {s:'I want that tie.',wrong:'tie',right:'one',tr:'لا تكرر نفس الاسم الذي قبله في السؤال — استبدله بـ one.',ok:false},
    ]
  },
  {
    title:'Connector: or', ar:'أداة الربط or — الاختيار بين شيئين',
    rule:'نستخدم or بين خيارين بالسؤال — والجواب يحدّد واحد منهم بس، مو الاثنين.',
    check:{q:'Do you like tea _______ coffee?',o:['and','or','but','so'],a:1,en:'or = choice between two options',ar:'or = اختيار بين شيئين'},
    compare:[
      {c1:'Do you like the red one or the blue one?',c2:'I like the blue one.',ar:'or يعرض خيارين — الجواب يحدّد واحد'},
    ],
    examples:[
      {s:'Do you like to play soccer or basketball? — I like to play soccer.',tr:'تحب أن تلعب كرة قدم أم سلة؟ — أحب كرة القدم.',ar:'or بين خيارين، الجواب حدّد واحد',ok:true},
      {s:'Do you like soccer and basketball?',wrong:'and',right:'or',tr:'عندما تعرض خيارين يختار منهما واحداً، استخدم or لا and.',ok:false},
    ]
  },
  {
    title:'Ordinal Numbers 1st – 12th', ar:'الأعداد الترتيبية من الأول للثاني عشر',
    rule:'نستخدم الأعداد الترتيبية للترتيب مو للعدّ: first, second, third... إلى twelfth. أول ثلاثة أعداد لها صيغة خاصة (first, second, third)، والباقي بس نزيد th بآخر العدد.',
    check:{q:"How old is Alicia? — It's her _______ birthday.",o:['sixteen','sixteenth','sixteen years','sixteen years old'],a:1,en:'Birthday takes the ordinal number: sixteenth',ar:'birthday تاخذ العدد الترتيبي: sixteenth'},
    compare:[
      {c1:'one, two, three',c2:'first, second, third',ar:'صيغة خاصة، مو بس +th'},
      {c1:'four, five, six',c2:'fourth, fifth, sixth',ar:'من هنا وطالع بس نزيد th بالآخر'},
      {c1:'eleven, twelve',c2:'eleventh, twelfth',ar:'eleventh وtwelfth بنفس القاعدة (+th)'},
    ],
    examples:[
      {s:'Steve was first, and Thomas was second.',tr:'ستيف كان الأول، وتوماس كان الثاني.',ar:'first/second = الترتيب مو الرقم العادي',ok:true},
      {s:"It's her twelfth birthday.",tr:'هذا عيد ميلادها الثاني عشر.',ar:'twelfth = العدد الترتيبي لـ 12',ok:true},
      {s:"It's her twelve birthday.",wrong:'twelve',right:'twelfth',tr:'عيد الميلاد يأخذ العدد الترتيبي (twelfth) لا العدد العادي (twelve).',ok:false},
    ]
  },
  {
    title:'Useful Phrases', ar:'عبارات مفيدة عن الصحة',
    rule:'عبارات نستخدمها لما نسأل عن صحة شخص أو نطلب منه ياخذ علاجه — احفظها كوحدة وحدة زي ما هي.',
    check:{q:"Lewis: _______ with Peter? Joan: He's sick.",o:["What's wrong","What hurts","Which is the matter"],a:0,en:"What's wrong? is the standard question for asking about someone's health",ar:"What's wrong? = وش المشكلة؟ (سؤال عن الصحة)"},
    compare:[
      {c1:"What's wrong?",c2:'وش المشكلة؟',ar:'نسأل فيها عن الصحة أو المشكلة'},
      {c1:"What's the matter?",c2:'وش فيك؟',ar:"نفس معنى What's wrong، بس صيغة ثانية"},
      {c1:'take the medicine',c2:'ياخذ / يشرب الدواء',ar:'العبارة اللي نقولها للمريض عشان ياخذ دواه'},
    ],
    examples:[
      {s:"What's wrong? — My throat is sore.",tr:'ما المشكلة؟ — حلقي ملتهب.',ar:"نسأل عن العرض بـ What's wrong؟",ok:true},
      {s:"What's the matter? — My head hurts.",tr:'ماذا بك؟ — رأسي يؤلمني.',ar:'صيغة ثانية لنفس السؤال',ok:true},
      {s:'You need to take the medicine.',tr:'يجب أن تأخذ الدواء.',ar:'take the medicine = ياخذ الدواء',ok:true},
      {s:'What wrong with you?',wrong:'What wrong',right:"What's wrong",tr:"ناقص is — الصحيح What's wrong؟ لا What wrong؟",ok:false},
    ]
  }
],
l2:[
  {
    title:'There is / There are', ar:'وجود شيء — يوجد / توجد',
    rule:'نستخدم There is مع الاسم المفرد، و There are مع الاسم الجمع، للتعبير عن وجود شيء في مكان.',
    parts:[{"t":"There is","d":"مع الاسم المفرد. مثال: There is a book on the table."},{"t":"There are","d":"مع الاسم الجمع. مثال: There are three books on the table."}],
    check:{q:'_______ a mirror on the wall.',o:['There is','There are','Is there','Are there'],a:0,en:'mirror is singular → There is',ar:'mirror مفرد → There is'},
    compare:[
      {c1:'Is there a toilet in the bathroom?',c2:'Yes, there is.',ar:'toilet مفرد → is'},
      {c1:'Are there towels in the bathroom?',c2:'Yes, there are.',ar:'towels جمع → are'},
    ],
    examples:[
      {s:'There is a sink in the bathroom.',tr:'يوجد حوض في الحمام.',ar:'sink مفرد → There is',ok:true},
      {s:'There are some towels on the wall.',tr:'توجد بعض المناشف على الحائط.',ar:'towels جمع → There are',ok:true},
      {s:'There is towels in the bathroom.',wrong:'is',right:'are',tr:'towels جمع، فيجب أن نستخدم are لا is.',ok:false},
    ]
  },
  {
    title:'Some / Any', ar:'some بالإثبات، any بالسؤال والنفي',
    rule:'نستخدم some في الجمل المثبتة، و any في الأسئلة والنفي.',
    parts:[{"t":"some","d":"في الجمل المثبتة. مثال: I have some water."},{"t":"any","d":"في الأسئلة والنفي. مثال: Do you have any water? / I don't have any water."}],
    check:{q:"I don't have _______ shampoo.",o:['some','any','a','the'],a:1,en:'negative sentence → any',ar:'جملة منفية → any'},
    compare:[
      {c1:'Do you have any soap?',c2:'Yes, I have some.',ar:'سؤال → any، جواب مثبت → some'},
      {c1:'Do you have any milk?',c2:"No, I don't have any.",ar:'سؤال ونفي → any بالاثنين'},
    ],
    examples:[
      {s:'I have some sugar at home.',tr:'عندي بعض السكر في البيت.',ar:'جملة مثبتة → some',ok:true},
      {s:"We don't have any butter.",tr:'ما عندنا زبدة.',ar:'جملة منفية → any',ok:true},
      {s:'I have any sugar.',wrong:'any',right:'some',tr:'الجملة مثبتة (ليست نفياً ولا سؤالاً) — نستخدم some.',ok:false},
    ]
  },
  {
    title:'a few / a little / a lot of / lots of', ar:'الكمية — معدود وغير معدود',
    rule:'مع الأسماء المعدودة (تُجمع: towels, eggs) استخدم a few. مع غير المعدودة (ما تُجمع: sugar, water) استخدم a little. أما a lot of / lots of فتصلح مع الاثنين.',
    parts:[
      {t:'a few',d:'بضع / عدد قليل من — مع الأسماء المعدودة (تُجمع). مثال: a few apples = بضع تفاحات.'},
      {t:'a little',d:'قليل من — مع الأسماء غير المعدودة (لا تُجمع). مثال: a little water = قليل من الماء.'},
      {t:'a lot of / lots of',d:'الكثير من — تصلح مع المعدود وغير المعدود. مثال: lots of apples / lots of water.'},
    ],
    check:{q:'I need _______ eggs for the cake.',o:['a little','a few','much','any'],a:1,en:'eggs is a count noun (plural) → a few',ar:'eggs اسم معدود (يُجمع) → a few'},
    compare:[
      {c1:'towels — اسم معدود',c2:'a few towels',ar:'اسم معدود → a few'},
      {c1:'sugar — اسم غير معدود',c2:'a little sugar',ar:'اسم غير معدود → a little'},
    ],
    examples:[
      {s:'I want to buy a few toothbrushes.',tr:'أريد أن أشتري بعض فرش الأسنان.',ar:'toothbrushes معدود → a few',ok:true},
      {s:'We have a little butter.',tr:'عندنا قليل من الزبدة.',ar:'butter غير معدود → a little',ok:true},
      {s:'I need a little eggs.',wrong:'a little',right:'a few',tr:'eggs معدود (يُجمع) — نستخدم a few لا a little.',ok:false},
    ]
  },
  {
    title:'Can (Possibility)', ar:'can للتعبير عن إمكانية أو خيار',
    rule:'نستخدم can هنا مو للقدرة، بل للتعبير عن خيار متاح — إذا فيه أكثر من طريقة أو مكان ممكن.',
    check:{q:'_______ I get shampoo at the drugstore?',o:['Do','Am','Can','Will'],a:2,en:'can = asking about a possible option',ar:'can = سؤال عن خيار متاح'},
    compare:[
      {c1:'Can I drive to Dallas?',c2:'Yes, you can. You can also fly.',ar:'can = فيه أكثر من خيار ممكن'},
    ],
    examples:[
      {s:'You can get shampoo at the drugstore.',tr:'تستطيع أن تُحضر شامبو من الصيدلية.',ar:'can = خيار متاح',ok:true},
      {s:"You can't drive to Honolulu. You can only fly.",tr:'لا تستطيع الوصول إلى هونولولو بالسيارة، فقط بالطائرة.',ar:"can't = غير ممكن، can only = الخيار الوحيد",ok:true},
      {s:'Can I to drive to Dallas?',wrong:'to drive',right:'drive',tr:'بعد can نستخدم الفعل مجرد بدون to.',ok:false},
    ]
  }
],
l3:[
  {
    title:'Talking about the Future — will / won’t', ar:'المستقبل بـ will، والنفي بـ won’t',
    rule:'نستخدم will + الفعل الأصلي للتعبير عن المستقبل — will ثابت مع كل الضمائر (ما تتغيّر شكلها). نختصر will إلى ’ll، ونختصر will not إلى won’t.',
    check:{q:"No, he _______. He'll be in class.",o:["won't","will","isn't","doesn't"],a:0,en:"won't = will not",ar:'won’t = will + not (اختصار النفي)'},
    compare:[
      {c1:'I will call.',c2:"I'll call.",ar:'will = ’ll (اختصار)'},
      {c1:'She will not go.',c2:"She won't go.",ar:'will not = won’t'},
    ],
    examples:[
      {s:'I will call you tonight.',tr:'سأتصل بك الليلة.',ar:'will + الفعل الأصلي = المستقبل',ok:true},
      {s:"I'll call you tonight.",tr:'سأتصل بك الليلة (اختصار).',ar:'I’ll = I will',ok:true},
      {s:"She won't be at school tomorrow.",tr:'لن تكون في المدرسة غداً.',ar:'won’t = will not',ok:true},
      {s:'She wills not go.',wrong:'wills',right:'will',tr:'will ثابت مع كل الضمائر — لا تضيف s حتى مع he/she/it.',ok:false},
    ]
  },
  {
    title:'Yes/No Questions with will', ar:'أسئلة نعم/لا بـ will',
    rule:'نسوي سؤال نعم/لا بـ will بتقديم will قبل الفاعل: will + الفاعل + الفعل؟ الجواب القصير: Yes, ضمير + will. / No, ضمير + won’t.',
    check:{q:'_______ Janet see the doctor tomorrow?',o:['Will','Do','Is','Does'],a:0,en:'Yes/no future question starts with Will',ar:'سؤال المستقبل نعم/لا يبدأ بـ Will'},
    compare:[
      {c1:'He will be at the library.',c2:'Will he be at the library?',ar:'قدّم will قبل الفاعل he لتكوين السؤال'},
      {c1:'Will he go to class?',c2:"Yes, he will. / No, he won't.",ar:'الجواب القصير: will أو won’t بس'},
    ],
    examples:[
      {s:'Will you make a reservation?',tr:'ستحجز؟',ar:'Will + فاعل + فعل = سؤال',ok:true},
      {s:'Will they arrive tonight?',tr:'سيصلون الليلة؟',ar:'Will قبل الفاعل they',ok:true},
      {s:'Yes, they will.',tr:'نعم، سيصلون.',ar:'جواب قصير: will بس، بدون تكرار الفعل',ok:true},
      {s:'Do you will go?',wrong:'Do you will',right:'Will you',tr:'ما نستخدم Do مع will — will نفسها تتقدّم على الفاعل.',ok:false},
    ]
  },
  {
    title:'Information Questions with will', ar:'أسئلة معلومات بـ will (Who/What/Where...)',
    rule:'نحط أداة السؤال (Who, What, Where, When, Why, How) قبل will مباشرة: أداة السؤال + will + الفاعل + الفعل؟',
    check:{q:'_______ will you make a reservation?',o:['When','Is','Do','Will'],a:0,en:'Wh-word + will + subject + verb',ar:'أداة سؤال + will + فاعل + فعل'},
    compare:[
      {c1:'Dorothy will arrive tomorrow.',c2:'When will Dorothy arrive?',ar:'أداة السؤال + will + الفاعل + الفعل'},
      {c1:'Who will arrive tomorrow?',c2:'Dorothy will arrive tomorrow.',ar:'Who يسأل عن الفاعل نفسه'},
    ],
    examples:[
      {s:'Where will you fly?',tr:'أين ستطير (تسافر)؟',ar:'Where + will + فاعل + فعل',ok:true},
      {s:'Who will meet Wanda for lunch?',tr:'من سيقابل واندا على الغداء؟',ar:'Who = يسأل عن الفاعل',ok:true},
      {s:'When she will arrive?',wrong:'she will',right:'will she',tr:'يجب will قبل الفاعل في السؤال، لا بعده.',ok:false},
    ]
  },
  {
    title:'Future Time Expressions', ar:'تعبيرات الوقت المستقبلية — next / tomorrow / in',
    rule:'نستخدم next قبل (year, month, week, weekend, Saturday...)، وtomorrow قبل (morning, afternoon, evening, night)، وin قبل مدة زمنية (in a week, in two days) للتعبير عن وقت مستقبلي.',
    parts:[{"t":"next","d":"قبل (year, month, week, weekend, Saturday...). مثال: next week = الأسبوع القادم."},{"t":"tomorrow","d":"قبل (morning, afternoon, evening, night). مثال: tomorrow morning = صباح الغد."},{"t":"in","d":"قبل مدة زمنية. مثال: in two days = بعد يومين."}],
    check:{q:'I will study the lesson tomorrow _______.',o:['evening','next','in','week'],a:0,en:'tomorrow + part of day (evening)',ar:'tomorrow + جزء من اليوم'},
    compare:[
      {c1:'next',c2:'month, week, year, weekend, Saturday',ar:'next + وحدة زمنية قادمة'},
      {c1:'tomorrow',c2:'morning, afternoon, evening, night',ar:'tomorrow + جزء من اليوم'},
      {c1:'in',c2:'two minutes, an hour, four days, a week',ar:'in + مدة = بعد مرور هالمدة'},
    ],
    examples:[
      {s:'We will meet Jim tomorrow morning.',tr:'سنقابل جيم غداً صباحاً.',ar:'tomorrow + morning',ok:true},
      {s:'Ben will graduate from school next month.',tr:'بن سيتخرج من المدرسة الشهر القادم.',ar:'next + month',ok:true},
      {s:'The plane will arrive in an hour.',tr:'الطائرة ستصل خلال ساعة.',ar:'in + مدة زمنية',ok:true},
      {s:'I will see you in tomorrow.',wrong:'in tomorrow',right:'tomorrow',tr:'tomorrow لا تحتاج in قبلها.',ok:false},
    ]
  }
],
l4:[
  {
    title:'Using articles — a, an, and the', ar:'a وan للمرة الأولى، the للمرة الثانية',
    rule:'نستخدم a أو an لما نذكر شيء لأول مرة (والسامع ما يعرفه بعد) — an قبل حرف علة. نستخدم the لما نرجع نذكر نفس الشيء مرة ثانية (صار معروف للسامع).',
    parts:[{"t":"a / an","d":"لما نذكر الشيء لأول مرة (السامع ما يعرفه بعد). an قبل حرف علة. مثال: I saw a dog. / an apple."},{"t":"the","d":"لما نرجع نذكر نفس الشيء (صار معروفًا). مثال: The dog was big."}],
    check:{q:'Gary bought a new car on Tuesday. Gary had to take _______ car to a mechanic on Friday.',o:['a','an','the','some'],a:2,en:'Second mention of the same thing takes the',ar:'ذكر ثاني لنفس الشيء ياخذ the'},
    compare:[
      {c1:'Look! I bought a new car.',c2:'I had to take the car to a mechanic.',ar:'a = أول ذكر، the = نفس السيارة (صارت معروفة)'},
    ],
    examples:[
      {s:'I bought a jacket and a shirt. The jacket is blue.',tr:'اشتريت جاكيت وقميص. الجاكيت أزرق.',ar:'a لأول ذكر، the للرجوع لنفس الشيء',ok:true},
      {s:'I had a sandwich and a cup of coffee. The coffee was bad.',tr:'أكلت ساندويتش وشربت قهوة. القهوة كانت سيئة.',ar:'the coffee = نفس القهوة المذكورة قبل',ok:true},
      {s:'I bought a car. I had to take a car to a mechanic.',wrong:'a car',right:'the car',tr:'ثاني مرة نذكر نفس السيارة، نستخدم the لا a.',ok:false},
    ]
  },
  {
    title:'Many vs Much', ar:'many مع المعدود، much مع غير المعدود',
    rule:'نستخدم many مع الأسماء المعدودة (تُجمع: friends, things)، وmuch مع الأسماء غير المعدودة (ما تُجمع: food, coffee). much نادرًا تُستخدم بالجمل المثبتة.',
    parts:[{"t":"many","d":"مع الأسماء المعدودة (تُجمع: friends, things). مثال: many friends."},{"t":"much","d":"مع الأسماء غير المعدودة (لا تُجمع: food, coffee). مثال: much coffee. وغالبًا في النفي والسؤال."}],
    check:{q:'They don’t need _______ cheese for the sandwiches.',o:['many','much','a','the'],a:1,en:'cheese is a noncount noun → much',ar:'cheese اسم غير معدود → much'},
    compare:[
      {c1:'many friends — اسم معدود',c2:'much food — اسم غير معدود',ar:'friends تُجمع → many، food ما تُجمع → much'},
    ],
    examples:[
      {s:'We don’t have a lot of friends among the students.',tr:'ليس عندنا الكثير من الأصدقاء وسط الطلاب.',ar:'friends معدود، a lot of تصلح مع الاثنين',ok:true},
      {s:'Did Mark buy lots of things at the store?',tr:'مارك اشترى أشياء كثيرة من المحل؟',ar:'things معدود → many/lots of',ok:true},
      {s:'Do you have much friends?',wrong:'much',right:'many',tr:'friends اسم معدود (يُجمع) — نستخدم many لا much.',ok:false},
    ]
  },
  {
    title:'How many vs How much', ar:'How many مع المعدود، How much مع غير المعدود',
    rule:'نسأل بـ How many + اسم معدود جمع (How many dishes?)، وHow much + اسم غير معدود (How much coffee?) للسؤال عن الكمية.',
    parts:[{"t":"How many","d":"مع اسم معدود جمع. مثال: How many dishes? = كم صحن؟"},{"t":"How much","d":"مع اسم غير معدود. مثال: How much coffee? = كم قهوة؟"}],
    check:{q:'_______ coffee do you want?',o:['How many','How much','How','What'],a:1,en:'coffee is noncount → How much',ar:'coffee غير معدود → How much'},
    compare:[
      {c1:'How many dishes did you wash?',c2:'I washed 30 dishes.',ar:'dishes معدود → How many'},
      {c1:'How much coffee did you drink?',c2:'I drank a lot.',ar:'coffee غير معدود → How much'},
    ],
    examples:[
      {s:'How many cups of coffee did you drink?',tr:'كم فنجان قهوة شربت؟',ar:'cups معدودة → How many',ok:true},
      {s:'How much sugar did he put in his tea?',tr:'كم سكر وضع في شايه؟',ar:'sugar غير معدود → How much',ok:true},
      {s:'How much children are in that room?',wrong:'How much',right:'How many',tr:'children اسم معدود (جمع) — نستخدم How many لا How much.',ok:false},
    ]
  },
  {
    title:'Have to / Don’t have to', ar:'have to للالتزام، don’t have to = مو ضروري',
    rule:'نستخدم have to (أو has to مع he/she/it) للتعبير عن التزام أو واجب. نستخدم don’t have to (أو doesn’t have to) لما الشي مو ضروري — مو نفس معنى must not (ممنوع).',
    parts:[{"t":"have to / has to","d":"التزام أو واجب (has to مع he/she/it). مثال: I have to study."},{"t":"don't have to / doesn't have to","d":"الشيء غير ضروري (لك حرية الاختيار). مثال: You don't have to come."},{"t":"must not","d":"ممنوع تمامًا — انتبه: مختلفة عن have to. مثال: You must not smoke here."}],
    check:{q:"It's not necessary to have an ID card to see a movie. You _______ have an ID card.",o:['must','can','have to',"don't have to"],a:3,en:"not necessary means don't have to",ar:"مو ضروري = don't have to"},
    compare:[
      {c1:'I have to go to class.',c2:'He has to go to class.',ar:'has to مع he/she/it، have to مع الباقي'},
      {c1:'I have to have an ID card.',c2:'I don’t have to live in the city.',ar:'don’t have to = مو ضروري، مو ممنوع'},
    ],
    examples:[
      {s:'We have to pass the book quiz.',tr:'يجب أن نجتاز اختبار الكتاب.',ar:'have to = التزام',ok:true},
      {s:'We don’t have to pay any money.',tr:'لسنا مضطرين لدفع أي نقود.',ar:"don't have to = مو ضروري",ok:true},
      {s:'She don’t have to wear a coat.',wrong:'don’t',right:'doesn’t',tr:'she تأخذ doesn’t لا don’t.',ok:false},
    ]
  }
]
};


// ═══════════════════════════════════════
// EVALUATION EXERCISES (اختبر) — EXACT FROM BOOK
// ═══════════════════════════════════════
const EE={
l1:[
  {q:'The _______ month of the year is December.',o:['large','long','last'],a:2,en:'December is the last month of the year',ar:'last = الأخير — ديسمبر آخر شهر بالسنة',tr:'آخر شهر في السنة ديسمبر.'},
  {q:'My brother has a big family. They have a _______ car.',o:['large','long','last'],a:0,en:'A big family needs a large car',ar:'large = كبير الحجم، يناسب عائلة كبيرة',tr:'أخي عنده عائلة كبيرة. عندهم سيارة كبيرة.'},
  {q:"Kim didn't hurt her right leg. She hurt her _______ leg.",o:['short','one','left'],a:2,en:'Not right → left (the opposite side)',ar:'عكس right = left',tr:'كيم لم تُوجع رجلها اليمنى. أوجعت رجلها اليسرى.'},
  {q:'Your tongue is inside your _______.',o:['neck','mouth','ear'],a:1,en:'The tongue is inside the mouth',ar:'اللسان داخل الفم',tr:'لسانك داخل فمك.'},
  {q:'You wear your shoes on your _______.',o:['toes','foot','feet'],a:2,en:'Shoes (plural) go on feet (plural)',ar:'shoes جمع → feet جمع',tr:'تلبس حذاءك على قدميك.'},
  {q:'My throat was _______ yesterday. I took medicine. My throat is okay today.',o:['sore','large','next'],a:0,en:'A sore throat needs medicine',ar:'sore = مؤلم/ملتهب، لذلك أخذ دواء',tr:'حلقي كان ملتهباً أمس. أخذت دواء. حلقي بخير اليوم.'},
  {q:"Lewis: _______ with Peter? Joan: He's sick.",o:["What's wrong","What hurts","Which is the matter"],a:0,en:"What's wrong? is the standard question for asking about someone's health",ar:"What's wrong? = وش المشكلة؟ (سؤال عن الصحة)",tr:'ما المشكلة مع بيتر؟ — هو مريض.'},
  {q:'Did Jack hurt his arm _______ his leg?',o:['one','of','or'],a:2,en:'or connects two choices in a question',ar:'or يربط بين خيارين بالسؤال',tr:'جاك أوجع ذراعه أم رجله؟'},
  {q:'_______ arm did he hurt?',o:['When','Which','Where'],a:1,en:'Which asks about a choice',ar:'Which للسؤال عن الاختيار',tr:'أي ذراع أوجع؟'},
  {q:'Anne: Which car do you like? Karen: I like the blue _______.',o:['one','of','or'],a:0,en:"one replaces the noun 'car'",ar:'one = بدل تكرار car',tr:'آن: أي سيارة تحبين؟ كارين: أحب السيارة الزرقاء.'},
  {q:'The paragraph is _______ the muscles of the body.',o:['about','of','one'],a:0,en:'about = on the topic of',ar:'about = بخصوص/عن',tr:'الفقرة عن عضلات الجسم.'},
  {q:'That book has 1,345 pages. It is a _______ book.',o:['short','long','last'],a:1,en:'Many pages = a long book',ar:'صفحات كثيرة = كتاب طويل',tr:'هذا الكتاب فيه 1345 صفحة. هو كتاب طويل.'},
],
l2:[
  {q:'Is there a desk in the room? — Yes, _______.',o:['they is','there is','they are','it is'],a:1,en:'The answer matches the question form: Is there → there is',ar:'الجواب يطابق صيغة السؤال: Is there → there is',tr:'هل يوجد مكتب في الغرفة؟ — نعم، يوجد.'},
  {q:"Do you have some coffee? — No, _______.",o:['I didn’t','I don’t have some','I have any',"I don't have any"],a:3,en:'any is used in negative statements',ar:'any تُستخدم في النفي',tr:'عندك قهوة؟ — لا، ما عندي.'},
  {q:"_______ you walk home? — No, I can't.",o:['Can','May','Must','Did'],a:0,en:"The short answer “I can't” matches the question “Can”",ar:'الجواب I can\'t يطابق السؤال Can',tr:'تستطيع أن تمشي إلى البيت؟ — لا، لا أستطيع.'},
  {q:'There are _______ combs.',o:['a little','any','a few','a lot'],a:2,en:'combs is a count noun (plural) → a few',ar:'combs اسم معدود جمع → a few',tr:'يوجد بعض الأمشاط.'},
  {q:"You need a haircut. — I know, I'm going to the _______.",o:['commissary','barber shop','grocery store','drug store'],a:1,en:'You get a haircut at the barber shop',ar:'تحصل على قصة شعر في محل الحلاقة',tr:'تحتاج قصة شعر. — أعرف، ذاهب إلى محل الحلاقة.'},
  {q:'Monica needs _______ sugar.',o:['a few','any','a little','a lots of'],a:2,en:'sugar is a noncount noun → a little',ar:'sugar اسم غير معدود → a little',tr:'مونيكا تحتاج قليل من السكر.'},
  {q:"How old is Alicia? — It's her _______ birthday.",o:['sixteen','sixteenth','sixteen years','sixteen years old'],a:1,en:'Birthday takes the ordinal number: sixteenth',ar:'birthday تاخذ العدد الترتيبي: sixteenth',tr:'كم عمر أليشا؟ — عمرها 16.'},
  {q:'_______ any dry towels? — Yes, there are.',o:['Was','Is there','Do you','Are there'],a:3,en:'towels is plural → Are there',ar:'towels جمع → Are there',tr:'هل يوجد مناشف جافة؟ — نعم، يوجد.'},
  {q:'Jean needed _______ a haircut.',o:['have','got','to do','to get'],a:3,en:'needed + to get (infinitive)',ar:'needed + to get (مصدر)',tr:'جين احتاجت أن تحصل على قصة شعر.'},
  {q:"What is Sue doing? — She's _______ her hair.",o:['drying','rinse','shampoo','is combing'],a:0,en:"She's + verb-ing",ar:"She's + فعل+ing",tr:'ماذا تفعل سو؟ — تجفف شعرها.'},
  {q:'John washed his face with a _______.',o:['shampoo','washcloth','water','rinse'],a:1,en:'You wash your face with a washcloth',ar:'تغسل وجهك بقطعة قماش (washcloth)',tr:'جون غسل وجهه بقطعة قماش.'},
  {q:"Mitch doesn't have _______ money.",o:['no','many','any','lots'],a:2,en:"doesn't have + any (negative)",ar:"doesn't have + any (نفي)",tr:'ميتش ليس عنده أي نقود.'},
],
l3:[
  {q:"_______ your coat and put on your gloves. It's very cold outside.",o:['Lock','Button','Turn on','Sharpen'],a:1,en:'Button (verb) = fasten with buttons',ar:'Button (فعل) = يزرّر',tr:'زرّر معطفك والبس قفازاتك. الجو بالخارج بارد جداً.'},
  {q:'My classes end on Tuesday. My _______ will be on Friday.',o:['reservation','gate','graduation','ticket'],a:2,en:'graduation = the school finishing ceremony',ar:'graduation = حفل التخرّج',tr:'صفوفي تنتهي يوم الثلاثاء. تخرّجي سيكون يوم الجمعة.'},
  {q:"Jerry is 30 years old. He's _______ to school next year. He wants to learn about computers.",o:['graduating','going back','meeting','turning'],a:1,en:'going back = returning to school after time away',ar:'going back = يرجع لمكان كان فيه قبل',tr:'جيري عمره 30 سنة. سيرجع إلى المدرسة السنة القادمة. يريد أن يتعلم عن الكمبيوتر.'},
  {q:'A: Is the television on in your room? B: No, I _______.',o:['turned it on','turned it off','changed it','pulled it'],a:1,en:'No matches the opposite of on: turned it off',ar:'الجواب No يطابق: طفّاها (turned it off)',tr:'التلفزيون يعمل في غرفتك؟ — لا، أطفأته.'},
  {q:"It's too cold. I need a shirt with long _______.",o:['sleeves','legs','buttons','zippers'],a:0,en:'sleeves = the parts of a shirt covering the arms',ar:'sleeves = أكمام القميص',tr:'الجو بارد جدًا. أحتاج قميص بأكمام طويلة.'},
  {q:'A: How much were the _______ for the game? B: They were $7 each.',o:['buttons','flights','tickets','customers'],a:2,en:'tickets = what you buy to attend a game',ar:'tickets = تذاكر للحضور',tr:'بكم كانت تذاكر المباراة؟ — كانت 7 دولار للواحدة.'},
  {q:'A: The music _______. B: Yes, Tom turned off the radio.',o:['returned','came back','moved','stopped'],a:3,en:'stopped matches turned off the radio',ar:'stopped = توقّفت (طفّى الراديو)',tr:'الموسيقى توقفت. — نعم، توم أطفأ الراديو.'},
  {q:'A: Can I turn off the TV? B: Yes, _______ the small button on your right.',o:['lock','push','call','pack'],a:1,en:'push = press a button',ar:'push = اضغط/ادفع الزر',tr:'أستطيع أن أطفئ التلفزيون؟ — نعم، اضغط الزر الصغير على يمينك.'},
  {q:'A: When is your sister _______ from her trip? B: Next month.',o:['coming back','stopping','going back','packing'],a:0,en:'coming back = returning from a trip',ar:'coming back = ترجع من رحلة',tr:'متى سترجع أختك من رحلتها؟ — الشهر القادم.'},
  {q:'A: Which knob do I _______ to change the music on the radio? B: The one on the right.',o:['lock','sharpen','turn','stop'],a:2,en:'turn a knob = rotate it to adjust',ar:'turn = تلف/تدير المقبض',tr:'أي مقبض أدير لكي أغيّر الموسيقى في الراديو؟ — الذي على اليمين.'},
  {q:'A: Which _______ are you flying? B: I’m flying Northwest.',o:['airplane','airport','airline','arrival'],a:2,en:'airline = the company you fly with',ar:'airline = شركة الطيران',tr:'أي شركة طيران ستسافر فيها؟ — سأسافر مع Northwest.'},
  {q:"I'll come back _______ one week.",o:['off','from','on','in'],a:3,en:'in + duration = after that time passes',ar:'in + مدة = بعد مرور هالمدة',tr:'سأرجع خلال أسبوع.'},
],
l4:[
  {q:'Lt Gregg: Do you _______ study tonight? Lt Yates: Yes, I have a test tomorrow.',o:['must','have to','will','much'],a:1,en:'have to + verb expresses obligation, matches a Do-question',ar:'have to = التزام، تتماشى مع سؤال Do',tr:'هل يجب أن تذاكر الليلة؟ — نعم، عندي اختبار غداً.'},
  {q:'Who _______ the sandwich? It was good.',o:['dialed','had to','made','brushed'],a:2,en:'made = past tense of make',ar:'made = ماضي make',tr:'من صنع الساندويتش؟ كان لذيذاً.'},
  {q:'Is there a pencil _______ all those pens on the desk?',o:['among','many','between','much'],a:0,en:'among is used with three or more things',ar:'among = مع ثلاثة أشياء أو أكثر',tr:'هل يوجد قلم رصاص وسط كل هذه الأقلام التي على المكتب؟'},
  {q:'Four quarts make a(n) _______.',o:['pound','ounce','gallon','bottle'],a:2,en:'4 quarts = 1 gallon',ar:'٤ كوارت = جالون واحد',tr:'أربع كوارت تساوي جالوناً.'},
  {q:'2000 lbs. make a _______.',o:['tube','kg','half a pound','ton'],a:3,en:'2000 lbs = 1 ton',ar:'٢٠٠٠ رطل = طن واحد',tr:'2000 رطل تساوي طناً.'},
  {q:'Do you want cake or _______ for dessert?',o:['cheese','carrots','cookies','corn'],a:2,en:'cookies is a dessert food',ar:'cookies نوع من الحلى',tr:'تريد كيك أم كوكيز للتحلية؟'},
  {q:'Did you have a _______ of pie?',o:['slice','glass','plate','fork'],a:0,en:'a slice of pie is the standard collocation',ar:'a slice of = تعبير ثابت مع pie',tr:'أكلت شريحة فطيرة؟'},
  {q:'_______ you work in Canada next year?',o:['Make','Has to','Will','Have to'],a:2,en:'next year signals future tense with will',ar:'next year → المستقبل بـ will',tr:'ستعمل في كندا السنة القادمة؟'},
  {q:'Squash and corn are _______.',o:['potatoes','sandwiches','cans','vegetables'],a:3,en:'squash and corn are vegetables',ar:'الكوسا والذرة من الخضار',tr:'الكوسا والذرة خضار.'},
  {q:'This is an old telephone. You have to _______ the numbers.',o:['make','makes','dial','dials'],a:2,en:'have to + base verb, no s: dial',ar:'have to + فعل مجرد بدون s: dial',tr:'هذا تلفون قديم. يجب أن تطلب الأرقام.'},
  {q:'A lot of children in this school are _______ 10 and 14 years old.',o:['many','much','between','among'],a:2,en:'between + two numbers (a range)',ar:'between + رقمين (مدى)',tr:'كثير من الأطفال في هذه المدرسة أعمارهم بين 10 و14 سنة.'},
  {q:"I can't find a _______ for the soup.",o:['bowl','fork','can','glass'],a:0,en:'soup is served in a bowl',ar:'الشوربة تُقدَّم بوعاء',tr:'لم أجد وعاء للشوربة.'},
  {q:"It's not necessary to have an ID card to see a movie. You _______ have an ID card.",o:['must','can','have to',"don't have to"],a:3,en:"not necessary means don't have to",ar:"مو ضروري = don't have to",tr:'ليس ضرورياً أن تُحضر بطاقة هوية لكي تشاهد فيلماً. لست مضطراً أن تُحضر بطاقة هوية.'},
  {q:'There isn’t _______ salt in the soup.',o:['a','many','much','the'],a:2,en:'salt is a noncount noun → much',ar:'salt اسم غير معدود → much',tr:'لا يوجد ملح كثير في الشوربة.'},
  {q:'Will you buy _______ milk, please?',o:['a gallon of','a tube of','half a pound of','a dozen'],a:0,en:'milk is measured in gallons',ar:'الحليب يُقاس بالجالون',tr:'هل ستشتري جالون حليب، من فضلك؟'},
  {q:'We need glasses, forks, knives, napkins, and _______.',o:['cans','receivers','bars','plates'],a:3,en:'plates complete the table setting',ar:'plates تكمل أدوات المائدة',tr:'نحتاج أكواب، شوك، سكاكين، مناديل، وصحون.'},
  {q:'Do you have a _______ of paper for me to write a telephone number?',o:['slice','dial','dish','piece'],a:3,en:'a piece of paper is the standard collocation',ar:'a piece of = تعبير ثابت مع paper',tr:'عندك ورقة أكتب فيها رقم هاتف؟'},
  {q:'I needed _______ eggs to make these 2 cakes.',o:['half dozen','a half of dozen','half a dozen','half dozen of'],a:2,en:'half a dozen is the correct phrase',ar:'half a dozen هي الصيغة الصحيحة',tr:'احتجت نصف دزينة بيض لكي أصنع هاتين الكيكتين.'},
  {q:"She'll buy a _______ of toothpaste.",o:['ton','bottle','bowl','tube'],a:3,en:'toothpaste comes in a tube',ar:'معجون الأسنان يجي بأنبوب',tr:'ستشتري أنبوب معجون أسنان.'},
  {q:'They went to see _______ movie yesterday.',o:['first','it','a','two'],a:2,en:'a movie = an unspecified movie',ar:'a movie = فيلم غير محدد',tr:'ذهبوا ليشاهدوا فيلماً أمس.'},
]
};

// ═══════════════════════════════════════
// FINAL EXAM (الاختبار النهائي الشامل)
// كل أسئلة اختبر بالدروس 1-4 مجمّعة (نفس طريقة Book 4)
// ═══════════════════════════════════════
const FINAL=dedupe_by_q([
  ...EE.l1,
  ...EE.l2,
  ...EE.l3,
  ...EE.l4,
]);
EE.final=FINAL;

// ═══════════════════════════════════════
// REVIEW 5 (قسم المراجعة) — EXERCISE Z, منفصل عن الاختبار الشامل
// ═══════════════════════════════════════
const REVIEW=[
  {q:"Don't _______ that bowl of soup. It's very hot.",o:['point to','touch','turn off','comb'],a:1,en:'hot soup → warning not to touch',ar:'شوربة حارة → تحذير من اللمس',tr:'لا تلمس وعاء الشوربة ذاك. هو حار جدًا.'},
  {q:'Thomas ate a dozen cookies before lunch. A dozen = _______.',o:['six','eight','twelve','twenty'],a:2,en:'a dozen = 12',ar:'دزينة = ١٢',tr:'توماس أكل دزينة كوكيز قبل الغداء. دزينة = اثنا عشر.'},
  {q:'The sandwich has one slice of cheese _______ two slices of bread.',o:['between','among','before','at'],a:0,en:'between = in the middle of two things',ar:'between = بين شيئين',tr:'الساندويتش فيه شريحة جبن بين شريحتين خبز.'},
  {q:'I went to the doctor. I had a _______ arm.',o:['only','right','sore','long'],a:2,en:'sore = painful',ar:'sore = مؤلم',tr:'ذهبت إلى الطبيب. كان عندي ذراع مؤلمة.'},
  {q:'Where can I _______ these pencils?',o:['lock','turn','push','sharpen'],a:3,en:'pencils need sharpening',ar:'الأقلام تحتاج بري',tr:'أين أستطيع أن أبري هذه الأقلام؟'},
  {q:'First, you wash your clothes. Then, you _______ the clothes in cold water.',o:['rinse','pull','dry','soap'],a:0,en:'laundry sequence: wash then rinse',ar:'ترتيب الغسيل: تغسل ثم تشطف',tr:'أولاً تغسل ملابسك. ثم تشطفها بماء بارد.'},
  {q:'I ate a big bowl of chocolate ice cream. Big = _______.',o:['long','short','large','ounce'],a:2,en:'big = large (size)',ar:'big = large (بمعنى الحجم)',tr:'أكلت وعاء كبير آيسكريم شوكولاتة. Big = large.'},
  {q:'January the twentieth = _______.',o:['Jan 12th','Jan 20th','Jan 2nd','Jan 30th'],a:1,en:'twentieth = 20th',ar:'twentieth = العشرون (٢٠)',tr:'يناير العشرون = 20 يناير.'},
  {q:'There were lots of grammar questions on the test. Lots of = _______.',o:['a little','a few','many','some'],a:2,en:'lots of = many (with count nouns)',ar:'lots of = many (مع المعدود)',tr:'كان هناك أسئلة قواعد كثيرة في الاختبار. Lots of = many.'},
  {q:'Your father can _______ a haircut for $6.00 at that barbershop.',o:['gets','got','getting','get'],a:3,en:'can + base verb: get',ar:'can + فعل مجرد: get',tr:'أبوك يستطيع أن يحصل على قصة شعر بـ6 دولار في محل الحلاقة ذاك.'},
  {q:'I _______ for London next Tuesday.',o:['departing','departed','was depart','will depart'],a:3,en:'next Tuesday signals future tense with will',ar:'next Tuesday → المستقبل بـ will',tr:'سأغادر إلى لندن الثلاثاء القادم.'},
  {q:"There's _______ onion on the teacher's desk.",o:['a','any','an','many'],a:2,en:'onion starts with a vowel sound → an',ar:'onion يبدأ بصوت حرف علة → an',tr:'توجد بصلة على مكتب المعلم.'},
  {q:'Is your flight a one-way flight?',o:["No, it's an airline flight.","No, I will fly with my son.","No, it's round-trip.","Yes, it leaves from gate one."],a:2,en:'the opposite of one-way is round-trip',ar:'عكس one-way هو round-trip',tr:'رحلتك اتجاه واحد؟ — لا، هي ذهاب وعودة.'},
  {q:'Two days ago, I _______ a reservation with the travel agent.',o:['make','made','am making','will make'],a:1,en:'two days ago signals past tense: made',ar:'two days ago → ماضي: made',tr:'قبل يومين، عملت حجزاً مع وكيل السفر.'},
  {q:'Do we have to take a test this week?',o:["No, we don't have to.","No, we have to.","No, we don't has to.","No, we doesn't has to."],a:0,en:"short answer with we: don't have to",ar:"جواب قصير مع we: don't have to",tr:'هل يجب أن نؤدي اختباراً هذا الأسبوع؟ — لا، لسنا مضطرين.'},
  {q:'Our bus leaves at 7:45. We will return around 2:30. Return = _______.',o:['come back','put on','arrive','depart'],a:0,en:'return = come back',ar:'return = يرجع (come back)',tr:'الباص يغادر الساعة 7:45. سنرجع حوالي 2:30. Return = come back.'},
  {q:'How much coffee do you want?',o:["I don't want no coffee.","I don't want some coffee.","I don't want much coffee.","I don't want the coffee."],a:2,en:'coffee is a noncount noun → much',ar:'coffee غير معدود → much',tr:'كم قهوة تريد؟ — لا أريد قهوة كثيرة.'},
  {q:'Is there milk on the table?',o:['Yes, they are.','Yes, there is.','Yes, it is.','Yes, there are.'],a:1,en:'milk is noncount → there is',ar:'milk غير معدود → there is',tr:'هل يوجد حليب على الطاولة؟ — نعم، يوجد.'},
  {q:'You have a lot of friends at school.',o:['Yes, I have many friends.','Yes, I have much friends.','Yes, I have a little friends.','Yes, I have few friends.'],a:0,en:'friends is countable → many',ar:'friends معدود → many',tr:'عندك أصدقاء كثيرون في المدرسة. — نعم، عندي أصدقاء كثيرون.'},
  {q:'Will the tests be long tests every day?',o:["No, they aren't.","No, there weren't.","No, they will.","No, they won't."],a:3,en:'short answer to a will-question: won’t',ar:'جواب قصير لسؤال will: won’t',tr:'ستكون الاختبارات طويلة كل يوم؟ — لا، لن تكون.'},
];
EE.review=REVIEW;

// ═══════════════════════════════════════
// LISTENING (YouTube videos)
// ═══════════════════════════════════════
const YT_VIDEOS=[
  {id:'Q8l4Pu8HjIw',t:'Quiz A',s:'استماع وقراءة مع الحل'},
  {id:'dATRyfVvPMo',t:'Quiz B',s:'استماع وقراءة مع الحل'}
];

// ═══════════════════════════════════════
// SPELLING — write from listening (by lesson)
// ═══════════════════════════════════════
const SPELL_LESSONS=[
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 1 — جسم الإنسان والصحة',w:[
    {e:'head',a:'الرأس',em:'🤕'},{e:'hand',a:'اليد',em:'✋'},{e:'leg',a:'الساق',em:'🦵'},
    {e:'nose',a:'الأنف',em:'👃'},{e:'ear',a:'الأذن',em:'👂'},{e:'hurt',a:'يؤلم',em:'🤕'},
    {e:'sore',a:'ملتهب / مؤلم',em:'🤒'}]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 2 — أدوات الحمام والتسوّق',w:[
    {e:'soap',a:'الصابون',em:'🧼'},{e:'towel',a:'المنشفة',em:'🧺'},{e:'sink',a:'المغسلة',em:'🚰'},
    {e:'mirror',a:'المرآة',em:'🪞'},{e:'comb',a:'المشط',em:'🪮'},{e:'sugar',a:'السكر',em:'🧁'},
    {e:'salt',a:'الملح',em:'🧂'}]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 3 — السفر والحجوزات',w:[
    {e:'trip',a:'رحلة',em:'🧳'},{e:'ticket',a:'التذكرة',em:'🎫'},{e:'flight',a:'رحلة طيران',em:'✈️'},
    {e:'key',a:'المفتاح',em:'🔑'},{e:'gate',a:'بوابة',em:'🚪'},{e:'twin',a:'توأم',em:'👯'}]},
  {t:'<svg class="svgico" aria-hidden="true"><use href="#icon-book"></use></svg> Lesson 4 — التسوق والطبخ',w:[
    {e:'cake',a:'كيك',em:'🎂'},{e:'bowl',a:'وعاء',em:'🥣'},{e:'fork',a:'شوكة',em:'🍴'},
    {e:'plate',a:'صحن',em:'🍽️'},{e:'onion',a:'بصل',em:'🧅'},{e:'lettuce',a:'خس',em:'🥬'},
    {e:'tomato',a:'طماطم',em:'🍅'}]}
];

// ═══════════════════════════════════════
// ROUTING MANIFEST
// ═══════════════════════════════════════
const SCREENS=['home','lscreen','ytscreen','lcscreen','fscreen','rscreen','spscreen','mkscreen'];
const SCREEN_NAMES={home:'الرئيسية',lscreen:'درس',ytscreen:'الاستماع',lcscreen:'فهم المسموع',fscreen:'الاختبار النهائي',rscreen:'المراجعة',spscreen:'الإملاء',mkscreen:'مراجعة الأخطاء'};
