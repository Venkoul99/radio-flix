import LatestNews from '@/components/Home/LatestNews';
import Header from '../components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import Welcome from '@/components/Home/Welcome';

export function HomePage() {
  return (
    <>
      <Header />
      <Welcome />
      <LatestNews />
      <Footer />
    </>
  );
}
