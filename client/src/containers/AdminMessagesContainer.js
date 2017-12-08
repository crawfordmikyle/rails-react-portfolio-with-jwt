import React, {Component} from 'react'
import {connect} from 'react-redux'

class AdminMessagesContainer extends Component {
  
  componentDidMount(){

  }

  render(){
    return(
      <div className="AdminMessagesContainer">

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({})
}

export default connect(mapStateToProps)(AdminMessagesContainer)