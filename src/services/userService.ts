import { Request, Response } from "express";
import { createConnection, getConnection, getRepository } from "typeorm";

import User from "../entities/User";
import Exam from "../entities/Exam"



export async function getUsers () {
  const users = await getRepository(User).find({
    //select: ["id", "email"]
  });
  
  return users;
}






