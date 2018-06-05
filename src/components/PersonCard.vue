<template>
  <div class="person">
    <div
      :style="`background-image: url('${background}')`"
      class="personPhoto" />
    <div class="personPreview">
      <p class="personName"><slot name="name" /></p>
      <p class="personRole"><slot name="role" /></p>
    </div>
    <div class="personAbout">
      <slot />
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

.person {
  position: relative;
  height: 14.552em;
  padding-bottom: 40px;
  overflow: hidden;

  &:hover .personPreview {
    height: 11.642em;
    margin: -14.642em 0 0;
  }

  &:hover .personAbout {
    margin-top: -11.642em;
    opacity: 1;
    //alt transition for animate in
    transition: margin 0.25s ease, opacity 0.25s ease 0.05s;
  }

  &:hover .personPhoto {
    margin: 30px;
    filter: brightness(60%);
  }
}

.personPhoto {
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: margin 0.25s ease, filter 0.25s ease;
}

.personPreview {
  height: 3.815em;
  margin: -2.441em 1.25em 0;
  padding: 10px;
  box-sizing: border-box;
  background: white;
  text-align: center;
  overflow: hidden;
  position: relative;
  transition: height 0.25s ease, margin 0.25s ease;
}

.personName {
  font-family: Moderat;
  font-size: 1.25em;
  line-height: 0.8em;
  font-weight: bold;
  color: $dodger-blue;
  margin: 0;
}

.personRole {
  margin-top: 0.328em;
  line-height: 1em;
  font-size: 1em;
}

.personAbout {
  padding: 10px;
  box-sizing: border-box;
  font-size: 0.8em;
  position: relative;
  text-align: center;
  width: 100%;
  opacity: 0;
  transition: margin 0.25s ease, opacity 0.1s ease;
}
</style>
