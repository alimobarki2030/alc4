// ═══════════════════════════════════════
// ALCPT-STYLE SIMULATION — original item bank
// ───────────────────────────────────────
// These are ORIGINAL practice items written in the style of the ALCPT
// (American Language Course Placement Test). Real ALCPT forms are secure
// test material and must never be posted, so nothing here comes from one.
//
// Format of the real test (DLIELC ALCPT Handbook 2025):
//   Part I  Listening — 50 items, heard once, ≈20 min (paced by the audio)
//   Part II Reading   — 50 items, 35 min
// Score = number correct (out of 100).
//
// Every item stores the CORRECT option FIRST; the engine shuffles options.
// lvl: 1 = ALC books 1–12 · 2 = books 13–24 · 3 = books 25–34
//
// Listening item:
//   {t:'qr'|'st'|'dl'|'an', lvl, say:[[voice,text],…], q?, o:[…], ar}
//   voice: 'm' man · 'f' woman · 'n' narrator
//   q (optional) = the spoken question for dialogs/announcements (also spoken)
// Reading item:
//   {t:'gr'|'vo'|'rd', lvl, q, o:[…], ar, p?}  — p = passage id (PASSAGES)
//   In 'vo' items, <u>word</u> marks the underlined word.
// ═══════════════════════════════════════

const ALCPT_LISTEN=[
  // ── Question → best response ──
  {t:'qr',lvl:1,say:[['m',"What time is it?"]],o:["It's half past three.","It's on the table.","It's very hot.","It's my watch."],ar:'السؤال عن الوقت ← الجواب ساعة: half past three = الثالثة والنصف.'},
  {t:'qr',lvl:1,say:[['f',"Where do you live?"]],o:["In an apartment downtown.","At seven o'clock.","With my brother's car.","Very well, thank you."],ar:'Where = أين ← الجواب مكان.'},
  {t:'qr',lvl:1,say:[['m',"How much does this shirt cost?"]],o:["Twenty dollars.","Two hours.","Size medium.","Blue and white."],ar:'How much ... cost = كم السعر ← الجواب مبلغ.'},
  {t:'qr',lvl:1,say:[['f',"Who is your English teacher?"]],o:["Mr. Brown.","In room twelve.","Every morning.","Grammar and reading."],ar:'Who = من ← الجواب شخص.'},
  {t:'qr',lvl:1,say:[['m',"How do you go to work?"]],o:["By bus.","At the office.","Eight hours a day.","Because I like it."],ar:'How do you go = كيف تذهب ← وسيلة المواصلات: by bus.'},
  {t:'qr',lvl:1,say:[['f',"Would you like some coffee?"]],o:["Yes, please. With sugar.","No, I'm not a teacher.","Yes, it's Tuesday.","I drank it tomorrow."],ar:'Would you like = عرض مهذّب ← الرد: Yes, please أو No, thank you.'},
  {t:'qr',lvl:1,say:[['m',"What's the weather like today?"]],o:["It's cloudy and cool.","I like it very much.","It's Monday.","It's in the newspaper."],ar:'What\'s the weather like = كيف الطقس ← وصف الجو. (like هنا ليست «يحب»)'},
  {t:'qr',lvl:1,say:[['f',"Can you speak Arabic?"]],o:["Yes, it's my first language.","Yes, I can't.","I speak to Arabic.","No, I'm from Arabic."],ar:'Can you = هل تستطيع ← Yes + جملة منطقية. «Yes, I can\'t» متناقضة.'},
  {t:'qr',lvl:1,say:[['m',"When is your birthday?"]],o:["In May.","At home.","I'm twenty.","Yes, it is."],ar:'When = متى ← الجواب زمن: In May.'},
  {t:'qr',lvl:1,say:[['f',"What are you doing now?"]],o:["I'm reading a book.","I read yesterday.","I'll read tomorrow.","I'm a reader."],ar:'What are you doing now = ماذا تفعل الآن ← المضارع المستمر: I\'m reading.'},
  {t:'qr',lvl:2,say:[['m',"How long have you been in the Air Force?"]],o:["For six years.","Since I'm twenty.","In two years.","Six years ago."],ar:'How long have you been = منذ متى ← for + مدّة.'},
  {t:'qr',lvl:2,say:[['f',"Have you finished the report yet?"]],o:["Not yet. I'll finish it this afternoon.","Yes, I finish it tomorrow.","No, I have never report.","It's a long report yesterday."],ar:'yet في السؤال = «حتى الآن» ← Not yet = ليس بعد.'},
  {t:'qr',lvl:2,say:[['m',"Why were you late this morning?"]],o:["My car wouldn't start.","At eight thirty.","Because of tomorrow.","I'll be on time."],ar:'Why = لماذا ← الجواب سبب: سيارتي ما اشتغلت.'},
  {t:'qr',lvl:2,say:[['f',"Could you tell me where the post office is?"]],o:["It's next to the bank on Main Street.","Yes, I could.","It opens at nine.","I mailed a letter."],ar:'طلب مهذّب عن مكان ← الجواب يحدّد المكان، لا «Yes, I could».'},
  {t:'qr',lvl:2,say:[['m',"What did the doctor say?"]],o:["He told me to rest for a few days.","He says me to rest.","The doctor is in the hospital.","I'll see the doctor."],ar:'الكلام المنقول: told me to + فعل. (says me خطأ)'},
  {t:'qr',lvl:2,say:[['f',"Did you use to live in Texas?"]],o:["Yes, when I was a child.","Yes, I'm used to it.","No, I use it every day.","I will live there."],ar:'used to = عادة في الماضي ← Yes, when I was a child.'},
  {t:'qr',lvl:2,say:[['m',"Which do you prefer, tea or coffee?"]],o:["I'd rather have tea.","Yes, I prefer.","Both are hot yesterday.","I prefer at night."],ar:'Which ... or = اختيار ← I\'d rather have tea = أفضّل الشاي.'},
  {t:'qr',lvl:2,say:[['f',"How often do you go to the gym?"]],o:["Three times a week.","For an hour.","Since Monday.","By car."],ar:'How often = كم مرّة ← عدد المرّات: three times a week.'},
  {t:'qr',lvl:3,say:[['m',"Would you mind if I opened the window?"]],o:["Not at all. Go ahead.","Yes, please open it.","No, I don't mind the window.","I opened it already yesterday."],ar:'Would you mind = هل تمانع ← «Not at all» = لا أمانع أبداً. (Yes تعني أنك تمانع)'},
  {t:'qr',lvl:3,say:[['f',"Hadn't you better call your supervisor before you leave?"]],o:["You're right. I'll call him now.","I had better than you.","No, he's better now.","I left before he called."],ar:'had better = من الأفضل لك ← نصيحة، والرد المنطقي قبولها.'},
  {t:'qr',lvl:3,say:[['m',"How soon will the aircraft be ready for takeoff?"]],o:["In about twenty minutes.","For twenty minutes.","Twenty minutes ago.","Since twenty minutes."],ar:'How soon = بعد كم ← in + مدّة (بعد عشرين دقيقة من الآن).'},
  {t:'qr',lvl:3,say:[['f',"If you had known about the meeting, would you have come?"]],o:["Yes, I would have.","Yes, I will come.","No, I didn't know him.","Yes, I had come."],ar:'الشرط الثالث (افتراض في الماضي) ← الرد: I would have.'},
  {t:'qr',lvl:3,say:[['m',"What would you do if you lost your ID card?"]],o:["I'd report it right away.","I lost it last week.","I will lose it.","It's my ID card."],ar:'الشرط الثاني (افتراض) ← الرد بـ would: I\'d report it.'},
  {t:'qr',lvl:3,say:[['f',"Isn't the commander supposed to arrive today?"]],o:["Yes, but his flight was delayed.","No, he isn't commander.","Yes, he arrived last month.","He's supposing today."],ar:'supposed to = المفروض ← نعم، لكن رحلته تأخّرت.'},

  // ── Statement → closest meaning ──
  {t:'st',lvl:1,say:[['n',"John is taller than Bill."]],o:["Bill is shorter than John.","John is shorter than Bill.","They are the same height.","Bill is taller than John."],ar:'جون أطول من بيل = بيل أقصر من جون.'},
  {t:'st',lvl:1,say:[['n',"The store opens at nine and closes at five."]],o:["The store is open for eight hours.","The store is open all night.","The store is closed at noon.","The store opens at five."],ar:'من التاسعة إلى الخامسة = ثماني ساعات.'},
  {t:'st',lvl:1,say:[['n',"I'm hungry."]],o:["I want to eat.","I want to sleep.","I want to drink.","I'm tired."],ar:'hungry = جائع ← أريد أن آكل. (thirsty = عطشان)'},
  {t:'st',lvl:1,say:[['n',"There are two chairs and a table in the room."]],o:["The room has three pieces of furniture.","The room has two tables.","The room is empty.","There are four chairs."],ar:'كرسيان + طاولة = ثلاث قطع أثاث.'},
  {t:'st',lvl:2,say:[['n',"I used to smoke, but I quit last year."]],o:["I don't smoke now.","I smoke every day.","I started smoking last year.","I'm going to quit smoking."],ar:'used to = كنت (وتوقّفت) + quit = تركت ← لا أدخّن الآن.'},
  {t:'st',lvl:2,say:[['n',"Mary didn't go to the party because she was sick."]],o:["Mary missed the party.","Mary went to the party.","Mary got sick at the party.","Mary gave a party."],ar:'didn\'t go ← لم تذهب إلى الحفلة (فاتتها الحفلة).'},
  {t:'st',lvl:2,say:[['n',"We ran out of gas on the way to the base."]],o:["The car had no more fuel.","We ran to the base.","We bought gas at the base.","The base was out of gas."],ar:'ran out of = نفد ← نفد البنزين من السيارة.'},
  {t:'st',lvl:2,say:[['n',"The sergeant had the soldiers clean the barracks."]],o:["The soldiers cleaned the barracks.","The sergeant cleaned the barracks.","The barracks were already clean.","The soldiers had no barracks."],ar:'had + شخص + فعل = جعله يفعل ← الجنود هم من نظّفوا.'},
  {t:'st',lvl:2,say:[['n',"Tom hasn't seen his brother since 2019."]],o:["The last time Tom saw his brother was in 2019.","Tom saw his brother yesterday.","Tom will see his brother in 2019.","Tom has never had a brother."],ar:'hasn\'t seen ... since 2019 = آخر مرّة رآه كانت 2019.'},
  {t:'st',lvl:2,say:[['n',"Ali is used to getting up early."]],o:["Getting up early is easy for Ali.","Ali got up early once.","Ali doesn't like the morning.","Ali used to sleep late."],ar:'be used to + ing = متعوّد على ← الاستيقاظ مبكراً سهل عليه.'},
  {t:'st',lvl:2,say:[['n',"The meeting was put off until next week."]],o:["The meeting was postponed.","The meeting was canceled forever.","The meeting was held early.","The meeting ended quickly."],ar:'put off = أجّل (postpone)، وليس ألغى.'},
  {t:'st',lvl:3,say:[['n',"Had I known it would rain, I would have brought an umbrella."]],o:["I didn't bring an umbrella.","I brought an umbrella.","It didn't rain.","I knew it would rain."],ar:'Had I known = لو كنت أعرف (ولم أعرف) ← لم أُحضر مظلّة.'},
  {t:'st',lvl:3,say:[['n',"The flight was delayed due to bad weather."]],o:["The plane left late.","The plane left early.","The weather was good.","The flight was canceled."],ar:'delayed = تأخّر (لم يُلغَ) ← أقلعت الطائرة متأخّرة.'},
  {t:'st',lvl:3,say:[['n',"Hardly anyone came to the lecture."]],o:["Very few people came.","Everyone came.","The lecture was hard.","Nobody liked the lecture."],ar:'hardly anyone = بالكاد أحد ← عدد قليل جداً.'},
  {t:'st',lvl:3,say:[['n',"The mechanic recommended that the tires be replaced."]],o:["He said the tires should be changed.","He replaced the tires himself.","The tires were new.","He didn\'t like the tires."],ar:'recommended that ... be replaced = نصح بتبديلها (لم يبدّلها هو).'},
  {t:'st',lvl:3,say:[['n',"Not until the captain arrived did the meeting begin."]],o:["The meeting started when the captain came.","The meeting started before the captain came.","The captain didn't come to the meeting.","The captain left the meeting early."],ar:'Not until X did Y = لم يحدث Y إلا بعد X ← بدأ الاجتماع عند وصول النقيب.'},
  {t:'st',lvl:3,say:[['n',"The new recruits are expected to have completed the course by June."]],o:["The recruits should finish the course by June.","The recruits finished the course last June.","The course starts in June.","The recruits don't expect a course."],ar:'expected to have completed by June = يُنتظر أن يكونوا قد أنهوها بحلول يونيو (في موعد أقصاه يونيو).'},
  {t:'st',lvl:3,say:[['n',"Instead of driving, Sam took the train."]],o:["Sam didn't drive.","Sam drove the train.","Sam drove and took the train.","Sam missed the train."],ar:'instead of = بدلاً من ← ركب القطار ولم يقُد.'},

  // ── Short dialog + spoken question ──
  {t:'dl',lvl:1,say:[['m',"Is this your book?"],['f',"No, it's Sarah's."]],q:"Whose book is it?",o:["Sarah's.","The man's.","The woman's.","The teacher's."],ar:'it\'s Sarah\'s = إنه لسارة.'},
  {t:'dl',lvl:1,say:[['f',"Let's go to the beach."],['m',"I can't. I have to work."]],q:"What will the man do?",o:["Work.","Go to the beach.","Swim.","Sleep."],ar:'I have to work = يجب أن أعمل ← سيعمل.'},
  {t:'dl',lvl:1,say:[['m',"How many students are in your class?"],['f',"Fifteen, but three are absent today."]],q:"How many students are in class today?",o:["Twelve.","Fifteen.","Three.","Eighteen."],ar:'15 − 3 غائبين = 12 حاضرين اليوم.'},
  {t:'dl',lvl:1,say:[['m',"What color is your car?"],['f',"It's red."]],q:"What color is the woman's car?",o:["Red.","Blue.","White.","Black."],ar:'It\'s red = إنها حمراء.'},
  {t:'dl',lvl:1,say:[['f',"Where's Tom?"],['m',"He's in the kitchen, cooking dinner."]],q:"What is Tom doing?",o:["Cooking.","Sleeping.","Eating.","Studying."],ar:'cooking dinner = يطبخ العشاء.'},
  {t:'dl',lvl:2,say:[['f',"Did you get the tickets?"],['m',"No, they were sold out."]],q:"What does the man mean?",o:["There were no tickets left.","He sold the tickets.","He bought the tickets.","The tickets were cheap."],ar:'sold out = نفدت (بيعت كلها) ← لم تبقَ تذاكر.'},
  {t:'dl',lvl:2,say:[['m',"I'd like to cash this check."],['f',"Do you have an account at this bank?"]],q:"Where are they?",o:["At a bank.","At a restaurant.","At a hospital.","At a hotel."],ar:'cash a check + account = صرف شيك وحساب ← في بنك.'},
  {t:'dl',lvl:2,say:[['f',"Your flight leaves at two fifteen. Please be at the gate thirty minutes before."],['m',"OK, thank you."]],q:"When should the man be at the gate?",o:["At 1:45.","At 2:15.","At 2:45.","At 1:15."],ar:'2:15 قبلها بثلاثين دقيقة = 1:45.'},
  {t:'dl',lvl:2,say:[['m',"Can you help me move this desk?"],['f',"Sure, as soon as I finish this phone call."]],q:"What will the woman do first?",o:["Finish her phone call.","Move the desk.","Call the man.","Buy a desk."],ar:'as soon as I finish = بمجرّد أن أنهي ← أولاً تُنهي المكالمة.'},
  {t:'dl',lvl:2,say:[['f',"How was the movie?"],['m',"Boring. I fell asleep."]],q:"What did the man think of the movie?",o:["He didn't like it.","He liked it a lot.","He didn't see it.","It was exciting."],ar:'Boring + fell asleep = ممل ونام ← لم يعجبه.'},
  {t:'dl',lvl:2,say:[['f',"I'm going to the store. Do you need anything?"],['m',"Yes, could you get me some milk?"]],q:"What does the man want?",o:["Milk.","Bread.","A ride.","Nothing."],ar:'get me some milk = أحضر لي حليباً.'},
  {t:'dl',lvl:2,say:[['m',"Excuse me, is this seat taken?"],['f',"No, go ahead."]],q:"What will the man probably do?",o:["Sit down.","Leave.","Take the seat home.","Stand up."],ar:'is this seat taken = هل المقعد محجوز ← لا، تفضّل ← سيجلس.'},
  {t:'dl',lvl:3,say:[['m',"I thought the briefing was at ten."],['f',"It was, but it's been moved to eleven."]],q:"When is the briefing now?",o:["At eleven.","At ten.","At ten thirty.","It was canceled."],ar:'it\'s been moved to eleven = نُقل إلى الحادية عشرة.'},
  {t:'dl',lvl:3,say:[['f',"Are you going to apply for the job?"],['m',"I would if I had more experience."]],q:"What does the man mean?",o:["He won't apply because he lacks experience.","He has already applied.","He has a lot of experience.","He got the job."],ar:'I would if I had = كنت سأفعل لو كان عندي (وليس عندي) ← لن يتقدّم.'},
  {t:'dl',lvl:3,say:[['m',"Should I take the highway or Route 9?"],['f',"Take Route 9. The highway is under construction."]],q:"Why should the man take Route 9?",o:["The highway is being repaired.","Route 9 is shorter.","The highway is closed at night.","Route 9 has no traffic lights."],ar:'under construction = تحت الإنشاء/الصيانة.'},
  {t:'dl',lvl:3,say:[['f',"Did Captain Lee approve the leave request?"],['m',"Not exactly. He said he'd think it over."]],q:"What did Captain Lee do?",o:["He hasn't decided yet.","He approved the request.","He refused the request.","He forgot about it."],ar:'think it over = يفكّر فيه ← لم يقرّر بعد.'},
  {t:'dl',lvl:3,say:[['m',"The printer's jammed again."],['f',"I'll call maintenance. Meanwhile, use the one down the hall."]],q:"What does the woman suggest?",o:["Using another printer.","Fixing the printer himself.","Calling maintenance himself.","Waiting until tomorrow."],ar:'use the one down the hall = استخدم الطابعة الأخرى في آخر الممر.'},
  {t:'dl',lvl:3,say:[['f',"You look exhausted."],['m',"I've been on duty for eighteen hours straight."]],q:"Why is the man tired?",o:["He has worked a long time without a break.","He didn't sleep because of noise.","He has been sick.","He ran eighteen miles."],ar:'on duty for eighteen hours straight = في الخدمة 18 ساعة متواصلة.'},

  // ── Announcements / news ──
  {t:'an',lvl:2,say:[['n',"Attention, please. The library will close early today at four o'clock because of a staff meeting. It will open at the usual time tomorrow."]],q:"Why will the library close early?",o:["There is a staff meeting.","It is a holiday.","There is no electricity.","It is being cleaned."],ar:'because of a staff meeting = بسبب اجتماع الموظفين.'},
  {t:'an',lvl:2,say:[['n',"Good morning, students. Today's class will be held in room two oh four instead of room one ten. Please bring your workbooks."]],q:"What has changed?",o:["The classroom.","The time of the class.","The teacher.","The book."],ar:'in room 204 instead of room 110 = تغيّرت القاعة.'},
  {t:'an',lvl:3,say:[['n',"This is the weather report. Tonight will be clear and cold, with temperatures falling below freezing. Tomorrow, clouds will move in, and there is a good chance of snow by the afternoon."]],q:"What will the weather be like tomorrow afternoon?",o:["Snowy.","Clear and warm.","Rainy.","Sunny."],ar:'a good chance of snow by the afternoon = احتمال كبير للثلج بعد الظهر.'},
  {t:'an',lvl:3,say:[['n',"All personnel scheduled for physical training should report to the gym at oh six hundred hours. Those with medical excuses must present them to the duty officer before oh five forty-five."]],q:"When must medical excuses be presented?",o:["Before 0545.","At 0600.","After training.","At noon."],ar:'before 0545 = قبل الخامسة وخمس وأربعين دقيقة.'},
  {t:'an',lvl:3,say:[['n',"According to the city report, the number of traffic accidents dropped by twenty percent last year. Officials say the decrease is mainly the result of new speed cameras."]],q:"What is the main reason accidents decreased?",o:["New speed cameras.","Better roads.","Fewer cars.","More police officers."],ar:'mainly the result of new speed cameras = السبب الرئيسي كاميرات السرعة.'},
  {t:'an',lvl:3,say:[['n',"Passengers on flight three sixteen to Dallas, your departure gate has been changed from gate twelve to gate twenty. Boarding will begin in fifteen minutes."]],q:"What should passengers on flight 316 do?",o:["Go to gate 20.","Stay at gate 12.","Wait fifteen minutes and leave.","Change their flight."],ar:'changed from gate 12 to gate 20 = تغيّرت البوابة إلى 20.'},
];

const ALCPT_PASSAGES={
  p1:"Sam is a student at the language school. He gets up at six o'clock every morning. He eats breakfast at six thirty and takes the bus to school at seven. His classes start at seven forty-five and end at two o'clock. After class, he plays soccer with his friends.",
  p2:"Last summer, the Smith family drove from Chicago to Denver. The trip took two days. On the first night, they stayed in a small hotel in Nebraska. The next morning, their car had a flat tire, so Mr. Smith changed it before they continued. They arrived in Denver in the evening, tired but happy.",
  p3:"Military aircraft maintenance follows strict schedules. After a set number of flight hours, each aircraft must undergo a detailed inspection, regardless of whether any problems have been reported. Technicians examine the engines, hydraulic systems, and electronic equipment. If a defect is found, the aircraft is grounded until the necessary repairs have been completed and approved by a supervisor.",
  p4:"Many people believe that drinking enough water is only important in hot weather. However, the body loses water all year round through breathing and sweating. In cold climates, people often feel less thirsty, so they may drink too little without noticing. Doctors recommend drinking water regularly throughout the day, not only when people feel thirsty.",
};

const ALCPT_READ=[
  // ── Grammar · level 1 ──
  {t:'gr',lvl:1,q:"She _______ to school every day.",o:["goes","go","going","gone"],ar:'she + المضارع البسيط ← نضيف es: goes.'},
  {t:'gr',lvl:1,q:"There _______ three books on the desk.",o:["are","is","am","be"],ar:'three books جمع ← There are.'},
  {t:'gr',lvl:1,q:"I _______ TV last night.",o:["watched","watch","watching","will watch"],ar:'last night ماضٍ ← watched.'},
  {t:'gr',lvl:1,q:"Where _______ you yesterday?",o:["were","was","are","did"],ar:'you + الماضي من be ← were.'},
  {t:'gr',lvl:1,q:"He doesn't have _______ money.",o:["any","some","many","a"],ar:'في النفي نستخدم any.'},
  {t:'gr',lvl:1,q:"This is _______ book. It belongs to me.",o:["my","mine","me","I"],ar:'قبل الاسم صفة ملكية: my book.'},
  {t:'gr',lvl:1,q:"The pen is _______ the table.",o:["on","at","of","to"],ar:'فوق سطح ← on the table.'},
  {t:'gr',lvl:1,q:"How _______ apples do you want?",o:["many","much","long","old"],ar:'apples معدودة ← How many.'},
  {t:'gr',lvl:1,q:"She is _______ than her sister.",o:["taller","more tall","tallest","tall"],ar:'مقارنة بين اثنين + than ← taller.'},
  // ── Grammar · level 2 ──
  {t:'gr',lvl:2,q:"I have lived here _______ 2015.",o:["since","for","ago","from"],ar:'2015 نقطة بداية ← since.'},
  {t:'gr',lvl:2,q:"If it rains tomorrow, we _______ at home.",o:["will stay","stayed","would stay","stay to"],ar:'الشرط الأول: If + مضارع ← will + فعل.'},
  {t:'gr',lvl:2,q:"The letter _______ by the secretary yesterday.",o:["was typed","typed","is typing","has type"],ar:'المبني للمجهول في الماضي: was + التصريف الثالث.'},
  {t:'gr',lvl:2,q:"He asked me where I _______.",o:["lived","do live","live did","does live"],ar:'السؤال المنقول: ترتيب جملة عادية + ماضٍ ← where I lived.'},
  {t:'gr',lvl:2,q:"You _______ wear a seatbelt. It's the law.",o:["must","may","could","might"],ar:'إلزام (القانون) ← must.'},
  {t:'gr',lvl:2,q:"I'm looking forward to _______ you.",o:["seeing","see","saw","be seen"],ar:'look forward to + ing (to هنا حرف جر).'},
  {t:'gr',lvl:2,q:"This is the man _______ car was stolen.",o:["whose","who","which","whom"],ar:'ملكية (سيارته) ← whose.'},
  {t:'gr',lvl:2,q:"She has already _______ her homework.",o:["finished","finish","finishing","finishes"],ar:'has + التصريف الثالث ← finished.'},
  {t:'gr',lvl:2,q:"I didn't go out _______ it was raining.",o:["because","so","but","or"],ar:'السبب ← because.'},
  {t:'gr',lvl:2,q:"He used to _______ in Riyadh.",o:["live","living","lived","lives"],ar:'used to + فعل مجرد ← live.'},
  {t:'gr',lvl:2,q:"Neither Tom _______ Bill came to class.",o:["nor","or","and","but"],ar:'neither ... nor = لا ... ولا.'},
  {t:'gr',lvl:2,q:"The soldiers were too tired _______ march.",o:["to","for","that","so"],ar:'too + صفة + to + فعل.'},
  // ── Grammar · level 3 ──
  {t:'gr',lvl:3,q:"If I _______ the answer, I would tell you.",o:["knew","know","had know","will know"],ar:'الشرط الثاني: If + ماضٍ ← would.'},
  {t:'gr',lvl:3,q:"By the time we arrived, the movie _______.",o:["had already started","already starts","has already started","will start"],ar:'حدث قبل حدث ماضٍ ← الماضي التام had started.'},
  {t:'gr',lvl:3,q:"The general demanded that the report _______ finished today.",o:["be","being","to be","will be"],ar:'demand that + فعل مجرد (صيغة الطلب) ← be.'},
  {t:'gr',lvl:3,q:"I wish I _______ more time to study.",o:["had","have","will have","having"],ar:'wish عن الحاضر ← ماضٍ: had.'},
  {t:'gr',lvl:3,q:"Not only _______ late, but he also forgot his books.",o:["was he","he was","he is","did he be"],ar:'Not only في أول الجملة ← قلب: was he.'},
  {t:'gr',lvl:3,q:"The bridge _______ next year.",o:["will be built","will build","is building","built"],ar:'مجهول في المستقبل ← will be built.'},
  {t:'gr',lvl:3,q:"She must _______ the bus; she isn't here yet.",o:["have missed","missed","miss to","has missed"],ar:'استنتاج عن الماضي ← must have + التصريف الثالث.'},
  {t:'gr',lvl:3,q:"He denied _______ the window.",o:["breaking","to break","break","broken"],ar:'deny + ing ← breaking.'},
  {t:'gr',lvl:3,q:"Hardly _______ the plane landed when the storm began.",o:["had","has","did","was"],ar:'Hardly ... when مع قلب ← Hardly had.'},
  {t:'gr',lvl:3,q:"The equipment, _______ was delivered yesterday, is already broken.",o:["which","who","what","whom"],ar:'شيء + بين فاصلتين ← which.'},
  {t:'gr',lvl:3,q:"I'd rather you _______ smoke in here.",o:["didn't","don't","won't","not"],ar:'I\'d rather + شخص + ماضٍ ← didn\'t.'},
  {t:'gr',lvl:3,q:"Had he studied harder, he _______ the exam.",o:["would have passed","will pass","passed","would pass"],ar:'Had he = If he had (الشرط الثالث) ← would have passed.'},

  // ── Vocabulary: underlined word ──
  {t:'vo',lvl:1,q:"The children were <u>happy</u> at the party.",o:["glad","sad","angry","tired"],ar:'happy = glad (سعيد).'},
  {t:'vo',lvl:1,q:"Please <u>shut</u> the door.",o:["close","open","paint","break"],ar:'shut = close (أغلق).'},
  {t:'vo',lvl:1,q:"This exercise is very <u>simple</u>.",o:["easy","long","hard","new"],ar:'simple = easy (سهل).'},
  {t:'vo',lvl:1,q:"My brother is <u>ill</u>.",o:["sick","tall","busy","late"],ar:'ill = sick (مريض).'},
  {t:'vo',lvl:2,q:"The sergeant <u>repaired</u> the radio.",o:["fixed","broke","sold","bought"],ar:'repaired = fixed (أصلح).'},
  {t:'vo',lvl:2,q:"Classes <u>begin</u> at 0800.",o:["start","end","stop","change"],ar:'begin = start (يبدأ).'},
  {t:'vo',lvl:2,q:"We need to <u>purchase</u> new uniforms.",o:["buy","wash","return","wear"],ar:'purchase = buy (يشتري).'},
  {t:'vo',lvl:2,q:"The road was <u>slippery</u> after the rain.",o:["easy to slide on","very wide","very dry","crowded"],ar:'slippery = زلِق، سهل الانزلاق عليه.'},
  {t:'vo',lvl:2,q:"He <u>seldom</u> eats breakfast.",o:["rarely","always","usually","quickly"],ar:'seldom = rarely (نادراً).'},
  {t:'vo',lvl:2,q:"The test was <u>difficult</u>.",o:["hard","short","quick","easy"],ar:'difficult = hard (صعب).'},
  {t:'vo',lvl:3,q:"The pilot was <u>reluctant</u> to fly in the storm.",o:["unwilling","eager","able","proud"],ar:'reluctant = unwilling (متردّد/غير راغب).'},
  {t:'vo',lvl:3,q:"The commander <u>postponed</u> the inspection.",o:["delayed","finished","ordered","completed"],ar:'postponed = delayed (أجّل).'},
  {t:'vo',lvl:3,q:"The instructions were <u>vague</u>.",o:["unclear","detailed","written","short"],ar:'vague = unclear (غامض).'},
  {t:'vo',lvl:3,q:"The team <u>accomplished</u> its mission.",o:["completed","started","forgot","changed"],ar:'accomplished = completed (أنجز).'},
  {t:'vo',lvl:3,q:"Fuel is <u>scarce</u> in the area.",o:["hard to find","cheap","dirty","heavy"],ar:'scarce = نادر، صعب الحصول عليه.'},
  {t:'vo',lvl:3,q:"The medic <u>treated</u> the wounded soldier.",o:["took care of","carried","found","called"],ar:'treated (طبياً) = took care of (عالج).'},

  // ── Vocabulary: completion ──
  {t:'gr',lvl:1,q:"I write with a _______.",o:["pen","cup","chair","shoe"],ar:'نكتب بالقلم ← pen.'},
  {t:'gr',lvl:2,q:"You need a _______ to drive a car legally.",o:["driver's license","passport photo","library card","boarding pass"],ar:'رخصة القيادة ← driver\'s license.'},
  {t:'gr',lvl:2,q:"The _______ checks passengers' tickets on the train.",o:["conductor","pilot","cashier","dentist"],ar:'مفتّش التذاكر في القطار ← conductor.'},

  // ── Reading passages ──
  {t:'rd',lvl:1,p:'p1',q:"When do Sam's classes end?",o:["At two o'clock.","At seven forty-five.","At six thirty.","At seven."],ar:'end at two o\'clock = تنتهي الساعة الثانية.'},
  {t:'rd',lvl:1,p:'p1',q:"How does Sam go to school?",o:["By bus.","On foot.","By car.","By bike."],ar:'takes the bus to school = يركب الباص.'},
  {t:'rd',lvl:1,p:'p1',q:"What does Sam do after class?",o:["He plays soccer.","He eats breakfast.","He takes a bus to work.","He studies at home."],ar:'After class, he plays soccer.'},
  {t:'rd',lvl:2,p:'p2',q:"How long did the trip take?",o:["Two days.","One day.","One week.","Two weeks."],ar:'The trip took two days.'},
  {t:'rd',lvl:2,p:'p2',q:"What happened on the second morning?",o:["The car had a flat tire.","They arrived in Denver.","They stayed in a hotel.","They went back to Chicago."],ar:'The next morning, their car had a flat tire.'},
  {t:'rd',lvl:2,p:'p2',q:"Where did they spend the first night?",o:["In Nebraska.","In Denver.","In Chicago.","In their car."],ar:'they stayed in a small hotel in Nebraska.'},
  {t:'rd',lvl:3,p:'p3',q:"When must an aircraft be inspected?",o:["After a set number of flight hours.","Only when a problem is reported.","Once every ten years.","Before every flight."],ar:'After a set number of flight hours ... regardless of problems.'},
  {t:'rd',lvl:3,p:'p3',q:"What happens if a defect is found?",o:["The aircraft cannot fly until it is repaired and approved.","The pilot fixes it during the flight.","The aircraft is sold.","The technicians ignore it."],ar:'grounded until repairs are completed and approved.'},
  {t:'rd',lvl:3,p:'p3',q:"The word \"grounded\" in the passage means:",o:["not allowed to fly","painted","cleaned","flown immediately"],ar:'grounded (للطائرة) = ممنوعة من الطيران.'},
  {t:'rd',lvl:3,p:'p4',q:"What is the main idea of the passage?",o:["People need to drink water regularly in all seasons.","People should only drink water in summer.","Cold weather makes people thirsty.","Doctors don't agree about water."],ar:'الفكرة الرئيسية: اشرب الماء بانتظام طوال السنة.'},
  {t:'rd',lvl:3,p:'p4',q:"Why might people drink too little in cold weather?",o:["They feel less thirsty.","Water is hard to find.","They sweat more.","Doctors tell them to."],ar:'people often feel less thirsty = يشعرون بعطش أقل.'},
];
