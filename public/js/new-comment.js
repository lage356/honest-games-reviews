const newCommentFormHandler = async (event) => {
  event.preventDefault();

  //const post_id = parseInt(window.location.pathname.split('/').pop());

  const content = document.querySelector('#commentContent').value.trim();

  if (content) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({content}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload(); 
    } else {
      console.log('Response status:', response.status);
      console.log('Response text:', await response.text());
      alert('Failed to create a comment.');
    }
  }
};



document
  .querySelector('.newcommentform')
  .addEventListener('submit', newCommentFormHandler);

