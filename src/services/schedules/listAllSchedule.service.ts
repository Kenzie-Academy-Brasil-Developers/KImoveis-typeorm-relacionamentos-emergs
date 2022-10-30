import AppDataSource from '../../data-source'
import { Properties } from '../../entities/properties.entity'
import { Schedule } from '../../entities/scheduleUserProperties.entity'
import { AppError } from '../../errors/appError'

const listSchedulesPropertiesService = async(id:string)=>{
  //checar se o id de prperties existe
  const propertiesRepo = AppDataSource.getRepository(Properties)
  const properties = await propertiesRepo.findOne({
    where:{
      id
    },
    relations:{
      schedules:true
    }
    
  })
  if(!properties){
    throw new AppError('Id da propriedade inválido',404);
  }
  
  const schedulesRepo = AppDataSource.getRepository(Schedule)
  const schedules = await schedulesRepo.find({
    where:{
      properties:properties
    }
  })
  
  return properties
}

export default listSchedulesPropertiesService