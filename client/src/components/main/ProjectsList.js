import React from 'react'
import {connect} from 'react-redux'
import ProjectListCard from './ProjectListCard'

const ProjectList = ({projects}) => {


  const renderedProjects = projects.map((bp)=>{
    return(
      <ProjectListCard key={bp.id} bpData={bp}/>
    )
  })
  console.log(renderedProjects)
  return(
    <div>
      {renderedProjects}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {projects: state.projectsReducer}
}

export default connect(mapStateToProps)(ProjectList)