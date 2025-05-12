
export class UpdateStudentDto {
    constructor(
        public name?: string,
        public lastName?: string,
        public email?: string,
        public phoneNumber?: string,
        public birthdate?: Date,
        public career?: string
    ){}

    public static create(object: {[key:string]: any}): [string?, UpdateStudentDto?] {
        const {name, lastName, email, phoneNumber, birthdate, career} = object

        return[undefined, new UpdateStudentDto(name, lastName, email,phoneNumber, birthdate, career)]
    }
}