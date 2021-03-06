<template>
  <div>
    <div id="peoplePage">
      <v-grid-layout id="currentPeopleSection">
        <v-background-text id="peopleBackgroundText" :lines="['people']" />
        <div class="whiteBox col-sm-4 col-md-3 off-md-4 off-5 off-lg-8">
          <p>
            Without people, an organization is, well, nothing useful. ⬚² labs
            team members are a stellar group who share a passion for building
            beautiful and functional websites. Meet them — here and/or in real
            life.
          </p>
        </div>
        <v-grid-layout
          id="peopleCarousel"
          class="col-sm-4 col-md-6 col-8 col-lg-12"
        >
          <div v-if="!people">Loading people...</div>
          <v-person-card-full
            v-for="(person, index) in people"
            v-else
            :key="person.id"
            :tabindex="index"
            :background="person.imageURL"
            :order="person.order"
            :name="person.name"
            :role="person.title"
            @click.native="selectPerson(person.order)"
          >
            <template slot="name">{{ person.name }}</template>
            <template slot="title">
              {{ person.title }}
            </template>
            <template slot="class">
              {{ person.class }}
            </template>
            <template slot="degree">
              {{ person.degree }}
            </template>
            {{ person.description }}
          </v-person-card-full>
        </v-grid-layout>
        <div v-if="!people">Loading people...</div>
        <div
          v-else
          class="people-quick-select col-sm-4 col-md-6 off-1 off-lg-3"
        >
          <v-person-photo
            v-for="(person, index) in people"
            :key="person.id"
            :tabindex="index"
            :background="person.imageURL"
            :order="person.order"
            :name="person.name"
            :role="person.title"
            @click.native="selectPerson(person.order)"
          />
        </div>
      </v-grid-layout>
      <section class="alumni-section">
        <v-background-text :lines="['alumni']" />
        <v-grid-layout id="alumniPeopleSection">
          <v-person-card-medium
            v-for="(person, index) in alumni"
            :key="person.id"
            :tabindex="index + people.length"
            :background="person.imageURL"
            :order="person.order"
            :name="person.name"
            :role="person.title"
            class="col-sm-2 alumni"
          >
            <template slot="name">{{ person.name }}</template>
            <template slot="role">{{ person.role }}</template>
            {{ person.description }}
          </v-person-card-medium>
        </v-grid-layout>
      </section>
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
  async asyncData() {
    let data = await Directus()
    let peopleData = data[0]
    return {
      people: peopleData.people
        .filter(person => !person.alumni)
        .sort((person1, person2) => person1.order - person2.order)
        // map is necessary to remove "holes" after cutting out alumni
        .map((person, index) => {
          person.order = index
          return person
        }),
      alumni: peopleData.people
        .filter(person => person.alumni)
        .sort((person1, person2) => person1.order - person2.order)
        .map((person, index) => {
          person.order = index
          return person
        })
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

.people-quick-select {
  text-align: center;
}

#alumniCarousel {
  padding-bottom: 3.052em;
  padding-right: 1.25em;
  margin-right: -1.25em;
  overflow: hidden;
}

.alumni-section {
  position: relative;
  min-height: 60vh;
}

.alumni-section .gridded {
  padding-top: 10em;
}

@media (min-width: $desktopLg) {
  .alumni:nth-of-type(4n + 1) {
    grid-column-start: 3;
  }
}

@media screen and (min-width: $tablet) {
  .whiteBox {
    margin-left: 0;
    height: fit-content;
    width: auto;
    margin-bottom: 3em;
  }
  #peopleCarousel {
    height: 22.737em;
  }
}

@media screen and (max-width: $tablet) {
  #peopleBackgroundText {
    margin-top: -1em;
  }
}
</style>
