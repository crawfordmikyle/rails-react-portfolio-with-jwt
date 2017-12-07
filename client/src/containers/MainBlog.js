import React, {Component} from 'react'
import BlogPostsContainer from './BlogPostsContainer'
import BlogHeading from '../components/blog/BlogHeading'
class MainBlog extends Component{
 render(){
    return(
      <div>
      	<BlogHeading/>
        <BlogPostsContainer/>
      </div>
    )
  }
}

export default MainBlog