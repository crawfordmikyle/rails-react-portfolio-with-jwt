import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getBlogPostsApi} from '../actions/blogPostActions'
import BlogPostsList from '../components/blog/BlogPostsList'

class BlogPostsContainer extends Component {
  
  componentDidMount(){
    this.props.getBlogPostsApi()
  };

  render(){
    return(
      <BlogPostsList/>
    )
  }
};

const mapStateToProps = (state) => {
  return {blogPosts: state.blogPostReducer}
};

export default connect(mapStateToProps,{getBlogPostsApi})(BlogPostsContainer);