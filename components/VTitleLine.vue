<template>
  <div class="titleTextContainer">
    <div class="title"><slot name="title" /></div>
    <div class="hoverContent">
      <div :class="[titlePositioning + 'Content']" class="hoverContentI">
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

.title {
  color: white;
  font-size: 16vw;
  line-height: 1em;
  font-family: "SpaceMono";
  cursor: default;
  position: relative;
  z-index: 4;
}
.titleTextContainer:not(:last-child) .title:after {
  content: "+";
  font-size: 1em;
  position: absolute;
  right: 10%;
  top: 50%;
}
.title:hover {
  text-decoration: underline;
  text-decoration-color: #e9a0a2;
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
.titleTextContainer:hover .hoverContent {
  opacity: 1;
}
.hoverContentI {
  position: absolute;
  width: 33%;
  right: -5vw;
  background-color: white;
  color: black;
  padding: 1em;
}
.hoverContentI p:first-child {
  margin-top: 0;
}
.hoverContentI p:last-child {
  margin-bottom: 0;
}
.designContent {
  top: -15vh;
}
.developContent {
  top: 0;
}
.createContent {
  top: 15vh;
}
@media (min-width: $tablet) and (max-width: $desktop) {
  .hoverContentI {
    width: 50%;
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
  .hoverContentI {
    display: none;
  }
}
</style>
