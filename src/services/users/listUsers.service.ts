import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const listUsersService = async()=>{
    const userRepository = AppDataSource.getRepository(User)
    const users = userRepository.find()

    if(!users){
      throw new AppError('Erro na busca de usuarios');
      
    }

    return users
}

export default listUsersService;