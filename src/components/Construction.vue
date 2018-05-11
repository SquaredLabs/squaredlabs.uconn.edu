<template>
  <div 
    :style="`height: ${height}`" 
    class="construction-zone">
    <div style="padding: 20px">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  props: ["msg", "height"]
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
