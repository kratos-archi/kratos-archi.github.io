import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: any[];
  categories: any[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getSkills();
    this.getCategories();
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
