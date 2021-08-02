import { createConnection, getConnection, getRepository, getTreeRepository} from "typeorm";

import Professor from "../entities/Professor";
import Discipline from "../entities/Discipline"

interface addProfessor{
    name:string,
    disciplines:Discipline[]
  }

  
export async function addProfessor (professor:addProfessor) {
    
  let newProfessor = new Professor()
    newProfessor.name=professor.name
    newProfessor.disciplines=[]
    
    
    professor.disciplines.forEach(item => {
        const discipline=item
        newProfessor.disciplines.push(discipline) 
    });

    console.log(newProfessor)


   // newProfessor.disciplines=[discipline]
     await getRepository(Professor).save(newProfessor)

   


//Códido de update abaixo


// const upDateProfessor = await getRepository(Professor).findOne({where:{id:6},relations:["disciplines"]})
//    console.log(upDateProfessor)

   
//         professor.disciplines.forEach(item => {
//              const discipline=item
//              upDateProfessor.disciplines.push(discipline)
//          });

//         // console.log()

   
//          await getRepository(Professor).save(upDateProfessor)
    
   




}
export async function getProfessors (professor:addProfessor) {
  
    const professors =await getRepository(Professor).find({relations:["disciplines"]})
    return professors
}

export async function getProfessorById (id:number):Promise<Professor> {
  
  return await getRepository(Professor).findOne({relations:["exams.discipline","exams","exams.period","exams.category"],where:{id}})
 
}
  