import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getMessagesApi} from '../actions/messageActions'

class AdminMessagesContainer extends Component {
  
  componentDidMount(){
    this.props.getMessagesApi()
  }

  render(){
    return(
      <div className="AdminMessagesContainer">
        <h4>Messages</h4>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    messages: state.messageReducer
  })
}

export default connect(mapStateToProps,{getMessagesApi})(AdminMessagesContainer)