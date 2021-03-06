import React, {Component} from 'react';
//import skill card logos
import htmlLogo from '../../media/html.svg';
import cssLogo from '../../media/css.svg';
import rubyLogo from '../../media/ruby.svg';
import javaScriptLogo from '../../media/javascript.svg';
import railsLogo from '../../media/rails.svg';
import reactLogo from '../../media/react.svg';

class About extends Component {
  constructor(){
    super()
    this.state = {
      breakpoint: 550,
      fixed: false,
      cssClass: 'about container section',
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    const aboutInfo = document.getElementById('about').getBoundingClientRect();
    this.setState({breakpoint: aboutInfo.height});
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(e){
    if (window.scrollY > this.state.breakpoint){
      this.setState({
        fixed: true,
        cssClass: 'container section aboutFixed row'
      })
    } else {
      this.setState({
        fixed: false,
        cssClass: 'about container section row',
      })
    }
  }

  render(){
    return(
      <div className={this.state.cssClass} id='about'>

        <h4 className='sectionHeading'>About Me</h4>

        <div className="aboutContent">
        
          <p>
            Full stack developer with a passion for learning. With experience in Ruby on Rails and JavaScript based programming 
            and a background in Computer Repair and Information Technology, I discovered web development through running my own IT 
            usiness and building Wordpress sites. I bring strong skills in problem solving and systematic improvement to support 
            businesses in attaining their short and long term goals.
          </p>

          <h5 className='subHeading'>Skills</h5>

          <div className='skills twelve columns skillGrid'>
            <div className='skillCard' id='html'>
              <img src={htmlLogo} alt="missing" className='skillLogo'/>
            </div>
            <div className='skillCard' id='ruby'>
              <img src={rubyLogo} alt="missing" className='skillLogo'/>
            </div>
            <div className='skillCard' id='JavaScript'>
              <img src={javaScriptLogo} alt="missing" className='skillLogo'/>
            </div>
          </div>

          <div className='skills twelve columns skillGrid'>
            <div className='skillCard' id='rails'>
              <img src={railsLogo} alt="missing" className='skillLogo'/>
            </div>
            <div className='skillCard' id='css'>
              <img src={cssLogo} alt="missing" className='skillLogo'/>
            </div>
            <div className='skillCard' id='react'>
              <img src={reactLogo} alt="missing" className='skillLogo'/>
            </div>
          </div>

        </div>
      </div>
    )
  }
};

export default About;