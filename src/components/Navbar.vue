<template>
<div class="navbar">
    <figure class="brand">
        <img src="../images/wordmark.png" /> 
    </figure>
    <router-link class="link" to="/">home</router-link>
    <router-link class="link" to="/projects">projects</router-link>
    <router-link class="link" to="/people">people</router-link>
    <router-link class="link" to="/workshops">workshops</router-link>
    <a class="link" href="#">the lab</a>
    <a class="link" href="#">connect</a>

</div>
</template>

<style scoped lang="scss">
    @import "../styles/vars";

    .navbar {
        padding: 20px;
        text-align: center;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: flex-end;
    }

    .brand {
        flex-basis: calc(100% / 8 * 2);
        flex-grow: 0;
        min-width: 0;
        margin: 0;
    }

    .brand > img {
        max-width: 100%;
    }

    .link {
        flex-basis: calc(100% / 8);
        align-self: flex-end;
        position: relative;
        color: $onyx;
        font-family: SpaceMono;
        transition: all .15s ease;
        text-decoration: none;
    }

    .link:before {
        content: '';
        position: absolute;
        display: block;
        height: 1em;
        left: 20px;
        right: 20px;
        background-color: $dodger-blue-50;
        transition: background-color .3s ease;
        z-index: -1;
    }

    .link:hover {
        bottom: -2px;
    }

    .link:hover:before {
        background-color: $dodger-blue;
        top: -2px;
    }

    @media only screen and (min-width: $tablet) and (max-width: $desktop) {
        .brand {
            flex-basis: 100%;
            padding-bottom: 20px;
        }

        .brand > img {
            max-width: 50%;
        }

        .link {
            flex-basis: calc(100% / 6);
        }

        .link:before {
            left: 10px;
            right: 10px;
        }
    }

    @media only screen and (min-width: 0px) and (max-width: $tablet) {
        .navbar {
            display: none;
        }
    }
</style>