import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const counters = [
  { id: 1, value: 30000, label: 'World Arts', gradient: true },
  { id: 2, value: 18000, label: 'Digital Artists' },
  { id: 3, value: 22000, label: 'Live Auctions' },
  { id: 4, value: 50000, label: 'Unique Products' },
];

export default function Counts() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    counters.forEach((item, i) => {
      let start = 0;
      const end = item.value;
      const duration = 2000;
      const increment = end / (duration / 30);
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = Math.floor(start);
          return newCounts;
        });
      }, 30);
    });
  }, []);

  return (
    <section className='mt-4 px-[6%] w-full overflow-hidden'>
      <motion.div
        className='items-center gap-x-6 gap-y-8 xl:gap-y-0 grid grid-cols-12 w-full'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* متن معرفی */}
        <motion.div
          className='flex col-span-12 md:col-span-6 xl:col-span-4 text-center xl:text-start'
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p className='w-11/12 text-[20px] text-white leading-8'>
            We will take all the worry and guesswork out of your blockchain and
            cryptocurrency concerns.
          </p>
        </motion.div>

        {/* شمارنده‌ها */}
        {counters.map((item, i) => (
          <motion.div
            key={item.id}
            className='flex flex-col items-center xl:items-start gap-y-2.5 col-span-12 md:col-span-6 xl:col-span-2'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3 + i * 0.2,
              duration: 0.7,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
          >
            <motion.h3
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className={`font-semibold text-[36px] ${
                item.gradient
                  ? 'bg-clip-text bg-gradient-to-r from-[#0500FA] to-[#E01E5A] text-transparent'
                  : 'text-[#7040F2]'
              }`}
            >
              {counts[i].toLocaleString()}+
            </motion.h3>
            <span className='mt-2 text-[20px] text-white'>{item.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* خط جداکننده با fade-in */}
      <motion.div
        className='mt-8 px-[6%] border border-[#E7E7E73D] w-full h-[1px]'
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        viewport={{ once: true }}
      />
    </section>
  );
}
