import { Request, Response } from "express";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { User } from "../db/models";
import jwt from "jsonwebtoken";

export const createUser = async (
  req: Request<{}, {}, CreateUserDto>,
  res: Response
) => {
  console.log(req.body);

  const user = await User.create(req.body);

  res.json({ name: req.body.username, user: user });
};

export const verifyUser = async (
  req: Request<{}, {}, CreateUserDto>,
  res: Response
) => {
  let user;
  if (req.body.email) {
    user = await User.findOne({ email: req.body.email });
  } else if (req.body.username) {
    user = await User.findOne({ username: req.body.username });
  } else {
    res.json("Username or Email is required!");
  }

  if (user?.password === req.body.password) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      `${process.env.JWT_SECRET}`
    );
    res.json({ token });
  }
};
