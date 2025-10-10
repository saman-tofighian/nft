import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { TiDeleteOutline } from 'react-icons/ti';

export default function Header() {
  const [openMenu, seOpenMenu] = useState(false);
  const MenuBtnOpen = () => {
    document.getElementById('Menu').classList.remove('translate-x-[-500px]');
    document.getElementById('Menu').classList.add('translate-x-0');
  };
  return (
    <>
      <header className='bg-[#04011C] border-[#2A1F4C] border-b w-full h-20'>
        <nav className='items-center grid grid-cols-12 px-[6%] w-full h-full'>
          {/* --- Logo --- */}
          <figure className='flex items-center col-span-6 lg:col-span-2 h-full'>
            <Image src='/img/lOGO.png' alt='Logo' width={124} height={44} />
          </figure>

          {/* --- Menu XL --- */}
          <div className='hidden lg:flex lg:col-span-4 xl:col-span-5'>
            <ul className='flex justify-end gap-x-8 w-full'>
              {['Explore', 'Stats', 'Drops', 'Activity'].map((item, i) => (
                <li key={i}>
                  <Link
                    href='/'
                    className='font-medium text-[17px] text-white hover:text-[#D71D61] transition-all duration-300'
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Menu SM --- */}
          <div className='lg:hidden flex justify-end col-span-6'>
            <span>
              <RxHamburgerMenu
                onClick={openMenu}
                size='2.2rem'
                color='white'
                className='cursor-pointer'
              />
            </span>
          </div>

          {/* --- Search box + Button --- */}
          <div className='hidden lg:flex justify-end items-center gap-x-5 lg:col-span-6 xl:col-span-5'>
            {/* Search box */}
            <div className='relative w-[230px] h-[42px]'>
              <input
                type='text'
                placeholder='Search'
                className='px-4 border border-[#E7E7E766] rounded-[8px] focus:outline-none w-[185px h-full text-[15px] text-white placeholder:text-[#9a8fbf] transition-all ]'
              />
              <FiSearch className='top-1/2 right-9 absolute text-[18px] text-white -translate-y-1/2' />
            </div>

            {/* Button */}
            <button className='bg-gradient-to-r from-[#0500FA] to-[#E01E5A] hover:opacity-90 shadow-[0_0_12px_#D71D61aa] px-6 py-2.5 rounded-[8px] font-semibold text-[15px] text-white transition-all cursor-pointer'>
              Get in Touch
            </button>
          </div>
        </nav>
      </header>

      {/* mobile Menu */}
      <div
        id='Menu'
        className='lg:hidden left-0 fixed bg-[#04011C] border-[#2A1F4C] border-b w-[40vw] h-[100vh] translate-x-[-500px] duration-500 ease-initial'
      >
        <div className='w-full h-full'>
          <span className='flex justify-end my-7 px-4 w-full'>
            <TiDeleteOutline
              size='2.8rem'
              color='#D71D61'
              className='cursor-pointer'
            />
          </span>
          <ul className='flex flex-col items-center gap-y-6 pt-14 w-full h-full'>
            {['Explore', 'Stats', 'Drops', 'Activity'].map((item, i) => (
              <li key={i}>
                <Link
                  href='/'
                  className='font-medium text-[17px] text-white hover:text-[#D71D61] transition-all duration-300'
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
