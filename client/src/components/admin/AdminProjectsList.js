import React from 'react';
import AdminProjectCard from './AdminProjectCard';

const AdminProjectsList = ({projects}) => {
  const renderedProjects = projects.map((project)=>{
    return(
      <AdminProjectCard key={project.id} projectData={project} />
    )
  });

  return(
    <div>
      {renderedProjects}
    </div>
  )
};

export default AdminProjectsList;