import { Request, Response } from "express";
import createCategoryService from "../services/categories/createCategory.service";
import listAllCategoriesService from "../services/categories/listAllCategories.service";
import listPropertiesCategoryService from "../services/categories/listPropertiesCategory.service";

const createCategoryController = async (req:Request, res:Response)=>{
  const { name } = req.body
  const category = await createCategoryService(name)
  res.status(201).json(category)
}

const listAllCategoriseController = async (req:Request, res:Response)=>{
  const category = await listAllCategoriesService()
  res.status(200).json(category) 
}

const listPropertiesCategoryController = async(req:Request, res:Response)=>{
  const id:string = req.params.id
  const properties = await listPropertiesCategoryService(id)
  res.status(200).json(properties)
}

export {createCategoryController, listPropertiesCategoryController, listAllCategoriseController}