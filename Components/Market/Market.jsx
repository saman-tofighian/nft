import Image from 'next/image';

export default function Market() {
  return (
    <section className='mt-32 w-full'>
      <div className='relative flex justify-center items-center mb-10 text-center'>
        <h2 className='bg-clip-text bg-gradient-to-r from-[#06045B] to-[#E01E5A] font-bold text-[105px] text-transparent leading-[-1.4%] select-none'>
          NFTs
        </h2>

        <p className='absolute font-medium text-[35px] text-white md:text-[44px]'>
          Resouces for getting started
        </p>
      </div>
      <div className='grid grid-cols-12 mt-10 px-[6%] w-full'>
        <figure className='col-span-12 xl:col-span-6'>
          <Image
            src='/img/market.jpg'
            alt='market'
            width={636}
            height={464}
            className='rounded-2xl h-[464px]'
          />
        </figure>
        <div className='col-span-12 xl:col-span-6'>
          <div className='flex items-center gap-x-8 bg-[#1e1b33c4] p-6 rounded-2xl w-full'>
            <figure>
              <Image
                src='/img/m1.png'
                alt='m1'
                width={158}
                height={152}
                className='rounded-2xl h-[152px]'
              />
            </figure>
            <div>
              <h5 className='font-medium text-[24px] text-white'>
                I think I minted duplicate NFTs
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
