import {
  Group,
  Button,
  Anchor,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const { isAuthenticated, logout, _id } = useContext(AuthContext);

  return (
    <Box pb={60}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link to="/" className={classes.link}>
            RadioFlix
          </Link>

          <Group h="100%" gap={0} visibleFrom="sm">
            <Anchor component={Link} to="/" className={classes.link}>
              Home
            </Anchor>

            <Anchor component={Link} to="/news" className={classes.link}>
              News
            </Anchor>

            <Anchor component={Link} to="/contacts" className={classes.link}>
              Contacts
            </Anchor>
            <Anchor component={Link} to="/about-us" className={classes.link}>
              About us
            </Anchor>
          </Group>
          {isAuthenticated ? (
            <Group visibleFrom="sm">
              <Button variant="default" component={Link} to={`/news/${_id}/mynews`}>
                My News
              </Button>
              <Button variant="default" component={Link} to={'/create-news'}>
                Create New
              </Button>
              <Button onClick={logout} variant="subtle" color="gray">
                Logout
              </Button>
            </Group>
          ) : (
            <Group visibleFrom="sm">
              <Button variant="default" component={Link} to={'/login'}>
                Log in
              </Button>
              <Button component={Link} to={'/register'}>
                Sign up
              </Button>
            </Group>
          )}

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Anchor component={Link} to="/" className={classes.link}>
            Home
          </Anchor>

          <Anchor component={Link} to="/news" className={classes.link}>
            News
          </Anchor>

          <Anchor component={Link} to="/contacts" className={classes.link}>
            Contacts
          </Anchor>

          <Anchor component={Link} color="indigo" to="/about-us">
            About us
          </Anchor>

          <Divider my="sm" />

          {isAuthenticated ? (
            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default" component={Link} to={`/news/${_id}/mynews`}>
                My News
              </Button>
              <Button variant="default" component={Link} to={'/create-news'}>
                Create New
              </Button>
              <Button onClick={logout} variant="subtle" color="gray">
                Logout
              </Button>
            </Group>
          ) : (
            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default" component={Link} to={'/login'}>
                Log in
              </Button>
              <Button component={Link} to={'/register'}>
                Sign up
              </Button>
            </Group>
          )}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
