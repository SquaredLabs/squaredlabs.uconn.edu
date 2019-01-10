<template>
  <button class="high-contrast" @click="$emit('click')">
    {{ highContrast ? "Low" : "High" }} Contrast Mode
  </button>
</template>

<script>
export default {
  computed: {
    highContrast() {
      return this.$store.state.highContrast
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";

.high-contrast {
  outline: none;
  border: none;
  background-color: $solid-blue;
  color: white;
  padding: 0.8em;
  transition: all ease 0.2s;
  width: 100%;
  cursor: pointer;
  font-family: "SpaceMono";
  font-size: 0.8em;
  letter-spacing: 0.05em;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.15s ease;
}

.high-contrast:hover {
  font-size: 1em;
  padding: 1.25em;
}

.high-contrast:hover,
.highContrast .high-contrast {
  background-color: black;
  color: white;
}
</style>
