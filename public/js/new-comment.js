// const newCommentFormHandler = async (event) => {
//   event.preventDefault();


//   const content = document.querySelector('#commentContent').value.trim();

//   if (content) {
//     const response = await fetch(`/api/comments`, {
//       method: 'POST',
//       body: JSON.stringify({content}),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.reload(); 
//     } else {
//       console.log('Response status:', response.status);
//       console.log('Response text:', await response.text());
//       alert('Failed to create a comment.');
//     }
//   }
// };



// document
//   .querySelector('.newcommentform')
//   .addEventListener('submit', newCommentFormHandler);

async function getReviewIdFromApi() {
  try {
    const response = await fetch('/api/review/id'); // Assuming there's an API endpoint to fetch the review ID
    if (response.ok) {
      const data = await response.json();
      return data.reviewId; // Assuming the review ID is available in the response data
    } else {
      throw new Error('Failed to fetch review ID');
    }
  } catch (error) {
    console.error('Error fetching review ID:', error);
    return null; // Handle error case appropriately
  }
}

const newCommentFormHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector('#commentContent').value.trim();
  const reviewId = getReviewIdFromApi();

  if (content && reviewId) {
    const requestBody = {
      review_id: reviewId, // Include the review_id in the request payload
      content: content,
    };

    try {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.reload(); 
      } else {
        console.error('Failed to create a comment:', await response.text());
        alert('Failed to create a comment.');
      }
    } catch (error) {
      console.error('Error creating a comment:', error);
      alert('Failed to create a comment.');
    }
  }
};

document.querySelector('.newcommentform').addEventListener('submit', newCommentFormHandler);
