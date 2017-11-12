import React, {Component} from 'react'
import Login from './Login'
import AdminHeading from '../components/admin/AdminHeading'
class MainAdmin extends Component{å
   
  render(){
    return(
      <div>
        <AdminHeading/>
        <Login />
      </div>
    )
  }
}

export default MainAdmin