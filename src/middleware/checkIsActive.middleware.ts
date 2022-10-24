import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/appError";

const checkIsActiveMiddleware = async(req:Request, res:Response, next:NextFunction)=>{
  const id = req.params.id
  const userRepository = AppDataSource.getRepository(User)
  const user = await userRepository.findOneBy({id})

  if(!user){
    throw new AppError('User not found',404);
  }
}

export default checkIsActiveMiddleware;