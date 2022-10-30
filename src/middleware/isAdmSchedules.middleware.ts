import { NextFunction, Request, Response } from 'express'
import { AppError } from '../errors/appError';

const isAdmSchedulesMiddleware=(req:Request, res:Response, next:NextFunction)=>{
  const isAdm = req.user.isAdm

  if(!isAdm){
    throw new AppError('Unauthorized - Not Adm',403);
  }

  next()
}
export default isAdmSchedulesMiddleware