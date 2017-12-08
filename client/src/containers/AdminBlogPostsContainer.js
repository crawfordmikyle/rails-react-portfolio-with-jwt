import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getBlogPostsApi} from '../actions/blogPostActions'
import AdminBlogPostsList from '../components/admin/AdminBlogPostsList'

class AdminBlogPostsContainer extends Component {

  componentDidMount(){
    this.props.getBlogPostsApi()
  }

  render(){
    return(
      <div className="AdminBlogPostsContainer">
        <h2>BlogPosts</h2>
        <AdminBlogPostsList blogPosts={this.props.blogPosts}/>
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