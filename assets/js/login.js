document.getElementById('login-submit').addEventListener('click', () => {
    const button = document.getElementById('login-submit');

    button.disabled = true;
    button.textContent = 'Logging in...';

    if(document.getElementById('username').value === 'chirpy' && document.getElementById('password').value === 'password') {
        window.location = 'index.html';
    }

    button.disabled = false;
    button.textContent = 'Log In';
});
