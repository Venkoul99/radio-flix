import { useGetOneNews } from '@/hooks/useNews';
import { Card, Image, Text, Badge, Group, Divider, Avatar, Button } from '@mantine/core';
import { IconCalendar } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '@/contexts/AuthContext';
import { useContext } from 'react';
import newsApi from '@/api/news-api';

export default function DetailedNews() {
  const navigate = useNavigate();
  const { newsId } = useParams<{ newsId: string }>();
  const [news] = useGetOneNews(newsId || '');
  const { _id } = useContext(AuthContext);

  if (!news) {
    return <div>Loading...</div>;
  }

  const newsDeleteHandler = async () => {
    try {
      if (window.confirm('Are you sure you want to delete this news item?')) {
        await newsApi.remove(news._id);
        navigate('/');
      }
    } catch (err) {
      const error = err as Error;
      console.log(error.message);
    }
  };

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
          {dayjs(+news.publishedOn).format('YYYY-MM-DD HH:mm')}
        </Text>
      </Group>

      <Group gap="xs" mb="md">
        <Text size="sm" color="dimmed">
          {news.writtenBy}
        </Text>
      </Group>

      <Divider my="md" />

      {news._ownerId == _id && (
        <Group
          gap="sm"
          mt="md"
          style={{
            display: 'flex',
            justifyContent: 'right',
            gap: '10px',
          }}
        >
          <Button component={Link} to={`/news/${newsId}/edit`}>
            Edit
          </Button>
          <Button color="red" onClick={newsDeleteHandler}>
            Delete
          </Button>
        </Group>
      )}
    </Card>
  );
}
