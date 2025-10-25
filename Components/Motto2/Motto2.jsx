import Image from 'next/image';

export default function Motto2() {
  return (
    <section className='mt-36 w-full'>
      <div className='items-center gap-y-10 xl:gap-x-12 xl:gap-y-0 xxl:gap-x-0 grid grid-cols-12 px-[6%] w-full'>
        <figure className='flex justify-center xl:justify-start col-span-12 xl:col-span-6'>
          <Image
            alt='Motto2'
            src='/img/Motto2.png'
            className='h-[486px]'
            width={566}
            height={486}
          />
        </figure>
        <div className='col-span-12 xl:col-span-6'>
          <h4 className='font-medium text-[44px] text-white'>
            Create, Sell well & Collect Your Best Very Fast NFTs.
          </h4>
          <p className='mt-4 text-[#C0C0C0] text-[18px] leading-8'>
            Create, Sell well & Collect Your Best Very Fast NFTs.The purpose of
            lorem ipsum is to create a natural looking block of text (sentence,
            paragraph, page, etc.) that doesn't distract from the layout. A
            practice not without controversy, laying out pages with meaningless
          </p>
          <div className='mt-6 w-full'>
            <button className='bg-gradient-to-r from-[#0500FA] to-[#E01E5A] px-8 py-2.5 rounded-[8px] text-white cursor-pointer'>
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
