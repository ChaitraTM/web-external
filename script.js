// JavaScript for Smooth Scrolling and Active Link Highlighting

// Smooth Scroll Function
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Prevent the default anchor click behavior
        e.preventDefault();
        
        // Scroll to the target section smoothly
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Highlight Active Page Link in Navbar
window.addEventListener('load', function() {
    const currentPath = window.location.pathname.split("/").pop();
    document.querySelectorAll('.navbar a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});

// Console Message for Welcome
console.log("Welcome to the France Tourism Website! Enjoy exploring.");

// Add a scroll event listener to add shadow to navbar on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-shadow');
    } else {
        navbar.classList.remove('navbar-shadow');
    }
});
