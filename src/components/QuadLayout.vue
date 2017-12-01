<template>
    <div class="quad">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
@import "../styles/vars";

.quad {
  display: flex;
}

.quad__col {
  flex-basis: 25%;
  flex-grow: 0;
  margin-left: 20px;
  margin-right: 20px;
}

.quad__triple_col {
  flex-basis: 75%;
}

// Mobile & Tablet
@media (max-width: $desktop) {
  .quad {
    flex-wrap: wrap;
  }

  .quad__col, .quad__triple_col {
    flex-basis: 100%;
    width: 100%;
  }
}
</style>
