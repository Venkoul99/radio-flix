import { Box, Stack, Avatar, Text } from '@mantine/core';

export default function Comment() {
  return (
    <Box>
      <Stack gap="xs">
        <Avatar size={24} src="https://randomuser.me/api/portraits/women/2.jpg" />
        <Text size="sm">Jane Smith</Text>
        <Text size="sm" color="dimmed">
          Amazing adventure! The fjords are breathtaking.
        </Text>
      </Stack>
    </Box>
  );
}
