import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getBlogPostsApi} from '../actions/blogPostActions'

class BlogPostsContainer extends Component {
  componentDidMount(){
    getBlogPostsApi()
  }

  render(){
    return(
      <div>
        this is the BlogPostContainer
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return({
    state
  })
}

export default connect(mapStateToProps,getBlogPostsApi)(BlogPostsContainer)