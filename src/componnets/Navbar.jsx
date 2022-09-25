import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/about'>Useres</Link>
        </div>
    </div>
  )
}

export default Navbar