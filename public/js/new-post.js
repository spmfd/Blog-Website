const newPost = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('title').value.trim();
    const text = document.querySelector('text').value.trim();
  
          const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, text }),
        headers: {'Content-Type': 'application/json'},
      });
            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Unable to create new post');
            }
    }
  
  if (document.location.pathname == '/dashboard') {
    document.querySelector('create-post').addEventListener('submit', newPost);
  }