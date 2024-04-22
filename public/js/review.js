document.addEventListener('DOMContentLoaded', function() {
    var ratingSpans = document.querySelectorAll('.ratingStars');
    ratingSpans.forEach(function(span) {
      var rating = parseInt(span.getAttribute('data-rating'));
      var starsHTML = '';
      for (var i = 0; i < rating; i++) {
        starsHTML += '⭐'; // Emoji de estrella llena
      }
      span.innerHTML = starsHTML;
    });
  });