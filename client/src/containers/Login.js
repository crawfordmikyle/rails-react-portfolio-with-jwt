import React, {Component} from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/loginActions'

class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
    }
  }
  
  handleOnChange(event){
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleOnSubmit(event){
    this.props.login()
  }

  handleLogin(){
  }

  render(){
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={this.state.email} onChange={(event) => this.handleOnChange(event)}/>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={this.state.password} onChange={(event) => this.handleOnChange(event)}/>
          <br/>
          <input type="submit" style={{margin: "10px 10px 10px 0px"}}/>
        </form>
      </div>
    )
  }
}

export default connect(null,{login})(Login)