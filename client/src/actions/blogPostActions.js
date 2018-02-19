// Action Creators
const getBlogPosts = (blogPosts) => {
  return({
    type: "GET_BLOG_POSTS",
    blogPosts: blogPosts,
  })
};

const addBlogPost = (blogPost) => {
  return({
    type: "ADD_BLOG_POST",
    blogPost: blogPost,
  })
};

const editBlogPost = (blogPost) => {
  return({
    type: "EDIT_BLOG_POST",
    blogPost: blogPost,
  })
}

const deleteBlogPost = (blogPostId) => {
  return({
    type: "DELETE_BLOG_POST",
    blogPostId: blogPostId,
  })
}
// Asynchronous Actions

export const getBlogPostsApi = () => {
  return dispatch => {
    return fetch("/api/blog_posts")
    .then(responce => responce.json())
    .then(blogPosts => dispatch(getBlogPosts(blogPosts)))
    .catch(error => console.log(error))
  }
};

export const addBlogPostApi = (blogPostObj) => {
  let config = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${window.localStorage.jwtToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({blog_post: blogPostObj})
  }

  return dispatch => {
    return fetch('/api/blog_posts', config)
    .then(responce => responce.json())
    .then(blogPost => dispatch(addBlogPost(blogPost)))
    .catch(error => console.log(error))
  }
};

export const editBlogPostApi = (blogPostObj) => {
  let config = {
    method: 'PUT',
    headers:{
      'Authorization': `Bearer ${window.localStorage.jwtToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({blog_post: blogPostObj})
  }

  return dispatch => {
    return fetch(`/api/blog_posts/${blogPostObj.id}`,config)
    .then(responce => responce.json())
    .then(blogPost => console.log(blogPost))
    .catch(error => console.log(error))
  }
};

export const deleteBlogPostApi = (blogPostObj) => {
  let config = {
    method: 'DELETE',
    headers:{
      'Authorization': `Bearer ${window.localStorage.jwtToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({blog_post: blogPostObj})
  }

  return dispatch => {
    return fetch(`/api/blog_posts/${blogPostObj.id}`,config)
    .then(responce => responce.json())
    .then(blogPost => console.log(blogPost))
    .catch(error => console.log(error))
  }
};