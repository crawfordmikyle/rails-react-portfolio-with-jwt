import React, {Component} from 'react'
import {connect} from 'react-redux'
import Login from './Login'
import AdminHeading from '../components/admin/AdminHeading'
import AdminPostsList from '../components/admin/AdminPostsList'
import AdminProjectsList from '../components/admin/AdminProjectsList'
import loginReducer from '../reducers/loginReducer'
class MainAdmin extends Component{
  componentDidMount(){
    console.log()
  } 
  render(){
    // Temp auth rendering replace with something secure
    if (1+1!==2) {
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

const mapStateToProps = (state) => {
  return{
    login: state.loginReducer
  }
}

export default connect(mapStateToProps)(MainAdmin)