import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaShapes } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa6';

export default function Cards() {
  const [cardsList] = useState([
    { id: 1, image: '/img/c1.png', alt: 'cart1' },
    { id: 2, image: '/img/c2.jpg', alt: 'cart2' },
    { id: 3, image: '/img/c3.png', alt: 'cart3' },
    { id: 4, image: '/img/c4.jpg', alt: 'cart4' },
  ]);

  const avatars = ['/img/avatar1.png', '/img/avatar2.png', '/img/avatar3.png'];

  return (
    <section className='mt-24 w-full'>
      <div className='relative flex justify-center items-center mb-10 text-center'>
        <h2 className='bg-clip-text bg-gradient-to-r from-[#06045B] to-[#E01E5A] font-bold text-[105px] text-transparent leading-[-1.4%] select-none'>
          NFTs
        </h2>

        <p className='absolute font-medium text-[35px] text-white md:text-[44px]'>
          Selected notable drops
        </p>
      </div>

      <div className='gap-y-8 md:gap-x-6 xl:gap-y-0 grid grid-cols-12 px-[6%] w-full'>
        {cardsList.map((items, index) => (
          <motion.div
            key={items.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
            className='col-span-12 md:col-span-6 xl:col-span-3 bg-[#1E1B33] p-5 rounded-[12px]'
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
              <span className='font-semibold text-2xl'>Science Jobs</span>
              <span className='flex justify-center items-center gap-x-2'>
                <FaRegHeart color='#D71D61' />
                24
              </span>
            </div>

            <div className='flex justify-between items-center mt-3 px-5 w-full text-white'>
              <span className='flex justify-center items-center gap-x-1.5 text-[#CFCFCF]'>
                <FaShapes color='#03DB80' />
                From 17.59 Flow
              </span>
              <div className='flex -space-x-3'>
                {avatars.map((avatar, index) => (
                  <Image
                    key={index}
                    src={avatar}
                    alt='user'
                    width={28}
                    height={28}
                    className='border-[#1E1B33] border-2 rounded-full object-cover'
                  />
                ))}
              </div>
            </div>

            <div className='flex justify-between items-center mt-6 px-4 w-full text-white'>
              <button className='bg-[#1E1B33] hover:bg-[#2B2550] px-7 py-3 border border-[#E7E7E766] rounded-[8px] w-full text-white transition-all duration-300 cursor-pointer'>
                Live now
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className='flex justify-center mt-16 mb-7 w-full'>
        <div className='relative bg-[#E7E7E73D] rounded-full w-2/5 h-[2px] overflow-hidden'>
          <span className='top-0 right-0 absolute bg-gradient-to-r from-[#0500FA] to-[#E01E5A] rounded-full w-[220px] h-[2px] translate-x-[20%]'></span>
        </div>
      </div>
    </section>
  );
}
