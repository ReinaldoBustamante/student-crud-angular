import { Component } from '@angular/core';
import { StudentFormComponent } from '../../components/student-form/student-form.component';

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

  actionFunction(){
    console.log('crear')
  }
}
