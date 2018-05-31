<template>
  <component
    :is="dynamicComponent"
    v-bind="dynamicProps"
    :class="{ white: shouldApplyWhite }"
    class="button"
    @click="$emit('click')">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    href: { type: String, default: null },
    lighterBackground: { type: Boolean, default: null }
  },
  computed: {
    shouldApplyWhite() {
      // We can't default props to state from the Vuex store. So as a
      // workaround, let's default the useLighterBackground prop to null and
      // compute a default value here.
      return this.lighterBackground === null
        ? this.$store.state.theme === "blue"
        : this.lighterBackground
    },
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
  line-height: inherit;
  height: 1em;
  vertical-align: text-top;
  color: #0c120c;
  padding: 0 2px;
  transition: background 0.15s, padding 0.05s;
  text-decoration: none;
  font-weight: normal;
  font-family: inherit;
}
.button:hover {
  background-color: #6aa1f4;
  padding-top: 3px;
}
.white {
  background-color: #adcaf5;
}
.white:hover {
  background-color: $pale-grey;
}
.nuxt-link-active {
  background-color: #6aa1f4;
  padding-top: 3px;
}
.nuxt-link-active.white {
  background-color: $pale-grey;
}
</style>
