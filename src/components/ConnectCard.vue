<template>
    <a class="link" :href="link" target="_blank">
        <div class="link__image" :style="`background-image: url('${background}'); background-repeat: no-repeat; background-position: center center; background-size: 15%;`" />
    </a>
</template>

<script>
export default {
  props: ["link", "background"]
};
</script>

<style lang="scss" scoped>
@import "../styles/vars";

.link {
    height: 100px;
    background-color: #ffffff;
}

.link__image {
    height: 100%;
}


</style>
