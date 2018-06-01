<template>
  <div
    :class="{blueAppTheme:$store.state.theme=='blue'}"
    class="app">
    <Navbar :theme="$store.state.theme"/>
    <nuxt />
    <Footbar :theme="$store.state.theme"/>
  </div>
</template>
<script>
import Navbar from "../components/Navbar"
import Footbar from "../components/Footbar"
export default {
  components: {
    Navbar,
    Footbar
  }
}
</script>
<style lang="scss">
@import "~assets/styles/vars";
@import "~assets/styles/fonts";

html {
  margin: 0;
  overflow-x: hidden;
}

body {
  font-family: "Moderat";
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 1.25;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

@media (max-width: 500px) {
  body {
    font-size: 0.8em;
  }
}

.app {
  transition: all 0.3s ease;
  background-color: $pale-grey;
}

.app > *:nth-child(2) {
  z-index: 1;
}

.blueAppTheme {
  background-color: $dodger-blue;
}

.padded {
  padding: 20px;
}

.marginned--horizontally {
  margin-left: 20px;
  margin-right: 20px;
}

.marginned--vertically {
  margin-top: 20px;
  margin-bottom: 20px;
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
</style>
