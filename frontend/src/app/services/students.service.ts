import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  
  studentsSubject = new BehaviorSubject<any>([])
  students$ = this.studentsSubject.asObservable()

  getStudents(){
    this.http.get<any[]>('http://localhost:3000/api/students').subscribe(res => {
      this.studentsSubject.next(res.sort((a:any ,b:any) => b.id - a.id))
    })
  }

  deleteStudents(id: number){
    this.http.delete(`http://localhost:3000/api/students/${id}`).subscribe((res: any) => {
      const studentsUpdated = this.studentsSubject.getValue().filter((student:any) => student.id !== res.id);
      this.studentsSubject.next(studentsUpdated)
    })
  }

  createStudent(payload: any){
    this.http.post('http://localhost:3000/api/students', payload).subscribe((res:any)=> {
      const studentsUpdated = [res , ...this.studentsSubject.getValue()]
      this.studentsSubject.next(studentsUpdated)
    })
    this.router.navigate(['/'])
  }

  updateStudent(id:number, payload: any){
    this.http.put(`http://localhost:3000/api/students/${id}`, payload).subscribe((res:any) => {
      const studentsUpdated = [res, ...this.studentsSubject.getValue().filter((student: any) => student.id !== id)]
      this.studentsSubject.next(studentsUpdated.sort((a:any ,b:any) => b.id - a.id))
    })
    this.router.navigate(['/'])
  }
}
