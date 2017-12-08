import React from 'react'

const AdminProjectCard = ({projectData}) => {
  return(
    <div className="AdminProjectCard">
      <h4>{projectData.title}</h4>
      <p>{projectData.description}</p>
      <a href="">GitHub</a>
    </div>
  )
}

export default AdminProjectCard