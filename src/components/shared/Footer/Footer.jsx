// Footer.jsx

import { Divider } from '@nextui-org/react';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400 text-white">
        <Divider></Divider>
      <div className="container mx-auto flex flex-wrap justify-center">
        {/* Logo Column */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4 sm:mb-0">
          {/* Your Logo Goes Here */}
          <img src="/path-to-your-logo.png" alt="Logo" className="mx-auto w-24 " />
        </div>

        {/* Social Media Columns */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4 sm:mb-0">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Other Columns */}
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4 sm:mb-0">
          {/* Column Content */}
          <h3 className="text-lg font-semibold mb-3">Column 3</h3>
          <ul className="list-none">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Link 1
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Link 2
              </a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4 sm:mb-0">
          {/* Column Content */}
          <h3 className="text-lg font-semibold mb-3">Column 4</h3>
          <ul className="list-none">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Link 1
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Link 2
              </a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
