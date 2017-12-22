import React from 'react'

const AdminMessageCard = ({messageData}) => {
  return(
    <div className="AdminProjectCard">
      <h4>From: {messageData.name}</h4>
      <h4>Email: {messageData.email}</h4>
      <h4>Phone: {messageData.phone}</h4>
      <p>{messageData.messages_text}</p>
    </div>
  )
}

export default AdminMessageCard


//{id: 1, sender_name: "Test Sender One", sender_email: "test@test.com", sender_phone: "206-222-2222", sender_messages: "test message content", …}