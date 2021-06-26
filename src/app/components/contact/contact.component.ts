import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact: any;
  about: any;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getAbout();
    }

    getAbout(): void {
      this.apiService.getAbout().subscribe(data => {
        this.about = data[0];
      });
    }

  postContact(form: NgForm): void {
    if (form.valid) {
      this.apiService.postContact(form.value).subscribe(data => {
          Swal.fire({
            title: 'Message sent successfully',
            text: 'Thank you for contacting me',
            icon: 'success',
            confirmButtonText: 'You message has been sent',
          });
        },
        error => {
          Swal.fire({
            title: 'Your form is not quite correct',
            text: 'You will not be able to send message !',
            icon: 'warning',
            confirmButtonText: 'Try Again',
          });
        });
    }
    else {
      Swal.fire({
        title: 'Your form is not quite correct',
        text: 'You will not be able to send message !',
        icon: 'warning',
        confirmButtonText: 'Try Again',
      });

    }
  }
}
