import React from 'react'

const NavLink = ({href, name}) => {
  return (
    <li><a href={href} className="me-3">{name}</a></li>
  )
}

export default NavLink
