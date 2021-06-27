export const steps = {
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
      intro: 'I am currently a student , passionate about cloud .'
    },
    {
      title: 'About Me!',
      element: document.querySelector('#about-step'),
      intro: 'Here you can find some information about me .',
    },
    {
      title: 'My Skills',
      element: document.querySelector('#skills-step'),
      intro: 'I worked so hard to obtain such skills and aiming to get even more .',
    },
    {
      title: 'My Professional Experiences',
      element: document.querySelector('#experience-step'),
      intro: 'I realized that working while studying is very interesting to apply what i learn in really world project .',
    },
    {
      title: 'My Education',
      element: document.querySelector('#education-step'),
      intro: 'I just studied in one university after my Bachelor degree .',
    },
    {
      title: 'My Projects',
      element: document.querySelector('#projects-step'),
      intro: 'Here is some of my project , just for fun .',
    },
    {
      title: 'Testimonials',
      element: document.querySelector('#testimonials-step'),
      intro: 'Those are my precious employers that i have been working with , they made me who i am right now .',
    },
    {
      title: 'Feel free to contact me ! ',
      element: document.querySelector('#contact-step'),
      intro: 'And this is your final step, feel free to contact me ^^',
    }

  ]
};
