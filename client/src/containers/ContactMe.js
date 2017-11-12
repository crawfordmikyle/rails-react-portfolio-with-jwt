import React, {Component} from 'react'
import {connect} from 'react-redux'

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
      <div>
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

