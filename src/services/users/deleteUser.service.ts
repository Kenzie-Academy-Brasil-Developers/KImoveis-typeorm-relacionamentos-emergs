import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const deleteUserService = async(id:string)=>{
  const userRepository = AppDataSource.getRepository(User)
  const user = await userRepository.findOneBy({id})

  if(!user){
    throw new AppError("User Not Found",404);
  }

  if(user.isActive === false){
    throw new AppError('User already isActive = false');
  }

  user.isActive = false

  await userRepository.save(user)

  // await userRepository.update(id,{
  //   isActive:false
  // })
}

export default deleteUserService;