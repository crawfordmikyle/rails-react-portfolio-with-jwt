import React, {Component} from 'react'
import Landing from '../components/Landing'
import Nav from '../components/Nav'
import BlogPostsContainer from './BlogPostsContainer'
import ProjectsContainer from './ProjectsContainer'
import About from '../components/About'
class App extends Component{
  render(){
    return(
      <div className="container main">
          <Landing/>
          <Nav/>
          <About/>
          <BlogPostsContainer/>
          <ProjectsContainer/>
      </div>
    )
  }
}

export default App