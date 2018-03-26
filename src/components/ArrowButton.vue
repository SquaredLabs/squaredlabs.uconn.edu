<template>
  <div class="arrow-button" v-on:click="nav">
    <span class="arrow-button__arrow">{{arrow}}</span>
  </div>
</template>

<script>
export default {
  props: ["direction"],
  data: function() {
    return { arrow: this.direction == "forward" ? "→" : "←" };
  },
  methods: {
    nav() {
      this.$router.go(this.direction == "forward" ? 1 : -1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/vars";

.arrow-button {
  width: 45px;
  height: 20px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  background-color: $dodger-blue-50;
  color: $onyx;
  margin: 5px;
}

.arrow-button:hover {
  background-color: $dodger-blue;
}

.arrow-button__arrow {
  font-family: "SpaceMono";
  font-size: 45px;
  transition: top 0.3s ease;
  position: relative;
  top: 9px;
}

.arrow-button__arrow:hover {
  top: 11px;
}
</style>
