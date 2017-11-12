// Action Creators

const loginAction = (data) => {
  return({
    type: "LOGIN",
    token: data,
  })
}

// Asynchronous Actions

export const login = (loginData) => {
  return dispatch => {
    return fetch("/user_token",{
      method: "post",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(loginData),
    })
    .then(responce => responce.json())
    .then(tokenData => window.sessionStorage.setItem("loginToken",tokenData.jwt))
    .catch(error => console.log(error))
  }
}
