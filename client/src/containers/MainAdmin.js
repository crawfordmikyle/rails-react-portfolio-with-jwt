import React, {Component} from 'react'
import {connect} from 'react-redux'
import Login from './Login'
import AdminHeading from '../components/admin/AdminHeading'
import AdminPostsList from '../components/admin/AdminPostsList'
import AdminProjectsList from '../components/admin/AdminProjectsList'
import AdminMessageList from '../components/admin/AdminMessageList'

class MainAdmin extends Component{
  render(){
    // TODO figure out more secure front end login method
    if (this.props.login.isAuthenticated === true) {
      return(
        <div>
          <AdminHeading />
          <AdminProjectsList />
          <AdminPostsList/>
          <AdminMessageList/>
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

const mapStateToProps = (state) => {
  return{
    login: state.loginReducer
  }
}

export default connect(mapStateToProps)(MainAdmin)