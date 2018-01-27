import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addBlogPostApi} from '../../actions/blogPostActions';

class NewBlogPost extends Component {
  constructor(){
    super();

    this.state = {
      title: '',
      body: ''
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
          <label htmlFor="title">Title:</label>
          <input type="text" id='title' value={this.state.title} onChange={event => this.handleOnChange(event)} />

          <label htmlFor=" body">Content:</label>
          <input type="text" id='body' value={this.state.content} onChange={event => this.handleOnChange(event)} />

          <input type='submit' value='post'/>
        </form>
      </div>
    )
  }
};

export default connect(null,{addBlogPostApi})(NewBlogPost);