import React, { useEffect, useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const MobileNavbar = ({ isOpen, onClose }) => {
  const navbarRef = useRef(null);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    onClose();
  };

  return (
    <div ref={navbarRef} className={`absolute top-0 left-0 w-[250px] h-[100vh] z-50 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-8">
        <div className="flex justify-end">
          <FaTimes className="text-2xl cursor-pointer" onClick={onClose} />
        </div>
        <ul className="space-y-6">
          <li>
            <a href="#" className={`block text-lg ${activeLink === 'Home' ? 'text-blue-600' : 'text-gray-400'} hover:text-blue-600`} onClick={() => handleLinkClick('Home')}>Home</a>
          </li>
          <li>
            <a href="#projetos" className={`block text-lg ${activeLink === 'Projetos' ? 'text-blue-600' : 'text-gray-400'} hover:text-blue-600`} onClick={() => handleLinkClick('Projetos')}>Projetos</a>
          </li>
          <li>
            <a href="#contato" className={`block text-lg ${activeLink === 'Contato' ? 'text-blue-600' : 'text-gray-400'} hover:text-blue-600`} onClick={() => handleLinkClick('Contato')}>Contato</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
