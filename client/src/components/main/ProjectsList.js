import React from 'react'
import {connect} from 'react-redux'
import ProjectListCard from './ProjectListCard'

const ProjectList = ({projects}) => {


  const renderedProjects = projects.map((project)=>{
    return(
      <ProjectListCard key={project.id} projectData={project}/>
    )
  })
  
  return(
    <div className='projects row'>
      <div className='twelve columns '>
        <h4 className='sectionHeading'>Projects</h4>
      </div>
      <div>
        {renderedProjects}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {projects: state.projectsReducer}
}

export default connect(mapStateToProps)(ProjectList)