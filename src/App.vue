<template>
  <div id="app">
    <Navbar/>
    <transition name="fade">
      <router-view class="page"></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: { Navbar }
};
</script>

<style lang="scss">
@import "styles/vars";
@import "styles/fonts";


body {
  background: #f2f3f7;
  font-family: "Moderat";
  font-size: 16px;
  line-height: 20px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

.page {
  padding: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  position: absolute; /* If this page doesn't keep its place, the new one will appear below it before it's fully faded out */
}
</style>
