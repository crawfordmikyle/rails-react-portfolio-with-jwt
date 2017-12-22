// Action Creators
const getMessages = (messages) => {
  return({
    type: "GET_MESSAGES",
    messages: messages,
  })
}

const addMessage = (message) => {
  return({
    type: "ADD_MESSAGE",
    message: message,
  })
}

// Asynchronous Actions

export const getMessagesApi = () => {
  let config = {
    method: 'GET',
    headers: {'Authorization': `Bearer ${window.localStorage.jwtToken}` },
  }

  return dispatch => {
    return fetch("/api/messages",config)
    .then(responce => responce.json())
    .then(messages => dispatch(getMessages(messages)))
    .catch(error => console.log(error))
  }
}

export const addMessageApi = (messageObj) => {
  let config = {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({message: messageObj})
  }

  return dispatch => {
    return fetch('/api/messages', config)
    .then(responce => responce.json())
    .then(message => dispatch(addMessage(message)))
    .catch(error => console.log(error))
  }
}