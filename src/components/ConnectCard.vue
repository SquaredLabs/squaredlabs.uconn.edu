<template>
  <a
    :href="link"
    :title="title"
    class="connectCard link col-sm-2 col-md-2"
    target="_blank">
    <div class="svgWrapper">
      <slot />
    </div>
    <p class="btnTxt">
      {{ title }}
    </p>
  </a>
</template>

<script>
export default {
  props: {
    link: { type: String, default: null },
    title: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";

a {
  color: $onyx;
  text-decoration: none;
}

.svgWrapper,
p {
  text-align: center;
  width: 100%;
  overflow: hidden;
}

.connectCard {
  height: 100px;
  background-color: #ffffff;
  overflow: hidden;
}
</style>

<style lang="scss">
svg.connectArt {
  width: 33%;
  height: auto;
  .animateIn {
    transfrom: scale(0);
    transform-origin: (0, 0, 0);
    transition: all 0.25s ease;
  }
  &:hover {
    .animateIn {
      transfrom: scale(1);
    }
  }
}
</style>

