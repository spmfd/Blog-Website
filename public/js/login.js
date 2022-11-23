const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('username').value.trim();

    const password = document.querySelector('password').value.trim();

    const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({
            username,
            password,
        }),
        headers: { 'Content-Type': 'application/json' },
    })

            if (response.ok) {
                document.location.replace('/dashboard')
            } else {
                alert('Failed to Login');
            }
};


if (document.location.pathname == "/login") {
    document
      .querySelector('#login-form')
      .addEventListener('submit', loginFormHandler);
}