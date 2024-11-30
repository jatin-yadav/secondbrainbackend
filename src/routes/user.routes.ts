import { Router } from "express";
import { createUser, verifyUser } from "../controllers/users.controller";

const usersRouter = Router();

usersRouter.post("/signup", createUser);

usersRouter.post("/signin", verifyUser);

export { usersRouter };
