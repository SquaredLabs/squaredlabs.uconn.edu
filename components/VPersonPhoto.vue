<template>
  <img
    :class="{ selected: selected }"
    :src="background"
    :alt="`${name} mini`"
    class="miniPersonPhoto"
  />
</template>

<script>
export default {
  props: {
    background: { type: String, required: true },
    order: { type: Number, required: true },
    name: { type: String, required: true }
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
  // box-sizing: border-box;
  margin: 0.25em 0.35em;
  justify-self: center;
  position: relative;
  width: 4.768em;
  height: 4.768em;
  object-fit: cover;
  display: inline-block;
  outline: 0px dashed $dodger-blue;
  outline-offset: -5px;
  transition: outline-width 0.1s ease;
}

.miniPersonPhoto.selected,
.miniPersonPhoto:hover {
  outline-width: 5px;
}

.miniPersonPhoto:hover {
  cursor: pointer;
}
</style>
