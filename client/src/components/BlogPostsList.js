import React from 'react'
import {connect} from 'react-redux'
import BlogPostListCard from './BlogPostListCard'

const BlogPostList = ({blogPosts}) => {


  const renderedBlogPosts = blogPosts.map((bp)=>{

    return(
      <BlogPostListCard key={bp.id} bpData={bp}/>
    )
  })

  console.log(renderedBlogPosts)
  
  return(
    <div>
      <h4>Blog Posts</h4>
      {renderedBlogPosts}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {blogPosts: state.blogPostReducer}
}

export default connect(mapStateToProps)(BlogPostList)