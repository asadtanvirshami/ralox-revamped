// Footer.js

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-theme-500 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Our specialized team of developers and QA professionals possess
              extensive expertise in diverse technologies, ensuring top-notch
              solutions and flawless user experiences. We thrive on innovation,
              staying ahead of industry trends to deliver forward-thinking and
              future-proof software solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="text-sm">
              <li>ERP Development</li>
              <li>CRM Development</li>
              <li>CMS Development</li>
              <li>Mobile App Development</li>
              <li>AI Machine Learning</li>
              <li>Cyber Security</li>
              <li>Branding</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">123 Main Street, City</p>
            <p className="text-sm">algorimsoftware@outlook.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-800 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-800 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/algorim.io/" className="text-gray-800 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-800 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
