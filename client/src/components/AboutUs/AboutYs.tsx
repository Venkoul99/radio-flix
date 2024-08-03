import { Container, Group, Title, Text, SimpleGrid, Card, Image, ThemeIcon } from '@mantine/core';
import { IconUsers, IconBuildingSkyscraper, IconChartBar } from '@tabler/icons-react';
import classes from './AboutUs.module.css';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO',
    image: 'https://via.placeholder.com/150',
    description: 'John is the CEO of the company with over 20 years of experience in the industry.',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    image: 'https://via.placeholder.com/150',
    description: 'Jane is the CTO, leading the tech team with innovative solutions.',
  },
  {
    name: 'Alex Johnson',
    position: 'COO',
    image: 'https://via.placeholder.com/150',
    description: 'Alex is the COO, ensuring smooth operations across the company.',
  },
];

const values = [
  {
    icon: IconBuildingSkyscraper,
    title: 'Innovation',
    description: 'We constantly strive to innovate and improve our products and services.',
  },
  {
    icon: IconUsers,
    title: 'Teamwork',
    description: 'Collaboration and teamwork are at the core of our success.',
  },
  {
    icon: IconChartBar,
    title: 'Excellence',
    description: 'We are committed to delivering excellent results in everything we do.',
  },
];

export default function AboutUs() {
  return (
    <Container className={classes.aboutUs}>
      <Text component="h1" mt="xl" mb="md">
        About Us
      </Text>
      <Text mb="xl">
        We are a team of dedicated professionals committed to delivering top-notch solutions to our
        clients.
      </Text>

      <SimpleGrid cols={3} spacing="lg">
        {teamMembers.map((member) => (
          <Card key={member.name} shadow="sm">
            <Card.Section>
              <Image src={member.image} height={160} alt={member.name} />
            </Card.Section>
            <Group mt="md" mb="xs">
              <Text>{member.name}</Text>
              <ThemeIcon variant="light">
                <IconUsers />
              </ThemeIcon>
            </Group>
            <Text size="sm" color="dimmed">
              {member.position}
            </Text>
            <Text size="sm" mt="md">
              {member.description}
            </Text>
          </Card>
        ))}
      </SimpleGrid>

      <Text component="h2" mt="xl" mb="md">
        Our Mission
      </Text>
      <Text mb="xl">
        Our mission is to deliver high-quality products that bring value to our clients and make a
        positive impact on the community.
      </Text>

      <Text component="h2" mt="xl" mb="md">
        Our Values
      </Text>
      <SimpleGrid cols={3} spacing="lg">
        {values.map((value) => (
          <Card key={value.title} shadow="sm">
            <ThemeIcon variant="light" size="xl">
              <value.icon />
            </ThemeIcon>
            <Text mt="md">{value.title}</Text>
            <Text size="sm" mt="sm">
              {value.description}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
