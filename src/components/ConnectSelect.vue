<template>
  <div class="container-connect">
    <div style="padding: 20px"></div>
  </div>
</template>

<script>
export default {
  props: ["msg", "height"]
};
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
