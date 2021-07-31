import {Request,Response} from "express"

import * as professorService from '../services/professorService'

export async function addProfessor (req: Request, res: Response) {
  try {
    console.log(req.body)

    
     await professorService.addProfessor(req.body);
    
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}


export async function getProfessors (req: Request, res: Response) {
    try {
      console.log(req.body)
  
      

       const professors = await professorService.getProfessors(req.body);
      
     // res.sendStatus(200);
     res.send(professors)
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }