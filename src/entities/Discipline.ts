import {Entity,PrimaryGeneratedColumn,Column, OneToMany,ManyToMany,JoinTable} from 'typeorm'
import Exam from './Exam'
import Professor from './Professor'

@Entity("disciplines")
export default class Discipline{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string


    @ManyToMany(()=>Professor)
    @JoinTable()
    professors: Professor[]

    @OneToMany(()=>Exam,exams=>exams.id)
    exams:Exam[]
}