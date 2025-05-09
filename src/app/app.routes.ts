import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EditEstudentComponent } from './pages/edit-estudent/edit-estudent.component';
import { CreateStudentComponent } from './pages/create-student/create-student.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'edit', component: EditEstudentComponent},
    {path: 'new', component: CreateStudentComponent}
];
