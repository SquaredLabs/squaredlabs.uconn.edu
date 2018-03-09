<template>
    <div class="dual">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
@import "../styles/vars";

.dual {
  display: flex;
}

.dual__col {
  flex-basis: 50%;
  flex-grow: 0;
  margin-left: 20px;
  margin-right: 20px;
}

.dual__bg-text {
  font-size: 149px;
  font-family: SpaceMono;
  font-weight: normal;
  position: absolute;
  right: 20px;
  color: white;
  z-index: -1;
}
</style>