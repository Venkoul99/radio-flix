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

interface ExtendedRegisterCredentials extends RegisterCredentials {
  fullName: string;
  username: string;
}

interface FormError {
  email?: string;
  password?: string;
  confirmPassword?: string;
  fullName?: string;
  username?: string;
  general?: string;
}

const initialValues: ExtendedRegisterCredentials = {
  email: '',
  password: '',
  confirmPassword: '',
  fullName: '',
  username: '',
};

export default function Register() {
  const [formValues, setFormValues] = useState<ExtendedRegisterCredentials>(initialValues);
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
    if (!formValues.fullName || formValues.fullName.split(' ').length !== 2) {
      newErrors.fullName = 'Full Name must include first and last name';
    }
    if (!formValues.username || formValues.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const fullNameArray = formValues.fullName.split(' ');
  const firstName = fullNameArray[0];
  const lastName = fullNameArray[1];

  const registerHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await register(
        formValues.email,
        formValues.password,
        firstName,
        lastName,
        formValues.username
      );
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
        Create your account to enjoy exclusive benefits and stay updated with the latest news and
        offers.
        <Anchor size="sm" component="button">
          Create account
        </Anchor>
      </Text>

      <form onSubmit={registerHandler}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          {errors.general && (
            <Text color="red" mb="md">
              {errors.general}
            </Text>
          )}
          <TextInput
            label="Full Name"
            name="fullName"
            value={formValues.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            required
            error={errors.fullName}
          />
          <TextInput
            label="Username"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            placeholder="johndoe"
            required
            error={errors.username}
          />
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
