import { Link } from 'react-router-dom';

import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

interface NewsItemProps {
  news: {
    _id: string;
    title: string;
    text: string;
    imageUrl: string;
    highlighted: boolean;
  };
}

export default function NewsItem({ news }: NewsItemProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={news.imageUrl} height={160} alt={news.title} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{news.title}</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {news.text}
      </Text>

      <Button
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        component={Link}
        to={`/news/${news._id}/details`}
      >
        Book classic tour now
      </Button>
    </Card>
  );
}
