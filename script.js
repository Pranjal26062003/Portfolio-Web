let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// Scroll Section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });



// Sticky Navbar

let header = document.querySelector('.header');
header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

// About Read More 
const containerTwo = document.querySelector('.content-container-2')
const button = document.querySelector('.button')

button.addEventListener("click", () => {
    containerTwo.classList.toggle("toggle")
});

// Service Read More 
const containerService = document.querySelector('.service-container-2')
const buttons = document.querySelector('.buttons')

buttons.addEventListener("click", () => {
    containerService.classList.toggle("toggle")
});

// PHP Service Read More
const phpService = document.querySelector('.php-service-container-2')
const button_php = document.querySelector('.button_php')

button_php.addEventListener("click", () => {
    phpService.classList.toggle("toggle")
});