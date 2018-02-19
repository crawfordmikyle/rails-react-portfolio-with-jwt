export default function blogPostReducer(state = [],action){
  switch(action.type){
    case "GET_BLOG_POSTS":
      return action.blogPosts;
    case "ADD_BLOG_POST":
      return state.concat(action.blogPost);
    case "EDIT_BLOG_POST":
      return state.map((blogPost)=>{
        if(blogPost.id === action.blogPost.id){
          return action.blogPost
        } else {
          return blogPost
        }
      });
    case "DELETE_BLOG_POST":
      return state.filter((blogPost)=>{
        return(blogPost.id !== action.blogPostId.id)
      });
    default:
      return state;
  }
};