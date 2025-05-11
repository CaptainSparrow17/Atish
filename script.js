document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Smooth scroll to the target element
                // The 'offsetTop' needs to account for the sticky nav height if any
                // For simplicity here, we are not. If nav is tall, you'd subtract its height.
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjust 60 if your nav height changes
                    behavior: 'smooth'
                });
            }
        });
    });

    // CTA Button functionality (example)
    const ctaButton = document.getElementById('ctaButton');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // For example, scroll to the "About Me" section
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                window.scrollTo({
                    top: aboutSection.offsetTop - 60, // Adjust 60 if your nav height changes
                    behavior: 'smooth'
                });
            }
            // Or you could show an alert or a modal, etc.
            // alert("Thanks for your interest! Scroll down to learn more.");
        });
    }

    // Display current time in footer (example)
    const currentTimeSpan = document.getElementById('currentTime');
    if (currentTimeSpan) {
        function updateTime() {
            const now = new Date();
            currentTimeSpan.textContent = `Current Time: ${now.toLocaleTimeString()}`;
        }
        updateTime(); // Initial call
        setInterval(updateTime, 1000); // Update every second
    }

    // Fun console message for fellow IT enthusiasts
    console.log("Hello fellow IT Enthusiast! Inspecting the console, are we? 😉");
    console.log("Feel free to explore the code. This is a basic setup meant for learning.");
});
