import AppDataSource from '../../data-source'
import { Schedule } from '../../entities/scheduleUserProperties.entity'
import { IScheduleRequest } from '../../interfaces/schedules'
import { v4 as uuid } from 'uuid'
import { AppError } from '../../errors/appError'
import { Properties } from '../../entities/properties.entity'
import { User } from '../../entities/user.entity'

const scheduleVisitService = async ({userId, propertyId, date, hour}:IScheduleRequest):Promise<Schedule>=>{
  //pega o usurio pelo id
  const repoUser = AppDataSource.getRepository(User)
  const user = await repoUser.findOneBy({id:userId})
  if(!user){
    throw new AppError('Usuario não encontrado');
  }

  //pega a propriedade pelo id
  const repoProperty = AppDataSource.getRepository(Properties)
  const allProperties = await repoProperty.find()
  const property = allProperties.find(property=>property.id === propertyId)
  if(!property){
    throw new AppError('Propriedade não encontrada',404);
  }
  

  const newDate = new Date(date)
  const hours = parseInt(hour.split(':')[0])
  const min = parseInt(hour.split(':')[1])

  if (newDate.getDay() === 6 || newDate.getDay() === 7) {
    throw new AppError("Invalid date", 400);
  }

  if(hours < 8 || hours >= 18 && min >= 0){
    throw new AppError('Horario não permitido');
    
  }
  
  const repoSchedule = AppDataSource.getRepository(Schedule)
  

  const schedule = repoSchedule.create({
    date:date,
    hour:hour,
    user:user,
    properties:property
  })

  const schedulesHour = await repoSchedule.findOneBy({
    hour: schedule.hour,
    date: schedule.date,
  });

  if(schedulesHour){
    throw new AppError('Horario indisponivel');
  }

  await repoSchedule.save(schedule)
  
  return schedule
}

export default scheduleVisitService

