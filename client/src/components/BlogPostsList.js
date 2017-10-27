import React from 'react'
import BlogPostListCard from './BlogPostListCard'
const BlogPostList = ({blogPosts}) => {
  
  const posts = blogPosts.map((post) => {
    return(
      <BlogPostListCard key={post.id} postData={post}/>
    )
  })

  return(
    <div>
      {posts}
    </div>
  )
}

export default BlogPostList