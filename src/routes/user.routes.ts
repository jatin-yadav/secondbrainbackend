import { Request, Response, Router } from "express";
import { createUser } from "../controllers/users.controller";

const usersRouter = Router();

usersRouter.post("/signup", createUser);

export { usersRouter };
