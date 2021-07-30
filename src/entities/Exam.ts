import {Entity,PrimaryGeneratedColumn,Column, OneToMany, ManyToOne, OneToOne,JoinColumn} from 'typeorm'
import Category from './Category'
import  Discipline from './Discipline'
import Professor from './Professor'
@Entity("exams")
 export default class Exams{
     @PrimaryGeneratedColumn()
     id:number
     
     @ManyToOne(()=>Discipline,disciplines=>disciplines.id)
     discipline:number

     @ManyToOne(()=>Category,categories=>categories.id)
     category:number

     @OneToOne(() => Professor)
     @JoinColumn()
     professor: Professor;

     @Column()
     year:string

 }