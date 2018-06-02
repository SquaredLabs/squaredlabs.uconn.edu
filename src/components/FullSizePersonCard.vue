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
  position: relative;
  height: 14.552em;
  margin-bottom: 40px;

  &:hover .personContent {
    height: 11.642em;
    margin: -13.642em 0 0;

    .personAbout {
      margin: 0 1.25em;
    }
  }

  &:hover .personPhoto {
    margin: 30px;
    filter: brightness(60%);
  }
}

.personPhoto {
  height: 100%;
  transition: all 0.25s ease;
}

.personContent {
  height: 3.815em;
  margin: -2.441em 1.25em 0;
  background: white;
  text-align: center;
  transition: all 0.25s ease;
  overflow: hidden;
  position: relative;
}

.personPreview {
  height: 2.441em;
  margin: 10px;
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
  margin-bottom: 1.25em;
  font-size: 0.8em;
  transition: all 0.25s ease;
}
</style>
