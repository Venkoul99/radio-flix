import { NewsComment } from "./NewsComment";

export interface CreateNews {
  title: string;
  text: string;
  imageUrl: string;
  highlighted: boolean;
  writtenBy: string;
  publishedOn: string;
  username: string;
  comments: NewsComment[];
}