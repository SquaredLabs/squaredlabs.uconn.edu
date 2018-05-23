<template>
  <div class="titleTextContainer">
    <div class="title"><slot name="title" /></div>
    <div class="hoverContent">
      <div
        :class="[titlePositioning+'Content']"
        class="hoverContentI">
        <slot name="hoverContent" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    titlePositioning: {
      type: String,
      default: "develop"
    }
  },
  data: () => {
    return { hovered: false }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";
.titleTextContainer {
  margin: 0.5em 5% 0 5%;
}
.titleTextContainer:hover .hoverContent {
  opacity: 1;
}
.titleTextContainer:hover .title {
  opacity: 1;
}
.title {
  color: white;
  font-size: 14em;
  line-height: 1em;
  font-family: "SpaceMono";
  cursor: default;
  transition: all ease 0.3s;
  opacity: 0.7;
  position: relative;
  z-index: 4;
}
.hoverContent {
  transition: all ease 0.3s;
  position: absolute;
  width: 90%;
  left: 5%;
  height: 15em;
  margin-top: 7em;
  opacity: 0;
  pointer-events: none;
  z-index: 5;
}

.hoverContentI {
  position: absolute;
  width: 33%;
  background-color: white;
  color: black;
  padding: 1em;
}
.designContent {
  left: 0;
  top: -5em;
}
.developContent {
  right: 0;
  top: -35em;
}
.createContent {
  top: -50em;
  right: 50%;
  transform: translateX(50%);
}
@media (min-width: $tablet) and (max-width: $desktop) {
  .hoverContentI {
    width: 50%;
  }
  .title {
    font-size: 10em;
  }
  .developContent {
    right: 0;
    top: -20em;
  }
  .createContent {
    top: -35em;
    right: 50%;
    transform: translateX(50%);
  }
}
@media (min-width: 0px) and (max-width: $tablet) {
  .titleTextContainer {
    margin: 2em 5% 0 5%;
  }
  .hoverContentI {
    display: none;
  }
  .title {
    font-size: 5rem;
  }
}
</style>
