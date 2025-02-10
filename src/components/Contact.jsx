import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg text-gray-300 mb-12">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:yuvan.reddy@example.com"
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <FaEnvelope className="text-2xl" />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com/in/yuvanreddy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="text-2xl" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/yuvan5033"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <FaGithub className="text-2xl" />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;