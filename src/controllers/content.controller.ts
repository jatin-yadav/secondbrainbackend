import { Request, Response } from "express";
import { CreateContentDto } from "../dtos/CreateContent.dto";
import { Content } from "../db/models";

export const createContent = async (
  req: Request<{}, {}, CreateContentDto>,
  res: Response
) => {
  const contentData = {
    link: req.body.link,
    type: req.body.type,
    title: req.body.title,
    tags: req.body.tags,
    //@ts-ignore
    userId: req.userId,
  };

  const content = await Content.create(contentData);

  res.json({ message: "Content created successfully", content });
};

export const fetchContent = async (
  req: Request<{}, {}, CreateContentDto>,
  res: Response
) => {
  const content = await Content.find();

  res.json({ message: "Content fetched successfully", content });
};
