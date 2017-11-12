import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getProjectsApi} from '../actions/projectActions'
import ProjectsList from '../components/main/ProjectsList'
class ProjectsContainer extends Component {
  componentDidMount(){
    this.props.getProjectsApi()
  }

  render(){
    return(
      <div className="Projects">
        <h1>Projects</h1>
        <ProjectsList/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    projects: state.projects
  })
}

export default connect(mapStateToProps,{getProjectsApi})(ProjectsContainer)