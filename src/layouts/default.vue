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
html,body{
    margin:0;
    
}
.app{
    transition: all 0.3s ease;
    background-color:$pale-grey;
}
.blueAppTheme{
    background-color: $dodger-blue;
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


