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
