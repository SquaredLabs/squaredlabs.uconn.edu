/* Currently, all of this is referenced in the getAsyncData() method of our pages
 * Extremely basic API to fetch data from directus for the frontend components to easily work with
 */
import fetch from "isomorphic-fetch"
require("es6-promise")

const thumbnailUrl =
  "https://admin.squaredlabs.uconn.edu/thumbnail/500/400/contain/best/"
const thumbnailUrlIcon =
  "https://admin.squaredlabs.uconn.edu/thumbnail/80/80/contain/best/"

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
        order: personData.sort,
        name: personData.name,
        title: personData.title,
        class: personData.class,
        degree: personData.degree,
        description: unescapeHTML(personData.description),
        roles: personData.roles,
        alumni: personData.alumni === 1,
        imageURL:
          personData.picture === null
            ? ""
            : thumbnailUrl + personData.picture.data.name,
        iconURL:
          personData.picture === null
            ? ""
            : thumbnailUrlIcon + personData.picture.data.name
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
        url: projectData.url,
        technologies: projectData.technologies,
        large_summary: unescapeHTML(projectData.large_summary),
        small_summary: unescapeHTML(projectData.small_summary),
        imageURL: projectData.thumbnail
          ? thumbnailUrl + projectData.thumbnail.data.name
          : "",
        images: projectData.project_graphics.data.map(
          image => thumbnailUrl + image.name
        )
      }))
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
  let html = str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
  return removeHTML(html)
}
function removeHTML(str) {
  return str
    .replace("<p>", "")
    .replace("</p>", "")
    .replace("<br>", "")
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
  return Promise.all([peoplePromise, projectPromise])
}
export default startLoad
