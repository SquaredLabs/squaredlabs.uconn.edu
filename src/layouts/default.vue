<template>
    <div class="app" v-bind:class="{blueAppTheme:$store.state.theme=='blue'}">
        <Navbar :theme="$store.state.theme"/>
        <nuxt/>
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
    transition:all0.3s ease;
    background-color:$pale-grey;
}
.blueAppTheme{
    background-color: $dodger-blue;
}
    
</style>

