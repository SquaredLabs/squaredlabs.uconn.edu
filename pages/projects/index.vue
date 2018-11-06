<template>
  <div>
    <v-background-text :lines="['proj','ects']" />
    <section class="projectSection">
      <div class="information">
        <div
          class="whiteBox">
          <p>We build websites that support UConn research. All of our projects are presently conceived of internally. Eventually
          we’d love to get to a point where we have the bandwidth to take on externally proposed projects.</p>
        </div>
        <div class="detailSidebar">
          <b>{{ hoverData.name }}</b>
          <p>{{ hoverData.client }}</p>
          <p>{{ hoverData.timespan }}</p>
          <v-person-card-mini
            v-for="person in hoverData.people"
            :key="person.id"
            :icon="person.iconURL">
            <template slot="name">{{ person.name }}</template>
            <template slot="position">{{ person.role }}</template>
          </v-person-card-mini>
        </div>
      </div>
      <div class="projects">
        <div v-if="!projects">Loading projects</div>
        <v-project-card
          v-for="project in projects"
          v-else
          :key="project.id"
          :project="project"
          @hoverProject="hoverData = $event">
          <span v-html="project.small_summary" />
        </v-project-card>
      </div>
    </section>
  </div>
</template>

<script>
import VGridLayout from "~/components/VGridLayout.vue"
import VProjectCard from "~/components/VProjectCard.vue"
import VPersonCardMini from "~/components/VPersonCardMini.vue"
import Directus from "~/directus"
import VBackgroundText from "~/components/VBackgroundText.vue"

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
    VBackgroundText
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

section {
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  z-index: 1;
  padding: 1.25em;
}

.information,
.projects {
  width: 100%;
  flex: none;
}

.whiteBox {
  background: white;
  padding: 1.25em;
  width: 100%;
  margin-left: -1.25em;
  p {
    margin: 0;
  }
}

.detailSidebar {
  display: none;
  b + p {
    margin: 0.328em 0;
  }
  b + p + p {
    margin: 0.41em 0 1.25em;
  }
}

.projects {
  padding-top: 1.25em;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.project {
  margin-bottom: 1.25em;
}

@media (min-width: $tablet) {
  section {
    margin-top: 18.19em;
    flex-flow: row nowrap;
  }

  .information {
    flex: 2;
    padding-right: 1em;
    box-sizing: border-box;
  }

  .projects {
    flex: 4;
    padding-top: 5.96em;
  }

  .whiteBox {
    margin-left: 0;
    margin-bottom: 1.25em;
    height: fit-content;
    width: auto;
  }

  .detailSidebar {
    display: block;
    position: sticky;
    top: 1em;
    max-height: 75vh;
  }
}

@media (min-width: $desktop) {
  .information {
    flex: 3;
  }
  .projects {
    flex: 9;
  }
}

@media (min-width: $desktopLg) {
  .information {
    flex: 3;
  }
  .projects {
    flex: 9;
  }
}

.img--fill-container {
  width: 100%;
  height: 100%;
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
