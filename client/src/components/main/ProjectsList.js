import React from 'react'
import {connect} from 'react-redux'
import ProjectListCard from './ProjectListCard'
import './projects.css'
const ProjectList = ({projects}) => {


  const renderedProjects = projects.map((project)=>{
    return(
      <ProjectListCard key={project.id} projectData={project}/>
    )
  })
  
  return(
    <div className='projects'>
      <div className='heading'>
        <h4>Projects</h4>
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