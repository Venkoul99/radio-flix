import { Container, Title, Text, Button, Center, Stack } from '@mantine/core';

export default function Welcome() {
  return (
    <Container>
      <Center style={{ height: '20vh' }}>
        <Stack align="center" gap="md">
          <Title order={1}>Welcome to Radio Flix</Title>
          <Text size="lg" c="dimmed">
            Your ultimate destination for non-stop music and entertainment. Tune in, relax, and
            enjoy the best tracks curated just for you.
          </Text>
        </Stack>
      </Center>
    </Container>
  );
}
