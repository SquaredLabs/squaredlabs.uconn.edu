<template>
    <div class="quad">
        <slot></slot>
        <p v-if="text" class="quad__bg-text" :style="{'padding-top': paddingTop}">{{ text }}</p>
    </div>
</template>

<style scoped lang="scss">
@import "../styles/vars";

.quad {
  display: flex;
}

.quad__col {
  flex-basis: 25%;
  flex-grow: 0;
  margin-left: 20px;
  margin-right: 20px;
}

.quad__triple_col {
  flex-basis: 75%;
}

.quad__bg-text {
  font-size: 149px;
  font-family: SpaceMono;
  font-weight: normal;
  position: absolute;
  right: 20px;
  color: white;
  z-index: -1;
}

// Mobile & Tablet
@media (max-width: $desktop) {
  .quad {
    flex-wrap: wrap;
  }

  .quad__col, .quad__triple_col {
    flex-basis: 100%;
    width: 100%;
  }
}
</style>

<script>
export default {
  props: ["text", "paddingTop"]
}
</script>