import React, {Component} from 'react'
import connect from 'react-redux'
import getBlogPostsApi from '../actions/blogPostActions'

class BlogPostContainer extends Component {
  componentDidMount(){
    debugger
  }

  render(){
    return(
      <div>

      </div>

    )
  }
}

const mapStateToProps = (state) =>{
  return({
    state
  })
}

export connect(null,getBlogPostsApi)(BlogPostContainer)