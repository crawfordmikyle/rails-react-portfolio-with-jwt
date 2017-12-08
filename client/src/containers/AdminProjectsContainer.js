import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getProjectsApi} from '../actions/projectActions'

class AdminProjectsContainer extends Component {
  
  componentDidMount(){
    this.props.getProjectsApi()
  }

  render(){
    return(
      <div className="AdminProjectsContainer">

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    projects: state.projectsReducer
  })
}

export default connect(mapStateToProps,{getProjectsApi})(AdminProjectsContainer)