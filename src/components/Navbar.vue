<template>
  <div class="navbar">
        <a class="link" href="#">home</a>
        <a class="link" href="#">projects</a>
        <a class="link" href="#">people</a>
        <a class="link" href="#">workshops</a>
        <a class="link" href="#">the lab</a>
        <a class="link" href="#">connect</a>
    </div>
</template>

<style lang="scss">
@import "../styles/vars";

.navbar {
    text-align: center;
}

.navbar > .link {
    position: relative;
    color: $onyx;
    font-family: SpaceMono;
    margin-right: 20px;
    padding-left: 20px;
    padding-right: 20px;
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

a.mobile-navbar {
    text-decoration: none;
    width: 500px;
    background-color: $dodger-blue-50;
}

@media (max-width: 650px) {
    .navbar {
        display: none;
    }

    .mobile-navbar {
        display: block;
    }
}
</style>
