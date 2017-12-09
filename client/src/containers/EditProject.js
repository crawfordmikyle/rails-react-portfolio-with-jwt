import React,{Component} from 'react'
import {connect} from 'react-redux'

class EditProject extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <form>
          <label>test</label>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) =>{

}

export default connect(mapStateToProps)(EditProject)