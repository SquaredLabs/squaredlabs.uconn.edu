<template>
  <div class="container">
    <h1 class="title">{{ project.name }}</h1>
    <SLink
      class="SLink"
      @click="unexpand">
      ← Return to all projects
    </SLink>
    <div class="columns">
      <div 
        class="column desc" 
        v-html="project.large_summary"/>
      <div class="column people">
        <mini-person-card
          v-for="person in project.people"
          :key="person.id"
          :icon="person.thumbnail">
          <template slot="name">{{ person.name }}</template>
          <template slot="position">{{ person.role }}</template>
        </mini-person-card>
      </div>
      <div class="column client">Client: {{ project.client }}</div>
      <div class="column timespan">{{ project.timespan }}</div>
      <div class="column service">{{ project.services }}</div>
      <div class="column tech">{{ project.technologies }}</div>
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
    }
  }
}
</script>


<style lang="scss" scoped>
@import "~assets/styles/vars";
.container {
  position: absolute;
  width: 100%;
  background-color: $pale-orange;
  z-index: 5;
  padding: 20px;
  color: white;
}
.title {
  font-size: 6em;
  margin: 0;
  line-height: 1em;
}
.columns {
  display: flex;
  flex-wrap: wrap;
  min-width: 200px;
  width: 30%;
}
.column {
  margin: 10px;
  width: 280px;
}
</style>
