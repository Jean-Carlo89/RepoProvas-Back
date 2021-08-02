import {Entity,PrimaryGeneratedColumn,Column, OneToMany} from 'typeorm'
import Exams from './Exam'
import Discipline from './Discipline'

@Entity("period")
export default class Period{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @OneToMany(()=>Discipline,discipline=>discipline.period)
    disciplines: Discipline[]


    @OneToMany(()=>Exams,exams=>exams.period)
    exams: Exams[]
}