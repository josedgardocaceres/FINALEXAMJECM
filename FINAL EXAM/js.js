let selectedRating = 0;

function rate(value) {
    selectedRating = value;
    highlightStars(value);
}

function highlightStars(value) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.classList.toggle('active', index < value);
    });
}

function submitRating() {
    if (selectedRating === 0) {
        alert("Please select a rating before submitting.");
    } else {
        alert(`Rating submitted: ${selectedRating} stars`);
        // Here, you can send the rating data to your server or perform any other necessary actions.
    }
}



    // JavaScript function to toggle the menu visibility
    function toggleMenu() {
        var menu = document.getElementById('menu');
        menu.style.display = (menu.style.display === 'flex' || menu.style.display === '') ? 'none' : 'flex';
    }

    // JavaScript function to navigate to a specific page
    function navigateTo(page) {
        window.location.href = page;
    }