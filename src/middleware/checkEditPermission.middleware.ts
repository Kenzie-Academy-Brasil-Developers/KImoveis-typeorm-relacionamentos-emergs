import { Request, Response } from "express";
import { AppError } from "../errors/appError";

const checkEditPermissionMiddleware = (req:Request, res:Response, next:Function)=>{

  const user = req.body

  const data = (Object.keys(user));
  if(data.includes('isActive')){
    throw new AppError('Não é permitido editar o Campo isActive',401);
  }
  if(data.includes('isAdm')){
    throw new AppError('Não é permitido editar o Campo isAdm',401);
  }
  if(data.includes('id')){
    throw new AppError('Não é permitido editar o Campo id',401);
  }
  next()
}

export default checkEditPermissionMiddleware