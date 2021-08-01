import {Entity,PrimaryGeneratedColumn,Column, OneToMany, ManyToOne, OneToOne,JoinColumn} from 'typeorm'
import Category from './Category'
import  Discipline from './Discipline'
import Professor from './Professor'
@Entity("exams")
 export default class Exams{
     @PrimaryGeneratedColumn()
     id:number
     
     @ManyToOne(()=>Discipline,discipline=>discipline.id)
     discipline:Discipline

     @ManyToOne(()=>Category,category=>category.id)
     category:Category

     @ManyToOne(() => Professor)
     @JoinColumn()
     professor: Professor;

     @Column()
     year:string

     @Column()
     urlLink:string

 }