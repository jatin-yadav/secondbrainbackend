import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      userId?: string; // or `number` if your userId is a number
    }
  }
}
