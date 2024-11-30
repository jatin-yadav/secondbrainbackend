import { Router } from "express";
import { createContent } from "../controllers/content.controller";
import { verifyAuth } from "../middelware/auth.middelware";

const contentRouter = Router();

contentRouter.post("/create", verifyAuth, createContent);

export { contentRouter };
