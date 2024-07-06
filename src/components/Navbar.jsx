import React, { useState, useEffect } from "react";
import NavLink from "./NavLink"; 
import { FaBars, FaTimes } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import NavLinkMobile from './NavLinkMobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMdScreen = useMediaQuery({ minWidth: 768 });

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    // If the screen size is medium or larger, close the menu
    if (isMdScreen) {
      setIsOpen(false);
    }
  }, [isMdScreen]);

  const navLinks = [
    { href: "/", name: "Why a website?" },
    { href: "/about", name: "Why us?" },
    { href: "/contact", name: "Types of Website" },
    { href: "", name: "Package Choices" },
  ];
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar shadow-2xl lg:px-10 lg:h-[100px] md:h-[80px] sm:h-[80px] md:px-0 sm:px-0 px-0 py-5 sticky top-0 z-50 ${scrollPosition > 300 ? 'bg-[#fff]' : 'bg-[#fff]'}`}
     
    >
      <div className="flex flex-row justify-between items-center">
        <div className="navbar-brand">
          <h3 className="font-bold lg:ps-0 md:ps-6 sm:ps-5 ps-5 lg:text-[32px] lg:mt-0 md:mt-0 sm:mt-0 mt-0 md:text-[22px] sm:text-[18px] text-[18px] text-[#0597FA]">Jajanweb</h3>
        </div>
        <div className="barsMobile lg:hidden block lg:pe-0 md:pe-6 sm:pe-5 pe-5">
        <FaBars onClick={handleToggle} style={{color: '#0597FA'}}/>
        </div>
        <div className="navbar-nav hidden lg:block">
          <ul className="flex flex-row items-center">
            {navLinks.map((navLink, index) => (
              <NavLink key={index} href={navLink.href} name={navLink.name} />
            ))}
          </ul>
        </div>
        <div className="button-navbar hidden lg:block">
          <button
            className="px-3 py-3 bg-[#0597FA] border-none rounded-[16px]"
            style={{ color: "white" }}
          >
            Pesan Sekarang
          </button>
        </div>
      </div>
        <div className={`navMobile mt-6 bg-[#fff] ${isOpen ? 'show' : 'hidden'} lg:ps-0 md:ps-6 sm:ps-5 ps-5`}>
          <ul className="navbar-nav">
            {navLinks.map((navLink, index) => (
              <NavLinkMobile key={index} href={navLink.href} name={navLink.name} />
            ))}
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;
