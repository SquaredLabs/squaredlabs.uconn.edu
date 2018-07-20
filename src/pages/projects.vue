<template>
  <div>
    <BackgroundText :lines="['proj','ects']" />
    <Grid id="projectSection">
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
        <mini-person-card
          v-for="person in hoverData.people"
          :key="person.id"
          :icon="person.thumbnail">
          <template slot="name">{{ person.name }}</template>
          <template slot="position">{{ person.role }}</template>
        </mini-person-card>
      </div>
      <div v-if="!projects">Loading projects</div>
      <project-card
        v-for="project in projects"
        v-else
        :key="project.id"
        :project="project"
        class="col-sm-2"
        @hoverProject="hoverData = $event">
        <span v-html="project.small_summary" />
      </project-card>
      <transition
        name="slide"
        mode="out-in">
        <ProjectView
          v-show="$store.state.selectedProject!==0"
          :project="selectedProject" />
      </transition>
    </Grid>
  </div>
</template>

<script>
import Grid from "../components/GridLayout.vue"
import ProjectCard from "../components/projects/ProjectCard.vue"
import MiniPersonCard from "../components/projects/MiniPersonCard.vue"
import Directus from "../../directus"
import BackgroundText from "../components/BackgroundText.vue"
import ProjectView from "../components/projects/ProjectView.vue"

export default {
  async asyncData({ params }) {
    let data = await Directus()
    let projectData = data[1]
    return {
      projects: projectData.projects
    }
  },
  components: {
    Grid,
    ProjectCard,
    MiniPersonCard,
    BackgroundText,
    ProjectView
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
  },
  methods: {
    setHoveredProject(project) {
      this.hoverData = {
        name: project.name,
        client: project.client,
        timespan: project.timespan,
        people: project.people
      }
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

.project {
  grid-row: span 4;
}

@media screen and (min-width: $tablet) {
  #projectSection {
    margin-top: 18.19em;
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

.slide-enter,
  .slide-leave-to
  /* .fade-leave-active below version 2.1.8 */

 {
  opacity: 0; //transform: translateX(-100%);
}
</style>
