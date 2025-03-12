import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';

function Header() {
  return (
    <motion.header
      className='bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 px-4 shadow-lg flex items-center justify-center space-x-4 rounded-b-2xl'
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <FaReact size={50} className='text-white drop-shadow-md' />
      <motion.h1
        className='text-3xl font-bold tracking-wider drop-shadow-lg'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Frontend Mastery Quiz 🚀
      </motion.h1>
    </motion.header>
  );
}

export default Header;