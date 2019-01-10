<template>
  <a :href="link" :title="title" class="connectCard link" target="_blank">
    <div class="svgWrapper"><slot /></div>
    <p class="btnTxt">{{ title }}</p>
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
.btnTxt {
  text-align: center;
  width: 100%;
  overflow: hidden;
}

.btnTxt {
  margin: 0.328em 0 0 0;
  font-size: 1.25em;
}

.connectCard {
  height: 7.451em;
  background-color: #ffffff;
  overflow: hidden;
}

.svgWrapper {
  width: auto;
  height: 47%;
  margin: 4% 0 0 0;
  transition: all 0.2s ease;
}

.connectCard:hover .svgWrapper {
  height: 80%;
  margin: 5% 0;
}

svg {
  height: 100%;
  width: 100%;
}

object {
  height: 100%;
  width: auto;
}
</style>

<style lang="scss">
@import "~assets/styles/vars";

.svgWrapper svg g g {
  &.mainIcon {
    fill: $onyx;
    transition: all 0.15s ease;
  }
  &:not(.mainIcon) * {
    transform: scale(0);
    transform-origin: center center;
    transform-box: fill-box;
    transition: all 0.25s cubic-bezier(0.75, -0.5, 0, 1.75);
  }
}

#gitHubArt {
  transition: transform 0.15s ease;
  transform: translate(0.2em, 0.4em);
}

#btcArt {
  transition: transform 0.15s ease;
  transform: translateY(-0.35em);
}

.connectCard:hover {
  .svgWrapper svg g g {
    &.mainIcon {
      fill: $dodger-blue;
    }
    &:not(.mainIcon) * {
      transform: scale(1);
    }
  }
  #gitHubArt,
  #btcArt {
    transform: translateY(0);
  }
}
</style>
