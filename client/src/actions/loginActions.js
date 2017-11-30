// Action Creators

const requestLogin = (data) => {
  return({
    type: "LOGIN_REQUEST",
    isFetching: true,
    isAuthenticated: false,
    data: data,
  })
}

const receiveLogin = (user) => {
  return({
    type: "LOGIN_SUCCESS",
    isFetching: false,
    isAuthenticated: true,
    user_token: user,
  })
}

const loginError = (message) => {
  return({
    type: "LOGIN_FAILURE",
    isFetching: false,
    isAuthenticated: false,
    message: message,
  })
}


// Asynchronous Actions

export function login(creds) {
  let authData = {'auth':{'email':`${creds.email}`,'password':`${creds.password}`}}

  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify(authData),
  }

  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch('/user_token', config)
      .then(response =>
        response.json().then(user => ({ user, response }))
            ).then(({ user, response }) =>  {
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginError(user.message))
          return Promise.reject(user)

        } else {
          debugger
          // If login was successful, set the token in local storage
          localStorage.setItem('id_token', user.id_token)
          localStorage.setItem('id_token', user.access_token)
          // Dispatch the success action
          dispatch(receiveLogin(user))
        }
      }).catch(err => console.log("Error: ", err))
  }
}