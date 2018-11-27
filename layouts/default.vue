<template>
  <div
    :class="{
      blueAppTheme:$store.state.theme=='blue',
      highContrast:$store.state.highContrast,
      labs:currentPage=='/labs'}"
    class="app">
    <v-high-contrast-button
      v-show="currentPage=='/labs'"
      class="high-contrast-button"
      @click="$store.commit('highContrast')"/>
    <v-navbar :theme="$store.state.theme"/>
    <nuxt />
    <v-footbar :theme="$store.state.theme"/>
  </div>
</template>
<script>
import VNavbar from "~/components/VNavbar"
import VFootbar from "~/components/VFootbar"
import VHighContrastButton from "~/components/VHighContrastButton"

export default {
  components: {
    VNavbar,
    VFootbar,
    VHighContrastButton
  },
  computed: {
    currentPage() {
      return this.$route.path
    }
  }
}
</script>
<style lang="scss">
@import "~assets/styles/vars";
@import "~assets/styles/fonts";

html {
  margin: 0;
}

body {
  font-family: "Moderat";
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 1.25;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*:hover,
*:active,
*:checked,
*:enabled {
  outline: none;
}

.noScroll {
  overflow: hidden;
}

@media (max-width: 500px) {
  body {
    font-size: 0.8em;
  }
}

.app {
  transition: all 0.3s ease;
  background-color: $pale-grey;
  min-height: 100vh;
}

.app > :nth-child(2) {
  z-index: 1;
}

.gridded {
  z-index: 2;
}

.blueAppTheme {
  background-color: $dodger-blue;
}

.blueAppTheme.highContrast {
  background-color: $solid-blue;
}
</style>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.page-enter {
  opacity: 0;
  transform: translateX(-30%);
}
.page-leave-to {
  opacity: 0;
  transform: translateX(30%);
}

.labs {
  margin-bottom: 2.43em;
}

.high-contrast-button {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}
</style>
