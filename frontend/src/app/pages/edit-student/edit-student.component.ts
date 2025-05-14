import { Component, OnInit } from '@angular/core';
import { StudentFormComponent } from "../../components/student-form/student-form.component";
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-student',
  imports: [StudentFormComponent, CommonModule],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.scss'
})
export class EditStudentComponent implements OnInit{
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentsService,
  ){}
  
  studentData: any;
  id!: number;
  
  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.studentService.students$.subscribe(res =>{
      const student = res.find((s:any) => s.id === this.id)
      this.studentData = student
    })
  }

  title: string = 'Editar Estudiante'
  description: string = 'Actualizar la información del estudiante'
  action: string = 'Actualizar'
  
  actionFunction = (payload: {
    name: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    birthdate: Date,
    career: string
  }) => {
    this.studentService.updateStudent(this.id, {
      ...payload,
      birthdate: new Date(payload.birthdate).toISOString()
    })
  }
}
