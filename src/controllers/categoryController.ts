import {Request,Response} from 'express'
import * as categoryService from '../services/categoryService'


export async function addCategory(req:Request,res:Response){

    try{
        await categoryService.addCategory(req.body)

        res.sendStatus(200)
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
}

export async function getCategories(req:Request,res:Response){

    try{
        const categories = await categoryService.getCategories()

        res.send(categories)
    }catch(e){
        console.log(e)
        res.sendStatus(500)
    }
}