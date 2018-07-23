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
        <Grid
          id="peopleCarousel"
          class="col-sm-4 col-md-6 col-8 col-lg-12">
          <div v-if="!people">Loading people...</div>
          <FullSizePersonCard
            v-for="person in people"
            v-else
            :key="person.id"
            :background="person.imageURL"
            :id="person.id"
            :name="person.name"
            :role="person.title"
            class=""
            @click.native="selectPerson(person.id)">
            <template slot="name">{{ person.name }}</template>
            <template slot="role">{{ person.role }}</template>
            <span v-html="person.description" />
          </FullSizePersonCard>
        </Grid>
        <div v-if="!people">Loading people...</div>
        <MiniPersonPhoto
          v-for="person in people"
          v-else
          :key="person.id"
          :background="person.imageURL"
          :id="person.id"
          :name="person.name"
          :role="person.title"
          class="col-1"
          @click.native="selectPerson(person.id)"/>
      </Grid>
      <!-- <BackgroundText
        :lines="['alu','mni']"
        class="alumni" /> -->
      <!-- <Grid
        v-if="people"
        id="alumniSection">
        <person-card
          v-for="person in people"
          :key="person.id"
          :background="person.imageURL"
          :id="person.id"
          class="col-sm-2"
          @mouseover.native="selectPerson(person.id)">
          <template slot="name">{{ person.name }}</template>
          <template slot="role">{{ person.title }}</template>
          <LinkParse :rawhtml="person.description"/>
        </person-card>
      </Grid>
      <div v-if="!people">Loading alumni...</div> -->
    </div>
  </div>
</template>

<script>
import Grid from "../components/GridLayout.vue"
import PersonCard from "../components/PersonCard.vue"
import FullSizePersonCard from "../components/FullSizePersonCard.vue"
import MiniPersonPhoto from "../components/MiniPersonPhoto.vue"
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
    MiniPersonPhoto,
    BackgroundText
  },
  // mounted() {
  //   document.querySelector(".fullSizePersonCard").classList.add("selected")
  //   document.querySelector(".miniPersonPhoto").classList.add("selected")
  //   var peopleCount = this.people.length
  //   var lastPerson = document.getElementById("peopleCarousel").lastChild
  //   lastPerson.classList.add("previousAdjacent")
  //   var peopleEls = document.querySelectorAll(".fullSizePersonCard")
  //   peopleEls.forEach(function(el) {
  //     var thisEl = el
  //     var i = (function() {
  //       var i = 0
  //       while ((el = el.previousSibling) != null) i++
  //       return i
  //     })()
  //     if (thisEl.classList.contains("selected")) {
  //       return false
  //     } else if (i > peopleCount / 2) {
  //       thisEl.classList.add("previousAdjacent")
  //     } else {
  //       thisEl.classList.add("nextAdjacent")
  //     }
  //   })
  // },
  // beforeUpdate() {
  // },
  methods: {
    selectPerson(id) {
      this.$store.commit("selectPerson", id)
    }
  }
}
</script>

<style scoped lang="scss">
@import "~assets/styles/vars";

#peoplePage {
  margin-top: 9.313em;
}

.gridded .gridded {
  margin: 0 0 0 -1.25em;
  padding-left: 1.25em;
}

.whiteBox {
  background: white;
  padding: 1.25em;
  width: 100%;
  margin-left: -1.25em;
  p {
    margin: 0;
  }
}

#peopleCarousel {
  padding-bottom: 3.052em;
  padding-right: 1.25em;
  margin-right: -1.25em;
  overflow: hidden;
}

@media screen and (min-width: $tablet) {
  .whiteBox {
    margin-left: 0;
    height: fit-content;
    width: auto;
    margin-bottom: 9.313em;
  }
}
</style>
