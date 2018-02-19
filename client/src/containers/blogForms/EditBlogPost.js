import React,{Component} from 'react';
import {connect} from 'react-redux';
import {editBlogPostApi, deleteBlogPostApi} from '../../actions/blogPostActions'

class EditBlogPost extends Component {
  constructor({blogPostData}){
    super();
    this.state = {
      id: blogPostData.id,
      title: blogPostData.title,
      body: blogPostData.body,
    }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]:event.target.value
    })
  };

  updateBlogPost = (event) => {
    event.preventDefault();
    this.props.editBlogPostApi(this.state)
    this.props.history.push('/admin')
  }

  deleteBlogPost = (event) => {
    event.preventDefault();
    this.props.deleteBlogPostApi(this.state)
    this.props.history.push('/admin')
  }

  render(){
    return(
      <div className='container'>
        <h4>Edit Blog Post</h4>
        <form onSubmit={(event)=>this.updateBlogPost(event)}>
          <label htmlFor="title">Title:</label>
          <input type="text" id='title' value={this.state.title} onChange={(event)=>this.handleOnChange(event)}/>

          <label htmlFor="body">Body:</label>
          <input type="text" id='body' value={this.state.body} onChange={(event)=>this.handleOnChange(event)}/>

          <input type='submit' value='Update Blog Post'/>
        </form>
        <form onSubmit={(event)=>this.deleteBlogPost(event)}>
          <input type="submit" value='Delete Blog Post'/>
        </form>
      </div>
    )
  }
};

const mapStateToProps = (state,ownProps) => {
  const blogPostData = state.blogPostReducer.find((project)=>(project.id.toString() === ownProps.match.params.id))
  if(blogPostData){
    return({blogPostData: blogPostData})
  } else {
    return({blogPostData: {}})
  }
}

export default connect(mapStateToProps,{editBlogPostApi,deleteBlogPostApi})(EditBlogPost);