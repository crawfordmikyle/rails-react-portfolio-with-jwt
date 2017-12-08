// Action Creators
const getMessages = (messages) => {
  return({
    type: "GET_MESSAGES",
    messages: messages,
  })
}


// Asynchronous Actions

export const getMessagesApi = () => {

  let config = {
    method: 'POST',
    headers: {'Authorization': `Bearer ${window.localStorage.jwtToken}` },
  }

  return dispatch => {
    return fetch("/api/messages",config)
    .then(responce => responce.json())
    .then(messages => dispatch(getMessages(messages)))
    .catch(error => console.log(error))
  }
}