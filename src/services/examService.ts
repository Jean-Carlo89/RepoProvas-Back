
import { getRepository } from 'typeorm';
import Category from '../entities/Category';
import Discipline from '../entities/Discipline'
import Professor from '../entities/Professor';
import Exams from '../entities/Exam'

interface addExam{
    discipline:Discipline,
    category:Category,
    professor:Professor,
    year:string,
    urlLink:string

    
}


export async function addExam(newExam:addExam) {
    await getRepository(Exams).insert(newExam)
}


export async function getExams() {
  return await getRepository(Exams).find({relations:["discipline", "professor" , "category"]})
}