<template>
  <div class="backgroundText">
    <p
      v-for="(line, index) in lines"
      :key="'line' + index"
      class="backgroundTextLine"
    >
      {{ line }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    lines: { type: Array, required: true }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";
.backgroundText {
  font-size: 16vw;
  margin-top: -0.35em;
  font-family: SpaceMono;
  position: absolute;
  height: 0;
  top: -25px;
  left: 20px;
  color: white;
  line-height: 1;
  z-index: 1;
}
.backgroundTextLine {
  margin: 0;
  padding: 0;
  z-index: 3;
  position: relative;
}

@media screen and (min-width: $desktopLg) {
  .backgroundText {
    left: 5vw;
  }
}
</style>
