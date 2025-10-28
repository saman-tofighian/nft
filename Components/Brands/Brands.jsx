import Image from 'next/image';

export default function Brands() {
  const brandImage = [
    { id: 1, img: '/img/b5.png' },
    { id: 2, img: '/img/b1.png' },
    { id: 3, img: '/img/b2.png' },
    { id: 4, img: '/img/b3.png' },
    { id: 5, img: '/img/b4.png' },
  ];

  return (
    <section className='flex justify-center mt-30 w-full'>
      <div className='justify-items-center items-center gap-y-12 sm:gap-x-12 xl:gap-y-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 px-6 w-full max-w-[1100px]'>
        {brandImage.map((val) => (
          <figure key={val.id}>
            <Image
              src={val.img}
              alt='brand'
              width={208}
              height={59}
              className='h-[59px] object-center transition-all'
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
