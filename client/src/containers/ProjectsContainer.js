import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getProjectsApi} from '../actions/projectActions'

class ProjectsContainer extends Component {
  componentDidMount(){

  }

  render(){
    return(
      <div className="Projects">
        <h1>Projects</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

}

export default connect(null)(ProjectsContainer)