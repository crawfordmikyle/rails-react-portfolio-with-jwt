import React from 'react'

const BlogPostListCard = ({projectData}) => {
  return(
    <div>
      <h5>{projectData.title}</h5>
      <p>{projectData.description}</p>
      <a href="">GitHub Link</a>
    </div>
  )
}

export default BlogPostListCard