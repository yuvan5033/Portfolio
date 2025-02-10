import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

const projects = [
  {
    title: 'Hydro Harvesters',
    status: 'Ongoing',
    description: 'IoT-based hydroponics automation system using raspberry pi, ESP32 and ML',
    tech: ['Raspberry pi', 'IoT', 'C++', 'MQTT', 'Python', 'React-native'],
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'TracknGo',
    status: 'Ongoing',
    description: 'Bus surviellance & live tracking system with ML based occupancy detection',
    tech: ['Python', 'c++', 'React-Native', 'I2c', 'Spi', 'postgreSQL'],
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Velocity Cars',
    status: 'complete',
    description: 'Used cars market place for premium and high standard dealers',
    tech: ['Flutter', 'Firebase', 'Supabase', "OAuth"],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'GroFx® App',
    status: 'Ongoing',
    description: 'Smart grocery shopping application with indoor naviation and product promotions',
    tech: ['React-native', 'OAuth2.0', 'Supabase', "PostgreSQL"],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Smart Billing system',
    status: 'Ongoing',
    description: 'Smart grocery billing application with admin dashboard powered by AI driven analytics',
    tech: ['Python', 'flask', 'PyQt5', "React", "postgreSQL", "Machine learning"],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'GroFx® Display',
    status: 'Ongoing',
    description: 'Smart E-ink displays for product info and dynamic pricing',
    tech: ['Esp32', 'SPI', 'embedded c', "Zigbee", "PCB Design"],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Navira',
    status: 'Ongoing',
    description: 'In-house navigation engine for indoor navigation such as airports and malls',
    tech: ['Esp32', 'SPI', 'embedded c', "Zigbee", "PCB Design"],
    gradient: 'from-purple-500 to-pink-500'
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <Parallax translateY={[-15, 15]} className="absolute inset-0">
        <div className="absolute inset-0 " />
      </Parallax>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 gradient-text"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative glass-effect rounded-2xl p-6 h-full transition-all duration-300 hover:bg-white/15">
                {/* Gradient Border */}
                <div
                  className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                />

                {/* Status Badge */}
                <span
                  className={`absolute top-4 right-4 px-3 py-1 text-sm font-semibold rounded-full ${
                    project.status === 'complete'
                      ? 'bg-green-500 text-white'
                      : 'bg-yellow-500 text-black'
                  }`}
                >
                  {project.status}
                </span>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-gray-100">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto justify-start">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm glass-effect text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;