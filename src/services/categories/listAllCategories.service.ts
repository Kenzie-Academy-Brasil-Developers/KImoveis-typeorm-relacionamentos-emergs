import AppDataSource from '../../data-source'
import { Categories } from '../../entities/categories.entity'

const listAllCategoriesService = ():Promise<Categories[]>=>{
  const repo = AppDataSource.getRepository(Categories)
  const categories = repo.find()
  return categories
}

export default listAllCategoriesService