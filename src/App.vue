<template>
  <div id="app">
    <Navbar/>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'

  export default {
    name: 'app',
    components: { Navbar }
  }
</script>

<style lang="scss">
  body {
    background: #f2f3f7;
    font-family: "Moderat";
    font-size: 16px;
    line-height: 20px;
    padding: 20px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
</style>
