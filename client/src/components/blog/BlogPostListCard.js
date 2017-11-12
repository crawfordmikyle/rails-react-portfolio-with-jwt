import React from 'react'

const BlogPostListCard = ({bpData}) => {
  return(
    <div className="blogPostCard">
      <h5>{bpData.title}</h5>
      <p>{bpData.body}</p>
    </div>
  )
}

export default BlogPostListCard