import {Request,Response} from "express"

import * as periodService from '../services/periodService'


export async function addPeriod (req: Request, res: Response) {
    try {
      console.log(req.body)
  
      
      
       await periodService.addPeriod(req.body);
      
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }
  
  
  export async function getPeriods (req: Request, res: Response) {
    try {
      console.log(req.body)
  
      
      
       const periods = await periodService.getPeriods();
      
    //  res.sendStatus(200);
    res.send(periods)
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }
  
  
  