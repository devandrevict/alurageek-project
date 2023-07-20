const form = document.querySelector('[data-form-loginForm]');
const errorMessages = document.querySelector('[data-form-errorMessages]');
const email = document.querySelector('[data-form-inputEmail]');
const password = document.querySelector('[data-form-inputPassword]');
const btnLogin = document.querySelector('[data-form-entrar]')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    errorMessages.innerHTML = '';

    if (email.value === '' || password.value === '') {
        errorMessages.innerHTML = 'Os campos não estão preenchidos corretamente.'
    } else if (validateEmail(email.value) === true && validatePassword(password.value) === true) {
        errorMessages.innerHTML = '';
        autenticar()
    } else {
        errorMessages.innerHTML = 'Requisição não atendida.'
    }
})

email.addEventListener("keyup", () => {
    if (validateEmail(email.value) !== true) {
        errorMessages.innerHTML = 'O formato de e-mail está incorreto. Ex.: user@abc.com'
    } else {
        errorMessages.innerHTML = ''
    }
})

password.addEventListener("keyup", () => {
    if (validatePassword(password.value) !== true) {
        errorMessages.innerHTML = 'A senha deve possuir apenas letras e números.'
    } else {
        errorMessages.innerHTML = ''
    }
})

function validateEmail(email) {
    const emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    return emailPattern.test(email)
}

function validatePassword(password) {
    const passwordPattern = /^[a-zA-Z0-9]+$/
    return passwordPattern.test(password)
}

function autenticar() {
    const username = document.getElementById('login__inputEmail').value;
    const password = document.getElementById('login__inputPassword').value;

    if (username === "andre@gmail.com" && password === "senha123") {
        btnLogin.addEventListener('click', function () {
            const currentPath = window.location.pathname;
            const loginPagePath = currentPath.replace(/\/[^\/]*$/, '/newProducts/index.html');
            window.location.href = loginPagePath;
        })
    } else {
        errorMessages.innerHTML = "Nome de usuário ou senha inválidos!"
    }
}