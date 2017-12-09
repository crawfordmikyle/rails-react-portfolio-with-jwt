import React,{Component} from 'react'
import {connect} from 'react-redux'

class NewProject extends Component {
  constructor(){
    super();
    this.state = {
      title: "",
      description: "",
      github_url: "",
    }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.id]:event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
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

}

export default connect(null)(NewProject)