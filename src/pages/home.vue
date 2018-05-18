<template>
  <div>
    <section>
      <layout>
        <construction
          class="marginned--horizontally"
          style="width: 100%"
        />
      </layout>
    </section>
    <section>
      <layout
        style="margin-top:80px"
        text="projects"
        padding-top="110px">
        <div
          class="layout__col--quarter marginned--horizontally"
          style="position: relative; top: -80px">
          <p>Welcome to ⬚² [squared] labs. Together with UConn’s very best
            <SLink href="/people">students</SLink>, we build cutting-edge
            <SLink href="/projects">websites</SLink> that support UConn’s
            world-class research infrastructure.
          </p>
          <p>View our history, purpose, and space on the
            <SLink href="/labs">lab page</SLink>.
          </p>
        </div>
        <!-- Will only show first 3 projects in order -->
        <project-card 
          v-for="project in projects"
          v-if="project.order<=3"
          :key="project.id"
          :project="project"
          class="layout__col--quarter marginned--horizontally">
          <span v-html="project.large_summary"/>
        </project-card>
      </layout>
      <layout>
        <SLink
          class="link--pulled-right"
          href="/projects">
          See all our projects
        </SLink>
      </layout>
    </section>
    <section>
      <layout text="workshops">
        <div class="layout__col--pacman padded">
          <workshop-card
            :technologies="['https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png', 'http://ryanchristiani.com/wp-content/uploads/2015/06/js-logo.png']"
            registration-link="http://google.com">
            <template slot="name">Workshop Name</template>
            <template slot="time">13:00-17:00</template>
            <template slot="date">Jan 1, 2018</template>
            <template slot="address-top">1 Bishop Circle</template>
            <template slot="address-bottom">Storrs CT 06269</template>
            <p>Any other relevant text can go here. Now it’s longer though, which is pretty neat. You can talk about the workshop now.</p>
          </workshop-card>
        </div>
        <div
          class="layout__col--quarter padded"
          style="margin-top: 80px">
          <p>Learning from others and sharing what we know is central to the ⬚² labs philosophy. We see workshops as an opportunity to do both (in addition to getting to know the UConn web development community).</p>
          <p>Our workshops are open to all members of the UConn community, for free.</p>
          <SLink href="/workshops">View all workshops</SLink>
        </div>
      </layout>
    </section>
    <section style="padding-top: 6em">
      <layout>
        <SLink
          class="link--pulled-right"
          href="/people">
          Meet the team
        </SLink>
      </layout>
      <layout>
        <div
          class="layout__col--quarter marginned--horizontally"
          style="position: relative; top: -80px">
          <p>⬚² labs team members are a stellar group who share a passion for building beautiful, functional websites.</p>
          <p>We are always looking for talented and hard-working students to join our ranks. We look for students with a track record of building cool stuff in their spare time, web experience, and a passion for innovation and creation. If that sounds like you,
            <SLink
              href="/connect">
              get in touch!
            </SLink>
          </p>
        </div>
        <person-card
          v-for="person in people"
          :key="person.id"
          :background="person.imageURL"
          :name="person.name"
          :role="person.title"
          class="layout__col--quarter marginned--horizontally">
          <template slot="name">{{ person.name }}</template>
          <template slot="role">{{ person.role }}</template>
          <span v-html="person.description"/>
        </person-card>
      </layout>
    </section>
    <section>
      <layout style="margin-top: 260px">
        <connect-card
          :background="require('~/assets/images/connect/gitlab.svg')"
          class="layout__col--quarter marginned--horizontally"
          link="https://gitlab.com/squared-labs" />
        <connect-card
          :background="require('~/assets/images/connect/mail.svg')"
          :hidden-image="require('~/assets/images/connect/contact.png')"
          class="layout__col--quarter marginned--horizontally" />
        <connect-card
          :background="require('~/assets/images/connect/btc.svg') "
          class="layout__col--quarter marginned--horizontally"
          link="http://www.foundation.uconn.edu/send-your-gift/" />
        <div
          class="layout__col--quarter marginned--horizontally"
          style="position: relative; top: -80px">
          <p>If you like what you see here and want to offer support, or get involved as something other than a member of ⬚² labs, we would love to hear from you! From workshops, to open source contributions, to donations, there are plenty ways to become a part of what we do. </p>
          <SLink
            href="/connect">
            Connect with us
          </SLink>
        </div>
      </layout>
    </section>
  </div>
</template>

<script>
import Construction from "../components/Construction.vue"
import Layout from "../components/Layout.vue"
import ProjectCard from "../components/ProjectCard.vue"
import WorkshopCard from "../components/WorkshopCard.vue"
import PersonCard from "../components/PersonCard.vue"
import ConnectCard from "../components/ConnectCard.vue"
import SLink from "../components/Link.vue"
import Directus from "../../directus"

//  Recursive function to pick 3 different random people.
//  If anyone has a better idea, feel free to change this.
const selectPeople = (people, numberToSelect, selectedIndices = []) => {
  if (selectedIndices.length === numberToSelect) {
    return selectedIndices.map(index => people[index])
  }
  let randInt = Math.round(Math.random() * people.length)
  if (selectedIndices.includes(randInt))
    return selectPeople(people, numberToSelect, selectedIndices)
  selectedIndices.push(randInt)
  return selectPeople(people, numberToSelect, selectedIndices)
}

export default {
  async asyncData({ params }) {
    let data = await Directus()
    let peopleData = data[0]
    let projectData = data[1]
    return {
      people: selectPeople(peopleData.people, 3),
      projects: projectData.projects
    }
  },
  components: {
    Layout,
    Construction,
    ProjectCard,
    WorkshopCard,
    ConnectCard,
    PersonCard,
    SLink
  }
}
</script>

<style scoped lang="scss">
@import "~assets/styles/vars";

section {
  margin-bottom: 80px;
}

.link--pulled-right {
  margin: 20px;
  margin-left: auto;
}
</style>
