import AppDataSource from '../../data-source'
import { Properties } from '../../entities/properties.entity'

const listAllPropertiesService = async()=>{
  const repo = AppDataSource.getRepository(Properties)
  const data = await repo.find({
    relations: {
      category:true
    }
  })
  return data
}

export default listAllPropertiesService