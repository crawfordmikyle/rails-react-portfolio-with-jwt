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
      
        <div className='heading'>
          <h4>Contact Me</h4>
        </div>
        <div className=''>
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  
}

export default connect(null)(ContactMe)

