import Cards from '@/Components/Cards/Cards';
import Cards2 from '@/Components/Cards/Cards2';
import Cards3 from '@/Components/Cards/Cards3';
import Counts from '@/Components/Counts/Counts';
import Footer from '@/Components/Footer/Footer';
import Header from '@/Components/Header/Header';
import Motto from '@/Components/Motto/Motto';
import Motto2 from '@/Components/Motto2/Motto2';

export default function Home() {
  return (
    <main className='w-full overflow-x-hidden'>
      <Header />
      <Motto />
      <Counts />
      <Cards />
      <Cards2 />
      <Cards3 />
      <Motto2 />
      <Footer />
    </main>
  );
}
