import { SimpleGrid } from '@mantine/core';
import NewsItem from './NewsItem';

export default function News() {
  return (
    <SimpleGrid cols={3} spacing="lg">
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </SimpleGrid>
  );
}
