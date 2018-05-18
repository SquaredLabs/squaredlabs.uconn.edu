import fetch from "isomorphic-fetch"

function loadPeople(url, endpoint) {
  console.log("Loading people")
  return fetch(encodeURI(url + endpoint + "?depth=2"))
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server")
      }
      return response.json()
    })
    .then(function(data) {
      console.log("Loaded people")
      let peopleData = data.data.map(personData => ({
        id: personData.id,
        name: personData.name,
        title: personData.title,
        class: personData.class,
        degree: personData.degree,
        description: unescapeHTML(personData.description),
        imageURL: url + personData.picture.data.url,
        projects: projectTrim(personData.projects.data, personData.id, url)
      }))
      alphabetize(peopleData, "name")
      let people = { people: peopleData }
      return people
    })
    .catch(function(error) {
      console.log(error)
    })
}
function loadProjects(url, endpoint) {
  console.log("Loading projects")
  return fetch(encodeURI(url + endpoint + "?depth=2"))
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server")
      }
      return response.json()
    })
    .then(function(data) {
      console.log("Loaded projects")
      let projectsData = data.data.map(projectData => ({
        id: projectData.id,
        order: projectData.order,
        name: projectData.name,
        client: projectData.client,
        timespan: projectData.timespan,
        services: projectData.services,
        technologies: projectData.technologies,
        large_summary: unescapeHTML(projectData.large_summary),
        imageURL: url + projectData.thumbnail.data.url,
        people: peopleTrim(
          projectData.people_assigned.data,
          projectData.name,
          url
        )
      }))
      alphabetize(projectsData, "name")
      let projects = { projects: projectsData }
      return projects
    })
    .catch(function(error) {
      throw error
    })
}
function alphabetize(data, keyName) {
  data.sort((a, b) => {
    let nameA = a[keyName].toUpperCase()
    let nameB = b[keyName].toUpperCase()
    if (nameA < nameB) return -1
    if (nameA > nameB) return 1
    return 0
  })
}
function unescapeHTML(str) {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
}
function projectTrim(data, personId, url) {
  return data.map(project => ({
    id: project.id,
    name: project.name,
    thumbnail: url + project.thumbnail.data.thumbnail_url
    // role: getRole(project.people_assigned.junction.data, 'person_id', personId)
  }))
}
function peopleTrim(data, projectName, url) {
  return data.map(person => ({
    id: person.id,
    name: person.name,
    thumbnail: url + person.picture.data.thumbnail_url,
    role: getRolesOfProject(JSON.parse(person.roles), projectName)
  }))
}
function getRolesOfProject(roles, projectName) {
  if (!roles) return "Team member"
  for (let projectNameRole of Object.keys(roles)) {
    if (projectNameRole === projectName) return roles[projectNameRole]
  }
}
function startLoad() {
  let peoplePromise = loadPeople(
    "https://admin.squaredlabs.uconn.edu",
    "/api/1.1/tables/people/rows"
  )
  let projectPromise = loadProjects(
    "https://admin.squaredlabs.uconn.edu",
    "/api/1.1/tables/projects/rows"
  )
  return Promise.all([peoplePromise, projectPromise]).then(function(values) {
    return values
  })
}
export default startLoad
