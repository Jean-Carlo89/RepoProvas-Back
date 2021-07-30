import { Request, Response } from "express";
import { createConnection, getConnection, getRepository } from "typeorm";

import User from "../entities/User";
import Exam from "../entities/Exam"
import Professor from "../entities/Professor";
import Discipline from "../entities/Discipline"


export async function getUsers () {
  const users = await getRepository(User).find({
    //select: ["id", "email"]
  });
  
  return users;
}





interface addProfessor{
  name:string
}

interface addDiscipline{
  name:string
}



export async function addProfessor (professor:addProfessor) {
  
  await getRepository(Professor).insert(professor)
}


export async function addDiscipline (discipline:addDiscipline) {
  
  await getRepository(Discipline).insert(discipline)
}

// export async function postNewExam () {
//   const users = await  getConnection().createQueryBuilder().insert().into(Exam).values({
//     discipline:,
//     category:

//   })
  
//   return users;
// }
