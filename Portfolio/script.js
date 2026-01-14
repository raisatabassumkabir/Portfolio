// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon based on state
    if (navLinks.classList.contains('active')) {
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

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                alert("Thanks for your message! I'll get back to you soon.");
                form.reset();
            } else {
                alert("Oops! There was a problem submitting your form. Please try again.");
            }
        } catch (error) {
            alert("Oops! There was a problem submitting your form. Please try again or email me directly.");
        }
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
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        header.style.background = 'rgba(13, 17, 23, 0.98)';
    } else {
        header.style.boxShadow = 'none';
        header.style.background = 'rgba(13, 17, 23, 0.95)';
    }
});

// Active Link State on Scroll
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-links li a');

function updateActiveState() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        // 150px offset to trigger change before section hits top
        if (scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(li => {
        li.classList.remove('active');
        // Ensure we don't match empty string if current is empty (shouldn't happen with correct markup but safe)
        if (current && li.getAttribute('href').includes(current)) {
            li.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveState);
// Run immediately in case of refresh-on-scroll or initial load
updateActiveState();
