import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest } from "../../interfaces/users";
import { v4 as uuid } from "uuid"
import { hash } from "bcrypt"

const createUserService = async ({name,email,password,isAdm}:IUserRequest) =>{
    const userRepository = AppDataSource.getRepository(User) 
   
    const user = new User()
    user.id = uuid()
    user.name = name
    user.email = email
    user.password = await hash(password , 10)
    user.isAdm = isAdm

    userRepository.create(user)
    await userRepository.save(user)

    return {...user, password:undefined}
  
}

export default createUserService;