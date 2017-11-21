// Action Creators
const getMessages = (messages) => {
  return({
    type: "GET_MESSAGES",
    messages: messages,
  })
}


// Asynchronous Actions

export const getMessagesApi = () => {
  return dispatch => {
    return fetch("/api/messages")
    .then(responce => responce.json())
    .then(messages => dispatch(getBlogPosts(messages)))
    .catch(error => console.log(error))
  }
}