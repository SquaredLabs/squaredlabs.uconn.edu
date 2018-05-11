<template>
  <div 
    :style="`background: url('${background}') center / cover no-repeat`" 
    class="project">
    <div 
      ref="title" 
      class="project__content">
      <p class="project__title">{{ name }}</p>
      <div class="project__description">
        <p class="project__title-expanded">{{ name }}</p>
        <slot />
        <SLink 
          :link_ref="link" 
          class="SLink" 
          text="View Project →"/>
      </div>
    </div>
  </div>
</template>

<script>
import SLink from "./Link"
export default {
  components: {
    SLink
  },
  props: ["name", "background", "link"]
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";

$inner-box: calc(100% - 20px);

.project {
  position: relative;

  padding: 10px;
  height: 20vw;

  &:hover .project__content {
    transition: 0.25s all ease;
    min-width: $inner-box;
    min-height: $inner-box;
    padding: 10px;
  }

  &:hover .project__title {
    transition: 0.25s opacity, height;
    opacity: 0;
    height: 0;
  }

  &:hover .project__description {
    transition: 0.1s opacity ease 0.15s;
    opacity: 1;
  }

  &::before {
    content: "";
    transition: opacity 0.25s ease;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.2;
  }
}

.project__content {
  transition: 0.25s all ease;
  position: absolute;
  z-index: 1;
  bottom: 10px;
  left: 10px;
  box-sizing: border-box;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  padding: 0.5em 0.25em;
  background-color: white;
}

.project__title,
.project__description {
  margin: 0;
}

.project__title {
  transition: 0.1s opacity;
  line-height: 1.24;
  font-size: 25px;
  font-weight: bold;
  color: #0c120c;
}

.project__title-expanded {
  margin: 0;
  font-size: 25px;
  color: $dodger-blue;
}

.project__link {
  position: absolute;
  bottom: 0;
  right: 0;
}

.project__description {
  position: absolute;
  width: $inner-box;
  height: $inner-box;
  opacity: 0;
}
.SLink {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
