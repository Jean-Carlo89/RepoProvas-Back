import {Request,Response} from "express"


import * as disciplineService from '../services/disciplineService'


export async function addDiscipline (req: Request, res: Response) {
    try {
      console.log(req.body)
      // const discipline ={
      //   name:req.body.name,
      //   periodId:Number(req.body.periodId)
      // }
  
      //console.log(discipline)
      
  
     // return
      
       await disciplineService.addDiscipline(req.body);
      
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }
  

export async function getDisciplines (req: Request, res: Response) {
  try {
    console.log(req.body)
    
    const disciplines = await disciplineService.getDisciplines();
    
    res.send(disciplines)
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
