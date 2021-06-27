import {Component, OnInit} from '@angular/core';
import {SwiperOptions} from 'swiper';
import * as AOS from 'aos';
import Typed from 'typed.js';
declare const Isotope: any;
declare const Waypoint: any;
declare const GLightbox: any;
declare var $: any;
declare var introJs: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'Moez Saidi';
  config: SwiperOptions = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    speed: 600,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }

  };

  ngOnInit(): void {
    const intro = introJs();
    if ( localStorage.getItem('first-time') === null) {
      intro.setOptions({
        showProgress: true,
        position: 'left',
        showBullets: false,

        steps: [{
          title: 'Welcome',
          intro: 'First time you visit my portfolio , Hi 👋 !'
        },
          {
            title: 'Who am i ?',
            element: document.querySelector('#home-step'),
            intro: 'This step focuses on an image'
          },
          {
            title: 'About Me!',
            element: document.querySelector('#about-step'),
            intro: 'And this is our final step!',
          },
          {
            title: 'My Skills',
            element: document.querySelector('#skills-step'),
            intro: 'And this is our final step!',
            position: 'bo',
          },
          {
            title: 'My Professional Experiences',
            element: document.querySelector('#experience-step'),
            intro: 'And this is our final step!',
          },
          {
            title: 'My Education',
            element: document.querySelector('#education-step'),
            intro: 'And this is our final step!',
          },
          {
            title: 'My Projects',
            element: document.querySelector('#projects-step'),
            intro: 'And this is our final step!',
          },
          {
            title: 'Testimonials',
            element: document.querySelector('#testimonials-step'),
            intro: 'And this is our final step!',
          },
          {
            title: 'Feel free to contact me ! ',
            element: document.querySelector('#contact-step'),
            intro: 'And this is our final step!',
          }

        ]
      }).start();
      localStorage.setItem('first-time', 'false');
    }
// Initialize steps
// Start tutorial
    /**
     * Counter
     */

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return document.querySelectorAll(el);
      } else {
        return document.querySelector(el);
      }
    };

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      const selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    /**
     * Easy on scroll event listener
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener);
    };

    /**
     * Navbar links active state on scroll
     */
    const navbarlinks = select('#navbar .scrollto', true);
    const navbarlinksActive = () => {
      const position = window.scrollY + 200;
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) { return; }
        const section = select(navbarlink.hash);
        if (!section) { return; }
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      });
    };
    window.addEventListener('load', navbarlinksActive);
    onscroll(document, navbarlinksActive);

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      const elementPos = select(el).offsetTop;
      window.scrollTo({
        top: elementPos,
        behavior: 'smooth'
      });
    };

    /**
     * Back to top button
     */
    const backtotop = select('.back-to-top');
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active');
        } else {
          backtotop.classList.remove('active');
        }
      };
      window.addEventListener('load', toggleBacktotop);
      onscroll(document, toggleBacktotop);
    }

    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
      select('body').classList.toggle('mobile-nav-active');
      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });

    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault();

        const body = select('body');
        if (body.classList.contains('mobile-nav-active')) {
          body.classList.remove('mobile-nav-active');
          const navbarToggle = select('.mobile-nav-toggle');
          navbarToggle.classList.toggle('bi-list');
          navbarToggle.classList.toggle('bi-x');
        }
        scrollto(this.hash);
      }
    }, true);

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash);
        }
      }
    });

    /**
     * Hero type effect
     */
    const typed = select('.typed');
    if (typed) {
      let typedStrings = typed.getAttribute('data-typed-items');
      typedStrings = typedStrings.split(',');
      new Typed('.typed', {
        strings: typedStrings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }

    /**
     * Skills animation
     */
    const skilsContent = select('.skills-content');
    if (skilsContent) {
      new Waypoint({
        element: skilsContent,
        offset: '80%',
        handler(direction) {
          const progress = select('.progress .progress-bar', true);
          progress.forEach((el) => {
            el.style.width = el.getAttribute('aria-valuenow') + '%';
          });
        }
      });
    }

    /**
     * Porfolio isotope and filter
     */

    /**
     * Initiate portfolio lightbox
     */
    const portfolioLightbox = GLightbox({
      selector: '.portfolio-lightbox'
    });


    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    });
  }
}
