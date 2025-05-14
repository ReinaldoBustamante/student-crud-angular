import express, { Router } from 'express'
import cors from 'cors'
export interface ServerConfig{
    PORT: number,
    ROUTES: Router
}

export class ServerApp{
    private PORT: number
    private ROUTES: Router
    constructor(private serverConfig: ServerConfig){
        const { PORT, ROUTES } = this.serverConfig
        this.PORT = PORT
        this.ROUTES = ROUTES
    }

    start(){
        const app = express()
        app.use(cors())
        app.use(express.json())
        app.use('/api', this.ROUTES)

        app.listen(this.PORT, () => console.log(`Server listing on port ${this.PORT}`))
    }
}