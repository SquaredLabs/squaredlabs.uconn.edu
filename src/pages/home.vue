<template>
  <div>
    <Grid
      id="landSection"
      section="landing">
      <div class="col-lg-10 col-8 col-sm-4 col-md-6 off-lg-1">
        <img
          class="logo"
          src="~/assets/images/squaredlabs.svg">
      </div>
    </Grid>
    <Grid
      id="projectSection"
      section="projects">
      <div
        text="projects"
        class="col-sm-4 col-md-2 off-lg-1">
        <p>Welcome to ⬚² [squared] labs. Together with UConn’s very best
          <SLink href="/people">students</SLink>, we build cutting-edge
          <SLink href="/projects">websites</SLink> that support UConn’s world-class research infrastructure.
        </p>
        <p>View our history, purpose, and space on the
          <SLink href="/labs">lab page</SLink>.
        </p>
      </div>
      <!-- Will only show first 3 projects in order -->
      <project-card
        v-for="project in projects"
        v-if="projects&&project.order<=3"
        :key="project.id"
        :project="project"
        class="col-lg-2 col-sm-2">
        <LinkParse :rawhtml="project.large_summary"/>
      </project-card>
      <div v-if="!projects">Loading projects</div>
      <div class="linkPulledRight off-lg-9 off-6 off-md-4 off-sm-2 col-sm-2">
        <SLink href="/projects">
          See all projects &rarr;
        </SLink>
      </div>
    </Grid>
    <!--<section>
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
          class="">
          <p>Learning from others and sharing what we know is central to the ⬚² labs philosophy. We see workshops as an opportunity to do both (in addition to getting to know the UConn web development community).</p>
          <p>Our workshops are open to all members of the UConn community, for free.</p>
          <SLink href="/workshops">View all workshops</SLink>
        </div>
      </layout>
    </section>-->
    <Grid
      v-if="people"
      id="peopleSection"
      section="people">
      <div class="peopleText col-sm-4 col-md-2 off-lg-1">
        <p>⬚² labs team members are a stellar group who share a passion for building beautiful, functional websites.</p>
        <p>We are always looking for talented and hard-working students to join our ranks. We look for students with a track
        record of building cool stuff in their spare time, web experience, and a passion for innovation and creation. If
        that sounds like you,
          <SLink href="/connect">
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
        class="col-sm-2 col-lg-2">
        <template slot="name">{{ person.name }}</template>
        <template slot="role">{{ person.role }}</template>
        <span v-html="person.description" />
      </person-card>
      <div v-if="!people">Loading people</div>
      <div class="linkPulledRight off-lg-9 off-6 off-md-4 off-sm-2 col-sm-2">
        <SLink href="/people">
          Meet the full team &rarr;
        </SLink>
      </div>
    </Grid>
    <Grid
      id="connectSection"
      section="connect">
      <connect-card
        :background="require('~/assets/images/connect/gitlab.svg')"
        link="https://gitlab.com/squared-labs"
      />
      <connect-card
        :background="require('~/assets/images/connect/mail.svg')"
        :hidden-image="require('~/assets/images/connect/contact.png')" />
      <connect-card
        :background="require('~/assets/images/connect/btc.svg') "
        link="http://www.foundation.uconn.edu/send-your-gift/"
      />
      <div class="connectText col-sm-2 col-md-4 off-6 col-2">
        <p>If you like what you see here and want to offer support, or get involved as something other than a member of ⬚²
        labs, we would love to hear from you! From workshops, to open source contributions, to donations, there are plenty
        ways to become a part of what we do. </p>
      </div>
      <div class="linkPulledRight col-sm-2">
        <SLink href="/connect">
          Connect with us &rarr;
        </SLink>
      </div>
    </Grid>
  </div>
</template>

<script>
import Grid from "../components/GridLayout.vue"
import ProjectCard from "../components/projects/ProjectCard.vue"
import WorkshopCard from "../components/WorkshopCard.vue"
import PersonCard from "../components/PersonCard.vue"
import ConnectCard from "../components/ConnectCard.vue"
import SLink from "../components/Link.vue"
import LinkParse from "../components/LinkParse.vue"
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
    Grid,
    ProjectCard,
    WorkshopCard,
    ConnectCard,
    PersonCard,
    SLink,
    LinkParse
  },
  data: () => ({
    people: [],
    projects: []
  })
}
</script>

<style scoped lang="scss">
@import "~assets/styles/vars";

#projectSection,
#peopleSection,
#connectSection {
  &:before {
    content: attr(section);
    font-family: SpaceMono;
    color: white;
    font-size: 19.5vw;
    line-height: 1;
    position: absolute;
    width: 50vw;
    text-align: right;
    word-break: break-word;
    bottom: 20px;
    right: 0;
  }
  > * {
    z-index: 1;
  }
}

#connectSection:before {
  left: 0;
  text-align: left;
}

.linkPulledRight {
  justify-self: end;
  align-self: end;
}

.connectText {
  grid-column-start: 1;
  grid-row: 1 / 4;
  margin-bottom: 2em;
}

#connectSection .linkPulledRight {
  justify-self: start;
  grid-row-start: 3;
  grid-column-start: 1;
}

@media screen and (min-width: $tablet) {
  .project:not(:nth-child(4)),
  .person:not(:nth-child(4)) {
    margin-top: 5.96em;
  }
  .project:nth-child(4),
  .person:nth-child(4) {
    grid-column-start: 3;
  }

  .connectText {
    grid-row: 2 / 3;
    margin-bottom: 0;
    p {
      margin: 0;
    }
  }

  .connectCard {
    grid-column-start: unset;
  }

  #connectSection .linkPulledRight {
    align-self: start;
    grid-row-start: 2;
    grid-column-start: 5;
  }
}

@media (min-width: $tablet) {
  #projectSection,
  #peopleSection,
  #connectSection {
    &:before {
      font-size: 16vw;
      width: calc(100vw - 40px);
      bottom: -20px;
    }
  }
}

@media screen and (min-width: $desktop) {
  #projectSection .project,
  #peopleSection .person {
    margin-top: 5.96em;
    grid-column-start: unset;
  }
  .connectText {
    grid-row: 1 / 2;
  }
  #connectSection .linkPulledRight {
    grid-row-start: 2;
    grid-column-start: 7;
  }
}
</style>
