import { Box, Textarea, Button, Stack, Avatar, Text } from '@mantine/core';
import Comment from './Comment';

export default function CommentsSection() {
  return (
    <Box mt="md" p="md" style={{ border: '1px solid #eaeaea' }}>
      <Stack gap="sm" mb="md">
        <Text size="lg">Comments</Text>

        <Comment />
      </Stack>

      <Textarea placeholder="Add a comment..." minRows={3} radius="md" mb="md" />
      <Button color="blue" fullWidth radius="md">
        Submit Comment
      </Button>
    </Box>
  );
}
