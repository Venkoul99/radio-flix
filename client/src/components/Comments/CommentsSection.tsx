import { Box, Textarea, TextInput, Button, Stack, Text } from '@mantine/core';
import commentsApi from '@/api/comments-api';
import { useParams } from 'react-router-dom';
import { useGetOneNews } from '@/hooks/useNews';
import { useState } from 'react';
import { NewsComment } from '@/types/NewsComment';
import Comment from './Comment';

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

    try {
      const newComment = await commentsApi.create(newsId, username, comment);
      setNews((prevNews) => {
        if (!prevNews) return prevNews;

        return {
          ...prevNews,
          comments: {
            ...(prevNews.comments || {}),
            [newComment._id]: newComment,
          },
        };
      });
      setComment('');
      setUsername('');
    } catch (error) {
      console.error('Failed to submit comment:', error);
    }
  };

  return (
    <Box
      mt="md"
      p="md"
      style={{ border: '1px solid #eaeaea', maxWidth: '600px', margin: '0 auto' }}
    >
      <Stack gap="sm" mb="md">
        <Text size="lg">Comments</Text>
        {news?.comments && Object.values(news.comments).length > 0 ? (
          Object.values(news.comments).map((comment: NewsComment) => (
            <Comment key={comment._id} comment={comment} />
          ))
        ) : (
          <Text size="sm" color="dimmed">
            No comments yet.
          </Text>
        )}
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
