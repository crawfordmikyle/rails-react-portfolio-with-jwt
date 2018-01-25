import React from 'react';
import {connect} from 'react-redux';
import BlogPostListCard from './BlogPostListCard';

const BlogPostList = ({blogPosts}) => {


  const renderedBlogPosts = blogPosts.map((bp)=>{
    return(
      <BlogPostListCard key={bp.id} bpData={bp}/>
    )
  })
  
  return(
    <div className="blogPostList">
      <br/>
      <div className="renderedBlogPosts">
        {renderedBlogPosts}
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {blogPosts: state.blogPostReducer}
};

export default connect(mapStateToProps)(BlogPostList);