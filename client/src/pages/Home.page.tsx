import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Header from '../components/Header/Header';

export function HomePage() {
  return (
    <>
      <Header />
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
