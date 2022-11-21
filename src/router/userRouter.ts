import router from "express";
import userController from "../controller/user.Controller";
export const userRouter = router();
userRouter.post('/register',userController.register)
userRouter.post('/login',userController.login)