import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Yuvan Reddy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;