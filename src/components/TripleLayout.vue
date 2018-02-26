<template>
    <div class="triple">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
@import "../styles/vars";

.triple {
  display: flex;
}

.triple__col {
  flex-basis: 33%;
  flex-grow: 0;
  margin-left: 20px;
  margin-right: 20px;
}

// Mobile & Tablet
// @media (max-width: $desktop) {
//   .quad {
//     flex-wrap: wrap;
//   }

//   .quad__col, .quad__triple_col {
//     flex-basis: 100%;
//     width: 100%;
//   }
// }
</style>