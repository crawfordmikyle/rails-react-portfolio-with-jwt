export default function projectReducer(state = [],action){
  switch(action.type){
    case 'GET_PROJECTS':
      return action.projects
    case 'ADD_PROJECT':
      return state.concat(action.project)
    default:
      return state;
  }
}