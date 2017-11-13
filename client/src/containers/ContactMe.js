import React, {Component} from 'react'
import {connect} from 'react-redux'
import './contact.css'
class ContactMe extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }

  render(){
    return(
      <div className="contact">
        <h1>Contact Me</h1>
        <form>
          <label htmlFor="Name">Name</label>
          <input type="text" id="Name" />

          <label htmlFor="Email"> Email</label>
          <input type="email" id="Email" />

          <label htmlFor="Message">Message</label>
          <input type="text" id="Message" />
          <br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  
}

export default connect(null)(ContactMe)

