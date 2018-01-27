import React,{Component} from 'react';
import {connect} from 'react-redux';

class EditBlogPost extends Component {
  constructor({blogPostData}){
    super();
  }

  componentDidMount(){

  }

  render(){
    return(
      <div className='container'>
        <h4>NewBlogPost</h4>
        <form>
          <label htmlFor="">Title:</label>
          <input type="text"/>

          <label htmlFor="">Content:</label>
          <input type="text"/>

          <input type='submit' value='post'/>
        </form>
      </div>
    )
  }
};

export default connect(null)(EditBlogPost);