<template>
  <div>
    <section
      id="jumbotron"
      style="margin-bottom: 80px; margin-top: 130px">
      <img
        class="img--fill-container"
        src="https://picsum.photos/1920/445"
        style="height:440px" >
      <OurLayout
        vertical
        style="margin-top: -485px">
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

      <OurLayout id="alumni">
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

    </section>

  </div>
</template>

<script>
import OurLayout from "../components/Layout.vue"
import LayoutCol from "../components/LayoutCol.vue"
import ProjectCard from "../components/ProjectCard.vue"
import PersonCard from "../components/PersonCard.vue"
import PeopleData from "~/assets/people.json"

export default {
  components: {
    OurLayout,
    LayoutCol,
    PersonCard,
    ProjectCard
  },
  data: () => ({ people: PeopleData.people })
}
</script>

<style scoped lang="scss">
@import "~assets/styles/vars";
#alumni {
  display: flex;
  flex-wrap: wrap;
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

.img--fill-container {
  width: 100%;
  height: 100%;
}

.marginned--vertically--6x {
  margin-bottom: 120px;
}
</style>
