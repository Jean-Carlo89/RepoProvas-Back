import {Entity,PrimaryGeneratedColumn,Column, OneToMany, ManyToOne, OneToOne,JoinColumn} from 'typeorm'
import Category from './Category'
import  Discipline from './Discipline'
import Professor from './Professor'
import Period from './Period'

@Entity("exams")
 export default class Exams{
     @PrimaryGeneratedColumn()
     id:number
     
     @ManyToOne(()=>Discipline,discipline=>discipline.exams)
     discipline:Discipline

     @ManyToOne(()=>Category,category=>category.exams)
     category:Category

     @ManyToOne(() => Professor,professor=>professor.exams)
     @JoinColumn()
     professor: Professor;

     @Column()
     year:string

     @Column()
     urlLink:string

     @ManyToOne(() => Period, period=>period.exams)
     period:Period

 }