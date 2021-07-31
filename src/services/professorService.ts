import { createConnection, getConnection, getRepository} from "typeorm";

import Professor from "../entities/Professor";
import Discipline from "../entities/Discipline"

interface addProfessor{
    name:string,
    disciplines:Discipline[]
  }

  
export async function addProfessor (professor:addProfessor) {
    //let connection = await createConnection();

    let newDiscipline =new Discipline();
        newDiscipline.name ="Bears";
    await getRepository(Discipline).save(newDiscipline);

    let newProfessor = new Professor()
    newProfessor.name="Eduardo leTroll"
    newProfessor.disciplines=[newDiscipline]
    await getRepository(Professor).save(newProfessor)

}
export async function getProfessors (professor:addProfessor) {
  
    const professors =await getRepository(Professor).find()
    return professors
}
  