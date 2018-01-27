export default function projectReducer(state = [],action){
  switch(action.type){
    case 'GET_PROJECTS':
      return action.projects
    case 'ADD_PROJECT':
      return state.concat(action.project)
    case 'EDIT_PROJECT':
      return state.map((project)=>{
        if(project.id === action.project.id){
          return action.project
        } else {
          return project
        }
      })
    case 'DELETE_PROJECT':
      return state.filter((project)=>{
        console.log(project)
        return(project.id !== action.project.id)
      })
    default:
      return state;
  }
};