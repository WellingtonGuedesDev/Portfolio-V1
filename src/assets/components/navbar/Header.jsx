import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import MobileNavbar from './MobileNavbar';
import { Link } from 'react-router-dom';
import { colors } from '../../styles/colors';
import { ThemeContext } from '../../../ThemeContext';
import { useContext } from 'react';
import ThemeToggleButton from '../ui/darkButton';



const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [screenWidth, setScreenWidth] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const { theme } = useContext(ThemeContext)
  const currentColor = colors[theme];

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('oficialwellington@gmail.com')
    .then(() => {
      alert('Email copiado com sucesso!');
    })
    .catch((err) => {
      console.error('Erro ao copiar o email:', err);
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    window.addEventListener('resize', () => {
      
      if (window.innerWidth < 1200) {
        setScreenWidth(true)
        console.log(screenWidth)
      } else {
        setScreenWidth(false)
      }
    });
  }, [screenWidth]);

  return (
    <header className={`transition-all duration-300 p-4 md:py-8 md:px-10}`}>
      <div>
        <div className="container mx-auto flex items-center">
          <div className={`hidden md:blockpy-4 px-2 bg-[${currentColor.backgroundSecondary}] rounded-[20px]`}>
            {/* {
              window.innerWidth < 920 ? (
                <span className='mr-4'>oficialwellington@gmail.com</span>
              ) : (
                
              )
            } */}

            {
              screenWidth ? (
                <span className='mr-4'>Email</span>
              ) : (
                <span className='mr-4'>oficialwellington@gmail.com</span>  
              )
            }
            <span onClick={copyEmail} className={`bg-[${currentColor.backgroundTertiary}] rounded-[20px] py-2 px-6 cursor-pointer font-semibold transition duration-300 ease-in-out hover:bg-[${currentColor.primary}] hover:text-white`}>Copy</span>
          </div>

          <div className={`md:block bg-[${currentColor.backgroundSecondary}] rounded-[20px] ml-4 px-2 py-4`}>
            <span className='mr-4'>Curriculo</span>
            <span className={`bg-[${currentColor.backgroundTertiary}] rounded-[20px] py-2 px-6 cursor-pointer font-semibold transition duration-300 ease-in-out hover:bg-[${currentColor.primary}] hover:text-white`}>Download</span>
          </div>

          <nav className="w-full flex justify-end items-center">
            <div className="hidden md:flex space-x-6">
              <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                <li>
                  <Link to={'/'} className={`font-semibold ${activeLink === 'Home' ? `text-[${currentColor.textTransparent}]` : `text-[${currentColor.textTransparent}]`} hover:text-purple-600`} onClick={() => handleLinkClick('Home')}>Home</Link>
                </li>
                <li>
                  <Link to={'/projetos'} className={`font-semibold ${activeLink === 'Projetos' ? `text-[${currentColor.textTransparent}]` : `text-[${currentColor.textTransparent}]`} hover:text-purple-600`} onClick={() => handleLinkClick('Projetos')}>Projetos</Link>
                </li>
                <li>
                  <a href="#contato" className={`font-semibold ${activeLink === 'Contato' ? `text-[${currentColor.textTransparent}]` : `text-[${currentColor.textTransparent}]`} hover:text-purple-600`} onClick={() => handleLinkClick('Contato')}>Contato</a>
                </li>
              </ul>
            </div>

            <ThemeToggleButton />

            <div className="md:hidden">
              <FaBars className="text-2xl cursor-pointer" onClick={toggleMobileNav} />
            </div>
          </nav>
        </div>
      </div>
      <MobileNavbar isOpen={isMobileNavOpen} onClose={toggleMobileNav} />
    </header>

  );
};

export default Header;