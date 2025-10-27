import Image from 'next/image';

export default function Brands() {
  const brandImage = [
    {
      id: 1,
      img: '/img/b1.png',
    },
    {
      id: 2,
      img: '/img/b2.png',
    },
    {
      id: 3,
      img: '/img/b3.png',
    },
    {
      id: 4,
      img: '/img/b4.png',
    },
  ];
  return (
    <section className='mt-14 w-full'>
      <div className='gap-x-7 grid grid-cols-12 px-[6%] w-full'>
        {brandImage.map((val) => (
          <figure key={val.id}>
            <Image
              src={val.img}
              alt='brand'
              width={208}
              height={59}
              className='opacity-80 hover:opacity-100 object-contain transition-all'
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
