import { NewsComment } from '@/types/NewsComment';
import { Box, Stack, Avatar, Text } from '@mantine/core';

interface SingleCommentProps {
  comment: NewsComment;
}

export default function Comment({ comment }: SingleCommentProps) {
  return (
    <Box>
      <Stack gap="xs">
        <Avatar size={24} src="https://randomuser.me/api/portraits/women/2.jpg" />
        <Text size="sm">{comment.username}</Text>
        <Text size="sm" color="dimmed">
          {comment.text}
        </Text>
      </Stack>
    </Box>
  );
}
