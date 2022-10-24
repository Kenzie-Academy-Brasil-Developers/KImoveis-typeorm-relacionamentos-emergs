import AppDataSource from '../../data-source'
import { Properties } from '../../entities/properties.entity'
import { IPropertyRequest } from '../../interfaces/properties'
import { v4 as uuid } from 'uuid'
import { AppError } from '../../errors/appError'
import { Categories } from '../../entities/categories.entity'
import createAddressService from '../address/createAddress.service'
import { Addresses } from '../../entities/addresses.entity'

const createPropertyService = async(data:IPropertyRequest):Promise<Properties>=>{
  const propertyRepo = AppDataSource.getRepository(Properties)
  const categoryRepo = AppDataSource.getRepository(Categories)
  const addressRepo = AppDataSource.getRepository(Addresses)

  const allAddress = await addressRepo.find()
  const addressExists = allAddress.find(address=>address.zipCode === data.address.zipCode)

  if(addressExists){
    throw new AppError('Endereço ja existe',400);
  }

  const address = await createAddressService(data.address)
  const findCategory = await categoryRepo.find()
  
  const categoryExists = findCategory.find(category=>category.id === data.categoryId)
  if(!categoryExists){
    throw new AppError('Categoria não encontrada',404);
  }

  if(data.address.state.length > 2){
    throw new AppError('A sigla do estado não pode ter mais que dois digitos');
  }

  if(data.address.zipCode.length > 8){
    throw new AppError('Código Postal Invalido');
  }

  const property = new Properties
  property.value = data.value
  property.size = data.size
  property.address = address
  property.category = categoryExists
  property.id = uuid()
  property.sold = false
  property.createdAt = new Date()
  property.updatedAt = new Date()

  propertyRepo.create(property)
  await propertyRepo.save(property)
  console.log(property);
  
  return property
  
}

export default createPropertyService