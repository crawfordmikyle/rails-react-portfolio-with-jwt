import React,{Component} from 'react';
import {connect} from 'react-redux';

class NewBlogPost extends Component {
  render(){
    return(
      <div className='container'>
        <h4>NewBlogPost</h4>
      </div>
    )
  }
};

export default connect(null)(NewBlogPost);