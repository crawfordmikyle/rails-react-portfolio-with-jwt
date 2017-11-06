import React, {Component} from 'react'

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

  handleLogin(){

  }

  render(){
    return(
      <div>
        <form>
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

export default Login