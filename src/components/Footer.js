import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-teal-500 text-gray-300 py-4 h-16">
      <div className="  container mx-auto flex justify-between items-center">
        <div className="ml-10 flex">
          <a href="https://github.com/imadmi" target="_blank" rel="noreferrer" className="hover:cursor-pointer text-gray-300 hover:text-white mr-4">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/imadmimouni/" target="_blank" rel="noreferrer" className="hover:cursor-pointer text-gray-300 hover:text-white">
            <FaLinkedin />
          </a>
        </div>
        <p className="ml-20 hover:cursor-grab">&copy; All rights reserved.</p>
        <p className="hover:cursor-grab mr-10">Mimouni Imad</p>
      </div>
    </footer>
  );
}

export default Footer;
