import { Router } from 'express'
import { createPropertyController, listAllPropertiesController } from '../controllers/properties.controller'
import checkIfAdmMiddleware from '../middleware/isAdmUpdate.middleware'
import validateTokenMiddleware from '../middleware/validateToken.meddleware'

const propertiesRoutes = Router()

propertiesRoutes.post('', validateTokenMiddleware, checkIfAdmMiddleware, createPropertyController)
propertiesRoutes.get('', listAllPropertiesController)

export default propertiesRoutes