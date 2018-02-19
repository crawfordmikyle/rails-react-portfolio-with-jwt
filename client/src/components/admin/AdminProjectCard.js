import React from 'react';
import {Link} from 'react-router-dom';

// external link does not work 

const AdminProjectCard = ({projectData}) => {
  return(
    <div className="adminCard">
      <h4>{projectData.title}</h4>
      <p>{projectData.description}</p>
      <a className='adminLink' href={projectData.github_url}>GitHub</a>
      <Link className='adminLink' to={`/admin/projects/${projectData.id}`}>Edit</Link>
    </div>
  )
};

export default AdminProjectCard;