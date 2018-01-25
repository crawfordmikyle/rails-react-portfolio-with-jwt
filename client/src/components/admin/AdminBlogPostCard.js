import React from 'react';

const AdminBlogPostCard = ({blogPostData}) => {
  return(
    <div className="adminCard">
      <h4>{blogPostData.title}</h4>
      <p>{blogPostData.body}</p>
    </div>
  )
};

export default AdminBlogPostCard;