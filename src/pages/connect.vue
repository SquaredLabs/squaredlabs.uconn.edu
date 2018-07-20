<template>
  <div>
    <BackgroundText :lines="['con','nect']"/>
    <Grid id="connectPageContent">
      <p
        id="mainHeader"
        class="header col-sm-4 col-md-6 col-7 off-1">
        Like what we do?
      </p>
      <Graphics class="col-sm-4 col-md-6 col-7 off-1 col-lg-10"/>
      <p
        id="secondaryHeader"
        class="header col-sm-4 col-md-6 off-1">
        So do we.
      </p>
      <div
        id="subHeader"
        class="col-sm-4 off-1">
        <p>
          We’ve got a good thing going here, and we’d like to keep it going. Here’s how you can help.
        </p>
        <p>
          If you’re a…
        </p>
      </div>
      <ConnectSelect class="col-sm-4 col-md-6 col-8 col-lg-10"/>
    </Grid>
  </div>
</template>

<script>
import ConnectSelect from "../components/connect/ConnectSelect.vue"
import Link from "../components/Link.vue"
import Graphics from "../components/connect/Graphics.vue"
import BackgroundText from "../components/BackgroundText.vue"
import Grid from "../components/GridLayout.vue"

export default {
  components: {
    ConnectSelect,
    Link,
    Graphics,
    BackgroundText,
    Grid
  }
}
</script>

<style scoped lang="scss">
@import "~assets/styles/vars";

#connectPageContent {
  margin-top: -9.313em;
}

.header {
  font-family: "Space Mono";
  font-size: 4.768em;
  margin: 0;
}

p:first-child {
  margin-top: 0;
}

#mainHeader {
  margin-top: 0.64em;
  color: $dodger-blue;
}

#subHeader {
  font-size: 1.25em;
}

@media screen and (min-width: $tablet) {
}

@media screen and (min-width: $desktop) {
}

@media screen and (min-width: $desktopLg) {
}
</style>
