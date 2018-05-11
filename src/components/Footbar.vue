<template>
  <div
    :class="{blueTheme:theme=='blue'}"
    class="footbar">

    <SLink
      :color="theme=='blue'?'white':''"
      class="footbar__link"
      text="©2018 UConn"
      font-size="1em"
      link_ref="https://uconn.edu"/>
    <SLink
      :color="theme=='blue'?'white':''"
      class="footbar__link"
      text="UConn COR²E"
      font-size="0.8em"
      link_ref="https://core.uconn.edu"/>
    <SLink
      :color="theme=='blue'?'white':''"
      class="footbar__link"
      text="UConn COR²E"
      font-size="0.8em"
      link_ref="alert('CONTACT')"/>
    <SLink
      :color="theme=='blue'?'white':''"
      class="footbar__link"
      text="Link 1"
      font-size="1em"/>
    <SLink
      :color="theme=='blue'?'white':''"
      class="footbar__link"
      text="Link 2"
      font-size="1em"/>
    <figure class="footbar__brand">
      <img src="~/assets/images/wordmark.png" >
    </figure>
    <span class="footbar__signature">
      Designed & developed by
      <br >
      <span class="footbar__signature-bold">[squared labs]</span>
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
  props: ["theme"]
}
</script>
<style scoped lang="scss">
@import "~assets/styles/vars";

.blueTheme figure img {
  filter: brightness(0) invert(1);
}
.footbar {
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

.footbar__brand {
  flex-basis: calc(100% / 8 * 2);
  flex-grow: 0;
  min-width: 0;
  margin: 0;
}

.footbar__brand > img {
  max-width: 60%;
}

.footbar__link {
  font-family: "SpaceMono";
  flex-basis: calc(100% / 8);
}

.footbar__signature {
  flex-basis: 100%;
  font-family: "SpaceMono";
  padding-top: 23px;
  color: $dodger-blue;
  line-height: 1.5;
}

.footbar__signature-bold {
  font-size: 26px;
  font-weight: bold;
}
</style>
