import { Request, Response } from "express"
import scheduleVisitService from "../services/schedules/scheduleVisit.service"
import listSchedulesPropertiesService from "../services/schedules/listAllSchedule.service"

const scheduleVisitController = async (req:Request, res:Response)=>{
  const data = req.body
  const {id} = req.user
  const schedule = await scheduleVisitService(data, id)
  res.status(200).json(schedule)
}

const listSchedulesPropertiesController = async (req:Request, res:Response)=>{
  const id = req.params
  const schedule = await listSchedulesPropertiesService(id)
  res.status(200).json(schedule)
}

export {scheduleVisitController, listSchedulesPropertiesController}