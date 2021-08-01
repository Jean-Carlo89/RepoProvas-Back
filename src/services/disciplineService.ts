import { createConnection, getConnection, getRepository } from "typeorm";


import Discipline from "../entities/Discipline"
import Period from '../entities/Period'


interface addDiscipline{
    name:string,
    period:Period
  }
  
  
  
  
  
  export async function addDiscipline (discipline:addDiscipline) {
    
    await getRepository(Discipline).insert(discipline)
  }
  

  export async function getDisciplines () {
    return  await getRepository(Discipline).find({relations:["period", "professors","exams", "exams.professor"]})
   
  }


  export async function getDisciplineById(id:number):Promise<Discipline> {
    return  await getRepository(Discipline).findOne({relations:["exams","exams.professor","exams.category"], where:{id}})
   
  }
  
  
  
  