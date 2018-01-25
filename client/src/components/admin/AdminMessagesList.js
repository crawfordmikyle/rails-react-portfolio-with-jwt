import React from 'react';
import AdminMessageCard from './AdminMessageCard';

const AdminMessagesList = ({messages}) => {
  const renderedMessages = messages.map((message)=>{
    return(
      <AdminMessageCard key={message.id} messageData={message} />
    )
  })

  return(
    <div>
      {renderedMessages}
    </div>
  )
};

export default AdminMessagesList;