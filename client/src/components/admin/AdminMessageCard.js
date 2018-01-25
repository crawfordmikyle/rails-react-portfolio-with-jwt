import React from 'react';

const AdminMessageCard = ({messageData}) => {
  return(
    <div className="AdminProjectCard">
      <h4>From: {messageData.name}</h4>
      <h4>Email: {messageData.email}</h4>
      <h4>Phone: {messageData.phone}</h4>
      <p>{messageData.messages_text}</p>
    </div>
  )
};

export default AdminMessageCard;