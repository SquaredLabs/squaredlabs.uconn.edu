<template>
  <div class="miniCard">
    <div class="miniPortrait">
      <img
        :src="icon"
        alt="Portrait">
    </div>
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
  max-width: 4.768em;
  max-height: 4.768em;
  overflow: hidden;
  text-align: center;
}

.miniPortrait img {
  width: 5em;
  height: auto;
}

.miniBio {
  max-width: 60%;
  background: white;
  color: $charcoal-grey;
  position: absolute;
  padding: 5px 10px;
  bottom: 10px;
  left: calc(4.768em -10px);
  white-space: nowrap;
  user-select: none;
}

.miniBio * {
  max-width: 100%;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
