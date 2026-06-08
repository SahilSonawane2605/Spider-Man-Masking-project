import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
  <span style={{ color: 'red' }}>SPIDER</span>
  <span style={{ color: 'yellow' }}>-</span>
  <span style={{ color: 'white' }}>MAN</span>
</div>

      <ul className="nav-links">
        <li>🕷️ THE HERO</li>
        <li>PETER PARKER</li>
        <li>NEW YORK</li>
        <li>THE ROGUES</li>
        <li>THE RESPONSIBILITY</li>
      </ul>
    </nav>
  )
}

export default Navbar