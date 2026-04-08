// Inisialisasi AOS
AOS.init({
    duration: 600,
    once: false,
    mirror: true,
    offset: 50
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '0.5rem 1.5rem';
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.padding = '0.8rem 1.5rem';
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Hamburger Menu untuk HP
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        // Cegah scroll saat menu terbuka
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    });
}

// Tutup menu saat klik link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Active link saat scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Typing Effect
const typedTextSpan = document.querySelector('.typed-text');
const textArray = ['Network Engineer', 'Robotika Enthusiast', 'Security Analyst', 'Linux Admin'];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, 100);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (textArray.length && typedTextSpan) setTimeout(type, 500);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Form Submission (Email)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        window.location.href = `mailto:alexanderjeremia26092008@gmail.com?subject=Pesan dari ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0A---%0ADari: ${encodeURIComponent(email)}`;
        alert('Aplikasi email akan terbuka. Silakan kirim pesan Anda.');
        contactForm.reset();
    });
}

// Parallax effect untuk hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero && window.innerWidth > 768) {
        hero.style.backgroundPositionY = window.pageYOffset * 0.4 + 'px';
    }
});

// Reveal animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

document.querySelectorAll('.skill-category, .workflow-card, .learning-card, .contact-card, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.5s ease';
    observer.observe(el);
});

// Preloader hilang
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        if (loader) loader.style.display = 'none';
    }, 2000);
});