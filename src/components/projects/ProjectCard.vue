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
    let twoLineTitle = this.project.name.length < 10 ? "" : "twoLineTitle"
    return {
      twoLineTitle: twoLineTitle
    }
  },
  methods: {
    expand() {
      this.$store.commit("selectProject", this.project.id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";

$inner-box: calc(100% - 20px);

.project {
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  align-items: flex-end;
  min-height: 14.552em;

  &:hover .projectContent {
    height: calc(14.552em - 20px);
    // min-width: calc(100% - .1px);
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
  // width: auto;
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
  margin: 0;
}

.projectTitle {
  font-size: 1.563em;
  line-height: 1.25;
  color: #0c120c;
}

.projectLink {
  transition: 0.35s ease;
  transform: translateY(6em);
  align-self: flex-end;
}
</style>
