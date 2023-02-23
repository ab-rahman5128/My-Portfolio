// toggle icon 
let menuIcon = document.querySelector('#menu_icon');
let navBar = document.querySelector('.navBar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
};




// scroll selection active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navBar a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navBar a[href*=' + id + ']').classList.add('active')
            })
        }
    })
    // Sticky header 

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.srollY > 100);

    // remove toggle when scrolling

    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');


};

// Scroll Reveal

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.home_content, .heading_title', { origin:'top'});

ScrollReveal().reveal('.home_img, .service_container, .portfolio_box, .contact form', { origin:'bottom'});

ScrollReveal().reveal('.home_content h1, .about_img', { origin:'left'});

ScrollReveal().reveal('.home_content p, .about_content', { origin:'right'});


// typed js

const typed = new Typed('.multiple_text', {
    strings: ['Frontend Developer', 'WordPress Developer', 'WooCommerc Expert', 'Shopify Expert'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});