import React from "react";

const NavLinkMobile = ({ href, name }) => {
  return (
    <li className="mb-5">
      <a href={href} className="me-3">
        {name}
      </a>
   
    </li>
  );
};

export default NavLinkMobile;
