import { useGetOneNews } from '@/hooks/useNews';
import { Card, Image, Text, Badge, Group, Divider, Avatar } from '@mantine/core';
import { IconCalendar } from '@tabler/icons-react';
import { useParams } from 'react-router-dom';

export default function DetailedNews() {
  const { newsId } = useParams<{ newsId: string }>();
  const [news] = useGetOneNews(newsId || '');
  console.log(news);
  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={news.imageUrl}
          alt={news.title}
          style={{
            width: '50%',
            height: 'auto',
            objectFit: 'cover',
            objectPosition: 'top',
          }}
        />
      </Card.Section>

      {news.highlighted ? (
        <Group mt="md" mb="xs">
          <Text>{news.text}</Text>
          <Badge color="pink">HIGHLIGHTED</Badge>
        </Group>
      ) : null}

      <Divider my="md" />

      <Group gap="xs" mb="md">
        <IconCalendar size={16} />
        <Text size="sm" color="dimmed">
          {news.publishedOn}
        </Text>
      </Group>

      <Group gap="xs" mb="md">
        <Avatar size={24} src="https://randomuser.me/api/portraits/men/1.jpg" />
        <Text size="sm" color="dimmed">
          {news.writtenBy}
        </Text>
      </Group>

      <Divider my="md" />
    </Card>
  );
}
