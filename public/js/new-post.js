const newPostFormHandler = async (event) => {
  event.preventDefault();

  const game_title = document.querySelector('#gameTitle').value.trim();
  const content = document.querySelector('#reviewContent').value.trim();
  const rating = document.querySelector('#rating').value.trim();

  if (game_title && content) {
    const response = await fetch('/api/reviews', {
      method: 'POST',
      body: JSON.stringify({ game_title, content, rating }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/'); 
    } else {
      alert('Failed to create a new review.'); 
    }
  }
};

document 
  .querySelector('.new-post-form')
  .addEventListener('submit', newPostFormHandler);

