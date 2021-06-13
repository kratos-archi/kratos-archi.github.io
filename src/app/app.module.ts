import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { SocialComponent } from './components/social/social.component';
import { ClubsComponent } from './components/clubs/clubs.component';
import { AwardsComponent } from './components/awards/awards.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FactsComponent } from './components/facts/facts.component';
import { ResumeComponent } from './components/resume/resume.component';
import { CustomContainerComponent } from './components/shared/custom-container/custom-container.component';
import { SkillsCardComponent } from './components/skills-card/skills-card.component';
import { ServicesComponent } from './components/services/services.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    TestimonialsComponent,
    SocialComponent,
    ClubsComponent,
    AwardsComponent,
    SidenavComponent,
    FactsComponent,
    ResumeComponent,
    CustomContainerComponent,
    SkillsCardComponent,
    ServicesComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    NgxUsefulSwiperModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
