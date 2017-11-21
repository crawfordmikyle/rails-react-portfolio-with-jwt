import React, {Component} from 'react'
import Login from './Login'
import AdminHeading from '../components/admin/AdminHeading'
import AdminPostsList from '../components/admin/AdminPostsList'
import AdminProjectsList from '../components/admin/AdminProjectsList'
class MainAdmin extends Component{å
   
  render(){
    return(
      <div>
        <AdminHeading />
        <Login />
        <AdminProjectsList />
        <AdminPostsList/>
      </div>
    )
  }
}

export default MainAdmin