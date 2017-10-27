import React, {Component} from 'react'
import Landing from '../components/Landing'
import Nav from '../components/Nav'
import BlogPostsContainer from './BlogPostsContainer'
class App extends Component{
  render(){
    return(
      <div className="container main">
        <div className="row">
           <Landing/>
        </div>
        <Nav/>
        <h1>Welcome</h1>
        <div className="row">
          <BlogPostsContainer/>
        </div>
      </div>
    )
  }
}

export default App