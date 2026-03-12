7Generation Landing Page:

Официальный лендинг компании 7Generation.
Проект разработан для презентации компании, её услуг и формирования входящего потока заявок.

О проекте 7generation:

Landing Page предназначен для:

Презентации компании и её миссии,

Демонстрации услуг и кейсов,

Сбора лидов (формы обратной связи)

Интеграции с CRM / аналитикой

Повышения доверия и конверсии

Проект оптимизирован под:

SEO

Mobile-first подход

Высокую скорость загрузки

Маркетинговую аналитику

Технологический стек

Пример (отредактируйте под фактический стек проекта):

HTML5 / CSS3

SCSS / Tailwind (если используется)

JavaScript / TypeScript

React / Next.js / Vue (если используется)

Vite / Webpack

Node.js (если есть серверная часть)

Nginx (для деплоя)

Docker (если используется контейнеризация)

📂 Структура проекта

Примерная структура:

7generation-landing/
│
├── public/               # Статические файлы
├── src/
│   ├── components/       # UI компоненты
│   ├── sections/         # Секции лендинга
│   ├── assets/           # Изображения, иконки, шрифты
│   ├── styles/           # Глобальные стили
│   └── utils/            # Утилиты
│
├── .env                  # Переменные окружения
├── package.json
└── README.md

🚀 Установка и запуск
1. Клонирование репозитория
git clone https://github.com/your-repo/7generation-landing.git
cd 7generation-landing

2. Установка зависимостей
npm install

3. Запуск в режиме разработки
npm run dev


Проект будет доступен по адресу:

http://localhost:3000

🏭 Production сборка
npm run build
npm run preview


Или для SSR (если Next.js):

npm run build
npm start

⚙️ Переменные окружения

Создать файл .env:

VITE_API_URL=
VITE_CRM_WEBHOOK=
VITE_GA_ID=
VITE_META_PIXEL_ID=

📈 Интеграции

Проект поддерживает:

Google Analytics

Meta Pixel

CRM (Bitrix / AmoCRM / webhook)

Email отправку заявок

Telegram уведомления (при необходимости)

🎯 SEO

Семантическая вёрстка

OpenGraph разметка

Meta-теги

Sitemap.xml

Robots.txt

Lazy-loading изображений

Оптимизация LCP / CLS

📱 Адаптивность

Поддерживаемые разрешения:

Mobile (320px+)

Tablet (768px+)

Desktop (1024px+)

Large screens (1440px+)

🔐 Безопасность

Валидация форм

Защита от спама (reCAPTCHA / honeypot)

HTTPS only

Минимизация уязвимостей

🧪 Проверка качества

Перед релизом необходимо:

Проверить Lighthouse (Performance > 90)

Проверить валидность форм

Проверить работу аналитики

Проверить отправку заявок в CRM

Проверить адаптивность

📦 Деплой

Возможные варианты:

VPS (Nginx + Node)

Vercel

Netlify

Docker контейнер

CI/CD через GitHub Actions

👥 Ответственные

Product / Маркетинг — согласование структуры

Frontend — разработка

Backend — интеграции

DevOps — деплой

📝 Лицензия

© 7Generation
Все права защищены.

Если нужно — могу:

сделать README в более техническом формате (под senior команду)

сделать маркетинговую версию для клиента

адаптировать под конкретный стек (Next.js + Docker, например)

добавить архитектурную схему проекта
