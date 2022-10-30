import { Router } from 'express'
import { listSchedulesPropertiesController, scheduleVisitController } from '../controllers/schedules.controller'
import isAdmSchedulesMiddleware from '../middleware/isAdmSchedules.middleware'
import validateTokenMiddleware from '../middleware/validateToken.meddleware'

const schedulesRoutes = Router()

schedulesRoutes.post('', validateTokenMiddleware, scheduleVisitController)
schedulesRoutes.get('/properties/:id', validateTokenMiddleware, isAdmSchedulesMiddleware, listSchedulesPropertiesController)

export default schedulesRoutes