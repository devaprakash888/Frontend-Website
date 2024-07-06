document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const heroImage = document.querySelector('.hero-image img');
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

    // Change header background color on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Add sticky header with shrink effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Scroll-triggered animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // Smooth scroll to contact section with visual effect
    const contactButton = document.querySelector('.contact-btn');
    const contactSection = document.getElementById('contact');

    contactButton.addEventListener('click', () => {
        contactSection.classList.add('fade-in');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });

    contactSection.addEventListener('animationend', () => {
        contactSection.classList.remove('fade-in');
    });
});
