import { NewsItem } from '@/types/NewsItem';
import * as request from './requester';
import { CreateNews } from '@/types/CreateNews';

const BASE_URL = 'http://localhost:3030/jsonstore/news';

export const getAll = async (): Promise<NewsItem[]> => {
  const result = await request.get<Record<string, NewsItem>>(BASE_URL);

  const news = Object.values(result);

  return news;
};

export const getOne = (newsId: string): Promise<NewsItem> => request.get<NewsItem>(`${BASE_URL}/${newsId}`);

export const create = (newsData: Omit<CreateNews, 'id'>): Promise<CreateNews> => request.post<NewsItem>(`${BASE_URL}`, newsData);

const newsApi = {
  getOne,
  getAll,
  create,
};

export default newsApi;
