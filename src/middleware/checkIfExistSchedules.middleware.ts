import { NextFunction, Request, Response } from 'express'
import AppDataSource from '../data-source'
import { Schedule } from '../entities/scheduleUserProperties.entity'
import { AppError } from '../errors/appError'

const checkIfExistsSchedulesMiddleware= async (error:Error, req:Request, res:Response, next:NextFunction)=>{
  //const { date, hour, propertyId} = req.body
  console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAA');
  
  const repoSchedules = AppDataSource.getRepository(Schedule)
  const schedules = await repoSchedules.find()
  
  // const schedulesExists = schedules.find(schedule=>
  //   schedule.property.id === propertyId &&
  //   schedule.date === date &&
  //   schedule.hour === hour
  //   )
     
  // if(schedulesExists){
  //  throw new AppError('Visita ja agendada pra essa data');
  // }

  next()
}
export default checkIfExistsSchedulesMiddleware