import AppDataSource from '../../data-source'
import { Schedule } from '../../entities/scheduleUserProperties.entity'
import { IScheduleRequest } from '../../interfaces/schedules'
import { v4 as uuid } from 'uuid'
import { AppError } from '../../errors/appError'

const scheduleVisitService = async ({date, hour, propertyId}:IScheduleRequest,id:string):Promise<Schedule>=>{
  const repo = AppDataSource.getRepository(Schedule)
  const schedulesExists = await repo.findOneBy({id})
  
  if(!schedulesExists){
    throw new AppError('Visita ja agendada',400);
    
  }
  // const propertyExists = data.find(property=>property.id === propertyId)
  // console.log(propertyExists);
  
  // if(!propertyExists){
  //   throw new AppError('Propriedade não cadastrada',404);
  // }

  const schedule = new Schedule()
  schedule.date = date
  schedule.hour = hour
  schedule.property = propertyId
  schedule.user = id
  schedule.id = uuid()

  repo.create(schedule)
  await repo.save(schedule)
  //console.log(schedule);
  
  return schedule
  
}

export default scheduleVisitService