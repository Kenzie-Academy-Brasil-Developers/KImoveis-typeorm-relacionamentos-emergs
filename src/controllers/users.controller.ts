import { Request, Response } from "express";
import { IUserUpdate } from "../interfaces/users";
import createUserService from "../services/users/createUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import listUsersService from "../services/users/listUsers.service";
import updateUserService from "../services/users/updateUser.service";
import { instanceToPlain } from "class-transformer"

const createUserController = async (req:Request, res:Response)=>{
  const newUser = req.body 
  const user = await createUserService(newUser)
  return res.status(201).json(instanceToPlain(user))
}

const listUsersController = async (req:Request, res:Response)=>{
  const users = await listUsersService()
  return res.status(200).json(users)
}

const updateUserController = async(req:Request, res:Response)=>{
  const id:string = req.params.id
  const user = req.body
  const userEdit = await updateUserService(id,user)
  console.log(userEdit);
  
  return res.status(200).json(instanceToPlain(userEdit))
}

const deleteUserController =async (req:Request, res:Response)=> {
  const id = req.params.id
  const user = await deleteUserService(id)
  return res.status(204).send()
}



export {createUserController,listUsersController,updateUserController, deleteUserController}