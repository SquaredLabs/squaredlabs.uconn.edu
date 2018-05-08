<template>
    <div class="workshop">
        <h1 class="workshop__title">{{ name }}</h1>
        <div class="workshop__details">
            <div class="workshop__detail">
                {{ time }}
                <br/>
                {{ date }}
            </div>
            <div class="workshop__detail">
                {{ addressTop }}
                <br/>
                {{ addressBottom }}
            </div>
        </div>
        <div class="workshop__description">
            <p v-html="description" />
        </div>
        <div class="workshop__technologies">
            <img class="workshop__technology" :src="technology" v-for="technology in technologies" :key="technology" />
        </div>
        <div class="workshop__links">
            <a :href="registrationLink" class="workshop__register">register</a>
            <br/>
            <img class="workshop__link" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png">
            <img class="workshop__link" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png">
            <img class="workshop__link" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png">
        </div>
    </div>
</template>

<script>

export default {
  props: ["name", "time", "date", "addressTop", "addressBottom", "description", "technologies", "registrationLink"],
  components: {
  }
};
</script>

<<style lang="scss" scoped>
@import "~assets/styles/vars";

.workshop {
    position: relative;
    left: -20px;
    background: $solid-blue;
    color: $white;
    padding: 20px;
}

// Mobile & Tablet
@media (max-width: $desktop) {
  .workshop {
      flex-basis: 100%;
      width: 100%;
  }
}

.workshop__details {
    font-family: "SpaceMono";
}

.workshop__detail {
    display: inline-block;
}

.workshop__description {
    font-size: 20px;
    line-height: 1.25;
}

.workshop__technology {
    background: url("/square-white.png") center/100% no-repeat;
    width: 40px;
    height: 40px;
    padding: 10px;
    margin-right: 20px;
}

.workshop__links {
    margin-top: 50px;
    text-align: center;
}

.workshop__link {
    width: 40px;
    height: 40px;
    padding: 15px;
}

.workshop__register {
    text-decoration: none;
    font-size: 30px;
    background-color: $dodger-blue-50;
    color: $white;
}
</style>
