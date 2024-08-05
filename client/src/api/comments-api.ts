import { Comment } from "@/types/Comment";
import requester from "./requester";

const BASE_URL = "http://localhost:3030/jsonstore/games/";

const buildUrl = (newsId: string) => `${BASE_URL}/${newsId}/comments`;

const create = async (newsId: string, username: string, text: string) => {
  const response = await requester.post(buildUrl(newsId), { username, text });

  return response as Comment;
}

const getAll = async (newsId: string): Promise<Comment[]> => {
  const result = await requester.get(buildUrl(newsId)) as { [key: string]: Comment };

  const comments: Comment[] = Object.values(result);

  return comments;
};


const commentsApi = {
  create,
  getAll,
};

export default commentsApi;
