<template>
  <div>
    <BackgroundText :lines="['peo','ple']" />
    <div id="peoplePage">
      <Grid id="currentPeopleSection">
        <div
          class="whiteBox col-sm-4 col-md-3 off-md-3 off-5 off-lg-8">
          <p>Without people, an organization is, well, nothing useful. ⬚² labs team members are a stellar group who share
          a passion for building beautiful and functional websites. Meet them — here and/or in real life.</p>
        </div>
        <div v-if="!people">Loading current people...</div>
        <FullSizePersonCard
          v-for="person in people"
          v-else
          :key="person.id"
          :background="person.imageURL"
          :name="person.name"
          :role="person.title"
          class="col-sm-1 col-md-4">
          <template slot="name">{{ person.name }}</template>
          <template slot="role">{{ person.role }}</template>
          <span v-html="person.description" />
        </FullSizePersonCard>
      </Grid>
      <BackgroundText
        :lines="['alu','mni']"
        class="alumni" />
      <Grid
        v-if="people"
        id="alumniSection">
        <!-- <h2 class="col-sm-4 col-md-6 col-8 off-lg-1">Alumni</h2> -->
        <person-card
          v-for="person in people"
          :key="person.id"
          :background="person.imageURL"
          class="col-sm-2">
          <template slot="name">{{ person.name }}</template>
          <template slot="role">{{ person.title }}</template>
          <LinkParse :rawhtml="person.description"/>
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
import LinkParse from "../components/LinkParse.vue"
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
    LinkParse,
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

#alumniSection {
  margin-top: 18.19em;
}

@media screen and (min-width: $tablet) {
  .whiteBox {
    margin-left: 0;
    height: fit-content;
    width: auto;
    margin-bottom: 9.313em;
  }
}

@media screen and (min-width: $desktopLg) {
  #alumniSection {
    .person:nth-of-type(4n + 1) {
      grid-column-start: 3;
    }
  }
}
</style>

<style lang="scss">
@import "~assets/styles/vars";

div.backgroundText.alumni {
  // top: 154vh;
  top: calc(775px + 90vw);
  line-height: 0.8;
}

@media screen and (min-width: $tablet) {
  div.backgroundText.alumni {
    top: 1225px;
  }
}

@media screen and (min-width: $desktop) {
  div.backgroundText.alumni {
    top: 1150px;
  }
}

@media screen and (min-width: $desktopLg) {
  div.backgroundText.alumni {
    top: 1100px;
  }
}
</style>
