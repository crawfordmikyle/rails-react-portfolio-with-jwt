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
      sent: false,
    }
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]:event.target.value
    })
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addMessageApi(this.state)
    this.setState({
      name: '',
      email: '',
      message_text: '',
      phone: '',
      sent: true,
    })
  };

  render(){
    if(this.state.sent === true){
      return(
        <div className="container">
          <h4>Message Sent</h4>
        </div>
      )
    } else {
      return(
        <div className="contact container row section" id='contact'>
          <div className='heading twelve columns'>
            <h4 className='sectionHeading'>Contact Me</h4>
          </div>
          <div className='six columns offset-by-three'>
            <form onSubmit={(event)=>this.handleOnSubmit(event)}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" value={this.state.name} onChange={(event)=>this.handleOnChange(event)}/>

              <label htmlFor="email"> Email</label>
              <input type="email" id="email" value={this.state.email} onChange={(event)=>this.handleOnChange(event)} />

              <label htmlFor="message_text">Message</label>
              <input type="text" id="message_text" value={this.state.message_text} onChange={(event)=>this.handleOnChange(event)} />
            
              <label htmlFor="phone"> Phone</label>
              <input type="number" id="phone" value={this.state.phone} onChange={(event)=>this.handleOnChange(event)} />
              <br/>
              <input type="submit"/>
            </form>
          </div>
        </div>
      )
    }
  }
};

export default connect(null,{addMessageApi})(ContactMe);

