import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import About from './main/About'

class Nav extends Component {
  
  constructor(){
    super();
    this.state = {
      breakpoint: 500,
      fixed: false,
    }

    this.handleScroll = this.handleScroll.bind(this);

  };

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  };

  handleScroll(e) {
    if (window.scrollY > 500){
      this.setState({
        fixed: true
      })
    } else {
      this.setState({
        fixed: false
      })
    }
  };
// note to self this is so not dry figure out somthing better
  render(){
    if(this.state.fixed === true){
      return(
      <div className="full-width-container nav sticky">
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
    } else {
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
};

export default Nav;