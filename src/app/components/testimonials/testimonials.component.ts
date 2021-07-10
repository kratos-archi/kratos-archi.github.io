import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {SwiperOptions} from 'swiper';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  configuration: SwiperOptions = {
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
  testimonials: any[] = [
    {
      id: 1,
      name: 'Rami Hachicha',
      image: '/assets/img/media/testimonial/efdf845b-ad49-4252-afba-7730f60fb7c1.jpg',
      role: 'President at Tounes Lina',
      quote: '<b>Moez Saidi</b> made <b>excellent, impactful</b> contributions to our Backend\n' +
        'project in <a href="https://www.elbaladiya.tn/" target="_blank"><b>elBaladiya.tn</b></a>.' +
        '<br\> He was since 2020 a <b>great</b> Addition to our ' +
        'team, and made proof of both <b>proficiency</b> and <b>professionalism</b>.<br\>' +
        'Working together was always a <b>pleasurable</b> experience.'
    },
    {
      id: 2,
      name: 'Ahmed Jamoussi',
      image: '/assets/img/media/testimonial/875549b0-5408-4832-87f3-47571eac38a4.jpg',
      role: 'CEO at EVENTIZER ( Vayetek )',
      quote: ''
    },
    {
      id: 3,
      name: 'Hajer Trabelsi',
      image: '/assets/img/media/testimonial/6744a7e6-3d57-4c41-97f4-48a2ce94eeae.png',
      role: 'CEO at Voguel Consulting',
      quote: ''
    }
  ];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getTestimonials();
  }

  getTestimonials(): void {
    this.apiService.getTestimonials().subscribe(data => {
      this.testimonials = data;
    });
  }

}
