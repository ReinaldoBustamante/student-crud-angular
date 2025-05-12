import { ServerRouter } from "./presentation/router/router"
import { ServerApp } from "./presentation/server"


function main(){
    const serverApp = new ServerApp({
        PORT: 3000,
        ROUTES: ServerRouter.router()
    })
    serverApp.start()
}

(() => {
    main()
})()