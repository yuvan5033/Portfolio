import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass-effect py-4' : 'py-30'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
        <Link
            to="home"
            smooth={true}
            className="cursor-pointer py-7"
          >
            <img src="/Brand.svg" alt="YR Logo" className="w-56 h-full" />
          </Link>

          
          
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                className="capitalize cursor-pointer text-sm text-gray-300 hover:text-indigo-400 transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-indigo-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <button className="md:hidden text-gray-300 hover:text-indigo-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;