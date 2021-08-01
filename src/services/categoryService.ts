import {getRepository} from 'typeorm'
import Category from '../entities/Category'

interface addCategory{
    name:string
}


export async function addCategory(newCategory:addCategory){
    await getRepository(Category).insert(newCategory)
}


export async function getCategories(){
   return await getRepository(Category).find({ relations:["exams"]})
}