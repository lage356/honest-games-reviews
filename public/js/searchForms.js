// const reviewFinder = async (event) => {
//     event.preventDefault();

//     const videoGameName = document.querySelector('#gameName').value.trim();
//     const videoGameRating = document.querySelector('#rating').value.trim();

//     if ( videoGameName && videoGameRating) {

//         const response = await fetch ('/api/exploreApi', {
//             method: 'POST',
//             body: JSON.stringify({ videoGameName, videoGameRating }),
//             headers: {'Content-Type': 'application/json'},
//         });
//         if(response.ok) {
//             document.location.replace('/');
//         } else {
//             alert(response.statusText);
//         }
//     }
// };

// document
//     .querySelector('#SearchForm')
//     .addEventListener('submit', reviewFinder);








/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const { response } = require("express");

   const rating = document.getElementById('rating').value;
   const user = document.getElementById('user').value;

document.addEventListener('DOMContentLoaded', function() {
   document.getElementById('SearchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Gets the name entered by the user
    
    const gameName = document.getElementById('gameName').value;

    fetch(`/api/reviews?game_title=${gameName}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(reviews => {
        console.log(reviews);
    })
    .catch(error => {
        console.error('Error:', error);
    });

    });
});



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//    const filteredReviews = filterReviews(gameName, rating, user);

//    const sGameQuery = filteredReviews.length > 0;

//    const template = Handlebars.compile(document.getElementById('reviewPartialTemplate').innerHTML);
//    document.body.innerHTML += template({ sGameQuery, reviews: filteredReviews });


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

// const searchForReviewInfo = async (event) => {
//     event.preventDefault();
//     const gameName = document.getElementById('gameTitle').value;
//     const rating = document.getElementById('rating').value;

    
// }



