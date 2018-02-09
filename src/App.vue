<template>
  <div id="app">
    <Navbar />
    <transition name="slide" mode="out-in">
      <router-view class="page"></router-view>
    </transition>
    <Footbar />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footbar from "./components/Footbar.vue";
import QuadLayout from "./components/QuadLayout.vue";

export default {
  name: "app",
  components: { 
    Navbar,
    Footbar
  }
};
</script>

<style lang="scss">
@import "styles/vars";
@import "styles/fonts";


body {
  background: $pale-grey;
  font-family: "Moderat";
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 20px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.page {
  padding: 20px;
}

.link--highlighted {
  background-color: $dodger-blue-50;
  display: inline-block;
  box-sizing: border-box;
  height: calc(1em + 1px);
  vertical-align: text-top;
  color: $onyx;
  padding-left: 2px;
  padding-right: 2px;
  transition-property: background, padding;
  transition-duration: 0.15s, 0.05s;
  text-decoration: none;
}

.link--highlighted:hover {
  background-color: $dodger-blue;
  padding-top: 2px;
}

.flex-layout {
  display: flex;
}

// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.5s;
// }
// .fade-enter,
// .fade-leave-to {
//   opacity: 0;
//   position: absolute; /* If this page doesn't keep its place, the new one will appear below it before it's fully faded out */
// }

.slide-enter-active, .slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
