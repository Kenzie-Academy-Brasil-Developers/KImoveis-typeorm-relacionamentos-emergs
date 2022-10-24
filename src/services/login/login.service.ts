import { IUserLogin } from "../../interfaces/users";
import AppDataSource from "../../data-source"
import { User} from "../../entities/user.entity"
import { compare } from "bcrypt"
import jwt from "jsonwebtoken"
import "dotenv/config"
import { AppError } from "../../errors/appError";

const loginService = async ({email, password}:IUserLogin)=>{

  const userRepository = AppDataSource.getRepository(User)
  const user = await userRepository.findOneBy({
      email: email
  })

  if(!user){
      throw new AppError('Dados Invalidos',403)
  }

  const passwordMatch = await compare(password, user.password)

  if(!passwordMatch){
      throw new AppError('Invalid user or password',403)
  }

  const token = jwt.sign(
    {
      email:user.email,
      isAdm: user.isAdm,
    },
    String(process.env.SECRET_KEY),
    {
      expiresIn: '24h',
      subject: user.id
    }
  )
  return token
}

export default loginService;