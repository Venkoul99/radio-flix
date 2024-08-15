import { useContext, useEffect, useState } from 'react';
import { Container, Paper, Title, Text, Group, Button } from '@mantine/core';
import { AuthContext } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { getCurrent } from '@/api/users-api';
import { useGetCurrentUser } from '@/hooks/useUsers';

export default function UserDetails() {
  const { _id, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState<{
    email?: string;
    firstName?: string;
    lastName?: string;
    username?: string;
  } | null>(null);

  const [user] = useGetCurrentUser(_id);

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  return (
    <Container size={420} my={40}>
      <Title ta="center">User Details</Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        {userDetails ? (
          <>
            <Text size="lg">User Information</Text>
            <Group align="column" mt="md">
              <Text>
                <strong>Email:</strong> {userDetails.email}
              </Text>
              <Text>
                <strong>First Name:</strong> {userDetails.firstName}
              </Text>
              <Text>
                <strong>Last Name:</strong> {userDetails.lastName}
              </Text>
              <Text>
                <strong>Username:</strong> {userDetails.username}
              </Text>
            </Group>
          </>
        ) : (
          <Text>Loading...</Text>
        )}
        <Button fullWidth mt="xl" onClick={() => navigate('/')}>
          Go to Home
        </Button>
      </Paper>
    </Container>
  );
}
