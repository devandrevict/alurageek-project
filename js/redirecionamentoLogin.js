const btnLogin = document.querySelector('[data-form-button-login]')

btnLogin.addEventListener('click', function () {
    const currentPath = window.location.pathname;
    const loginPagePath = currentPath.replace(/\/[^\/]*$/, '/login/index.html');
    window.location.href = loginPagePath;
})




