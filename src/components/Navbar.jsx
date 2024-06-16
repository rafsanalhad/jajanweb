import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  const navLinks = [
    { href: "/", name: "Why a website?" },
    { href: "/about", name: "Why us?" },
    { href: "/contact", name: "Types of Website" },
    { href: "", name: "Our Portofolio" },
    { href: "", name: "Package Choices" },
    { href: "", name: "Client Reviews" },
  ];
  return (
    <nav
      className="navbar shadow-2xl bg-light px-10 py-5"
      style={{
        height: "100px",
        backgroundColor: "#ADECFF",
      }}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="navbar-brand">
          <h3 className="font-bold text-[32px] text-[#0597FA]">Jajanweb</h3>
        </div>
        <div className="navbar-nav">
          <ul class="flex flex-row items-center">
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
