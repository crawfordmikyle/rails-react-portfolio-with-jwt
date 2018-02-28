import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getBlogPostsApi} from '../actions/blogPostActions';
import AdminBlogPostsList from '../components/admin/AdminBlogPostsList';

class AdminBlogPostsContainer extends Component {

  componentDidMount(){
    if(this.props.blogPosts.length === 0){
      this.props.getBlogPostsApi()
    }
  }

  render(){
    return(
      <div className="AdminBlogPostsContainer container">
        <h4 className='sectionHeading'>BlogPosts</h4>
        <AdminBlogPostsList blogPosts={this.props.blogPosts}/>
        <Link to={"/admin/blog/new"} className='button'>New Blog Post</Link>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return({
    blogPosts: state.blogPostReducer
  })
};

export default connect(mapStateToProps,{getBlogPostsApi})(AdminBlogPostsContainer);