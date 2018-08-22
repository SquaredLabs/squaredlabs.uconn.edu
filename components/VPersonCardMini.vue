<template>
  <div class="miniCard">
    <img
      :src="icon"
      class="miniPortrait" >
    <div class="miniBio">
      <strong><slot name="name" /></strong><br>
      <span><slot name="position" /></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: { type: String, required: true }
  }
}
</script>


<style lang="scss" scoped>
@import "~assets/styles/vars";

.miniCard {
  margin-bottom: 1.25em;
  position: relative;
}

.miniPortrait {
  width: 4.768em;
  height: 4.768em;
}

.miniBio {
  background: white;
  color: $charcoal-grey;
  position: absolute;
  padding: 5px 10px;
  bottom: 10px;
  left: calc(4.768em -10px);
  white-space: nowrap;
  user-select: none;
}
</style>
