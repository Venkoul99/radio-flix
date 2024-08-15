import { useEffect, useState } from 'react';
import newsApi from '../api/news-api';
import { NewsItem } from '@/types/NewsItem';
import { CreateNews } from '@/types/CreateNews';

export function useGetAllNews(): [NewsItem[], React.Dispatch<React.SetStateAction<NewsItem[]>>] {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await newsApi.getAll();
        setNews(result);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      }
    })();
  }, []);

  return [news, setNews];
}

export function useGetUserNews(_id: string): [NewsItem[], React.Dispatch<React.SetStateAction<NewsItem[]>>] {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await newsApi.getAll();
        setNews(result.filter((x) => x._ownerId == _id));
      } catch (error) {
        console.error('Failed to fetch news:', error);
      }
    })();
  }, []);

  return [news, setNews];
}


export function useGetLastThree(): [NewsItem[], React.Dispatch<React.SetStateAction<NewsItem[]>>] {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await newsApi.getLastThree();
        setNews(result);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      }
    })();
  }, []);

  return [news, setNews];
}

export function useGetOneNews(newsId: string) {
  const [news, setNews] = useState<NewsItem | null>(null);;

  useEffect(() => {
    (async () => {
      try {
        const result = await newsApi.getOne(newsId);
        setNews(result);
      } catch (error) {
        console.error('Failed to fetch news:', error);
      }
    })();
  }, [newsId]);

  return [news, setNews] as const;
}

export function useCreateNews() {
  const newsCreateHandler = (newsData: Omit<CreateNews, '_id'>) => newsApi.create(newsData);

  return newsCreateHandler;
}
