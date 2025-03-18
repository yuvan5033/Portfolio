import React, { useEffect, useRef } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Gradient Overlay with Moving Animation */}
      <div className="absolute inset-0" />
      
      {/* Main Content */}
      <div className="relative h-full py-10">
        <div className="container mx-auto px-10 md:px-20 lg:px-26 w-fullflex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full pt-20">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10 lg:pl-8"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6"
                >
                  <span className="text-sm font-medium text-indigo-400 tracking-wider uppercase">
                    Software & Firmware Developer
                  </span>
                </motion.div>
                
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute -inset-1 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-3xl"
                  />
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="relative font-display text-6xl md:text-7xl xl:text-8xl font-normal text-white tracking-tight leading-tight"
                  >
                    Yuvan <br />
                    <span className="bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                      Reddy
                    </span>
                  </motion.h1>
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-gray-300 max-w-xl"
              >
                Creating innovative solutions at the intersection of hardware and software
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-6"
              >
                <a 
                  href="https://docs.google.com/document/d/1c5ObfwVwWAxV3JfrDWYghS_ZRZ2KWu2I/edit?usp=drivesdk&ouid=118245395574903120529&rtpof=true&sd=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <button className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium hover:opacity-90 transition-all duration-200">
                    View Resume
                  </button>
                </a>

                <button className="px-8 py-4 rounded-full bg-white/5 text-white backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-200">
                  Contact Me
                </button>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative hidden lg:flex lg:justify-center"
            >
              <Parallax translateY={['-5%', '5%']} className="relative z-10">
                <div className="relative max-h-[60vh] w-[90%] ml-auto">
                  {/* Gradient Glow */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-60 blur-3xl rounded-full" />
                  
                  {/* Image Container */}
                  <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 p-1 max-h-[40vh]">
                    <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 rounded-3xl" />
                    <img
                      src="/main.jpg"
                      alt="Yuvan Reddy"
                      className="relative w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </Parallax>

              {/* Decorative Elements */}
              <div className="absolute -inset-4 border border-white/10 rounded-3xl -rotate-6" />
              <div className="absolute -inset-4 border border-white/10 rounded-3xl rotate-6" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
