import React from 'react'
import projectImg from '../../media/projectImg.jpeg'

const BlogPostListCard = ({projectData}) => {
  return(
    <div className='projectCard'>
      <img src={projectImg} alt="" className="projectCardImg"/>
      <h5 className="projectTitle">{projectData.title}</h5>
      <p className="projectDescription">{projectData.description}</p>
      <a href="">GitHub Link</a>
    </div>
  )
}

export default BlogPostListCard