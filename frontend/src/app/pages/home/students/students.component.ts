import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentComponent } from '../student/student.component';
import { StudentsService } from '../../../services/students.service';

@Component({
  selector: 'app-students',
  imports: [CommonModule, StudentComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit {
  constructor(
    private router: Router,
    private studentService: StudentsService
  ){
    this.studentService.getStudents()
  }

  students: any = []

  ngOnInit(): void {
    this.studentService.students$.subscribe(res => {
      this.students = res
    })

  }
  
  toEditStudent(id: number){
    this.router.navigate([`/edit/:${id}`])
  }
}
