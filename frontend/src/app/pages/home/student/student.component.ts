import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  @Input() id!: number 
  @Input() name!: string 
  @Input() career!: string
  @Input() email!: string 
  @Input() phonenumber!: string 

  constructor(private router: Router){}

  toEditStudent(id: number){
    this.router.navigate([`/edit/${id}`])
  }
  
}
