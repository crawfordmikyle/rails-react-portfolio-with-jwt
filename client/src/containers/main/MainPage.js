import React, {Component} from 'react'
import About from '.../components/main/About'
import Landing from '.../components/main/Landing'
import Nav from '.../components/Nav'
import ProjectsContainer from './ProjectsContainer'
import ContactMe from './ContactMe'
class MainPage extends Component{

  render(){
    return(
      <div>
        <Landing />
        <Nav/>
        <About />
        <ProjectsContainer />
        <ContactMe />
      </div>
    )
  }
}

export default MainPage