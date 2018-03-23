<template>
  <div>
    <section class="jumbotron">
      <div class="jumbotron__selector">
        <img style="margin-left: -150px" src="https://placehold.it/300/300" />
        <img src="https://placehold.it/300/300" />
        <img style="margin-right: -150px" src="https://placehold.it/300/300" />
      </div>
      <div>
        <h1 class="jumbotron__title">script</h1>
        <h3 class="jumbotron__subtitle">with us</h3>
      </div>
    </section>
    <section class="workshop">
      <!-- <workshop-card name="Workshop Name" time="13:00-17:00" date="Jan 1, 2018" addressTop="1 Bishop Circle" addressBottom="Storrs CT 06269" description="Any other relevant text can go here. Now it’s longer though, which is pretty neat. You can talk about the workshop now." :technologies="['https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png', 'http://ryanchristiani.com/wp-content/uploads/2015/06/js-logo.png']" registration-link="http://google.com" /> -->

   </section>
  </div>
</template>

<script>
import Construction from "../components/Construction.vue";
import WorkshopCard from "../components/WorkshopCard.vue";

export default {
  components: {
    Construction,
    WorkshopCard
  }
};
</script>

<style lang="scss">
@import "../styles/vars";

.workshop {
  background-color: #323330;
}

.jumbotron {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.jumbotron__selector {
  display: flex;
  width: 100%;
  justify-content: space-between;
  overflow: hidden;
}

.jumbotron__title {
  font-family: Moderat;
  font-size: 4em;
  color: $dodger-blue;
  text-align: center;
}

.jumbotron__subtitle {
  font-weight: normal;
  font-size: 2em;
  color: $charcoal-grey;
  text-align: center;
}
</style>