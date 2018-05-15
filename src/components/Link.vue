<template>
  <a
    :style="{fontSize: fontSize}"
    :class="{ white: color=='white' }"
    class="button"
    @click="click">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    link_ref: { type: [String, Function], default: null },
    fontSize: { type: String, default: "1em" },
    color: { type: String, default: null }
  },
  data: function() {
    let data = {}
    // If ref is a number, it is interpreted as a vue route
    if (!isNaN(this.link_ref) || /^\/\.*/.test(this.link_ref)) {
      data.ref = ""
      return data
    }
    data.ref = this.link_ref
    return data
  },
  methods: {
    click() {
      if (!this.link_ref) return
      if (!isNaN(this.link_ref)) {
        // If number, go that many pages (back if <0)
        this.$router.go(parseInt(this.link_ref))
      } else if (/^\/\.*/.test(this.link_ref)) {
        // If local url
        this.$router.push(this.link_ref.slice(1))
      } else if (!/http/.test(this.link_ref)) {
        // If not external url
        this.link_ref()
      } else {
        // If external URL
        window.open(this.link_ref, "_blank")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";
.button {
  cursor: pointer;
  background-color: rgba(106, 161, 244, 0.5);
  display: inline-block;
  box-sizing: border-box;
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
