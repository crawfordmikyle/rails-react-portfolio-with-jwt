// Action Creators
const getProjects = (projects) => {
  return({
    type: "GET_PROJECTS",
    projects: projects,
  })
}

const addProject = (project) => {
  return({
    type: "ADD_PROJECT",
    project: project,
  })
}

const editProject = (project) => {
  return({
    type: "EDIT_PROJECT",
    project: project,
  })
}

// Asynchronous Actions

export const getProjectsApi = () => {
  return dispatch => {
    return fetch("/api/projects")
    .then(responce => responce.json())
    .then(projects => dispatch(getProjects(projects)))
    .catch(error => console.log(error))
  }
}

export const addProjectApi = (projectObj) => {
  const config = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${window.localStorage.jwtToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({project: projectObj}),
  }
  return dispatch => {
    return fetch('/api/projects',config)
    .then(responce => responce.json())
    .then(project => dispatch(addProject(project)))
    .catch(error => console.log(error))
  }
}

export const editProjectApi = (projectObj) => {
  const config = {
    method: 'PUT',
    headers: {
      'Authorization':`Bearer ${window.localStorage.jwtToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({project: projectObj}),
  }
  return dispatch => {
    return fetch(`/api/projects/${projectObj.id}`,config)
    .then(responce => responce.json())
    .then(project => dispatch(editProject(project)))
    .catch(error => console.log(error))
  }
}