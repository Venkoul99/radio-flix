import { Box, Textarea, TextInput, Button, Stack, Text } from '@mantine/core';
import Comment from './Comment';
import commentsApi from '@/api/comments-api';
import { useParams } from 'react-router-dom';
import { useGetOneNews } from '@/hooks/useNews';
import { useState } from 'react';

export default function CommentsSection() {
  const { newsId } = useParams<{ newsId: string }>();
  const [news, setNews] = useGetOneNews(newsId || '');
  const [comment, setComment] = useState('');
  const [username, setUsername] = useState('');

  const commentSubmitHandler = async (е: React.FormEvent<HTMLFormElement>) => {
    е.preventDefault();

    if (!newsId) {
      return;
    }

    if (!username || username.trim() === '' || !comment || comment.trim() === '') {
      return;
    }

    const newComment = await commentsApi.create(newsId, username, comment);
  };

  return (
    <Box mt="md" p="md" style={{ border: '1px solid #eaeaea' }}>
      <Stack gap="sm" mb="md">
        <Text size="lg">Comments</Text>

        <Comment />
      </Stack>

      <form onSubmit={commentSubmitHandler}>
        <TextInput
          placeholder="Enter your username..."
          radius="md"
          mb="md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Textarea
          placeholder="Add a comment..."
          minRows={3}
          radius="md"
          mb="md"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button type="submit" color="blue" fullWidth radius="md">
          Submit Comment
        </Button>
      </form>
    </Box>
  );
}
