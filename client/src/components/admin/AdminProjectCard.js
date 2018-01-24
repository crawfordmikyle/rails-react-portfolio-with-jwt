import React from 'react'
import {Link} from 'react-router-dom'
const AdminProjectCard = ({projectData}) => {
  return(
    <div className="AdminProjectCard">
      <h4>{projectData.title}</h4>
      <p>{projectData.description}</p>
      <a href="">GitHub</a>
      <Link className='projectLink' to={`/admin/projects/${projectData.id}`}>Edit</Link>
    </div>
  )
}

export default AdminProjectCard