import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  education: any[] = [
    {
      id: 1,
      start_date: '2017-09-01',
      end_date: '2022-06-01',
      description: 'INSAT',
      speciality: 'Engineer in Computer Networks and Telecommunications',
      address: 'Urban Center, Tunisia'
    },
    {
      id: 2,
      start_date: '2016-09-15',
      end_date: '2017-06-01',
      description: 'High School Ibn Abi Dhief',
      speciality: 'Baccalaureate « Experimental Science » with Honors',
      address: 'Manouba, Tunisia'
    }
  ];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // this.getEducation();
  }

  getEducation(): void {
    this.apiService.getEducation().subscribe(data => {
        this.education = data;
      },
      error => {});

  }
}
