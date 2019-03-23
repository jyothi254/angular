import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutservice',
  templateUrl: './aboutservice.component.html',
  styleUrls: ['./aboutservice.component.css']
})
export class AboutserviceComponent implements OnInit {
courses;
  constructor(service:CoursesService) {
    this.courses=service.getCourses();

   }

  ngOnInit() {
  }

}
