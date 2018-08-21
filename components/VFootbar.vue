<template>
  <div
    :class="{blueTheme:theme=='blue'}"
    class="footbar gridded">
    <v-link
      class="link col-sm-2 off-1 col-md-3 off-lg-3 row-off-md-0"
      href="https://uconn.edu">
      ©2018 UConn
    </v-link>
    <v-link
      class="link col-sm-2 col-lg-2 col-md-3 row-off-sm-1 row-off-md-0 off-lg-5"
      href="https://core.uconn.edu">
      UConn COR²E
    </v-link>
    <span
      :class="{blueTheme:theme=='blue'}"
      class="footbarSignature col-sm-4 off-md-1 off-2 off-lg-4 row-off-md-1 row-off-sm-2 row-off-md-1">
      Designed & developed by
      <br>
      <span class="footbarSignature-mono">[squared labs]</span>
      <br> at UCONN
    </span>
  </div>
</template>
<script>
import VLink from "~/components/VLink.vue"
export default {
  components: {
    VLink
  },
  props: {
    theme: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped lang="scss">
@import "~assets/styles/vars";
@import "~assets/styles/grid";

.footbar {
  font-family: SpaceMono;
  padding: 9.313em 0 20px;
  text-align: center;
  position: relative;
  margin-bottom: 0;
}

.footbar .link {
  line-height: 1.75em;
  height: 1.25em;
}

.footbarBrand {
  margin: 0;
}

.footbarBrand > img {
  max-width: 100%;
}

.footbarSignature {
  font-family: "Moderat";
  color: $dodger-blue;
  line-height: 1.5;
}

.footbarSignature-mono {
  font-size: 1.563em;
  font-family: "SpaceMono";
}
.blueTheme {
  color: white;
}
</style>
