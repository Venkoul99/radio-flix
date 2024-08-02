import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from '@mantine/core';
import classes from './Register.module.css';

export default function Register() {
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Join Us Today!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Create your account to enjoy exclusive benefits and stay updated with the latest news and
        offers.
        <Anchor size="sm" component="button">
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <PasswordInput label="Confirm Passowrd" placeholder="Confirm Passowrd" required mt="md" />
        <Button fullWidth mt="xl">
          Sign up
        </Button>
      </Paper>
    </Container>
  );
}
