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
    id: { type: Number, required: true }
  },
  computed: {
    selected() {
      return this.$store.state.selectedPerson === this.id
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";

.miniPersonPhoto {
  box-sizing: border-box;
  justify-self: center;
  position: relative;
  width: 4.768em;
  height: 4.768em;
  display: inline-block;
  background-size: cover;
  background-position: center;
  background-blend-mode: luminosity;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color 0.3s ease;
}

.miniPersonPhoto.selected {
  border: 3px dashed $dodger-blue;
}
</style>
