document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Sticky Navbar & Hamburger Menu ---
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Sticky behavior
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.querySelector('i').classList.add('fa-bars');
                hamburger.querySelector('i').classList.remove('fa-times');
            }
        });
    });

    // --- Dark Mode Toggle ---
    const themeToggle = document.getElementById('theme-toggle');

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            themeToggle.checked = true;
        } else {
            document.body.classList.remove('dark-mode');
            themeToggle.checked = false;
        }
    };

    themeToggle.addEventListener('change', () => {
        const newTheme = themeToggle.checked ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });

    // Apply saved theme on page load
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // --- Scroll to Top Button ---
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    window.addEventListener('scroll', () => {
        // Show button if user scrolls more than 300px
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // --- Animate Sections on Scroll ---
    const sectionsToAnimate = document.querySelectorAll('.animate-on-scroll');

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // When the element is in view
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing the element once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the section is visible
    });

    sectionsToAnimate.forEach(section => sectionObserver.observe(section));

    // --- Animate Timeline Items on Scroll ---
    const timelineItems = document.querySelectorAll('.animate-timeline');

    const timelineObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the item is visible
    });

    timelineItems.forEach(item => timelineObserver.observe(item));

    // --- 6. Contact Form Validation & Submission ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = contactForm.querySelector('#name').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const message = contactForm.querySelector('#message').value.trim();

            // Basic validation
            if (!name || !email || !message) {
                formStatus.textContent = 'Please fill out all required fields.';
                formStatus.className = 'error';
                return;
            }

            const formData = {
                name,
                email,
                subject: contactForm.querySelector('#subject').value.trim(),
                message
            };

            // --- Mock Submission Logic ---
            // In a real project, you would send this to your AWS Lambda endpoint
            formStatus.textContent = 'Sending...';
            formStatus.className = '';

            // Simulate network delay
            setTimeout(() => {
                // Simulate a successful response
                console.log('Form data submitted:', formData);
                formStatus.textContent = 'Message sent successfully! Thank you.';
                formStatus.className = 'success';
                contactForm.reset();

                // Clear success message after 5 seconds
                setTimeout(() => {
                    formStatus.textContent = '';
                    formStatus.className = '';
                }, 5000);

                // To simulate an error, you could do this instead:
                // formStatus.textContent = 'An error occurred. Please try again.';
                // formStatus.className = 'error';

            }, 1500);
        });
    }
});