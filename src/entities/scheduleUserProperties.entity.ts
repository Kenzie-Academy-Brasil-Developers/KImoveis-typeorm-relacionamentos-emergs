import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Properties } from "./properties.entity";
import { User } from "./user.entity";

@Entity('schedule_user_properties')
export class Schedule{
  @PrimaryGeneratedColumn('uuid')
  id:string

  @Column()
  date: string

  @Column()
  hour: string

  @ManyToOne(()=> Properties)
  property: string

  @ManyToOne(()=> User)
  user: string
}