<template>
  <div
    class="layout">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
@import "~assets/styles/vars";

.layout {
  position: relative;
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 60px;
  grid-row-gap: 20px;
}

@media screen and (min-width: $tablet) {
  .layout {
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 100px;
  }
}

@media screen and (min-width: $desktop) {
  .layout {
    grid-template-columns: repeat(8, 1fr);
  }
}
</style>

<script>
export default {
  components: {
    test: {
      template: `<p>test</p>`
    }
  },
  props: {
    vertical: { type: Boolean, default: false }
  }
}
</script>
