import { NewsComment } from "./NewsComment";

export interface NewsItem {
  _id: string;
  _ownerId: string;
  title: string;
  text: string;
  imageUrl: string;
  highlighted: boolean;
  writtenBy: string;
  publishedOn: string;
  username: string;
  comments: NewsComment[];
}