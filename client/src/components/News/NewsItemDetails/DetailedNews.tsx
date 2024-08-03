import { Card, Image, Text, Badge, Group, Divider, Avatar } from '@mantine/core';
import { IconCalendar, IconUser, IconMessageCircle } from '@tabler/icons-react';

export default function DetailedNews() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group mt="md" mb="xs">
        <Text>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" color="dimmed" mb="md">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway.
      </Text>

      <Divider my="md" />

      <Group gap="xs" mb="md">
        <IconCalendar size={16} />
        <Text size="sm" color="dimmed">
          Published on August 1, 2024
        </Text>
      </Group>

      <Group gap="xs" mb="md">
        <Avatar size={24} src="https://randomuser.me/api/portraits/men/1.jpg" />
        <Text size="sm" color="dimmed">
          Posted by John Doe
        </Text>
      </Group>

      <Divider my="md" />
    </Card>
  );
}
