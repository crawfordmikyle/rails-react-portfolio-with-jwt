import React, {Component} from 'react'

class Login extends Component {
  handleLogin(){

  }

  render(){
    return(
      <div>
        <form>
          <label for="email">Email</label>
          <input type="email" id="email"/>

          <label for="password">Password</label>
          <input type="password" id="password"/>
          <br/>
          <input type="submit" style={{margin: "10px 10px 10px 0px"}}/>
        </form>
      </div>
    )
  }
}

export default Login