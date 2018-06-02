<template>
  <div
    id="selectedProjectModal"
    class="col-sm-4 col-md-6 col-8 col-lg-12">
    <h1 class="title">{{ project.name }}</h1>
    <SLink
      class="SLink return"
      @click="unexpand">
      ← Return to all projects
    </SLink>
    <div
      class="desc"
      v-html="project.large_summary">
      <slot />
    </div>
    <div class="activeDetailSidebar">
      <mini-person-card
        v-for="person in project.people"
        :key="person.id"
        :icon="person.thumbnail">
        <template slot="name">{{ person.name }}</template>
        <template slot="position">{{ person.role }}</template>
      </mini-person-card>
    </div>
    <div class="projectInfo">
      <p class="client">Client: {{ project.client }}</p>
      <p class="timespan">{{ project.timespan }}</p>
      <p class="service">{{ project.services }}</p>
      <p class="tech">{{ project.technologies }}</p>
    </div>
  </div>
</template>

<script>
import SLink from "../Link"
import MiniPersonCard from "./MiniPersonCard.vue"

export default {
  components: {
    SLink,
    MiniPersonCard
  },
  props: {
    project: { type: Object, required: true }
  },
  methods: {
    unexpand() {
      this.$store.commit("unSelectProject")
      document.querySelector(".noScroll").classList.remove("noScroll")
    }
  }
}
</script>


<style lang="scss" scoped>
@import "~assets/styles/vars";
#selectedProjectModal {
  top: 5.96em;
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: min-content;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  background-color: $dodger-blue;
  color: white;
}

.activeDetailSidebar {
  grid-column: 1 / 2;
  grid-row: 5 / 9;
}

.title {
  grid-column: 1 / 3;
  font-size: 3.815em;
  margin: 0;
  line-height: 1;
  font-weight: normal;
}

.desc {
  grid-column: 1 / 2;
  grid-row: 3 / 5;
}

.projectInfo {
  grid-row: 3 / 5;
  grid-column: 2 / 3;
}

.return {
  justify-self: start;
  margin-top: -1em;
}
</style>

<style lang="scss">
@import "~assets/styles/vars";
#selectedProjectModal {
  .desc,
  .projectInfo {
    *:first-child {
      margin: 0;
    }
  }
}

@media screen and (max-width: $tablet) {
  .activeDetailSidebar {
    div.miniCard {
      position: unset;
      margin-bottom: 0;
      .miniPortrait {
        display: none;
      }
      .miniBio {
        background: none;
        position: unset;
        color: white;
        padding-left: 0;
      }
    }
  }
}
</style>
