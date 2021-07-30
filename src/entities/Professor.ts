import {Entity,PrimaryGeneratedColumn,Column, ManyToOne, ManyToMany, JoinTable} from "typeorm"
import Discipline from "./Discipline"

@Entity("professors")
export default class Professor{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @ManyToMany(()=>Discipline,{
        cascade: true
    })
    @JoinTable()
    discplines: Discipline[]



}