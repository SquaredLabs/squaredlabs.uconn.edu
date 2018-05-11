<template>
  <div>
    <section class="jumbotron">
      <div class="jumbotron__selector">
        <img
          style="margin-left: -150px"
          src="https://placehold.it/300/300" >
        <img src="https://placehold.it/300/300" >
        <img
          style="margin-right: -150px"
          src="https://placehold.it/300/300" >
      </div>
      <div>
        <h1 class="jumbotron__title">script</h1>
        <h3 class="jumbotron__subtitle">with us</h3>
      </div>
    </section>
    <section id="workshop">
      <div class="workshop">
        <layout class="layout--centered-children">
          <layout
            vertical="true"
            class="workshop__details">
            <div class="layout__col">
              <h1 class="workshop__name">Workshop Name</h1>
            </div>
            <div class="layout__col workshop__metadata">
              <layout>
                <div class="layout__col--half">
                  <p>17:00-18:00</p>
                  <p>Monday Jan 1st, 2018</p>
                </div>
                <div class="layout__col--half">
                  <p>1 Bishop Circle,</p>
                  <p>Storrs CT 06269</p>
                </div>
              </layout>
            </div>
            <div class="layout__col">
              <p class="workshop__description">Businesses at present had creatively generated effective advertising campaigns in the form of audio visual media that includes the television and radios and the print media that cover the newspaper and campaign materials like the posters, brochures, business cards, flyers and many more. Taking part with the flyers.</p>
            </div>
            <div
              class="layout__col"
              style="padding-top: 20px">
              <img
                class="workshop__technology"
                src="http://ryanchristiani.com/wp-content/uploads/2015/06/js-logo.png" >
            </div>
            <div
              class="layout__col layout--centered-children"
              style="padding-top: 30px">
              <layout
                vertical="true"
                style="width: 30%">
                <div class="layout__col layout--centered-children">
                  <h1 class="workshop__register">register</h1>
                </div>
                <div class="layout__col">
                  <layout>
                    <div class="layout__col--third layout--centered-children">
                      <img
                        class="workshop__icon"
                        src="http://ryanchristiani.com/wp-content/uploads/2015/06/js-logo.png" >
                    </div>
                    <div class="layout__col--third layout--centered-children">
                      <img
                        class="workshop__icon"
                        src="http://ryanchristiani.com/wp-content/uploads/2015/06/js-logo.png" >
                    </div>
                    <div
                      class="layout__col--third layout--centered-children"
                      style="padding-bottom: 60px">
                      <img
                        class="workshop__icon"
                        src="http://ryanchristiani.com/wp-content/uploads/2015/06/js-logo.png" >
                    </div>
                  </layout>
                </div>
              </layout>
            </div>
          </layout>
        </layout>
        <layout class="layout---spaced-between-children">
          <layout
            class="workshop__previous"
            vertical="true"
            style="color: black; background: #00dbff;">
            <div
              class="layout__col"
              style="width: 50%">
              <h1>Workshop Name</h1>
            </div>
            <div class="layout__col">
              <p class="workshop__metadata">Monday 1/1/2018</p>
            </div>
            <div class="layout__col">
              <img
                class="workshop__technology"
                src="http://ryanchristiani.com/wp-content/uploads/2015/06/js-logo.png" >
            </div>
          </layout>
          <layout
            class="workshop__next"
            vertical="true"
            style="color: white; background: #ff5a5c;">
            <div
              class="layout__col"
              style="width: 50%">
              <h1>Workshop Name</h1>
            </div>
            <div class="layout__col">
              <p class="workshop__metadata">Monday 1/1/2018</p>
            </div>
            <div class="layout__col">
              <img
                class="workshop__technology"
                src="http://ryanchristiani.com/wp-content/uploads/2015/06/js-logo.png" >
            </div>
          </layout>
        </layout>
      </div>
      <layout class="layout--centered-children">
        <SLink
          style="margin-right:1em;"
          text="←"
          font-size="40px"
          link_ref=""/>
        <SLink
          text="→"
          font-size="40px"
          link_ref=""/>
      </layout>
    </section>
  </div>
</template>

<style lang="scss">
@import "~assets/styles/vars";
//TODO: Revisit margins and paddings for workshop items
//TODO: Make next/previous workshop cards a component
//TODO: Reuse workshop card? Maybe add full vs widget mode to props so same component can be used on home and workshops page?

%workshop--mini-card {
  display: inline-block;
  padding: 10px;
  position: relative;
  top: 40px;
  width: 20vw;
}

.workshop__previous {
  @extend %workshop--mini-card;
  left: 20px;
}

.workshop__next {
  @extend %workshop--mini-card;
  right: 20px;
}

.workshop {
  background-color: #323330;
  color: $yellow;
  position: relative;
  margin-bottom: 40px;
}

.workshop__details {
  padding-top: 60px;
  width: 40%;
}

.workshop__name {
  font-size: 3.5em;
  font-weight: normal;
}

.workshop__description {
  padding: 0;
}

.workshop__metadata {
  font-family: "SpaceMono";
}

.workshop__technology {
  background: url("~/assets/images/square-white.png") center/100% no-repeat;
  width: 40px;
  height: 40px;
  padding: 10px;
  margin-right: 20px;
}

.workshop__icon {
  width: 40px;
  height: 40px;
}

.workshop__register {
  width: 100%;
  color: white;
  text-align: center;
  background-color: $dodger-blue;
  font-size: 2em;
  padding-top: 5px;
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
  font-family: "Moderat";
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

<script>
import Layout from "../components/Layout.vue"
import WorkshopCard from "../components/WorkshopCard.vue"
import SLink from "../components/Link.vue"

export default {
  components: {
    Layout,
    WorkshopCard,
    SLink
  }
}
</script>
