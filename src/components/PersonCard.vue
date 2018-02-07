<template>
    <div class="person">
        <div class="person__photo" :style="`background: url('${background}') center/150% no-repeat`" />
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
    width: 25vw;
    height: 20vw;
    position: relative;
    transition: all 0.3s ease;

    &:hover .person__content {
        left: 0;
        right: 0;
        height: calc(100% + 50px);
    }

    &:hover .person__photo {
        margin: 30px;
    }

    &:hover .person__photo::before {
        //TODO: fix this weird animation bug when the cursor leaves the hover position
        display: none;
    }
}

.person__photo {
    height: 100%;
    transition: all 0.3s ease;

    &::before {
        background-color: black;
        height: 100%;
        width: 100%;
        content: "";
        opacity: 0.2;
        position: absolute;
    }
}

.person__content {
    box-sizing: border-box;
    position: absolute;
    bottom: -50px;
    left: 20px;
    right: 20px;
    background: white;
    text-align: center;
    transition: all 0.5s ease;
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

p {
    margin: 0;
}
</style>
