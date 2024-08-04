import { SimpleGrid } from '@mantine/core';
import NewsItem from './NewsItem';
import { useGetAllNews } from '../../hooks/useNews';

export default function News() {
  const [news] = useGetAllNews();
  return (
    <SimpleGrid cols={3} spacing="lg">
      {news.map((item) => (
        <NewsItem key={item._id} news={item} />
      ))}
    </SimpleGrid>
  );
}
