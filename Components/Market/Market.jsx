import Image from 'next/image';
import { FaCommentDots } from 'react-icons/fa';

export default function Market() {
  const cards = [
    {
      id: 1,
      tag1: 'Game',
      tag2: 'NFT',
      img: '/img/m1.png',
      title: 'I think I minted duplicate NFTs',
      author: 'Courtney Henry',
      date: 'May 27, 2025',
      avatar: '/img/avatar1.png',
    },
    {
      id: 2,
      tag1: 'NFT Token',
      tag2: 'NFT',
      img: '/img/m2.jpg',
      title: 'The Marketplace isn’t working',
      author: 'Courtney Henry',
      date: 'May 27, 2025',
      avatar: '/img/avatar3.png',
    },
  ];

  return (
    <section className='mt-32 w-full'>
      <div className='relative flex justify-center items-center mb-10 text-center'>
        <h2 className='bg-clip-text bg-gradient-to-r from-[#06045B] to-[#E01E5A] font-bold text-[105px] text-transparent select-none'>
          NFTs
        </h2>
        <p className='absolute font-medium text-[32px] text-white sm:text-[38px] md:text-[44px]'>
          Resources for getting started
        </p>
      </div>

      <div className='gap-y-26 xl:gap-x-8 xl:gap-y-0 grid grid-cols-12 px-[6%] w-full'>
        <div className='col-span-12 xl:col-span-6'>
          <div className='relative'>
            <Image
              src='/img/market.jpg'
              alt='market'
              width={636}
              height={464}
              className='rounded-2xl w-full h-[464px] object-cover'
            />
            <div className='right-8 bottom-[-60px] left-8 absolute bg-[#1E1B33] hover:bg-[#26224a] shadow-lg p-6 rounded-2xl transition-all duration-300'>
              <div className='flex items-center gap-x-4 mb-3'>
                <span className='bg-gradient-to-r from-[#06045B] to-[#E01E5A] px-4 py-1 rounded-md text-white text-sm'>
                  NFT Token
                </span>
                <span className='flex items-center gap-x-1 text-[#A5A5A5] text-sm'>
                  <FaCommentDots /> No Comment
                </span>
              </div>
              <h3 className='mb-4 font-medium text-[22px] text-white leading-snug'>
                The Seven Secrets I should have received NFTs.
              </h3>
              <div className='flex items-center gap-x-3'>
                <Image
                  src='/img/avatar2.png'
                  alt='author'
                  width={40}
                  height={40}
                  className='rounded-full'
                />
                <div>
                  <p className='font-medium text-white text-sm'>
                    Election Season
                  </p>
                  <p className='text-[#A5A5A5] text-xs'>June 2, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center gap-6 col-span-12 xl:col-span-6'>
          {cards.map((item) => (
            <div
              key={item.id}
              className='flex items-center gap-x-6 bg-[#1E1B33] hover:bg-[#26224a] p-6 rounded-2xl w-full transition-all duration-300'
            >
              <figure>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={158}
                  height={152}
                  className='rounded-2xl h-[152px] object-cover'
                />
              </figure>
              <div className='flex flex-col gap-y-3'>
                <div className='flex items-center gap-x-3'>
                  <span className='bg-gradient-to-r from-[#0500FA] to-[#E01E5A] px-3 py-1 rounded-md text-white text-xs'>
                    {item.tag1}
                  </span>
                  <span className='bg-gradient-to-r from-[#A100FF] to-[#FF007A] px-3 py-1 rounded-md text-white text-xs'>
                    {item.tag2}
                  </span>
                  <span className='flex items-center gap-x-1 text-[#A5A5A5] text-xs'>
                    <FaCommentDots /> No Comment
                  </span>
                </div>

                <h5 className='font-medium text-[20px] text-white leading-snug'>
                  {item.title}
                </h5>

                <div className='flex items-center gap-x-3 mt-2'>
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    width={36}
                    height={36}
                    className='rounded-full'
                  />
                  <div>
                    <p className='font-medium text-white text-sm'>
                      {item.author}
                    </p>
                    <p className='text-[#A5A5A5] text-xs'>{item.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
