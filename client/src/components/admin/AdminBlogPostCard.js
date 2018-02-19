import React from 'react';
import {Link} from 'react-router-dom'
const AdminBlogPostCard = ({blogPostData}) => {
  return(
    <div className="adminCard">
      <h4>{blogPostData.title}</h4>
      <p>{blogPostData.body}</p>
      <Link className='adminLink' to={`/admin/blog/${blogPostData.id}`}>Edit</Link>
    </div>
  )
};

export default AdminBlogPostCard;