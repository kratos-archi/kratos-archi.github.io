import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: any[] = [
    {
      id: 1,
      skills: [
        {
          id: 5,
          category: {
            id: 3,
            name: 'Database'
          },
          name: 'MongoDB',
          knowledge: 65,
          priority: 4,
          image: 'http://127.0.0.1:8000/media/skill/89eed8fb-6465-41cf-a093-e6d7a37f487a.png'
        },
        {
          id: 3,
          category: {
            id: 2,
            name: 'Programming Language'
          },
          name: 'Python',
          knowledge: 90,
          priority: 3,
          image: 'http://127.0.0.1:8000/media/skill/4b8b13c4-c912-416a-afac-d2a6f143f708.png'
        },
        {
          id: 2,
          category: {
            id: 1,
            name: 'Framework'
          },
          name: 'Angular',
          knowledge: 70,
          priority: 2,
          image: 'http://127.0.0.1:8000/media/skill/685768cc-28f3-480c-9d52-7dea63b1fcbb.png'
        },
        {
          id: 4,
          category: {
            id: 1,
            name: 'Framework'
          },
          name: 'Node/Express',
          knowledge: 70,
          priority: 2,
          image: 'http://127.0.0.1:8000/media/skill/841c453b-3380-4bc1-8873-ac6a28bab3f1.png'
        },
        {
          id: 1,
          category: {
            id: 1,
            name: 'Framework'
          },
          name: 'Django',
          knowledge: 85,
          priority: 1,
          image: 'http://127.0.0.1:8000/media/skill/b8697998-8c1c-4b6c-b803-0faa0471d7f9.jpeg'
        }
      ],
      start_date: '2021-04-18',
      end_date: 'Present',
      description: '\\item Develop a time management system for companies.\r\n\\item Develop innovative solutions to meet client needs',
      role: 'Software Engineer - Intern',
      employer: 'Voguel Consulting',
      address: 'Manar 2, Tunisia',
      remote: false
    },
    {
      id: 2,
      skills: [
        {
          id: 3,
          category: {
            id: 2,
            name: 'Programming Language'
          },
          name: 'Python',
          knowledge: 90,
          priority: 3,
          image: 'http://127.0.0.1:8000/media/skill/4b8b13c4-c912-416a-afac-d2a6f143f708.png'
        },
        {
          id: 1,
          category: {
            id: 1,
            name: 'Framework'
          },
          name: 'Django',
          knowledge: 85,
          priority: 1,
          image: 'http://127.0.0.1:8000/media/skill/b8697998-8c1c-4b6c-b803-0faa0471d7f9.jpeg'
        }
      ],
      start_date: '2020-10-01',
      end_date: 'Present',
      description: '\\item Automate report generation\r\n\\item Automate sending emails',
      role: 'Backend Engineer - Intern',
      employer: 'elBaladiya.tn',
      address: 'Tunis, Tunisia',
      remote: true
    },
    {
      id: 3,
      skills: [
        {
          id: 3,
          category: {
            id: 2,
            name: 'Programming Language'
          },
          name: 'Python',
          knowledge: 90,
          priority: 3,
          image: 'http://127.0.0.1:8000/media/skill/4b8b13c4-c912-416a-afac-d2a6f143f708.png'
        },
        {
          id: 1,
          category: {
            id: 1,
            name: 'Framework'
          },
          name: 'Django',
          knowledge: 85,
          priority: 1,
          image: 'http://127.0.0.1:8000/media/skill/b8697998-8c1c-4b6c-b803-0faa0471d7f9.jpeg'
        }
      ],
      start_date: '2020-09-01',
      end_date: '2020-10-01',
      description: '\\item Analysis of data from a survey carried out by students.',
      role: 'Data Analyst - Intern',
      employer: 'NAXXUM MEA',
      address: 'Lac 2, Tunisia',
      remote: false
    },
    {
      id: 4,
      skills: [
        {
          id: 3,
          category: {
            id: 2,
            name: 'Programming Language'
          },
          name: 'Python',
          knowledge: 90,
          priority: 3,
          image: 'http://127.0.0.1:8000/media/skill/4b8b13c4-c912-416a-afac-d2a6f143f708.png'
        },
        {
          id: 2,
          category: {
            id: 1,
            name: 'Framework'
          },
          name: 'Angular',
          knowledge: 70,
          priority: 2,
          image: 'http://127.0.0.1:8000/media/skill/685768cc-28f3-480c-9d52-7dea63b1fcbb.png'
        },
        {
          id: 6,
          category: {
            id: 1,
            name: 'Framework'
          },
          name: 'Laravel',
          knowledge: 70,
          priority: 2,
          image: 'http://127.0.0.1:8000/media/skill/873587eb-6434-4781-a216-a09d6a282af4.png'
        },
        {
          id: 1,
          category: {
            id: 1,
            name: 'Framework'
          },
          name: 'Django',
          knowledge: 85,
          priority: 1,
          image: 'http://127.0.0.1:8000/media/skill/b8697998-8c1c-4b6c-b803-0faa0471d7f9.jpeg'
        }
      ],
      start_date: '2020-03-01',
      end_date: '2020-08-30',
      description: '\\item Work on the Eventizer project which is a large-scale event and convention organization solution.\r\n\\item Develop the badges and certificates configuration\r\ninterface.\r\n\\item Automate the generation of badges and certificates.',
      role: 'Full Stack Developer - Intern',
      employer: 'VAYETEK',
      address: 'Urban Center, Tunisia',
      remote: false
    }
  ];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // this.getExperiences();
  }

  getExperiences(): void {
    this.apiService.getExperiences().subscribe(data => {
      this.experiences = data;
    },
      error => {});

  }
}
