import { useGetOneNews } from '@/hooks/useNews';
import { Card, Image, Text, Badge, Group, Divider, Avatar, Button } from '@mantine/core';
import { IconCalendar } from '@tabler/icons-react';
import { useParams } from 'react-router-dom';

export default function DetailedNews() {
  const { newsId } = useParams<{ newsId: string }>();
  const [news] = useGetOneNews(newsId || '');

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{
        width: 'fit-content',
        maxWidth: '50%',
        margin: '0 auto',
      }}
    >
      <Card.Section>
        <Image
          src={news.imageUrl}
          alt={news.title}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            objectPosition: 'top',
          }}
        />
      </Card.Section>

      <Group mt="md" mb="xs">
        <Text>{news.text}</Text>
        {news.highlighted ? <Badge color="pink">HIGHLIGHTED</Badge> : null}
      </Group>

      <Divider my="md" />

      <Group gap="xs" mb="md">
        <IconCalendar size={16} />
        <Text size="sm" color="dimmed">
          {news.publishedOn}
        </Text>
      </Group>

      <Group gap="xs" mb="md">
        <Text size="sm" color="dimmed">
          {news.writtenBy}
        </Text>
      </Group>

      <Divider my="md" />

      <Group
        gap="sm"
        mt="md"
        style={{
          display: 'flex',
          justifyContent: 'right',
          gap: '10px',
        }}
      >
        <Button color="blue">Edit</Button>
        <Button color="red">Delete</Button>
      </Group>
    </Card>
  );
}
