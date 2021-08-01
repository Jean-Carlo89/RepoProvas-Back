import {Entity,PrimaryGeneratedColumn,Column, ManyToOne,OneToMany, ManyToMany, JoinTable} from "typeorm"
import Discipline from "./Discipline"
import Exams from './Exam'


@Entity("professors")
export default class Professor{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @ManyToMany(()=>Discipline,(discipline:Discipline)=>discipline.professors,{
        cascade: true
    })
    @JoinTable()
    disciplines: Discipline[]


    @OneToMany(() => Exams,exams=>exams.professor)
    exams: Exams;


}