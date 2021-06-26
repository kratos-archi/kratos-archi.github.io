import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.scss']
})
export class SkillsCardComponent implements OnInit {
  selectedCategory = '';
  skills: any[];
  categories: any[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getSkills();
    this.getCategories();
  }
  getSelectedSkillsByCategory(category): void {
    this.selectedCategory = category;
    this.getSkills();
  }

  getSkills(): void {
    this.apiService.getSkills(this.selectedCategory).subscribe(data => {
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
