import AppDataSource from '../../data-source'
import { Schedule } from '../../entities/scheduleUserProperties.entity'
import { AppError } from '../../errors/appError'

const listSchedulesPropertiesService = async(id:any)=>{
  const schedulesRepo = AppDataSource.getRepository(Schedule)
  const data = await schedulesRepo.find()
  const scheduleExist = data.find(schedule => schedule.id === id)
  
  if(scheduleExist){
    throw new AppError('Visita ja agendada',401);
  }

  return data
}

export default listSchedulesPropertiesService