export default function messageReducer(state = [],action){
  switch(action.type){
    case 'GET_MESSAGES':
      return action.messages;
    case 'ADD_MESSAGE':
      return state;
    case 'DELETE_MESSAGE':
      return state;
    default:
      return state;
  }
};