import React, {Component} from 'react'
import About from '../components/About'
import Landing from '../components/Landing'
import Nav from '../components/Nav'
import ProjectsContainer from './ProjectsContainer'

class MainPage extends Component{

  render(){
    return(
      <div>
        <Landing />
        <About />
        <ProjectsContainer />
      </div>
    )
  }
}

export default MainPage