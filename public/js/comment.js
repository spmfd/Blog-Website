const createComment = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('comment').value;
    const post_id = parseInt(document.location.href.split('/').pop(), 10);
  
    if (comment) {
      const response = await fetch('/api/posts/comments', {
        method: 'POST',
        body: JSON.stringify({ comment, post_id }),
        headers: {'Content-Type': 'application/json'},
      });
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Comment did not post properly');
      }
    }
  };
  
  document
    .querySelector('create-comment')
    .addEventListener('submit', createComment);