import React,{Component} from 'react'
import {connect} from 'react-redux'

class EditProject extends Component {
  constructor({projectData}){
    super();
    console.log(projectData)
    this.state = {
      id: projectData.id,
      title: projectData.title,
      description: projectData.description,
      github_url: projectData.github_url
    }
  }

  handleOnChange = (event) => {
    this.setStat({
      [event.target.id]:event.target.value
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={(event)=>this.handleOnSubmit(event)}>
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
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

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

export default connect(mapStateToProps)(EditProject)