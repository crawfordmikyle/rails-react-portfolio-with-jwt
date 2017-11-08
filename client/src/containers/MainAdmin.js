import React, {Component} from 'react'
import Login from './Login'
import Admin from './Admin'
class MainAdmin extends Component{å
   
  render(){
    return(
      <div>
        <p>Testing Admin</p>
        <Login />
        <Admin />
      </div>
    )
  }
}

export default MainAdmin