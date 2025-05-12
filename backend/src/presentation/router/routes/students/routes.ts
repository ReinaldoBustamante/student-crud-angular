import { Router } from "express";
import { StudentControllers } from "./controllers";

export class StudentRoutes {
    
    static router(): Router {
        
        const router: Router = Router()
        const studentControllers = new StudentControllers();

        router.get('/', studentControllers.getStudents)
        router.get('/:id', studentControllers.getStudentById)
        router.post('/', studentControllers.createStudent)
        router.delete('/:id', studentControllers.deleteStudent)
        router.put('/:id', studentControllers.updateStudent)

        return router
    }
}