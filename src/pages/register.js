const form = document.querySelector('form');
let email = document.querySelector('.email');
let password = document.querySelector('.password');
import showToast from '../service/toast.js';

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
        const response = await fetch('https://qfdzv16do0.execute-api.us-east-1.amazonaws.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        if (response.status !== 200) {
            return showToast('check login and password', 'error');
        }

        showToast('Register Successfull', 'success');

        setTimeout(() => {
            window.location.href = "../../index.html";
        }, 1500);

    } catch (error) {
        console.log(error.message);
        showToast('Error server', 'error');
    }
});

