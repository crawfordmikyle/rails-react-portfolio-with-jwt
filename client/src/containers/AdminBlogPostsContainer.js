import React, {Component} from 'react'
import {connect} from 'react-redux'

class AdminBlogPostsContainer extends Component {
  
  componentDidMount(){

  }

  render(){
    return(
      <div className="AdminBlogPostsContainer">

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({})
}

export default connect(mapStateToProps)(AdminBlogPostsContainer)