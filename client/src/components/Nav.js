import React from 'react'
const Nav = () => {
  return(
    <div className="nav">
     <ul className="nav ul">
      <li className="nav li">Home</li>
      <li>About</li>
      <li>Projects</li>
      <li><a href='/blog'>Blog</a></li>
      <li>Contact</li>
     </ul>
    </div>
  )
}

export default Nav