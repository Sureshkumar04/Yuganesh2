let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('ri-xrp-line');
    navbar.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    // Using requestAnimationFrame for smoother scrolling
    requestAnimationFrame(() => {
        let top = window.scrollY;

        // Sticky header
        header.classList.toggle('sticky', top > 100);

        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            }
        });
    });

    // Remove toggle
    menuIcon.classList.remove('ri-xrp-line');
    navbar.classList.remove('active');
});
// aos

  AOS.init();
