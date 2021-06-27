import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: any[] = [
    {
      id: 10,
      category: {
        id: 4,
        name: 'Cloud - Others'
      },
      name: 'Docker',
      knowledge: 80,
      priority: 8,
      image: 'assets/img/media/skill/79017b80-29fd-4485-8c1f-76f6a027815a.png'
    },
    {
      id: 8,
      category: {
        id: 4,
        name: 'Cloud - Others'
      },
      name: 'AWS',
      knowledge: 70,
      priority: 6,
      image: 'assets/img/media/skill/c1bfde15-ea97-494b-a7e9-a92fe3cdafdf.png'
    },
    {
      id: 9,
      category: {
        id: 4,
        name: 'Cloud - Others'
      },
      name: 'Linux',
      knowledge: 75,
      priority: 5,
      image: 'assets/img/media/skill/f2d9e3c6-2d55-4e1b-ad90-3064b3a1a860.jpg'
    },
    {
      id: 12,
      category: {
        id: 4,
        name: 'Cloud - Others'
      },
      name: 'Git',
      knowledge: 85,
      priority: 5,
      image: 'assets/img/media/skill/6ea8d409-d8b8-4bb5-90bf-a7b7b5662667.png'
    },
    {
      id: 5,
      category: {
        id: 3,
        name: 'Database'
      },
      name: 'MongoDB',
      knowledge: 65,
      priority: 4,
      image: 'assets/img/media/skill/89eed8fb-6465-41cf-a093-e6d7a37f487a.png'
    },
    {
      id: 13,
      category: {
        id: 2,
        name: 'Programming Language'
      },
      name: 'Javascript',
      knowledge: 85,
      priority: 4,
      image: 'assets/img/media/skill/4dfe7fd3-fbb9-4f4e-8c15-2ed8e4a27eef.png'
    },
    {
      id: 15,
      category: {
        id: 3,
        name: 'Database'
      },
      name: 'Postgresql',
      knowledge: 60,
      priority: 4,
      image: 'assets/img/media/skill/7115bebe-b662-40df-831c-a1acdc3f5ef0.gif'
    },
    {
      id: 16,
      category: {
        id: 3,
        name: 'Database'
      },
      name: 'MySql',
      knowledge: 75,
      priority: 4,
      image: 'assets/img/media/skill/cbd3cdd6-f2f9-4cff-b9cf-6d46dbd776e5.jpg'
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
      image: 'assets/img/media/skill/4b8b13c4-c912-416a-afac-d2a6f143f708.png'
    },
    {
      id: 11,
      category: {
        id: 4,
        name: 'Cloud - Others'
      },
      name: 'Kubernetes',
      knowledge: 65,
      priority: 3,
      image: 'assets/img/media/skill/75cfa565-ffe9-4785-95ed-a5362823654c.png'
    },
    {
      id: 14,
      category: {
        id: 2,
        name: 'Programming Language'
      },
      name: 'Java',
      knowledge: 65,
      priority: 3,
      image: 'assets/img/media/skill/397a9cdb-727b-4381-b7fb-86397c444428.webp'
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
      image: 'assets/img/media/skill/685768cc-28f3-480c-9d52-7dea63b1fcbb.png'
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
      image: 'assets/img/media/skill/841c453b-3380-4bc1-8873-ac6a28bab3f1.png'
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
      image: 'assets/img/media/skill/873587eb-6434-4781-a216-a09d6a282af4.png'
    },
    {
      id: 7,
      category: {
        id: 4,
        name: 'Cloud - Others'
      },
      name: 'GCP',
      knowledge: 55,
      priority: 2,
      image: 'assets/img/media/skill/ff5d445c-df82-49c7-94c1-1ccd9ab2cabf.png'
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
      image: 'assets/img/media/skill/b8697998-8c1c-4b6c-b803-0faa0471d7f9.jpeg'
    }
  ];
  categories: any[] = [
      {
        id: 1,
        name: 'Framework'
      },
      {
        id: 2,
        name: 'Programming Language'
      },
      {
        id: 3,
        name: 'Database'
      },
      {
        id: 4,
        name: 'Cloud - Others'
      }
    ];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // this.getSkills();
    // this.getCategories();
  }

  getSkills(): void {
    this.apiService.getSkills().subscribe(data => {
        this.skills = data;
      },
      error => {});

  }
  getCategories(): void {
    this.apiService.getCategories().subscribe(data => {
        this.categories = data;
      },
      error => {});

  }


}
