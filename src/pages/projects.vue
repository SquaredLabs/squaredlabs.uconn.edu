<template>
  <Grid>
    <BackgroundText :lines="['proj','ects']" />
    <section 
      id="jumbotron" 
      style="margin-bottom: 100px">

      <div style="margin-top: -300px">
        <div m="horizontal">
          <div 
            id="white-box" 
            style="background: white; margin-top: -80px" 
            class="padded">
            <p>We build websites that support UConn research. All of our projects are presently conceived of internally. Eventually
            we’d love to get to a point where we have the bandwidth to take on externally proposed projects.</p>
          </div>
          <div id="project-details">
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
        </div>
        <div s="pacman">
          <div 
            v-for="x in 3" 
            :key="x" 
            style="padding-bottom: 20px">
            <!--
              This is setup so that there is a 3x3 grid, and project.order is the index of that grid. 
              Any project with order not between 1 and 9 is not rendered.
            -->

            <project-card 
              v-for="project in projects" 
              v-if="projects&&project.order/3>x-1&&project.order/3<=x" 
              :key="project.id" 
              :project="project"
              @hoverProject="hoverData = $event">
              <span v-html="project.small_summary" />
            </project-card>
            <div v-if="!projects">Loading projects</div>
          </div>
        </div>
        <transition 
          name="slide" 
          mode="out-in">
          <ProjectView 
            v-show="$store.state.selectedProject!==0" 
            :project="selectedProject" />
        </transition>
      </div>
    </section>
  </Grid>
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
#jumbotron {
  margin-top: 400px;
}

#project-details {
  margin-top: 20px;
}

#white-box p {
  margin: 0;
  z-index: 4;
  position: relative;
}

#project-details {
  z-index: 4;
  position: relative;
}

.number {
  height: 93px;
  font-family: SpaceMono;
  font-size: 143px;
  font-weight: normal;
  margin: 0;
  padding: 0;
  padding-top: 40px;
  text-decoration: underline;
  text-decoration-color: $rouge-40;
}

.design {
  transform: rotate(-90deg);
  font-family: SpaceMono;
  font-size: 205px;
  font-weight: normal;
  line-height: normal;
  text-align: right;
  color: $dodger-blue;
  margin: 0;
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
