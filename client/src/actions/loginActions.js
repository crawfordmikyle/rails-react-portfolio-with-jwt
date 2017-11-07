// Action Creators

const loginAction = (data) => {
  return({
    type: "LOGIN",
    token: data,
  })
}

// Asynchronous Actions

export const login = (data) => {
  const loginToken = {"auth":{
    "email":"crawfordmikyle@gmail.com",
    "password":"password"
  }}

  return dispatch => {
    //debugger
    return fetch("/user_token",{
      method: "post",
      body: loginToken,
    })
    .then(responce => responce.json)
    .then(tokenData => console.log(tokenData))
    .catch(error => console.log(error))
  }
}