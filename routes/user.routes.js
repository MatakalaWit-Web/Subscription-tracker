import { Router } from "express";
import { getUsersProfile, getUser } from "../controllers/user.controller.js";
import { authorize } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get('/',getUsersProfile);
userRouter.get('/:id',authorize, getUser);
userRouter.post('/', (req, res) => { res.send({title: 'create new users'}) });
userRouter.put('/:id', (req, res) => { res.send( {title: 'update user by ID'}) });
userRouter.delete('/:id', (req, res) => { res.send( {title: 'delete user by ID'}) });

export default userRouter;