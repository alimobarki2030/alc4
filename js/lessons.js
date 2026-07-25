// ═══════════════════════════════════════════
// ALL EVALUATION QUESTIONS — EXACT FROM BOOK
// ═══════════════════════════════════════════
const EE = {
// LESSON 1 — EE-3 to EE-6 (Exercise E & F)
l1:[
  {q:"Jane _______ baseball yesterday.",o:["is playing","playing","played","plays"],a:2,en:"yesterday → past tense → played",ar:"أمس = الماضي البسيط"},
  {q:"Tom _______ in a restaurant downtown.",o:["ends","likes","visits","cooks"],a:3,en:"He works as a cook in a restaurant",ar:"يطبخ في المطعم = وظيفته"},
  {q:"Tom _______ in Chicago last year.",o:["lives","lived","living","is living"],a:1,en:"last year = past tense → lived",ar:"العام الماضي = ماضٍ"},
  {q:"Please _______ after you cook.",o:["did","clean up","live","end"],a:1,en:"clean up = tidy/organize",ar:"نظّف / رتّب"},
  {q:"Class starts at 0730 and _______ at 1435.",o:["plays","lives","ends","works"],a:2,en:"ends = finishes at that time",ar:"ينتهي"},
  {q:"Sally goes _______ on the bus every day.",o:["city","downtown","yesterday","library"],a:1,en:"downtown = city center",ar:"وسط المدينة"},
  {q:"Did Bill play _______ yesterday afternoon?",o:["TV","Dallas","football","show"],a:2,en:"You play a sport like football",ar:"تلعب رياضة مثل كرة القدم"},
  {q:"What time does class _______?",o:["visit","start","clean","again"],a:1,en:"class starts = begins",ar:"الدرس يبدأ"},
  {q:"Did you eat at a _______ on Sunday?",o:["show","hospital","restaurant","dispensary"],a:2,en:"You eat at a restaurant",ar:"تأكل في مطعم"},
  {q:"Bob: Do you live in San Antonio? Lou: No, I am _______ here.",o:["visiting","starting","watching","cleaning"],a:0,en:"visiting = here temporarily",ar:"زائر = موجود مؤقتاً"},
  {q:"Sam: Did you watch the baseball game on TV? Tom: Yes, _______.",o:["I watch","I did","I did watched","I watching"],a:1,en:"Short answer: Yes, I did.",ar:"الإجابة القصيرة"},
  {q:"Kay: Did Paul play baseball yesterday? May: No, he _______.",o:["not did","I did","did not","no did plays"],a:2,en:"No, he did not. = didn't",ar:"لا، هو لم يفعل"},
  {q:"Bob visited Chicago last year, and he wants to go _______ this year.",o:["again","long","like","basketball"],a:0,en:"again = one more time",ar:"مرة أخرى"},
  {q:"_______ you clean up your room?",o:["Did","Where","What","Are"],a:0,en:"Did = question word for simple past",ar:"Did = أداة السؤال في الماضي"},
  {q:"Houston is a _______ in Texas.",o:["game","town","city","sport"],a:2,en:"Houston is large → city, not a small town",ar:"هيوستن كبيرة → city، وليست بلدة صغيرة (town)"},
  {q:"There are eleven players on a football _______.",o:["game","sport","team","play"],a:2,en:"11 players = a team",ar:"11 لاعب = فريق"},
  {q:"My brother is a doctor. He _______ in a big hospital downtown.",o:["cleans","works","visits","ends"],a:1,en:"works = his job location",ar:"يعمل هناك"},
  {q:"On Saturday, let's play _______.",o:["basketball","restaurant","town","visit"],a:0,en:"You play basketball",ar:"تلعب كرة السلة"},
  {q:"Ben: Did you watch the new _______ on TV last night? Tim: No, I went downtown.",o:["ball","show","city","restaurant"],a:1,en:"watch a show on TV",ar:"تشاهد برنامجاً على التلفاز"},
  {q:"Mr. Gregg is at the office from 7:00 a.m. to 7:00 p.m. He works _______.",o:["all night","all year long","all day long","every day"],a:2,en:"7am to 7pm = all day long",ar:"من الصباح للمساء = طول اليوم"},
],
// LESSON 2 — EE-10 to EE-12 (Exercise H)
l2:[
  {q:"Carol is a new major. Last year she was a _______.",o:["sergeant","second lieutenant","first lieutenant","captain"],a:3,en:"Major=O-4. One rank below = Captain O-3",ar:"الرائد O-4، أقل منه مباشرة = النقيب O-3"},
  {q:"The stripes on a sergeant's uniform are the _______.",o:["name tag","rank","names","ID card"],a:1,en:"Stripes = rank insignia",ar:"الشرائط تدل على الرتبة"},
  {q:"John is in the Army. He lives on a _______.",o:["naval base","military rank","post","base"],a:2,en:"Army → post (a soldier lives on an Army post)",ar:"الجيش → post = ثكنة (معسكر الجيش)"},
  {q:"Tim can't smoke. He doesn't have a _______.",o:["radio","report","cigarette","book"],a:2,en:"You smoke a cigarette",ar:"تدخّن سيجارة"},
  {q:"I didn't know that airman's name. She didn't have her _______ on.",o:["cap","name tag","uniform","rank"],a:1,en:"Name tag has your name on it",ar:"بطاقة الاسم تحمل اسمك"},
  {q:"Airmen always _______ officers.",o:["salute","report","bring","begin"],a:0,en:"Military rule: salute officers",ar:"التحية العسكرية للضباط"},
  {q:"My brother is a captain. He's _______.",o:["a civilian","in the military","a rank","on time"],a:1,en:"Captain = military rank → in the military",ar:"النقيب رتبة عسكرية → في الجيش"},
  {q:"Sailors live on _______ base.",o:["an Army","an Air Force","a naval","a post"],a:2,en:"Navy → naval base",ar:"البحرية → قاعدة بحرية"},
  {q:"Sandra is in the Air Force. She lives on a _______.",o:["base","naval base","military","post"],a:0,en:"Air Force personnel live on a base",ar:"سلاح الجو → قاعدة"},
  {q:"Mike Russ is an enlisted man. He's a _______.",o:["civilian","second lieutenant","major","sergeant"],a:3,en:"Enlisted man = non-officer rank like sergeant",ar:"المجنّد = رتبة مثل الرقيب"},
  {q:"My _______ has my picture and my name on it.",o:["uniform","suit","ID card","cap"],a:2,en:"ID card has name and photo",ar:"بطاقة الهوية = صورة + اسم"},
  {q:"Col Smith _______ a pack of cigarettes every day.",o:["salutes","smokes","lives","reports"],a:1,en:"smokes a pack",ar:"يدخّن علبة"},
  {q:"Class begins at 7:30 every day. It started at 7:40 this morning. This morning class _______.",o:["started on time","began early","didn't start on time","had 10 students"],a:2,en:"7:40 ≠ 7:30 → did not start on time",ar:"7:40 ≠ 7:30 → لم يبدأ في الوقت"},
  {q:"Put your _______ on your head.",o:["name tag","stripe","post","cap"],a:3,en:"You put a cap on your head",ar:"تضع القبعة على رأسك"},
  {q:"I'm tired! Let's take a _______.",o:["rank","break","pack","ID card"],a:1,en:"take a break = rest",ar:"خذ استراحة = ارتح"},
  {q:"Please _______ your books to class tomorrow.",o:["salute","report","bring","buy"],a:2,en:"bring = carry with you",ar:"أحضر = احمل معك"},
  {q:"I _______ to the teacher yesterday.",o:["speak","am speaking","to speak","spoke"],a:3,en:"yesterday = past; speak → spoke",ar:"أمس = ماضٍ؛ speak→spoke شاذة"},
  {q:"It's 8:50 p.m. It's _______.",o:["0850","0810","2010","2050"],a:3,en:"8:50 pm → 8+12=20 → 2050",ar:"8:50 مساءً = 2050"},
  {q:"I _______ class early yesterday.",o:["leaved","went out","left","gone from"],a:2,en:"leave → left (irregular)",ar:"leave→left فعل شاذ"},
  {q:"Sgt. Jones _______ to Los Angeles last week.",o:["is flying","flew","flies","fly"],a:1,en:"last week = past; fly → flew",ar:"الأسبوع الماضي → flew"},
],
// LESSON 3 — EE-14 to EE-18 (Exercise C & G)
l3:[
  {q:"Which has the past tense sound /t/?",o:["saluted","listened","smoked","indented"],a:2,en:"smoked → /smokt/ (k is voiceless → /t/)",ar:"k مهموسة → صوت /t/"},
  {q:"Which has the past tense sound /əd/?",o:["repeated","spelled","answered","asked"],a:0,en:"repeated → ends in t → /əd/",ar:"تنتهي بـ t → /əd/"},
  {q:"Which has the past tense sound /d/?",o:["talked","studied","watched","wanted"],a:1,en:"studied → vowel sound → /d/",ar:"حرف علة → /d/"},
  {q:"What time did you _______ this morning?",o:["woke up","wakes up","wake up","waking up"],a:0,en:"Past answer: woke up",ar:"الجواب في الماضي = woke up"},
  {q:"Pvt Jones can _______ English, French, Japanese, and German.",o:["speak","speaks","spoke","speaking"],a:0,en:"can + base verb",ar:"can + فعل مجرد"},
  {q:"I wore my new pants yesterday. (pants = ?)",o:["ties","socks","blouses","slacks"],a:3,en:"pants = slacks",ar:"بنطلون = slacks"},
  {q:"May I go to the library?",o:["No, he didn't.","Yes, it is.","No, you must.","Yes, you may."],a:3,en:"May I? → Yes, you may.",ar:"May I? → Yes, you may."},
  {q:"We wear _______.",o:["books","clothes","reports","posts"],a:1,en:"We wear clothes",ar:"نلبس ملابس"},
  {q:"I must _______ tonight.",o:["to study","study","studies","studying"],a:1,en:"must + base verb (no to)",ar:"must + فعل مجرد"},
  {q:"These words are in alphabetical order:",o:["colonel, captain, cap, cigarette","pants, paragraph, pastel, pattern","shirt, skirt, shoes, she","coat, contraction, clothes, can"],a:1,en:"pants(pa-n), paragraph(pa-r), pastel(pa-s), pattern(pa-t)",ar:"pa-n → pa-r → pa-s → pa-t = ترتيب صحيح"},
  {q:"That man is an officer. Pvt Jones _______ salute officers.",o:["may","must not","must","didn't"],a:2,en:"Military rule: must salute officers always",ar:"يجب تحية الضباط دائماً"},
  {q:"I don't know French. This means:",o:["I can speak French","I must speak French","I can't speak French","I mustn't speak French"],a:2,en:"don't know = can't speak",ar:"لا أعرف = لا أستطيع التحدث"},
  {q:"I like to sleep late on Saturday, but my children get up early. They are always _______ before I am.",o:["again","great","well","awake"],a:3,en:"awake = not sleeping",ar:"صاحٍ = غير نائم"},
  {q:"It's cold. Where is my _______?",o:["coat","book","football","cigarette"],a:0,en:"You wear a coat when it's cold",ar:"تلبس المعطف عند البرد"},
  {q:"My son is not awake. He's _______.",o:["awake","bored","asleep","angry"],a:2,en:"Not awake = asleep",ar:"غير صاحٍ = نائم"},
  {q:"Yesterday, Mr. Carter _______ a suit to class.",o:["wear","wears","wore","wearing"],a:2,en:"yesterday = past; wear → wore",ar:"أمس = ماضٍ؛ wear→wore شاذة"},
  {q:"I'm very tired. I am going to _______ in lab this afternoon.",o:["put on","fall asleep","take off","wake up"],a:1,en:"fall asleep = go to sleep",ar:"fall asleep = يغفو"},
  {q:"I can't swim very _______.",o:["again","well","true","all"],a:1,en:"swim well = with skill",ar:"يسبح بشكل جيد"},
  {q:"My sister bought two _______ at the store.",o:["hat","dress","belts","scarf"],a:2,en:"two = plural → belts",ar:"اثنان = جمع → belts"},
  {q:"I must not write with a pen on the quiz. This means:",o:["I can write with a pen on the quiz","I am writing with a pen on the quiz","I cannot write with a pen on the quiz","I write with a pen on the quiz"],a:2,en:"must not = cannot",ar:"يجب ألّا = لا يمكن"},
],
// LESSON 4 — EE-21 to EE-22 (Exercise F)
l4:[
  {q:"John works at a store. He's a _______.",o:["sailor","soldier","clerk","doctor"],a:2,en:"store worker = clerk",ar:"عامل متجر = clerk"},
  {q:"Ms. Moss _______ her students with English.",o:["works","reads","costs","helps"],a:3,en:"teacher helps students",ar:"المعلمة تساعد الطلاب"},
  {q:"Today is Monday. _______ is Wednesday.",o:["Tomorrow","The day before yesterday","The day after tomorrow","Yesterday"],a:2,en:"Monday + 2 days = Wednesday",ar:"الاثنين + يومين = الأربعاء"},
  {q:"It's December, and it's cold in the United States. It's _______.",o:["summer","fall","winter","spring"],a:2,en:"December = winter",ar:"ديسمبر = الشتاء"},
  {q:"Autumn and fall are the _______.",o:["different","same","months","days"],a:1,en:"Same season, two names",ar:"نفس الفصل، اسمان"},
  {q:"Dan: I bought a new shirt yesterday. Sue: _______?",o:["What do you want?","What day is tomorrow?","What color is it?","What must I do?"],a:2,en:"Natural question about new clothing = What color?",ar:"السؤال الطبيعي عن ملابس جديدة = ما لونها؟"},
  {q:"It's very _______ in here. I want to take off my sweater.",o:["cold","cool","warm","white"],a:2,en:"Take off sweater → too warm inside",ar:"يخلع سترته → الجو دافئ جداً"},
  {q:"I like to listen to _______ on the radio.",o:["music","headphones","dance","spring"],a:0,en:"listen to music on the radio",ar:"تستمع للموسيقى على الراديو"},
  {q:"Catherine listens to CDs on her _______.",o:["telephone","television","headphones","radio"],a:2,en:"headphones for CDs",ar:"سماعات = للـ CDs"},
  {q:"Tom: _______ Bob: I went to the BX.",o:["What did you read?","Where were you last night?","When did you come to DLI?","Who ate my banana?"],a:1,en:"Bob answers where he was → Where were you?",ar:"بوب أجاب عن مكانه → أين كنت؟"},
  {q:"Which has the past tense sound /d/?",o:["wanted","selected","marked","shaved"],a:3,en:"shaved → /d/ sound",ar:"shaved = صوت /d/"},
  {q:"Which has the past tense sound /t/?",o:["memorized","reviewed","visited","walked"],a:3,en:"walked → /wɔːkt/ (k voiceless → /t/)",ar:"walked ← k مهموسة → /t/"},
  {q:"Which has the past tense sound /əd/?",o:["repeated","worked","danced","played"],a:0,en:"repeated → ends in t → /əd/",ar:"repeated تنتهي بـ t → /əd/"},
]
};

// All 80 questions combined for final test (l1:20, l2:20, l3:20, l4:13 + 7 extra)
const FINAL = [
  ...EE.l1.map((q,i)=>({...q,lbl:'L1-'+(i+1)})),
  ...EE.l2.map((q,i)=>({...q,lbl:'L2-'+(i+1)})),
  ...EE.l3.map((q,i)=>({...q,lbl:'L3-'+(i+1)})),
  ...EE.l4.map((q,i)=>({...q,lbl:'L4-'+(i+1)})),
  // Additional L3 from EE-17/18
  {q:"These words are in alphabetical order:",o:["colonel, captain, cap, cigarette","pants, paragraph, pastel, pattern","shirt, skirt, shoes, she","coat, contraction, clothes, can"],a:1,en:"pants(pa-n), paragraph(pa-r), pastel(pa-s), pattern(pa-t)",ar:"ترتيب أبجدي صحيح",lbl:'L3-21'},
  {q:"Do not smoke cigarettes in this building. This means:",o:["You may smoke in this building","You must not smoke in this building","You sometimes smoke in this building","You can smoke in this building"],a:1,en:"Do not = must not",ar:"لا تفعل = يجب ألّا تفعل",lbl:'L3-22'},
  {q:"A suit is slacks and a _______.",o:["hat","jacket","shoe","dress"],a:1,en:"suit = jacket + slacks",ar:"البدلة = جاكيت + بنطلون",lbl:'L3-23'},
  // Additional L4
  {q:"Pvt Jones can _______ four languages.",o:["speak","speaks","spoke","speaking"],a:0,en:"can + base verb",ar:"can + فعل مجرد",lbl:'L4-14'},
  {q:"What time did you _______ this morning?",o:["woke up","wakes up","wake up","waking up"],a:0,en:"Answer: woke up (past)",ar:"الجواب في الماضي = woke up",lbl:'L4-15'},
  {q:"I'm very tired. I am going to _______ in lab this afternoon.",o:["put on","fall asleep","take off","wake up"],a:1,en:"fall asleep = go to sleep",ar:"fall asleep = يغفو",lbl:'L4-16'},
  {q:"My sister bought two _______ at the store.",o:["hat","dress","belts","scarf"],a:2,en:"two = plural → belts",ar:"اثنان = جمع → belts",lbl:'L4-17'},
];

// DRAG-DROP data per lesson
const DD = {
l1:[
  {sent:"Jane _____ baseball yesterday.",blank:"played",words:["played","plays","playing","liked"],tr:"لعبت جين البيسبول أمس.",ar:"أمس = ماضٍ → played"},
  {sent:"Paul didn't _____ New York last year.",blank:"visit",words:["visit","visited","visits","visiting"],tr:"لم يزُر بول نيويورك العام الماضي.",ar:"didn't + الفعل الأصلي"},
  {sent:"Tom _____ in a restaurant downtown.",blank:"cooks",words:["cooks","cooked","cooking","cook"],tr:"يطبخ توم في مطعم بوسط المدينة.",ar:"حقيقة ثابتة = مضارع"},
  {sent:"Did you eat at a restaurant _____ Sunday?",blank:"on",words:["on","in","at","for"],tr:"هل أكلت في مطعم يوم الأحد؟",ar:"on = مع أيام الأسبوع"},
  {sent:"Class starts at 0730 and _____ at 1435.",blank:"ends",words:["ends","ended","ending","end"],tr:"يبدأ الدرس 0730 وينتهي 1435.",ar:"حقيقة ثابتة = مضارع"},
  {sent:"Sam asked: Did you watch the game? Tom: Yes, I _____.",blank:"did",words:["did","do","watched","watch"],tr:"سأل سام: هل شاهدت المباراة؟ توم: نعم، فعلت.",ar:"إجابة قصيرة لـ Did"},
  {sent:"Bob visited Chicago last year and wants to go _____ this year.",blank:"again",words:["again","back","more","also"],tr:"زار بوب شيكاغو العام الماضي ويريد الذهاب مرة أخرى هذا العام.",ar:"again = مرة أخرى"},
  {sent:"There are eleven players on a football _____.",blank:"team",words:["team","game","sport","play"],tr:"يوجد أحد عشر لاعباً في فريق كرة القدم.",ar:"11 لاعب = فريق"},
  {sent:"_____ you clean up your room?",blank:"Did",words:["Did","Were","Are","Have"],tr:"هل نظّفت غرفتك؟",ar:"Did = سؤال الماضي"},
  {sent:"Houston is a big _____ in Texas.",blank:"city",words:["city","town","game","sport"],tr:"هيوستن مدينة كبيرة في تكساس.",ar:"مدينة كبيرة"},
],
l2:[
  {sent:"A soldier works on an Army _____.",blank:"post",words:["post","base","place","camp"],tr:"يعمل الجنديّ في ثكنة الجيش (Army post).",ar:"الجيش → post = ثكنة"},
  {sent:"A sailor works on a _____ base.",blank:"naval",words:["naval","army","air force","military"],tr:"يعمل البحّار في قاعدة بحرية.",ar:"البحرية → naval base"},
  {sent:"An airman works on an Air Force _____.",blank:"base",words:["base","post","place","camp"],tr:"يعمل جنديّ سلاح الجو في قاعدة جوية.",ar:"سلاح الجو → base"},
  {sent:"Airmen always _____ officers.",blank:"salute",words:["salute","report","bring","begin"],tr:"يُحيّي جنود سلاح الجو الضباط دائماً.",ar:"salute = يُحيّي عسكرياً"},
  {sent:"She didn't have her name _____ on.",blank:"tag",words:["tag","card","plate","board"],tr:"لم تكن ترتدي بطاقة اسمها.",ar:"name tag = بطاقة الاسم"},
  {sent:"I _____ to the teacher yesterday.",blank:"spoke",words:["spoke","speak","speaking","spoken"],tr:"تحدّثت إلى المعلّم أمس.",ar:"speak → spoke (شاذ)"},
  {sent:"Sgt. Jones _____ to LA last week.",blank:"flew",words:["flew","flied","flown","fly"],tr:"سافر الرقيب جونز جواً إلى لوس أنجلوس الأسبوع الماضي.",ar:"fly → flew (شاذ)"},
  {sent:"I _____ class early yesterday.",blank:"left",words:["left","leaved","gone","went"],tr:"غادرت الصف مبكراً أمس.",ar:"leave → left (شاذ)"},
  {sent:"It's 8:50 p.m. In military time it's _____.",blank:"2050",words:["2050","0850","2010","0810"],tr:"الساعة 8:50 مساءً — بالتوقيت العسكري 2050.",ar:"مساءً: 8+12=20"},
  {sent:"Please _____ your books to class tomorrow.",blank:"bring",words:["bring","take","carry","put"],tr:"أحضر كتبك إلى الصف غداً.",ar:"bring = أحضر"},
],
l3:[
  {sent:"I wore my new pants yesterday. Pants = _____.",blank:"slacks",words:["slacks","socks","ties","blouses"],tr:"ارتديت بنطلوني الجديد أمس. pants = slacks.",ar:"pants = slacks"},
  {sent:"May I go to the library? Yes, you _____.",blank:"may",words:["may","can","must","will"],tr:"هل تسمح لي بالذهاب إلى المكتبة؟ نعم، يمكنك.",ar:"May I? → Yes, you may."},
  {sent:"I must _____ tonight.",blank:"study",words:["study","to study","studies","studying"],tr:"يجب أن أدرس الليلة.",ar:"must + الفعل الأصلي"},
  {sent:"Soldiers must wear _____ to class.",blank:"uniforms",words:["uniforms","suits","clothes","belts"],tr:"يجب على الجنود لبس الزي العسكري إلى الصف.",ar:"must + الفعل الأصلي"},
  {sent:"Do not smoke = You must _____ smoke.",blank:"not",words:["not","never","don't","no"],tr:"ممنوع التدخين = يجب ألّا تدخّن.",ar:"Do not = must not"},
  {sent:"A suit is slacks and a _____.",blank:"jacket",words:["jacket","hat","shoe","dress"],tr:"البدلة = بنطلون + جاكيت.",ar:"suit = jacket + slacks"},
  {sent:"smoked has the past tense sound _____.",blank:"/t/",words:["/t/","/d/","/əd/","/ed/"],tr:"كلمة smoked تُنطق لاحقتها /t/.",ar:"k مهموسة → /t/"},
  {sent:"studied has the past tense sound _____.",blank:"/d/",words:["/d/","/t/","/əd/","/ed/"],tr:"كلمة studied تُنطق لاحقتها /d/.",ar:"حرف علة → /d/"},
  {sent:"repeated has the past tense sound _____.",blank:"/əd/",words:["/əd/","/t/","/d/","/ed/"],tr:"كلمة repeated تُنطق لاحقتها /əd/.",ar:"تنتهي بـ t → /əd/"},
  {sent:"I can't swim very _____.",blank:"well",words:["well","good","great","fine"],tr:"لا أستطيع السباحة جيداً.",ar:"can't + well"},
],
l4:[
  {sent:"Autumn and fall are the _____ season.",blank:"same",words:["same","different","cool","warm"],tr:"Autumn و fall هما نفس الفصل (الخريف).",ar:"نفس الفصل، اسمان"},
  {sent:"December, January, February are _____ months.",blank:"winter",words:["winter","spring","fall","summer"],tr:"ديسمبر ويناير وفبراير أشهر الشتاء.",ar:"الشتاء ❄️"},
  {sent:"March, April, May are _____ months.",blank:"spring",words:["spring","summer","fall","winter"],tr:"مارس وأبريل ومايو أشهر الربيع.",ar:"الربيع 🌸"},
  {sent:"June, July, August are _____ months.",blank:"summer",words:["summer","spring","fall","winter"],tr:"يونيو ويوليو وأغسطس أشهر الصيف.",ar:"الصيف ☀️"},
  {sent:"September, October, November are _____ months.",blank:"fall",words:["fall","spring","summer","winter"],tr:"سبتمبر وأكتوبر ونوفمبر أشهر الخريف.",ar:"الخريف 🍂"},
  {sent:"Today is Monday. The day after tomorrow is _____.",blank:"Wednesday",words:["Wednesday","Tuesday","Thursday","Friday"],tr:"اليوم الاثنين. بعد الغد هو الأربعاء.",ar:"بعد الغد = +يومين"},
  {sent:"I like to listen to _____ on the radio.",blank:"music",words:["music","headphones","dance","spring"],tr:"أحبّ الاستماع إلى الموسيقى على الراديو.",ar:"listen to music"},
  {sent:"Catherine listens to CDs on her _____.",blank:"headphones",words:["headphones","radio","television","telephone"],tr:"تستمع كاثرين للأقراص على سماعاتها.",ar:"سماعات = للـ CDs"},
  {sent:"It's very warm. I want to take _____ my sweater.",blank:"off",words:["off","on","out","up"],tr:"الجو دافئ جداً. أريد خلع سترتي.",ar:"take off = يخلع"},
  {sent:"shaved has the past tense sound _____.",blank:"/d/",words:["/d/","/t/","/əd/","/ed/"],tr:"كلمة shaved تُنطق لاحقتها /d/.",ar:"v مجهورة → /d/"},
]
};

// WORD ORDER data per lesson — رتّب الكلمات لتكوين جملة صحيحة
const WO = {
l1:[
  {words:["Jane","played","baseball","yesterday"],ans:"Jane played baseball yesterday.",tr:"لعبت جين البيسبول أمس.",ar:"yesterday = ماضٍ → played"},
  {words:["Tom","didn't","clean","his","room","last","Saturday"],ans:"Tom didn't clean his room last Saturday.",tr:"لم ينظّف توم غرفته السبت الماضي.",ar:"didn't + الفعل الأصلي بدون -ed"},
  {words:["Did","you","watch","the","game","?"],ans:"Did you watch the game ?",tr:"هل شاهدت المباراة؟",ar:"Did + الفعل الأصلي في السؤال"},
  {words:["Bob","visited","Chicago","last","year"],ans:"Bob visited Chicago last year.",tr:"زار بوب شيكاغو العام الماضي.",ar:"last year = ماضٍ → visited"},
  {words:["There","are","eleven","players","on","a","football","team"],ans:"There are eleven players on a football team.",tr:"يوجد أحد عشر لاعباً في فريق كرة القدم.",ar:"team = الفريق"},
  {words:["She","didn't","visit","New","York","last","month"],ans:"She didn't visit New York last month.",tr:"لم تزُر نيويورك الشهر الماضي.",ar:"didn't + visit (بدون -ed)"},
  {words:["Did","Bill","play","football","yesterday","afternoon","?"],ans:"Did Bill play football yesterday afternoon ?",tr:"هل لعب بيل كرة القدم مساء أمس؟",ar:"Did + الفعل المجرد"},
  {words:["Houston","is","a","big","city","in","Texas"],ans:"Houston is a big city in Texas.",tr:"هيوستن مدينة كبيرة في تكساس.",ar:"مدينة كبيرة"},
],
l2:[
  {words:["A","soldier","works","on","an","Army","post"],ans:"A soldier works on an Army post.",tr:"يعمل الجندي في ثكنة الجيش.",ar:"Army → post"},
  {words:["Airmen","always","salute","officers"],ans:"Airmen always salute officers.",tr:"يُحيّي جنود سلاح الجو الضباط دائماً.",ar:"salute = يُحيّي عسكرياً"},
  {words:["I","spoke","to","the","teacher","yesterday"],ans:"I spoke to the teacher yesterday.",tr:"تحدّثت إلى المعلّم أمس.",ar:"speak → spoke (شاذ)"},
  {words:["Sgt.","Jones","flew","to","LA","last","week"],ans:"Sgt. Jones flew to LA last week.",tr:"سافر الرقيب جونز جواً الأسبوع الماضي.",ar:"fly → flew (شاذ)"},
  {words:["I","left","class","early","yesterday"],ans:"I left class early yesterday.",tr:"غادرت الصف مبكراً أمس.",ar:"leave → left (شاذ)"},
  {words:["Please","bring","your","books","to","class"],ans:"Please bring your books to class.",tr:"أحضر كتبك إلى الصف.",ar:"bring = أحضر"},
  {words:["She","didn't","have","her","name","tag","on"],ans:"She didn't have her name tag on.",tr:"لم تكن ترتدي بطاقة اسمها.",ar:"name tag = بطاقة الاسم"},
  {words:["It's","8:50","p.m.","In","military","time","it's","2050"],ans:"It's 8:50 p.m. In military time it's 2050.",tr:"الساعة 8:50 مساءً = 2050 بالتوقيت العسكري.",ar:"8+12=20 → 2050"},
],
l3:[
  {words:["Students","must","listen","to","the","teacher"],ans:"Students must listen to the teacher.",tr:"يجب على الطلاب الاستماع للمعلّم.",ar:"must + فعل مجرد"},
  {words:["You","must","not","smoke","here"],ans:"You must not smoke here.",tr:"ممنوع التدخين هنا.",ar:"must not = ممنوع"},
  {words:["May","I","go","to","the","library","?"],ans:"May I go to the library ?",tr:"هل تسمح لي بالذهاب إلى المكتبة؟",ar:"May I = طلب إذن رسمي"},
  {words:["I","can't","swim","very","well"],ans:"I can't swim very well.",tr:"لا أستطيع السباحة جيداً.",ar:"can't + well"},
  {words:["Soldiers","must","wear","uniforms","to","class"],ans:"Soldiers must wear uniforms to class.",tr:"يجب على الجنود لبس الزي العسكري.",ar:"must + الفعل الأصلي"},
  {words:["A","suit","is","slacks","and","a","jacket"],ans:"A suit is slacks and a jacket.",tr:"البدلة = بنطلون + جاكيت.",ar:"suit = slacks + jacket"},
  {words:["Pvt","Jones","can","speak","four","languages"],ans:"Pvt Jones can speak four languages.",tr:"يستطيع الجندي جونز التحدث بأربع لغات.",ar:"can + الفعل الأصلي"},
  {words:["Do","not","smoke","=","You","must","not","smoke"],ans:"Do not smoke = You must not smoke.",tr:"ممنوع التدخين = يجب ألا تدخّن.",ar:"Do not = must not"},
],
l4:[
  {words:["Autumn","and","fall","are","the","same","season"],ans:"Autumn and fall are the same season.",tr:"Autumn و fall اسمان لنفس الفصل.",ar:"نفس الفصل، كلمتان"},
  {words:["December","January","and","February","are","winter","months"],ans:"December January and February are winter months.",tr:"ديسمبر ويناير وفبراير أشهر الشتاء.",ar:"الشتاء ❄️"},
  {words:["Today","is","Monday","The","day","after","tomorrow","is","Wednesday"],ans:"Today is Monday The day after tomorrow is Wednesday.",tr:"اليوم الاثنين، بعد الغد الأربعاء.",ar:"بعد الغد = +يومين"},
  {words:["I","like","to","listen","to","music","on","the","radio"],ans:"I like to listen to music on the radio.",tr:"أحبّ الاستماع إلى الموسيقى على الراديو.",ar:"listen to music"},
  {words:["Catherine","listens","to","CDs","on","her","headphones"],ans:"Catherine listens to CDs on her headphones.",tr:"تستمع كاثرين للأقراص على سماعاتها.",ar:"headphones = للـ CDs"},
  {words:["It's","very","warm","I","want","to","take","off","my","sweater"],ans:"It's very warm I want to take off my sweater.",tr:"الجو دافئ، أريد خلع سترتي.",ar:"take off = يخلع"},
  {words:["How","much","does","this","pen","cost","?"],ans:"How much does this pen cost ?",tr:"كم يكلّف هذا القلم؟",ar:"How much + does + cost"},
  {words:["John","works","at","a","store","He's","a","clerk"],ans:"John works at a store He's a clerk.",tr:"يعمل جون في متجر، هو موظف متجر.",ar:"store worker = clerk"},
]
};
const PR = {
l1:[
  {q:"Jane _______ baseball yesterday.",o:["is playing","playing","played","plays"],a:2,en:"yesterday → simple past",ar:"أمس = الماضي"},
  {q:"Tom _______ in Chicago last year.",o:["lives","lived","living","is living"],a:1,en:"last year = past tense",ar:"العام الماضي = ماضٍ"},
  {q:"Please _______ after you cook.",o:["did","clean up","live","end"],a:1,en:"clean up = tidy",ar:"نظّف / رتّب"},
  {q:"Did you eat at a _______ on Sunday?",o:["show","hospital","restaurant","dispensary"],a:2,en:"You eat at a restaurant",ar:"تأكل في مطعم"},
  {q:"Sam: Did you watch the game? Yes, _______.",o:["I watch","I did","I did watched","I watching"],a:1,en:"Short answer: Yes, I did.",ar:"الإجابة القصيرة"},
  {q:"There are eleven players on a football _______.",o:["game","sport","team","play"],a:2,en:"11 players = a team",ar:"11 لاعب = فريق"},
  {q:"Houston is a _______ in Texas.",o:["game","town","city","sport"],a:2,en:"Large → city, not a small town",ar:"كبيرة → city، وليست بلدة صغيرة (town)"},
  {q:"Mr. Gregg works 7am to 7pm. He works _______.",o:["all night","all year long","all day long","every day"],a:2,en:"7am to 7pm = all day long",ar:"من الصباح للمساء"},
],
l2:[
  {q:"Carol is a new major. Last year she was a _______.",o:["sergeant","second lieutenant","first lieutenant","captain"],a:3,en:"Major O-4, below = Captain O-3",ar:"الرائد أقل منه = النقيب"},
  {q:"Sailors live on _______ base.",o:["an Army","an Air Force","a naval","a post"],a:2,en:"Navy → naval base",ar:"البحرية → قاعدة بحرية"},
  {q:"Airmen always _______ officers.",o:["salute","report","bring","begin"],a:0,en:"Military rule",ar:"قاعدة عسكرية"},
  {q:"It's 8:50 p.m. In military time it's _______.",o:["0850","0810","2010","2050"],a:3,en:"8+12=20 → 2050",ar:"8:50 مساءً = 2050"},
  {q:"I _______ to the teacher yesterday.",o:["speak","am speaking","to speak","spoke"],a:3,en:"speak → spoke (irregular)",ar:"speak→spoke شاذة"},
  {q:"I _______ class early yesterday.",o:["leaved","went out","left","gone from"],a:2,en:"leave → left (irregular)",ar:"leave→left شاذة"},
  {q:"Sgt. Jones _______ to Los Angeles last week.",o:["is flying","flew","flies","fly"],a:1,en:"fly → flew (irregular)",ar:"fly→flew شاذة"},
  {q:"My _______ has my picture and my name on it.",o:["uniform","suit","ID card","cap"],a:2,en:"ID card = name + photo",ar:"بطاقة الهوية = صورة + اسم"},
],
l3:[
  {q:"Which has the past tense sound /t/?",o:["saluted","listened","smoked","indented"],a:2,en:"smoked → /smokt/",ar:"smoked = /t/"},
  {q:"Which has the past tense sound /əd/?",o:["repeated","spelled","answered","asked"],a:0,en:"repeated → /əd/",ar:"repeated = /əd/"},
  {q:"Which has the past tense sound /d/?",o:["talked","studied","watched","wanted"],a:1,en:"studied → /d/",ar:"studied = /d/"},
  {q:"May I go to the library?",o:["No, he didn't.","Yes, it is.","No, you must.","Yes, you may."],a:3,en:"May I? → Yes, you may.",ar:"May I? → Yes, you may."},
  {q:"I must _______ tonight.",o:["to study","study","studies","studying"],a:1,en:"must + base verb",ar:"must + فعل مجرد"},
  {q:"A suit is slacks and a _______.",o:["hat","jacket","shoe","dress"],a:1,en:"suit = jacket + slacks",ar:"البدلة = جاكيت + بنطلون"},
  {q:"Do not smoke = You _______ smoke.",o:["may not","must not","cannot not","don't have"],a:1,en:"Do not = must not",ar:"لا تفعل = must not"},
  {q:"I can't swim very _______.",o:["again","well","true","all"],a:1,en:"swim well = with skill",ar:"يسبح بشكل جيد"},
],
l4:[
  {q:"Today is Monday. _______ is Wednesday.",o:["Tomorrow","The day before yesterday","The day after tomorrow","Yesterday"],a:2,en:"Monday + 2 = Wednesday",ar:"الاثنين + يومين = الأربعاء"},
  {q:"Autumn and fall are the _______.",o:["different","same","months","days"],a:1,en:"Same season, two names",ar:"نفس الفصل، اسمان"},
  {q:"It's December, cold in the US. It's _______.",o:["summer","fall","winter","spring"],a:2,en:"December = winter",ar:"ديسمبر = الشتاء"},
  {q:"Catherine listens to CDs on her _______.",o:["telephone","television","headphones","radio"],a:2,en:"headphones for CDs",ar:"سماعات = للـ CDs"},
  {q:"Which has the past tense sound /d/?",o:["wanted","selected","marked","shaved"],a:3,en:"shaved → /d/",ar:"shaved = /d/"},
  {q:"Which has the past tense sound /t/?",o:["memorized","reviewed","visited","walked"],a:3,en:"walked → /t/",ar:"walked = /t/"},
  {q:"Which has the past tense sound /əd/?",o:["repeated","worked","danced","played"],a:0,en:"repeated → /əd/",ar:"repeated = /əd/"},
  {q:"John works at a store. He's a _______.",o:["sailor","soldier","clerk","doctor"],a:2,en:"store worker = clerk",ar:"عامل متجر = clerk"},
]
};


// ═══════════════════════════════════════
// STATE
// ═══════════════════════════════════════
let CL=null,CT='learn',XP=0,STK=0,TANS={},FANS={},built={};
let LP={}; // lesson progress: {l1:{pct, done}, ...} — best score per lesson
let ddSelected=null; // word selected for drag
let RW={}; // grammar-check weakness tracker: {'l1-0':{wrong,right}, ...}

// ═══════════════════════════════════════
// SPEECH
// ═══════════════════════════════════════
function say(t){
  if(!window.speechSynthesis)return;
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(String(t).replace(/\(.*?\)/g,'').trim());
  u.lang='en-US';u.rate=0.82;speechSynthesis.speak(u);
}

// ═══════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════
const SCREENS=['home','lscreen','fscreen','pscreen','ascreen','wscreen','spscreen','tmscreen','ivscreen','ytscreen'];
function show_screen(id){SCREENS.forEach(s=>{const el=document.getElementById(s);if(el)el.style.display=(s===id)?'block':'none';});track_screen(id);}

// ── Analytics: track which section + time spent ──
const SCREEN_NAMES={home:'الرئيسية',lscreen:'درس',fscreen:'الاختبار النهائي',pscreen:'حروف الجر in·on·at',ascreen:'a·an·the',wscreen:'أدوات السؤال WH',spscreen:'الإملاء',tmscreen:'الماضي وكلمات الزمن',ivscreen:'الأفعال الشاذة',ytscreen:'الاستماع'};
let _curScreen=null,_screenStart=0;
function track_screen(id){
  if(typeof gtag!=='function')return;
  const now=Date.now();
  if(_curScreen&&_screenStart){
    const secs=Math.round((now-_screenStart)/1000);
    if(secs>0&&secs<7200)gtag('event','section_time',{section:SCREEN_NAMES[_curScreen]||_curScreen,seconds:secs});
  }
  let name=SCREEN_NAMES[id]||id;
  if(id==='lscreen'&&typeof CL==='string'&&CL)name='درس '+CL.toUpperCase();
  gtag('event','section_view',{section:name});
  _curScreen=id;_screenStart=now;
}
function _flush_screen_time(){
  if(typeof gtag!=='function'||!_curScreen||!_screenStart)return;
  const secs=Math.round((Date.now()-_screenStart)/1000);
  if(secs>0&&secs<7200)gtag('event','section_time',{section:SCREEN_NAMES[_curScreen]||_curScreen,seconds:secs});
  _screenStart=Date.now();
}
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')_flush_screen_time();});
window.addEventListener('pagehide',_flush_screen_time);

// Quizzes stay hidden until the learner clicks "اختبر نفسك"
function reset_quiz(id){
  const q=document.getElementById(id+'-quiz');if(q)q.classList.remove('show');
  const t=document.getElementById(id+'-toggle');if(t)t.style.display='';
}
function reveal_quiz(id){
  const q=document.getElementById(id+'-quiz');if(q)q.classList.add('show');
  const t=document.getElementById(id+'-toggle');if(t)t.style.display='none';
  if(q)q.scrollIntoView({behavior:'smooth',block:'start'});
}

// Shared 4-question concept card: المعنى / متى / مثال / أشهر خطأ
function concept_html(accentTx,borderBd,headerInner,d,block2Extra){
  const exSafe=d.ex.e.replace(/'/g,"\\'"),goodSafe=d.good.replace(/'/g,"\\'");
  return `<div class="prep-detail" style="border-color:${borderBd};padding-top:8px">
    <h3 style="color:${accentTx};margin-bottom:6px">${headerInner}</h3>
    <div class="cblock b-mean"><div class="cblock-h"><span class="cblock-n" style="background:#3B82F6">1</span>💬 المعنى</div>
      <div class="cblock-txt">${d.meaning}</div></div>
    <div class="cblock b-when"><div class="cblock-h"><span class="cblock-n" style="background:#16A34A">2</span>🎯 متى ولماذا؟</div>
      <div class="cblock-txt">${d.when}</div>${block2Extra||''}
      ${d.triggers?`<div class="trig-list">${d.triggers.map(t=>`<div class="trig"><span class="trig-en">${t.e}</span><span class="trig-ar">${t.a}</span></div>`).join('')}</div>`:''}
      ${d.link?`<div class="mind-link">💡 ${d.link}</div>`:''}</div>
    <div class="cblock b-order"><div class="cblock-h"><span class="cblock-n" style="background:#7C3AED">3</span>✍️ مثال</div>
      <div class="order-ex"><span class="en">${d.ex.e}</span><button class="mini-spk" onclick="say('${exSafe}')" aria-label="استمع">🔊</button></div>
      <div class="cblock-txt" style="margin-top:5px">${d.ex.a}</div></div>
    <div class="cblock b-bad"><div class="cblock-h"><span class="cblock-n" style="background:#EA580C">4</span>⚠️ أشهر خطأ للمبتدئين</div>
      <div class="badgood"><span class="bg-x">❌ <span class="en strike">${d.bad}</span></span>
      <span class="bg-ok">✅ <span class="en">${d.good}</span> <button class="mini-spk ok" onclick="say('${goodSafe}')" aria-label="استمع">🔊</button></span></div></div>
  </div>`;
}

function open_lesson(lk){
  CL=lk;TANS={};built={};
  const icon={l1:'🏃',l2:'🎖️',l3:'👕',l4:'🌤️'};
  const title={l1:'Lesson 1 — Sports & Games',l2:"Lesson 2 — He's in the Army",l3:"Lesson 3 — Where Are My Clothes?",l4:'Lesson 4 — Pencils in 10 Colors'};
  const sub={l1:'الرياضة والألعاب',l2:'الحياة العسكرية',l3:'الملابس والقدرات',l4:'الفصول والألوان'};
  show_screen('lscreen');
  const ls=document.getElementById('lscreen');
  ls.scrollIntoView({behavior:'smooth',block:'start'});
  document.getElementById('lh-ico').textContent=icon[lk];
  document.getElementById('lh-ttl').textContent=title[lk];
  document.getElementById('lh-sub').textContent=sub[lk];
  ['learn','practice','drag','test'].forEach(t=>{
    document.getElementById('tab-'+t).classList.toggle('active',t==='learn');
    document.getElementById('ph-'+t).classList.toggle('active',t==='learn');
    document.getElementById('ph-'+t).innerHTML='';
  });
  CT='learn';
  build_learn(lk);
}

function open_final(){
  CL='final';FANS={};
  show_screen('fscreen');
  document.getElementById('fscreen').scrollIntoView({behavior:'smooth',block:'start'});
  build_final();
}

function go_home(){
  show_screen('home');
  window.scrollTo({top:0,behavior:'smooth'});
}

function sw_tab(t){
  CT=t;
  ['learn','practice','drag','test'].forEach(x=>{
    document.getElementById('tab-'+x).classList.toggle('active',x===t);
    document.getElementById('ph-'+x).classList.toggle('active',x===t);
  });
  const lk=CL;
  if(t==='practice'&&!built['pr'+lk]){build_vocab_drill(lk);built['pr'+lk]=1;}
  if(t==='drag'&&!built['dd'+lk]){build_dd(lk);built['dd'+lk]=1;}
  if(t==='test'&&!built['te'+lk]){TANS={};build_quiz('ph-test',EE[lk],'te');built['te'+lk]=1;}
}

// ═══════════════════════════════════════
// BUILD LEARN
// ═══════════════════════════════════════

// ═══════════════════════════════════════
// BUILD LEARN — REDESIGNED
// ═══════════════════════════════════════
const VOCAB = {
l1:[
  {e:'ball',a:'كرة',em:'⚽'},{e:'baseball',a:'البيسبول',em:'⚾'},
  {e:'basketball',a:'كرة السلة',em:'🏀'},{e:'football',a:'كرة القدم الأمريكية',em:'🏈'},
  {e:'soccer',a:'كرة القدم',em:'⚽'},{e:'tennis',a:'التنس',em:'🎾'},
  {e:'sports',a:'رياضة',em:'🏅'},{e:'team',a:'فريق',em:'🤝'},{e:'game',a:'مباراة / لعبة',em:'🎮'},
  {e:'restaurant',a:'مطعم',em:'🍽️'},{e:'show',a:'عرض / برنامج',em:'📺'},
  {e:'downtown',a:'وسط المدينة',em:'🌆'},{e:'city',a:'مدينة',em:'🏙️'},
  {e:'break',a:'استراحة',em:'☕'},{e:'again',a:'مرة أخرى',alt:['إعادة','تكرار','مرة ثانية','مجدداً'],em:'🔁'},
  {e:'clean up',a:'ينظّف / يرتّب',em:'🧹'},{e:'visit',a:'يزور',em:'🗺️'},
],
l2:[
  {e:'Second Lieutenant (2d Lt)',a:'ملازم ثانٍ — O-1',em:'🟡'},
  {e:'First Lieutenant (1st Lt)',a:'ملازم أول — O-2',em:'⬜'},
  {e:'Captain (Capt)',a:'نقيب — O-3',em:'🔲'},
  {e:'Major (Maj)',a:'رائد — O-4',em:'🍃'},
  {e:'Lieutenant Colonel (Lt Col)',a:'مقدّم — O-5',em:'🍂'},
  {e:'Colonel (Col)',a:'عقيد — O-6',em:'🦅'},
  {e:'General (Gen)',a:'لواء — O-7',em:'⭐'},
  {e:'sergeant (Sgt)',a:'رقيب — رتبة أفراد',em:'🎗️'},
  {e:'base',a:'قاعدة عسكرية',em:'🏕️'},{e:'post',a:'ثكنة (معسكر الجيش)',em:'🪖'},
  {e:'naval base',a:'قاعدة بحرية',em:'⚓'},{e:'uniform',a:'الزي العسكري',em:'👔'},
  {e:'name tag',a:'بطاقة الاسم',em:'🪪'},{e:'rank',a:'الرتبة',em:'🎖️'},
  {e:'insignia',a:'الشارة (رمز الرتبة)',em:'🏅'},{e:'stripe',a:'شريط الرتبة',em:'〰️'},
  {e:'salute',a:'يُحيّي عسكرياً',em:'🫡'},{e:'ID card',a:'بطاقة الهوية',em:'🪪'},
  {e:'cap',a:'قبعة عسكرية',em:'🧢'},{e:'cigarette / pack',a:'سيجارة / علبة',em:'🚬'},
  {e:'smoke',a:'يُدخّن',em:'💨'},{e:'break',a:'استراحة',em:'☕'},
],
l3:[
  {e:'clothes',a:'ملابس',em:'👕'},
  {e:'dress',a:'فستان',em:'👗'},{e:'skirt',a:'تنورة',em:'👗'},
  {e:'blouse',a:'بلوزة',em:'👚'},{e:'stockings',a:'جوارب طويلة',em:'🧦'},
  {e:'sweater',a:'بلوزة صوف',em:'🧥'},{e:'scarf',a:'وشاح',em:'🧣'},
  {e:'hat',a:'قبعة عريضة',em:'👒'},{e:'boots',a:'جزمة طويلة',em:'🥾'},
  {e:'gloves',a:'قفازات',em:'🧤'},{e:'shoes',a:'حذاء',em:'👟'},
  {e:'pants / slacks',a:'بنطلون',em:'👖'},{e:'shirt',a:'قميص',em:'👔'},
  {e:'T-shirt',a:'تيشيرت',em:'👕'},{e:'socks',a:'جوارب قصيرة',em:'🧦'},
  {e:'tie / necktie',a:'ربطة عنق',em:'👔'},{e:'belt',a:'حزام',em:'🔗'},
  {e:'cap',a:'قبعة عسكرية',em:'🧢'},{e:'jacket / coat',a:'جاكيت / معطف',em:'🧥'},
  {e:'suit',a:'بدلة = jacket + slacks',em:'🤵'},{e:'shorts',a:'شورت قصير',em:'🩳'},
  {e:'wear',a:'يرتدي',past:'wore',pa:'ارتدى',em:'👔'},{e:'put on',a:'يلبس',past:'put on',pa:'لبِس',em:'🧥'},
  {e:'take off',a:'يخلع',past:'took off',pa:'خلع',em:'🧤'},{e:'wake up',a:'يستيقظ',past:'woke up',pa:'استيقظ',em:'⏰'},
  {e:'fall asleep',a:'يغفو / يستغرق نوماً',past:'fell asleep',pa:'غفا',em:'😴'},{e:'hang (up)',a:'يعلّق',past:'hung',pa:'علّق',em:'🪝'},
  {e:'can',a:'يستطيع',em:'💪'},{e:"can't",a:'لا يستطيع',em:'🚫'},
  {e:'may',a:'يُسمح له / قد',em:'🙋'},{e:'must',a:'يجب',em:'❗'},
  {e:'must not',a:'يجب ألّا (ممنوع)',em:'⛔'},{e:'well',a:'جيّداً / بمهارة',em:'👍'},
  {e:'asleep',a:'نائم',em:'😴'},{e:'awake',a:'صاحٍ / مستيقظ',em:'👀'},
  {e:'sentence',a:'جملة',em:'📝'},{e:'statement',a:'جملة خبرية',em:'💬'},
  {e:'paragraph',a:'فقرة',em:'📄'},{e:'indent',a:'يُزيح بداية السطر',em:'➡️'},
  {e:'punctuation',a:'علامات الترقيم',em:'❕'},{e:'punctuate',a:'يضع علامات الترقيم',em:'✍️'},
  {e:'period',a:'نقطة نهاية ( . )',em:'⏹️'},{e:'comma',a:'فاصلة ( , )',em:'🔹'},
  {e:'question mark',a:'علامة استفهام ( ? )',em:'❓'},{e:'apostrophe',a:"فاصلة عُليا ( ' )",em:'✒️'},
  {e:'contraction',a:"اختصار مثل don't",em:'✂️'},
],
l4:[
  {e:'spring',a:'الربيع — مارس أبريل مايو',em:'🌸'},
  {e:'summer',a:'الصيف — يونيو يوليو أغسطس',em:'☀️'},
  {e:'fall / autumn',a:'الخريف — سبتمبر أكتوبر نوفمبر',em:'🍂'},
  {e:'winter',a:'الشتاء — ديسمبر يناير فبراير',em:'❄️'},
  {e:'warm',a:'دافئ',em:'🌡️'},{e:'hot',a:'حار',em:'🔥'},
  {e:'cool',a:'بارد نسبياً',em:'🌬️'},{e:'cold',a:'بارد جداً',em:'🥶'},
  {e:'clerk',a:'موظف متجر',em:'🛒'},{e:'store',a:'متجر',em:'🏪'},
  {e:'headphones',a:'سماعات أذن',em:'🎧'},{e:'radio',a:'راديو',em:'📻'},
  {e:'music',a:'موسيقى',em:'🎵'},{e:'season',a:'فصل',em:'📅'},
  {e:'this / these',a:'هذا / هؤلاء (قريب)',em:'👆'},
  {e:'that / those',a:'ذلك / أولئك (بعيد)',em:'👉'},
  {e:'How much?',a:'كم ثمنه؟',em:'💰'},{e:'sell',a:'يبيع',past:'sold',pa:'باع',em:'🏷️'},
  {e:'colors',a:'الألوان',em:'🎨'},
  {e:'red',a:'أحمر',em:'🔴'},{e:'blue',a:'أزرق',em:'🔵'},{e:'green',a:'أخضر',em:'🟢'},
  {e:'yellow',a:'أصفر',em:'🟡'},{e:'orange',a:'برتقالي',em:'🟠'},{e:'purple',a:'بنفسجي',em:'🟣'},
  {e:'brown',a:'بنّي',em:'🟤'},{e:'black',a:'أسود',em:'⚫'},{e:'white',a:'أبيض',em:'⬜'},
  {e:'gray',a:'رمادي',em:'🩶'},{e:'pink',a:'وردي',em:'🩷'},
]
};

const GRAMMAR = {
l1:[
  {
    title:'Simple Past', ar:'الماضي البسيط',
    rule:'أضف -ed للفعل + كلمة ماضية (yesterday / last week / ago)',
    check:{q:'Jane _______ baseball yesterday.',o:['plays','played','play','playing'],a:1,en:'yesterday = past tense → played',ar:'yesterday تدل على الماضي'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'verb + ed',c:'v'},{t:'+',c:'p'},{t:'yesterday / last...',c:'k'}],
    compare:[
      {c1:'He visits every year.',c2:'He visited last year.',ar:'every year ↔ last year'},
      {c1:'She cooks every day.',c2:'She cooked yesterday.',ar:'every day ↔ yesterday'},
    ],
    examples:[
      {s:'Jane played baseball yesterday.',tr:'لعبت جين البيسبول أمس.',ar:'yesterday = ماضٍ → played',ok:true},
      {s:'Jane plays baseball yesterday.',wrong:'plays',right:'played',tr:'مع yesterday لا تستخدم المضارع — الفعل لازم ماضٍ.',ok:false},
    ]
  },
  {
    title:"Negative: didn't", ar:'النفي في الماضي',
    rule:"didn't + فعل مجرد — لا تضع -ed بعد didn't أبداً",
    check:{q:"Tom _______ his room yesterday.",o:["didn't cleaned","didn't clean","not cleaned","clean not"],a:1,en:"didn't + base verb, no -ed",ar:"didn't + الفعل مجرد بدون -ed"},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:"didn't",c:'n'},{t:'+',c:'p'},{t:'base verb',c:'v'}],
    compare:[
      {c1:'Tom cleaned his room.',c2:"Tom didn't clean his room.",ar:'إثبات ↔ نفي'},
    ],
    examples:[
      {s:"Tom didn't clean his room last Saturday.",tr:'لم ينظّف توم غرفته السبت الماضي.',ar:"didn't + clean (بدون -ed)",ok:true},
      {s:"Tom didn't cleaned his room.",wrong:'cleaned',right:'clean',tr:'النفي أخذ الماضي، فلا تكرّره بـ -ed.',ok:false},
    ]
  },
  {
    title:'Questions: Did?', ar:'سؤال الماضي',
    rule:'Did + subject + base verb? — واحذف -d أو -ed من الفعل',
    check:{q:'_______ you watch the game last night?',o:['Do','Did','Watched','Watching'],a:1,en:'Did + subject + base verb',ar:'Did + الفعل الأصلي'},
    formula:[{t:'Did',c:'k'},{t:'+',c:'p'},{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'base verb',c:'v'},{t:'?',c:'p'}],
    compare:[
      {c1:'She liked Chicago.',c2:'Did she like Chicago?',ar:'liked → like (احذف -d)'},
    ],
    examples:[
      {s:'Did you watch the game?',tr:'هل شاهدت المباراة؟ — Yes, I did. / No, I didn\'t.',ar:"Did + الفعل الأصلي",ok:true},
      {s:'Did you watched the game?',wrong:'watched',right:'watch',tr:'بعد Did يرجع الفعل أصلياً بدون -ed.',ok:false},
    ]
  },
  {
    title:'Time Expressions', ar:'تعبيرات الزمن الماضي',
    rule:'هذه الكلمات تدل على الماضي — استخدم معها الفعل الماضي دائماً',
    check:{q:"Which phrase means 'in the past'?",o:['every day','tomorrow','last week','next year'],a:2,en:'last week = past',ar:'last week = ماضٍ'},
    formula:[],
    compare:[],
    examples:[
      {s:'yesterday / yesterday morning / yesterday evening',ar:'أمس',ok:true},
      {s:'last night / last week / last month / last year',ar:'الليلة الماضية / الأسبوع / الشهر / العام الماضي',ok:true},
      {s:'two days ago / a week ago / a year ago',ar:'منذ... (فترة مضت)',ok:true},
    ]
  }
],
l2:[
  {
    title:'Military Ranks', ar:'الرتب العسكرية',
    rule:'الرتب من الأدنى للأعلى — كل رتبة أعلى من السابقة',
    check:{q:'Which rank is higher?',o:['Captain (O-3)','Major (O-4)'],a:1,en:'Major (O-4) is one rank above Captain (O-3)',ar:'Major أعلى من Captain برتبة واحدة'},
    formula:[],compare:[],examples:[],isRanks:true
  },
  {
    title:'Military Time', ar:'التوقيت العسكري 24 ساعة',
    rule:'من 1pm إلى 11pm: أضف 12 على الساعة للحصول على التوقيت العسكري',
    check:{q:'3:00 pm بالتوقيت العسكري؟',o:['0300','1500','1300','2200'],a:1,en:'3pm + 12 = 1500',ar:'3+12 = 1500'},
    formula:[{t:'1pm - 11pm',c:'k'},{t:'+',c:'p'},{t:'12',c:'v'},{t:'=',c:'p'},{t:'Military Time',c:'s'}],
    compare:[
      {c1:'7:30 am',c2:'0730',ar:'الصباح = نفس الرقم'},
      {c1:'3:00 pm',c2:'1500',ar:'3+12=15 → 1500'},
      {c1:'8:50 pm',c2:'2050',ar:'8+12=20 → 2050'},
      {c1:'10:30 pm',c2:'2230',ar:'10+12=22 → 2230'},
    ],
    examples:[
      {s:"It's 8:50 p.m. = 2050.",tr:'الثامنة والنصف مساءً: 8+12=20 ثم الدقائق → 2050.',ar:"مساءً: أضف 12 للساعة",ok:true},
      {s:"It's 8:50 p.m. = 0850.",wrong:'0850',right:'2050',tr:'0850 يعني صباحاً — المساء يبدأ من 12 فما فوق.',ok:false},
    ]
  },
  {
    title:'Irregular Verbs', ar:'الأفعال الشاذة',
    rule:'هذه الأفعال لا تأخذ -ed في الماضي — يجب حفظها',
    check:{q:'Sgt. Jones _______ to LA last week. (fly)',o:['flied','flyed','flew','flow'],a:2,en:'fly → flew (irregular)',ar:'fly فعل شاذ → flew'},
    formula:[{t:'Present',c:'s'},{t:'→',c:'p'},{t:'Past (شاذ)',c:'n'},{t:'لا يصح',c:'k'},{t:'verb + ed',c:'v'}],
    compare:[
      {c1:'speak',c2:'spoke',ar:'تكلّم'},{c1:'fly',c2:'flew',ar:'طار'},
      {c1:'leave',c2:'left',ar:'غادر'},{c1:'bring',c2:'brought',ar:'أحضر'},
      {c1:'go',c2:'went',ar:'ذهب'},{c1:'eat',c2:'ate',ar:'أكل'},
      {c1:'drive',c2:'drove',ar:'قاد'},{c1:'buy',c2:'bought',ar:'اشترى'},
    ],
    examples:[
      {s:'Sgt. Jones flew to LA last week.',tr:'سافر الرقيب جونز جواً إلى لوس أنجلوس الأسبوع الماضي.',ar:"fly فعل شاذ → flew",ok:true},
      {s:'Sgt. Jones flied to LA last week.',wrong:'flied',right:'flew',tr:'fly شاذ، لا يأخذ -ed. ماضيه flew.',ok:false},
    ]
  }
],
l3:[
  {
    title:'Can / Can\'t', ar:'القدرة على فعل شيء',
    rule:'can + فعل مجرد — نفس الشكل لجميع الضمائر، لا تضع s أو -ing',
    check:{q:'Pvt Jones can _______ four languages.',o:['speaks','speak','speaking','spoke'],a:1,en:'can + base verb, no s',ar:'can + الفعل بدون s'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:"can / can't",c:'k'},{t:'+',c:'p'},{t:'base verb',c:'v'}],
    compare:[
      {c1:'Jim can run 10 miles.',c2:"Kelly can't run 10 miles.",ar:'can ↔ can\'t'},
    ],
    examples:[
      {s:'Pvt Jones can speak four languages.',tr:'يستطيع الجندي جونز التحدث بأربع لغات.',ar:"can + الفعل الأصلي (بدون s)",ok:true},
      {s:'Pvt Jones can speaks four languages.',wrong:'speaks',right:'speak',tr:'بعد can لا نضيف s للفعل.',ok:false},
    ]
  },
  {
    title:'Must', ar:'يجب — واجب',
    rule:'must + فعل مجرد — يعني الشيء إلزامي ولا مفر منه',
    check:{q:'Soldiers _______ wear uniforms. (إلزامي)',o:['can','must','may','could'],a:1,en:'must = obligatory',ar:'must = إلزامي'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'must',c:'k'},{t:'+',c:'p'},{t:'base verb',c:'v'}],
    compare:[],
    examples:[
      {s:'Students must listen to the teacher.',tr:'يجب على الطلاب الاستماع للمعلّم.',ar:"must + الفعل الأصلي — إلزامي",ok:true},
      {s:'Soldiers must wear uniforms.',tr:'يجب على الجنود لبس الزي العسكري.',ar:"must + الفعل الأصلي",ok:true},
    ]
  },
  {
    title:'Must not / Mustn\'t', ar:'ممنوع — نهي تام',
    rule:'must not = ممنوع تماماً — مثل Do not في اللوحات التحذيرية',
    check:{q:'I must not _______ here. (ممنوع)',o:['to smoke','smoking','smoke','smoked'],a:2,en:'must not + base verb, no to',ar:'must not + الفعل مباشرة بدون to'},
    formula:[{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'must not',c:'n'},{t:'+',c:'p'},{t:'base verb',c:'v'}],
    compare:[
      {c1:'Do not smoke here.',c2:'You must not smoke here.',ar:'Do not = must not (نفس المعنى)'},
    ],
    examples:[
      {s:'I must not write with a pen = I cannot write with a pen.',tr:'ممنوع أن أكتب بقلم = لا أستطيع الكتابة بقلم.',ar:"must not = cannot (ممنوع)",ok:true},
      {s:'I must not to write.',wrong:'to write',right:'write',tr:'بعد must not لا نضع to — الفعل مباشرة.',ok:false},
    ]
  },
  {
    title:'May', ar:'يُسمح — طلب إذن رسمي',
    rule:'May I...? = طلب إذن رسمي | Can I...? = طلب إذن غير رسمي',
    check:{q:'_______ I go to the library? (طلب إذن رسمي)',o:['Do','Can','May','Must'],a:2,en:'May I...? = formal permission',ar:'May = طلب إذن رسمي'},
    formula:[{t:'May',c:'k'},{t:'+',c:'p'},{t:'Subject',c:'s'},{t:'+',c:'p'},{t:'base verb',c:'v'},{t:'?',c:'p'}],
    compare:[
      {c1:'May I go? (رسمي)',c2:'Can I go? (غير رسمي)',ar:'may = formal | can = informal'},
    ],
    examples:[
      {s:'May I go to the library? → Yes, you may.',tr:'هل تسمح لي بالذهاب إلى المكتبة؟ — نعم، يمكنك.',ar:"طلب إذن رسمي",ok:true},
      {s:'May I go? Yes, you must.',wrong:'must',right:'may',tr:'الإذن يُجاب بـ may وليس must (must = واجب).',ok:false},
    ]
  },
  {
    title:'-ed Sounds', ar:'أصوات لاحقة الماضي',
    rule:'ثلاثة أصوات مختلفة عند نطق -ed — المفتاح هو الحرف قبل الأخير',
    check:{q:'أي كلمة تنطق /t/ في نهايتها؟',o:['studied','played','watched','repeated'],a:2,en:'watched ends in a voiceless sound → /t/',ar:'ch صوت مهموس → /t/'},
    formula:[],compare:[],examples:[],isSounds:true
  }
],
l4:[
  {
    title:'Seasons', ar:'الفصول الأربعة',
    rule:'Fall = Autumn — نفس الفصل باسمين مختلفين',
    check:{q:'Autumn تعني نفس معنى؟',o:['Winter','Spring','Fall','Summer'],a:2,en:'Fall = Autumn, same season',ar:'Fall و Autumn نفس الفصل'},
    formula:[],
    compare:[
      {c1:'Winter: Dec, Jan, Feb',c2:"It's cold.",ar:'الشتاء ❄️'},
      {c1:'Spring: Mar, Apr, May',c2:"It's warm.",ar:'الربيع 🌸'},
      {c1:'Summer: Jun, Jul, Aug',c2:"It's hot.",ar:'الصيف ☀️'},
      {c1:'Fall/Autumn: Sep, Oct, Nov',c2:"It's cool.",ar:'الخريف 🍂'},
    ],
    examples:[
      {s:'Autumn and fall are the same.',tr:'Autumn و fall اسمان لنفس الفصل (الخريف).',ar:"نفس الفصل، كلمتان",ok:true},
    ]
  },
  {
    title:'Days Sequence', ar:'ترتيب الأيام',
    rule:'the day after tomorrow = بعد يومين | the day before yesterday = قبل يومين',
    check:{q:"لو اليوم Monday، فـ 'the day after tomorrow' هو؟",o:['Tuesday','Wednesday','Sunday','Saturday'],a:1,en:'Mon +1 = tomorrow, +2 = day after tomorrow',ar:'بعد الغد = يومين من اليوم'},
    formula:[],
    compare:[
      {c1:'Tomorrow',c2:'Tuesday (if today=Mon)',ar:'اليوم التالي'},
      {c1:'The day after tomorrow',c2:'Wednesday (if today=Mon)',ar:'بعد يومين'},
      {c1:'Yesterday',c2:'Sunday (if today=Mon)',ar:'الأمس'},
      {c1:'The day before yesterday',c2:'Saturday (if today=Mon)',ar:'قبل يومين'},
    ],
    examples:[]
  },
  {
    title:'This / That / These / Those', ar:'أسماء الإشارة',
    rule:'قريب = this/these | بعيد = that/those',
    check:{q:'_______ cars are big. (بعيد + جمع)',o:['This','That','These','Those'],a:3,en:'far + plural → those',ar:'بعيد + جمع → those'},
    formula:[{t:'Near',c:'k'},{t:'this',c:'v'},{t:'(مفرد)',c:'p'},{t:'these',c:'v'},{t:'(جمع)',c:'p'}],
    compare:[
      {c1:'this (قريب مفرد)',c2:'these (قريب جمع)',ar:'near'},
      {c1:'that (بعيد مفرد)',c2:'those (بعيد جمع)',ar:'far'},
    ],
    examples:[
      {s:'I like this car.',tr:'تعجبني هذه السيارة. (قريب + مفرد)',ar:"this = قريب مفرد",ok:true},
      {s:'Those cars are big.',tr:'تلك السيارات كبيرة. (بعيد + جمع)',ar:"those = بعيد جمع",ok:true},
    ]
  },
  {
    title:'How much...?', ar:'كم الثمن؟',
    rule:'How much is/does = سؤال عن السعر',
    check:{q:'_______ does the pen cost?',o:['How many','How much','What price','How'],a:1,en:'How much = asking price',ar:'How much = سؤال عن السعر'},
    formula:[{t:'How much',c:'k'},{t:'+',c:'p'},{t:'is / does',c:'v'},{t:'+',c:'p'},{t:'item',c:'s'},{t:'cost?',c:'p'}],
    compare:[
      {c1:'How much is the shirt?',c2:"It's $29.",ar:'is = للمفرد'},
      {c1:'How much did it cost?',c2:"It was $13,000.",ar:'did = للماضي'},
    ],
    examples:[
      {s:'How much does the pen cost? → It costs $3.',tr:'كم يكلّف القلم؟ — يكلّف 3 دولارات.',ar:"How much + does + cost",ok:true},
    ]
  },
  {
    title:'-ed Sounds Review', ar:'مراجعة أصوات الماضي',
    rule:'مراجعة: /t/ مهموس | /d/ مجهور | /əd/ بعد t أو d',
    check:{q:'أي كلمة تنطق /əd/؟',o:['played','smoked','wanted','talked'],a:2,en:'wanted ends in t/d → /əd/',ar:'تنتهي بـ t/d → /əd/'},
    formula:[],compare:[],examples:[],isSounds:true
  }
]
};

function build_learn(lk){
  const el=document.getElementById('ph-learn');
  el.innerHTML='';

  // Tabs
  el.innerHTML=`
  <div class="learn-tabs">
    <button class="ltab on" id="lt-v" onclick="sw_learn_tab('v','${lk}')">
      <span class="li">📚</span><span>مفردات</span>
    </button>
    <button class="ltab" id="lt-g" onclick="sw_learn_tab('g','${lk}')">
      <span class="li">📖</span><span>قواعد</span>
    </button>
  </div>
  <div class="lsec on" id="ls-v"></div>
  <div class="lsec" id="ls-g"></div>`;

  build_vocab_sec(lk);
  build_grammar_sec(lk);
}

function sw_learn_tab(t,lk){
  document.querySelectorAll('.ltab').forEach(x=>x.classList.remove('on'));
  document.querySelectorAll('.lsec').forEach(x=>x.classList.remove('on'));
  document.getElementById('lt-'+t).classList.add('on');
  document.getElementById('ls-'+t).classList.add('on');
}

function build_vocab_sec(lk){
  const el=document.getElementById('ls-v');
  const words=VOCAB[lk];
  let html=`<div style="font-size:.75rem;color:var(--muted);font-family:'Cairo',sans-serif;margin-bottom:12px;text-align:center">
    اضغط زر 🔊 لسماع النطق</div>
  <div class="vcards">`;
  words.forEach(v=>{
    const safe=v.e.replace(/'/g,"\\'").replace(/\(.*?\)/g,'').trim();
    html+=`<div class="vcard">
      <button class="vs" onclick="say('${safe}')">🔊</button>
      <span class="ve">${v.em}</span>
      <div class="vw">${v.e}</div>
      <div class="va">${v.a}</div>
    </div>`;
  });
  html+='</div>';
  const pastWords=words.filter(w=>w.past);
  if(pastWords.length){
    html+=`<div class="past-sec">
      <div class="past-h">⏮️ نفس الأفعال في الماضي</div>
      <div class="past-note">الأصل ← الماضي · اضغط 🔊 لسماع كلٍّ على حدة</div>`;
    pastWords.forEach(w=>{
      const baseSafe=w.e.replace(/'/g,"\\'"),pastSafe=w.past.replace(/'/g,"\\'");
      html+=`<div class="past-row">
        <div class="pr-forms" dir="ltr">
          <span class="pr-base">${w.e}<button class="pr-spk" onclick="say('${baseSafe}')">🔊</button></span>
          <span class="pr-arrow">→</span>
          <span class="pr-past">${w.past}<button class="pr-spk" onclick="say('${pastSafe}')">🔊</button></span>
        </div>
        <div class="pr-ar">الأصل: ${w.a} · الماضي: ${w.pa}</div>
      </div>`;
    });
    html+='</div>';
  }
  el.innerHTML=html;
}

// ═══════════════════════════════════════
// VOCAB DRILL (تدرّب) — تدريب مفردات متنوّع
// ═══════════════════════════════════════
const drill={};
function normAr(s){return (s||'').replace(/[ً-ْـ]/g,'').replace(/[إأآا]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').replace(/[()\/\.\-—،؟?]/g,' ').replace(/\s+/g,' ').trim();}
function coreAr(a){return a.split(/[—\/\(]/)[0].trim();}
// كل المعاني المقبولة لكلمة (تقسم على / و«أو» + مرادفات alt)
function acceptedAr(w){
  const out=[];
  [w.a,...(w.alt||[])].forEach(x=>String(x).split(/[\/،,]| او | أو /).forEach(p=>{const t=p.replace(/\(.*?\)/g,'').trim();if(t)out.push(t);}));
  return out;
}
// هيكل الحروف الساكنة (يتجاهل حروف العلّة عشان يتسامح مع النقل الحرفي: بيسبول = بيسيبول)
function arSkel(s){return normAr(s).replace(/^ال/,'').replace(/ ال/g,' ').replace(/[اويهءئؤ]/g,'');}
function drillTypeOk(input,w){
  const ans=normAr(input);if(ans.length<2)return false;
  const alts=acceptedAr(w).map(normAr);
  for(const k of alts){if(k&&(ans===k||k.includes(ans)||ans.includes(k)))return true;}
  const aSk=arSkel(input);
  if(aSk.length>=2){for(const k of acceptedAr(w)){if(arSkel(k)===aSk)return true;}}
  return false;
}
function pickDistractors(pool,correct,keyFn,n){
  const out=[],seen=new Set([keyFn(correct)]);
  const shuffled=pool.slice().sort(()=>Math.random()-.5);
  for(const w of shuffled){const k=keyFn(w);if(!seen.has(k)){seen.add(k);out.push(w);}if(out.length>=n)break;}
  return out;
}
function build_vocab_drill(lk){
  const words=VOCAB[lk].slice();
  const deck=words.slice().sort(()=>Math.random()-.5);
  const items=deck.map((w,idx)=>{
    const short=coreAr(w.a).split(' ').length<=2;
    let type;
    if((idx+1)%3===0&&short)type='type';
    else type=(idx%2===0)?'en2ar':'ar2en';
    return {w,type};
  });
  drill[lk]={items,idx:0,score:0};
  render_drill(lk);
}
function render_drill(lk){
  const el=document.getElementById('ph-practice');
  const st=drill[lk],total=st.items.length;
  if(st.idx>=total){
    el.innerHTML=`<div class="sp-card sp-done"><div class="sp-emoji">${st.score>=Math.ceil(total*.7)?'🏆':'📚'}</div>
      <div class="sp-donetxt">أحسنت! أكملت تدريب المفردات</div>
      <div class="sp-score">نتيجتك: ${st.score} / ${total}</div>
      <button class="sp-btn check" onclick="build_vocab_drill('${lk}')">🔁 مرّة ثانية</button></div>`;
    return;
  }
  st.wrong=false;
  const it=st.items[st.idx],w=it.w,words=VOCAB[lk];
  const eSafe=w.e.replace(/'/g,"\\'").replace(/\(.*?\)/g,'').trim();
  let head=`<div class="qprog"><div class="qpbar"><div class="qpfill" style="width:${Math.round(st.idx/total*100)}%"></div></div>
    <div class="qptxt">${st.idx+1} / ${total}</div></div>`;
  let body='';
  if(it.type==='en2ar'){
    const opts=[w,...pickDistractors(words,w,x=>x.a,3)].sort(()=>Math.random()-.5);
    body=`<div class="dq">
      <div class="dq-word" dir="ltr">${w.e}<button class="dq-spk" onclick="say('${eSafe}')">🔊</button></div>
      <div class="dq-ask">اختر المعنى الصحيح</div>
      <div class="dq-opts">${opts.map(o=>`<button class="dq-opt" onclick="drill_ans('${lk}',this,${o.a===w.a})">${o.a}</button>`).join('')}</div>
      <div class="dq-fb" id="dq-fb"></div></div>`;
  }else if(it.type==='ar2en'){
    const opts=[w,...pickDistractors(words,w,x=>x.e,3)].sort(()=>Math.random()-.5);
    body=`<div class="dq">
      <div class="dq-word-ar">${coreAr(w.a)}</div>
      <div class="dq-ask">اختر الكلمة الإنجليزية</div>
      <div class="dq-opts">${opts.map(o=>{const s=o.e.replace(/'/g,"\\'").replace(/\(.*?\)/g,'').trim();return `<button class="dq-opt en" dir="ltr" onclick="drill_ans('${lk}',this,${o.e===w.e},'${s}')">${o.e}</button>`;}).join('')}</div>
      <div class="dq-fb" id="dq-fb"></div></div>`;
  }else{ // type
    body=`<div class="dq">
      <div class="dq-word" dir="ltr">${w.e}<button class="dq-spk" onclick="say('${eSafe}')">🔊</button></div>
      <div class="dq-ask">✍️ اكتب المعنى بالعربية</div>
      <input class="dq-input" id="dq-input" autocomplete="off" placeholder="اكتب هنا..." onkeydown="if(event.key==='Enter')drill_type('${lk}')">
      <div class="dq-fb" id="dq-fb"></div>
      <button class="sp-btn check" style="margin-top:12px" onclick="drill_type('${lk}')">تحقّق ✓</button>
      <button class="sp-skip" onclick="drill_reveal_type('${lk}')">لا أعرف — أظهر المعنى ←</button></div>`;
  }
  el.innerHTML=head+body;
  const inp=document.getElementById('dq-input');if(inp)inp.focus();
}
function drill_next(lk){setTimeout(()=>{drill[lk].idx++;render_drill(lk);},900);}
function drill_ans(lk,btn,ok,speak){
  const st=drill[lk],fb=document.getElementById('dq-fb'),w=st.items[st.idx].w;
  if(ok){
    document.querySelectorAll('.dq-opt').forEach(b=>b.disabled=true);
    btn.classList.add('ok');
    if(!st.wrong)st.score++;
    say(speak||w.e.replace(/\(.*?\)/g,'').trim());
    fb.innerHTML='✅ صحيح! <span dir="ltr">'+w.e.replace(/\(.*?\)/g,'').trim()+'</span> = '+coreAr(w.a);
    fb.style.color='var(--g)';
    XP+=2;document.getElementById('xp').textContent=XP;save_progress();
    drill_next(lk);
  }else{
    // فرصة إعادة المحاولة: عطّل الخيار الخطأ فقط ودع الطالب يحاول
    st.wrong=true;btn.classList.add('no');btn.disabled=true;
    fb.textContent='❌ حاول مرة أخرى';fb.style.color='var(--r)';
  }
}
function drill_type(lk){
  const inp=document.getElementById('dq-input');if(!inp||inp.disabled)return;
  const st=drill[lk],w=st.items[st.idx].w,fb=document.getElementById('dq-fb');
  if(!inp.value.trim()){return;}
  const ok=drillTypeOk(inp.value,w);
  if(ok){
    inp.disabled=true;inp.classList.remove('no');inp.classList.add('ok');
    if(!st.wrong)st.score++;
    say(w.e.replace(/\(.*?\)/g,'').trim());
    fb.innerHTML='✅ ممتاز! <span dir="ltr">'+w.e.replace(/\(.*?\)/g,'').trim()+'</span> = '+coreAr(w.a);
    fb.style.color='var(--g)';
    XP+=3;document.getElementById('xp').textContent=XP;save_progress();
    drill_next(lk);
  }else{
    st.wrong=true;inp.classList.remove('no');void inp.offsetWidth;inp.classList.add('no');
    fb.textContent='❌ حاول مرة أخرى';fb.style.color='var(--r)';
    inp.focus();setTimeout(()=>{inp.classList.remove('no');},600);
  }
}
function drill_reveal_type(lk){
  const st=drill[lk],dq=document.querySelector('#ph-practice .dq'),inp=document.getElementById('dq-input'),fb=document.getElementById('dq-fb'),w=st.items[st.idx].w;
  if(inp)inp.disabled=true;
  st.wrong=true;
  const eClean=w.e.replace(/\(.*?\)/g,'').trim();
  say(eClean);
  fb.innerHTML='📖 <span dir="ltr">'+eClean+'</span> = <b>'+coreAr(w.a)+'</b> — احفظها 👍';fb.style.color='var(--navy)';
  if(dq)dq.querySelectorAll('.sp-btn.check, .sp-skip').forEach(b=>b.style.display='none');
  if(dq&&!document.getElementById('dq-cont')){
    const nb=document.createElement('button');nb.id='dq-cont';nb.className='sp-btn next';nb.style.marginTop='14px';nb.textContent='التالي ←';
    nb.onclick=()=>{st.idx++;render_drill(lk);};
    dq.appendChild(nb);
  }
}

function build_grammar_sec(lk){
  const el=document.getElementById('ls-g');
  const rules=GRAMMAR[lk];
  let html='';
  rules.forEach((g,i)=>{
    html+=`<div class="gcard">
      <div class="gcard-head" id="gh${lk}${i}" onclick="toggle_gcard('${lk}',${i})">
        <div class="gcard-num">${i+1}</div>
        <div style="flex:1">
          <div class="gcard-title">${g.title}</div>
          <div class="gcard-ar">${g.ar}</div>
        </div>
        <span class="gcard-arrow">▼</span>
      </div>
      <div class="gcard-body" id="gb${lk}${i}">
        ${build_gcard_body(g,lk,i)}
      </div>
    </div>`;
  });
  el.innerHTML=html;
}

function toggle_gcard(lk,i){
  const head=document.getElementById('gh'+lk+i);
  const body=document.getElementById('gb'+lk+i);
  head.classList.toggle('open');
  body.classList.toggle('open');
}

function build_check_widget(check,lk,i){
  return `<div class="chk-box" id="chk${lk}${i}">
    <div class="chk-label">🧠 جرّب بنفسك</div>
    <div class="chk-q">${check.q}</div>
    <div class="chk-opts">
      ${check.o.map((opt,oi)=>`<button class="chk-opt" onclick="check_grammar('${lk}',${i},${oi})">${opt}</button>`).join('')}
    </div>
    <div class="chk-fb" id="chkfb${lk}${i}"></div>
  </div>`;
}

function check_grammar(lk,i,oi){
  const g=GRAMMAR[lk][i];
  const box=document.getElementById(`chk${lk}${i}`);
  const btns=box.querySelectorAll('.chk-opt');
  btns.forEach(b=>b.disabled=true);
  const ok=oi===g.check.a;
  btns[oi].classList.add(ok?'ok':'no');
  if(!ok)btns[g.check.a].classList.add('ok');
  const ruleId=lk+'-'+i;
  RW[ruleId]=RW[ruleId]||{wrong:0,right:0};
  if(ok)RW[ruleId].right++; else RW[ruleId].wrong++;
  const fb=document.getElementById(`chkfb${lk}${i}`);
  fb.className='chk-fb show '+(ok?'ok':'no');
  fb.innerHTML=`${ok?'✅':'❌'} ${g.check.ar}`;
  if(ok){XP+=2;document.getElementById('xp').textContent=XP;}
  save_progress();
  say(g.check.o[g.check.a]);
}

function build_gcard_body(g,lk,i){
  let html='';
  const checkHtml=g.check?build_check_widget(g.check,lk,i):'';

  // One-line rule
  html+=`<div class="rule-box">
    <div class="rb-label">القاعدة</div>
    <div class="rb-text">💡 ${g.rule}</div>
  </div>`;

  // Special: Ranks
  if(g.isRanks){
    html+=`<table class="rktab"><thead><tr><th>الرتبة</th><th>الاختصار</th><th>الدرجة</th><th>اللون</th></tr></thead><tbody>
      <tr><td>Second Lieutenant</td><td>2d Lt</td><td>O-1</td><td class="gld">Gold ذهبي</td></tr>
      <tr><td>First Lieutenant</td><td>1st Lt</td><td>O-2</td><td class="slv">Silver فضي</td></tr>
      <tr><td>Captain</td><td>Capt</td><td>O-3</td><td class="slv">Silver فضي</td></tr>
      <tr><td>Major</td><td>Maj</td><td>O-4</td><td class="gld">Gold ذهبي</td></tr>
      <tr><td>Lieutenant Colonel</td><td>Lt Col</td><td>O-5</td><td class="slv">Silver فضي</td></tr>
      <tr><td>Colonel</td><td>Col</td><td>O-6</td><td class="slv">Silver فضي</td></tr>
      <tr><td>General</td><td>Gen</td><td>O-7</td><td class="slv">Silver فضي</td></tr>
    </tbody></table>
    <div class="rank-tip">💡 مثال: Carol is a new <strong>Major (O-4)</strong>. Last year she was a <strong>Captain (O-3)</strong> — النقيب أقل من الرائد مباشرة.</div>`;
    return html+checkHtml;
  }

  // Special: Sounds
  if(g.isSounds){
    html+=`<table class="stab"><thead><tr>
      <th style="background:#2563EB">الصوت</th>
      <th style="background:#2563EB">متى؟</th>
      <th style="background:#2563EB">أمثلة</th>
    </tr></thead><tbody>
      <tr><td><strong>/t/</strong></td><td>بعد الأصوات المهموسة (k,p,s,ch,sh)</td><td>smok<u>ed</u> walk<u>ed</u> watch<u>ed</u></td></tr>
      <tr><td><strong>/d/</strong></td><td>بعد الأصوات المجهورة والحركات</td><td>studi<u>ed</u> play<u>ed</u> shav<u>ed</u></td></tr>
      <tr><td><strong>/əd/</strong></td><td>بعد حرف t أو d</td><td>want<u>ed</u> repeat<u>ed</u> indent<u>ed</u></td></tr>
    </tbody></table>
    <div class="sound-tip">💡 الطريقة السهلة: هل الفعل ينتهي بـ t أو d؟ → صوت /əd/ | مهموس → /t/ | مجهور → /d/</div>`;
    return html+checkHtml;
  }

  // Formula strip
  if(g.formula&&g.formula.length>0){
    html+='<div class="fstrip">';
    g.formula.forEach(f=>{
      if(f.c==='p')html+=`<span class="farr">${f.t}</span>`;
      else html+=`<span class="fchip ${f.c}">${f.t}</span>`;
    });
    html+='</div>';
  }

  // Compare table
  if(g.compare&&g.compare.length>0){
    const isTime=g.title.includes('Military Time');
    const h1=isTime?'Civilian':'Present / Base';
    const h2=isTime?'Military':'Past';
    html+=`<table class="ctab"><thead><tr>
      <th class="c1">${h1}</th><th class="c2">${h2}</th><th class="c3">معنى</th>
    </tr></thead><tbody>`;
    g.compare.forEach(r=>{
      const safe1=r.c1.replace(/'/g,"\\'");
      const safe2=r.c2.replace(/'/g,"\\'");
      html+=`<tr>
        <td>${r.c1} <button class="ex-spk" style="background:var(--b);border:none;border-radius:5px;width:22px;height:22px;font-size:.65rem;cursor:pointer;float:left" onclick="say('${safe1}')">🔊</button></td>
        <td>${r.c2} <button class="ex-spk" style="background:#7C3AED;border:none;border-radius:5px;width:22px;height:22px;font-size:.65rem;cursor:pointer;float:left" onclick="say('${safe2}')">🔊</button></td>
        <td class="ar">${r.ar}</td>
      </tr>`;
    });
    html+='</tbody></table>';
  }

  // Time grid special
  if(g.title.includes('Military Time')){
    html+=`<div class="tgrd">
      <div class="titem2"><div class="tmil2">0730</div><div class="tciv2">7:30 AM</div></div>
      <div class="titem2"><div class="tmil2">1500</div><div class="tciv2">3:00 PM</div></div>
      <div class="titem2"><div class="tmil2">2050</div><div class="tciv2">8:50 PM</div></div>
      <div class="titem2"><div class="tmil2">2230</div><div class="tciv2">10:30 PM</div></div>
      <div class="titem2"><div class="tmil2">1200</div><div class="tciv2">Noon</div></div>
      <div class="titem2"><div class="tmil2">2400</div><div class="tciv2">Midnight</div></div>
    </div>`;
  }

  // Examples — correct example vs. common mistake (beginner-friendly)
  if(g.examples&&g.examples.length>0){
    html+='<div style="margin-top:8px">';
    g.examples.forEach(ex=>{
      if(ex.ok){
        const safe=ex.s.replace(/'/g,"\\'");
        html+=`<div class="ex2 ok">
          <div class="ex2-top">
            <span class="ex2-tag ok">✅ مثال صحيح</span>
            <button class="ex2-spk" onclick="say('${safe}')" aria-label="استمع">🔊</button>
          </div>
          <div class="ex2-en">${ex.s}</div>
          ${ex.tr?`<div class="ex2-tr">${ex.tr}</div>`:''}
          ${ex.ar?`<div class="ex2-note">${ex.ar}</div>`:''}
        </div>`;
      }else{
        let fix=ex.s;
        if(ex.wrong&&ex.right){
          fix=ex.s.replace(ex.wrong,`<span class="ex2-bad">${ex.wrong}</span><span class="ex2-arr">←</span><span class="ex2-rt">${ex.right}</span>`);
        }
        html+=`<div class="ex2 no">
          <div class="ex2-top"><span class="ex2-tag no">⚠️ الخطأ الشائع</span></div>
          <div class="ex2-fix">${fix}</div>
          ${(ex.tr||ex.ar)?`<div class="ex2-tr no">${ex.tr||ex.ar}</div>`:''}
        </div>`;
      }
    });
    html+='</div>';
  }

  return html+checkHtml;
}


// ═══════════════════════════════════════
// BUILD QUIZ (MCQ)
// ═══════════════════════════════════════
function build_quiz(elId,qs,prefix){
  const el=document.getElementById(elId);
  el.innerHTML='';
  const isTest=prefix==='te'||prefix==='fi';

  if(isTest){
    let top='';
    if(prefix==='te'){
      const L=LP[CL];
      const bestTxt=(L&&typeof L.pct==='number')?`أفضل نتيجة سابقة: ${L.pct}%${L.done?' ✓':''}`:'لم تُنهِ هذا الاختبار بعد';
      top=`<div class="test-top">
        <span class="test-best ${(L&&L.done)?'done':''}">${bestTxt}</span>
        <button class="test-restart" onclick="restart_test()">🔄 ابدأ من جديد</button>
      </div>`;
    }
    el.innerHTML=top+`<div class="qprog"><div class="qpbar"><div class="qpfill" id="${prefix}pf"></div></div>
      <div class="qptxt" id="${prefix}pt">0 / ${qs.length}</div></div>`;
  }

  const wrap=document.createElement('div');
  qs.forEach((q,i)=>{
    const c=document.createElement('div');c.className='qcrd';c.id=`${prefix}c${i}`;
    const L=['A','B','C','D'];
    const lbl=q.lbl?`<span style="font-size:.65rem;color:var(--muted);margin-left:6px">${q.lbl}</span>`:'';
    c.innerHTML=`<div class="qhdr">
      <div class="qtxt">${i+1}. ${q.q}${lbl}</div>
      <button class="qspk" onclick="say('${q.q.replace(/_+/g,'blank').replace(/'/g,"\\'")}')">🔊</button>
    </div>
    <div class="opts" id="${prefix}o${i}">
      ${q.o.map((opt,oi)=>`<button class="opt" id="${prefix}op${i}${oi}"
        onclick="ans('${prefix}',${i},${oi},${q.a},'${q.en.replace(/'/g,"\\'")}','${q.ar.replace(/'/g,"\\'")}')">
        <span class="oltr">${L[oi]}</span>${opt}</button>`).join('')}
    </div>
    <div class="fb" id="${prefix}fb${i}">
      <span style="font-size:.9rem;flex-shrink:0" id="${prefix}fi${i}"></span>
      <div><div class="fb-en" id="${prefix}fe${i}"></div><div class="fb-ar" id="${prefix}fa${i}"></div></div>
    </div>`;
    wrap.appendChild(c);
  });
  el.appendChild(wrap);

  if(isTest&&prefix==='te'){
    const sr=document.createElement('div');sr.className='submit-row';
    sr.innerHTML=`<button class="sbtn" onclick="submit_test()">إرسال الإجابات →</button>`;
    el.appendChild(sr);
  }
}

// ═══════════════════════════════════════
// BUILD WORD ORDER
// ═══════════════════════════════════════
function build_dd(lk){
  const el=document.getElementById('ph-drag');
  el.innerHTML=`<div style="background:#EFF6FF;border:2px solid #BFDBFE;border-radius:10px;padding:10px 14px;margin-bottom:16px;font-size:.88rem;font-family:'Cairo',sans-serif;color:#1E40AF">
    ✋ رتّب الكلمات لتكوين جملة صحيحة — اضغط الكلمات بالترتيب الصحيح
  </div>`;

  const items=WO[lk];
  items.forEach((item,idx)=>{
    const shuffled=[...item.words].sort(()=>Math.random()-.5);
    const div=document.createElement('div');
    div.className='wo-card';div.id=`wo${idx}`;
    div.innerHTML=`
      <div class="wo-prompt">🔤 رتّب الكلمات:</div>
      <div class="wo-answer" id="woa${idx}"></div>
      <div class="wo-bank" id="wob${idx}">
        ${shuffled.map((w,wi)=>`<button class="wo-bank-chip" id="woc${idx}_${wi}" onclick="wo_pick(${idx},${wi},'${w.replace(/'/g,"\\'")}',${JSON.stringify(item.words.indexOf(w))})">${w}</button>`).join('')}
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
        <button class="wo-check" onclick="wo_check(${idx},'${item.ans.replace(/'/g,"\\'")}','${item.tr.replace(/'/g,"\\'")}','${item.ar.replace(/'/g,"\\'")}')">✓ تحقق</button>
        <button class="wo-hint-btn" id="wohint${idx}" onclick="wo_hint(${idx},'${item.ans.replace(/'/g,"\\'")}')">💡 تلميح <span id="wohintc${idx}">٣</span></button>
      </div>
      <div id="wofb${idx}"></div>`;
    el.appendChild(div);
  });
}

// placed = array of {wi, word} in order clicked
const woState={};
function wo_pick(idx,wi,word){
  if(!woState[idx])woState[idx]=[];
  // if already placed, remove it
  const existing=woState[idx].findIndex(x=>x.wi===wi);
  if(existing!==-1){
    woState[idx].splice(existing,1);
    document.getElementById(`woc${idx}_${wi}`).classList.remove('used');
  } else {
    woState[idx].push({wi,word});
    document.getElementById(`woc${idx}_${wi}`).classList.add('used');
  }
  // render answer zone
  const ans=document.getElementById(`woa${idx}`);
  if(woState[idx].length===0){
    ans.innerHTML='';ans.classList.remove('has-words');
  } else {
    ans.classList.add('has-words');
    ans.innerHTML=woState[idx].map((x,pos)=>
      `<button class="wo-chip placed" onclick="wo_remove(${idx},${x.wi})">${x.word}</button>`
    ).join('');
  }
}
function wo_remove(idx,wi){
  wo_pick(idx,wi,''); // toggle off
  // re-render by refreshing state
  const ans=document.getElementById(`woa${idx}`);
  if(!woState[idx]||woState[idx].length===0){ans.innerHTML='';ans.classList.remove('has-words');return;}
  ans.innerHTML=woState[idx].map(x=>`<button class="wo-chip placed" onclick="wo_remove(${idx},${x.wi})">${x.word}</button>`).join('');
}
function wo_clear(idx,shuffledJson){
  woState[idx]=[];
  const ans=document.getElementById(`woa${idx}`);
  ans.innerHTML='';ans.classList.remove('has-words');
  // re-enable all chips
  const shuffled=shuffledJson;
  document.querySelectorAll(`[id^="woc${idx}_"]`).forEach(b=>b.classList.remove('used'));
  document.getElementById(`wofb${idx}`).innerHTML='';
  const card=document.getElementById(`wo${idx}`);
  card.className='wo-card';
  ans.className='wo-answer';
}
function wo_check(idx,correct,tr,ar){
  if(!woState[idx]||woState[idx].length===0){
    document.getElementById(`wofb${idx}`).innerHTML=`<div class="wo-wrong-reveal"><div class="wo-wrong-ar">⚠️ رتّب الكلمات أولاً</div></div>`;
    return;
  }
  const student=woState[idx].map(x=>x.word).join(' ');
  // normalize: remove trailing punctuation for comparison
  const norm=s=>s.replace(/\s*[.?!]+\s*$/,'').replace(/\s+/g,' ').trim().toLowerCase();
  const isOk=norm(student)===norm(correct);
  const card=document.getElementById(`wo${idx}`);
  const ans=document.getElementById(`woa${idx}`);
  if(isOk){
    card.className='wo-card wo-ok';
    ans.className='wo-answer wo-correct';
    document.querySelectorAll(`[id^="woc${idx}_"]`).forEach(b=>b.disabled=true);
    XP+=3;document.getElementById('xp').textContent=XP;save_progress();
    say(correct.replace(/[?!.]/g,''));
    document.getElementById(`wofb${idx}`).innerHTML=`<div class="wo-reveal">
      <div class="wo-tr">✅ ${tr}</div>
      ${ar?`<div class="wo-note">💡 ${ar}</div>`:''}
    </div>`;
  } else {
    ans.className='wo-answer wo-wrong';
    setTimeout(()=>{ans.className='wo-answer has-words';},400);
    document.getElementById(`wofb${idx}`).innerHTML=`<div class="wo-wrong-reveal">
      <div class="wo-wrong-ar">❌ الترتيب غير صحيح — حاول مرة أخرى</div>
      <div class="wo-wrong-ans" style="margin-top:6px;font-size:.78rem;color:#999">💡 الجملة لها ${correct.split(' ').length} كلمة</div>
    </div>`;
  }
}

// hint state: how many hints used per card
const woHints={};
function wo_hint(idx,correct){
  if(!woHints[idx])woHints[idx]=0;
  if(woHints[idx]>=3)return;

  const words=correct.replace(/\s*[.?!]+\s*$/,'').split(' ');
  const nextPos=woHints[idx];
  const wordToReveal=words[nextPos];

  // find this word's chip in the bank (first unused match)
  const chips=document.querySelectorAll(`[id^="woc${idx}_"]`);
  let foundChip=null;
  chips.forEach(chip=>{
    if(!foundChip&&!chip.classList.contains('used')&&chip.textContent.trim()===wordToReveal){
      foundChip=chip;
    }
  });

  if(foundChip){
    foundChip.style.background='var(--o)';
    foundChip.style.color='#fff';
    foundChip.style.borderColor='var(--o)';
    setTimeout(()=>{ foundChip.click(); },400);
  }

  woHints[idx]++;
  const remaining=3-woHints[idx];
  const hintBtn=document.getElementById(`wohint${idx}`);
  const countEl=document.getElementById(`wohintc${idx}`);
  const nums=['٣','٢','١'];
  if(remaining===0){
    hintBtn.disabled=true;
    hintBtn.innerHTML='💡 انتهت التلميحات';
  } else {
    if(countEl)countEl.textContent=nums[woHints[idx]]||'١';
  }
}

// ═══════════════════════════════════════
// ANSWER MCQ
// ═══════════════════════════════════════
function ans(pfx,qi,oi,correct,en,ar){
  const opts=document.querySelectorAll(`#${pfx}o${qi} .opt`);
  opts.forEach(b=>b.disabled=true);
  const fb=document.getElementById(`${pfx}fb${qi}`);
  const card=document.getElementById(`${pfx}c${qi}`);
  const ok=oi===correct;
  opts[correct].classList.add('ok');
  if(!ok)opts[oi].classList.add('no');
  card.classList.add(ok?'qok':'qno');
  document.getElementById(`${pfx}fi${qi}`).textContent=ok?'✅':'❌';
  document.getElementById(`${pfx}fe${qi}`).textContent=ok?`Correct! ${en}`:`Answer: ${['A','B','C','D'][correct]}. ${en}`;
  document.getElementById(`${pfx}fa${qi}`).textContent=ar;
  fb.className='fb show '+(ok?'ok':'no');
  if(ok){XP+=pfx==='te'||pfx==='fi'?5:3;STK++;document.getElementById('xp').textContent=XP;document.getElementById('streak').textContent=STK;save_progress();}
  else{STK=0;document.getElementById('streak').textContent=STK;save_progress();}
  say(pfx==='fi'?FINAL[qi].o[correct]:(pfx==='te'?EE[CL][qi].o[correct]:PR[CL][qi].o[correct]));

  // Update progress bar
  const total=pfx==='fi'?FINAL.length:(pfx==='te'?EE[CL].length:PR[CL].length);
  if(pfx==='te'){
    TANS[qi]=ok;
    const done=Object.keys(TANS).length;
    const pf=document.getElementById('tepf'),pt=document.getElementById('tept');
    if(pf)pf.style.width=Math.round(done/total*100)+'%';
    if(pt)pt.textContent=`${done} / ${total}`;
  }else if(pfx==='fi'){
    FANS[qi]=ok;
    const done=Object.keys(FANS).length;
    document.getElementById('fpfill').style.width=Math.round(done/total*100)+'%';
    document.getElementById('fptxt').textContent=`${done} / ${total}`;
  }
}

// ═══════════════════════════════════════
// BUILD FINAL TEST
// ═══════════════════════════════════════
function build_final(){
  const el=document.getElementById('final-quiz');
  el.innerHTML='';

  // Shuffle question order each time the exam opens, so students measure
  // understanding instead of memorizing question position/order.
  const order=FINAL.map((_,i)=>i).sort(()=>Math.random()-.5);

  const wrap=document.createElement('div');
  order.forEach((origIdx,pos)=>{
    const q=FINAL[origIdx];
    const c=document.createElement('div');c.className='qcrd';c.id=`fic${origIdx}`;
    const L=['A','B','C','D'];
    c.innerHTML=`<div class="qhdr">
      <div class="qtxt">${pos+1}. ${q.q}</div>
      <button class="qspk" onclick="say('${q.q.replace(/_+/g,'blank').replace(/'/g,"\\'")}')">🔊</button>
    </div>
    <div class="opts" id="fio${origIdx}">
      ${q.o.map((opt,oi)=>`<button class="opt" id="fiop${origIdx}${oi}"
        onclick="ans('fi',${origIdx},${oi},${q.a},'${q.en.replace(/'/g,"\\'")}','${q.ar.replace(/'/g,"\\'")}')">
        <span class="oltr">${L[oi]}</span>${opt}</button>`).join('')}
    </div>
    <div class="fb" id="fifb${origIdx}">
      <span style="font-size:.9rem;flex-shrink:0" id="fifi${origIdx}"></span>
      <div><div class="fb-en" id="fife${origIdx}"></div><div class="fb-ar" id="fifa${origIdx}"></div></div>
    </div>`;
    wrap.appendChild(c);
  });
  el.appendChild(wrap);
}

// ═══════════════════════════════════════
// SUBMIT
// ═══════════════════════════════════════
function submit_test(){
  const total=EE[CL].length;
  const correct=Object.values(TANS).filter(Boolean).length;
  show_result(correct,total,'te');
}

function submit_final(){
  const total=FINAL.length;
  const correct=Object.values(FANS).filter(Boolean).length;
  show_result(correct,total,'fi');
}

function show_result(correct,total,mode){
  const pct=Math.round(correct/total*100);
  document.getElementById('m-score').textContent=pct+'%';
  document.getElementById('m-sub').textContent=`أجبت بشكل صحيح على ${correct} من ${total} سؤالاً`;
  let emo,grade,color;
  if(pct>=90){emo='🏆';grade='ممتاز! أداء رائع!';color='var(--g)';}
  else if(pct>=70){emo='✅';grade='جيد جداً! استمر!';color='var(--b)';}
  else if(pct>=50){emo='📚';grade='راجع المادة مرة أخرى';color='var(--o)';}
  else{emo='💪';grade='تحتاج مزيداً من التدريب';color='var(--r)';}
  document.getElementById('m-emo').textContent=emo;
  document.getElementById('m-grade').textContent=grade;
  document.getElementById('m-grade').style.color=color;
  ['s1','s2','s3'].forEach(s=>document.getElementById(s).classList.remove('lit'));
  if(pct>=50)document.getElementById('s1').classList.add('lit');
  if(pct>=70)document.getElementById('s2').classList.add('lit');
  if(pct>=90)document.getElementById('s3').classList.add('lit');
  document.getElementById('modal').classList.add('show');
  const nb=document.getElementById('m-next');
  if(nb){
    const order=['l1','l2','l3','l4'];const i=order.indexOf(CL);
    nb.style.display=(mode==='te'&&i>=0&&i<order.length-1)?'inline-block':'none';
  }
  if(mode==='te'){
    const prev=(LP[CL]&&LP[CL].pct)||0;
    const best=Math.max(prev,pct);
    LP[CL]={pct:best,done:best>=70};
    apply_lessons();
    upd_global();
    save_progress();
  }
  if(pct>=90)confetti();
}

function close_modal(){document.getElementById('modal').classList.remove('show');}

function next_lesson(){
  const order=['l1','l2','l3','l4'];const i=order.indexOf(CL);
  close_modal();
  if(i>=0&&i<order.length-1)open_lesson(order[i+1]);
  else go_home();
}

function retry(){
  close_modal();
  if(CL==='final'){FANS={};build_final();document.getElementById('fpfill').style.width='0%';document.getElementById('fptxt').textContent=`0 / ${FINAL.length}`;}
  else{TANS={};delete built['te'+CL];document.getElementById('ph-test').innerHTML='';build_quiz('ph-test',EE[CL],'te');built['te'+CL]=1;}
}

function restart_test(){
  TANS={};
  delete built['te'+CL];
  document.getElementById('ph-test').innerHTML='';
  build_quiz('ph-test',EE[CL],'te');
  built['te'+CL]=1;
}

function upd_global(){
  const done=document.querySelectorAll('.lcard.done').length;
  document.getElementById('gpfill').style.width=(done/4*100)+'%';
  document.getElementById('gptxt').textContent=`${done} من 4 دروس مكتملة`;
}

function confetti(){
  const con=document.getElementById('conf');con.innerHTML='';
  const cols=['#58CC02','#1CB0F6','#FFC800','#FF9600','#CE82FF','#FF4B4B'];
  for(let i=0;i<80;i++){
    const p=document.createElement('div');p.className='cp';
    p.style.cssText=`left:${Math.random()*100}%;top:-10px;
      background:${cols[Math.floor(Math.random()*cols.length)]};
      border-radius:${Math.random()>.5?'50%':'2px'};
      animation-delay:${Math.random()*1.5}s;
      animation-duration:${1.5+Math.random()}s;`;
    con.appendChild(p);
  }
  setTimeout(()=>con.innerHTML='',4000);
}
