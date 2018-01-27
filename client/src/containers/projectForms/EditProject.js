import React,{Component} from 'react'
import {connect} from 'react-redux'
import {editProjectApi,deleteProjectApi} from '../../actions/projectActions'

class EditProject extends Component {
  constructor({projectData}){
    super();

    this.state = {
      id: projectData.id,
      title: projectData.title,
      description: projectData.description,
      github_url: projectData.github_url
    }
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]:event.target.value
    })
  };

  updateProject = (event) => {
    event.preventDefault();
    this.props.editProjectApi(this.state)
    this.props.history.push('/admin')
  };
  
  deleteProject = (event) => {
    event.preventDefault();
    this.props.deleteProjectApi(this.state)
    this.props.history.push('/admin')
  };

  render(){
    return(
      <div className='container'>
        <form onSubmit={event => this.updateProject(event)}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={this.state.title} onChange={(event)=>this.handleOnChange(event)}/>
          <br/>
          <label htmlFor="description">Description:</label>
          <textarea name="description" id="description" cols="30" rows="10" value={this.state.description} onChange={(event)=>this.handleOnChange(event)}>
          </textarea>
          <br/>
          <label htmlFor="github_url">GitHub Url:</label>
          <input type="text" id="github_url" value={this.state.github_url} onChange={(event)=>this.handleOnChange(event)}/>
          <br/>
          <input type="submit" value='Update Project'/>
        </form>
        <form onSubmit={event => this.deleteProject(event)}>
          <input type="submit" value='Delete Project'/>
        </form>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) =>{
  const projectData = state.projectsReducer.find((project)=>(project.id.toString() === ownProps.match.params.id))
  if(projectData){
    return({
      projectData: projectData
    })
  } else {
    return ({projectData:{}})
  }
}

export default connect(mapStateToProps,{editProjectApi,deleteProjectApi})(EditProject)