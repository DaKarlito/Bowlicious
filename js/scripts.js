$(document).ready(function () {

  // Menu responsive
  $('.stellarnav').stellarNav({
    position: 'right',
    closeLabel: 'Fermer',
    breakpoint: 765,
    theme: 'dark',
    phoneBtn: '06 66 67 68 69',
    phoneLabel: 'appelez-nous',
    locationBtn: '',
    sticky: true,

  });
  
  // Carousel
  $('.gallery-1').owlCarousel({
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:2,
            nav:false
        },
        1100:{
            items:3,
            nav:true,
            loop:false
        }
    },
    // items: 3,
    loop: true,
    nav: true,
    navText: ['<i class="fas fa-arrow-alt-circle-left"></i><span class="hidden-text">Précédent</span>', '<i class="fas fa-arrow-alt-circle-right"></i><span class="hidden-text">Suivant</span>']
  });

});

