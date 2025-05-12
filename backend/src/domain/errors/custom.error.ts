
export class CustomError extends Error {
    constructor(
        public statusCode: number,
        public message: string
    ){
        super(message)
    }

    static notFound(message: string){
        throw new CustomError(404, message)
    }
    
    static badRequest(message: string){
        throw new CustomError(400, message)
    }

    static conflict(message: string){
        throw new CustomError(409,message)
    }
}