<template>
  <div
    :class="{selected: selected}"
    class="person">
    <img 
      :src="background" 
      :alt="name"
      class="personPhoto" >
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
    background: { type: String, required: true },
    order: { type: Number, required: true },
    name: { type: String, required: true }
  },
  computed: {
    selected() {
      return this.$store.state.selectedPerson === this.order
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";

.person,
.person * {
  user-select: none;
}

.person {
  position: relative;
  z-index: 4;
  height: 16.552em;
  padding-bottom: 40px;
  overflow: hidden;
  text-align: center;

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
    max-height: 90%;
    margin-top: 1em;
    filter: brightness(60%);
  }
}

.personPhoto {
  max-height: 100%;
  object-fit: cover;
  transition: margin 0.25s ease, max-height 0.25s ease, filter 0.25s ease;
}

.personPreview {
  height: 3.815em;
  margin: -2.441em 1.25em 0;
  padding: 1.25em;
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
  padding: 1.25em 1.95em;
  box-sizing: border-box;
  font-size: 0.8em;
  position: relative;
  text-align: center;
  width: 100%;
  opacity: 0;
  transition: margin 0.25s ease, opacity 0.1s ease;
}
</style>
