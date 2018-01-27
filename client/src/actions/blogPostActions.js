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
    body: JSON.stringify({blogPost: blogPostObj})
  }

  return dispatch => {
    return fetch('/api/blog_posts', config)
    .then(responce => responce.json())
    .then(blogPost => dispatch(addBlogPost(blogPost)))
    .catch(error => console.log(error))
  }
};