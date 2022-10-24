import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/users.controller";
import checkEditPermissionMiddleware from "../middleware/checkEditPermission.middleware";
import checkIfAdmMiddleware from "../middleware/isAdmUpdate.middleware";
import emailAlreadyRegisteredMiddleware from "../middleware/emailAlreadyRegisterd.middleware";
import validateTokenMiddleware from "../middleware/validateToken.meddleware";
import isAdmDeleteMiddleware from "../middleware/isAdmDelete.middleware";
import checkIsActiveMiddleware from "../middleware/checkIsActive.middleware";


const usersRoutes = Router();

usersRoutes.post('', emailAlreadyRegisteredMiddleware, createUserController);
usersRoutes.get('', validateTokenMiddleware, checkIfAdmMiddleware, listUsersController);
usersRoutes.patch('/:id', validateTokenMiddleware, checkIfAdmMiddleware, checkEditPermissionMiddleware, updateUserController);
usersRoutes.delete('/:id', validateTokenMiddleware, isAdmDeleteMiddleware, deleteUserController)


export default usersRoutes;