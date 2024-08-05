import { SimpleGrid, Text } from '@mantine/core';
import NewsItem from '../News/NewsItem';
import { useGetAllNews } from '@/hooks/useNews';

export default function LatestNews() {
  const [news] = useGetAllNews();

  const latestHighlightedNews = news.filter((item) => item.highlighted).slice(0, 3);
  return (
    <>
      <Text size="xl" fw={700} mb="md">
        HIGHLIGHTS
      </Text>
      <SimpleGrid cols={3} spacing="lg">
        {latestHighlightedNews.length > 0 ? (
          latestHighlightedNews.map((item) => <NewsItem key={item._id} news={item} />)
        ) : (
          <h3>No news yet</h3>
        )}
      </SimpleGrid>
    </>
  );
}
