<template>
    <div style="position: relative;">
        <img class="mini__icon" :src="icon" />
        <div class="mini__card">
            <b>Raymond Baldwin</b>
            <p style="margin: 0">Project Lead</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["icon", "name", "position"]
}
</script>


<style lang="scss" scoped>
@import "../styles/vars";

.mini__icon {
    width: 80px;
    height: 80px;
}

.mini__card {
    background: white;
    padding: 10px;
    position: absolute;
    top: 22px;
    bottom: 10px;
    left: 40px;
    white-space: nowrap;
}

</style>