<template>
  <div
    id="selectedProjectModal"
    class="col-sm-4 col-md-6 col-8 col-lg-12">
    <h1 class="title">{{ project.name }}</h1>
    <v-link
      class="return"
      @click="unexpand">
      ← Return to all projects
    </v-link>
    <div class="content">
      <div class="information">
        <div
          class="desc"
          v-html="project.large_summary">
          <slot />
        </div>
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
            :icon="person.iconURL">
            <template slot="name">{{ person.name }}</template>
            <template slot="position">{{ person.role }}</template>
          </v-person-card-mini>
        </div>
      </div>
      <div class="preview-images">
        <img
          v-for="index in 3"
          :key="`image-${index}`"
          :src="project.images[index - 1]"
          :alt="`Project Image ${index}`"
          class="projectImage" >
      </div>
    </div>
    <div class="images">
      <img
        v-for="(image, index) in project.images"
        v-if="index>2"
        :key="`image-${index}`"
        :src="image"
        :alt="`Project Image ${index}`"
        class="projectImage" >
    </div>
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
      this.$store.commit("unSelectProject")
      document.querySelector(".noScroll").classList.remove("noScroll")
    }
  }
}
</script>


<style lang="scss" scoped>
@import "~assets/styles/vars";
#selectedProjectModal {
  top: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: $dodger-blue;
  color: white;
  z-index: 5;
  overflow-y: scroll;
}

.title {
  font-size: 5.96em;
  margin: 0.25em 0 0.08em;
  font-weight: normal;
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
  flex: 1;
  padding-right: 1.25em;
  box-sizing: border-box;
}

.information > * {
  margin: 1.56em 0;
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

img {
  height: auto;
  margin-bottom: 1em;
}

.preview-images img:first-child {
  width: 100%;
}

.preview-images img:nth-child(2),
.images img:nth-child(2n + 1) {
  width: calc(50% - 0.625em);
  margin-right: 1.25em;
}

.preview-images img:nth-child(3),
.images img:nth-child(2n) {
  width: calc(50% - 0.625em);
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
