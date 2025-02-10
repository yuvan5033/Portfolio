import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold py-10 mb-8">About Me</h2>
          <p className="text-lg text-gray-300 mb-6">
            I am a passionate Electronics & Communication Engineering student with a keen interest in
            cutting-edge technology and innovation. My journey in engineering has equipped me with
            strong problem-solving skills and a deep understanding of electronic systems.
          </p>
          <p className="text-lg text-gray-300">
            Beyond academics, I am constantly exploring new technologies and working on personal
            projects that challenge me to grow both technically and creatively. I believe in the
            power of technology to create positive change in the world.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;