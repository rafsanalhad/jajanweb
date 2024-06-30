import React, { useState, useEffect } from "react";
import NavLink from "./NavLink"; // Pastikan Anda memiliki file CSS yang sesuai

const Navbar = () => {
  const navLinks = [
    { href: "/", name: "Why a website?" },
    { href: "/about", name: "Why us?" },
    { href: "/contact", name: "Types of Website" },
    { href: "", name: "Our Portofolio" },
    { href: "", name: "Package Choices" },
    { href: "", name: "Client Reviews" },
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
      className={`navbar shadow-2xl px-10 py-5 sticky top-0 z-50 ${scrollPosition > 300 ? 'bg-[#fff]' : 'bg-[#ADECFF]'}`}
      style={{ height: "100px" }}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="navbar-brand">
          <h3 className="font-bold text-[32px] text-[#0597FA]">Jajanweb</h3>
        </div>
        <div className="navbar-nav">
          <ul className="flex flex-row items-center">
            {navLinks.map((navLink, index) => (
              <NavLink key={index} href={navLink.href} name={navLink.name} />
            ))}
          </ul>
        </div>
        <div className="button-navbar">
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
