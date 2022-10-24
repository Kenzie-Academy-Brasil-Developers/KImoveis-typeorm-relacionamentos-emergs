import AppDataSource from '../../data-source'
import { Categories } from '../../entities/categories.entity'
import { Properties } from '../../entities/properties.entity';
import { AppError } from '../../errors/appError';

const listPropertiesCategoryService = async(id:string)=>{

  const repoCategory = AppDataSource.getRepository(Categories)
  const category = await repoCategory.find()
  const properties = category.find(property=> property.id === id)

  if(!properties){
    throw new AppError('Id da categoria inválido',404);
  }

  return properties

  // const repoProperties = AppDataSource.getRepository(Properties)
  // const property = await repoProperties.find({
  //   relations: {
  //       category: true
  //   }
  // })

  // const findProperty = property.filter(prop=>prop.category.id === id)
  
  // console.log(findProperty);
  
  // return findProperty
  // const categoryRepository = AppDataSource.getRepository(Categories);

  // const categoryList = await categoryRepository.find();
  // const properties = categoryList.find((category) => category.id === id);

  // if (!properties) {
  //   throw new AppError("Invalid category id",404);
  // }
  // return properties
}

export default listPropertiesCategoryService