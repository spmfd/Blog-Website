const postId = document.getElementById('post-id').dataset.postId;

const editFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('post-title').value;
  const content = document.querySelector('content').value;


  await fetch(`/api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {'Content-Type': 'application/json'}
  });

  document.location.replace('/dashboard');
};

const deleteClickHandler = async function() {
  await fetch(`/api/post/${postId}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};

document.querySelector('#submit-btn').addEventListener('click', editFormHandler);
document.querySelector('#delete-btn').addEventListener('click', deleteClickHandler);