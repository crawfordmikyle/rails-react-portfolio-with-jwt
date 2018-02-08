import React, {Component} from 'react';
import About from '../containers/main/About';
import Landing from '../components/main/Landing';
import Nav from '../containers/main/Nav';
import ProjectsContainer from './ProjectsContainer';
import ContactMe from './ContactMe';
import Footer from '../components/main/Footer';

class MainPage extends Component{

  render(){
    return(
      <div>
        <Landing />
        <Nav/>
        <About />
        <ProjectsContainer />
        <ContactMe />
        <Footer />
      </div>
    )
  }
};

export default MainPage;