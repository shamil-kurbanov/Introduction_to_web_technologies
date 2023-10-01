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
const chatPageContent = document.getElementById('chat-content');


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
    chatPageContent.style.display = 'block';
});

// JavaScript for chat functionality
const chatContent = document.getElementById('chat-content');
const chatBox = document.getElementById('chat-box');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send-button');
const errorMessages = document.getElementById('error-messages');

sendButton.addEventListener('click', () => {
    const name = nameInput.value;
    const message = messageInput.value;

    if (name.trim() === '' || message.trim() === '') {
        // Display the error message in the error-messages div
        errorMessages.textContent = 'Please enter a name and a message!';
        return;
    }

    const chatMessage = `${name}: ${message}`;

    // Display the message in the chat box
    const messageElement = document.createElement('div');
    messageElement.textContent = chatMessage;
    chatBox.appendChild(messageElement);

    // Clear the message input
    messageInput.value = '';

    // Clear the error message
    errorMessages.textContent = '';
});
