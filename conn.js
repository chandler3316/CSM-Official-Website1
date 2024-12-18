// Select all elements with animation classes
const hiddenElements = document.querySelectorAll('.hidden, .fade-in-left, .fade-in-right');

// Observer Options
const observerOptions = {
    threshold: 0.2 // Trigger animation when 20% of the element is visible
};

// Callback function for the observer
const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible', 'fade-visible'); // Add classes when visible
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
};

// Create the observer
const observer = new IntersectionObserver(animateOnScroll, observerOptions);

// Observe each hidden element
hiddenElements.forEach(el => observer.observe(el));
