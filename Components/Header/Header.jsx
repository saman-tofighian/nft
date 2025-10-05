import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-[#04011C] w-full h-21'>
      <nav className='grid grid-cols-12 px-[6%] w-full h-full'>
        <figure className='flex items-center col-span-3 h-full'>
          <Image src='/img/lOGO.png' alt='Logo' width={124} height={44} />
        </figure>
        <div className='col-span-4 h-full'>
          <ul className='flex justify-end gap-x-6 w-full h-full'>
            <li className='flex justify-center items-center w-fit h-full'>
              <Link
                href='/'
                className='w-fit h-fit text-[18px] text-white hover:text-[#be2ab7f2] duration-500 ease-linear'
              >
                Explore
              </Link>
            </li>
            <li className='flex justify-center items-center w-fit h-full'>
              <Link
                href='/'
                className='w-fit h-fit text-[18px] text-white hover:text-[#be2ab7f2] duration-500 ease-linear'
              >
                Stats
              </Link>
            </li>
            <li className='flex justify-center items-center w-fit h-full'>
              <Link
                href='/'
                className='w-fit h-fit text-[18px] text-white hover:text-[#be2ab7f2] duration-500 ease-linear'
              >
                Drops
              </Link>
            </li>
            <li className='flex justify-center items-center w-fit h-full'>
              <Link
                href='/'
                className='w-fit h-fit text-[18px] text-white hover:text-[#be2ab7f2] duration-500 ease-linear'
              >
                Activity
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
