## Ответы на вопросы

# Task: based on the site https://pet7.ru/
1. Determine what protocol the site is running on.
2. Analyze the site page structure. Show in the code where the header, footer and content are.
3. Make at least 3 changes to the page using the developer tool and provide screenshots of what was/was.
4. Create a low detail prototype.

### 1. Protocol of the Website
The site [pet7.ru](https://pet7.ru/) runs on the HTTPS protocol, which means that it uses a secure connection between the browser and the server.

### 2. Site Page Structure
The structure of a website page consists of three main parts: header, content, and footer. In the code, they are indicated as follows:

```html
<html>
<head>
  <!-- Здесь находятся метаданные, заголовок, стили и скрипты страницы -->
</head>
<body>
  <div id="wrapper">
    <div id="header"> <!-- Здесь начинается хедер -->
      <!-- Здесь находятся логотип, меню, поиск и другие элементы верхней части страницы -->
    </div> <!-- Здесь заканчивается хедер -->
    <div id="content"> <!-- Здесь начинается контент -->
      <!-- Здесь находятся основное содержание страницы, такое как статьи, изображения, видео и т.д. -->
    </div> <!-- Здесь заканчивается контент -->
    <div id="footer"> <!-- Здесь начинается футер -->
      <!-- Здесь находятся нижняя часть страницы, такая как копирайт, ссылки на соцсети, контакты и т.д. -->
    </div> <!-- Здесь заканчивается футер -->
  </div>
</body>
</html>
