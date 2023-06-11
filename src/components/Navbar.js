import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='nav-list'>
            <li>
                <a href="../views/Home"><i>🏠</i>Home</a>
            </li>
            <li>
                <a href="../views/Contacto"><i>📒</i>Contacto</a>
            </li>
        </ul>
        <div className="logo">
            <a>Happy Cake</a>
            <i>🎂</i>
        </div>
    </div>
  )
}
