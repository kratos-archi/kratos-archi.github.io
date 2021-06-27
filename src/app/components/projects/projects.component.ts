import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [
    {
      id: 1,
      date: '2021-01-01',
      name: 'Real Time Mask Detection',
      link: 'https://github.com/moez-RT/Real-Time-Mask-Detection',
      image: '/assets/img/media/project/6cf505c3-63f6-4808-a181-1415c36cf59f.PNG',
      description: ''
    },
    {
      id: 2,
      date: '2020-10-01',
      name: 'Flip Card Game',
      link: 'https://github.com/moez-RT/flip-game-flutter',
      image: '/assets/img/media/project/320ab471-ddd0-4abd-bc25-72e842bded22.png',
      description: ''
    },
    {
      id: 3,
      date: '2020-05-01',
      name: 'Carpooling Website',
      link: 'https://moez-rt.github.io/HoyHoyHabatni/',
      image: '/assets/img/media/project/3d9b2de6-e203-4139-b316-84a4046e5b0b.png',
      description: ''
    }
  ];
  me: any = {
    id: 1,
    name: 'Moez Saidi',
    position: 'Software Engineer',
    profile_image: '/assets/img/media/about/43f7f649-5ac2-4065-a80d-cad464735276.jpg',
    profile_background: '/assets/img/media/about/acd8bd91-e90a-49e7-a598-d913af1d6987.jpg',
    cv: '/assets/img/media/about/3cdb2154-7b13-40ad-b085-fabc24fe2b90.pdf',
    age: '1998-01-01',
    website: 'https://master.d463nqrat69rs.amplifyapp.com/',
    phone: '+216 26992291',
    degree: 'IT Engineer',
    email: 'saidi.moez.2014@gmail.com',
    city: 'Tunis',
    description: 'I’m a student in 2nd-year Engineer with Specialty in Computer Networks and\r\nTelecommunications at the National Institute of Applied Sciences and Technologies (INSAT).\r\nI have 6 months of experience with Angular and Django Rest Framework, also I\'m aiming to extend my knowledge about the cloud (AWS).',
    location: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d204528.2082550114!2d10.0596678!3d36.7764864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis!5e0!3m2!1sfr!2stn!4v1624740591114!5m2!1sfr!2stn'
  };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // this.getProjects();
    // this.getAbout();
  }
  getAbout(): void {
    this.apiService.getAbout().subscribe(data => {
      this.me = data[0];
    },
      error => {});
  }
  getProjects(): void {
    this.apiService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }
}
