<template>
  <div
    :class="{blueTheme:theme=='blue'}"
    class="footbar">
    <SLink
      href="https://uconn.edu">
      ©2018 UConn
    </SLink>
    <SLink
      href="https://core.uconn.edu">
      UConn COR²E
    </SLink>
    <SLink>
      UConn COR²E
    </SLink>
    <SLink>
      Link 1
    </SLink>
    <SLink>
      Link 2
    </SLink>
    <figure class="footbarBrand">
      <img src="~/assets/images/wordmark.png" >
    </figure>
    <span class="footbarSignature">
      Designed & developed by
      <br >
      <span class="footbarSignature-mono">[squared labs]</span>
      <br >
      at UCONN
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
    theme: { type: String, required: true }
  }
}
</script>
<style scoped lang="scss">
@import "~assets/styles/vars";

.blueTheme figure img {
  filter: brightness(0) invert(1);
}
.footbar {
  font-family: SpaceMono;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  position: relative;
  z-index: 2;
}

.footbarBrand {
  flex-basis: calc(100% / 8 * 2);
  flex-grow: 0;
  min-width: 0;
  margin: 0;
}

.footbarBrand > img {
  max-width: 60%;
}

.footbarSignature {
  flex-basis: 100%;
  font-family: "Moderat";
  padding-top: 23px;
  color: $dodger-blue;
  line-height: 1.5;
}

.footbarSignature-mono {
  font-size: 26px;
  font-family: "SpaceMono";
}
</style>
