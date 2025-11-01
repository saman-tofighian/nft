import { motion } from 'framer-motion';
import Image from 'next/image';
import { MdPlayCircleFilled } from 'react-icons/md';

export default function Motto() {
  return (
    <section className='mt-7 py-20 w-full overflow-hidden'>
      <div className='items-center gap-y-10 lg:gap-y-0 grid grid-cols-12 px-[6%] w-full'>
        <motion.div
          className='col-span-12 lg:col-span-6 text-center lg:text-start'
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.h1
            className='font-bold text-white text-5xl sm:text-6xl leading-[1.2]'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          >
            Discover, collect, and sell extraordinary{' '}
            <motion.span
              className='inline-block text-[#A41685]'
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.6,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            >
              NFTs
            </motion.span>
          </motion.h1>

          <motion.p
            className='mt-5 lg:w-4/5 xl:w-2/3 text-white text-base sm:text-lg leading-7'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          >
            Our marketplace is the world’s first and largest NFT market for
            independent creators worldwide.
          </motion.p>

          <motion.div
            className='flex justify-center lg:justify-start gap-x-6 mt-6 w-full'
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          >
            <button className='bg-gradient-to-r from-[#0500FA] to-[#E01E5A] px-9 py-2.5 rounded-[8px] text-white cursor-pointer'>
              Explore
            </button>

            <button className='bg-[#1E1B33] hover:bg-[#2B2550] px-9 py-2.5 border border-[#E7E7E766] rounded-[8px] text-white transition-all cursor-pointer'>
              Create
            </button>
          </motion.div>

          <motion.div
            className='flex justify-center lg:justify-start mt-10 w-full'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
          >
            <motion.span
              className='flex justify-center items-center gap-x-2 text-white cursor-pointer'
              whileHover={{ x: 8 }}
            >
              <MdPlayCircleFilled color='#7040F2' size='2rem' />
              Learn more about Nftico
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.figure
          className='flex justify-center col-span-12 lg:col-span-6'
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className='shadow-[#E01E5A]/20 shadow-lg rounded-2xl overflow-hidden'>
            <Image
              className='rounded-2xl w-auto h-[480px] sm:h-[618px] object-cover'
              src='/img/Motto.jpg'
              width={466}
              height={618}
              alt='MottoImage'
              priority
            />
          </div>
        </motion.figure>
      </div>
    </section>
  );
}
