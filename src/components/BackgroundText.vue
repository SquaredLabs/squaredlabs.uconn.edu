<template>
  <div class="backgroundText">
    <p
      v-for="(line, index) in lines"
      :key="'line'+index"
      class="backgroundTextLine">{{ line }}</p>
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
  font-size: 9.313em;
  font-family: SpaceMono;
  position: absolute;
  height: 0;
  top: -25px;
  left: 20px;
  color: white;
  line-height: 1;
}
.backgroundTextLine {
  margin: 0;
  padding: 0;
}

@media screen and (min-width: $tablet) {
  .backgroundText {
    font-size: 18.19em;
  }
}

@media screen and (min-width: $desktopLg) {
  .backgroundText {
    left: 5vw;
    font-size: 22.737em;
  }
}
</style>
