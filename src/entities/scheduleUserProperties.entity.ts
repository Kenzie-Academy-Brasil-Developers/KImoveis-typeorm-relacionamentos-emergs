import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Properties } from "./properties.entity";
import { User } from "./user.entity";

@Entity('schedule_user_properties')
export class Schedule{
  @PrimaryGeneratedColumn('uuid')
  id:string

  @Column({type:"date"})
  date: Date

  @Column({type:"time"})
  hour: Date

  @ManyToOne(()=> Properties, (property)=>property.schedules)
  properties: Properties

  @ManyToOne(()=> User, {eager:true})
  user: User
}