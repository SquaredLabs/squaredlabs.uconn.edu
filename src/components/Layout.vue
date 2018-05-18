<template>
  <div
    v-if="!vertical"
    class="layout">
    <slot/>
  </div>
  <div
    v-else
    class="layout--vertical">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
@import "~assets/styles/vars";

.layout {
  z-index: 3;
  position: relative;
  display: flex;
}

.layout--vertical {
  display: flex;
  flex-direction: column;
}

%col {
  flex-grow: 0;
}

.layout__col--quarter {
  @extend %col;
  flex-basis: 25%;
}

.layout__col--third {
  @extend %col;
  flex-basis: 33%;
}

.layout__col--half {
  @extend %col;
  flex-basis: 50%;
}

.layout__col--pacman {
  @extend %col;
  flex-basis: 75%;
}

.layout__col--whole {
  @extend %col;
  flex-basis: 100%;
}

.layout--centered-children {
  display: flex;
  justify-content: center;
}

.layout---spaced-between-children {
  display: flex;
  justify-content: space-between;
}
</style>

<script>
export default {
  components: {
    test: {
      template: `<p>test</p>`
    }
  },
  props: {
    vertical: { type: Boolean, default: false }
  }
}
</script>
