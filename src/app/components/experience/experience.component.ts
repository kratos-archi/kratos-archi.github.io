import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: any[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getExperiences();
  }

  getExperiences(): void {
    this.apiService.getExperiences().subscribe(data => {
      this.experiences = data;
    },
      error => {});

  }
}
