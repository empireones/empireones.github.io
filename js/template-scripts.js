jQuery(document).ready(function($) {  
  // Owl Carousel                     
  var owl = $('.carousel-fade-transition');
  owl.owlCarousel({
    nav: true,
    dots: true,
    items: 1,
    loop: true,
    navText: ["&#xe605","&#xe606"],
    autoplay: true, 
    animateOut: 'fadeOut',
    autoplayTimeout: 5000
  });
});

    fetch('header.html')
      .then(response => response.text())
      .then(html => {
        document.querySelector('header.my-header').innerHTML = html;
      });
    fetch('footer.html')
      .then(response => response.text())
      .then(html => {
        document.querySelector('footer.grid').innerHTML = html;
      });

const navToggle = document.querySelector('.my-nav-toggle');
const navLinks = document.querySelector('.my-nav-links');

navToggle.addEventListener('click', () => {
  // Toggle the 'aria-expanded' attribute
  const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
  navToggle.setAttribute('aria-expanded', !expanded);

  // Toggle the visibility of the navigation links
  navLinks.hidden = !navLinks.hidden;
});