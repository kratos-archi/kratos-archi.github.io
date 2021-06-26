import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getAbout(): Observable<any> {
    return this.http.get(environment.baseUrl + 'about');
  }
  getExperiences(): Observable<any> {
    return this.http.get(environment.baseUrl + 'experiences');
  }
  getAwards(): Observable<any> {
    return this.http.get(environment.baseUrl + 'awards');
  }
  getCategories(): Observable<any> {
    return this.http.get(environment.baseUrl + 'categories');
  }
  getClubs(): Observable<any> {
    return this.http.get(environment.baseUrl + 'clubs');
  }
  postContact(data): Observable<any> {
    return this.http.post(environment.baseUrl + 'contact', data);
  }
  getEducation(): Observable<any> {
    return this.http.get(environment.baseUrl + 'education');
  }
  getProjects(): Observable<any> {
    return this.http.get(environment.baseUrl + 'projects');
  }
  getSkills(filter: string = ''): Observable<any> {
    return this.http.get(environment.baseUrl + `skills?category__name=${filter}`);
  }
  getSocial(): Observable<any> {
    return this.http.get(environment.baseUrl + 'social');
  }
  getTestimonials(): Observable<any> {
    return this.http.get(environment.baseUrl + 'testimonials');
  }






}
