import { useState } from 'react';
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
import { useRegister } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { RegisterCredentials } from '@/types/RegisterCredentials';

const initialValues: RegisterCredentials = { email: '', password: '', confirmPassword: '' };

export default function Register() {
  const [formValues, setFormValues] = useState<RegisterCredentials>(initialValues);
  const [errors, setErrors] = useState<FormError>({});
  const register = useRegister();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const validate = () => {
    const newErrors: FormError = {};
    if (!/^\S+@\S+$/.test(formValues.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (formValues.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formValues.confirmPassword !== formValues.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const registerHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await register(formValues.email, formValues.password);
      navigate('/');
    } catch (err) {
      const error = err as Error;
      setErrors({ general: error.message });
    }
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Join Us Today!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Create your account to enjoy exclusive benefits and stay updated with the latest news and offers.
        <Anchor size="sm" component="button">
          Create account
        </Anchor>
      </Text>

      <form onSubmit={registerHandler}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        {errors.general && <Text color="red" mb="md">{errors.general}</Text>}
          <TextInput
            label="Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="you@mantine.dev"
            required
            error={errors.email}
          />
          <PasswordInput
            label="Password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            placeholder="Your password"
            required
            mt="md"
            error={errors.password}
          />
          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
            mt="md"
            error={errors.confirmPassword}
          />
          <Button fullWidth mt="xl" type="submit">
            Sign up
          </Button>
        </Paper>
      </form>
    </Container>
  );
}
