import React, { useState, useEffect } from "react";
import NavLink from "./NavLink"; // Pastikan Anda memiliki file CSS yang sesuai

const Navbar = () => {
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
      className={`navbar shadow-2xl lg:px-10 lg:h-[100px] md:h-[50px] sm:md-[50px] md:px-6 sm:px-6 px-6 py-5 sticky top-0 z-50 ${scrollPosition > 300 ? 'bg-[#fff]' : 'bg-[#fff]'}`}
     
    >
      <div className="flex flex-row justify-between items-center">
        <div className="navbar-brand">
          <h3 className="font-bold lg:text-[32px] lg:mt-0 md:mt-0 sm:mt-0 mt-0 md:text-[22px] sm:text-[22px] text-[22px] text-[#0597FA]">Jajanweb</h3>
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
    </nav>
  );
};

export default Navbar;
