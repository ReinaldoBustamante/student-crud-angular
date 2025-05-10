import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { StudentsComponent } from './students/students.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, StudentsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
