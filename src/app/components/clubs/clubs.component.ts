import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {

  clubs: any[] = [
    {
      id: 4,
      name: 'Tounes Lina',
      start_date: '2020-10-01',
      end_date: 'Present',
      description: '',
      priority: 5,
      logo: '/assets/img/media/club/e1e73ad7-d2be-432f-8101-f828f9b7323f.jpg'
    },
    {
      id: 2,
      name: 'Junior Entreprise INSAT',
      start_date: '2020-09-01',
      end_date: '2021-06-01',
      description: '',
      priority: 3,
      logo: '/assets/img/media/club/9cbdb0a5-adfd-4c4d-b4ff-112ce4b50739.png'
    },
    {
      id: 1,
      name: 'Data-Colab',
      start_date: '2019-09-01',
      end_date: '2020-06-01',
      description: '',
      priority: 2,
      logo: '/assets/img/media/club/7c94efec-1c90-423a-9c64-684f28e87cb9.png'
    },
    {
      id: 3,
      name: 'Securinets',
      start_date: '2018-06-01',
      end_date: '2020-06-01',
      description: '',
      priority: 4,
      logo: '/assets/img/media/club/7bed1b65-c0bc-4b8e-b4a0-8a7545ccdc38.png'
    }
  ];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // this.getClubs();
  }

  getClubs(): void {
    this.apiService.getClubs().subscribe(data => {
      this.clubs = data;
    });
  }
}
