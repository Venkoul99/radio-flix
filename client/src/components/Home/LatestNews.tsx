import { SimpleGrid, Text } from '@mantine/core';
import NewsItem from '../News/NewsItem';

export default function LatestNews() {
  return (
    <>
      <Text size="xl" fw={700} mb="md">
        HIGHLIGHTS
      </Text>
      <SimpleGrid cols={3} spacing="lg"></SimpleGrid>
    </>
  );
}
