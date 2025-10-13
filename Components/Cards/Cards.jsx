import Image from 'next/image';
import { useState } from 'react';
import { FaShapes } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa6';

export default function Cards() {
  const [cardsList] = useState([
    {
      id: 1,
      image: '/img/c1.png',
      alt: 'cart1',
    },
    {
      id: 2,
      image: '/img/c2.jpg',
      alt: 'cart2',
    },
    {
      id: 3,
      image: '/img/c3.png',
      alt: 'cart3',
    },
    {
      id: 4,
      image: '/img/c4.jpg',
      alt: 'cart4',
    },
  ]);
  return (
    <section className='mt-12 w-full'>
      <div className='gap-x-6 grid grid-cols-12 px-[6%] w-full'>
        {cardsList.map((items) => (
          <div
            className='col-span-3 bg-[#1E1B33] p-5 rounded-[12px]'
            key={items.id}
          >
            <figure className='flex justify-center w-full'>
              <Image
                src={items.image}
                alt={items.alt}
                width={264}
                height={232}
                className='rounded-[8px] h-[232px]'
              />
            </figure>
            <div className='flex justify-between items-center mt-3 px-5 w-full text-white'>
              <span className='text-2xl'>Science Jobs</span>
              <span className='flex justify-center items-center gap-x-2'>
                <FaRegHeart color='#D71D61' />
                24
              </span>
            </div>
            <div className='flex justify-between items-center mt-3 px-5 w-full text-white'>
              <span className='flex justify-center items-center gap-x-1.5'>
                <FaShapes color='#03DB80' />
                From 17.59 Flow
              </span>
              <span className='flex justify-center items-center gap-x-2'>
                <FaRegHeart color='#D71D61' />
                24
              </span>
            </div>
            <div className='flex justify-between items-center mt-6 px-4 w-full text-white'>
              <button className='bg-[#1E1B33] px-7 py-3 border border-[#E7E7E766] rounded-[8px] w-full text-white cursor-pointer'>
                Live now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
