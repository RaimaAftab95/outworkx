import Hero from '../components/home/hero';
import Spaces from '../components/home/spaces';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Spaces />
      <Footer />
    </main>
  );
}
