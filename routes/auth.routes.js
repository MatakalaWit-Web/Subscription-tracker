import { Router } from "express";

const authRouter = Router();    

authRouter.post('/sign-up', (req, res) => res.send(  {message: "sign-up endpoint" }));
authRouter.post('/sign-in', (req, res) => res.send( {message: "sign-in endpoint" }));
authRouter.post('/sign-out', (req, res) => res.send( {message: "sign-out endpoint" }));

export default authRouter;