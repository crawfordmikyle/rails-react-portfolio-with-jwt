import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Landing from '../components/Landing';
import Nav from '../components/Nav';
import BlogPostsContainer from './BlogPostsContainer';
import ProjectsContainer from './ProjectsContainer';
import About from '../components/About';

class App extends Component{
  render(){
    return(
      <Router>
        <div className="container main">
          <Landing/>
          <Nav/>
          <About/>
          <BlogPostsContainer/>
          <ProjectsContainer/>
        </div>
      </Router>
    )
  }
}

export default App