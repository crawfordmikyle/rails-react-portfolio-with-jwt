import React from 'react';
import headshot from '../../media/headshot.jpg'
const Landing = () => {
  return(
    <div className="landing">

      <section className="headshot">
        <img id="headshot" src={headshot} alt='img not found'/>  
      </section>
      
      <section className="textDiv">
        <h1 id="landingName">Mikyle A. Crawford</h1>
        <br/>
        <h3 id="pageTitle">Full Stack Developer</h3>
        <br/>
      </section>

      <section>
        <button className='contactButton'>Hire Me!</button>
      </section>

    </div>
  )
};

export default Landing;