export default function Counts() {
  return (
    <section className='mt-4 px-[6%] w-full'>
      <div className='items-center gap-x-6 grid grid-cols-12 w-full'>
        <div className='col-span-4'>
          <p className='w-11/12 text-[20px] text-white'>
            We will take all the worry and guesswork out of your blockchain and
            cryptocurrency concerns.
          </p>
        </div>
        <div className='flex flex-col gap-y-2.5 col-span-2'>
          <h3 className='from-[#0500FA] to-[#E01E5A] text-[36px] text-gradient-to-r'>
            30.000+
          </h3>
          <span className='mt-2 text-[20px] text-white'>World Arts</span>
        </div>
        <div className='flex flex-col gap-y-2.5 col-span-2'>
          <h3 className='text-[#7040F2] text-[36px]'>18.000+</h3>
          <span className='mt-2 text-[20px] text-white'>Digital Artists</span>
        </div>
        <div className='flex flex-col gap-y-2.5 col-span-2'>
          <h3 className='text-[#7040F2] text-[36px]'>22.000+</h3>
          <span className='mt-2 text-[20px] text-white'>Live Auctions</span>
        </div>
        <div className='flex flex-col gap-y-2.5 col-span-2'>
          <h3 className='text-[#7040F2] text-[36px]'>50.000+</h3>
          <span className='mt-2 text-[20px] text-white'>Unique Products</span>
        </div>
      </div>
      <div className='mt-8 px-[6%] border border-[#E7E7E73D] w-full h-[1px]'></div>
    </section>
  );
}
