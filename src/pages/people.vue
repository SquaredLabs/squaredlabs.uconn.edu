<template>
  <div>
    <BackgroundText :lines="['peo','ple']" />
    <div id="peoplePage">
      <Grid id="currentPeopleSection">
        <!-- <img
          :src="images.top"
          class="img--fill-container"
          style="height:440px" > -->
        <div
          class="whiteBox col-sm-4 col-md-2">
          <p>Without people, an organization is, well, nothing useful. ⬚² labs team members are a stellar group who share
          a passion for building beautiful and functional websites. Meet them — here and/or in real life.</p>
        </div>
        <FullSizePersonCard
          v-for="person in people"
          v-if="people"
          :key="person.id"
          :background="person.imageURL"
          :name="person.name"
          :role="person.title"
          class="col-sm-1 col-md-3">
          <template slot="name">{{ person.name }}</template>
          <template slot="role">{{ person.role }}</template>
          <span v-html="person.description" />
        </FullSizePersonCard>
        <div v-if="!people">Loading current people...</div>
      </Grid>
      <Grid
        v-if="people"
        id="alumniSection">
        <person-card
          v-for="person in people"
          :key="person.id"
          :background="person.imageURL"
          class="col-sm-2">
          <template slot="name">{{ person.name }}</template>
          <template slot="role">{{ person.title }}</template>
          <span v-html="person.description" />
        </person-card>
      </Grid>
      <div v-if="!people">Loading alumni...</div>
    </div>
  </div>
</template>

<script>
import Grid from "../components/GridLayout.vue"
import PersonCard from "../components/PersonCard.vue"
import FullSizePersonCard from "../components/FullSizePersonCard.vue"
import BackgroundText from "../components/BackgroundText.vue"
import Directus from "../../directus"

export default {
  async asyncData({ params }) {
    let data = await Directus()
    let peopleData = data[0]
    let imageData = data[2].images
    let imageDataDirty = imageData.filter(image => {
      return image.page === "people"
    })
    let images = {}
    for (let image of imageDataDirty) {
      images[image.page_location] = image.imageURL
    }
    return {
      people: peopleData.people,
      images: images
    }
  },
  components: {
    Grid,
    PersonCard,
    FullSizePersonCard,
    BackgroundText
  }
}
</script>

<style scoped lang="scss">
@import "~assets/styles/vars";

#peoplePage {
  margin-top: 9.313em;
}

.whiteBox {
  background: white;
  padding: 20px;
  width: 100%;
  margin-left: -20px;
  p {
    margin: 0;
  }
}

@media screen and (min-width: $tablet) {
  .whiteBox {
    margin-left: 0;
    height: fit-content;
    width: auto;
  }
}
</style>

<style lang="scss">
@import "~assets/styles/vars";

@media screen and (max-width: $tablet) {
  div.fullSizePersonCard:nth-child(2) {
    grid-column: 1 / 5;
    margin-left: -20px;
    width: calc(100% + 40px);
    height: 50vh;
    // box-sizing: border-box;
  }
}

@media screen and (min-width: $tablet) {
  div.fullSizePersonCard:nth-child(2) {
    // grid-column-start: unset;
    // grid-column-end: span 2;
    margin-left: 0;
  }
}
div.fullSizePersonCard:nth-child(2) ~ .fullSizePersonCard {
  height: auto;

  .personPhoto {
    width: 100%;
    height: calc((100vw - 100px) / 4);
  }
  .personContent {
    width: 0;
    height: 0;
    display: none;
  }
}
</style>
