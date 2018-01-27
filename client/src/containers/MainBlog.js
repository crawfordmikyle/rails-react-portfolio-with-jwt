import React, {Component} from 'react';
import BlogPostsContainer from './BlogPostsContainer';
import BlogHeading from '../components/blog/BlogHeading';

class MainBlog extends Component{
  
  componentDidMount(){
    document.title = 'Back 2 Blocks';
  }

 render(){
    return(
      <div className='container'>
      	<BlogHeading />
        <BlogPostsContainer />
      </div>
    )
  }
};

export default MainBlog;