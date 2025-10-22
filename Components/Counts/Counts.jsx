export default function Counts() {
  return (
    <section className='mt-4 px-[6%] w-full'>
      <div className='items-center gap-x-6 gap-y-8 xl:gap-y-0 grid grid-cols-12 w-full'>
        <div className='flex col-span-12 md:col-span-6 xl:col-span-4 text-center xl:text-start'>
          <p className='w-11/12 text-[20px] text-white'>
            We will take all the worry and guesswork out of your blockchain and
            cryptocurrency concerns.
          </p>
        </div>
        <div className='flex flex-col items-center xl:items-start gap-y-2.5 col-span-12 md:col-span-6 xl:col-span-2'>
          <h3 className='bg-clip-text bg-gradient-to-r from-[#0500FA] to-[#E01E5A] font-semibold text-[36px] text-transparent'>
            30.000+
          </h3>

          <span className='mt-2 text-[20px] text-white'>World Arts</span>
        </div>
        <div className='flex flex-col items-center xl:items-start gap-y-2.5 col-span-12 md:col-span-6 xl:col-span-2'>
          <h3 className='text-[#7040F2] text-[36px]'>18.000+</h3>
          <span className='mt-2 text-[20px] text-white'>Digital Artists</span>
        </div>
        <div className='flex flex-col items-center xl:items-start gap-y-2.5 col-span-12 md:col-span-6 xl:col-span-2'>
          <h3 className='text-[#7040F2] text-[36px]'>22.000+</h3>
          <span className='mt-2 text-[20px] text-white'>Live Auctions</span>
        </div>
        <div className='flex flex-col items-center xl:items-start gap-y-2.5 col-span-12 xl:col-span-2'>
          <h3 className='text-[#7040F2] text-[36px]'>50.000+</h3>
          <span className='mt-2 text-[20px] text-white'>Unique Products</span>
        </div>
      </div>
      <div className='mt-8 px-[6%] border border-[#E7E7E73D] w-full h-[1px]'></div>
    </section>
  );
}
