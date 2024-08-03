import { Box, Textarea, Button, Stack, Avatar, Text } from '@mantine/core';

export default function CommentSection() {
  return (
    <Box mt="md" p="md" style={{ border: '1px solid #eaeaea' }}>
      <Stack gap="sm" mb="md">
        <Text size="sm">Comments</Text>
        <Box>
          <Stack gap="xs">
            <Avatar size={24} src="https://randomuser.me/api/portraits/women/2.jpg" />
            <Text size="sm">Jane Smith</Text>
            <Text size="sm" color="dimmed">
              Amazing adventure! The fjords are breathtaking.
            </Text>
          </Stack>
        </Box>
        <Box>
          <Stack gap="xs">
            <Avatar size={24} src="https://randomuser.me/api/portraits/men/2.jpg" />
            <Text size="sm">Mike Johnson</Text>
            <Text size="sm" color="dimmed">
              Looking forward to this trip. Thanks for the info!
            </Text>
          </Stack>
        </Box>
      </Stack>

      <Textarea placeholder="Add a comment..." minRows={3} radius="md" mb="md" />
      <Button color="blue" fullWidth radius="md">
        Submit Comment
      </Button>
    </Box>
  );
}
