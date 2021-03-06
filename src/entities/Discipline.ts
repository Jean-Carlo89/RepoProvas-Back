import {Entity,PrimaryGeneratedColumn,Column,ManyToOne, OneToMany,ManyToMany,JoinTable} from 'typeorm'
import Exam from './Exam'
import Professor from './Professor'
import Period from '../entities/Period'

@Entity("disciplines")
export default class  Discipline{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @OneToMany(()=>Exam,exams=>exams.discipline)
    exams:Exam[]

    @ManyToOne(()=>Period,periods=>periods.disciplines)
    period:Period


    @ManyToMany(()=>Professor,(professor:Professor)=>professor.disciplines)
    professors: Professor[]

    
 }