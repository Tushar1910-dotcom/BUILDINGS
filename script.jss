// Structora Planning Studio - JavaScript

// Intro Animation
window.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');
    const mainContent = document.getElementById('main-content');
    
    // Show main content immediately for testing, hide intro after 4.5 seconds
    setTimeout(() => {
        if (intro) intro.style.display = 'none';
        if (mainContent) mainContent.style.display = 'block';
    }, 4500);
    
    // Fallback - force show content after 5 seconds no matter what
    setTimeout(() => {
        if (intro) intro.style.display = 'none';
        if (mainContent) {
            mainContent.style.display = 'block';
            mainContent.style.opacity = '1';
        }
    }, 5000);
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Submission
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const details = document.getElementById('details').value;
    
    // Basic validation
    if (!name || !email || !phone || !details) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[0-9]{10}$/;
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
        alert('Please enter a valid phone number');
        return;
    }
    
    // Success message
    alert('Thank you for your enquiry! We will contact you soon.');
    
    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('details').value = '';
}

// Scroll to Top on Load
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// Add scroll effect to navigation
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !nav.classList.contains('scroll-down')) {
        // Scrolling down
        nav.classList.remove('scroll-up');
        nav.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && nav.classList.contains('scroll-down')) {
        // Scrolling up
        nav.classList.remove('scroll-down');
        nav.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all service cards and package cards
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.glass-effect');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Package Button Click Handlers
document.querySelectorAll('button:contains("Choose Package")').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
});

// Add active state to navigation links
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-amber-400');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('text-amber-400');
        }
    });
});

// Console welcome message
console.log('%c🏗️ Structora Planning Studio', 'font-size: 20px; font-weight: bold; color: #f59e0b;');
console.log('%cFrom Sketch to Structure', 'font-size: 14px; color: #3b82f6;');
console.log('Website: structoraplanningstudio.com');
console.log('Email: structoraplanningstudio@gmail.com');
