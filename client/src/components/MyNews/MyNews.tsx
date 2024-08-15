import { SimpleGrid } from '@mantine/core';
import NewsItem from '../News/NewsItem';
import { useGetUserNews } from '../../hooks/useNews';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';

export default function MyNews() {
  const { _id } = useContext(AuthContext);
  const [news] = useGetUserNews(_id);
  return (
    <SimpleGrid cols={3} spacing="lg">
      {news.length > 0 ? (
        news.map((item) => <NewsItem key={item._id} news={item} />)
      ) : (
        <h3>No news yet</h3>
      )}
    </SimpleGrid>
  );
}
