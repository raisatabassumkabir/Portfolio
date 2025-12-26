// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon based on state
    if(navLinks.classList.contains('active')) {
        menuToggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');

if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Use your real email here
        const myEmail = "your.email@example.com"; 
        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
        
        // Open default mail client
        window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`;
        
        // Optional: Show feedback
        alert("Thanks for your message! This will open your default email client to send.");
        contactForm.reset();
    });
}

// Scroll Animation
const fadeElements = document.querySelectorAll('.fade-in');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(el => scrollObserver.observe(el));

// Sticky Header
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        header.style.background = 'rgba(13, 17, 23, 0.98)';
    } else {
        header.style.boxShadow = 'none';
        header.style.background = 'rgba(13, 17, 23, 0.95)';
    }
});
