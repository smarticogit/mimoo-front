const form = document.querySelector('form');
let email = document.querySelector('.email');
let password = document.querySelector('.password');
import { loading } from './src/service/loading.js';
import showToast from './src/service/toast.js';
const isLocal = window.location.hostname === '127.0.0.1';

form.addEventListener('submit', async (event) => {
    event.preventDefault();


    const loginData = {
        email: email.value,
        password: password.value
    };

    if (!email.value || !password.value) {
        return showToast('Empty Fields', 'error');
    }

    loading('on');

    try {
        const response = await fetch('https://m4y6rb6e09.execute-api.us-east-1.amazonaws.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        loading('off');
        clear();

        if (response.status !== 200) {
            return showToast('check login and password', 'error');
        }

        const data = await response.json();
        localStorage.setItem("token", data.AccessToken)

        showToast('Login Successfull'), 'success';

        setTimeout(() => {
            window.location.href = isLocal ? "./src/pages/home/home.html" : "https://smarticogit.github.io/mimoo-front/src/pages/home/home.html"
        }, 1500);

    } catch (error) {
        showToast('Error server', 'error');
    }
});

const clear = () => {
    email.value = "";
    password.value = "";
}

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    showToast('Oppps!', 'error');
});







