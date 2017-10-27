import React, {Component} from 'react'
import Landing from '../components/Landing'
import Nav from '../components/Nav'
import BlogPostsContainer from './BlogPostsContainer'
class App extends Component{
  render(){
    return(
      <div className="container main">
          <Landing/>
          <Nav/>
          <BlogPostsContainer/>
      </div>
    )
  }
}

export default App