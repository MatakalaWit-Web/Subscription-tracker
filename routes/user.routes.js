import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => { res.send( {title: 'GET all users'}) });
userRouter.get('/:id', (req, res) => { res.send( {title: 'GET user by ID'}) });
userRouter.post('/', (req, res) => { res.send({title: 'create new users'}) });
userRouter.put('/:id', (req, res) => { res.send( {title: 'update user by ID'}) });
userRouter.delete('/:id', (req, res) => { res.send( {title: 'delete user by ID'}) });

export default userRouter;