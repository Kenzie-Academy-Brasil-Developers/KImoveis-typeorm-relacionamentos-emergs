import { Request, Response } from "express"
import scheduleVisitService from "../services/schedules/scheduleVisit.service"
import listSchedulesPropertiesService from "../services/schedules/listAllSchedule.service"
import { IScheduleRequest } from "../interfaces/schedules"

const scheduleVisitController = async (req:Request, res:Response)=>{
  const data:IScheduleRequest = {
    userId:req.user.id, 
    propertyId:req.body.propertyId, 
    date:req.body.date, 
    hour:req.body.hour
  }
  const schedule = await scheduleVisitService(data)
  
  res.status(201).json({message:'Criado com sucesso', schedule})
}

const listSchedulesPropertiesController = async (req:Request, res:Response)=>{
  const id = req.params.id
  const schedules = await listSchedulesPropertiesService(id)
  console.log(schedules);
  
  res.status(200).json(schedules)
}

export {scheduleVisitController, listSchedulesPropertiesController}