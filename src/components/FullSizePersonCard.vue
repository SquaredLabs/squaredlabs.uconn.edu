<template>
  <div class="fullSizePersonCard">
    <div
      :style="`background: url('${background}') center/150% no-repeat`"
      class="personPhoto" />
    <div class="personContent">
      <div class="personPreview">
        <p class="personName"><slot name="name" /></p>
        <p class="personRole"><slot name="role" /></p>
      </div>
      <div class="personAbout">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";

@media screen and (min-width: tablet) {
}

.fullSizePersonCard {
  transition: all 0.25s ease;
  // position: relative;
  height: 14.552em;
  // margin-bottom: 40px;

  &:hover .personContent {
    // height: 11.642em;
    // margin: -14.642em 0 0;
    // transition: all 0.25s ease, margin 0.25s ease .05s;

    .personAbout {
      // margin: 0 1.25em;
      // opacity: 1;
      // transition: opacity .15s ease .15s;
    }
  }

  &:hover .personPhoto {
    // margin: 30px;
    // filter: brightness(60%);
  }
}

@media screen and (max-width: $tablet) {
}

.personPhoto {
  height: 100%;
  width: calc(50% - 10px);
  transition: all 0.25s ease;
  display: inline-block;
}

.personContent {
  display: inline-block;
  height: 100%;
  width: calc(50% + 10px);
  padding: 0 10px;
  box-sizing: border-box;
  background: white;
  text-align: center;
  transition: all 0.25s ease;
  overflow: hidden;
}

.personPreview {
  height: 2.441em;
  margin: 10px 0;
}

.personName {
  font-family: Moderat;
  font-size: 1.25em;
  font-weight: bold;
  color: $dodger-blue;
  margin: 0;
}

.personRole {
  font-size: 1em;
}

.personAbout {
  // font-size: 0.8em;
}
</style>
