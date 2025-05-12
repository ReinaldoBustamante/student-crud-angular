
export class CreateStudentDto {
    constructor(
        public name: string,
        public lastName: string,
        public email: string,
        public phoneNumber: string,
        public birthdate: Date,
        public career: string
    ){}

    public static create(object: {[key:string]: any}): [string?, CreateStudentDto?]{
        const {name, lastName, email, phoneNumber, birthdate, career} = object   
        if(!name) return ['Missing Name']
        if(!lastName) return ['Missing lastName']
        if(!email) return ['Missing email']
        if(!phoneNumber) return ['Missing phoneNumber']
        if(!birthdate) return ['Missing birthdate']
        if(!career) return ['Missing career']

        return [undefined, new CreateStudentDto(name, lastName, email, phoneNumber, birthdate, career)]
    }
}