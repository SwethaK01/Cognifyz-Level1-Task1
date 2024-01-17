var userRating = 0;
function rate(stars) {
    userRating = stars;

    
    var starElements = document.querySelectorAll('.star');
    starElements.forEach(function (star, index) {
        star.style.color = index < stars ? 'gold' : 'gray';
    });
}

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('reviewForm').addEventListener('submit', function (event) {
        event.preventDefault();
        var inputValue = document.getElementById('inputField').value;

        var existingData = JSON.parse(localStorage.getItem('reviewData')) || [];

 
        existingData.push({
            review: inputValue,
            rating: userRating
        });


        localStorage.setItem('reviewData', JSON.stringify(existingData));


        window.location.href = 'home.html';
    });
});