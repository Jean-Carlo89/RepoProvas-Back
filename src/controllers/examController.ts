import {Request,Response} from 'express'
import * as examService from '../services/examService'


export async function postNewExam(req:Request, res:Response){
    
    try{
        await examService.addExam(req.body)

    res.sendStatus(200)

    }catch(e){
        console.log(e)
        res.send(500)
    }
}

export async function getExams(req:Request, res:Response){
    try{
        const exams =await examService.getExams()

    res.send(exams)

    }catch(e){
        console.log(e)
        res.send(500)
    }
}