import { Request, Response } from "express"
import { prisma } from "../../../../config/prisma/connection.prisma"
import { CustomError } from "../../../../domain/errors/custom.error"
import { CreateStudentDto } from "../../../../domain/dtos/createStudent.dto"
import { UpdateStudentDto } from "../../../../domain/dtos/updateStudent.dto"

export class StudentControllers {
    constructor(){}

    public getStudents = async (req: Request, res: Response) => {
        try {
            const students = await prisma.student.findMany()
            res.json(students)
        } catch (error) {
            res.status(500).json({message: "Internal server error"})
        }
    }

    public getStudentById = async (req: Request, res: Response) => {
        const id = +req.params.id
        const student = await prisma.student.findUnique({
            where: {
                id: id
            }
        })
        try{
            if(!student) CustomError.notFound("Estudiante no encontrado")
            res.json(student)
        } catch(error) {
            if(error instanceof CustomError){
                res.status(error.statusCode).json({message: error.message})
            } else{
                res.status(500).json({message: "internal server error"})
            }
        }
    }

    public createStudent = async (req: Request, res: Response) => {
        const [error, createStudentDto] = CreateStudentDto.create(req.body)
        const studentEmailExists = !!(await prisma.student.findUnique({
            where:{
                email: createStudentDto?.email
            }
        }))
        try {
            if(error) throw CustomError.badRequest(error)
            if(studentEmailExists) throw CustomError.conflict("Email already exists")

            const newStudent = await prisma.student.create({
                data: createStudentDto!
            })
            res.json(newStudent)
        } catch (error){
            if(error instanceof CustomError){
                res.status(error.statusCode).json({message: error.message})
            } else{
                res.status(500).json({message: "internal server error"})
            }
        }
    }

    public deleteStudent = async (req: Request, res: Response) => {
        const id = +req.params.id
        const studentExists = !!(await prisma.student.findUnique({
            where: {
                id: id
            }
        }))
        try {
            if(!studentExists) throw CustomError.notFound(`student with id: ${id} not exists`)
            const studentDeleted = await prisma.student.delete({
                where: {
                    id: id
                }
            })
            res.json(studentDeleted)
        } catch (error){
            if(error instanceof CustomError){
                    res.status(error.statusCode).json({message: error.message})
            } else{
                res.status(500).json({message: "internal server error"})
            }
        }
    }
    public updateStudent = async (req: Request, res: Response) => {
        const [error, updateStudentDto] = UpdateStudentDto.create(req.body)
        const id = +req.params.id
        
        const otherStudents = await prisma.student.findMany({
            where: {
                NOT: {
                    id: id
                }
            }
        })
        const studentExists = !!(await prisma.student.findUnique({
            where: {
                id: id
            }
        }))
        const studentEmailExists = otherStudents.some(student => student.email === updateStudentDto?.email)
        console.log(studentEmailExists)
        try {
            if(error) CustomError.badRequest('datos invalidos');
            if(!studentExists) throw CustomError.notFound(`student with id: ${id} not exists`);
            if(studentEmailExists) throw CustomError.conflict("Email already exists")
            const studentUpdated = await prisma.student.update({
                where: {
                    id: id
                },
                data: updateStudentDto!
            });
            res.json(studentUpdated)
        } catch (error){
            if(error instanceof CustomError){
                    res.status(error.statusCode).json({message: error.message})
            } else{
                res.status(500).json({message: "internal server error"})
            }
        }
    }
}