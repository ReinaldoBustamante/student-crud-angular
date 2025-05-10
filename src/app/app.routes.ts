import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { CreateStudentComponent } from './pages/create-student/create-student.component';
import { EditStudentComponent } from './pages/edit-student/edit-student.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'edit/:id', component: EditStudentComponent},
    {path: 'new', component: CreateStudentComponent}
];
