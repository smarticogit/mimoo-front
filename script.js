const form = document.querySelector('form');
let email = document.querySelector('.email');
let password = document.querySelector('.password');
import showToast from './src/service/toast.js';
const isLocal = window.location.hostname === 'localhost';

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const loginData = {
        email: email.value,
        password: password.value
    };

    if (!email.value || !password.value) {
        return showToast('Empty Fields', 'error');
    }

    try {
        const response = await fetch('https://qfdzv16do0.execute-api.us-east-1.amazonaws.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        if (response.status !== 200) {
            return showToast('check login and password', 'error');
        }

        const data = await response.json();
        localStorage.setItem("token", data.AccessToken)

        showToast('Login Successfull'), 'success';

        email.value = "";
        password.value = "";

        setTimeout(() => {
            // window.location.href = isLocal ? "./src/pages/home.html" : "https://smarticogit.github.io/mimoo-front/src/pages/home.html"
            window.location.href = "./src/pages/home.html";
        }, 1500);

    } catch (error) {
        console.log(error.message);
        showToast('Error server'), 'error';
    }
});







