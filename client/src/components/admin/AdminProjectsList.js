import React from 'react'
import AdminProjectsContainer from '../../containers/AdminProjectsContainer'
const AdminProjectsList = () => {
  const renderedProjects = this.props.projects.map((p)=>{
    return(
      <ProjectCard projectData={} key={} />
    )
  })
  return(
    <div>
      <h2>Admin Projects List</h2>
    </div>
  )
}

export default AdminProjectsList