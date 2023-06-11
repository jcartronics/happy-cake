import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='nav-list'>
            <li>
                <NavLink to={"/"}><i>🏠</i>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/contacto"}><i>📒</i>Contacto</NavLink>
            </li>
        </ul>
        <div className="logo">
            <Link to={"/"}>Happy Cake</Link>
            <i>🎂</i>
        </div>
    </div>
  )
}
