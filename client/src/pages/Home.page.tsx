import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import Header from '../components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

export function HomePage() {
  return (
    <>
      <Header />
      <Welcome />
      <ColorSchemeToggle />
      <Footer />
    </>
  );
}
