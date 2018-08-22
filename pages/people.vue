<template>
  <div>
    <v-background-text :lines="['peo','ple']" />
    <div id="peoplePage">
      <v-grid-layout id="currentPeopleSection">
        <div
          class="whiteBox col-sm-4 col-md-3 off-md-3 off-5 off-lg-8">
          <p>Without people, an organization is, well, nothing useful. ⬚² labs team members are a stellar group who share
          a passion for building beautiful and functional websites. Meet them — here and/or in real life.</p>
        </div>
        <v-grid-layout
          id="peopleCarousel"
          class="col-sm-4 col-md-6 col-8 col-lg-12">
          <div v-if="!people">Loading people...</div>
          <v-person-card-full
            v-for="person in people"
            v-else
            :key="person.id"
            :background="person.imageURL"
            :id="person.id"
            :name="person.name"
            :role="person.title"
            @click.native="selectPerson(person.order)">
            <template slot="name">{{ person.name }}</template>
            <template slot="role">{{ person.role }}</template>
            {{ person.description }}
          </v-person-card-full>
        </v-grid-layout>
        <div v-if="!people">Loading people...</div>
        <v-person-photo
          v-for="person in people"
          v-else
          :key="person.id"
          :background="person.imageURL"
          :id="person.id"
          :name="person.name"
          :alt="person.name"
          :role="person.title"
          class="col-1"
          @click.native="selectPerson(person.order)"/>
      </v-grid-layout>
      <div
        class="whiteBox alumni col-sm-4 col-md-3 off-md-0 off-0 off-lg-0">
        <h1>Alumni</h1>
      </div>
      <v-grid-layout id="alumniPeopleSection">
        <v-person-card-medium
          v-for="person in alumni"
          :key="person.id"
          :background="person.imageURL"
          :id="person.id"
          :name="person.name"
          :role="person.title"
          class="col-sm-2">
          <template slot="name">{{ person.name }}</template>
          <template slot="role">{{ person.role }}</template>
          {{ person.description }}
        </v-person-card-medium>
      </v-grid-layout>
    </div>
  </div>
</template>

<script>
import VGridLayout from "~/components/VGridLayout.vue"
import VPersonCardMedium from "~/components/VPersonCardMedium.vue"
import VPersonCardFull from "~/components/VPersonCardFull.vue"
import VPersonPhoto from "~/components/VPersonPhoto.vue"
import VBackgroundText from "~/components/VBackgroundText.vue"
import Directus from "~/directus"

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
      people: peopleData.people.filter(person => !person.alumni),
      alumni: peopleData.people.filter(person => person.alumni),
      images: images
    }
  },
  components: {
    VGridLayout,
    VPersonCardMedium,
    VPersonCardFull,
    VPersonPhoto,
    VBackgroundText
  },
  methods: {
    selectPerson(order) {
      this.$store.commit("selectPerson", order)
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
.whiteBox.alumni {
  margin: 1.25em;
}

#peopleCarousel {
  padding-bottom: 3.052em;
  padding-right: 1.25em;
  margin-right: -1.25em;
  overflow: hidden;
}
#alumniCarousel {
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
  #peopleCarousel {
    height: 22.737em;
  }
}
</style>
