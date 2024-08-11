import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import { useDisclosure } from '@mantine/hooks';
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from '@tabler/icons-react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';

export default function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Box pb={60}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <a href="/" className={classes.link}>
            RadioFlix
          </a>

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/" className={classes.link}>
              Home
            </a>

            <a href="/news" className={classes.link}>
              News
            </a>

            <a href="/contacts" className={classes.link}>
              Contacts
            </a>
            <a href="/about-us" className={classes.link}>
              About us
            </a>
          </Group>
          {isAuthenticated ? (
            <Group visibleFrom="sm">
              <Button variant="default" component={Link} to={'/create-news'}>
                Create New
              </Button>
              <Button component={Link} to={'/logout'}>
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

          <a href="/" className={classes.link}>
            Home
          </a>

          <a href="/news" className={classes.link}>
            News
          </a>

          <a href="/contacts" className={classes.link}>
            Contacts
          </a>

          <a href="/about-us" className={classes.link}>
            About us
          </a>

          <Divider my="sm" />

          {isAuthenticated ? (
            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default" component={Link} to={'/create-news'}>
                Create New
              </Button>
              <Button component={Link} to={'/logout'}>
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
