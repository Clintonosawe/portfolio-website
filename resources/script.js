

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach((el) => {
        setTimeout(() => {
            el.classList.add("visible");
        }, 100);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Ensures animation happens only once
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

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

/* Script for Interactive Expanding Cards */
function toggleDetails(button) {
    const details = button.nextElementSibling;
    if (details.style.display === "block") {
        details.style.display = "none";
        button.textContent = "More Info";
    } else {
        details.style.display = "block";
        button.textContent = "Less Info";
    }
}

/* Script to Dynamically Set the Year */
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("year").textContent = new Date().getFullYear();
});

            

            
            
            
            