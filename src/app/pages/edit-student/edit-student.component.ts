import { Component } from '@angular/core';
import { StudentFormComponent } from "../../components/student-form/student-form.component";

@Component({
  selector: 'app-edit-student',
  imports: [StudentFormComponent],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.scss'
})
export class EditStudentComponent {
  title: string = 'Editar Estudiante'
  description: string = 'Actualizar la información del estudiante'
  action: string = 'Actualizar'

  actionFunction(){
    console.log('editar')
  }
}
