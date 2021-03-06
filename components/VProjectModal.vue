<template>
  <div id="selectedProjectModal">
    <h1 class="title">{{ project.name }}</h1>
    <h2>
      <a :href="project.url" target="_blank" rel="noopener">{{
        project.url
      }}</a>
    </h2>
    <v-link class="return" @click="unexpand"> ← Return to all projects </v-link>
    <div class="content">
      <div class="information">
        <div class="desc" v-html="project.large_summary"><slot /></div>
        <div class="projectInfo">
          <p class="client">Client: {{ project.client }}</p>
          <p class="timespan">{{ project.timespan }}</p>
          <p class="service">{{ project.services }}</p>
          <p class="tech">{{ project.technologies }}</p>
        </div>
        <div class="activeDetailSidebar">
          <v-person-card-mini
            v-for="person in project.people"
            :key="person.id"
            :icon="person.iconURL"
          >
            <template slot="name">{{ person.name }}</template>
            <template slot="position">{{ person.role }}</template>
          </v-person-card-mini>
        </div>
      </div>
      <!-- <div
        v-if="project.images.length > 0"
        class="preview-images">
        <img
          v-for="index in 3"
          :key="`image-${index}`"
          :src="project.images[index - 1]"
          :alt="`Project Image ${index}`"
          class="projectImage" >
      </div> -->
    </div>
    <!-- <div
      v-if="project.images.length > 0"
      class="images">
      <img
        v-for="(image, index) in project.images"
        v-if="index>2"
        :key="`image-${index}`"
        :src="image"
        :alt="`Project Image ${index}`"
        class="projectImage" >
    </div> -->
  </div>
</template>

<script>
import VLink from "~/components/VLink"
import VPersonCardMini from "~/components/VPersonCardMini.vue"

export default {
  components: {
    VLink,
    VPersonCardMini
  },
  props: {
    project: { type: Object, required: true }
  },
  methods: {
    unexpand() {
      this.$router.push("/projects")
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";
#selectedProjectModal {
  --image-width: calc(48% - 0.625em);
  top: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  padding: 1.25em;
  box-sizing: border-box;
  background-color: $dodger-blue;
  color: white;
  z-index: 5;
  overflow-y: scroll;
}

.content {
  display: flex;
  flex-wrap: wrap;
}

a {
  color: white;
}

.title {
  font-size: 5.96em;
  margin: 0.25em 0 0.08em;
  font-weight: normal;
}

h2 {
  padding-left: 1em;
}

.return {
  background-color: rgba(242, 243, 247, 0.5);
}

.return:hover {
  background-color: rgb(242, 243, 247);
}

.content {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 7.451em;
}

.information {
  flex: 2;
  width: 35%;
  min-width: 370px;
  padding-right: 1.25em;
  box-sizing: border-box;
}

.information > * {
  margin: 1.56em 0;
}

.activeDetailSidebar {
  width: 15em;
}

.projectInfo p {
  margin: 0;
}

.projectInfo p ~ p {
  margin-top: 0.38em;
}

.preview-images {
  flex: 3;
  padding-top: 15%;
}

.images {
  margin-left: -0.625em;
  margin-right: -0.625em;
}

img {
  height: auto;
  margin-bottom: 1em;
}

.preview-images img {
  width: calc(50% - 0.625em);
}

.preview-images img:nth-child(2) {
  margin-right: 1.25em;
}

.preview-images img:first-child {
  width: 100%;
}

.images img {
  width: var(--image-width);
  margin-left: 0.625em;
  margin-right: 0.625em;
}

@media (max-width: $tablet) {
  .title {
    font-size: 3.815em;
  }
  .content {
    flex-flow: column;
    margin-bottom: 0;
  }
  .content > * {
    width: 100%;
    flex: 1;
  }
}

@media (min-width: $desktop) {
  #selectedProjectModal {
    --image-width: calc((100% - 3.75em) / 3);
  }
}
</style>
