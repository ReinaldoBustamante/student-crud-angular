import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../../../services/students.service';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  @Input() id!: number 
  @Input() name!: string 
  @Input() lastName!: string
  @Input() career!: string
  @Input() email!: string 
  @Input() phonenumber!: string 

  constructor(
    private router: Router,
    private studentService: StudentsService
  ){}

  toEditStudent(id: number){
    this.router.navigate([`/edit/${id}`])
  }
  
  deleteStudent(id: number){
    this.studentService.deleteStudents(id)
  }
  
}
