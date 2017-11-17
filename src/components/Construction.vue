<template>
    <div class="construction-zone" :style="`height: ${height}`">
        <span>{{ msg }}</span>
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
  align-items: center;
  justify-content: center;
  border: 1px black dashed;
}
</style>
