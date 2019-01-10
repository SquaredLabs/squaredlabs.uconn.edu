<template>
  <section class="gridded"><slot /></section>
</template>

<style scoped lang="scss">
@import "~assets/styles/vars";
@import "~assets/styles/grid";
</style>

<script>
export default {
  props: {
    vertical: {
      type: Boolean,
      default: false
    }
  }
}
</script>
