import React from 'react'
import './navbar.css'
import NavbarItem from 'components/navbarItem'

const NavBar: React.FC = () => {
  return (
    <div className="container-navbar">
      <p>menu</p>
      <NavbarItem title="Add Game"/>
    </div>
  )
}

export default NavBar
