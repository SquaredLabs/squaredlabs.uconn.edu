<template>
  <div
    :style="`background: url('${project.imageURL}') center / cover no-repeat`"
    class="project"
    @mouseover="$emit('hoverProject', {
      name:project.name,client:project.client,timespan:project.timespan,people:project.people
  })">
    <div
      ref="title"
      :class="{twoLineTitle}"
      class="projectContent">
      <div>
        <p class="projectTitle">{{ project.name }}</p>
        <div class="projectDescription">
          <slot />
        </div>
      </div>
      <div class="projectLink">
        <SLink
          class="SLink"
          @click="expand">
          View Project &rarr;
        </SLink>
      </div>
    </div>
  </div>
</template>

<script>
import SLink from "../Link"
export default {
  components: {
    SLink
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data: function() {
    let twoLineTitle = this.project.name.length < 19 ? "" : "twoLineTitle"
    return {
      twoLineTitle: twoLineTitle
    }
  },
  methods: {
    expand() {
      document.querySelector("html").classList.add("noScroll")
      this.$store.commit("selectProject", this.project.id)
      if (this.$route.path !== "/projects") {
        this.$router.push("projects")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";

.project {
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  align-items: flex-end;
  height: calc(50vw - 50px);

  &:hover {
    background-size: 175%;
  }

  &:hover .projectContent {
    height: calc(50vw - 70px);
  }

  &:hover .projectTitle {
    color: $dodger-blue;
  }

  &:hover .projectLink {
    transform: translateY(0);
  }
}

.projectContent {
  transition: 0.25s ease;
  overflow: hidden;
  box-sizing: border-box;
  padding: 10px;
  height: 3.052em;
  display: flex;
  min-width: 100%;
  justify-content: space-between;
  flex-flow: column nowrap;
  background-color: white;
  &.twoLineTitle {
    height: 4.768em;
  }
}

.projectTitle,
.projectDescription {
  transition: 0.3s ease;
  margin: 0 0 10px;
}

.projectTitle {
  font-size: 1em;
  line-height: 1.563;
  color: #0c120c;
}

.projectLink {
  transition: 0.35s ease;
  transform: translateY(6em);
  align-self: flex-end;
}

@media screen and (min-width: 500px) {
  .projectTitle {
    font-size: 1.563em;
    line-height: 1.25em;
  }
}

@media screen and (min-width: $tablet) {
  .project {
    height: calc(((100vw - 140px) / 3) + 20px);
    &:hover .projectContent {
      height: calc((100vw - 140px) / 3);
    }
  }
}

@media screen and (min-width: $desktop) {
  .project {
    height: calc(((100vw - 180px) / 4) + 20px);
    &:hover .projectContent {
      height: calc((100vw - 180px) / 4);
    }
  }
}

@media screen and (min-width: $desktopLg) {
  .project {
    height: calc(((100vw - 260px) / 6) + 20px);
    &:hover .projectContent {
      height: calc((100vw - 260px) / 6);
    }
  }
}
</style>
