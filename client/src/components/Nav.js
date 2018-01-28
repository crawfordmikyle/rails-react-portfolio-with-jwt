import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';

class Nav extends Component {
  
  constructor(){
    super();
    this.state = {
      breakpoint: 550,
      fixed: false,
    }

    this.handleScroll = this.handleScroll.bind(this);

  };

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    const aboutInfo = document.getElementById('about').getBoundingClientRect();
    this.setState({breakpoint: aboutInfo.height})
  };

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }
  
  handleScroll(e) {
    if (window.scrollY > this.state.breakpoint){
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
            <li><Scrollchor to="#about" animate={{offset:-50}}>About</Scrollchor></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Scrollchor to="#contact" animate={{offset:-70}}>Contact</Scrollchor></li>
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
            <li><Scrollchor to="#about" animate={{offset:-90}}>About</Scrollchor></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Scrollchor to="#contact" animate={{offset:-70}}>Contact Me</Scrollchor></li>
            <li><Link to="/admin">Login</Link></li>
           </ul>
          </nav>
        </div>
      )
    }
  }
};

export default Nav;