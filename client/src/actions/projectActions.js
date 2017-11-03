// Action Creators
const getProjects = (projects) => {
  return({
    type: "GET_PROJECTS",
    projects: projects,
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