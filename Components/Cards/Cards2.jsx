import Image from 'next/image';
import { useState } from 'react';
import { MdOutlineCheckCircle } from 'react-icons/md';

export default function Cards2() {
  const [cardsList] = useState([
    { id: 1, image: '/img/c5.jpg', alt: 'cart1' },
    { id: 2, image: '/img/c6.jpg', alt: 'cart2' },
    { id: 3, image: '/img/c7.png', alt: 'cart3' },
    { id: 4, image: '/img/c8.png', alt: 'cart4' },
  ]);

  return (
    <section className='mt-24 w-full'>
      <div className='relative flex justify-center items-center mb-10 text-center'>
        <h2 className='bg-clip-text bg-gradient-to-r from-[#06045B] to-[#E01E5A] font-bold text-[105px] text-transparent leading-[1.1] select-none'>
          NFTs
        </h2>
        <p className='absolute font-medium text-[35px] text-white md:text-[44px]'>
          Trending NFTS
        </p>
      </div>

      <div className='gap-y-8 md:gap-x-6 xl:gap-y-0 grid grid-cols-12 px-[6%] w-full'>
        {cardsList.map((items) => (
          <div
            key={items.id}
            className={`col-span-12 md:col-span-6 xl:col-span-3 p-[1px] rounded-[12px] ${
              items.id === 3
                ? 'bg-gradient-to-r from-[#0500FA] to-[#E01E5A]'
                : 'bg-transparent'
            }`}
          >
            <div className='bg-[#1E1B33] p-5 border border-[#E7EBEE66] rounded-[12px] h-full'>
              <figure className='flex justify-center w-full'>
                <Image
                  src={items.image}
                  alt={items.alt}
                  width={264}
                  height={232}
                  className='rounded-[8px] w-[464px] xl:w-[264px] h-[232px] object-cover'
                />
              </figure>

              <div className='flex flex-col justify-between mt-3 px-5 w-full text-white'>
                <h6 className='flex items-center gap-x-2 mb-1.5 text-[14px]'>
                  By Ya Chin-Ho
                  <MdOutlineCheckCircle color='yellow' />
                </h6>
                <span className='font-semibold text-2xl'>Science Jobs</span>
              </div>

              <div className='flex justify-center w-full'>
                <div className='flex flex-col justify-between items-center mt-6 px-4 py-3 border border-[#E7E7E766] rounded-[8px] w-11/12 text-white'>
                  <div className='flex justify-between items-center mb-2 px-1 w-full'>
                    <span className='text-[#C0C0C0] text-[12px]'>From</span>
                    <span className='text-[#C0C0C0] text-[12px]'>
                      Highest bid
                    </span>
                  </div>
                  <div className='flex justify-between items-center px-1 w-full'>
                    <span className='text-[#fff] text-[14px]'>
                      Not for sale
                    </span>
                    <span className='text-[#fff] text-[14px]'>2.835 ETH</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-16 mb-7 w-full'>
        <div className='relative bg-[#E7E7E73D] rounded-full w-2/5 h-[2px]'>
          <span className='top-0 left-0 absolute bg-gradient-to-r from-[#0500FA] to-[#E01E5A] rounded-full w-[220px] h-[2px] -translate-x-1/2'></span>
        </div>
      </div>
    </section>
  );
}
