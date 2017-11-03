import React, {Component} from 'react'
import Landing from '../components/Landing'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Nav from '../components/Nav'
import About from '../components/About'

class App extends Component{
  render(){
    return(
      <div className="container main">
        <BrowserRouter>
          <Landing/>
          <Nav/>
          <About/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App