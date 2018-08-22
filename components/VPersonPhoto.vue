<template>
  <div
    :class="{selected: selected}"
    :style="`background-image: url('${background}')`"
    class="miniPersonPhoto"/>
</template>

<script>
export default {
  props: {
    background: { type: String, required: true },
    order: { type: Number, required: true }
  },
  computed: {
    selected() {
      return this.$store.state.selectedPerson === this.order
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";

.miniPersonPhoto {
  box-sizing: border-box;
  margin: 0.312em;
  justify-self: center;
  position: relative;
  width: 4.768em;
  height: 4.768em;
  display: inline-block;
  background-size: cover;
  background-position: center;
  border-color: $dodger-blue;
  border-style: dashed;
  border-width: 0px;
  transition: border-width 0.1s ease;
}

.miniPersonPhoto.selected,
.miniPersonPhoto:hover {
  border-width: 5px;
}

.miniPersonPhoto:hover {
  cursor: pointer;
}
</style>
