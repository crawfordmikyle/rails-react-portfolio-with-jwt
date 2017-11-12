import React, {Component} from 'react'
import About from '../components/main/About'
import Landing from '../components/main/Landing'
import Nav from '../components/Nav'
import ProjectsContainer from './ProjectsContainer'

class MainPage extends Component{

  render(){
    return(
      <div>
        <Landing />
        <Nav/>
        <About />
        <ProjectsContainer />
      </div>
    )
  }
}

export default MainPage