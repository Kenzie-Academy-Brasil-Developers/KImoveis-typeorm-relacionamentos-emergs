import { Request, Response } from "express"
import { AppError } from "../errors/appError";

const isAdmDeleteMiddleware = (req:Request, res:Response, next:Function)=>{
  const isAdm = req.user.isAdm
   
  if(!isAdm){
    throw new AppError('Unauthorized - Not Adm',403);
  }

  next()
}

export default isAdmDeleteMiddleware