import { NextFunction, Request, Response } from 'express'
import { AppError } from '../errors/appError';

const isAdmSchedulesMiddleware=(error:Error, req:Request, res:Response, next:NextFunction)=>{
  const { isAdm } = req.user

  if(!isAdm){
    throw new AppError('Unauthorized - Not Adm',403);
  }

  next()
}
export default isAdmSchedulesMiddleware