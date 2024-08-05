import { Link } from 'react-router-dom';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { TruncateText } from '@/tools/TruncateText';

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
        <Image
          src={news.imageUrl}
          height={350}
          alt={news.title}
          fit="cover"
          style={{ objectPosition: 'top' }}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{news.title}</Text>
        {news.highlighted ? (
          <Badge color="pink">highlighted</Badge>
        ) : (
          <Badge style={{ visibility: 'hidden' }}>hidden</Badge>
        )}
      </Group>

      <Text size="sm" c="dimmed">
        {TruncateText(news.text)}
      </Text>

      <Button
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        component={Link}
        to={`/news/${news._id}/details`}
      >
        Show More Details
      </Button>
    </Card>
  );
}
