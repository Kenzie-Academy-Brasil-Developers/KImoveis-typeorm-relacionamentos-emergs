import { Request, Response } from "express"
import createPropertyService from "../services/properties/createProperty.service"
import listAllPropertiesService from "../services/properties/listAllProperties.service"

const createPropertyController = async(req:Request, res:Response)=>{
  const property = req.body
  const properties = await createPropertyService(property)
  res.status(201).json(properties)
}

const listAllPropertiesController = async(req:Request, res:Response)=>{
  const property = await listAllPropertiesService()
  res.status(200).json(property)
}

export {createPropertyController, listAllPropertiesController}