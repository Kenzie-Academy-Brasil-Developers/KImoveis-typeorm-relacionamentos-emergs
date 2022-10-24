import { Router } from 'express'
import { createCategoryController, listAllCategoriseController, listPropertiesCategoryController } from '../controllers/categories.controller'
import checkIfAdmMiddleware from '../middleware/isAdmUpdate.middleware'
import validateTokenMiddleware from '../middleware/validateToken.meddleware'

const categoriesRoutes = Router()

categoriesRoutes.post('', validateTokenMiddleware, checkIfAdmMiddleware, createCategoryController)
categoriesRoutes.get('', listAllCategoriseController)
categoriesRoutes.get('/:id/properties', listPropertiesCategoryController)


export default categoriesRoutes