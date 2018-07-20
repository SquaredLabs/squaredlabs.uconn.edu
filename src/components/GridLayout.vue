<template>
  <section class="gridded">
    <slot/>
  </section>
</template>

<style scoped lang="scss">
@import "~assets/styles/vars";
@import "~assets/styles/grid";

.gridded {
  z-index: 4;
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
    vertical: {
      type: Boolean,
      default: false
    }
  }
}
</script>
