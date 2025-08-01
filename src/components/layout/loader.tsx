'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        className="relative"
      >
        <Image
          src="/Lamda-logo-dark.png" 
          alt="Loader Logo"
          width={250}
          height={250}
          className="object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Loader;
