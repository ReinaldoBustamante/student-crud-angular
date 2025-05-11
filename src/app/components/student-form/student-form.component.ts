import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {
  constructor(private router: Router){}

  @Input() title!: string  
  @Input() description!: string
  @Input() action!: string
  @Input() actionFunction!: () => void
  
  toHome(){
    this.router.navigate(['/'])
  }

  name = new FormControl('');
  lastName = new FormControl('');
  email = new FormControl('');
  phoneNumber = new FormControl('');
  birthdate = new FormControl('');
  career = new FormControl('');
}
