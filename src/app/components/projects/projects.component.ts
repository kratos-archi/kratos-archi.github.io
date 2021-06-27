import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = null;
  me: any = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getProjects();
    this.getAbout();
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
