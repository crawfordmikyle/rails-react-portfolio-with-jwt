import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getMessagesApi} from '../actions/messageActions';
import AdminMessagesList from '../components/admin/AdminMessagesList';

class AdminMessagesContainer extends Component {
  
  componentDidMount(){
    // Note To Self: this seems inefficient and like a problem
    this.props.getMessagesApi();
  }

  render(){
    return(
      <div className="AdminMessagesContainer container">
        <h4 className='sectionHeading'>Messages</h4>
        <AdminMessagesList messages={this.props.messages} />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return({
    messages: state.messageReducer
  })
};

export default connect(mapStateToProps,{getMessagesApi})(AdminMessagesContainer);