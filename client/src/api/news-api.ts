import { NewsItem } from '@/types/NewsItem';
import * as request from './requester';
import { CreateNews } from '@/types/CreateNews';
import { EditNews } from '@/types/EditNews';

const BASE_URL = 'http://localhost:3030/jsonstore/news';

export const getAll = async (): Promise<NewsItem[]> => {
  const result = await request.get<Record<string, NewsItem>>(BASE_URL);

  const news = Object.values(result);

  return news;
};

export const getLastThree = async (): Promise<NewsItem[]> => {
  const result = await request.get<Record<string, NewsItem>>(`${BASE_URL}/?sortBy=_publishedOn%20desc&pageSize=3`);

  const news = Object.values(result);

  return news;
};

export const getOne = (newsId: string): Promise<NewsItem> => request.get<NewsItem>(`${BASE_URL}/${newsId}`);

export const create = (newsData: Omit<CreateNews, '_id'>): Promise<CreateNews> => request.post<NewsItem>(`${BASE_URL}`, newsData);

export const remove = (newsId: string): Promise<NewsItem> => request.del<NewsItem>(`${BASE_URL}/${newsId}`);

export const update = (newsId: string, newsData: Omit<CreateNews, '_id'>): Promise<EditNews> => request.put<EditNews>(`${BASE_URL}/${newsId}`, newsData);

const newsApi = {
  getOne,
  getLastThree,
  getAll,
  create,
  update,
  remove
};

export default newsApi;
