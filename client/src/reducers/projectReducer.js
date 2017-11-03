export default function projectReducer(state = [],action){
  switch(action.type){
    case 'GET_PROJECTS':
      return Object.assign([],state,action.projects);
    default:
      return state;
  }
}