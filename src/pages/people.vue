<template>
  <div>
    <BackgroundText :lines="['peo','ple']"/>
    <section
      id="jumbotron"
      style="margin-bottom: 80px; margin-top: 130px">
      <img
        :src="images.top"
        class="img--fill-container"
        style="height:440px" >
      <OurLayout
        vertical
        style="margin-top: -485px" 
        class="jumbotronLayout">
        
        <layout-col
          s="whole"
          style="display: flex; justify-content: flex-end">
          <div
            style="background: white; width: 32vw"
            class="marginned--horizontally padded">
            <p>Without people, an organization is, well, nothing useful. ⬚² labs team members are a stellar group who share a passion for building beautiful and functional websites. Meet them — here and/or in real life.</p>
          </div>
        </layout-col>
        <layout-col s="whole">
          <OurLayout>
            <layout-col style="padding: 40px">
              <img
                class="img--fill-container"
                src="https://picsum.photos/231/340" >
            </layout-col>
            <layout-col style="padding: 40px">
              <img
                class="img--fill-container"
                src="https://picsum.photos/231/340" >
            </layout-col>
            <layout-col style="padding: 40px">
              <img
                class="img--fill-container"
                src="https://picsum.photos/231/340" >
            </layout-col>
            <layout-col style="padding: 40px">
              <img
                class="img--fill-container"
                src="https://picsum.photos/231/340" >
            </layout-col>
          </OurLayout>
        </layout-col>
      </OurLayout>
    </section>
    <section   
      style="margin-bottom: 80px">
      <OurLayout 
        v-if="people" 
        id="alumni">
        <person-card
          v-for="person in people"         
          :key="person.id"
          :background="person.imageURL"
          class="layout__col--quarter marginned--horizontally marginned--vertically">
          <template slot="name">{{ person.name }}</template>
          <template slot="role">{{ person.title }}</template>
          <span v-html="person.description"/>
        </person-card>
      </OurLayout>
      <div v-if="!people">Loading people</div>
    </section>
  </div>
</template>

<script>
import OurLayout from "../components/Layout.vue"
import LayoutCol from "../components/LayoutCol.vue"
import PersonCard from "../components/PersonCard.vue"
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
    return { people: peopleData.people, images: images }
  },
  components: {
    OurLayout,
    LayoutCol,
    PersonCard,
    BackgroundText
  }
}
</script>

<style scoped lang="scss">
@import "~assets/styles/vars";
#alumni {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 4;
}

.number {
  height: 93px;
  font-family: SpaceMono;
  font-size: 143px;
  font-weight: normal;
  margin: 0;
  padding: 0;
  padding-top: 40px;
  text-decoration: underline;
  text-decoration-color: $rouge-40;
}

.design {
  transform: rotate(-90deg);
  font-family: SpaceMono;
  font-size: 205px;
  font-weight: normal;
  line-height: normal;
  text-align: right;
  color: $dodger-blue;
  margin: 0;
}
.jumbotronLayout {
  position: relative;
  z-index: 5;
}

.img--fill-container {
  width: 100%;
  height: 100%;
}

.marginned--vertically--6x {
  margin-bottom: 120px;
}
</style>
