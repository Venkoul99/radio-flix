import { useEffect, useState } from 'react';
import newsApi from '../api/news-api';
import { NewsItem } from '@/types/NewsItem';

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
