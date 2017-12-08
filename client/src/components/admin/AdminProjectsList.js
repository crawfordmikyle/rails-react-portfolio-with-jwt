import React from 'react'
import AdminProjectsContainer from '../../containers/AdminProjectsContainer'
import AdminProjectCard from './AdminProjectCard'

const AdminProjectsList = ({projects}) => {
  const renderedProjects = projects.map((project)=>{
    return(
      <AdminProjectCard key={project.id} projectData={project} />
    )
  })

  return(
    <div>
      <h2>Admin Projects List</h2>
      {renderedProjects}
    </div>
  )
}

export default AdminProjectsList