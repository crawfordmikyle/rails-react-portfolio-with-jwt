import React from 'react';

const AdminMessageCard = ({messageData}) => {
  return(
    <div className="adminCard">
      <h5>From: {messageData.name}</h5>
      <p>Email: {messageData.email}</p>
      <p>Phone: {messageData.phone}</p>
      <p>Message: {messageData.message_text}</p>
    </div>
  )
};

export default AdminMessageCard;