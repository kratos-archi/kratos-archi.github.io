import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about: any = null;
  now: any = new Date();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAbout();
  }

  getAbout(): void {
    this.apiService.getAbout().subscribe(data => {
      this.about = data[0];
    });
  }
  getAge(current): number {
    const cur: any = new Date(current);
    const diff = Math.floor((this.now - cur)) / (1000* 3600 * 24 * 30 * 12);
    return parseInt(String(diff), 10);
  }
}
