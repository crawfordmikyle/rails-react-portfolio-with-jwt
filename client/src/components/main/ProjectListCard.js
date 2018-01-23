import React from 'react'

const BlogPostListCard = ({projectData}) => {
  return(
    <div className="projectCard">
      <img src="http://via.placeholder.com/350x150" alt="" className="projectImage"/>
      <h5 className="projectTitle">{projectData.title}</h5>
      <p className="projectDescription">{projectData.description}</p>
      <a href="">GitHub Link</a>
    </div>
  )
}

export default BlogPostListCard