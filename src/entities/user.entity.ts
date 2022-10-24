import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm"
import { Schedule } from "./scheduleUserProperties.entity"
import { Exclude } from "class-transformer"

@Entity("users")

export class User{
  @PrimaryColumn('uuid',{nullable:false})
  id:string

  @Column({type:"varchar",length:200})
  name:string

  @Column({type:"varchar",length:200,unique:true})
  email:string

  @Column()
  @Exclude()
  password:string

  @Column()
  isAdm:boolean

  @Column({default:true})
  isActive: boolean

  @CreateDateColumn()
  createdAt:Date

  @UpdateDateColumn()
  updatedAt:Date

  @OneToMany(()=>Schedule, schedule=>schedule.user)
  schedule: Schedule
  
}