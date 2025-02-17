// Script for navbar section
document.addEventListener("DOMContentLoaded", function () { 
    const logo = document.querySelector(".navbar-brand");
            
    let scale = 1;
    let growing = true;
    let isAnimating = true;
            
    function animateLogo() {
        if (!isAnimating) return; // Stops animation if paused
            
        if (growing) {
            scale += 0.004;
            if (scale >= 1.1) growing = false;
        } else {
            scale -= 0.004;
            if (scale <= 1) growing = true;
        }
            
        logo.style.transform = `scale(${scale})`;
        requestAnimationFrame(animateLogo);
    }
            
    // Toggle animation on click
    logo.addEventListener("click", function () {
        isAnimating = !isAnimating;
        if (isAnimating) animateLogo(); // Restart animation if resumed
    });
            
    animateLogo(); // Start immediately on page load
                
});
            
document.addEventListener("DOMContentLoaded", function () {
    const services = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.3 });

    services.forEach(service => {
        observer.observe(service);
    });
});

            
            
            
            