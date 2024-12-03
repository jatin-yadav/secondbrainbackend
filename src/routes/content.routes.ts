import { Router } from "express";
import { createContent, fetchContent } from "../controllers/content.controller";
import { verifyAuth } from "../middelware/auth.middelware";

const contentRouter = Router();

contentRouter.get("/", verifyAuth, fetchContent);
contentRouter.post("/create", verifyAuth, createContent);

export { contentRouter };
