import Cards from '@/Components/Cards/Cards';
import Cards2 from '@/Components/Cards/Cards2';
import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import Motto from '@/Components/Motto/Motto';

export default function Home() {
  return (
    <main className='w-full overflow-x-hidden'>
      <Header />
      <Motto />
      <Cards />
      <Cards2 />
      <Footer />
    </main>
  );
}
