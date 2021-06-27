import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  @Input() config;
  testimonials: any = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getTestimonials();
  }

  getTestimonials(): void {
    this.apiService.getTestimonials().subscribe(data => {
      this.testimonials = data;
    });
  }

}
