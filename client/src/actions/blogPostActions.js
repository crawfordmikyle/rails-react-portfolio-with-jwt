// Action Creators
const getBlogPosts = (blogPosts) => {
  debugger
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
    .then(blogPosts => console.log(blogPosts))
    .catch(error => console.log(error))
  }
}