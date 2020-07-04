import React from 'react'
import { FaSearch } from 'react-icons/fa'
import './header.css'

const HeaderBar: React.FC = () => {
  return (
    <div className="container">
      <div className="searchbar-container">
        <FaSearch />
        <input type="text"/>
      </div>
    </div>
  )
}

export default HeaderBar
