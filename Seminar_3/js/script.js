//JavaScript, um zwichen den Seiten zu wechseln
//Autor: Shamil Kurbanov
//Datum: 01.10.2023

//Constanten für die Seiten
const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const chatLink = document.getElementById('chat-link');

//Constanten für die Seiteninhalte
const homeContent = document.getElementById('home-content');
const aboutContent = document.getElementById('about-content');
const chatContent = document.getElementById('chat-content');


homeLink.addEventListener('click', () => {
    homeContent.style.display = 'block'; //block ist ein CSS Attribut, das die Elemente untereinander anordnet. In diesem Fall wird die Seite angezeigt
    aboutContent.style.display = 'none'; //none ist ein CSS Attribut, das die Elemente ausblendet. In diesem Fall wird die Seite ausgeblendet
    chatContent.style.display = 'none';
});

aboutLink.addEventListener('click', () => {
    homeContent.style.display = 'none';
    aboutContent.style.display = 'block';
    chatContent.style.display = 'none';
});

chatLink.addEventListener('click', () => {
    homeContent.style.display = 'none';
    aboutContent.style.display = 'none';
    chatContent.style.display = 'block';
});
