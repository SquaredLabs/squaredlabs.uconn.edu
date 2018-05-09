<template>
    <div class="app" v-bind:class="{blueAppTheme:$store.state.theme=='blue'}">
        <Navbar :theme="$store.state.theme"/>
        <transition name="slide" mode="out-in">
        <nuxt/>
        </transition>
        <Footbar :theme="$store.state.theme"/>
    </div>
    
</template>
<script>
import Navbar from '../components/Navbar';
import Footbar from '../components/Footbar';
export default {
  components:{
      Navbar,
      Footbar
  }
}
</script>
<style lang="scss">
@import "~assets/styles/vars";
@import "~assets/styles/fonts";
html{
    margin:0;
    overflow-x:hidden;
}
body{
    font-family: "Moderat";
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 20px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    overflow-x:hidden;
}
.app{
    transition: all 0.3s ease;
    background-color:$pale-grey;
}
.blueAppTheme{
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
.slide-enter-active, .slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.slide-enter {
  opacity: 0;
  transform: translateX(-30%);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(30%);
}
</style>


