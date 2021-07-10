import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as AOS from 'aos';
import Typed from 'typed.js';
import Swiper from 'swiper';
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
export class AppComponent  implements OnInit, AfterViewInit {
  title = 'Moez Saidi';

  ngOnInit(): void {
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

    new Swiper('.portfolio-details-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });

    /**
     * Testimonials slider
     */
    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
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
    });

  }

  ngAfterViewInit(): void {
    const intro = introJs();
    if ( localStorage.getItem('first-time') === null) {
      intro.setOptions( {
        tooltipClass: 'customTooltip',
        showProgress: true,
        showBullets: false,

        steps: [{
          title: 'Welcome',
          intro: 'First time you visit my portfolio , Hi 👋 !'
        },
          {
            title: 'Who am i ?',
            element: document.querySelector('#home-step'),
            intro: 'I am currently a student , passionate about cloud.'
          },
          {
            title: 'About Me!',
            element: document.querySelector('#about-step'),
            intro: 'Here you can find some information about me.',
          },
          {
            title: 'Knowledge about frameworks',
            element: document.querySelector('#skills-framework'),
            intro: 'Using various framework made me realize the hidden objective of each one , and their use cases.',
          },
          {
            title: 'Knowledge about Programming Languages',
            element: document.querySelector('#skills-pl'),
            intro: 'Participating in various competition made me realize the important of programming solving.',
          },
          {
            title: 'Knowledge about databases',
            element: document.querySelector('#skills-db'),
            intro: 'Ability to choose the most relevant database to meet the client\'s needs.',
          },
          {
            title: 'Passion for Automation & Cloud',
            element: document.querySelector('#skills-cloud'),
            intro: 'Discover new tech in my free time',
          },
          {
            title: 'My Professional Experiences',
            element: document.querySelector('#experience-step'),
            intro: 'I realized that working while studying is very interesting to apply what i learn in really world project .',
          },
          {
            title: 'Voguel Consulting',
            element: document.querySelector('#experience-step-0'),
            intro: 'A startup that works permanently with clients based in Belgium and France for digital solutions.',
          },
          {
            title: 'Tounes Lina',
            element: document.querySelector('#experience-step-1'),
            intro: 'A Tunisian association whose goal is to digitize the daily needs of citizens.',
          },
          {
            title: 'Vayetek',
            element: document.querySelector('#experience-step-3'),
            intro: 'A Tunisian startup aiming to digitize Events end to end , the app is known as Eventizer',
          },
          {
            title: 'My Education',
            element: document.querySelector('#education-step'),
            intro: 'I just studied in one university after my Bachelor degree .',
          },
          {
            title: 'Real Time Mask Detection',
            element: document.querySelector('#projects-step-0'),
            intro: 'During this project , i used OpenCv to extract the face , ' +
              'then applied a basic Deep learning model using Keras' +
              ' that i trained using ' +
              'some images.'
          },
          {
            title: 'Flip Card Game',
            element: document.querySelector('#projects-step-1'),
            intro: 'This project is a Flutter mobile app, i build it to showcase that i\'m able to develop real' +
              ' life project using Provider' +
              'and consuming API also manipulating Package to meet my needs.'
          },
          {
            title: 'Carpooling Website',
            element: document.querySelector('#projects-step-2'),
            intro: 'This project was my first academic web project , it\'s a basic webapp that ' +
              'provide people to post to get or provide a carpooling.' +
              'Built using Django REST & Angular'

          },
          {
            title: 'Testimonials',
            element: document.querySelector('#testimonials-step'),
            intro: 'Those are my precious employers that i have been working with , they made me who i am right now .',
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
  }
}
