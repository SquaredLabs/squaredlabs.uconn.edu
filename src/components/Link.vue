<template>
  <component
    :is="dynamicComponent"
    v-bind="dynamicProps"
    :style="{fontSize: fontSize}"
    :class="{ white: color=='white' }"
    class="button"
    @click="$emit('click')">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    href: { type: String, default: null },
    fontSize: { type: String, default: "1em" },
    color: { type: String, default: null }
  },
  computed: {
    external() {
      // Alternatively, we could force the API of this component to require an
      // "external" prop (default being false). Automagical behavior can be
      // surprising sometimes.
      return this.href && this.href.startsWith("http")
    },
    dynamicComponent() {
      if (this.external) {
        // nuxt-link (which right now is just a proxy for router-link) is only
        // for links within the site. It'll prepend the current domain to the
        // path if you try to use it with an external URL.
        return "a"
      } else if (this.href === null) {
        // If no "href" attribute is specified, we probably semantically have
        // a "button" and not an "a" (anchor).
        return "button"
      } else {
        return "nuxt-link"
      }
    },
    dynamicProps() {
      return this.external
        ? { href: this.href, target: "_blank", rel: "noopener noreferrer" }
        : { to: this.href }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";
.button {
  cursor: pointer;
  background-color: rgba(106, 161, 244, 0.5);
  border: none;
  display: inline-block;
  box-sizing: border-box;
  font-size: inherit;
  height: calc(1em + 1px);
  vertical-align: text-top;
  color: #0c120c;
  padding-left: 2px;
  padding-right: 2px;
  transition: background 0.15s, padding 0.05s;
  text-decoration: none;
}
.button:hover {
  background-color: #6aa1f4;
  padding-top: 2px;
}
.white {
  background-color: #adcaf5;
}
.white:hover {
  background-color: $pale-grey;
}
</style>
