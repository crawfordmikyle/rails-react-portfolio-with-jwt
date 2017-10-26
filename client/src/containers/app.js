import React, {Component} from 'react'
import Landing from '../components/Landing'
import Nav from '../components/Nav'
class App extends Component{
  render(){
    return(
      <div>
        <Landing/>
        <Nav/>
        <h1>Welcome</h1>
      </div>
    )
  }
}

export default App