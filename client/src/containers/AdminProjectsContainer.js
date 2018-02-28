import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProjectsApi} from '../actions/projectActions';
import AdminProjectsList from '../components/admin/AdminProjectsList';
import {Link} from 'react-router-dom';

class AdminProjectsContainer extends Component {
  
  componentDidMount(){
    if(this.props.projects.length === 0){
      this.props.getProjectsApi()
    }
  }

  render(){
    return(
      <div className="AdminProjectsContainer container">
        <h2 className='sectionHeading'>Projects</h2>
        <AdminProjectsList projects={this.props.projects} />
        <Link to={"/admin/projects/new"} className='button'>New Project</Link>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return({
    projects: state.projectsReducer
  })
};

export default connect(mapStateToProps,{getProjectsApi})(AdminProjectsContainer);