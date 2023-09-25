// src/main.js

function setCookies() {
    const firstname = document.getElementById("firstname").value;
    const email = document.getElementById("email").value;

    document.cookie = `firstname=${firstname}`;
    document.cookie = `email=${email}`;
}

function showCookies() {
    const cookies = document.cookie.split(';');
    const cookieContainer = document.createElement('p');
    let cookieText = 'Cookies:';

    cookies.forEach(cookie => {
        cookieText += ` ${cookie.trim()};`;
    });

    cookieContainer.innerHTML = cookieText;
    document.body.appendChild(cookieContainer);
}
