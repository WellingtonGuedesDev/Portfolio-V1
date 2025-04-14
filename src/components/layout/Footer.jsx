// src/components/layout/Footer.jsx
import React, { useEffect } from 'react';
import SubFooter from './SubFooter';
import { Link } from 'react-router-dom';
import SocialIcons from '../ui/SocialIcons';

function Footer() {
  return (
    // <footer className="bg-[#121212] text-white mt-12 pt-20 pb-[1rem] px-10 fixed left-0 bottom-0 z-[-100] w-full">
    <footer className="bg-[#121212] text-white pt-20 pb-[1rem] px-10">
      <SubFooter></SubFooter>

      <div>
        <SocialIcons></SocialIcons>
      </div>
      {/* <div className="container mx-auto px-6 pt-[4rem] pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
            <p className="text-gray-300">Seu destino confiável de compras online.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-gray-300">Email: Creativeartgraficarapida</p>
            <p className="text-gray-300">Phone: (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Sigamos-nos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded text-gray-800"
            />
          </div>
        </div>
      </div> */}
    </footer>
  );
}

export default Footer;