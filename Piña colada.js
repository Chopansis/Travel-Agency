// Smooth scroll for navigation links
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Scroll animation for package sections
document.addEventListener("scroll", function() {
    document.querySelectorAll(".package-info").forEach(package => {
        const packageTop = package.getBoundingClientRect().top;
        if (packageTop < window.innerHeight - 100) {
            package.style.opacity = "1";
            package.style.transform = "translateY(0)";
        } else {
            package.style.opacity = "0";
            package.style.transform = "translateY(50px)";
        }
    });
});
