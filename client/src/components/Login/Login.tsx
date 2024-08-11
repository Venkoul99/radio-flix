import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import classes from './Login.module.css';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { useForm } from '@/hooks/useForm';
import { useLogin } from '@/hooks/useAuth';

import { LoginCredentials } from '@/types/LoginCredentials';
import { LoginFormError } from '@/types/LoginFormErrors';

const initialValues: LoginCredentials = { email: '', password: '' };

export default function Login() {
  const login = useLogin();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<LoginFormError>({});

  const loginHandler = async ({ email, password }: LoginCredentials) => {
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      const error = err as Error;
      setErrors({ general: error.message });
    }
  };

  const { values, changeHandler, submitHandler } = useForm({
    initialValues,
    submitCallback: loginHandler,
  });

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{' '}
        <Anchor size="sm" href="/register">
          Create account
        </Anchor>
      </Text>
      <form onSubmit={submitHandler}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          {errors.general && (
            <Text color="red" mb="md">
              {errors.general}
            </Text>
          )}
          <TextInput
            label="Email"
            placeholder="you@gmail.com"
            id="email"
            name="email"
            value={values.email}
            onChange={changeHandler}
            required
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            id="password"
            name="password"
            value={values.password}
            onChange={changeHandler}
            required
            mt="md"
          />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" type="submit">
            Sign in
          </Button>
        </Paper>
      </form>
    </Container>
  );
}
