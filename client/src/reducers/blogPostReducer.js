export default function blogPostReducer(state = [],action){
  switch(action.type){
    case "GET_BLOG_POSTS":
      return action.blogPosts
    case "ADD_BLOG_POST":
      return state.concat(action.blogPost)
    default:
      return state;
  }
};