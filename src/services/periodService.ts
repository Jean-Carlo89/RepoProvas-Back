import { createConnection, getConnection, getRepository } from "typeorm";
import Period from '../entities/Period'


interface addPeriod{
    name:number
  }
  
  
  export async function addPeriod (period:addPeriod) {
  
    await getRepository(Period).insert(period)
  }
    
  
  export async function getPeriods () {
    
    const periods = await getRepository(Period).find({
      order:{
        id:"ASC"
      }, relations:["disciplines"]})
    //relations:["disciplines"]
    return periods
  }
  