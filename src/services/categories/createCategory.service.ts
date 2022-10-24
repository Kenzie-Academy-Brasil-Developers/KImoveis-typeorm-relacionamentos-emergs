import AppDataSource from '../../data-source'
import { Categories } from '../../entities/categories.entity'
import { v4 as uuid } from "uuid"
import { AppError } from '../../errors/appError'

const createCategoryService = async (name:string):Promise<Categories>=>{
  const repo = AppDataSource.getRepository(Categories)
  const nameCategory = await repo.findOneBy({name})

  if(nameCategory){
    throw new AppError('Categoria ja existe');
  }

  const category = new Categories()
  category.name = name,
  category.id = uuid()

  repo.create(category)
  await repo.save(category)
  
  return category
}

export default createCategoryService