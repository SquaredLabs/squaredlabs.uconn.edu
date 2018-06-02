<template>
  <div
    :class="{blueTheme:theme=='blue'}"
    class="footbar">
    <SLink
      class="link"
      href="https://uconn.edu">
      ©2018 UConn
    </SLink>
    <SLink
      class="link"
      href="https://core.uconn.edu">
      UConn COR²E
    </SLink>
    <SLink class="link">
      UConn COR²E
    </SLink>
    <SLink class="link">
      Link 1
    </SLink>
    <SLink class="link">
      Link 2
    </SLink>
    <figure class="footbarBrand">
      <img src="~/assets/images/wordmark.png">
    </figure>
    <span class="footbarSignature">
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

.blueTheme figure img {
  filter: brightness(0) invert(1);
}

.footbar {
  font-family: SpaceMono;
  padding: 20px;
  text-align: center;
  justify-content: center;
  justify-content: space-around;
  position: relative;
  font-family: SpaceMono;
  display: grid;
  align-items: end;
  grid-column-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 20px;
}

@media screen and (min-width: $tablet) {
  .footbar {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media screen and (min-width: $desktop) {
  .footbar {
    grid-template-columns: repeat(8, 1fr);
  }
}

.footbar .link {
  grid-column: span 1;
  line-height: 1.75em;
  height: 1.25em;
  &:nth-child(1) {
    grid-column-start: 2;
  }
}

.footbarBrand {
  grid-column: span 1;
  margin: 0;
}

.footbarBrand > img {
  max-width: 100%;
}

.footbarSignature {
  font-family: "Moderat";
  color: $dodger-blue;
  line-height: 1.5;
  grid-row: 2;
  grid-column: 4 / 6;
}

.footbarSignature-mono {
  font-size: 25px;
  font-family: "SpaceMono";
}
</style>
