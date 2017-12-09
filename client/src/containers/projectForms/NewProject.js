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
          <label>Title</label>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) =>{

}

export default connect(mapStateToProps)(NewProject)