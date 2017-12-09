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

  render(){
    return(
      <div>
        <form>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title"/>
          <label htmlFor="description">Description:</label>
          <textarea name="description" id="description" cols="30" rows="10"></textarea>
          <label htmlFor="github_url">GitHub Url:</label>
          <input type="text" id="description"/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) =>{

}

export default connect(null)(NewProject)