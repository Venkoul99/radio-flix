import { Container, Group, Anchor } from '@mantine/core';
import classes from './Footer.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/news', label: 'News' },
  { link: '/contacts', label: 'Contacts' },
  { link: '/about-us', label: 'About us' },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor<'a'> c="dimmed" key={link.label} href={link.link} size="sm">
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
