import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

const skills = [
  { name: 'ARDUNIO', level: 90 },
  { name: 'Pcb Design', level: 75 },
  { name: 'Microcontrollers', level: 80 },
  { name: 'Firmware Engineering', level: 90 },
  { name: 'React native', level: 85 },
  { name: 'Flutter', level: 90 },
  { name: 'React', level: 85 },
  { name: 'DBMS', level: 90 }
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Parallax Background Elements */}
      <Parallax translateY={[-20, 20]} className="absolute inset-0">
        <div className="absolute inset-0 "></div>
      </Parallax>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 gradient-text"
        >
          Technical Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-6 rounded-2xl relative group hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-200">{skill.name}</h3>
                <span className="text-indigo-400 font-medium">{skill.level}%</span>
              </div>
              
              <div className="relative h-2 bg-black/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #6366f1, #a855f7)',
                    boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)'
                  }}
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;