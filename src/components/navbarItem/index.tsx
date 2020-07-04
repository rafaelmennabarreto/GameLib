import React from 'react'
import { FaPlusCircle } from 'react-icons/fa'
import './navbarItem.css'

interface INavbarItem {
  title: string
}

const NavbarItem: React.FC<INavbarItem> = ({ title }: INavbarItem) => {
  return (
    <div className="container-navbaritem">
      <FaPlusCircle color="white" />
      <span>
        {title}
      </span>
    </div>
  )
}

export default NavbarItem
