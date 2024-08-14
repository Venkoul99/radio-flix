import { NewsComment } from '@/types/NewsComment';
import { Box, Stack, Text } from '@mantine/core';

interface SingleCommentProps {
  comment: NewsComment;
}

export default function Comment({ comment }: SingleCommentProps) {
  return (
    <Box
      p="md"
      mb="sm"
      style={{
        backgroundColor: '#f0f8ff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Stack gap="xs">
        <Text size="sm" style={{ color: '#1e90ff', fontWeight: 500 }}>
          {' '}
          {comment.username}
        </Text>
        <Text size="sm" color="dimmed">
          {comment.text}
        </Text>
      </Stack>
    </Box>
  );
}
