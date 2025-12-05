document.addEventListener('DOMContentLoaded', () => {
    // Countdown Timer
    const birthdayDate = new Date('December 6, 2025 00:00:00').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = birthdayDate - now;

        if (distance < 0) {
            document.getElementById('countdown').innerHTML = "<h2>It's Party Time! 🎉</h2>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    };

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Floating Elements (Hearts & Stars)
    const floatingContainer = document.getElementById('floating-container');
    const symbols = ['💖', '✨', '🌸', '🎀', '⭐'];

    function createFloatingElement() {
        const el = document.createElement('div');
        el.classList.add('floating-item');
        el.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        
        const size = Math.random() * 20 + 10; // 10px to 30px
        el.style.fontSize = `${size}px`;
        
        el.style.left = `${Math.random() * 100}vw`;
        el.style.animationDuration = `${Math.random() * 10 + 5}s`; // 5s to 15s
        el.style.animationDelay = `${Math.random() * 5}s`;
        
        floatingContainer.appendChild(el);

        // Remove after animation
        setTimeout(() => {
            el.remove();
        }, 15000);
    }

    // Create initial batch
    for(let i = 0; i < 20; i++) {
        createFloatingElement();
    }

    // Continue creating
    setInterval(createFloatingElement, 1000);

    // Scroll Animation (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .photo-frame, .message-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });
});
