/* Currently, all of this is referenced in the getAsyncData() method of our pages
 * Extremely basic API to fetch data from directus for the frontend components to easily work with 
*/
import fetch from "isomorphic-fetch"

function loadPeople(url, endpoint) {
  console.log("Loading people")
  // Depth 2 is specified in order to get thumbnail image URL
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
        imageURL: url + personData.picture.data.url
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
        order: projectData.sort,
        name: projectData.name,
        client: projectData.client,
        timespan: projectData.timespan,
        services: projectData.services,
        technologies: projectData.technologies,
        large_summary: unescapeHTML(projectData.large_summary),
        small_summary: unescapeHTML(projectData.small_summary),
        imageURL: url + projectData.thumbnail.data.url
      }))
      alphabetize(projectsData, "name")
      let projects = { projects: projectsData }
      return projects
    })
    .catch(function(error) {
      throw error
    })
}
function loadImages(url, endpoint) {
  console.log("Loading images")
  return fetch(encodeURI(url + endpoint))
    .then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server")
      }
      return response.json()
    })
    .then(function(data) {
      console.log("Loaded images")
      let imagesData = data.data.map(imageData => ({
        id: imageData.id,
        page: imageData.page,
        page_location: imageData.page_location,
        imageURL: url + imageData.image.data.url
      }))
      let images = { images: imagesData }
      return images
    })
    .catch(function(error) {
      console.error(error)
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
  let imagePromise = loadImages(
    "https://admin.squaredlabs.uconn.edu",
    "/api/1.1/tables/images/rows"
  )
  return Promise.all([peoplePromise, projectPromise, imagePromise])
}
export default startLoad
