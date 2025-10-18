export default function Footer() {
  return (
    <footer className='w-full'>
      <div className='grid grid-cols-12 px-[6%] w-full'>
        <div className='col-span-3'>
          <h5 className='mb-8 text-[24px] text-white'>Marketplace</h5>
          <ul className='flex flex-col w-full'>
            <li className='text-[16px] text-white'>Explore</li>
            <li className='text-[16px] text-white'>Help Center</li>
            <li className='text-[16px] text-white'>Become a Partner</li>
            <li className='text-[16px] text-white'>About Us</li>
            <li className='text-[16px] text-white'>Platform Status</li>
          </ul>
        </div>
        <div className='col-span-3'>
          <h5 className='mb-8 text-[24px] text-white'>Community</h5>
          <ul className='flex flex-col w-full'>
            <li className='text-[16px] text-white'>Profile</li>
            <li className='text-[16px] text-white'>Favorites</li>
            <li className='text-[16px] text-white'>Watchlist</li>
            <li className='text-[16px] text-white'>My Collections</li>
            <li className='text-[16px] text-white'>Rankings</li>
            <li className='text-[16px] text-white'>Activity</li>
          </ul>
        </div>
        <div className='col-span-3'>
          <h5 className='mb-8 text-[24px] text-white'>Categories</h5>
          <ul className='flex flex-col w-full'>
            <li className='text-[16px] text-white'>Arts</li>
            <li className='text-[16px] text-white'>Collectibles</li>
            <li className='text-[16px] text-white'>Games</li>
            <li className='text-[16px] text-white'>Sports</li>
            <li className='text-[16px] text-white'>Trading Cards</li>
            <li className='text-[16px] text-white'>Photography</li>
          </ul>
        </div>
        <div className='col-span-3'>
          <h5 className='mb-8 text-[24px] text-white'>Marketplace</h5>
          <p>
            If you’re an NFT enthusiast or are looking to download our NFT App.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-12 bg-[#1E1B33] px-[6%] w-full'>
        <nav className='col-span-7'>
          <ul className='flex justify-center items-center gap-x-7 w-full'>
            <li className='border border-amber-300 text-[20px] text-white'>
              Privacy Policy
            </li>
            <li className='text-[20px] text-white'>License</li>
            <li className='text-[20px] text-white'>API</li>
          </ul>
        </nav>
        <div className='col-span-5 py-4 text-[#C0C0C0]'>
          <span>
            @ 2025 <strong className='text-[#E01E5A]'>Saman Tofighian</strong>{' '}
            All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
