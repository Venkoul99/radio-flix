import { NewsComment } from "./NewsComment";

export interface CreateNews {
  _id: string;
  _ownerId: string;
  title: string;
  text: string;
  imageUrl: string;
  highlighted: boolean;
  writtenBy: string;
  publishedOn: string;
  comments: NewsComment[];
}