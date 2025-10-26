import Image from 'next/image';
import { useState } from 'react';
import { FaRegHeart, FaShapes } from 'react-icons/fa';

export default function Cards3() {
  const [cardsList] = useState([
    { id: 1, image: '/img/c9.jpg', alt: 'cart1' },
    { id: 2, image: '/img/c10.jpg', alt: 'cart2' },
    { id: 3, image: '/img/c11.jpg', alt: 'cart3' },
    { id: 4, image: '/img/c12.jpg', alt: 'cart4' },
  ]);

  const filters = ['All NFTs', 'Art', 'Games', 'Sports', 'Trading Cards'];

  return (
    <section className='mt-24 w-full text-white'>
      <div className='relative flex flex-col justify-center items-center mb-16 text-center'>
        <h2 className='bg-clip-text bg-gradient-to-r from-[#06045B] to-[#E01E5A] font-bold text-[105px] text-transparent leading-[0.9] select-none'>
          NFTs
        </h2>
        <p className='absolute font-medium text-[36px] text-white md:text-[42px]'>
          Browse popular NFTs
        </p>
      </div>

      <div className='flex flex-wrap justify-center items-center gap-5 mb-14'>
        {filters.map((item, index) => (
          <button
            key={index}
            className={`px-8 py-2  text-[16px]  transition-all duration-300 cursor-pointer ${
              index === 0
                ? 'bg-gradient-to-r from-[#0500FA] to-[#E01E5A] border-transparent rounded-[8px]'
                : 'bg-transparent'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className='gap-y-8 md:gap-x-6 xl:gap-y-0 grid grid-cols-12 px-[6%] w-full'>
        {cardsList.map((items, index) => (
          <div
            key={items.id}
            className={`col-span-12 md:col-span-6 xl:col-span-3 p-[1px] rounded-[12px] ${
              index === 2
                ? 'bg-gradient-to-r from-[#0500FA] to-[#E01E5A]'
                : 'border border-[#E7EBEE66]'
            }`}
          >
            <div
              className={`bg-[#1E1B33] rounded-[10px] p-4 ${
                index === 2 ? 'h-full' : ''
              }`}
            >
              <figure className='flex justify-center w-full'>
                <Image
                  src={items.image}
                  alt={items.alt}
                  width={264}
                  height={232}
                  className='rounded-[8px] w-[464px] xl:w-[264px] h-[232px] object-cover'
                />
              </figure>

              <div className='flex justify-between items-center mt-3 px-5 w-full text-white'>
                <span className='flex justify-between items-center gap-x-1.5 text-[#CFCFCF]'>
                  <FaShapes color='#03DB80' />
                  From 17.59 Flow
                </span>
                <span className='flex justify-center items-center gap-x-1.5 text-white'>
                  <FaRegHeart color='#D71D61' />
                  32
                </span>
              </div>

              <div className='flex justify-center mt-7 w-full'>
                <span className='bg-[#E7E7E73D] w-11/12 h-[1px]'></span>
              </div>

              <div className='flex justify-between items-center mt-6 px-4 w-full text-white'>
                <button className='bg-[#1E1B33] hover:bg-[#2B2550] px-10 py-2 border border-[#E7E7E766] rounded-[8px] text-white transition-all duration-300 cursor-pointer'>
                  Live now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
