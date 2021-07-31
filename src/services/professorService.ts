import { createConnection, getConnection, getRepository, getTreeRepository} from "typeorm";

import Professor from "../entities/Professor";
import Discipline from "../entities/Discipline"

interface addProfessor{
    name:string,
    disciplines:Discipline[]
  }

  
export async function addProfessor (professor:addProfessor) {
    
 //  await getRepository(Professor).insert(professor)
   
//  let newDiscipline =new Discipline();
//         newDiscipline.name ="Bears2";
//     await getRepository(Discipline).save(newDiscipline);

//     let newProfessor = new Professor()
//     newProfessor.name="Eduardo leTroll2"
//     newProfessor.disciplines=[newDiscipline]
//     await getRepository(Professor).save(newProfessor)

    //const discipline = await getRepository(Discipline).findOne({where:{id:professor.disciplines.id}})

    

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




}
export async function getProfessors (professor:addProfessor) {
  
    const professors =await getRepository(Professor).find({relations:["disciplines"]})
    return professors
}
  