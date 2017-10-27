import React from 'react'
import BlogPostListCard from './BlogPostListCard'
const BlogPostList = ({blogPosts}) => {
  
  const renderedBlogPosts = blogPosts.map((post)=>{
    return(
      <BlogPostListCard post={post}/>
    )
  })
  
  return(
    <div>
      {renderedBlogPosts}
    </div>
  )
}

export default BlogPostList