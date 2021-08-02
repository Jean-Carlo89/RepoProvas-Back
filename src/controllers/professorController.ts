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
      //console.log(req.body)
  
      

       const professors = await professorService.getProfessors(req.body);
      
      
     res.send(professors)
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }


  export async function getProfessorById (req: Request, res: Response) {
    try {
      
  
      const {id}=req.params
      console.log('passou onde devia')


       const professors = await professorService.getProfessorById(Number(id));
      
     
     res.send(professors)
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }