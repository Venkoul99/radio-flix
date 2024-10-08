import { SimpleGrid, Title } from '@mantine/core';
import NewsItem from './NewsItem';
import { useGetAllNews } from '../../hooks/useNews';

export default function News() {
  const [news] = useGetAllNews();
  return (
    <>
      <Title order={2}>All News</Title>
      <SimpleGrid cols={3} spacing="lg">
        {news.length > 0 ? (
          news.map((item) => <NewsItem key={item._id} news={item} />)
        ) : (
          <h3>No news yet</h3>
        )}
      </SimpleGrid>
    </>
  );
}
