// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
}

// Smooth scrolling for navigation links
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

// WhatsApp form submission handler
const whatsappSubmit = document.getElementById('whatsappSubmit');
const contactForm = document.querySelector('.contact-form form');

if (whatsappSubmit) {
    whatsappSubmit.addEventListener('click', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        if (!name || !phone || !service || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Format message for WhatsApp
        const whatsappMessage = `%0AName: ${name}%0AWhatsApp Number: ${phone}%0AService Needed: ${service}%0AMessage: ${message}`;
        const whatsappUrl = `https://wa.me/2349151689020?text=${whatsappMessage}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Reset form
        contactForm.reset();
    });
}
