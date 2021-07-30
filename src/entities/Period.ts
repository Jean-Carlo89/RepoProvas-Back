import {Entity,PrimaryGeneratedColumn,Column, OneToMany} from 'typeorm'

import Discipline from './Disciplines'

@Entity("period")
export default class Period{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    type:string

    @OneToMany(()=>Discipline,disciplines=>disciplines.id)
    disciplineId:number
}