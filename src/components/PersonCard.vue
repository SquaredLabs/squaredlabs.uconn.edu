<template>
    <div class="person" :style="`background: url('${background}') center/150% no-repeat`">
        <div class="person__content">
            <p class="person__name">{{ name }}</p>
            <p class="person__role">{{ role }}</p>
        </div>
    </div>
</template>

<script>
export default {
  props: ["name", "role", "background"]
};
</script>

<style lang="scss" scoped>
@import "../styles/vars";

.person {
  background-color: orange;
  height: 20vw;
  position: relative;
}

.person:before {
  background-color: black;
  height: 100%;
  width: 100%;
  content: "";
  opacity: 0.2;
  position: absolute;
  display: block;
  transition: opacity 0.3s ease;
}

.person__content {
    box-sizing: border-box;
    position: absolute;
    bottom: -50px;
    left: 20px;
    right: 20px;
    display: inline;
    background: white;
    text-align: center;
    transition: all .3s ease;
    padding: 10px;
    overflow: hidden;
}

.person__name {
    font-family: Moderat;
    font-size: 20px;
	font-weight: bold;
	text-align: center;
	color: $dodger-blue;
}

.person__role {
    font-size: 16px;
}

p {
    margin: 0;
}
</style>
