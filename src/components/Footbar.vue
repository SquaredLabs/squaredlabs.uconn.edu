<template>
  <div
    :class="{blueTheme:theme=='blue'}"
    class="footbar gridded">
    <SLink
      class="link col-sm-2 off-1 off-lg-3 row-off-md-0"
      href="https://uconn.edu">
      ©2018 UConn
    </SLink>
    <SLink
      class="link col-sm-2 col-lg-2 row-off-sm-1 row-off-md-0 off-lg-5"
      href="https://core.uconn.edu">
      UConn COR²E
    </SLink>
    <SLink class="link col-sm-2 col-lg-2 row-off-sm-1 row-off-md-0 off-lg-7">
      &#x263B;
    </SLink>
    <!-- <SLink class="link col-md-1 col-1 col-lg-2">
      Link 1
    </SLink>
    <SLink class="link col-md-1 col-1 col-lg-2">
      Link 2
    </SLink> -->
    <!-- <figure class="footbarBrand col-1">
      <img src="~/assets/images/wordmark.png">
    </figure> -->
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
import SLink from "./Link.vue"
export default {
  components: {
    SLink
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
