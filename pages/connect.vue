<template>
  <div>
    <v-background-text :lines="['con','nect']"/>
    <v-grid-layout id="connectPageContent">
      <p
        id="mainHeader"
        class="header col-sm-4 col-md-6 col-7 off-1">
        Like what we do?
      </p>
      <v-connect-graphics class="col-sm-4 col-md-6 col-7 off-1 col-lg-10"/>
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
      <v-connect-select class="col-sm-4 col-md-6 col-8 col-lg-12"/>
    </v-grid-layout>
  </div>
</template>

<script>
import VConnectSelect from "~/components/VConnectSelect.vue"
import VConnectGraphics from "~/components/VConnectGraphics.vue"
import VBackgroundText from "~/components/VBackgroundText.vue"
import VGridLayout from "~/components/VGridLayout.vue"

export default {
  components: {
    VConnectSelect,
    VConnectGraphics,
    VBackgroundText,
    VGridLayout
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
