import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  education: any[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getExperiences();
  }

  getExperiences(): void {
    this.apiService.getEducation().subscribe(data => {
        this.education = data;
      },
      error => {});

  }
}
