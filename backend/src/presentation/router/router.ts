import { Router } from "express";
import { StudentRoutes } from "./routes/students/routes";

export class ServerRouter {
 
    
    static router(): Router {
        const router = Router()
        router.use('/students', StudentRoutes.router())
        return router
    }
}