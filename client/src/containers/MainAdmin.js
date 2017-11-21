import React, {Component} from 'react'
import Login from './Login'
import AdminHeading from '../components/admin/AdminHeading'
import AdminPostsList from '../components/admin/AdminPostsList'
import AdminProjectsList from '../components/admin/AdminProjectsList'
class MainAdmin extends Component{
  
  render(){
    // Temp auth rendering replace with something secure
    if (window.sessionStorage.length !== 0) {
      return(
        <div>
          <AdminHeading />
          <AdminProjectsList />
          <AdminPostsList/>
        </div>
      )
    } else {
      return(
        <div>
          <AdminHeading />
          <Login />
        </div>
      )
    }
  }
}

export default MainAdmin