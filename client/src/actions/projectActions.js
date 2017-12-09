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

// Asynchronous Actions

export const getProjectsApi = () => {
  return dispatch => {
    return fetch("/api/projects")
    .then(responce => responce.json())
    .then(projects => dispatch(getProjects(projects)))
    .catch(error => console.log(error))
  }
}

export const addProjectApi = (project) => {
  const config = {
    method: 'POST',
    headers: {'Authorization': `Bearer ${window.localStorage.jwtToken}` },
    body: JSON.stringify(project)
  }

  return dispatch => {
    return fetch('/api/projects',config)
    .then(responce => responce.json())
    .then(project => console.log(project))
  }
}