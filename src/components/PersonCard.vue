<template>
    <div class="person">
        <div class="person__photo" :style="`background: url('${background}') center/150% no-repeat`" />
        <div class="person__content">
            <p class="person__name">{{ name }}</p>
            <p class="person__role">{{ role }}</p>
            <div class="person__expanded">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["name", "role", "background"]
};
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";

.person {
  width: 25vw;
  height: 20vw;
  position: relative;
  transition: all 0.25s ease;

  &:hover .person__content {
    left: 0;
    right: 0;
    height: calc(30% + 50px);
  }

  &:hover .person__expanded { 
      opacity: 1;
  }

  &:hover .person__photo {
    margin: 30px;
  }

  &:hover .person__photo::before {
    width: 80%;
    left: 10%;
  }
}

.person__photo {
  height: 100%;
  transition: all 0.25s ease;
}
.person:hover .person__photo{
  filter:brightness(60%);
}

.person__content {
  box-sizing: border-box;
  position: absolute;
  bottom: -50px;
  left: 20px;
  right: 20px;
  background: white;
  text-align: center;
  transition: all 0.25s ease;
  padding: 10px;
  overflow: hidden;
  height: 4em;
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

.person__expanded {
  opacity: 0;
  padding-top: 10px;
  transition: opacity 0.5s ease;
}

p {
  margin: 0;
}
</style>
