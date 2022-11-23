const logout = async () => {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
    })

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Unable to log out, please reach out to customer service for further assistance');
        }
};

document.querySelector('#logout').addEventListener('click', logout);