import React from 'react'

const AdminBlogPostCard = ({blogPostData}) => {
  return(
    <div className="AdminProjectCard">
      <h4>{blogPostData.title}</h4>
      <p>{blogPostData.description}</p>
      <a href="">GitHub</a>
    </div>
  )
}

export default AdminBlogPostCard