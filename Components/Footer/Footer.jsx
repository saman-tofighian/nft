import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
export default function Footer() {
  return (
    <>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#1E1B33'
          fill-opacity='1'
          d='M0,256L60,240C120,224,240,192,360,192C480,192,600,224,720,240C840,256,960,256,1080,213.3C1200,171,1320,85,1380,42.7L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
        ></path>
      </svg>
      <footer className='bg-[#1E1B33] py-16 w-full'>
        <div className='gap-8 lg:gap-0 xl:gap-8 grid grid-cols-12 px-[6%] w-full'>
          <div className='col-span-12 lg:col-span-3'>
            <h5 className='mb-8 font-semibold text-[24px] text-white text-center lg:text-start'>
              Marketplace
            </h5>
            <ul className='flex flex-col items-center lg:items-start gap-y-2.5 w-full'>
              <li className='text-[16px] text-white'>Explore</li>
              <li className='text-[16px] text-white'>Help Center</li>
              <li className='text-[16px] text-white'>Become a Partner</li>
              <li className='text-[16px] text-white'>About Us</li>
              <li className='text-[16px] text-white'>Platform Status</li>
            </ul>
          </div>
          <div className='col-span-12 lg:col-span-3'>
            <h5 className='mb-8 font-semibold text-[24px] text-white text-center lg:text-start'>
              Community
            </h5>
            <ul className='flex flex-col items-center lg:items-start gap-y-2.5 w-full'>
              <li className='text-[16px] text-white'>Profile</li>
              <li className='text-[16px] text-white'>Favorites</li>
              <li className='text-[16px] text-white'>Watchlist</li>
              <li className='text-[16px] text-white'>My Collections</li>
              <li className='text-[16px] text-white'>Rankings</li>
              <li className='text-[16px] text-white'>Activity</li>
            </ul>
          </div>
          <div className='col-span-12 lg:col-span-3'>
            <h5 className='mb-8 font-semibold text-[24px] text-white text-center lg:text-start'>
              Categories
            </h5>
            <ul className='flex flex-col items-center lg:items-start gap-y-2.5 w-full'>
              <li className='text-[16px] text-white'>Arts</li>
              <li className='text-[16px] text-white'>Collectibles</li>
              <li className='text-[16px] text-white'>Games</li>
              <li className='text-[16px] text-white'>Sports</li>
              <li className='text-[16px] text-white'>Trading Cards</li>
              <li className='text-[16px] text-white'>Photography</li>
            </ul>
          </div>
          <div className='col-span-12 lg:col-span-3 mt-8 lg:mt-0'>
            <h5 className='mb-8 font-semibold text-[24px] text-white text-center lg:text-start'>
              Marketplace
            </h5>
            <p className='mb-6 text-white'>
              If you’re an NFT enthusiast or are looking to download our NFT
              App.
            </p>
            <div className='flex sm:flex-row flex-col items-stretch mb-6 w-full'>
              <input
                type='email'
                placeholder='Type your email'
                className='flex-1 bg-[#2B2550] px-4 py-3 rounded-t-md sm:rounded-t-none sm:rounded-l-md outline-none w-full text-white placeholder:text-gray-400'
              />
              <button className='bg-gradient-to-r from-[#0500FA] to-[#E01E5A] hover:opacity-90 px-6 py-3 sm:rounded-r-md rounded-b-md sm:rounded-b-none font-medium text-white whitespace-nowrap transition-all cursor-pointer'>
                Subscribe
              </button>
            </div>
            <div className='flex justify-center lg:justify-start items-center gap-x-4 mt-4'>
              <a
                href='#'
                className='bg-[#2B2550] hover:bg-[#E01E5A] p-2 rounded-full transition-all'
              >
                <FaFacebookF color='white' />
              </a>
              <a
                href='#'
                className='bg-[#2B2550] hover:bg-[#E01E5A] p-2 rounded-full transition-all'
              >
                <FaTwitter color='white' />
              </a>
              <a
                href='#'
                className='bg-[#2B2550] hover:bg-[#E01E5A] p-2 rounded-full transition-all'
              >
                <FaInstagram color='white' />
              </a>
              <a
                href='#'
                className='bg-[#2B2550] hover:bg-[#E01E5A] p-2 rounded-full transition-all'
              >
                <FaLinkedinIn color='white' />
              </a>
            </div>
          </div>
        </div>

        <div className='flex justify-center mt-10 mb-5 w-full'>
          <span className='bg-[#E7E7E73D] w-11/12 h-[1px]'></span>
        </div>

        <div className='items-center grid grid-cols-12 px-[6%] w-full'>
          <nav className='col-span-12 lg:col-span-7'>
            <ul className='flex flex-wrap justify-center lg:justify-start items-center gap-x-7 w-full'>
              <li className='text-[18px] text-white hover:text-[#E01E5A] transition-all cursor-pointer'>
                Privacy Policy
              </li>
              <li className='text-[18px] text-white hover:text-[#E01E5A] transition-all cursor-pointer'>
                License
              </li>
              <li className='text-[18px] text-white hover:text-[#E01E5A] transition-all cursor-pointer'>
                API
              </li>
            </ul>
          </nav>

          <div className='col-span-12 lg:col-span-5 mt-6 lg:mt-0 text-[#C0C0C0] text-center lg:text-right'>
            <span>
              © 2025 <strong className='text-[#E01E5A]'>Saman Tofighian</strong>{' '}
              — All rights reserved
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
