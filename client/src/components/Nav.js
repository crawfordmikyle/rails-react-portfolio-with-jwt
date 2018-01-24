import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import About from './main/About'

class Nav extends Component {
  
  constructor(){
    super();
    this.state = {
      breakpoint: 500,
      fixed: false
    }

    this.handleScroll = this.handleScroll.bind(this);

  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    console.log(window.scrollY)
    return this.setState({
      fixed: (window.scrollY > this.breakpoint) ? true : false
    });
  }

  render(){
    return(
      <div className="full-width-container nav">
        <nav>
         <ul className="nav ul">
          <li><Link to="/">Home</Link></li>
          <li><Link key="about" to="/#about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/">Contact</Link></li>
          <li><Link to="/admin">Login</Link></li>
         </ul>
        </nav>
      </div>
    )
  }
}

export default Nav