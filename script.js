document.addEventListener('DOMContentLoaded', () => {
    // Language Toggle
    const langToggleBtn = document.getElementById('langToggle');
    const body = document.body;

    // Check local storage for language preference
    const currentLang = localStorage.getItem('lang') || 'en';
    if (currentLang === 'es') {
        body.classList.add('lang-es');
        langToggleBtn.textContent = 'ES / EN';
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            if (body.classList.contains('lang-es')) {
                body.classList.remove('lang-es');
                localStorage.setItem('lang', 'en');
                langToggleBtn.textContent = 'EN / ES';
            } else {
                body.classList.add('lang-es');
                localStorage.setItem('lang', 'es');
                langToggleBtn.textContent = 'ES / EN';
            }
        });
    }

    // Scroll Animations
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));

    // Interactive Traits Section
    const traitBtns = document.querySelectorAll('.trait-btn');
    const traitContents = document.querySelectorAll('.trait-content');

    traitBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            traitBtns.forEach(b => b.classList.remove('active'));
            traitContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
});
