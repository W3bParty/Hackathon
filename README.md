### Project by WebParty

<h1 align='center'>Документация / Documentation</h1>


<h2>Основная Информация</h2>
<ul>
    <li><h3>Проект создаётся в рамках хакатона от Т-Банка</h3></li>
    <li><h3>Ссылка на сайт: <a href='#'>...</a></h3></li>
</ul>

<h2>Main Information</h2>
<ul>
    <li><h3>The project is being created as part of a hackathon from T-Bank</h3></li>
    <li><h3>Link to the website: <a href='#'>...</a></h3></li>
</ul>

<hr/>


<h2>(RU) Для разработчиков сайта / For website developers </h2>
<h3>Структура</h3>
<ul>
    <li><h4>.prettierrc - Форматирование кода по линтеру</h4></li>
    <li><h4>package.json - Зависимости и скрипты проекта</h4></li>    
    <li><h4>next-env.d.ts - Типы для Next.js и Typescript</h4></li>
    <li><h4>next.config.ts - Конфигурация Next.js</h4></li>
    <li><h4>tsconfig.json - Конфигурация Typescript</h4></li>
    <li><h4>eslint.config.mjs - Конфигурация ESLint для проверки кода</h4></li>    <li><h4>postcss.config.cjs - Конфигурирование Postcss (используется вместе с Tailwind) </h4></li>
    <li><h4>Папка app - Роуты от Next js</h4>
        <ul>
            <li><h4>page.tsx - Корневая страница</h4></li>
            <li><h4>layout.tsx - Шаблон страницы</h4></li>
            <li><h4>globals.css - Глобальные стили</h4></li>
        </ul>
    </li>
    <li><h4>Папка components - UI-Компоненты</h4>
            <ul>
                <li><h4>Папка ui - Небольшие компоненты, которые будут повторяться (button, p, h1, h2, h3, h4...)</h4></li>
                <li><h4>index.ts - Re-Export'ы</h4></li>
            </ul>
    </li>
    <li><h4>Папка assets - Файлы, Хранение шрифтов, картинок, стилей</h4>
        <ul>
            <li><h4>Папка images - Хранение картинок</h4>
                <ul>
                    <li><h4>Папка svg - Хранение svg-спрайтов</h4></li>
                    <li><h4>sprite.svg - Svg-спрайты</h4></li>
                </ul>
            </li>
        </ul>
    </li>
    <li><h4>Папка hooks - Кастомные хуки </h4></li>
    <li><h4>Папка utils - Файлы, которые оправдывают своё существование</h4></li>
</ul>

<hr/>
<h2>Технологии, которые используются в проекте:</h2>
<ul>
    <li><h3>React - <a href='https://reactjs.org/'>https://reactjs.org/</a></h3></li>
    <li><h3>Next.js - <a href='https://nextjs.org/'>https://nextjs.org/</a></h3></li>
    <li><h3>Eslint - <a href='https://eslint.org/'>https://eslint.org/</a></h3></li>
    <li><h3>Prettier - <a href='https://prettier.io/'>https://prettier.io/</a></h3></li>
</ul>

<hr/>
<h2>Запуск скриптов</h2>
<ul>
    <li><h3>npm run dev - Запуск проекта в режиме разработки</h3></li>
    <li><h3>npm run start - Запуск production-сборки проекта</h3></li>
    <li><h3>npm run build - Сборка проекта для production</h3></li>
    <li><h3>npm run lint - Линтирование кода</h3></li>
</ul>