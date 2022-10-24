import { Request, Response } from "express"
import { AppError } from "../errors/appError";

const checkIfAdmMiddleware = (req:Request, res:Response, next:Function)=>{
  const {isAdm, id} = req.user
  const idEdit = req.params.id
  
  if(idEdit){
    if(!isAdm && idEdit !== id){
      throw new AppError('Not Permission - Not Adm',401);
    }
  }

  if(!isAdm){
    throw new AppError('Unauthorized - Not Adm',403);
  }

  next()
}

export default checkIfAdmMiddleware