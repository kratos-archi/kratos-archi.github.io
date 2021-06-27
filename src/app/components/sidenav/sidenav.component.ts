import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  socials: any = null;
  about: any = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getSocial();
    this.getAbout();
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
