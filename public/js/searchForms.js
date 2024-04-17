// document.getElementById('SearchForm').addEventListener('submit', function(event) {
//    event.preventDefault(); // Prevents default form submission behavior
   
//    const gameName = document.getElementById('gameName').value;
//    const rating = document.getElementById('rating').value;
//    const user = document.getElementById('user').value;

//    const filteredReviews = filterReviews(gameName, rating, user);

//    const sGameQuery = filteredReviews.length > 0;

//    const template = Handlebars.compile(document.getElementById('reviewPartialTemplate').innerHTML);
//    document.body.innerHTML += template({ sGameQuery, reviews: filteredReviews });
// });

// async function fetchReviews() {
//     const response = await fetch('reviewData.json');
//     const data = await response.json();
//     return data.reviews;
// };

// function filterReviews(gameName, rating, user) {
//     const reviews = fetchReviews();

//     const filteredReviews = reviews.filter(review => {
//         const gameNameMatch = !gameName || review.game_title.toLowerCase().includes(gameName.toLowerCase());
//         const ratingMatch = !rating || review.rating === parseInt(rating);
//         const userMatch = !user || review.user.name.toLowerCase().includes(user.toLowerCase());

//         return gameNameMatch && ratingMatch && userMatch;
//     });

//     return filterReviews;
// };

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#SearchForm').addEventListener('submit', async function(event) {
      event.preventDefault(); // Prevents default form submission behavior
     
      const gameName = document.getElementById('gameName').value;
      const rating = document.getElementById('rating').value;
      const user = document.getElementById('user').value;
  
      const filteredReviews = await filterReviews(gameName, rating, user);
  
      const sGameQuery = filteredReviews.length > 0;
  
      const template = Handlebars.compile(document.getElementById('reviewPartialTemplate').innerHTML);
      document.body.innerHTML += template({ sGameQuery, reviews: filteredReviews });
    });
  });
  

