import React, {Component} from 'react'
import {connect} from 'react-redux'
import Login from './Login'
import AdminHeading from '../components/admin/AdminHeading'
import AdminBlogPostsContainer from './AdminBlogPostsContainer'
import AdminMessagesContainer from './AdminMessagesContainer'
import AdminProjectsContainer from './AdminProjectsContainer'
import EditProject from './EditProject'
class MainAdmin extends Component{
  render(){
    // TODO figure out more secure front end login method
    if (this.props.login.isAuthenticated === true) {
      return(
        <div>
          <AdminHeading />
          <AdminProjectsContainer />
          <AdminMessagesContainer />
          <AdminBlogPostsContainer />
          <EditProject />
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