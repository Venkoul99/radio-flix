import { NewsComment } from "@/types/NewsComment";
import requester from "./requester";

const BASE_URL = "http://localhost:3030/jsonstore/news";

const buildUrl = (newsId: string) => `${BASE_URL}/${newsId}/comments`;

const create = async (newsId: string, username: string, text: string) => {
  const response = await requester.post(buildUrl(newsId), { username, text });

  return response as NewsComment;
}

const getAll = async (newsId: string): Promise<NewsComment[]> => {
  const result = await requester.get(buildUrl(newsId)) as { [key: string]: NewsComment };

  const comments: NewsComment[] = Object.values(result);

  return comments;
};


const commentsApi = {
  create,
  getAll,
};

export default commentsApi;
