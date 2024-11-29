import { Request, Response } from "express";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { User } from "../db/models";

export const createUser = async (
  req: Request<{}, {}, CreateUserDto>,
  res: Response
) => {
  console.log(req.body);

  const user = await User.create(req.body);

  res.json({ name: req.body.username, user: user });
};
