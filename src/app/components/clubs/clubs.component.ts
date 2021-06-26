import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {

  clubs: any = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getClubs();
  }

  getClubs(): void {
    this.apiService.getClubs().subscribe(data => {
      this.clubs = data;
    });
  }
}
