import React from 'react';
import AdminBlogPostCard from './AdminBlogPostCard';

const AdminBlogPostsList = ({blogPosts}) => {
  const renderedBlogPosts = blogPosts.map((blogPost)=>{
    return(
      <AdminBlogPostCard key={blogPost.id} blogPostData={blogPost} />
    )  
  })

  return(
    <div>
      {renderedBlogPosts}
    </div>
  )
};

export default AdminBlogPostsList;