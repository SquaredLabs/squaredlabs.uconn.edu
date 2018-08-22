<template>
  <div>
    <v-background-text :lines="['proj','ects']" />
    <v-grid-layout id="projectSection">
      <div
        class="whiteBox off-sm-0 col-sm-4 col-md-2 off-lg-1">
        <p>We build websites that support UConn research. All of our projects are presently conceived of internally. Eventually
        we’d love to get to a point where we have the bandwidth to take on externally proposed projects.</p>
      </div>
      <div
        id="detailSidebar"
        class="off-md-0 off-lg-1 col-md-2">
        <b>{{ hoverData.name }}</b>
        <p>{{ hoverData.client }}</p>
        <p>{{ hoverData.timespan }}</p>
        <v-person-card-mini
          v-for="person in hoverData.people"
          :key="person.id"
          :icon="person.imageURL">
          <template slot="name">{{ person.name }}</template>
          <template slot="position">{{ person.role }}</template>
        </v-person-card-mini>
      </div>
      <div v-if="!projects">Loading projects</div>
      <v-project-card
        v-for="project in projects"
        v-else
        :key="project.id"
        :project="project"
        class="col-sm-2"
        @hoverProject="hoverData = $event">
        <span v-html="project.small_summary" />
      </v-project-card>
      <transition
        name="slide"
        mode="out-in">
        <v-selected-project
          v-show="$store.state.selectedProject!==0"
          :project="selectedProject" />
      </transition>
    </v-grid-layout>
  </div>
</template>

<script>
import VGridLayout from "~/components/VGridLayout.vue"
import VProjectCard from "~/components/VProjectCard.vue"
import VPersonCardMini from "~/components/VPersonCardMini.vue"
import Directus from "~/directus"
import VBackgroundText from "~/components/VBackgroundText.vue"
import VSelectedProject from "~/components/VSelectedProject.vue"

const setPeople = function(person, projects) {
  let role = person.roles
  for (let project of projects) {
    if (!project.people) project.people = []
    let projectsInRole = Object.keys(role).map(role => role.toLowerCase())
    let projectName = project.name.toLowerCase()
    if (projectsInRole.includes(projectName)) {
      project.people.push(person)
    }
  }
}

export default {
  async asyncData({ params }) {
    let data = await Directus()
    let projectData = data[1].projects
    let peopleData = data[0].people

    for (let person of peopleData) {
      let roleStr = person.roles
      if (roleStr === null) continue

      try {
        person.roles = JSON.parse(roleStr)
      } catch (e) {
        person.roles = {}
        console.error(`Failed to parse JSON: ${roleStr}`)
      }
      setPeople(person, projectData)
    }
    return {
      projects: projectData.sort((project1, project2) => {
        return project1.order - project2.order
      }),
      people: peopleData
    }
  },
  components: {
    VGridLayout,
    VProjectCard,
    VPersonCardMini,
    VBackgroundText,
    VSelectedProject
  },
  data: () => ({
    hoverData: {}
  }),
  computed: {
    selectedProject: function() {
      let selectedProjID = this.$store.state.selectedProject
      if (selectedProjID === 0) {
        return {}
      }
      for (let project of this.projects) {
        if (project.id === selectedProjID) return project
      }
      throw new Error("No project by id " + selectedProjID)
    }
  }
}
</script>

<style scoped lang="scss">
@import "~assets/styles/vars";

.gridded {
  grid-template-rows: min-content;
}

.whiteBox {
  background: white;
  padding: 20px;
  width: 100%;
  margin-left: -20px;
  p {
    margin: 0;
  }
}

#detailSidebar {
  display: none;
  position: sticky;
  top: 1.563em;
  b + p {
    margin: 0.328em 0;
  }
  b + p + p {
    margin: 0.41em 0 1.25em;
  }
}

div.project {
  grid-row: span 4;
}

@media (min-width: $tablet) and (max-width: $desktop) {
  div.project:nth-of-type(2n + 1) {
    grid-column-start: 3;
  }
}

@media (min-width: $desktop) and (max-width: $desktopLg) {
  div.project:nth-of-type(3n + 1) {
    grid-column-start: 3;
  }
}

@media (min-width: $desktopLg) {
  div.project:nth-of-type(4n + 1) {
    grid-column-start: 4;
  }
}

@media screen and (min-width: $tablet) {
  #projectSection {
    margin-top: 18.19em;
    z-index: 5;
  }
  .whiteBox {
    grid-row: 1 / span 4;
    margin-left: 0;
    height: fit-content;
    width: auto;
  }
  #detailSidebar {
    display: initial;
    grid-row: 5 / span 7;
  }
  div.project:nth-of-type(-n + 4) {
    grid-row: 2 / span 4;
  }
}

@media screen and (min-width: $desktop) {
  div.project:nth-of-type(-n + 5) {
    grid-row: 2 / span 4;
  }
}

@media screen and (min-width: $desktopLg) {
  div.project:nth-of-type(-n + 6) {
    grid-row: 2 / span 4;
  }
}

.img--fill-container {
  width: 100%;
  height: 100%;
}

.marginned--vertically--6x {
  margin-bottom: 120px;
}

.layout__col--pacman {
  flex-wrap: wrap;
}

.slide-enter-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* .fade-leave-active below version 2.1.8 */
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
</style>
