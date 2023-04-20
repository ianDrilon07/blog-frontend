import React from 'react'

interface DropdownTypes {
  isOpen: boolean
  menuItems: Array<any>
}

const Dropdown: React.FC<DropdownTypes> = ({ isOpen, menuItems }) => {
  return (
    <ul className={`menu-nav ${isOpen ? 'show-menu' : ''}`}>
      {menuItems.map((el) => (
        <li key={el.title} className='menu-item' onClick={() => el.action()}>
          <i>{el.icon}</i>
          <span>{el.title}</span>
        </li>
      ))}
    </ul>
  )
}

export default Dropdown
