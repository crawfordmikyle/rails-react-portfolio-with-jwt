export default function blogPostReducer(state = [],action){
  switch(action.type){
    case "GET_BLOG_POSTS":
      return Object.assign([],state,action.blogPosts);
    default:
      return state;
  }
}