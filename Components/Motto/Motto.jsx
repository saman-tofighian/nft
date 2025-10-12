import Image from 'next/image';
import { MdPlayCircleFilled } from 'react-icons/md';

export default function Motto() {
  return (
    <section className='mt-7 py-20 w-full'>
      <div className='items-center gap-y-10 lg:gap-y-0 grid grid-cols-12 px-[6%] w-full'>
        <div className='col-span-12 lg:col-span-6 text-center lg:text-start'>
          <h1 className='font-bold text-white text-6xl leading-17'>
            Discover, collect, and sell extraordinary{' '}
            <span className='text-[#A41685]'>NFTs</span>
          </h1>
          <p className='mt-5 lg:w-4/5 xl:w-2/3 text-white leading-7'>
            Our marketplace is the world’s first and largest NFT market for
            independent creators worldwide{' '}
          </p>
          <div className='flex justify-center lg:justify-start gap-x-6 mt-6 w-full'>
            <button className='bg-gradient-to-r from-[#0500FA] to-[#E01E5A] px-9 py-2.5 rounded-[8px] text-white cursor-pointer'>
              Explore
            </button>
            <button className='bg-[#1E1B33] px-9 py-2.5 border border-[#E7E7E766] rounded-[8px] text-white cursor-pointer'>
              Create
            </button>
          </div>
          <div className='flex justify-center lg:justify-start mt-10 w-full'>
            <span className='flex justify-center items-center gap-x-2 text-white'>
              <MdPlayCircleFilled color='#7040F2' size='2rem' />
              Learn more about Nftico
            </span>
          </div>
        </div>
        <figure className='flex justify-center col-span-12 lg:col-span-6'>
          <Image
            className='rounded-2xl h-[618px] object-cover'
            src='/img/Motto.jpg'
            width={466}
            height={618}
            alt='MottoImage'
          />
        </figure>
      </div>
    </section>
  );
}
