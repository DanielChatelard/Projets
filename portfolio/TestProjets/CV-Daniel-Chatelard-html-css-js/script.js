// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const scrollTop = windows.pageTOffset || this.document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop) {
        navbar.style.top="-50px";
    } else {
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
});



// TYPED, texte animé
var typed = new Typed('.typed', {
    strings: ['De nature autodidacte, curieux et passionné pour le métier de développeur. J\'ai choisi de me former comme développeur Full-stack avec White-Rabbit. Sérieux, concientieux du travail bien fait. J`\'aimerais intégrer une équipe de développeur afin d\'enrichir mon expérience et mes compétences, ainsi que de participer à l\'évolution des projets futur.'],
    typeSpeed: 20,
    backSpeed: 0,
    smartBackspace: true, // Default value    
  });

  // COMPTEUR LIVE
  let compteur = 0;

  $(window).scroll(function() {
      const top = $('.counter').offset().top - window.innerHeight;

      if(commpteur == 0 && $(window).scrollTop() > top) {
          $('.counter-value').each(function() {
              let $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
            {
                duration: 10000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
          });
          compteur = 1;
      }
  });

  //AOS
  AOS.init();