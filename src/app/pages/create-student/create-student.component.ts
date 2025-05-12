import { Component } from '@angular/core';
import { StudentFormComponent } from '../../components/student-form/student-form.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  imports: [StudentFormComponent],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.scss'
})
export class CreateStudentComponent {
  title: string = 'Nuevo Estudiante'
  description: string = 'Completa el formulario para registrar un nuevo estudiante'
  action: string = 'Crear'

  validators: {[key: string]: any[]} = {
    name: [Validators.required],
    lastName: [Validators.required],
    email: [Validators.required, Validators.email],
    phoneNumber: [Validators.required],
    birthdate: [Validators.required],
    career: [Validators.required]
  }


  actionFunction(payload: {
    name: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    birthdate: Date,
    career: string
  }){
    console.log(payload)
  }
}
