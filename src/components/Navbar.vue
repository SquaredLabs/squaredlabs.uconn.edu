<template>
<div class="navbar grid">
    <!-- <img src="images/wordmark.png" class="column" /> -->
    <router-link class="link column" to="/">home</router-link>
    <router-link class="link column" to="/projects">projects</router-link>
    <router-link class="link column" to="/people">people</router-link>
    <router-link class="link column" to="/workshops">workshops</router-link>
    <a class="link column" href="#">the lab</a>
    <a class="link column" href="#">connect</a>
</div>
</template>

<script>
import Wordmark from "../images/wordmark.png";

export default {}
</script>

<style scoped lang="scss">
@import "../styles/vars";

.grid {
    display: flex;
    flex-wrap: wrap;
}

.column {
    flex-basis: 12.5%;
    margin-right: 20px;
    // margin-left: 20px;
}

// @media (min-width: $tablet) {
//     .column {
//         flex-basis: 20%;
//     }
// }

// @media (min-width: $desktop) {
//     .column {
//         flex-basis: 8.333%;
//     }
// }

.navbar {
    text-align: center;
}

// .navbar > * {
//     grid-column: col-start / span 8;
// }

.navbar > .link {
    position: relative;
    color: $onyx;
    font-family: SpaceMono;
    transition: all .15s ease;
    text-decoration: none;
}

.navbar > .link:before {
    content: '';
    position: absolute;
    display: block;
    height: 1em;
    width: 100%;
    top: 2px;
    left: 0;
    background-color: $dodger-blue-50;
    transition: background-color .3s ease;
    z-index: -1;
}

.navbar > .link:hover {
    bottom: -2px;
}

.navbar .link:hover:before {
    background-color: $dodger-blue;
    top: -2px;
}
</style>
