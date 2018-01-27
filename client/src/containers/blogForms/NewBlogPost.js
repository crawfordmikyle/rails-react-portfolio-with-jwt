import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addBlogPostApi} from '../../actions/blogPostActions';

class NewBlogPost extends Component {
  constructor(){
    super();

    this.state = {
      blogPostTitle: '',
      blogPostContent: ''
    }
  }

  componentDidMount(){

  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]:event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addBlogPostApi(this.state)
    this.props.history.push('/admin')
  }

  render(){
    return(
      <div className='container'>
        <h4>NewBlogPost</h4>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <label htmlFor="blogPostTitle">Title:</label>
          <input type="text" id='blogPostTitle' value={this.state.title} onChange={event => this.handleOnChange(event)} />

          <label htmlFor="blogPostContent">Content:</label>
          <input type="text" id='blogPostContent' value={this.state.content} onChange={event => this.handleOnChange(event)} />

          <input type='submit' value='post'/>
        </form>
      </div>
    )
  }
};

export default connect(null,{addBlogPostApi})(NewBlogPost);