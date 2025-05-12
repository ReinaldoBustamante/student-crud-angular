import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-students',
  imports: [CommonModule, StudentComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  constructor(private router: Router){}

  students = [
    {id: 1, name: 'Juan Peréz', career: 'Ingenieria informática', email: 'juan.perez@ejemplo.com', phonenumber: '555-123-4567'},
    {id: 2, name: 'Maria González', career: 'Medicina', email: 'maria.gonzalez@ejemplo.com', phonenumber: '555-987-6543'},
    {id: 3, name: 'Carlos Rodríguez', career: 'Derecho', email: 'carlos.rodriguez@ejemplo.com', phonenumber: '555-222-3333'},
    {id: 4, name: 'Elena Díaz', career: 'Arquitectura', email: 'elena.diaz@ejemplo.com', phonenumber: '555-444-5555'}
  ]
  
  toEditStudent(id: number){
    this.router.navigate([`/edit/:${id}`])
  }
}
