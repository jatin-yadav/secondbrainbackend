import e, { NextFunction, Request, Response } from "express";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { User } from "../db/models";
import jwt from "jsonwebtoken";

export const verifyAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"];
  const decoded = jwt.verify(token as string, `${process.env.JWT_SECRET}`);
  //@ts-ignore
  const existinguser = await User.findById(decoded.id as string);

  if (existinguser) {
    //@ts-ignore
    req.userId = existinguser._id;
    next();
  } else {
    res.status(403).json({ message: "You are not logged In" });
  }
};
