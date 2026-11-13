/**
 * PIRAMIDA O'QUV MARKAZI — main.js
 * Multi-Language (UZ / EN / RU), Dark/Light Theme, Course Tabs, Counters, Telegram
 */

(function () {
  "use strict";

  /* ============================================================
     1. TRANSLATION DICTIONARY (UZ, EN, RU)
     ============================================================ */
  const translations = {
    uz: {
      // Nav
      nav_home: "Bosh sahifa",
      nav_courses: "Kurslar",
      nav_about: "Markaz haqida",
      nav_teachers: "Ustozlar",
      nav_faq: "Savol-javob",
      nav_contact: "Aloqa",
      nav_enroll: "Kursga yozilish ↗",

      // Hero
      hero_badge: "BILIM — KELAJAK POYDEVORI",
      hero_title_1: "Kelajagingizni ",
      hero_title_highlight: "bilim bilan",
      hero_title_2: " quring!",
      hero_desc: "Piramida O'quv Markazida o'z maqsadlaringiz sari ishonch bilan qadam qo'ying. Zamonaviy metodika, tajribali ustozlar va do'stona muhit sizni kutmoqda.",
      hero_btn_enroll: "Hoziroq ro'yxatdan o'tish ↗",
      hero_btn_courses: "Kurslarni ko'rish ↓",
      hero_guarantee: "Har bir katta natija bugungi kichik qadamdan boshlanadi.",
      hero_pill_1_title: "SIFATLI TA'LIM",
      hero_pill_1_sub: "IELTS 7.5+ natijalar",
      hero_pill_2_title: "SIZNING KELAJAGINGIZ",
      hero_pill_2_sub: "Bugundan boshlanadi",
      badge_brand_title: "PIRAMIDA O'QUV MARKAZI",
      badge_brand_slogan: "Bilim • Samara • Kelajak",

      // Stats
      stat_1_num: "1500+",
      stat_1_label: "Muvaffaqiyatli o'quvchilar",
      stat_2_num: "10+",
      stat_2_label: "Zamonaviy ta'lim yo'nalishi",
      stat_3_num: "96%",
      stat_3_label: "O'qishga kirish ko'rsatkichi",
      stat_4_num: "100%",
      stat_4_label: "Amaliy darslar va natija",

      // Courses Section
      courses_eyebrow: "TA'LIM YO'NALISHLARI",
      courses_title: "O'zingizga mos kursni tanlang",
      courses_desc: "Maqsadingizga mos yo'nalishni tanlang va bilim olishni professionallar bilan boshlang.",
      tab_all: "Barchasi",
      tab_languages: "Xorijiy tillar",
      tab_exact: "Aniq fanlar",
      tab_it: "IT & Dasturlash",

      // Course Cards
      c1_title: "Ingliz tili (General & IELTS)",
      c1_desc: "Grammatika, so'zlashuv, tinglab tushunish va xalqaro IELTS imtihoniga professional tayyorgarlik.",
      c1_badge: "Mashhur",
      c1_f1: "Haftada 3 kun 1.5 soatdan",
      c1_f2: "Bepul Speaking Club va Mock testlar",
      c1_f3: "IELTS 7.0+ kafolatlangan reja",
      c1_duration: "6-9 oy",

      c2_title: "Matematika",
      c2_desc: "Boshlang'ich tushunchalardan murakkab olimpiada masalalarigacha tizimli va mantiqiy o'rganish.",
      c2_badge: "Asosiy",
      c2_f1: "Mantiqiy fikrlashni rivojlantirish",
      c2_f2: "DTM va xalqaro testlarga tayyorgarlik",
      c2_f3: "Individual yondashuv va tahlil",
      c2_duration: "6-10 oy",

      c3_title: "IT va Web Dasturlash",
      c3_desc: "Kompyuter savodxonligi, Frontend (HTML, CSS, JavaScript) va zamonaviy web texnologiyalar.",
      c3_badge: "Zamonaviy",
      c3_f1: "Noldan amaliy loyihalar yaratish",
      c3_f2: "Portfolio tayyorlash va mentorlik",
      c3_f3: "Zamonaviy kompyuter xonalari",
      c3_duration: "4-6 oy",

      c4_title: "Fizika",
      c4_desc: "Tabiat qonunlari, fizik formulalar va laboratoriya masalalarini sodda, qiziqarli tilda o'rganish.",
      c4_badge: "Fundamental",
      c4_f1: "Formulalarni yodlash emas, tushunish",
      c4_f2: "Oliy ta'lim DTM bazasi bo'yicha tahlil",
      c4_f3: "Olimpiada masalalari yechimlari",
      c4_duration: "8 oy",

      c5_title: "Ona tili va Adabiyot",
      c5_desc: "Savodxonlik, til qoidalari, matn bilan ishlash va adabiyot tarixini mukammal o'zlashtirish.",
      c5_badge: "Majburiy blok",
      c5_f1: "Milli sertifikatga maqsadli tayyorgarlik",
      c5_f2: "Insho va ijodiy matn tahlili",
      c5_f3: "Haftalik test nazorati",
      c5_duration: "6 oy",

      c6_title: "Abituriyent intensiv tayyorlov",
      c6_desc: "Oliy ta'lim muassasalariga (OTM) grant asosida kirish uchun barcha bloklar bo'yicha intensiv kurs.",
      c6_badge: "Intensiv",
      c6_f1: "Har haftalik DTM standartidagi imtihon",
      c6_f2: "Kuchli psixologik tayyorgarlik",
      c6_f3: "96% talaba bo'lish kafolati tizimi",
      c6_duration: "9 oy",

      course_enroll_btn: "Kursga yozilish ↗",

      // About
      about_eyebrow: "BIZ HAQIMIZDA",
      about_title: "Har bir o'quvchining kelajagi biz uchun muhim",
      about_desc: "Piramida O'quv Markazi — sifatli ta'lim, mustahkam poydevor va yorqin kelajak garovi. Biz har bir o'quvchining qobiliyatini kashf etib, ularni maqsadlari sari yetaklaymiz.",
      b1_title: "Tizimli ta'lim",
      b1_desc: "Har bir dars puxta o'ylangan reja va xalqaro metodika asosida olib boriladi.",
      b2_title: "Kuchli mentorlar",
      b2_desc: "O'z sohasida yuqori natijalarga erishgan, sertifikatlangan mutaxassislar.",
      b3_title: "Doimiy monitoring",
      b3_desc: "Har haftalik test sinovlari va ota-onalarga o'quvchi natijalari hisoboti.",
      b4_title: "Shinam muhit",
      b4_desc: "Zamonaviy jihozlangan xonalar, qulay lokatsiya va do'stona atmosfera.",
      about_btn: "Biz bilan o'qing ↗",
      about_badge_title: "PIRAMIDA O'QUV MARKAZI",
      about_badge_sub: "Bilim, intilish va yuksak marralar maskani!",

      // Process
      process_eyebrow: "QANDAY BOSHLAYMIZ?",
      process_title: "Ta'limni boshlash juda oson",
      process_desc: "Atigi 4 ta oddiy qadam orqali Piramida oilasiga a'zo bo'ling.",
      step1_title: "Ariza qoldiring",
      step1_desc: "Sayt orqali o'zingizga mos kursni tanlab, formani to'ldiring.",
      step2_title: "Bepul konsultatsiya",
      step2_desc: "Administratorimiz siz bilan bog'lanib, barcha savollaringizga javob beradi.",
      step3_title: "Darajangizni aniqlang",
      step3_desc: "Bepul diagnostik test topshirib, o'zingizga mos guruhga yoziling.",
      step4_title: "Darslarni boshlang",
      step4_desc: "Birinchi darsdan bilim oling va o'z orzuingiz sari dadil qadam tashlang.",

      // Teachers
      teachers_eyebrow: "USTOZLARIMIZ",
      teachers_title: "O'z sohasining ustalari",
      teachers_desc: "Katta tajribaga ega, yoshlarga ilhom beruvchi professional pedagoglar.",
      t1_subject: "Ingliz tili (IELTS 8.0)",
      t1_name: "Javohir Aliyev",
      t1_desc: "5+ yillik tajriba. 200 dan ortiq o'quvchilari IELTS 7+ va xalqaro grantlarni qo'lga kiritgan.",
      t2_subject: "Matematika & Fizika",
      t2_name: "Azizbek Rustamov",
      t2_desc: "Oliy toifali mutaxassis. Milliy va xalqaro olimpiada g'oliblarini tayyorlagan pedagog.",
      t3_subject: "IT & Dasturlash",
      t3_name: "Sardorbek Qodirov",
      t3_desc: "Senior Full-Stack Developer. 4 yillik amaliy tajriba, yuzlab yosh dasturchilar ustozi.",

      // Reviews
      reviews_eyebrow: "NATIJALAR VA FIKRLAR",
      reviews_title: "O'quvchilarimiz biz haqimizda",
      reviews_desc: "Bizning eng katta yutug'imiz — bu o'quvchilarimizning hayotdagi g'alabalari.",
      r1_text: "“Piramida markazida 6 oy davomida IELTS kursida tahsil oldim va 7.5 ball oldim! Ustozlarning samimiy yondashuvi va Speaking Club darslari katta yordam berdi.”",
      r1_author: "Madina Karimova",
      r1_course: "IELTS kursi bitiruvchisi",
      r2_text: "“Matematika va fizika fanlaridan abituriyent kursida o'qidim. Davlat granti asosida Toshkent Axborot Texnologiyalari Universitetiga qabul qilindim!”",
      r2_author: "Bobur Mirzayev",
      r2_course: "Abituriyent tayyorlov kursi",
      r3_text: "“IT sohasiga qiziqib kelgan edim. Hozirda o'z portfoliom bor va birinchi web loyihalarimni tayyorlab sotmoqdaman. Barcha ustozlarga rahmat!”",
      r3_author: "Diyorbek Ismoilov",
      r3_course: "Web dasturlash kursi",

      // FAQ
      faq_eyebrow: "SAVOL-JAVOB",
      faq_title: "Ko'p beriladigan savollar",
      faq_desc: "O'quv markazimiz va darslar haqida eng muhim savollarga javoblar.",
      q1: "Kurslarga qanday yozilish mumkin?",
      a1: "Saytdagi ro'yxatdan o'tish formasini to'ldiring yoki bizning administratorimiz bilan bog'laning (+998 97 152-84-00). Biz sizga mos vaqt va guruhni belgilaymiz.",
      q2: "Birinchi dars bepulmi?",
      a2: "Ha! Siz har qanday kursimizning ilk darsiga bepul qatnashib, ustozning dars o'tish uslubi va sharoitlar bilan tanishishingiz mumkin.",
      q3: "Dars jadvali qanday tuzilgan?",
      a3: "Darslar haftada 3 kun, 1.5 - 2 soatdan o'tiladi. Ertalabki, tushki va kechki qulay vaqt guruhlari mavjud.",
      q4: "Kurs yakunida sertifikat beriladimi?",
      a4: "Ha, kursni muvaffaqiyatli tamomlagan va yakuniy imtihonlarni topshirgan o'quvchilarga maxsus sertifikat taqdim etiladi.",

      // Register Form
      reg_eyebrow: "BIRINCHI QADAM",
      reg_title: "Orzularingiz sari bugun qadam qo'ying!",
      reg_desc: "Formani to'ldiring. Administratorimiz siz bilan bog'lanib, barcha chegirmalar va dars jadvallari haqida ma'lumot beradi.",
      reg_perk1: "✦ Bepul diagnostik test va sinov darsi",
      reg_perk2: "✦ Darsliklar va o'quv materiallari bepul",
      reg_perk3: "✦ O'quvchilar uchun shaxsiy rivojlanish monitoringi",
      reg_form_title: "Kursga ro'yxatdan o'tish",
      reg_form_sub: "Ma'lumotlaringizni qoldiring, tez orada aloqaga chiqamiz.",
      lbl_name: "Ism va familiyangiz *",
      ph_name: "Masalan: Aziza Rahimova",
      lbl_phone: "Telefon raqamingiz *",
      ph_phone: "+998 (90) 123-45-67",
      lbl_course: "Qaysi kurs qiziqtirmoqda? *",
      opt_select: "Kursni tanlang",
      lbl_msg: "Qo'shimcha savol yoki izohingiz",
      ph_msg: "Qulay dars vaqti yoki boshqa savollaringiz...",
      btn_submit: "Arizani yuborish ↗",
      msg_success: "✅ Arizangiz muvaffaqiyatli qabul qilindi! Tez orada administrator siz bilan bog'lanadi.",

      // Contact
      contact_eyebrow: "BIZ BILAN BOG'LANING",
      contact_title: "Har doim aloqadamiz",
      contact_desc: "Biz bilan qo'ng'iroq yoki Telegram orqali bog'lanishingiz, yoki markazimizga tashrif buyurishingiz mumkin.",
      c_admin_label: "Administrator",
      c_admin_val: "Isroilova Ozoda — +998 (97) 152-84-00",
      c_tg_label: "Telegram (Admin)",
      c_bot_label: "Rasmiy Telegram Bot",
      c_map_label: "Google Xaritada ko'rish",
      c_map_val: "Piramida O'quv Markazi lokatsiyasi ↗",
      c_hours_label: "Ish vaqti",
      c_hours_val: "Dushanba - Shanba: 08:00 - 20:00",
      c_open_map: "🗺 Google Maps ilovasida ochish ↗",

      // Footer
      footer_desc: "Bilim olish, o'sish va maqsadlar sari ishonch bilan qadam qo'yish uchun sizning ishonchli ta'lim maskaningiz.",
      footer_pages: "Sahifalar",
      footer_contact: "Aloqa",
      footer_copy: "Piramida O'quv Markazi. Barcha huquqlar himoyalangan.",
      footer_motto: "Bilim — eng katta sarmoya."
    },

    ru: {
      // Nav
      nav_home: "Главная",
      nav_courses: "Курсы",
      nav_about: "О центре",
      nav_teachers: "Преподаватели",
      nav_faq: "Вопросы и ответы",
      nav_contact: "Контакты",
      nav_enroll: "Записаться ↗",

      // Hero
      hero_badge: "ЗНАНИЯ — ОСНОВА БУДУЩЕГО",
      hero_title_1: "Постройте будущее ",
      hero_title_highlight: "с помощью знаний!",
      hero_title_2: "",
      hero_desc: "В учебном центре Piramida вы уверенно сделаете шаг к своим целям. Современные методики, опытные наставники и комфортная среда ждут вас.",
      hero_btn_enroll: "Записаться прямо сейчас ↗",
      hero_btn_courses: "Смотреть курсы ↓",
      hero_guarantee: "Каждый большой результат начинается с маленького шага сегодня.",
      hero_pill_1_title: "КАЧЕСТВЕННОЕ ОБУЧЕНИЕ",
      hero_pill_1_sub: "Результаты IELTS 7.5+",
      hero_pill_2_title: "ВАШЕ БУДУЩЕЕ",
      hero_pill_2_sub: "Начинается сегодня",
      badge_brand_title: "PIRAMIDA O'QUV MARKAZI",
      badge_brand_slogan: "Bilim • Samara • Kelajak",

      // Stats
      stat_1_num: "1500+",
      stat_1_label: "Успешных учеников",
      stat_2_num: "10+",
      stat_2_label: "Направлений обучения",
      stat_3_num: "96%",
      stat_3_label: "Поступление в ВУЗы",
      stat_4_num: "100%",
      stat_4_label: "Практика и результат",

      // Courses Section
      courses_eyebrow: "НАПРАВЛЕНИЯ ОБУЧЕНИЯ",
      courses_title: "Выберите подходящий курс",
      courses_desc: "Выберите курс по своим целям и начните путь к успеху вместе с профессионалами.",
      tab_all: "Все курсы",
      tab_languages: "Иностранные языки",
      tab_exact: "Точные науки",
      tab_it: "IT и Программирование",

      // Course Cards
      c1_title: "Английский язык (General & IELTS)",
      c1_desc: "Грамматика, разговорная речь, аудирование и углубленная подготовка к международному экзамену IELTS.",
      c1_badge: "Популярный",
      c1_f1: "3 раза в неделю по 1.5 часа",
      c1_f2: "Бесплатный Speaking Club и Mock-тесты",
      c1_f3: "Гарантированная программа IELTS 7.0+",
      c1_duration: "6-9 месяцев",

      c2_title: "Математика",
      c2_desc: "От базовой арифметики до сложных олимпиадных задач: развиваем логику и аналитическое мышление.",
      c2_badge: "Фундаментальный",
      c2_f1: "Развитие логического мышления",
      c2_f2: "Подготовка к экзаменам DTM и международным тестам",
      c2_f3: "Индивидуальный разбор ошибок",
      c2_duration: "6-10 месяцев",

      c3_title: "IT и Web-программирование",
      c3_desc: "Компьютерная грамотность, Frontend (HTML, CSS, JavaScript) и современные веб-технологии.",
      c3_badge: "Современный",
      c3_f1: "Создание реальных проектов с нуля",
      c3_f2: "Формирование портфолио и менторство",
      c3_f3: "Современные оборудованные классы",
      c3_duration: "4-6 месяцев",

      c4_title: "Физика",
      c4_desc: "Законы природы, физические формулы и лабораторные задачи простым и понятным языком.",
      c4_badge: "Точные науки",
      c4_f1: "Понимание формул, а не заучивание",
      c4_f2: "Разбор базы экзаменов для поступления в ВУЗы",
      c4_f3: "Решение нестандартных олимпиадных задач",
      c4_duration: "8 месяцев",

      c5_title: "Родной язык и Литература",
      c5_desc: "Грамотность, правила языка, работа с текстом и глубокое изучение истории литературы.",
      c5_badge: "Обязательный блок",
      c5_f1: "Целенаправленная подготовка к национальному сертификату",
      c5_f2: "Анализ текстов и написание эссе",
      c5_f3: "Еженедельный контроль успеваемости",
      c5_duration: "6 месяцев",

      c6_title: "Интенсив для абитуриентов",
      c6_desc: "Комплексная интенсивная подготовка по всем блокам для поступления в ВУЗы на грантовой основе.",
      c6_badge: "Интенсив",
      c6_f1: "Еженедельное пробное тестирование стандарта DTM",
      c6_f2: "Психологическая подготовка к экзаменам",
      c6_f3: "Система с 96% показателем поступления",
      c6_duration: "9 месяцев",

      course_enroll_btn: "Записаться ↗",

      // About
      about_eyebrow: "О НАШЕМ ЦЕНТРЕ",
      about_title: "Будущее каждого студента важно для нас",
      about_desc: "Учебный центр Piramida — это залог качественного образования, прочного фундамента и яркого будущего. Мы раскрываем потенциал каждого ученика и ведем к поставленным целям.",
      b1_title: "Системное обучение",
      b1_desc: "Каждый урок проводится по продуманному плану и международным стандартам.",
      b2_title: "Сильные наставники",
      b2_desc: "Сертифицированные специалисты с большим опытом и высокими результатами.",
      b3_title: "Постоянный мониторинг",
      b3_desc: "Еженедельные тестирования и отчеты для родителей об успеваемости.",
      b4_title: "Комфортная среда",
      b4_desc: "Современные аудитории, удобная локация и вдохновляющая атмосфера.",
      about_btn: "Учиться с нами ↗",
      about_badge_title: "УЧЕБНЫЙ ЦЕНТР PIRAMIDA",
      about_badge_sub: "Пространство знаний, стремлений и высоких побед!",

      // Process
      process_eyebrow: "КАК НАЧАТЬ?",
      process_title: "Начать обучение очень просто",
      process_desc: "Всего 4 простых шага, чтобы стать частью семьи Piramida.",
      step1_title: "Оставьте заявку",
      step1_desc: "Выберите подходящий курс на сайте и заполните краткую форму.",
      step2_title: "Бесплатная консультация",
      step2_desc: "Наш администратор свяжется с вами и подробно ответит на все вопросы.",
      step3_title: "Определите уровень",
      step3_desc: "Пройдите бесплатное диагностическое тестирование и выберите удобное время.",
      step4_title: "Начните занятия",
      step4_desc: "Получайте знания с первого урока и уверенно идите к своей мечте.",

      // Teachers
      teachers_eyebrow: "НАШИ ПРЕПОДАВАТЕЛИ",
      teachers_title: "Мастера своего дела",
      teachers_desc: "Опытные педагоги с многолетней практикой, вдохновляющие учеников на победы.",
      t1_subject: "Английский язык (IELTS 8.0)",
      t1_name: "Жавохир Алиев",
      t1_desc: "Опыт более 5 лет. Более 200 учеников получили балл IELTS 7+ и выиграли международные гранты.",
      t2_subject: "Математика и Физика",
      t2_name: "Азизбек Рустамов",
      t2_desc: "Специалист высшей категории. Подготовил победителей национальных и международных олимпиад.",
      t3_subject: "IT и Программирование",
      t3_name: "Сардорбек Кадиров",
      t3_desc: "Senior Full-Stack разработчик. 4 года практики, наставник сотен молодых программистов.",

      // Reviews
      reviews_eyebrow: "ОТЗЫВЫ И РЕЗУЛЬТАТЫ",
      reviews_title: "Что говорят наши студенты",
      reviews_desc: "Наша главная гордость — это реальные успехи и достижения наших выпускников.",
      r1_text: "“Обучалась на курсе IELTS в Piramida в течение 6 месяцев и получила балл 7.5! Индивидуальный подход учителей и Speaking Club дали потрясающий результат.”",
      r1_author: "Мадина Каримова",
      r1_course: "Выпускница курса IELTS",
      r2_text: "“Занимался математикой и физикой на абитуриентском курсе. Поступил в Ташкентский университет информационных технологий на бюджет!”",
      r2_author: "Бобур Мирзаев",
      r2_course: "Курс подготовки абитуриентов",
      r3_text: "“Пришел в центр с нуля изучать веб-разработку. Сейчас у меня есть готовое портфолио и первые коммерческие заказы. Спасибо преподавателям!”",
      r3_author: "Диёрбек Исмоилов",
      r3_course: "Курс Web-программирования",

      // FAQ
      faq_eyebrow: "ВОПРОСЫ И ОТВЕТЫ",
      faq_title: "Часто задаваемые вопросы",
      faq_desc: "Ответы на самые важные вопросы о нашем центре и организации обучения.",
      q1: "Как записаться на курсы?",
      a1: "Заполните форму на сайте или свяжитесь с нашим администратором по номеру +998 (97) 152-84-00. Мы подберем для вас удобную группу и расписание.",
      q2: "Первый урок бесплатный?",
      a2: "Да! Вы можете бесплатно посетить пробный урок любого направления, чтобы познакомиться с преподавателем и атмосферой в аудитории.",
      q3: "Как составлено расписание?",
      a3: "Занятия проходят 3 раза в неделю по 1.5 - 2 часа. Есть утренние, дневные и вечерние группы.",
      q4: "Выдается ли сертификат по окончании?",
      a4: "Да, студентам, успешно окончившим курс и сдавшим финальные экзамены, вручается официальный сертификат центра.",

      // Register Form
      reg_eyebrow: "ПЕРВЫЙ ШАГ",
      reg_title: "Сделайте шаг к своим целям уже сегодня!",
      reg_desc: "Заполните форму, и наш администратор свяжется с вами, чтобы предоставить полную информацию о скидках и расписании.",
      reg_perk1: "✦ Бесплатный диагностический тест и пробный урок",
      reg_perk2: "✦ Учебные материалы предоставляются бесплатно",
      reg_perk3: "✦ Постоянный контроль прогресса каждого студента",
      reg_form_title: "Запись на курс",
      reg_form_sub: "Оставьте свои данные, и мы свяжемся с вами в течение 15 минут.",
      lbl_name: "Ваше имя и фамилия *",
      ph_name: "Например: Азиза Рахимова",
      lbl_phone: "Номер телефона *",
      ph_phone: "+998 (90) 123-45-67",
      lbl_course: "Какой курс вас интересует? *",
      opt_select: "Выберите курс",
      lbl_msg: "Дополнительный вопрос или комментарий",
      ph_msg: "Удобное время занятий или пожелания...",
      btn_submit: "Отправить заявку ↗",
      msg_success: "✅ Ваша заявка успешно принята! Администратор свяжется с вами в ближайшее время.",

      // Contact
      contact_eyebrow: "СВЯЖИТЕСЬ С НАМИ",
      contact_title: "Мы всегда на связи",
      contact_desc: "Вы можете позвонить нам, написать в Telegram или прийти в наш центр лично.",
      c_admin_label: "Администратор",
      c_admin_val: "Исроилова Озода — +998 (97) 152-84-00",
      c_tg_label: "Telegram (Админ)",
      c_bot_label: "Официальный Telegram Бот",
      c_map_label: "Смотреть на Google Maps",
      c_map_val: "Локация учебного центра Piramida ↗",
      c_hours_label: "Режим работы",
      c_hours_val: "Понедельник - Суббота: 08:00 - 20:00",
      c_open_map: "🗺 Открыть в Google Maps ↗",

      // Footer
      footer_desc: "Ваш надежный образовательный центр для получения знаний, личного роста и уверенного движения к целям.",
      footer_pages: "Разделы",
      footer_contact: "Контакты",
      footer_copy: "Учебный центр Piramida. Все права защищены.",
      footer_motto: "Знания — лучшая инвестиция в будущее."
    },

    en: {
      // Nav
      nav_home: "Home",
      nav_courses: "Courses",
      nav_about: "About",
      nav_teachers: "Teachers",
      nav_faq: "FAQ",
      nav_contact: "Contact",
      nav_enroll: "Enroll Now ↗",

      // Hero
      hero_badge: "KNOWLEDGE — THE CORNERSTONE OF THE FUTURE",
      hero_title_1: "Build your future ",
      hero_title_highlight: "with knowledge!",
      hero_title_2: "",
      hero_desc: "Take confident steps toward your goals at Piramida Education Center. Modern methodologies, top-tier mentors, and an inspiring learning community await you.",
      hero_btn_enroll: "Enroll Today ↗",
      hero_btn_courses: "Explore Courses ↓",
      hero_guarantee: "Every great achievement begins with a single step taken today.",
      hero_pill_1_title: "QUALITY EDUCATION",
      hero_pill_1_sub: "IELTS 7.5+ Results",
      hero_pill_2_title: "YOUR FUTURE",
      hero_pill_2_sub: "Starts Today",
      badge_brand_title: "PIRAMIDA O'QUV MARKAZI",
      badge_brand_slogan: "Bilim • Samara • Kelajak",

      // Stats
      stat_1_num: "1500+",
      stat_1_label: "Graduated Students",
      stat_2_num: "10+",
      stat_2_label: "Academic Programs",
      stat_3_num: "96%",
      stat_3_label: "University Admission Rate",
      stat_4_num: "100%",
      stat_4_label: "Practical Focus & Growth",

      // Courses Section
      courses_eyebrow: "ACADEMIC PROGRAMS",
      courses_title: "Find Your Ideal Course",
      courses_desc: "Choose a program matching your goals and begin your journey guided by industry professionals.",
      tab_all: "All Courses",
      tab_languages: "Languages",
      tab_exact: "Exact Sciences",
      tab_it: "IT & Coding",

      // Course Cards
      c1_title: "English (General & IELTS)",
      c1_desc: "Grammar, speaking fluency, listening comprehension, and comprehensive prep for the IELTS exam.",
      c1_badge: "Popular",
      c1_f1: "3 times a week, 1.5 hours each",
      c1_f2: "Free Speaking Clubs and Mock tests",
      c1_f3: "Guaranteed IELTS 7.0+ curriculum",
      c1_duration: "6-9 months",

      c2_title: "Mathematics",
      c2_desc: "From fundamental principles to advanced olympiad problems: developing analytical thinking and logic.",
      c2_badge: "Core",
      c2_f1: "Logical thinking & problem solving",
      c2_f2: "Prep for national & international tests",
      c2_f3: "Personalized mistake review",
      c2_duration: "6-10 months",

      c3_title: "IT & Web Development",
      c3_desc: "Computer literacy, Frontend fundamentals (HTML, CSS, JavaScript), and cutting-edge web tools.",
      c3_badge: "Modern",
      c3_f1: "Build real projects from scratch",
      c3_f2: "Portfolio creation & mentorship",
      c3_f3: "Modern computer labs",
      c3_duration: "4-6 months",

      c4_title: "Physics",
      c4_desc: "Laws of nature, formulas, and experimental problems explained in an intuitive, engaging way.",
      c4_badge: "Exact Science",
      c4_f1: "Deep understanding, no rote memorization",
      c4_f2: "University entrance exam analysis",
      c4_f3: "Olympiad challenge problem solving",
      c4_duration: "8 months",

      c5_title: "Native Language & Literature",
      c5_desc: "Language rules, literacy, textual analysis, and in-depth study of classical & modern literature.",
      c5_badge: "Required",
      c5_f1: "Targeted preparation for national certificates",
      c5_f2: "Essay writing & creative analysis",
      c5_f3: "Weekly assessment tests",
      c5_duration: "6 months",

      c6_title: "University Entrance Intensive",
      c6_desc: "Comprehensive multi-subject intensive preparation designed to secure government grants at top universities.",
      c6_badge: "Intensive",
      c6_f1: "Weekly mock tests conforming to national standards",
      c6_f2: "Psychological test preparation",
      c6_f3: "Proven 96% university placement system",
      c6_duration: "9 months",

      course_enroll_btn: "Enroll Now ↗",

      // About
      about_eyebrow: "ABOUT OUR CENTER",
      about_title: "Every Student's Future Matters to Us",
      about_desc: "Piramida Education Center is your gateway to high-quality education, solid foundations, and a bright future. We unlock each student's potential and guide them to their dreams.",
      b1_title: "Systematic Learning",
      b1_desc: "Each lesson follows a structured curriculum and international teaching standards.",
      b2_title: "Expert Mentors",
      b2_desc: "Certified professionals with a proven track record and passion for teaching.",
      b3_title: "Continuous Monitoring",
      b3_desc: "Weekly mock exams and transparent progress reports provided to parents.",
      b4_title: "Inspiring Atmosphere",
      b4_desc: "Modern classrooms, convenient location, and a supportive learning environment.",
      about_btn: "Study With Us ↗",
      about_badge_title: "PIRAMIDA EDUCATION CENTER",
      about_badge_sub: "Where knowledge, ambition, and excellence meet!",

      // Process
      process_eyebrow: "HOW TO START?",
      process_title: "Getting Started is Simple",
      process_desc: "Just 4 easy steps to become part of the Piramida community.",
      step1_title: "Submit an Application",
      step1_desc: "Select your desired course on our website and fill out the quick form.",
      step2_title: "Free Consultation",
      step2_desc: "Our administrator will contact you and answer all your questions in detail.",
      step3_title: "Level Assessment",
      step3_desc: "Take a free placement test to join the group that fits your level and schedule.",
      step4_title: "Begin Your Lessons",
      step4_desc: "Gain actionable knowledge from day one and move confidently towards your dreams.",

      // Teachers
      teachers_eyebrow: "OUR MENTORS",
      teachers_title: "Masters of Their Fields",
      teachers_desc: "Experienced educators dedicated to inspiring students and driving academic excellence.",
      t1_subject: "English (IELTS 8.0)",
      t1_name: "Javohir Aliyev",
      t1_desc: "5+ years of experience. Over 200 students scored IELTS 7+ and won international scholarships.",
      t2_subject: "Mathematics & Physics",
      t2_name: "Azizbek Rustamov",
      t2_desc: "Top-tier educator who coached multiple national and international olympiad medalists.",
      t3_subject: "IT & Development",
      t3_name: "Sardorbek Qodirov",
      t3_desc: "Senior Full-Stack Developer with 4 years of industry experience and hundreds of mentored coders.",

      // Reviews
      reviews_eyebrow: "TESTIMONIALS & RESULTS",
      reviews_title: "What Our Students Say",
      reviews_desc: "Our greatest achievements are reflected in the success stories of our alumni.",
      r1_text: "“I studied for the IELTS at Piramida for 6 months and achieved a 7.5 score! The teachers' personalized care and Speaking Club were instrumental to my success.”",
      r1_author: "Madina Karimova",
      r1_course: "IELTS Course Alumna",
      r2_text: "“I took Math and Physics in the university prep program. I earned a full government grant to Tashkent University of Information Technologies!”",
      r2_author: "Bobur Mirzayev",
      r2_course: "University Prep Alumnus",
      r3_text: "“I came here with zero programming knowledge. Now I have my own portfolio and take real client web projects. Huge thanks to all mentors!”",
      r3_author: "Diyorbek Ismoilov",
      r3_course: "Web Development Graduate",

      // FAQ
      faq_eyebrow: "FAQ",
      faq_title: "Frequently Asked Questions",
      faq_desc: "Answers to the most common questions about our center and programs.",
      q1: "How do I enroll in a course?",
      a1: "Fill out the registration form on our website or call our administrator (+998 97 152-84-00). We will arrange the best group and time for you.",
      q2: "Is the first trial lesson free?",
      a2: "Yes! You can attend the first lesson of any course completely free of charge to experience our teaching approach.",
      q3: "What does the schedule look like?",
      a3: "Classes run 3 times a week, 1.5 to 2 hours per session. Morning, afternoon, and evening slots are available.",
      q4: "Do students receive a certificate?",
      a4: "Yes, students who successfully complete the program and pass final exams are awarded an official certificate.",

      // Register Form
      reg_eyebrow: "FIRST STEP",
      reg_title: "Take a Step Toward Your Dreams Today!",
      reg_desc: "Fill in the form below. Our administrator will contact you with detailed schedule options and current discounts.",
      reg_perk1: "✦ Free diagnostic test & trial lesson",
      reg_perk2: "✦ All learning materials provided for free",
      reg_perk3: "✦ Continuous progress tracking for every student",
      reg_form_title: "Course Registration",
      reg_form_sub: "Submit your details and we will reach out within 15 minutes.",
      lbl_name: "Full Name *",
      ph_name: "E.g.: Aziza Rahimova",
      lbl_phone: "Phone Number *",
      ph_phone: "+998 (90) 123-45-67",
      lbl_course: "Which course interests you? *",
      opt_select: "Select a course",
      lbl_msg: "Additional questions or comments",
      ph_msg: "Preferred class time or specific questions...",
      btn_submit: "Submit Application ↗",
      msg_success: "✅ Your application has been received! Our administrator will contact you shortly.",

      // Contact
      contact_eyebrow: "GET IN TOUCH",
      contact_title: "We Are Always Here For You",
      contact_desc: "Feel free to call us, message us on Telegram, or visit our center in person.",
      c_admin_label: "Administrator",
      c_admin_val: "Isroilova Ozoda — +998 (97) 152-84-00",
      c_tg_label: "Telegram (Admin)",
      c_bot_label: "Official Telegram Bot",
      c_map_label: "View on Google Maps",
      c_map_val: "Piramida Education Center Location ↗",
      c_hours_label: "Working Hours",
      c_hours_val: "Monday - Saturday: 08:00 - 20:00",
      c_open_map: "🗺 Open in Google Maps ↗",

      // Footer
      footer_desc: "Your trusted educational hub for knowledge, personal growth, and confident strides toward a brighter future.",
      footer_pages: "Pages",
      footer_contact: "Contact",
      footer_copy: "Piramida Education Center. All rights reserved.",
      footer_motto: "Knowledge is the greatest investment."
    }
  };

  /* ============================================================
     2. TELEGRAM BOT CONFIGURATION
     ============================================================ */
  const TELEGRAM_CONFIG = {
    ENABLED: false, // Set to true when bot token & chat ID are added
    BOT_TOKEN: "BOT_TOKEN_SHU_YERGA",
    CHAT_ID: "CHAT_ID_SHU_YERGA"
  };

  /* ============================================================
     3. LANGUAGE SWITCHER SYSTEM
     ============================================================ */
  let currentLang = localStorage.getItem("piramida_lang") || "uz";

  function setLanguage(lang) {
    if (!translations[lang]) lang = "uz";
    currentLang = lang;
    localStorage.setItem("piramida_lang", lang);
    document.documentElement.setAttribute("lang", lang);

    const dict = translations[lang];

    // Translate all elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Translate placeholder attributes with data-i18n-ph
    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
      const key = el.getAttribute("data-i18n-ph");
      if (dict[key]) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    // Update active button state
    document.querySelectorAll(".lang-btn").forEach(btn => {
      if (btn.getAttribute("data-lang") === lang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  // Bind language buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      setLanguage(lang);
    });
  });

  /* ============================================================
     4. DARK / LIGHT THEME TOGGLE
     ============================================================ */
  const themeToggleBtn = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("piramida_theme") || "light";

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      if (themeToggleBtn) {
        themeToggleBtn.innerHTML = "☀️";
        themeToggleBtn.setAttribute("aria-label", "Yorug' rejimga o'tish");
      }
    } else {
      document.documentElement.removeAttribute("data-theme");
      if (themeToggleBtn) {
        themeToggleBtn.innerHTML = "🌙";
        themeToggleBtn.setAttribute("aria-label", "Tungi rejimga o'tish");
      }
    }
    localStorage.setItem("piramida_theme", theme);
  }

  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      applyTheme(isDark ? "light" : "dark");
    });
  }

  /* ============================================================
     5. MOBILE MENU
     ============================================================ */
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.textContent = isOpen ? "×" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      });
    });
  }

  /* ============================================================
     6. COURSES TABS FILTERING
     ============================================================ */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const courseCards = document.querySelectorAll(".course-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      courseCards.forEach(card => {
        const cat = card.getAttribute("data-category");
        if (filter === "all" || cat === filter) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 10);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(10px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });

  /* ============================================================
     7. ANIMATED NUMBER COUNTERS ON SCROLL
     ============================================================ */
  let countersAnimated = false;

  function animateCounters() {
    const statsSection = document.querySelector(".stats-bar");
    if (!statsSection || countersAnimated) return;

    const rect = statsSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.85) {
      countersAnimated = true;
      document.querySelectorAll(".stat-number").forEach(counter => {
        const target = parseInt(counter.getAttribute("data-target"), 10);
        const suffix = counter.getAttribute("data-suffix") || "";
        const duration = 1800;
        const start = performance.now();

        function updateCount(time) {
          const progress = Math.min((time - start) / duration, 1);
          // Ease-out expo
          const current = Math.floor(progress * target);
          counter.textContent = current + suffix;
          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            counter.textContent = target + suffix;
          }
        }

        requestAnimationFrame(updateCount);
      });
    }
  }

  window.addEventListener("scroll", animateCounters, { passive: true });
  animateCounters();

  /* ============================================================
     8. COURSE SELECTION ON CLICK
     ============================================================ */
  document.querySelectorAll("[data-course-select]").forEach(link => {
    link.addEventListener("click", e => {
      const courseVal = link.getAttribute("data-course-select");
      const courseSelect = document.getElementById("course");
      if (courseSelect) {
        courseSelect.value = courseVal;
      }
    });
  });

  /* ============================================================
     9. PHONE NUMBER FORMATTING MASK (+998 __ ___-__-__)
     ============================================================ */
  const phoneInput = document.getElementById("phone");
  if (phoneInput) {
    phoneInput.addEventListener("input", e => {
      let val = phoneInput.value.replace(/\D/g, "");
      if (val.startsWith("998")) {
        val = val.substring(3);
      }
      val = val.substring(0, 9); // max 9 digits after 998

      let formatted = "+998";
      if (val.length > 0) formatted += " (" + val.substring(0, 2);
      if (val.length >= 2) formatted += ") " + val.substring(2, 5);
      if (val.length >= 5) formatted += "-" + val.substring(5, 7);
      if (val.length >= 7) formatted += "-" + val.substring(7, 9);

      phoneInput.value = formatted;
    });

    phoneInput.addEventListener("focus", () => {
      if (!phoneInput.value) phoneInput.value = "+998 (";
    });
  }

  /* ============================================================
     10. TOAST NOTIFICATION
     ============================================================ */
  function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 4000);
  }

  /* ============================================================
     11. TELEGRAM FORWARDING & FORM SUBMISSION
     ============================================================ */
  async function sendToTelegram(app) {
    if (!TELEGRAM_CONFIG.ENABLED) return false;

    const text =
      `📥 *Yangi ariza! (Piramida O'quv Markazi)*\n\n` +
      `👤 *Ism:* ${app.fullName}\n` +
      `📞 *Telefon:* ${app.phone}\n` +
      `📚 *Kurs:* ${app.course}\n` +
      (app.message ? `💬 *Izoh:* ${app.message}\n` : "") +
      `🕒 *Sana:* ${new Date().toLocaleString("uz-UZ")}`;

    const url = `https://api.telegram.org/bot${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CONFIG.CHAT_ID,
          text: text,
          parse_mode: "Markdown"
        })
      });
      return res.ok;
    } catch (e) {
      console.error("Telegram error:", e);
      return false;
    }
  }

  const registerForm = document.getElementById("registerForm");
  const formMessage = document.getElementById("formMessage");

  if (registerForm) {
    registerForm.addEventListener("submit", async event => {
      event.preventDefault();

      const formData = new FormData(registerForm);

      const application = {
        id: Date.now(),
        fullName: String(formData.get("fullName") || "").trim(),
        phone: String(formData.get("phone") || "").trim(),
        course: String(formData.get("course") || ""),
        message: String(formData.get("message") || "").trim(),
        createdAt: new Date().toISOString()
      };

      if (!application.fullName || !application.phone || !application.course) {
        showToast(
          currentLang === "ru"
            ? "Пожалуйста, заполните все обязательные поля."
            : currentLang === "en"
            ? "Please fill in all required fields."
            : "Iltimos, barcha majburiy maydonlarni to'ldiring."
        );
        return;
      }

      const digitsOnly = application.phone.replace(/\D/g, "");
      if (digitsOnly.length < 9) {
        showToast(
          currentLang === "ru"
            ? "Пожалуйста, введите корректный номер телефона."
            : currentLang === "en"
            ? "Please enter a valid phone number."
            : "Iltimos, to'liq telefon raqam kiriting."
        );
        return;
      }

      const submitBtn = registerForm.querySelector("button[type='submit']");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent =
          currentLang === "ru" ? "Отправка..." : currentLang === "en" ? "Sending..." : "Yuborilmoqda...";
      }

      if (TELEGRAM_CONFIG.ENABLED) {
        await sendToTelegram(application);
      }

      try {
        const saved = JSON.parse(localStorage.getItem("piramidaApplications") || "[]");
        saved.push(application);
        localStorage.setItem("piramidaApplications", JSON.stringify(saved));
      } catch (err) {
        console.warn("Storage warning:", err);
      }

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = translations[currentLang].btn_submit;
      }

      if (formMessage) {
        formMessage.style.display = "block";
      }

      registerForm.reset();
      showToast(
        currentLang === "ru"
          ? "✅ Заявка принята! Скоро свяжемся с вами."
          : currentLang === "en"
          ? "✅ Application received! We will contact you shortly."
          : "✅ Arizangiz qabul qilindi! Tez orada bog'lanamiz."
      );
    });
  }

  /* ============================================================
     12. FAQ ACCORDION
     ============================================================ */
  document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isActive = item.classList.contains("active");

      document.querySelectorAll(".faq-item").forEach(faq => {
        faq.classList.remove("active");
        faq.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });

      if (!isActive) {
        item.classList.add("active");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ============================================================
     13. BACK TO TOP BUTTON
     ============================================================ */
  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 400) {
          backToTopBtn.classList.add("show");
        } else {
          backToTopBtn.classList.remove("show");
        }
      },
      { passive: true }
    );

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ============================================================
     14. SCROLL REVEAL OBSERVER
     ============================================================ */
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
  }

  /* ============================================================
     15. INITIALIZATION
     ============================================================ */
  setLanguage(currentLang);

  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
