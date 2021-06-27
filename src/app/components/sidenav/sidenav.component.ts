import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  socials: any = [
    {
      id: 1,
      name: 'LinkedIn',
      link: 'https://linkedin.com/in/moez-saidi/',
      logo: 'bxl-linkedin'
    },
    {
      id: 2,
      name: 'Github',
      link: 'https://github.com/moez-RT',
      logo: 'bxl-github'
    },
    {
      id: 3,
      name: 'Facebook',
      link: 'https://www.facebook.com/moez.saidi.92',
      logo: 'bxl-facebook'
    }
  ];
  about: any = {
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
    // this.getSocial();
    // this.getAbout();
  }

  getSocial(): void {
    this.apiService.getSocial().subscribe(data => {
      this.socials = data;
    });
  }
  getAbout(): void {
    this.apiService.getAbout().subscribe(data => {
      this.about = data[0];
    });
  }
}
