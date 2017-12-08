import React from 'react'
import AdminBlogPostCard from './AdminBlogPostCard'

const AdminBlogPostsList = ({blogPosts}) => {
  const renderedBlogPosts = blogPosts.map((blogPost)=>{
    return(
      <AdminBlogPostCard key={blogPost.id} blogPostData={blogPost} />
    )  
  })

  return(
    <div>
      <h2>Admin Posts List</h2>
      {renderedBlogPosts}
    </div>
  )
}

export default AdminBlogPostsList