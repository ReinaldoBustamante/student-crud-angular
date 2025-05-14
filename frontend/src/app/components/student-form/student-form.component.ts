import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent implements OnInit, OnChanges{
  constructor(private router: Router){}

  @Input() title!: string  
  @Input() description!: string
  @Input() action!: string
  @Input() actionFunction!: (payload: {
    name: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    birthdate: Date,
    career: string
  }) => void
  @Input() validators: {[key: string]: any[]} = {};
  @Input() studentData?: any
  
  ngOnInit(): void {
    this.form.get('name')?.setValidators(this.validators['name'] || [])
    this.form.get('lastName')?.setValidators(this.validators['lastName'] || [])
    this.form.get('email')?.setValidators(this.validators['email'] || [])
    this.form.get('phoneNumber')?.setValidators(this.validators['phoneNumber'] || [])
    this.form.get('birthdate')?.setValidators(this.validators['birthdate'] || [])
    this.form.get('career')?.setValidators(this.validators['career'] || [])
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['studentData'] && this.studentData) {
      this.form = new FormGroup({
        name: new FormControl(this.studentData.name) ,
        lastName: new FormControl(this.studentData.lastName),
        email: new FormControl(this.studentData.email),
        phoneNumber: new FormControl(this.studentData.phoneNumber),
        birthdate: new FormControl(this.formatDate(this.studentData.birthdate)),
        career: new FormControl(this.studentData.career)
      })
    }
  }
  private formatDate(date: any): string {
    if (!date) return '';
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  public form: FormGroup = new FormGroup({
    name: new FormControl('') ,
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    birthdate: new FormControl(''),
    career: new FormControl('')
  })
  

  public validForm: Boolean = true
  toHome(){
    this.router.navigate(['/'])
    
  }
  
  onSubmit(){
    if(this.form.invalid) {
      this.validForm = false
      return;
    }
    this.validForm = true
    
    this.actionFunction(this.form.value)
    
  }

  
}
