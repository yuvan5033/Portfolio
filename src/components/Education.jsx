import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center py-10 mb-12">Education</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gray-800rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold mb-2">Bachelor of Technology in ECE</h3>
            <p className="text-blue-400 mb-2">2020 - 2024</p>
            <p className="text-gray-300">
              Currently pursuing B.Tech in Electronics and Communication Engineering with a focus on
              digital systems and signal processing. Maintaining a strong academic record while
              actively participating in technical projects and competitions.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Relevant Coursework</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Digital Electronics and Logic Design</li>
              <li>Analog and Digital Communication</li>
              <li>Microprocessors and Microcontrollers</li>
              <li>VLSI Design</li>
              <li>Digital Signal Processing</li>
              <li>Electromagnetic Theory</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;