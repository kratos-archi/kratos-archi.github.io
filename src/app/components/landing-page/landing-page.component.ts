import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  rolesList = 'a Software Engineer, a Backend Developer, a Cloud Developer';
  constructor() { }

  ngOnInit(): void {
  }

}
