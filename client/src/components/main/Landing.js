import React from 'react'
import '../landing.css'
const Landing = () => {
  return(
    <div className="landing">
      <div className="imgDiv">
        <img id="headshot" src="https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/18402888_10211333915857890_5938430278944942552_n.jpg?oh=a7ab968a7a1820d6578fe3af22b987f3&oe=5A77831F"/>
      </div>
      <div className="textDiv">
        <h1 id="name">Mikyle A. Crawford</h1>
        <br/>
        <h3 id="title">Full Stack Developer</h3>
      </div>
    </div>
  )
}

export default Landing