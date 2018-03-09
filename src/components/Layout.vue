<template>
    <div class="layout">
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
@import "../styles/vars";

.layout {
  display: flex;
}

%col {
    margin-left: 20px;
    margin-right: 20px;
    flex-grow: 0;
}

.layout__col--quarter {
    @extend %col;
    flex-basis: 25%;
}

.layout__col--third {
    @extend %col;
    flex-basis: 33%;
}

.layout__col--half {
    @extend %col;
    flex-basis: 50%;
}

.layout__col--triple {
    @extend %col;
    flex-basis: 75%;
}

.layout__col--full {
    @extend %col;
    flex-basis: 100%;
}

// .quad__bg-text {
//   font-size: 149px;
//   font-family: SpaceMono;
//   font-weight: normal;
//   position: absolute;
//   right: 20px;
//   color: white;
//   z-index: -1;
// }

// // Mobile & Tablet
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