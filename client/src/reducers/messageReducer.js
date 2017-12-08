export default function messageReducer(state = [],action){
  switch(action.type){
    case 'GET_MESSAGES':
      return action.messages
    default:
      return state;
  }
}