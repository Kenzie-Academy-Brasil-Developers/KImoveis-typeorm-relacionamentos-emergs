import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUser, IUserRequest, IUserUpdate } from "../../interfaces/users";
import { hash } from "bcrypt";
import { AppError } from "../../errors/appError";

const updateUserService = async(id:string, user:IUserUpdate) =>{
  const {name, email, password} = user
  const userRepository = AppDataSource.getRepository(User);
  const userEdited = await userRepository.findOneBy({id})

  if(!userEdited){   
    throw new AppError("Usuário não encontrado",404)
  }

  await userRepository.update(id, {
  name: name ? name : userEdited.name,
  email: email ? email : userEdited.email,
  password: password ? await hash(password,10) : userEdited.password
  })
  
  const userEd = await userRepository.findOneBy({id})

  const userReturn = {id:userEd?.id, name:userEd?.name, isAdm:userEd?.isAdm, isActive:userEd?.isActive, createdAt:userEd?.createdAt, email:userEd?.email, updatedAt:userEd?.updatedAt, schedule:userEd?.schedule}

  return userReturn
}

export default updateUserService;