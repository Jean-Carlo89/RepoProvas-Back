import { Request, Response } from "express";

import * as userService from "../services/userService";

export async function getUsers (req: Request, res: Response) {
  try {
    const users = await userService.getUsers();
    res.send(users);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}








export async function postNewExam (req: Request, res: Response) {
  try {
    console.log(req.body)
    return
     //await userService.postNewExam();
    
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function addProfessor (req: Request, res: Response) {
  try {
    console.log(req.body)

    
    
     await userService.addProfessor(req.body);
    
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function addDiscipline (req: Request, res: Response) {
  try {
    console.log(req.body)
    // const discipline ={
    //   name:req.body.name,
    //   periodId:Number(req.body.periodId)
    // }

    //console.log(discipline)
    

   // return
    
     await userService.addDiscipline(req.body);
    
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}



export async function addPeriod (req: Request, res: Response) {
  try {
    console.log(req.body)

    
    
     await userService.addPeriod(req.body);
    
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}


export async function getPeriods (req: Request, res: Response) {
  try {
    console.log(req.body)

    
    
     const periods = await userService.getPeriods();
    
  //  res.sendStatus(200);
  res.send(periods)
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}


