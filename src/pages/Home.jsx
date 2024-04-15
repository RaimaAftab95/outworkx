import CallToAction from '../components/home/CallToAction';
import Categories from '../components/home/Categories';
import Hero from '../components/home/hero';
import Spaces from '../components/home/spaces';
import Footer from '../components/shared/Footer';

const Home = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <Spaces />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Home;
