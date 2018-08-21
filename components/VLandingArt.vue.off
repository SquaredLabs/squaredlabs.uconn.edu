<template>
  <div
    :style="`height: ${height}`"
    class="construction-zone">
    <div style="padding: 20px">
      <slot>This space will have something really cool here eventually!</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: { type: String, default: "80vh" }
  }
}
</script>

<style lang="scss" scoped>
.construction-zone {
  display: flex;
  font-size: 2em;
  line-height: 1.25;
  align-items: center;
  justify-content: center;
  border: 1px black dashed;
}
</style>
