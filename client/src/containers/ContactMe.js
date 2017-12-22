import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addMessageApi} from '../actions/messageActions'

class ContactMe extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      message_text: '',
      phone: '',
    }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]:event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addMessageApi(this.state)
    this.props.history.push('/')
  }

  render(){
    return(
      <div className="contact">
      
        <div className='heading'>
          <h4>Contact Me</h4>
        </div>
        <div className=''>
          <form onSubmit={(event)=>this.handleOnSubmit(event)}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={this.state.names} onChange={(event)=>this.handleOnChange(event)}/>

            <label htmlFor="email"> Email</label>
            <input type="email" id="email" value={this.state.email} onChange={(event)=>this.handleOnChange(event)} />

            <label htmlFor="message_text">Message</label>
            <input type="text" id="message_text" value={this.state.message} onChange={(event)=>this.handleOnChange(event)} />
            
            <label htmlFor="phone"> Phone</label>
            <input type="phone" id="phone" value={this.state.phone} onChange={(event)=>this.handleOnChange(event)} />

            <input type="submit"/>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null,{addMessageApi})(ContactMe)

