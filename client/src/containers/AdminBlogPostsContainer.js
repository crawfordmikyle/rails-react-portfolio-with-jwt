import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getBlogPostsApi} from '../actions/blogPostActions'

class AdminBlogPostsContainer extends Component {
  
  componentDidMount(){
    this.props.getBlogPostsApi()
  }

  render(){
    return(
      <div className="AdminBlogPostsContainer">
        <h4>BlogPosts</h4>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    blogPosts: state.blogPostReducer
  })
}

export default connect(mapStateToProps,{getBlogPostsApi})(AdminBlogPostsContainer)