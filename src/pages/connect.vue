<template>
  <section>
    <BackgroundText :lines="['con','nect']"/>
    <div class="container-header">

      <p
        id="header-1"
        class="header">Like what we do?</p>
      <Graphics/>
      <p
        id="header-2"
        class="header">So do we.</p>
      <div
        id="subHeader"
        class="header">
        <p>We’ve got a good thing going here, and we’d like to keep it
        going. Here’s how you can help.</p>
        <p> If you’re a…</p>
      </div>
    </div>

    <ConnectSelect/>
  </section>
</template>

<script>
import ConnectSelect from "../components/connect/ConnectSelect.vue"
import Link from "../components/Link.vue"
import Graphics from "../components/connect/Graphics.vue"
import BackgroundText from "../components/BackgroundText.vue"

export default {
  components: {
    ConnectSelect,
    Link,
    Graphics,
    BackgroundText
  }
}
</script>
<style lang="scss">
@import "~assets/styles/vars";
html,
body {
  background-color: $pale-grey;
}
</style>

<!--Graphics Style!-->
<style scoped lang="scss">
@import "~assets/styles/vars";
/*Header*/

.container-header {
  z-index: 11;
  position: relative;
  margin-left: 1.25em;
  margin-right: 1.25em;
}
.header {
  font-family: "SpaceMono";
}
#header-1 {
  font-size: 5em;
  text-align: left;
  line-height: 1em;
  color: #6aa1f4;
  color: $dodger-blue;
}
</style>

/*Remainder of page*/
<style scoped lang="scss">
@import "~assets/styles/vars";
#header-2 {
  font-size: 4em;
  margin-top: 2em;
  margin-bottom: 2em;
}
#subHeader {
  font-size: 20px;
  font-family: "Moderat";
  margin-top: 1em;
  margin-bottom: 1em;
}
#subHeader p {
}
#back {
  position: absolute;
  left: 10px;
  top: 50%;
  width: 10px;
  height: 10px;
  background-color: $dodger-blue;
}
@media only screen and (max-width: $desktop) {
  .container-header {
    margin-left: 5px;
    margin-right: 5px;
  }
}
@media only screen and (max-width: 750px) {
  #header-1 {
    font-size: 35px;
  }
  #header-2 {
    font-size: 25px;
  }
  #subHeader {
    font-size: 20px;
  }
}
</style>
