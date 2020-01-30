import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/CourseService';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  courses = [
    {title: 'CS 5400', id: 123},
    {title: 'CS 4400', id: 234},
    {title: 'CS 3400', id: 345},
    {title: 'CS 2400', id: 456}
  ]

  constructor(private  service: CourseService) { }

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
