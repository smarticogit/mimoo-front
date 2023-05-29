const form = document.querySelector('form');
let email = document.querySelector('.email');
let password = document.querySelector('.password');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const loginData = {
        email: email.value,
        password: password.value
    };

    try {
        const response = await fetch('https://qfdzv16do0.execute-api.us-east-1.amazonaws.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        if (response.status !== 200) {
            return console.log('Login error');
        }

        window.location.href = "/src/pages/home.html"
        const data = await response.json();
        localStorage.setItem("token", data.AccessToken)

    } catch (error) {
        console.log(error.message);
    }
});




