// JavaScript file (e.g., main.js)

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Hover effect for packages
document.querySelectorAll('.package').forEach(pkg => {
    pkg.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    pkg.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Click animation for buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        this.style.backgroundColor = '#feb47b';
        setTimeout(() => (this.style.backgroundColor = '#ff7e5f'), 150);
    });
});
