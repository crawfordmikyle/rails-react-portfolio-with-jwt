import React from 'react'

const BlogPostListCard = ({projectData}) => {
  return(
    <div>
      <h4>{projectData.title}</h4>
      <p>{projectData.description}</p>
    </div>
  )
}

export default BlogPostListCard