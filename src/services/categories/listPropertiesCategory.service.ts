import AppDataSource from '../../data-source'
import { Categories } from '../../entities/categories.entity'
import { Properties } from '../../entities/properties.entity';
import { AppError } from '../../errors/appError';

const listPropertiesCategoryService = async(categoryId:string)=>{

  const repoCategory = AppDataSource.getRepository(Categories)
  const category = await repoCategory.find()
  const categoryExists = category.find(category=> category.id === categoryId)

  if(!categoryExists){
    throw new AppError('Id da categoria inválido',404);
  }
  
  //return categoryExists

  const repoProperties = AppDataSource.getRepository(Properties)
  const properties = await repoProperties.find({
    where:{
      category:{
        id:categoryId
      }
    }
  })
  // const properties:Object[] = []
  // properties.push(categoryExists)
  // properties.push(property)
  // console.log(properties);
  const {id,name} = categoryExists
  return {id, name ,properties}


  
  // const findProperty = property.filter(prop=>prop.category.id === id)

  // if(!findProperty){
  //   throw new AppError("categoria não encontrada",404);
  // }
  
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