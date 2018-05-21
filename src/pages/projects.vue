<template>
  <div>
    <BackgroundText :lines="['proj','ects']"/>
    <section
      id="jumbotron"
      style="margin-bottom: 100px">
      
      <layout style="margin-top: -300px">
        <layout-col m="horizontal">
          <div
            id="white-box"
            style="background: white; margin-top: -80px"
            class="padded">
            <p>We build websites that support UConn research. All of our projects are presently conceived of internally. Eventually we’d love to get to a point where we have the bandwidth to take on externally proposed projects.</p>
          </div>  
          <div
            id="project-details">
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
        </layout-col>
        <layout-col s="pacman">
          <layout
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
              class="layout__col--third marginned--horizontally"
              @hoverProject="hoverData = $event">
              <span v-html="project.large_summary"/>
            </project-card>
            <div v-if="!projects">Loading projects</div>
          </layout>
        </layout-col>
      </layout>
    </section>
  </div>
</template>

<script>
import Layout from "../components/Layout.vue"
import LayoutCol from "../components/LayoutCol.vue"
import ProjectCard from "../components/ProjectCard.vue"
import MiniPersonCard from "../components/MiniPersonCard.vue"
import Directus from "../../directus"
import BackgroundText from "../components/BackgroundText.vue"

export default {
  async asyncData({ params }) {
    let data = await Directus()
    let projectData = data[1]
    return { projects: projectData.projects }
  },
  components: {
    Layout,
    LayoutCol,
    ProjectCard,
    MiniPersonCard,
    BackgroundText
  },
  data: () => ({ hoverData: {} }),
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
#white-box p{
  margin:0;
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
</style>
