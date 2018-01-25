export default function blogPostReducer(state = [],action){
  switch(action.type){
    case "GET_BLOG_POSTS":
      return action.blogPosts
    default:
      return state;
  }
};