const signupFormHandler = async (event) =>{
    event.preventDefault();

    const signup_username = document.querySelector('signup_username').value.trim();

    const signup_password = document.querySelector('signup_password').value.trim();

    const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
            signup_username,
            signup_password,
        }),
        headers: { 'Content-Type': 'application/json' },
    })

            if (response.ok) {
                document.location.replace('/dashboard')
            } else {
                alert('Failed to sign-up');
            }
};

if (document.location.pathname == '/signup') {
    document
      .querySelector('#signup-form')
      .addEventListener('submit', signupFormHandler);
  }