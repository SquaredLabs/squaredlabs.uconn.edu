<template>
  <div>
    <section id="jumbotron" style="margin-bottom: 80px; margin-top: 130px">
      <img class="img--fill-container" src="https://picsum.photos/1920/445" style="height:440px" />
      <layout vertical="true" style="margin-top: -485px">
        <layout-col s="whole" style="display: flex; justify-content: flex-end">
          <div style="background: white; width: 32vw" class="marginned--horizontally padded">
            <p>Without people, an organization is, well, nothing useful. ⬚² labs team members are a stellar group who share a passion for building beautiful and functional websites. Meet them — here and/or in real life.</p>
          </div>
        </layout-col>
        <layout-col s="whole">
          <layout>
            <layout-col style="padding: 40px">
              <img class="img--fill-container" src="https://picsum.photos/231/340" />
            </layout-col>
            <layout-col style="padding: 40px">
              <img class="img--fill-container" src="https://picsum.photos/231/340" />
            </layout-col>
            <layout-col style="padding: 40px">
              <img class="img--fill-container" src="https://picsum.photos/231/340" />
            </layout-col>
            <layout-col style="padding: 40px">
              <img class="img--fill-container" src="https://picsum.photos/231/340" />
            </layout-col>
          </layout>
        </layout-col>
      </layout>
    </section>
    <section id="alumni" style="margin-bottom: 80px">
      <layout v-for="x in 3" :key="x" style="padding-bottom: 20px">
        <person-card v-for="y in 4" :key="y" class="layout__col--quarter marginned--horizontally marginned--vertically" name="Dan Schwartz" role="Director" background="~/assets/images/dan.jpg">
          <p>“Take life (and everything) with a grain of salt.”</p>
        </person-card>
      </layout>
    </section>

  </div>
</template>

<script>
import Construction from "../components/Construction.vue";
import Layout from "../components/Layout.vue";
import LayoutCol from "../components/LayoutCol.vue";
import ProjectCard from "../components/ProjectCard.vue";
import PersonCard from "../components/PersonCard.vue";

export default {
  components: {
    Construction,
    Layout,
    LayoutCol,
    PersonCard,
    ProjectCard
  }
};
</script>

<style scoped lang="scss">
@import "~assets/styles/vars";

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