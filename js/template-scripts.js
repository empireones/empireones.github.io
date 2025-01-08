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
        document.querySelector('header.grid').innerHTML = html;
      });
    fetch('footer.html')
      .then(response => response.text())
      .then(html => {
        document.querySelector('footer.grid').innerHTML = html;
      });