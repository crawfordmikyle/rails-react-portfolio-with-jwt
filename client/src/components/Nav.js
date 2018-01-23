import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return(
    <div className="container nav">
      <nav>
       <ul className="nav ul">
        <li><Link to="/">Home</Link></li>
        <li><Link key="about" to="/#about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/">Contact</Link></li>
        <li><Link to="/admin">Login</Link></li>
       </ul>
      </nav>
    </div>
  )
}

export default Nav