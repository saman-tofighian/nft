import Image from 'next/image';
import { FaEthereum } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

export default function Collections() {
  const collections = [
    {
      id: 1,
      name: 'Bored Ape Yacht Club',
      img: '/img/coll1.jpg',
      eth: '2.9K ETH',
      price: '10,450.00',
      change: '+10.00%',
    },
    {
      id: 2,
      name: 'Chromie Squiggle',
      img: '/img/coll2.jpg',
      eth: '2.7K ETH',
      price: '19,320.00',
      change: '+10.00%',
    },
    {
      id: 3,
      name: 'Worldwide Webb Land',
      img: '/img/coll3.jpg',
      eth: '2.9K ETH',
      price: '10,450.00',
      change: '+10.00%',
    },
    {
      id: 4,
      name: 'Bored Ape Chemistry',
      img: '/img/coll4.png',
      eth: '2.5K ETH',
      price: '10,450.00',
      change: '+10.00%',
    },
    {
      id: 5,
      name: 'Bored Ape Kennel Club',
      img: '/img/coll5.jpg',
      eth: '1.9K ETH',
      price: '10,450.00',
      change: '+10.00%',
    },
    {
      id: 6,
      name: 'Brick-and-Mortar',
      img: '/img/coll6.jpg',
      eth: '1.9K ETH',
      price: '10,450.00',
      change: '+10.00%',
    },
    {
      id: 7,
      name: 'RTFKT CloneX Mintvial',
      img: '/img/coll7.jpg',
      eth: '1.9K ETH',
      price: '10,450.00',
      change: '+10.00%',
    },
    {
      id: 8,
      name: 'Psychedelics Anonymous',
      img: '/img/coll8.jpg',
      eth: '1.4K ETH',
      price: '10,450.00',
      change: '+10.00%',
    },
    {
      id: 9,
      name: 'Free Way to Back Up',
      img: '/img/coll9.jpg',
      eth: '2.5K ETH',
      price: '10,450.00',
      change: '+10.00%',
    },
  ];

  return (
    <section className='mt-24 w-full'>
      <div className='px-[6%] w-full'>
        {/* --- Title Section --- */}
        <div className='relative flex justify-center items-center mb-10 text-center'>
          <h2 className='bg-clip-text bg-gradient-to-r from-[#06045B] to-[#E01E5A] font-bold text-[105px] text-transparent select-none'>
            NFTs
          </h2>
          <p className='absolute font-medium text-[36px] text-white md:text-[44px]'>
            Top collections
          </p>
        </div>

        <div className='flex flex-wrap justify-center gap-4 mb-10'>
          <button className='flex items-center gap-x-2 bg-[#1E1B33] hover:bg-[#2b2550] px-5 py-2 border border-[#2b2550] rounded-lg text-white transition-all cursor-pointer'>
            1 DAY <IoMdArrowDropdown />
          </button>
          <button className='flex items-center gap-x-2 bg-gradient-to-r from-[#0500FA] to-[#E01E5A] px-5 py-2 border border-[#2b2550] rounded-lg text-white cursor-pointer'>
            7 DAYS <IoMdArrowDropdown />
          </button>
          <button className='flex items-center gap-x-2 bg-[#1E1B33] hover:bg-[#2b2550] px-5 py-2 border border-[#2b2550] rounded-lg text-white transition-all cursor-pointer'>
            30 DAYS <IoMdArrowDropdown />
          </button>

          <div className='hidden md:flex items-center gap-x-2 bg-[#1E1B33] ml-auto px-4 py-2 border border-[#2b2550] rounded-lg text-white cursor-pointer'>
            Ethereum <IoMdArrowDropdown />
          </div>
        </div>

        <div className='gap-6 grid grid-cols-12'>
          {collections.map((item) => (
            <div
              key={item.id}
              className='flex justify-between items-center col-span-12 md:col-span-6 xl:col-span-4 bg-[#1E1B33] hover:bg-[#2B2550] p-6 border border-[#ffffff9d] rounded-xl transition-all duration-300'
            >
              <div className='flex items-center gap-x-4'>
                <Image
                  src={item.img}
                  alt={item.name}
                  width={54}
                  height={54}
                  className='rounded-full h-[54px]'
                />
                <div>
                  <h5 className='mb-1 font-medium text-[16px] text-white'>
                    {item.name}
                  </h5>
                  <div className='flex items-center gap-x-2 text-[#00FF85] text-sm'>
                    <FaEthereum /> {item.price}
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-end'>
                <span className='font-semibold text-[#00FF85] text-[14px]'>
                  {item.eth}
                </span>
                <span className='text-white text-sm'>{item.change}</span>
              </div>
            </div>
          ))}
        </div>

        <div className='flex justify-center mt-12'>
          <button className='bg-gradient-to-r from-[#0500FA] to-[#E01E5A] px-8 py-3 rounded-lg font-medium text-white cursor-pointer'>
            See All Collections
          </button>
        </div>
      </div>
    </section>
  );
}
