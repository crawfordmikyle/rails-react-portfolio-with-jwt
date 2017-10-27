// Action Creators
const getBlogPosts = (blogPosts) => {
  return({
    type: "GET_BLOG_POSTS",
    blogPosts: blogPosts,
  })
}


// Asynchronous Actions

export const getBlogPostsApi = () => {
  return dispatch => {
    return fetch("/api/blog_posts")
    .then(responce => responce.json())
    .then(blogPosts => dispatch(blogPosts))
    .catch(error => console.log(error))
  }
}