import { Component, OnInit } from '@angular/core';
import {steps} from '../../services/steps.data';
declare var introJs: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  rolesList = 'a Software Engineer, a Backend Developer, a Cloud Developer';
  constructor() { }
  ngOnInit(): void {
  }

  startTuto(): void {
    const intro = introJs();
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
  }

}
