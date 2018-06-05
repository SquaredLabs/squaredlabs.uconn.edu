<template>
  <div class="fullSizePersonCard">
    <div
      :style="`background-image: url('${background}')`"
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

@media screen and (max-width: $tablet) {
  div.fullSizePersonCard:nth-child(2) {
    grid-column: 1 / 5;
    margin-left: -20px;
    width: calc(100% + 40px);
    height: 50vh;
  }
  div.fullSizePersonCard:nth-child(2) ~ .fullSizePersonCard {
    height: calc((100vw - 120px) / 4);
    .personPhoto {
      width: 100%;
    }
    .personContent {
      width: 0;
      height: 0;
      display: none;
    }
  }
}

.personPhoto {
  height: 100%;
  transition: all 0.25s ease;
  display: inline-block;
  background-size: cover;
  background-position: center;
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

@media screen and (min-width: $tablet) {
  div.fullSizePersonCard {
    transition: all 0.25s ease;
    height: 22.737em;
    grid-column-start: 2;

    &:nth-child(2) {
      margin-bottom: 40px;
      .personPhoto {
        width: calc(50% - 10px);
      }
      .personContent {
        margin-bottom: -40px;
      }
    }
    &:not(:nth-child(2)) {
      grid-column: span 1;
      width: calc(50% - 10px);
      height: calc((100vw - 300px) / 12);
      .personContent {
        display: none;
        width: 0;
        height: 0;
      }
      .personPhoto {
        width: 100%;
      }
    }
    &:nth-child(3) {
      height: 22.737em;
      grid-column: 1 / span 1;
      grid-row-start: 2;
      width: 200%;
      margin-left: -100%;
      margin-top: 20px;
    }
    &:nth-child(4) {
      height: 22.737em;
      grid-column: 6 / span 1;
      grid-row-start: 2;
      width: 200%;
      margin-top: 20px;
    }
  }
}

@media screen and (min-width: $desktop) {
  div.fullSizePersonCard {
    &:nth-child(2) {
      grid-column-start: 3;
    }
    &:not(:nth-child(2)) {
      height: calc((100vw - 300px) / 16);
    }
    &:nth-child(3) {
      height: 22.737em;
      width: calc(100% + 40px);
      grid-column: 1 / span 2;
      margin-left: -40px;
    }
    &:nth-child(4) {
      height: 22.737em;
      width: calc(100% + 40px);
      grid-column: 7 / span 2;
    }
  }
}
</style>
