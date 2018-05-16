const axios = require('axios');
const api_token = process.env.directus_token
const fs = require('fs')

function loadPeople(url, endpoint) {
    axios.get(encodeURI(url + endpoint + "?access_token=" + api_token))
        .then(function (response) {
            let peopleData = response.data.data.map(
                (personData) => ({
                    id:personData.id,
                    name:personData.name,
                    title: personData.title,
                    class: personData.class,
                    degree: personData.degree,
                    description: personData.description,
                    imageURL: url + personData.picture.data.url
                })
            );
            let people = {people:peopleData}
            save(people,'./src/assets/')   
        })
        .catch(function (error) {
            console.log(error);
        }
    );
}
function loadProjects(url,endpoint) {
    axios.get(encodeURI(url + endpoint + "?access_token=" + api_token))
        .then(function (response) {
            let projectsData = response.data.data.map(
                (projectData) => ({
                    id: projectData.id,
                    name: projectData.name,
                    client: projectData.client,
                    timespan: projectData.timespan,
                    services: projectData.services,
                    technologies: projectData.technologies,
                    large_summary: projectData.large_summary,
                    imageURL: url + projectData.thumbnail.data.url
                })
            );
            let projects = { projects: projectsData }
            save(projects, './src/assets/')
        })
        .catch(function (error) {
            console.log(error);
        }
        );
}
function save(data, path) {
    let json = JSON.stringify(data,null,2);
    fs.writeFile(path+Object.keys(data)[0]+'.json', json);
    
}

loadPeople('https://admin.squaredlabs.uconn.edu', '/api/1.1/tables/people/rows')
loadProjects('https://admin.squaredlabs.uconn.edu', '/api/1.1/tables/projects/rows')