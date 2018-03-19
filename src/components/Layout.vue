<template>
    <div v-if="!vertical" class="layout">
        <slot></slot>
    </div>
    <div v-else>
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
@import "../styles/vars";

.layout {
  display: flex;
}

.layout--vertical {
    display: flex;
    flex-direction: column;
}

%col {
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

.layout__col--pacman {
    @extend %col;
    flex-basis: 75%;
}

.layout__col--whole {
    @extend %col;
    flex-basis: 100%;
}

.marginned--horizontally {
    margin-left: 20px;
    margin-right: 20px;
}

.marginned--vertically {
    margin-top: 20px;
    margin-bottom: 20px;
}

.padded {
    padding: 20px;
}
</style>

<script>
export default {
    props: ["vertical"]
}
</script>