import React,{Component} from 'react';
import {connect} from 'react-redux';

class EditBlogPost extends Component {
  render(){
    return(
      <div className='container'>
        <h4>EditBlogPost</h4>
      </div>
    )
  }
};

export default connect(null)(EditBlogPost);